import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', padding: '10px 0' }}>
      <Link to="/" style={{ marginRight: '20px' }}>
        <img
          src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-alcohol-in-drinks-line-icon-vector-png-image_12262966.png"
          width="150"
          height="150"
          className="d-inline-block align-top"
          alt="Logo"
          style={{ cursor: 'pointer' }}
        />
      </Link>
      <Link to="/" style={{ margin: '0 10px' }}>
        <button type="button" className="btn btn-dark">Inicio</button>
      </Link>
      <Link to="/products" style={{ margin: '0 10px' }}>
        <button type="button" className="btn btn-dark">Energizantes</button>
      </Link>
      <Link to="/contact" style={{ margin: '0 10px' }}>
        <button type="button" className="btn btn-dark">Contacto</button>
      </Link>
      <CartWidget />
    </nav>
  );
}
