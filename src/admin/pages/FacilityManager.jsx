import React, { useState, useEffect, useCallback } from "react";
import { addFacility, getAllFacilities, updateFacility, deleteFacility } from "../services/adminApi";
import { auth } from "../../firebase";

const FacilityManager = () => {
  const [facilities, setFacilities] = useState([]);
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        window.location.href = '/login';
        return;
      }
      setIsAuthenticated(true);
    });

    return () => unsubscribe();
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    address: "",
    mapEmbed: ""
  });
  const [images, setImages] = useState({
    card: null,
    main: null,
    second: null,
    third: null
  });
  const [imagePreview, setImagePreview] = useState({
    card: null,
    main: null,
    second: null,
    third: null
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadFacilities = async () => {
    try {
      setLoading(true);
      const data = await getAllFacilities();
      setFacilities(data);
      setError(null);
    } catch (error) {
      console.error("Error loading facilities:", error);
      setError("Tesisler yüklenirken hata oluştu: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFacilities();
  }, []);

  const handleDrop = useCallback((acceptedFiles, imageType) => {
    if (acceptedFiles && acceptedFiles[0]) {
      const file = acceptedFiles[0];
      
      // Dosya türünü kontrol et
      if (!file.type.startsWith('image/')) {
        setError('Lütfen sadece görsel dosyaları yükleyin.');
        return;
      }

      // Dosya boyutunu kontrol et (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Görsel boyutu 5MB\'dan küçük olmalıdır.');
        return;
      }

      // Görsel önizleme URL'i oluştur
      const previewUrl = URL.createObjectURL(file);
      
      setImages(prev => ({
        ...prev,
        [imageType]: file
      }));
      
      setImagePreview(prev => ({
        ...prev,
        [imageType]: previewUrl
      }));

      setError(null); // Başarılı yüklemede hata mesajını temizle
    }
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e, imageType) => {
    const file = e.target.files[0];
    if (file) {
      handleDrop([file], imageType);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      address: "",
      mapEmbed: ""
    });
    setImages({
      card: null,
      main: null,
      second: null,
      third: null
    });
    setImagePreview({
      card: null,
      main: null,
      second: null,
      third: null
    });
    setSelectedFacility(null);
    setStatus(null);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setError(null);

    try {
      if (selectedFacility) {
        await updateFacility(selectedFacility.id, formData, images);
        setStatus("Tesis başarıyla güncellendi.");
      } else {
        await addFacility(formData, images);
        setStatus("Yeni tesis başarıyla eklendi.");
      }
      resetForm();
      await loadFacilities();
    } catch (error) {
      console.error("Operation failed:", error);
      setError("İşlem başarısız: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (facility) => {
    setSelectedFacility(facility);
    setFormData({
      name: facility.name,
      description: facility.description,
      address: facility.address,
      mapEmbed: facility.mapEmbed || ""
    });
    // Mevcut görselleri önizleme olarak ayarla
    setImagePreview({
      card: facility.imageUrl || null,
      main: facility.imageUrl || null,
      second: facility.imageUrl2 || null,
      third: facility.imageUrl3 || null
    });
  };

  const handleDelete = async (facility) => {
    if (window.confirm("Bu tesisi silmek istediğinizden emin misiniz?")) {
      try {
        const imageFileNames = [
          facility.imageFileName,
          facility.imageFileName2,
          facility.imageFileName3
        ].filter(Boolean);
        
        await deleteFacility(facility.id, imageFileNames);
        setStatus("Tesis başarıyla silindi.");
        loadFacilities();
      } catch (error) {
        setError("Silme işlemi başarısız: " + error.message);
      }
    }
  };

  const validateMapUrl = (url) => {
    if (!url) return true; // Boş URL kabul edilebilir
    return url.includes('google.com/maps');
  };

  const handleMapUrlChange = (e) => {
    const url = e.target.value;
    if (validateMapUrl(url)) {
      setFormData(prev => ({ ...prev, mapEmbed: url }));
      setError(null);
    } else {
      setError("Lütfen geçerli bir Google Maps URL'i girin");
    }
  };

  const renderImageUploader = (imageType, title) => {
    return (
      <div className="relative w-full h-32 border-2 border-dashed rounded-lg p-2 hover:border-[#003B59] transition-colors">
        {imagePreview[imageType] ? (
          <div className="relative h-full">
            <img
              src={imagePreview[imageType]}
              alt={`${title} önizleme`}
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setImages(prev => ({ ...prev, [imageType]: null }));
                setImagePreview(prev => ({ ...prev, [imageType]: null }));
              }}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ) : (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, imageType)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="mt-1 text-sm text-gray-500">
                {title} yüklemek için tıklayın veya sürükleyip bırakın
              </p>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#003B59]">Tesis Yönetimi</h1>
        <button
          onClick={() => {
            localStorage.removeItem('adminAuthenticated');
            window.location.href = '/facilities';
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
        >
          Çıkış Yap
        </button>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">
          {selectedFacility ? "Tesis Düzenle" : "Yeni Tesis Ekle"}
        </h2>
        {status && (
          <div className="p-4 mb-4 rounded bg-green-100 text-green-700">
            {status}
          </div>
        )}
        {error && (
          <div className="p-4 mb-4 rounded bg-red-100 text-red-700">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-lg mb-8">
          <div className="space-y-6">
            {/* Görseller */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {renderImageUploader('card', 'Kart Görseli')}
              {renderImageUploader('main', 'Ana Görsel')}
              {renderImageUploader('second', 'İkinci Görsel')}
              {renderImageUploader('third', 'Üçüncü Görsel')}
            </div>

            {/* Diğer form alanları */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Tesis Adı
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-[#003B59] focus:border-[#003B59] block w-full sm:text-sm border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Açıklama
              </label>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="shadow-sm focus:ring-[#003B59] focus:border-[#003B59] block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Adres
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-[#003B59] focus:border-[#003B59] block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="mapEmbed" className="block text-sm font-medium text-gray-700 mb-1">
                Google Maps URL
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="mapEmbed"
                  name="mapEmbed"
                  value={formData.mapEmbed}
                  onChange={handleMapUrlChange}
                  className="shadow-sm focus:ring-[#003B59] focus:border-[#003B59] block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Google Maps URL'sini yapıştırın"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500">
                1. Google Maps'te tesisi arayın<br />
                2. Paylaş butonuna tıklayın<br />
                3. "Harita yerleştir" sekmesine geçin<br />
                4. Verilen HTML kodundan src="" içindeki URL'yi kopyalayın<br />
                5. Bu alana yapıştırın
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? "İşleniyor..." : selectedFacility ? "Güncelle" : "Ekle"}
              </button>
              {selectedFacility && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                  İptal
                </button>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* Tesis Listesi */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Tesis Listesi</h2>
        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : facilities.length === 0 ? (
          <p className="text-center py-4 text-gray-500">Henüz tesis eklenmemiş.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {facilities.map((facility) => (
              <div key={facility.id} className="border rounded-lg p-4 relative group">
                <img
                  src={facility.images?.main || `/photo/default-facility.jpg`}
                  alt={facility.name}
                  className="w-full h-48 object-cover rounded-md mb-2"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/photo/default-facility.jpg';
                  }}
                />
                <h3 className="font-semibold text-lg">{facility.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{facility.address}</p>
                <div className="mt-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(facility)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md text-sm hover:bg-yellow-600"
                  >
                    Düzenle
                  </button>
                  <button
                    onClick={() => handleDelete(facility)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600"
                  >
                    Sil
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FacilityManager;
