// src/views/HomeView/HomeView.jsx
import { useEffect, useState } from 'react';
import ProductsList from '../../components/ProductsList';
import { getProducts } from '../../asyncMock';

export default function HomeView() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = "Tienda Drinks | Inicio";
    getProducts.then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <h2>Tienda Drinks</h2>
      <ProductsList products={products} />
    </>
  );
}
