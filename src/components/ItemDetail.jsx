import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../firebase/firebase';
import { CartContext } from '../CartContext';
import './itemdetail.css';

function ItemDetail() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getSingleProduct(itemId); // Obtener el producto por ID
      setProduct({ ...fetchedProduct, id: itemId }); // Asegurarse de que el producto tenga el id correcto
    };

    fetchProduct();
  }, [itemId]);

  if (!product) {
    return <p className="loading-message">Cargando detalles del producto...</p>;
  }

  const handleAddToCart = () => {
    addItemToCart(product, quantity);
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

      
      <button className="btn btn-primary" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemDetail;
