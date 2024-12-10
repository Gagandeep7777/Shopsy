// src/components/ProductCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { showToast } from '../redux/toastSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(showToast(`${product.name} has been added to your cart!`));
  };

  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-xl">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
        <button 
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
          onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
