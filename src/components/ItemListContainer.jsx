import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { getProducts, getCategory } from '../firebase/firebase'; // Asegúrate de tener esta función
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'; // Importar useParams para capturar la categoría

function ItemListContainer({ greeting }) {
  const { category } = useParams(); // Capturar la categoría de la URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (category) {
        const categoryProducts = await getCategory(category); // Obtener productos por categoría
        setProducts(categoryProducts);
      } else {
        const productList = await getProducts();  // Obtener todos los productos si no hay categoría
        setProducts(productList);
      }
    };

    fetchProducts();  
  }, [category]); // Volver a ejecutar cuando cambie la categoría

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <ItemList products={products} />  
    </div>
  );
}

export default ItemListContainer;
