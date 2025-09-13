import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { MobileNavigation } from "@/components/MobileNavigation";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Over Ons - Oma's Oliebollen",
            "description": "Het verhaal achter de lekkerste oliebollen van Nederland. Ontdek ons geheime familierecept en onze waarden.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Oma's Oliebollen",
              "description": "Nederlandse foodtruck gespecialiseerd in traditionele oliebollen volgens Oma's geheime recept"
            }
          })
        }}
      />

      <div className="relative flex min-h-screen w-full flex-col justify-between overflow-x-hidden pb-24 md:pb-0">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-black text-primary mb-4">
                Over Ons
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Het verhaal achter de lekkerste oliebollen van Nederland.
              </p>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Het Geheime Recept van Oma
                </h2>
                <p className="text-muted-foreground mb-4">
                  Het begon allemaal in een klein keukentje, waar Oma met liefde en geduld haar beroemde oliebollen bakte. 
                  Haar recept, een familiegeheim dat van generatie op generatie is doorgegeven, is de kern van onze smaak. 
                  We gebruiken alleen de beste ingrediënten, precies zoals Oma dat deed.
                </p>
                <p className="text-muted-foreground">
                  Elke oliebol is een stukje traditie, een herinnering aan de warmte en gezelligheid van vroeger. 
                  Die authentieke smaak en dat gevoel willen we met iedereen delen.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  alt="Traditionele Nederlandse keuken waar oliebollen worden gemaakt"
                  className="rounded-lg shadow-xl border-4 border-accent w-full h-auto object-cover aspect-[4/3]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGgLj24Hh9hFMsBKi5Lv9qCPK6iXbZUwHxQlTJZHe-XnfzpDQbkIr6raTl0n26Nu2m64GNS2qqJopsHBiqz5adRBPSO33WyosH-3tYR54uA5QIozQMK4-Yagm4gtY2M07a5-60PvO7ge7T26Ln7Lry8N0OLM5CS0Os4AbYOqc9NYDV2ND7383v1nNZfge7R-edZ2RoHdXs-sY6dqd0GWY78pp4xHJGxLGLjHjcaCzpHPKKm9qhgC2vb0jzBYPKR21ZTmWztHAdQss"
                />
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-12 md:py-20 bg-card">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Onze Waarden
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-background rounded-lg shadow-lg border-2 border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Passie</h3>
                  <p className="text-muted-foreground">
                    We bakken met ons hart. Elke dag opnieuw streven we naar de perfecte oliebol, vol van smaak en liefde.
                  </p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg shadow-lg border-2 border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Kwaliteit</h3>
                  <p className="text-muted-foreground">
                    Alleen de beste, verse ingrediënten zijn goed genoeg voor ons beslag. Dat proef je.
                  </p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg shadow-lg border-2 border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Gezelligheid</h3>
                  <p className="text-muted-foreground">
                    Oma's Oliebollen brengt mensen samen. Het is meer dan een snack, het is een moment van pure Hollandse gezelligheid.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Klaar voor een Smaakavontuur?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Ervaar zelf de magie van Oma's recept. Vind onze foodtruck of bestel direct online voor een versgebakken traktatie.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  variant="premium"
                  size="lg"
                >
                  Vind de Foodtruck
                </Button>
                <Link to="/menu">
                  <Button 
                    variant="outline"
                    size="lg"
                  >
                    Bekijk het Menu
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <MobileNavigation />
      </div>
    </>
  );
};

export default About;