import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import AdminSidebar from "../components/AdminSidebar";

const AdminContact = () => {
  const [contact, setContact] = useState({
    phone: "",
    email: "",
    address: "",
  });
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);

  const docRef = doc(db, "content", "contact");

  useEffect(() => {
    const fetchContact = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContact(docSnap.data());
      }
      setLoading(false);
    };
    fetchContact();
  }, []);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await setDoc(docRef, contact);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (loading) return <p className="p-6">Yükleniyor...</p>;

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-6 max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">İletişim Bilgileri</h2>
        <input
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          placeholder="Telefon Numarası"
          className="w-full mb-4 p-3 border rounded"
        />
        <input
          name="email"
          value={contact.email}
          onChange={handleChange}
          placeholder="E-posta"
          className="w-full mb-4 p-3 border rounded"
        />
        <textarea
          name="address"
          value={contact.address}
          onChange={handleChange}
          placeholder="Adres"
          className="w-full mb-4 p-3 border rounded h-32"
        />
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Kaydet
        </button>
        {saved && <p className="text-green-600 mt-3">Kaydedildi ✅</p>}
      </div>
    </div>
  );
};

export default AdminContact;
