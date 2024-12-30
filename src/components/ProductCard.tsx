import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-pink-600">${product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
            className="bg-pink-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-pink-700 transition-colors disabled:bg-gray-400"
          >
            <Plus className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {product.stock} items in stock
        </p>
      </div>
    </div>
  );
}