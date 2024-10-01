// src/App.jsx
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import ProductsView from './views/ProductsView/ProductsView';
import ContactView from './views/ContactView/ContactView';
import ProductView from './views/ProductView/ProductView';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/products" element={<ProductsView category="Energizante" />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="/product/:id" element={<ProductView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
