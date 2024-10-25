import { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import './checkout.css';

function Checkout() {
  const { cartItems, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null); // Para guardar el ID de la orden
  const [orderDetails, setOrderDetails] = useState(null); // Para mostrar los detalles
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    repetirEmail: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de formularios
    const errors = {};
    if (!formData.nombre) errors.nombre = 'El nombre es requerido';
    if (!formData.apellido) errors.apellido = 'El apellido es requerido';
    if (!formData.telefono) errors.telefono = 'El teléfono es requerido';
    if (!formData.email) errors.email = 'El email es requerido';
    if (formData.email !== formData.repetirEmail) {
      errors.repetirEmail = 'Los emails no coinciden';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Crear la orden con los datos del formulario y los productos
    const order = {
      buyer: { ...formData }, // Datos del comprador
      items: cartItems.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity
      })),
      total: getTotalPrice(),
      date: new Date().toLocaleString() // Fecha y hora de la compra
    };

    try {
      // Guardar la orden en Firebase
      const db = getFirestore();
      const ordersCollection = collection(db, 'orders');
      const docRef = await addDoc(ordersCollection, order); // Agregar la orden y obtener el ID

      setOrderId(docRef.id); // Guardar el ID de la orden
      setOrderDetails(order); // Guardar los detalles de la orden

      // Limpiar el carrito y el formulario
      clearCart();
      setFormData({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        repetirEmail: ''
      });

      // Mostrar mensaje de éxito
      Swal.fire({
        title: 'Compra realizada con éxito',
        text: `Tu orden fue generada con el ID: ${docRef.id}`,
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } catch (error) {
      console.error('Error al generar la orden: ', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al generar tu orden. Intenta nuevamente.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="checkout-container">
      <h2>Compra en Tienda Drinks</h2> <br />

      {/* Mostrar ID y detalles de la orden si existe */}
      {orderId && (
        <div className="order-confirmation">
          <h3>Orden generada con éxito</h3>
          <p>Tu ID de orden es: <strong>{orderId}</strong></p>
          <h4>Detalles del comprador:</h4>
          <p>Nombre: {orderDetails.buyer.nombre} {orderDetails.buyer.apellido}</p>
          <p>Teléfono: {orderDetails.buyer.telefono}</p>
          <p>Email: {orderDetails.buyer.email}</p>
          <h4>Detalles de la compra:</h4>
          <ul>
            {orderDetails.items.map(item => (
              <li key={item.id}>
                {item.title} - Cantidad: {item.quantity} - Precio: ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <h4>Total a pagar: ${orderDetails.total}</h4>
        </div>
      )}

      {!orderId && (
        <>
          <div className="purchase-summary">
            <h3>Resumen de tu Compra</h3>
            <ul>
              {cartItems.map(item => (
                <li key={item.id}>
                  {item.title || 'Producto sin nombre'} - Cantidad: {item.quantity} - Precio: ${item.price * item.quantity}
                </li>
              ))}
            </ul>
            <h4>Total a pagar: ${getTotalPrice()}</h4>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
              />
              {formErrors.nombre && <p className="error-message">{formErrors.nombre}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleInputChange}
              />
              {formErrors.apellido && <p className="error-message">{formErrors.apellido}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
              />
              {formErrors.telefono && <p className="error-message">{formErrors.telefono}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && <p className="error-message">{formErrors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="repetirEmail">Repetir Email</label>
              <input
                type="email"
                id="repetirEmail"
                name="repetirEmail"
                value={formData.repetirEmail}
                onChange={handleInputChange}
              />
              {formErrors.repetirEmail && <p className="error-message">{formErrors.repetirEmail}</p>}
            </div>
            <button type="submit" className="checkout-btn">Confirmar Compra</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Checkout;
