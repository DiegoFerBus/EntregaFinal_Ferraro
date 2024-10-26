import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';

function CartWidget() {
  const { cartItems } = useContext(CartContext);

  // Calcular la cantidad total de productos
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="d-flex align-items-center">
      <Link to="/cart" className="d-flex align-items-center">
        <i className="bi bi-bag-fill" style={{ fontSize: '24px' }}></i>
        {totalQuantity > 0 && (
          <Badge bg="primary" className="ms-2">{totalQuantity}</Badge>
        )}
      </Link>
    </div>
  );
}

export default CartWidget;
