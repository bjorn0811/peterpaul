import { Home, Menu, Users, Mail } from "lucide-react";

export const MobileNavigation = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 md:hidden bg-card/90 backdrop-blur-md border-t-2 border-accent z-40">
      <div className="flex justify-around items-center pt-2 pb-safe">
        <a 
          className="flex flex-col items-center justify-end gap-1 text-accent p-2" 
          href="#home"
        >
          <Home className="w-6 h-6 fill-current" />
          <p className="text-xs font-medium tracking-[0.015em]">Home</p>
        </a>
        <a 
          className="flex flex-col items-center justify-end gap-1 text-primary p-2 transition-smooth hover:text-accent" 
          href="#menu"
        >
          <Menu className="w-6 h-6" />
          <p className="text-xs font-medium tracking-[0.015em]">Menu</p>
        </a>
        <a 
          className="flex flex-col items-center justify-end gap-1 text-primary p-2 transition-smooth hover:text-accent" 
          href="#about"
        >
          <Users className="w-6 h-6" />
          <p className="text-xs font-medium tracking-[0.015em]">Over Ons</p>
        </a>
        <a 
          className="flex flex-col items-center justify-end gap-1 text-primary p-2 transition-smooth hover:text-accent" 
          href="#contact"
        >
          <Mail className="w-6 h-6" />
          <p className="text-xs font-medium tracking-[0.015em]">Contact</p>
        </a>
      </div>
      <div className="h-safe"></div>
    </footer>
  );
};