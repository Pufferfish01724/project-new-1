import React, { useState } from 'react';
import { Menu, X, Sun, Moon, MessageCircle, Phone } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import './FloatingNav.css';

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { icon: theme === 'dark' ? <Sun /> : <Moon />, label: 'Theme', onClick: toggleTheme },
    { icon: <MessageCircle />, label: 'Reviews', onClick: () => {} },
    { icon: <Phone />, label: 'Contact', onClick: () => {} },
  ];

  return (
    <div className="floating-nav">
      <button 
        className={`menu-toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        {isOpen ? <X /> : <Menu />}
      </button>
      
      <nav className={`menu-items ${isOpen ? 'open' : ''}`}>
        {menuItems.map((item, index) => (
          <button
            key={item.label}
            className="menu-item"
            onClick={item.onClick}
            style={{
              '--delay': `${index * 0.1}s`,
            } as React.CSSProperties}
          >
            {item.icon}
            <span className="menu-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}