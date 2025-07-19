import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const RequireAuth = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // ✅ user state'i eklendi
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log("Kullanıcı durumu:", firebaseUser);

      if (!firebaseUser) {
        setUser(null);
        navigate("/admin/login", { replace: true });
      } else {
        setUser(firebaseUser);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) return <div>Yükleniyor...</div>;

  // ✅ Kullanıcı yoksa children'ı render etme!
  if (!user) return null;

  return children;
};

export default RequireAuth;
