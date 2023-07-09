import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);

  // Calcula la cantidad total de items en el carrito
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <i className="fa fa-shopping-cart"></i>
      <span className="cart-count">{totalItems}</span>
    </div>
  );
};

export default CartWidget;
