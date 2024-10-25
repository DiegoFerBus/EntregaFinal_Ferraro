import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../firebase/firebase';
import { CartContext } from '../CartContext'; // Importar el contexto del carrito
import './itemdetail.css';

function ItemDetail() {
  const { itemId } = useParams(); // Obtener el ID del producto desde la URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Estado para manejar la cantidad
  const { addItemToCart } = useContext(CartContext); // Obtener la función del contexto

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getSingleProduct(itemId); // Obtener el producto por ID
      setProduct({ ...fetchedProduct, id: itemId }); // Asegurarse de que el producto tenga el id correcto
    };

    fetchProduct();
  }, [itemId]);

  if (!product) {
    return <p className="loading-message">Cargando detalles del producto...</p>; // Mensaje centrado
  }

  const handleAddToCart = () => {
    addItemToCart(product, quantity); // Llamar a la función para agregar al carrito, pasando el producto con el ID correcto
  };

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className="product-image" />
      <p>{product.description || 'Descripción no disponible'}</p>
      <p>Precio: ${product.price}</p>

      {/* Control para seleccionar la cantidad */}
      <div className="quantity-control">
        <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>

      {/* Botón para agregar al carrito */}
      <button className="btn btn-primary" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemDetail;
