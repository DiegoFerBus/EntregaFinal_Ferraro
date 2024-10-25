// src/views/ProductsView/ProductsView.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategory, getProducts } from '../../firebase/firebase';
import ProductsList from '../../components/ItemList';

export default function ProductsView() {
  const [products, setProducts] = useState([]);
  const { category } = useParams(); // Obtener la categoría de la URL

  useEffect(() => {
    if (category) {
      // Filtrar productos por categoría
      getCategory(category).then((data) => {
        setProducts(data);
      });
    } else {
      // Obtener todos los productos si no hay categoría
      getProducts().then((data) => {
        setProducts(data);
      });
    }
  }, [category]);

  return (
    <div>
      <h2>{category ? `${category}` : 'Todos los Productos'}</h2>
      <ProductsList products={products} />
    </div>
  );
}
