import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-16 px-4 bg-background" id="contact">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-primary text-4xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center">
          Contact & Locaties
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center shadow-card border-2 border-accent/20 hover:border-accent transition-smooth">
            <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="text-primary font-bold text-lg mb-2">Locaties</h3>
            <p className="text-muted-foreground text-sm">
              Dagelijks op verschillende locaties door heel Nederland
            </p>
          </Card>
          
          <Card className="p-6 text-center shadow-card border-2 border-accent/20 hover:border-accent transition-smooth">
            <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="text-primary font-bold text-lg mb-2">Telefoon</h3>
            <p className="text-muted-foreground text-sm">
              +31 20 123 4567
            </p>
          </Card>
          
          <Card className="p-6 text-center shadow-card border-2 border-accent/20 hover:border-accent transition-smooth">
            <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="text-primary font-bold text-lg mb-2">Email</h3>
            <p className="text-muted-foreground text-sm">
              info@omasoliebollen.nl
            </p>
          </Card>
          
          <Card className="p-6 text-center shadow-card border-2 border-accent/20 hover:border-accent transition-smooth">
            <Clock className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="text-primary font-bold text-lg mb-2">Openingstijden</h3>
            <p className="text-muted-foreground text-sm">
              Ma-Zo: 10:00 - 20:00
            </p>
          </Card>
        </div>
        
        <div className="text-center">
          <h3 className="text-primary text-2xl font-bold mb-4">
            Wil je weten waar we morgen staan?
          </h3>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Volg ons op social media voor dagelijkse updates van onze locaties en speciale aanbiedingen!
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button variant="hero" size="lg">
              Volg Ons
            </Button>
            <Button variant="outline" size="lg">
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};