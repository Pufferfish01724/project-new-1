export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'cleanser' | 'moisturizer' | 'serum' | 'mask';
  stock: number;
  isBestPick?: boolean;
}