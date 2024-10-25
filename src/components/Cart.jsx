import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const { cartItems, removeItemFromCart, clearCart, getTotalPrice, updateItemQuantity } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty text-center">
        <h2>Tu carrito está vacío</h2>
        <Link to="/products">
          <Button variant="primary">Volver a la tienda</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="text-center">Tu Carrito</h2>
      <div className="text-center">
        <Button variant="secondary" onClick={clearCart}>Vaciar Carrito</Button>
      </div>
      <br />
      <Table striped bordered hover className="text-center cart-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>
                <div className="d-flex align-items-center justify-content-center">
                  <img src={item.image} alt={item.name} className="product-image" />
                  {item.name}
                </div>
              </td>
              <td>
                <div className="quantity-selector">
                  <Button 
                    className="btn btn-secondary" 
                    onClick={() => updateItemQuantity(item.id, item.quantity > 1 ? item.quantity - 1 : 1)}
                  >
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button 
                    className="btn btn-secondary" 
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button type="button" className="btn btn-outline-danger" onClick={() => removeItemFromCart(item.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3 className="text-center">Total: ${getTotalPrice()}</h3>
      <div className="text-center">
        <Link to="/checkout">
          <Button variant="success">Finalizar Compra</Button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
