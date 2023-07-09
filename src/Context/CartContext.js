import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalDestinations, setTotalDestinations] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setTotalDestinations((prevTotal) => prevTotal + 1);
    setTotalPrice((prevPrice) => prevPrice + item.totalPrice);
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    const removedItem = cartItems.find((item) => item.id === itemId);

    setCartItems(updatedCartItems);
    setTotalDestinations((prevTotal) => prevTotal - removedItem.quantity);
    setTotalPrice((prevPrice) => prevPrice - removedItem.totalPrice);
  };

  return (
    <CartContext.Provider value={{ cartItems, totalDestinations, totalPrice, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
