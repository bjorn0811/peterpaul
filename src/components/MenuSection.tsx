import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import type { FoodItem } from "@/types/menu";

// Mock data - will be replaced with API data
const mockMenuItems: FoodItem[] = [
  {
    id: "1",
    name: "Traditionele Oliebollen",
    description: "De klassieker, met of zonder rozijnen.",
    price: 2.50,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApFXZ2kvafek_w_PNjmYK25OJ1BxXqnP00iJ16vji8rrgm4SP-IxoB7f09PuuQd47jvuMrMrmryQQN4-4RrGSlmbUThq21Tv-qjTA6oKKm66CRnztIXXzLwoEiIrSbPtH2rELxsTkIqtPxJtK7dAullihyVFivJ8wuGkkivlvk6zuVz6gb8Cc3rXlNo2Xs3iism61joN2jFYrVWGC7sXP9YZ6eYEQTEjYmLNIPexZOLhpSDRT-h1TJfJg8lViIk2-fwqNYPzcIceI",
    category: "oliebollen",
    available: true,
    popular: true
  },
  {
    id: "2",
    name: "Appelbeignets",
    description: "Flinterdunne appelplakjes in een krokant jasje.",
    price: 3.00,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsCCdGT9F9KE517Ddj8fzWtXUS85oAfqUGfcY17XdAj-2O1oQhsOt7UZklbhzVm2zUe7YK22hLYZGtToOjoQ-d7uJw3B3XM2T0GHyyOg91i7-fj9mjFtiHnktPOzhsq3L3FkIRCKUHWv88a21vF76d5jo1ZEMLJqXeNc3p5Gcp79F8kDahgxtMgVqYxI5t8cdiSTCSmNgg84xDZcUkper06Ul4ASyku0erbUXd3H6b_dwrZICNv83cjGw-he-bDGQ15VYHj2kpcEY",
    category: "beignets",
    available: true,
    popular: true
  },
  {
    id: "3",
    name: "Kersenbollen",
    description: "Oliebollen gevuld met zoete kersen.",
    price: 3.25,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd8IS18xw81rq8c0vlziEYFyhdT1XsWKaBstFnWY1Ykk1HTMQnj8CNxp4HeKEjDfBEWoHF6LP-u1q_p2F_i8u8fBoeb_CIqAcpPklrOgFuD5wCnIcF9yoSznUcd3SgDBCx9NTE9YDQZgfgAy084YKpVvgni8PaBxuorscK3ni1D-_kuZAORfVm-pFjo-qYpEUBeFoOixudG7jSK7A576IEPWAJkYc5Pk7Rf7_cSWupOWt6Wat1d8hMoybUoaRcA8a7XZYTeNwT7_w",
    category: "oliebollen",
    available: true,
    popular: true
  }
];

interface MenuSectionProps {
  menuItems?: FoodItem[];
  onAddToCart?: (item: FoodItem) => void;
}

export const MenuSection = ({ 
  menuItems = mockMenuItems, 
  onAddToCart 
}: MenuSectionProps) => {
  const handleAddToCart = (item: FoodItem) => {
    if (onAddToCart) {
      onAddToCart(item);
    } else {
      // Default behavior - could show toast or handle differently
      console.log(`Added ${item.name} to cart`);
    }
  };

  return (
    <section className="py-12 px-4 bg-background" id="menu">
      <h2 className="text-primary text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center">
        Meest Gekozen
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {menuItems.map((item) => (
          <Card 
            key={item.id}
            className="shadow-card overflow-hidden group flex flex-col border-2 border-accent transition-smooth hover:shadow-glow hover:-translate-y-1"
          >
            <div 
              className="w-full bg-center bg-no-repeat aspect-square bg-cover"
              style={{ backgroundImage: `url("${item.image}")` }}
            />
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-primary text-xl font-bold mb-2">
                {item.name}
              </h3>
              <p className="text-muted-foreground text-base flex-grow mb-6">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                <p className="text-primary font-bold text-lg">
                  €{item.price.toFixed(2)}
                </p>
                <Button
                  onClick={() => handleAddToCart(item)}
                  className="bg-accent text-accent-foreground rounded-full w-12 h-12 p-0 hover:bg-accent/90 transition-bounce border-2 border-primary shadow-glow"
                  disabled={!item.available}
                >
                  <ShoppingCart className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};