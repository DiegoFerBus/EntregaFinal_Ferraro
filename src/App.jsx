import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout'; // Importa el componente Checkout
import ContactView from './views/ContactView/ContactView'; // Importar el componente ContactView
import { CartProvider } from './components/CartContext'; 

function App() {
  return (
    <CartProvider> 
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} /> {/* Ruta para la página de inicio */}
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/checkout" element={<Checkout />} /> {/* Ruta para el checkout */}
          <Route path="/category/:category" element={<ItemListContainer />} /> {/* Ruta para categorías */}
          <Route path="/contact" element={<ContactView />} /> {/* Ruta para la vista de contacto */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
