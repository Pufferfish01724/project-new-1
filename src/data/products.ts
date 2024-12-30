import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Hydrating Rose Cleanser',
    description: 'A gentle, rose-infused cleanser that removes impurities while maintaining skin\'s natural moisture barrier.',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1601612628452-9e99ced43524?auto=format&fit=crop&q=80&w=800',
    category: 'cleanser',
    stock: 15,
    isBestPick: true
  },
  {
    id: '2',
    name: 'Vitamin C Brightening Serum',
    description: 'Powerful antioxidant serum that brightens skin and reduces dark spots.',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
    category: 'serum',
    stock: 20,
    isBestPick: true
  },
  {
    id: '3',
    name: 'Hyaluronic Moisture Cream',
    description: 'Deep hydrating moisturizer with hyaluronic acid for plump, dewy skin.',
    price: 38.99,
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&q=80&w=800',
    category: 'moisturizer',
    stock: 25
  },
  {
    id: '4',
    name: 'Clay Purifying Mask',
    description: 'Detoxifying clay mask that draws out impurities and brightens complexion.',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800',
    category: 'mask',
    stock: 18
  }
];