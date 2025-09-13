import { Link, useLocation } from "react-router-dom";
import { Home, Menu, Users, Mail } from "lucide-react";

export const MobileNavigation = () => {
  const location = useLocation();
  
  const isHome = location.pathname === "/";
  const isMenu = location.pathname === "/menu";
  
  const scrollToSection = (sectionId: string) => {
    if (!isHome) {
      // If not on home page, navigate to home first, then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 md:hidden bg-card/90 backdrop-blur-md border-t-2 border-accent z-40">
      <div className="flex justify-around items-center pt-2 pb-safe">
        <Link 
          to="/"
          className={`flex flex-col items-center justify-end gap-1 p-2 ${
            isHome ? "text-accent" : "text-primary"
          }`}
        >
          <Home className={`w-6 h-6 ${isHome ? "fill-current" : ""}`} />
          <p className="text-xs font-medium tracking-[0.015em]">Home</p>
        </Link>
        <Link 
          to="/menu"
          className={`flex flex-col items-center justify-end gap-1 p-2 transition-smooth hover:text-accent ${
            isMenu ? "text-accent" : "text-primary"
          }`}
        >
          <Menu className={`w-6 h-6 ${isMenu ? "fill-current" : ""}`} />
          <p className="text-xs font-medium tracking-[0.015em]">Menu</p>
        </Link>
        <button 
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center justify-end gap-1 text-primary p-2 transition-smooth hover:text-accent"
        >
          <Users className="w-6 h-6" />
          <p className="text-xs font-medium tracking-[0.015em]">Over Ons</p>
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="flex flex-col items-center justify-end gap-1 text-primary p-2 transition-smooth hover:text-accent"
        >
          <Mail className="w-6 h-6" />
          <p className="text-xs font-medium tracking-[0.015em]">Contact</p>
        </button>
      </div>
      <div className="h-safe"></div>
    </footer>
  );
};