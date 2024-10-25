import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext'; // Asegúrate de que la ruta sea correcta
import { getSingleProduct } from '../firebase/firebase'; // Ajusta la ruta según sea necesario
import './ItemDetail.css';

export default function ItemDetail() {
  const { id } = useParams(); // Obtener el ID del producto de la URL
  const { addItemToCart } = useContext(CartContext); // Obtener la función para agregar al carrito
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Estado para manejar la cantidad

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getSingleProduct(id); // Obtener el producto por ID
        console.log('Producto obtenido:', productData); // Asegúrate de estar obteniendo el producto correcto
        setProduct(productData); // Guardar el producto en el estado
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProduct(); // Llamar a la función al montar el componente
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      // Asegurarse de que el producto esté definido
      addItemToCart(product, quantity); // Agregar el producto al carrito con la cantidad seleccionada
      setQuantity(1); // Reiniciar la cantidad a 1 después de agregar al carrito
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
      <p>{product.description}</p> {/* Asegúrate de mostrar la descripción aquí */}

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
          onClick={() => setQuantity(quantity + 1)} // Sumar
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
