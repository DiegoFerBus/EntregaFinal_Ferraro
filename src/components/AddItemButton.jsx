import { useState, useContext } from 'react';
import { CartContext } from './CartContext'; // Asegúrate de que la ruta sea correcta

const AddItemButton = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1); // Estado para manejar la cantidad

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity }; // Añadir cantidad al producto
    addItemToCart(productWithQuantity); // Agregar al carrito
  };

  return (
    <div>
      <div>
        <button onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
      </div>
      <button className="btn btn-success" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default AddItemButton;
