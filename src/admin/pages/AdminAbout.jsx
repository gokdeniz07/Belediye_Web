import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import AdminSidebar from "../components/AdminSidebar";

const AdminAbout = () => {
  const [aboutText, setAboutText] = useState("");
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);

  const docRef = doc(db, "content", "about");

  useEffect(() => {
    const fetchData = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setAboutText(docSnap.data().text || "");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    await setDoc(docRef, { text: aboutText });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (loading) return <p className="p-6">Yükleniyor...</p>;

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-6 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Hakkımızda İçeriği</h2>
        <textarea
          className="w-full h-64 p-3 border rounded mb-4"
          value={aboutText}
          onChange={(e) => setAboutText(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleSave}
        >
          Kaydet
        </button>
        {saved && <p className="text-green-600 mt-2">Kaydedildi ✅</p>}
      </div>
    </div>
  );
};

export default AdminAbout;
