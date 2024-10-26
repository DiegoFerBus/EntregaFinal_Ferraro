import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Recuperar los items del carrito desde localStorage al iniciar la app

    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guardar los items del carrito en localStorage cada vez que cambien

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (item, quantity) => {
    const itemExists = cartItems.find((cartItem) => cartItem.id === item.id);
    
    if (itemExists) {
      // Si el producto ya existe en el carrito, actualizamos su cantidad

      setCartItems(cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      ));
    } else {
      // Si el producto no existe, lo agregamos con su cantidad
      
      setCartItems([...cartItems, { ...item, quantity }]);
    }
  };

  const updateItemQuantity = (id, quantity) => {
    if (quantity < 1) return;

    setCartItems(cartItems.map((cartItem) =>
      cartItem.id === id
        ? { ...cartItem, quantity }
        : cartItem
    ));
  };

  const removeItemFromCart = (id) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addItemToCart, 
      updateItemQuantity, 
      removeItemFromCart, 
      clearCart, 
      getTotalPrice 
    }}>
      {children}
    </CartContext.Provider>
  );
};
