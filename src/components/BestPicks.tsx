import React from 'react';
import { Product } from '../types';
import { Crown } from 'lucide-react';

interface BestPicksProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default function BestPicks({ products, onAddToCart }: BestPicksProps) {
  const bestPicks = products.filter(product => product.isBestPick);

  return (
    <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 mb-12">
      <div className="flex items-center justify-center gap-2 text-purple-600 mb-6">
        <Crown className="h-6 w-6" />
        <h2 className="text-2xl font-serif">Best Picks</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {bestPicks.map((product) => (
          <div key={product.id} className="flex bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <div className="mt-4">
                  <span className="text-2xl font-bold text-purple-600">${product.price}</span>
                </div>
              </div>
              <button
                onClick={() => onAddToCart(product)}
                disabled={product.stock === 0}
                className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors disabled:bg-gray-400"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}