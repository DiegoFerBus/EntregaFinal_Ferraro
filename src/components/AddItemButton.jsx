import { useState, useContext } from 'react';
import { CartContext } from './CartContext';

const AddItemButton = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity };
    addItemToCart(productWithQuantity);
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
