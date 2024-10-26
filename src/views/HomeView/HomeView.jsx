// src/views/HomeView/HomeView.jsx
import { useEffect, useState } from 'react';
import ProductsList from '../../components/ItemList';
import { getProducts } from '../../firebase/firebase';

export default function HomeView() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = "Tienda Drinks | Inicio";

    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h2>Tienda Drinks</h2>
      <ProductsList products={products} />
    </>
  );
}
