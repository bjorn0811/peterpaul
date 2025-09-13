import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-bold text-primary">Pagina niet gevonden</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Sorry, de pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/">Ga naar Home</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/#menu">Bekijk Menu</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
