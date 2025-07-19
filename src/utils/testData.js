import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const addTestFacility = async () => {
  try {
    const docRef = await addDoc(collection(db, "facilities"), {
      name: "Test Tesis",
      description: "Bu bir test tesisidir",
      address: "Test Adresi",
      imageUrl: "/photo/menu.jpg"
    });
    console.log("Test tesisi eklendi, ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Test tesisi eklenirken hata:", error);
    throw error;
  }
};
