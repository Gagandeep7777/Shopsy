// src/components/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total number of items and total price
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2); // Fix to 2 decimal places

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <span>{item.name} - ${item.price} x {item.quantity}</span>
                <button 
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded-full">
                  Remove
                </button>
              </li>
            ))}
          </ul>
          {/* Display total number of items and total price */}
          <div className="mt-4 flex justify-between font-semibold">
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${totalPrice}</p>
          </div>
          <button 
            onClick={handleClearCart} 
            className="mt-4 bg-gray-700 text-white py-2 px-4 rounded-full">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
