import { db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

// Görsel sıkıştırma fonksiyonu
const compressImage = (file, options = {}) => {
  const {
    maxWidth = 800,    // Varsayılan maksimum genişlik
    quality = 0.7,     // Varsayılan kalite
    imageType = 'card' // Varsayılan görsel tipi
  } = options;

  // Görsel tipine göre boyutları ayarla
  const imageSettings = {
    card: { maxWidth: 800, quality: 0.7 },     // Liste görünümü için
    main: { maxWidth: 1000, quality: 0.7 },    // Ana görsel için
    gallery: { maxWidth: 800, quality: 0.65 }  // Galeri görselleri için
  };

  // Kullanılacak ayarları belirle
  const settings = imageSettings[imageType] || { maxWidth, quality };

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // En boy oranını koru ama maksimum genişliği sınırla
        let width = img.width;
        let height = img.height;
        if (width > settings.maxWidth) {
          height = Math.round((height * settings.maxWidth) / width);
          width = settings.maxWidth;
        }

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        // JPEG formatında sıkıştırılmış veri
        canvas.toBlob((blob) => {
          resolve(blob);
        }, 'image/jpeg', settings.quality);
      };

      img.onerror = (error) => reject(error);
    };
    reader.onerror = (error) => reject(error);
  });
};

// Dosya uzantısını kontrol et
const isValidImageType = (file) => {
  const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  return validTypes.includes(file.type);
};

// Dosya boyutunu kontrol et (max 5MB)
const isValidFileSize = (file) => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  return file.size <= maxSize;
};

// Dosyayı Base64'e çevir (sıkıştırılmış)
const convertToBase64 = async (file, imageType = 'card') => {
  if (!isValidFileSize(file)) {
    throw new Error("Dosya boyutu 5MB'dan küçük olmalıdır.");
  }

  try {
    // Görseli sıkıştır
    const compressedBlob = await compressImage(file, { imageType });
    
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(compressedBlob);
      reader.onload = () => {
        const base64String = reader.result;
        const stringSize = base64String.length * 0.75;
        
        if (stringSize > 900 * 1024) { // 900KB (güvenli sınır)
          reject(new Error("İşlenmiş görsel boyutu çok büyük. Lütfen daha küçük bir görsel seçin."));
          return;
        }
        
        resolve(base64String);
      };
      reader.onerror = (error) => reject(new Error("Dosya okunamadı: " + error.message));
    });
  } catch (error) {
    throw new Error("Görsel işlenirken hata oluştu: " + error.message);
  }
};

// Tesisleri getir
export const getAllFacilities = async () => {
  try {
    console.log('Getting all facilities from Firestore...');
    const facilitiesRef = collection(db, "facilities");
    const querySnapshot = await getDocs(facilitiesRef);
    
    console.log('Query snapshot:', querySnapshot.size, 'documents found');
    
    if (querySnapshot.empty) {
      console.log('No facilities found in Firestore');
      return [];
    }

    const facilities = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log('Processing facility document:', doc.id, data);
      facilities.push({
        id: doc.id,
        name: data.name || '',
        description: data.description || '',
        address: data.address || '',
        mapEmbed: data.mapEmbed || '',
        images: {
          card: data.images?.card || data.images?.main || '', // Geriye dönük uyumluluk için
          main: data.images?.main || '',
          second: data.images?.second || '',
          third: data.images?.third || ''
        },
        createdAt: data.createdAt ? data.createdAt.toDate() : new Date()
      });
    });
    
    console.log('Processed facilities:', facilities.length);
    return facilities;
  } catch (error) {
    console.error("Firestore error:", error);
    if (error.code === 'permission-denied') {
      throw new Error("Veritabanına erişim izni reddedildi. Lütfen daha sonra tekrar deneyin.");
    }
    throw new Error(`Tesisler getirilirken hata oluştu: ${error.message}`);
  }
};

