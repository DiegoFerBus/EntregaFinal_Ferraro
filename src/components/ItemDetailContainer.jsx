import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
import { getSingleProduct } from '../firebase/firebase';
import './ItemDetail.css';

export default function ItemDetail() {
  const { id } = useParams();
  const { addItemToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getSingleProduct(id);
        console.log('Producto obtenido:', productData);
        setProduct(productData);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProduct(); // Llamar a la función al montar el componente
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      
      addItemToCart(product, quantity);
      setQuantity(1);
    } else {
      console.error('Producto no disponible para agregar al carrito'); // Manejo de errores
    }
  };
     
  if (!product) {
    return <p>Cargando detalles del producto...</p>; // Mostrar un mensaje mientras se cargan los datos
  } 
  return (
    <div className="item-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>

      {/* Contador para seleccionar cantidad */}
      <div className="quantity-selector">
        <button 
          className="btn btn-secondary" 
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} // Restar
        >
          -
        </button>
        <span>{quantity}</span>
        <button 
          className="btn btn-secondary" 
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>

      <button 
        className="btn btn-success" 
        onClick={handleAddToCart} // Llama a la función al hacer clic
      >
        Agregar al carrito
      </button>
    </div>
  );
}
