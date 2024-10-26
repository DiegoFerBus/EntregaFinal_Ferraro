
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore';

// Configuración de tu aplicación de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBZELZacaCMJ1YM5J5k_hmeKcFbxkKlwrc",
  authDomain: "e-commerce-react-d33cd.firebaseapp.com",
  projectId: "e-commerce-react-d33cd",
  storageBucket: "e-commerce-react-d33cd.appspot.com",
  messagingSenderId: "920955815993",
  appId: "1:920955815993:web:d271bd85dc37608194e5e8"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtener un producto por ID
export async function getSingleProduct(id) {
  const documentRef = doc(db, 'products', id);
  try {
    const snapshot = await getDoc(documentRef);
    return snapshot.exists() ? snapshot.data() : null; // Manejo de existencia
  } catch (error) {
    console.error("Error al obtener el documento:", error);
    return null; // Retornar null en caso de error
  }
}

// Obtener todos los productos
export async function getProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    if (querySnapshot.size !== 0) {
      const productsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return productsList;
    } else {
      console.log('Colección vacía!');
      return []; // Retornar un arreglo vacío
    }
  } catch (error) {
    console.error('Error al obtener los productos: ', error);
    return []; // Retornar un arreglo vacío en caso de error
  }
}

// Obtener productos por categoría
export async function getCategory(category) {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const filteredProducts = querySnapshot.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .filter((product) => product.category === category);
    
    return filteredProducts;
  } catch (error) {
    console.error('Error al obtener los productos por categoría: ', error);
    return [];
  }
}
