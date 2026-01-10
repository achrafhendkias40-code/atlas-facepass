import { Button } from '@/components/ui/button';
import { Scan, Shield, Ticket } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero pattern-zellige">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floodlight effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-primary/20 to-transparent blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-secondary/20 to-transparent blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-radial from-accent/10 to-transparent blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              AFCON 2025/26 • Morocco
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-gradient-morocco">Les Lions</span>
            <br />
            <span className="text-foreground">de l'Atlas</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Achetez vos billets en toute sécurité avec la 
            <span className="text-accent font-semibold"> reconnaissance faciale</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button variant="hero" size="xl">
              <Scan className="w-5 h-5" />
              Acheter avec FaceBuy
            </Button>
            <Button variant="glass" size="xl">
              <Ticket className="w-5 h-5" />
              Voir les Matches
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold">1</div>
              <div className="text-sm text-muted-foreground">Billet par Visage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold">100%</div>
              <div className="text-sm text-muted-foreground">Sécurisé</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold">QR</div>
              <div className="text-sm text-muted-foreground">Code Unique</div>
            </div>
          </div>
        </div>

        {/* Security Badge */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '1s' }}>
          <Shield className="w-4 h-4 text-secondary" />
          <span>Données faciales hashées & chiffrées • Conforme RGPD</span>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
