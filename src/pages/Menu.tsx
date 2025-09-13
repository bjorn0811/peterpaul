import { useState } from "react";
import { Header } from "@/components/Header";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Plus, Minus } from "lucide-react";
import type { FoodItem } from "@/types/menu";

const Menu = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("Alles");
  const [cart, setCart] = useState<Record<string, number>>({
    "traditionele-oliebollen": 1
  });

  const categories = ["Alles", "Oliebollen", "Beignets", "Dranken", "Overig"];

  const menuItems: FoodItem[] = [
    {
      id: "traditionele-oliebollen",
      name: "Traditionele Oliebollen",
      price: 2.50,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApFXZ2kvafek_w_PNjmYK25OJ1BxXqnP00iJ16vji8rrgm4SP-IxoB7f09PuuQd47jvuMrMrmryQQN4-4RrGSlmbUThq21Tv-qjTA6oKKm66CRnztIXXzLwoEiIrSbPtH2rELxsTkIqtPxJtK7dAullihyVFivJ8wuGkkivlvk6zuVz6gb8Cc3rXlNo2Xs3iism61joN2jFYrVWGC7sXP9YZ6eYEQTEjYmLNIPexZOLhpSDRT-h1TJfJg8lViIk2-fwqNYPzcIceI",
      category: "Oliebollen",
      description: "De klassieker, met of zonder rozijnen.",
      available: true
    },
    {
      id: "appelbeignets",
      name: "Appelbeignets",
      price: 3.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsCCdGT9F9KE517Ddj8fzWtXUS85oAfqUGfcY17XdAj-2O1oQhsOt7UZklbhzVm2zUe7YK22hLYZGtToOjoQ-d7uJw3B3XM2T0GHyyOg91i7-fj9mjFtiHnktPOzhsq3L3FkIRCKUHWv88a21vF76d5jo1ZEMLJqXeNc3p5Gcp79F8kDahgxtMgVqYxI5t8cdiSTCSmNgg84xDZcUkper06Ul4ASyku0erbUXd3H6b_dwrZICNv83cjGw-he-bDGQ15VYHj2kpcEY",
      category: "Beignets",
      description: "Flinterdunne appelplakjes in een krokant jasje.",
      available: true
    },
    {
      id: "kersenbollen",
      name: "Kersenbollen",
      price: 3.25,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd8IS18xw81rq8c0vlziEYFyhdT1XsWKaBstFnWY1Ykk1HTMQnj8CNxp4HeKEjDfBEWoHF6LP-u1q_p2F_i8u8fBoeb_CIqAcpPklrOgFuD5wCnIcF9yoSznUcd3SgDBCx9NTE9YDQZgfgAy084YKpVvgni8PaBxuorscK3ni1D-_kuZAORfVm-pFjo-qYpEUBeFoOixudG7jSK7A576IEPWAJkYc5Pk7Rf7_cSWupOWt6Wat1d8hMoybUoaRcA8a7XZYTeNwT7_w",
      category: "Oliebollen",
      description: "Oliebollen gevuld met zoete kersen.",
      available: true
    },
    {
      id: "berliner-bol",
      name: "Berliner Bol",
      price: 3.50,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApFXZ2kvafek_w_PNjmYK25OJ1BxXqnP00iJ16vji8rrgm4SP-IxoB7f09PuuQd47jvuMrMrmryQQN4-4RrGSlmbUThq21Tv-qjTA6oKKm66CRnztIXXzLwoEiIrSbPtH2rELxsTkIqtPxJtK7dAullihyVFivJ8wuGkkivlvk6zuVz6gb8Cc3rXlNo2Xs3iism61joN2jFYrVWGC7sXP9YZ6eYEQTEjYmLNIPexZOLhpSDRT-h1TJfJg8lViIk2-fwqNYPzcIceI",
      category: "Oliebollen",
      description: "Gevuld met heerlijke jam.",
      available: true
    },
    {
      id: "warme-chocolademelk",
      name: "Warme Chocolademelk",
      price: 2.75,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsCCdGT9F9KE517Ddj8fzWtXUS85oAfqUGfcY17XdAj-2O1oQhsOt7UZklbhzVm2zUe7YK22hLYZGtToOjoQ-d7uJw3B3XM2T0GHyyOg91i7-fj9mjFtiHnktPOzhsq3L3FkIRCKUHWv88a21vF76d5jo1ZEMLJqXeNc3p5Gcp79F8kDahgxtMgVqYxI5t8cdiSTCSmNgg84xDZcUkper06Ul4ASyku0erbUXd3H6b_dwrZICNv83cjGw-he-bDGQ15VYHj2kpcEY",
      category: "Dranken",
      description: "Verwarmende chocolademelk voor koude dagen.",
      available: true
    },
    {
      id: "poffertjes",
      name: "Poffertjes",
      price: 4.50,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd8IS18xw81rq8c0vlziEYFyhdT1XsWKaBstFnWY1Ykk1HTMQnj8CNxp4HeKEjDfBEWoHF6LP-u1q_p2F_i8u8fBoeb_CIqAcpPklrOgFuD5wCnIcF9yoSznUcd3SgDBCx9NTE9YDQZgfgAy084YKpVvgni8PaBxuorscK3ni1D-_kuZAORfVm-pFjo-qYpEUBeFoOixudG7jSK7A576IEPWAJkYc5Pk7Rf7_cSWupOWt6Wat1d8hMoybUoaRcA8a7XZYTeNwT7_w",
      category: "Overig",
      description: "Kleine pannenkoekenbolletjes met boter en poedersuiker.",
      available: true
    }
  ];

  const filteredItems = selectedCategory === "Alles" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const updateQuantity = (itemId: string, change: number) => {
    setCart(prev => {
      const currentQuantity = prev[itemId] || 0;
      const newQuantity = Math.max(0, currentQuantity + change);
      
      if (newQuantity === 0) {
        const { [itemId]: removed, ...rest } = prev;
        return rest;
      }
      
      return { ...prev, [itemId]: newQuantity };
    });

    if (change > 0) {
      const item = menuItems.find(i => i.id === itemId);
      toast({
        title: "Toegevoegd aan winkelwagen",
        description: `${item?.name} is toegevoegd aan je winkelwagen.`,
      });
    }
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Menu",
            "name": "Oma's Oliebollen Menu",
            "description": "Ontdek onze heerlijke, versgebakken specialiteiten. Met liefde gemaakt volgens Oma's traditionele recept.",
            "provider": {
              "@type": "Restaurant",
              "name": "Oma's Oliebollen"
            },
            "hasMenuSection": menuItems.map(item => ({
              "@type": "MenuSection",
              "name": item.category,
              "hasMenuItem": {
                "@type": "MenuItem",
                "name": item.name,
                "description": item.description,
                "offers": {
                  "@type": "Offer",
                  "price": item.price.toString(),
                  "priceCurrency": "EUR"
                }
              }
            }))
          })
        }}
      />

      <div className="relative flex min-h-screen w-full flex-col justify-between overflow-x-hidden pb-24 md:pb-0">
        <Header />
        
        <main className="flex-grow">
          <section className="py-12 px-4">
            <div className="container mx-auto">
              <h1 className="text-4xl md:text-5xl font-black text-center text-primary mb-4">
                Ons Menu
              </h1>
              <p className="text-center text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ontdek onze heerlijke, versgebakken specialiteiten. Met liefde gemaakt volgens Oma's traditionele recept.
              </p>

              {/* Category Filters */}
              <div className="mb-8 px-4">
                <div className="flex space-x-2 overflow-x-auto whitespace-nowrap no-scrollbar pb-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="flex-shrink-0"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Menu Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredItems.map((item) => {
                  const quantity = cart[item.id] || 0;
                  
                  return (
                    <div
                      key={item.id}
                      className="bg-card rounded-lg shadow-xl overflow-hidden group flex flex-col border-2 border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                    >
                      <div
                        className="w-full bg-center bg-no-repeat aspect-square bg-cover"
                        style={{ backgroundImage: `url("${item.image}")` }}
                      />
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-primary text-lg font-bold leading-tight">
                          {item.name}
                        </h3>
                        <div className="flex items-center justify-between mt-4">
                          <p className="text-primary font-bold text-lg">
                            €{item.price.toFixed(2)}
                          </p>
                          
                          {quantity > 0 ? (
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-8 h-8 p-0"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="text-lg font-bold text-primary min-w-[1.5rem] text-center">
                                {quantity}
                              </span>
                              <Button
                                size="sm"
                                variant="default"
                                className="w-8 h-8 p-0"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : (
                            <Button
                              size="sm"
                              variant="default"
                              className="w-9 h-9 p-0"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

        <MobileNavigation />
      </div>
    </>
  );
};

export default Menu;