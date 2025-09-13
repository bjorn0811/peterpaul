import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-card" id="about">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-primary text-4xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center">
          Over Oma's Oliebollen
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Al meer dan 25 jaar bereiden wij met liefde en passie de lekkerste oliebollen van Nederland. 
              Onze foodtruck reist door het hele land om jullie te voorzien van warme, verse oliebollen 
              gemaakt volgens het geheime recept van oma.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Van traditionele oliebollen met rozijnen tot onze beroemde appelbeignets - 
              elk product wordt met verse ingrediënten en veel zorg bereid. 
              Onze missie is simpel: iedereen laten genieten van authentieke Nederlandse lekkernijen.
            </p>
            
            <div className="flex gap-4 pt-4">
              <Button variant="hero" size="lg">
                Onze Locaties
              </Button>
              <Button variant="outline" size="lg">
                Meer Info
              </Button>
            </div>
          </div>
          
          <Card className="shadow-card border-2 border-accent overflow-hidden">
            <div 
              className="aspect-video bg-cover bg-center"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGgLj24Hh9hFMsBKi5Lv9qCPK6iXbZUwHxQlTJZHe-XnfzpDQbkIr6raTl0n26Nu2m64GNS2qqJopsHBiqz5adRBPSO33WyosH-3tYR54uA5QIozQMK4-Yagm4gtY2M07a5-60PvO7ge7T26Ln7Lry8N0OLM5CS0Os4AbYOqc9NYDV2ND7383v1nNZfge7R-edZ2RoHdXs-sY6dqd0GWY78pp4xHJGxLGLjHjcaCzpHPKKm9qhgC2vb0jzBYPKR21ZTmWztHAdQss")`
              }}
            />
            <div className="p-6">
              <h3 className="text-primary text-xl font-bold mb-2">
                Traditie & Kwaliteit
              </h3>
              <p className="text-muted-foreground">
                Sinds 1998 zijn wij de favoriete oliebollenkraam van Nederland, 
                erkend door de Koninklijke Nederlandse Bakkersbond.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};