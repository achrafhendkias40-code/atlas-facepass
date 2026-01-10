import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full gradient-morocco flex items-center justify-center shadow-morocco">
                <span className="text-2xl">🦁</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-gradient-morocco">
                  CAN 2025
                </h3>
                <p className="text-xs text-muted-foreground">Les Lions de l'Atlas</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Système officiel de billetterie avec reconnaissance faciale pour la Coupe d'Afrique des Nations.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-secondary" />
              <span>Données sécurisées & conformes RGPD</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-muted-foreground hover:text-accent transition-colors text-sm">Accueil</a></li>
              <li><a href="#matches" className="text-muted-foreground hover:text-accent transition-colors text-sm">Matches</a></li>
              <li><a href="#facebuy" className="text-muted-foreground hover:text-accent transition-colors text-sm">FaceBuy</a></li>
              <li><a href="#tickets" className="text-muted-foreground hover:text-accent transition-colors text-sm">Mes Billets</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-bold mb-4 text-foreground">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">Conditions d'utilisation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">Politique de confidentialité</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">Remboursements</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <span>support@can2025.ma</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span>+212 5XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Casablanca, Morocco</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 CAN Morocco. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">Fièrement fait au 🇲🇦</span>
            <div className="flex items-center gap-2">
              <div className="w-8 h-5 rounded gradient-morocco" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
