import React from 'react';
import { ShoppingCart, MessageCircle, Phone, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartItemCount, onCartClick }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full z-10 top-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg rounded-full py-4 px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-serif bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Haven For Beauty
              </h1>
              <div className="hidden md:flex items-center space-x-6 text-gray-600 dark:text-gray-300">
                <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Products</a>
                <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Reviews
                </a>
                <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={onCartClick}
                className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}