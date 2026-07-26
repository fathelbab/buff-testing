export interface Category {
  id: number;
  name: string;
  tabName: string;
  image: string;
}

export interface Product {
  id: number;

  categoryId: number;

  name: string;
  description: string;

  image: string;

  price: number;

  featured?: boolean;
}