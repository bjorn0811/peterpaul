import { Link, useLocation } from "react-router-dom";
import { Home, Menu, Users, Mail } from "lucide-react";

export const MobileNavigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname === path) return true;
    return false;
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 md:hidden bg-card/90 backdrop-blur-md border-t-2 border-accent z-40">
      <div className="flex justify-around items-center pt-2 pb-safe">
        <Link 
          to="/"
          className={`flex flex-col items-center justify-end gap-1 p-2 ${
            isActive("/") ? "text-accent" : "text-primary"
          }`}
        >
          <Home className={`w-6 h-6 ${isActive("/") ? "fill-current" : ""}`} />
          <p className="text-xs font-medium tracking-[0.015em]">Home</p>
        </Link>
        <Link 
          to="/menu"
          className={`flex flex-col items-center justify-end gap-1 p-2 transition-smooth hover:text-accent ${
            isActive("/menu") ? "text-accent" : "text-primary"
          }`}
        >
          <Menu className={`w-6 h-6 ${isActive("/menu") ? "fill-current" : ""}`} />
          <p className="text-xs font-medium tracking-[0.015em]">Menu</p>
        </Link>
        <Link 
          to="/about"
          className={`flex flex-col items-center justify-end gap-1 p-2 transition-smooth hover:text-accent ${
            isActive("/about") ? "text-accent" : "text-primary"
          }`}
        >
          <Users className={`w-6 h-6 ${isActive("/about") ? "fill-current" : ""}`} />
          <p className="text-xs font-medium tracking-[0.015em]">Over Ons</p>
        </Link>
        <a 
          href="/#contact"
          className="flex flex-col items-center justify-end gap-1 text-primary p-2 transition-smooth hover:text-accent"
        >
          <Mail className="w-6 h-6" />
          <p className="text-xs font-medium tracking-[0.015em]">Contact</p>
        </a>
      </div>
      <div className="h-safe"></div>
    </footer>
  );
};