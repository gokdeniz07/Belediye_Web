// src/admin/pages/AdminHome.jsx
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const AdminHome = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(null);

  const docRef = doc(db, "content", "home");

  useEffect(() => {
    const fetchData = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContent(docSnap.data().text || "");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    await setDoc(docRef, { text: content });
    setSuccess("Kaydedildi!");
    setTimeout(() => setSuccess(null), 2000);
  };

  if (loading) return <p>Yükleniyor...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Anasayfa İçeriği</h2>
      <textarea
        className="w-full h-60 p-3 border rounded mb-4"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSave}
      >
        Kaydet
      </button>
      {success && <p className="text-green-600 mt-2">{success}</p>}
    </div>
  );
};

export default AdminHome;
