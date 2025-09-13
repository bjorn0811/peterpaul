import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md shadow-elegant border-b-2 border-accent">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h2 className="text-xl font-bold tracking-tight text-primary">
          Oma's Oliebollen
        </h2>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <a 
            className="text-base font-medium text-primary hover:text-accent transition-smooth" 
            href="#home"
          >
            Home
          </a>
          <a 
            className="text-base font-medium text-primary hover:text-accent transition-smooth" 
            href="#menu"
          >
            Menu
          </a>
          <a 
            className="text-base font-medium text-primary hover:text-accent transition-smooth" 
            href="#about"
          >
            Over Ons
          </a>
          <a 
            className="text-base font-medium text-primary hover:text-accent transition-smooth" 
            href="#contact"
          >
            Contact
          </a>
        </nav>

        <Button 
          variant="golden" 
          size="default"
          className="font-bold"
        >
          Bestel Nu
        </Button>
      </div>
    </header>
  );
};