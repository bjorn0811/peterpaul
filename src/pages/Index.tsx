import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { KnownFromSection } from "@/components/KnownFromSection";
import { MenuSection } from "@/components/MenuSection";
import { AboutSection } from "@/components/AboutSection";
import { InstagramSection } from "@/components/InstagramSection";
import { ContactSection } from "@/components/ContactSection";
import { MobileNavigation } from "@/components/MobileNavigation";
import { useToast } from "@/hooks/use-toast";
import type { FoodItem } from "@/types/menu";

const Index = () => {
  const { toast } = useToast();

  const handleAddToCart = (item: FoodItem) => {
    toast({
      title: "Toegevoegd aan winkelwagen",
      description: `${item.name} is toegevoegd aan je winkelwagen.`,
    });
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Oma's Oliebollen",
            "description": "De lekkerste traditionele oliebollen, appelbeignets en kersenbollen van Nederland's populairste foodtruck.",
            "servesCuisine": "Dutch",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "NL"
            },
            "telephone": "+31-20-123-4567",
            "url": "https://omasoliebollen.nl",
            "image": "https://omasoliebollen.nl/og-image.jpg",
            "priceRange": "€€",
            "hasMenu": {
              "@type": "Menu",
              "hasMenuSection": [
                {
                  "@type": "MenuSection",
                  "name": "Oliebollen",
                  "hasMenuItem": [
                    {
                      "@type": "MenuItem",
                      "name": "Traditionele Oliebollen",
                      "description": "De klassieker, met of zonder rozijnen.",
                      "offers": {
                        "@type": "Offer",
                        "price": "2.50",
                        "priceCurrency": "EUR"
                      }
                    }
                  ]
                }
              ]
            }
          })
        }}
      />

      <div className="relative flex min-h-screen w-full flex-col justify-between overflow-x-hidden" id="home">
        <Header />
        
        <main>
          <HeroSection />
          <KnownFromSection />
          <MenuSection onAddToCart={handleAddToCart} />
          <AboutSection />
          <InstagramSection />
          <ContactSection />
          
          {/* Bottom padding for mobile navigation */}
          <div className="h-24 md:h-0" />
        </main>

        <MobileNavigation />
      </div>
    </>
  );
};

export default Index;
