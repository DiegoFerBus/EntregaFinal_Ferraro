import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'; // Importar SweetAlert2
import './ContactView.css';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mostrar el popup de SweetAlert2 con animaciones personalizadas
    Swal.fire({
      title: 'Su mensaje ha sido enviado, gracias!',
      confirmButtonText: 'Listo',
      confirmButtonColor: '#2f4de5', // Puedes especificar el color aquí también
      customClass: {
        confirmButton: 'custom-button', // Aplicar la clase personalizada al botón
      },
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });

    // Resetear el formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  useEffect(() => {
    document.title = 'Tienda Drinks | Contacto';
  }, []);

  return (
    <>
      <h2 className="text-center">Déjanos tu mensaje</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Deje su mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            maxLength={100}
            required
          />
          <small className="form-text text-muted">Máximo 100 caracteres</small>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </>
  );
}
