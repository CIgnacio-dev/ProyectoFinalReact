import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../src/Context/CartContext';
import Navbar from '../src/Components/Navbar';
import ItemListContainer from '../src/Components/ItemListContainer';
import Cart from '../src/Components/CartWidget';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
