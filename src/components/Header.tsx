import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CartPopover } from "@/components/CartPopover";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useMenu";

export const Header = () => {
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, updateQuantity, getTotalPrice, getTotalItems } = useCart();
  
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname === path) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md shadow-elegant border-b-2 border-accent">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold tracking-tight text-primary">
          Oma's Oliebollen
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link 
            to="/"
            className={`text-base font-medium transition-smooth ${
              isActive("/") 
                ? "text-accent font-bold" 
                : "text-primary hover:text-accent"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/menu"
            className={`text-base font-medium transition-smooth ${
              isActive("/menu") 
                ? "text-accent font-bold" 
                : "text-primary hover:text-accent"
            }`}
          >
            Menu
          </Link>
          <a 
            className="text-base font-medium text-primary hover:text-accent transition-smooth" 
            href="/#about"
          >
            Over Ons
          </a>
          <a 
            className="text-base font-medium text-primary hover:text-accent transition-smooth" 
            href="/#contact"
          >
            Contact
          </a>
        </nav>

        <Button 
          variant="golden" 
          size="default"
          className="font-bold flex items-center gap-2 relative"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart className="h-4 w-4" />
          <span className="hidden sm:inline">Winkelwagen</span>
          {getTotalItems() > 0 && (
            <span className="ml-1">({getTotalItems()})</span>
          )}
        </Button>

        <CartPopover
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          updateQuantity={(itemId: string, change: number) => {
            const currentItem = cartItems.find(item => item.item.id === itemId);
            if (currentItem) {
              const newQuantity = currentItem.quantity + change;
              updateQuantity(itemId, newQuantity);
            }
          }}
          getTotalPrice={getTotalPrice}
        />
      </div>
    </header>
  );
};