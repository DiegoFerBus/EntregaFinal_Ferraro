import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', padding: '10px 0' }}>
      {/* Logo clickeable */}
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

      {/* Botón Inicio */}
      <Link to="/" style={{ margin: '0 10px' }}>
        <button type="button" className="btn btn-dark">Inicio</button>
      </Link>

      {/* Botones de categorías */}
      <Link to="/category/Energizante" style={{ margin: '0 10px' }}>
        <button type="button" className="btn btn-dark">Energizantes</button>
      </Link>
      <Link to="/category/Jugos" style={{ margin: '0 10px' }}>
        <button type="button" className="btn btn-dark">Jugos</button>
      </Link>
      <Link to="/category/Sin alcohol" style={{ margin: '0 10px' }}>
        <button type="button" className="btn btn-dark">Sin alcohol</button>
      </Link>

      {/* Botón Contacto */}
      <Link to="/contact" style={{ margin: '0 10px' }}>
        <button type="button" className="btn btn-dark">Contacto</button>
      </Link>

      <CartWidget />
    </nav>
  );
}
