import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';

function CartWidget() {
  return (
    <div className="d-flex align-items-center">
      <FaShoppingCart size={24} />
      <Badge bg="primary" className="ms-2">8</Badge>
    </div>
  );
}

export default CartWidget;
