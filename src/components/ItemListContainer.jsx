import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { getProducts, getCategory } from '../firebase/firebase';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer({ greeting }) {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (category) {
        const categoryProducts = await getCategory(category); // Obtener productos por categoría
        setProducts(categoryProducts);
      } else {
        const productList = await getProducts();
        setProducts(productList);
      }
    };

    fetchProducts();  
  }, [category]);

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <ItemList products={products} />  
    </div>
  );
}

export default ItemListContainer;
