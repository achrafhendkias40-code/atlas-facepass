import MatchCard from './MatchCard';

const matches = [
  {
    date: '10 Jan 2026',
    time: '20:00',
    opponent: 'Égypte',
    opponentFlag: '🇪🇬',
    venue: 'Stade Mohammed V',
    stage: 'Demi-Finale',
    ticketsLeft: 850,
    price: '500 MAD',
  },
  {
    date: '14 Jan 2026',
    time: '21:00',
    opponent: 'Nigéria',
    opponentFlag: '🇳🇬',
    venue: 'Complexe Moulay Abdallah',
    stage: 'Finale',
    ticketsLeft: 2500,
    price: '800 MAD',
  },
  {
    date: '18 Jan 2026',
    time: '18:00',
    opponent: 'Cameroun',
    opponentFlag: '🇨🇲',
    venue: 'Grand Stade de Tanger',
    stage: 'Match Amical',
    ticketsLeft: 5000,
    price: '200 MAD',
  },
];

const MatchesSection = () => {
  return (
    <section id="matches" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-zellige opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-secondary/10 to-transparent blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider mb-4">
            Prochains Matches
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Matches à </span>
            <span className="text-gradient-morocco">Venir</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Réservez vos places dès maintenant pour soutenir Les Lions de l'Atlas. 
            Un seul billet par visage pour garantir l'équité.
          </p>
        </div>

        {/* Matches Grid */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {matches.map((match, index) => (
            <MatchCard 
              key={index} 
              {...match} 
              delay={index * 150}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
          >
            Voir tous les matches
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MatchesSection;
