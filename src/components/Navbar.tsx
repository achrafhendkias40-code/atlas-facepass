import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Ticket, User, Scan } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full gradient-morocco flex items-center justify-center shadow-morocco">
              <span className="text-2xl">🦁</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-xl text-gradient-morocco">
                CAN 2025
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">Les Lions de l'Atlas</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#accueil" className="text-foreground/80 hover:text-accent transition-colors font-medium">
              Accueil
            </a>
            <a href="#matches" className="text-foreground/80 hover:text-accent transition-colors font-medium">
              Matches
            </a>
            <a href="#facebuy" className="text-foreground/80 hover:text-accent transition-colors font-medium flex items-center gap-2">
              <Scan className="w-4 h-4" />
              FaceBuy
            </a>
            <a href="#tickets" className="text-foreground/80 hover:text-accent transition-colors font-medium flex items-center gap-2">
              <Ticket className="w-4 h-4" />
              Mes Billets
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="glass" size="sm">
              <User className="w-4 h-4" />
              Connexion
            </Button>
            <Button variant="gold" size="sm">
              S'inscrire
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#accueil" className="text-foreground/80 hover:text-accent transition-colors font-medium py-2">
                Accueil
              </a>
              <a href="#matches" className="text-foreground/80 hover:text-accent transition-colors font-medium py-2">
                Matches
              </a>
              <a href="#facebuy" className="text-foreground/80 hover:text-accent transition-colors font-medium py-2 flex items-center gap-2">
                <Scan className="w-4 h-4" />
                FaceBuy
              </a>
              <a href="#tickets" className="text-foreground/80 hover:text-accent transition-colors font-medium py-2 flex items-center gap-2">
                <Ticket className="w-4 h-4" />
                Mes Billets
              </a>
              <div className="flex gap-3 pt-4 border-t border-border/50">
                <Button variant="glass" size="sm" className="flex-1">
                  <User className="w-4 h-4" />
                  Connexion
                </Button>
                <Button variant="gold" size="sm" className="flex-1">
                  S'inscrire
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
