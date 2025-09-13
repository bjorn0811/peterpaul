import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="@container">
      <div 
        className="flex min-h-[60vh] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 items-center justify-center p-4 text-center hero-gradient"
        style={{
          backgroundImage: `var(--gradient-hero), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGgLj24Hh9hFMsBKi5Lv9qCPK6iXbZUwHxQlTJZHe-XnfzpDQbkIr6raTl0n26Nu2m64GNS2qqJopsHBiqz5adRBPSO33WyosH-3tYR54uA5QIozQMK4-Yagm4gtY2M07a5-60PvO7ge7T26Ln7Lry8N0OLM5CS0Os4AbYOqc9NYDV2ND7383v1nNZfge7R-edZ2RoHdXs-sY6dqd0GWY78pp4xHJGxLGLjHjcaCzpHPKKm9qhgC2vb0jzBYPKR21ZTmWztHAdQss")`
        }}
      >
        <h1 className="text-primary-foreground text-4xl md:text-6xl font-black leading-tight tracking-tighter max-w-4xl">
          De lekkerste Oliebollen, warm bij jou thuisbezorgd.
        </h1>
        
        <div className="flex-wrap gap-4 flex justify-center">
          <Button 
            variant="hero"
            size="lg"
          >
            Bekijk het Menu
          </Button>
          <Button 
            variant="premium"
            size="lg"
          >
            Vind de Foodtruck
          </Button>
        </div>
      </div>
    </section>
  );
};