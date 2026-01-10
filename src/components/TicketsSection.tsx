import TicketPreview from './TicketPreview';
import { Ticket } from 'lucide-react';

const TicketsSection = () => {
  const sampleTicket = {
    match: {
      date: '10 Jan 2026',
      time: '20:00',
      opponent: 'Égypte',
      opponentFlag: '🇪🇬',
      venue: 'Stade Mohammed V',
      stage: 'Demi-Finale',
    },
    seat: 'Tribune Est - R12 - S24',
    ticketId: 'CAN-2026-MA-001234',
    holderName: 'Ahmed Benali',
  };

  return (
    <section id="tickets" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-zellige opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            <Ticket className="w-4 h-4 inline mr-2" />
            Mes Billets
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Votre </span>
            <span className="text-gradient-morocco">E-Billet</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Votre billet sécurisé avec QR code unique. Présentez-le à l'entrée du stade 
            avec une pièce d'identité.
          </p>
        </div>

        {/* Ticket Preview */}
        <div className="max-w-md mx-auto animate-float">
          <TicketPreview {...sampleTicket} />
        </div>

        {/* Instructions */}
        <div className="max-w-2xl mx-auto mt-16">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-display font-bold text-lg mb-4 text-center">
              Comment utiliser votre billet
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-accent">1</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Présentez le QR code à l'entrée du stade
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-accent">2</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Scan facial rapide pour vérification
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-accent">3</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Accédez au stade et supportez les Lions!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
