export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  available: boolean;
  popular?: boolean;
  allergens?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  items: FoodItem[];
}