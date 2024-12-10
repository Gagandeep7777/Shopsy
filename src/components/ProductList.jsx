// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: "Nike Air Max", price: 120, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQxpZHWPJNxaXnsAiMnGlIqZXcQ3Zwwuia1GILn-B-n7R48TC6egbNZ94imscWHeRGjVyec8UAwonLqF3r99EQ0Uu1DEww5f8GAmfDCU-Vb350bAUrj-Ld3rw" },
  { id: 2, name: "Adidas Ultraboost", price: 150, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQwbQ84J2IZphwn9ryUGSgQM5jzw_SRIRozj7RXiku_6mPdpofSKrnNnsGWs58YblFD5cKsCpcfseJz27TjbFBGlhWlvA3CGuwAV7w43Qk" },
  { id: 3, name: "Levi's Jeans", price: 60, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSWjBD0eQNL0rfefbNOx_RGvSpsgeeO17w4n0xBdnTsWO05ZWe_Bza7BdXP27w99Hmaqhhwxf_hfMRBrrU150YoLdzZX_XJo5_qdjnVSR7WI3eULrQUJ-4l" },
  { id: 4, name: "H&M T-Shirt", price: 30, image: "data:image/jpeg;base64,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" },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
