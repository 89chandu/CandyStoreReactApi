import React from 'react';
import { useCart } from './CartProvider';
import { FaShoppingCart } from 'react-icons/fa';
import './cart.css';// Correct import path

const Cart = () => {
  const { cartItems } = useCart();

  const itemCount = cartItems.length;

  return (
    <div className="cart-icon">
      <FaShoppingCart />
      <span className="cart-item-count">{itemCount}</span>
      {/* Rest of the cart content */}
    </div>
  );
};

export default Cart;
