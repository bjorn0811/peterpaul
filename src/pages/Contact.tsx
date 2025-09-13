import { useState } from "react";
import { Header } from "@/components/Header";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Vul alle velden in",
        description: "Alle velden zijn verplicht om het formulier te versturen.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Bericht verzonden!",
      description: "Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact - Oma's Oliebollen",
            "description": "Neem contact op met Oma's Oliebollen voor vragen, opmerkingen of evenementen. Vind onze foodtruck locaties.",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Oma's Oliebollen",
              "telephone": "+31612345678",
              "email": "info@omasoliebollen.nl",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Haarlem",
                "addressCountry": "NL"
              }
            }
          })
        }}
      />

      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <div 
            className="bg-cover bg-center hero-gradient"
            style={{
              backgroundImage: `var(--gradient-hero), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQcsxL4ETIYouvVuUG88XzijdPlxF2cvmE0xevD_CnGcwExptnB7Beiv5fiqUK5Pk1rFwifrWR3y_w5pPD_4r9FxrWA81KzKGSQleHX52TyIUQuJTfAqRBQq-A44LmDekWys9xVRDiqs69BZW1HNv9EbWG4XHx8leQwCdW8w2ruaEGEI6feaI_f2XlbSMbpl-Pu-y5R8hqVd4-81UBXpZT0uCEPcSOG6OL5bOa_q2P6yK49pBgc9G3lZsqxZOlwaB6biVsyqLtYFY")`
            }}
          >
            <div className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-4xl md:text-6xl font-black text-primary-foreground">
                Neem Contact Op
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Heb je een vraag, opmerking, of wil je ons boeken voor een evenement? We horen graag van je!
              </p>
            </div>
          </div>

          {/* Contact Content */}
          <div className="py-12 bg-card">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-background p-8 rounded-lg shadow-xl border-2 border-accent">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Stuur ons een bericht
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-bold text-primary mb-2">
                      Naam
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Uw naam"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-bold text-primary mb-2">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Uw emailadres"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="block text-sm font-bold text-primary mb-2">
                      Bericht
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Uw bericht"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    variant="golden"
                    size="lg"
                    className="w-full font-bold"
                  >
                    Verstuur
                  </Button>
                </form>
              </div>

              {/* Contact Information & Map */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Contactgegevens
                  </h3>
                  <div className="space-y-4 text-lg">
                    <div className="flex items-center gap-4">
                      <Mail className="h-6 w-6 text-accent flex-shrink-0" />
                      <a 
                        href="mailto:info@omasoliebollen.nl"
                        className="hover:text-accent transition-colors"
                      >
                        info@omasoliebollen.nl
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="h-6 w-6 text-accent flex-shrink-0" />
                      <a 
                        href="tel:+31612345678"
                        className="hover:text-accent transition-colors"
                      >
                        +31 6 12345678
                      </a>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold">Standplaats Foodtruck:</p>
                        <p>Elke zaterdag op de Grote Markt, Haarlem</p>
                        <p className="text-sm text-muted-foreground">
                          (Controleer social media voor actuele locaties)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Vind Onze Foodtruck
                  </h3>
                  <div className="aspect-video w-full rounded-lg overflow-hidden border-2 border-accent shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.9332585252033!2d4.634628415801978!3d52.38131797978807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5ef6b9456e797%3A0x873a73c45731778c!2sHaarlem%2C%20Grote%20Markt!5e0!3m2!1sen!2snl!4v1678886400000!5m2!1sen!2snl"
                      title="Grote Markt Haarlem - Oma's Oliebollen Locatie"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Mobile Navigation */}
        <MobileNavigation />

        {/* Desktop Footer */}
        <footer className="hidden md:block bg-primary text-primary-foreground py-8">
          <div className="container mx-auto px-4 text-center">
            <p>© 2024 Oma's Oliebollen. Alle rechten voorbehouden.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;