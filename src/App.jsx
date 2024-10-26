import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';
import ContactView from './views/ContactView/ContactView';
import { CartProvider } from './components/CartContext'; 

function App() {
  return (
    <CartProvider> 
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="/category/:category" element={<ItemListContainer />} /> 
          <Route path="/contact" element={<ContactView />} /> 
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