// Tesis Ekle
export const addFacility = async (facilityData, images) => {
  try {
    // Base64 görsellerini hazırla
    const imageData = {};
    
    // Kart görseli için kontrol
    if (images.card) {
      if (!isValidImageType(images.card)) {
        throw new Error("Kart görseli geçersiz formatta.");
      }
      imageData.card = await convertToBase64(images.card, 'card');
    }

    // Diğer görseller için kontrol
    if (images.main) {
      if (!isValidImageType(images.main)) {
        throw new Error("Ana görsel geçersiz formatta.");
      }
      imageData.main = await convertToBase64(images.main, 'main');
    }
    if (images.second) {
      if (!isValidImageType(images.second)) {
        throw new Error("İkinci görsel geçersiz formatta.");
      }
      imageData.second = await convertToBase64(images.second, 'gallery');
    }
    if (images.third) {
      if (!isValidImageType(images.third)) {
        throw new Error("Üçüncü görsel geçersiz formatta.");
      }
      imageData.third = await convertToBase64(images.third, 'gallery');
    }

    // Firestore'a gönderilecek veriyi hazırla
    const firestoreData = {
      name: facilityData.name || '',
      description: facilityData.description || '',
      address: facilityData.address || '',
      mapEmbed: facilityData.mapEmbed || '',
      createdAt: new Date(),
      images: imageData
    };

    try {
      const docRef = await addDoc(collection(db, "facilities"), firestoreData);
      console.log("Tesis başarıyla eklendi, ID:", docRef.id);
      
      return {
        id: docRef.id,
        ...firestoreData,
        images: imageData
      };
    } catch (firestoreError) {
      console.error('Firestore\'a veri eklenirken hata:', firestoreError);
      throw new Error(`Tesis kaydedilirken hata oluştu: ${firestoreError.message}`);
    }
  } catch (error) {
    console.error('Tesis eklenirken hata:', error);
    if (error.message.includes("Dosya boyutu") || error.message.includes("görsel boyutu")) {
      throw new Error(`Görsel yükleme hatası: ${error.message}`);
    }
    throw new Error(`Tesis eklenirken hata oluştu: ${error.message}`);
  }
};

// Tesis Güncelle
export const updateFacility = async (id, facilityData, images) => {
  try {
    const facilityRef = doc(db, "facilities", id);
    
    // Yeni görseller varsa Base64'e çevir
    const imageData = {};
    
    // Kart görseli için kontrol
    if (images.card) {
      if (!isValidImageType(images.card)) {
        throw new Error("Kart görseli geçersiz formatta.");
      }
      imageData.card = await convertToBase64(images.card, 'card');
    }

    // Diğer görseller için kontrol
    if (images.main) {
      if (!isValidImageType(images.main)) {
        throw new Error("Ana görsel geçersiz formatta.");
      }
      imageData.main = await convertToBase64(images.main, 'main');
    }
    if (images.second) {
      if (!isValidImageType(images.second)) {
        throw new Error("İkinci görsel geçersiz formatta.");
      }
      imageData.second = await convertToBase64(images.second, 'gallery');
    }
    if (images.third) {
      if (!isValidImageType(images.third)) {
        throw new Error("Üçüncü görsel geçersiz formatta.");
      }
      imageData.third = await convertToBase64(images.third, 'gallery');
    }

    // Firestore'u güncelle
    const updateData = {
      name: facilityData.name || '',
      description: facilityData.description || '',
      address: facilityData.address || '',
      mapEmbed: facilityData.mapEmbed || '',
      updatedAt: new Date()
    };

    // Sadece yeni görsel yüklendiyse görsel verilerini güncelle
    if (Object.keys(imageData).length > 0) {
      updateData.images = imageData;
    }

    await updateDoc(facilityRef, updateData);
    
    return {
      id,
      ...facilityData,
      images: imageData
    };
  } catch (error) {
    console.error('Tesis güncellenirken hata:', error);
    throw new Error(`Tesis güncellenirken hata oluştu: ${error.message}`);
  }
};

// Tesis Sil
export const deleteFacility = async (id) => {
  try {
    await deleteDoc(doc(db, "facilities", id));
  } catch (error) {
    console.error('Tesis silinirken hata:', error);
    throw new Error(`Tesis silinirken hata oluştu: ${error.message}`);
  }
};