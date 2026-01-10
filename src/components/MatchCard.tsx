import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';

interface MatchCardProps {
  date: string;
  time: string;
  opponent: string;
  opponentFlag: string;
  venue: string;
  stage: string;
  ticketsLeft: number;
  price: string;
  delay?: number;
}

const MatchCard = ({ 
  date, 
  time, 
  opponent, 
  opponentFlag, 
  venue, 
  stage, 
  ticketsLeft, 
  price,
  delay = 0 
}: MatchCardProps) => {
  const isLimited = ticketsLeft < 1000;

  return (
    <div 
      className="gradient-card rounded-2xl p-6 border border-border/50 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold group animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Stage Badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
          {stage}
        </span>
        {isLimited && (
          <span className="px-3 py-1 rounded-full bg-destructive/20 text-destructive text-xs font-semibold animate-pulse">
            Places Limitées!
          </span>
        )}
      </div>

      {/* Teams */}
      <div className="flex items-center justify-between mb-6">
        {/* Morocco */}
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-full gradient-morocco flex items-center justify-center text-3xl shadow-morocco group-hover:scale-110 transition-transform">
            🇲🇦
          </div>
          <div>
            <p className="font-display font-bold text-lg">Maroc</p>
            <p className="text-sm text-muted-foreground">Les Lions</p>
          </div>
        </div>

        {/* VS */}
        <div className="flex flex-col items-center">
          <span className="text-2xl font-black text-gradient-gold">VS</span>
        </div>

        {/* Opponent */}
        <div className="flex items-center gap-3">
          <div>
            <p className="font-display font-bold text-lg text-right">{opponent}</p>
            <p className="text-sm text-muted-foreground text-right">Adversaire</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
            {opponentFlag}
          </div>
        </div>
      </div>

      {/* Match Info */}
      <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="w-4 h-4 text-accent" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4 text-accent" />
          <span>{time}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4 text-accent" />
          <span className="truncate">{venue}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border/50">
        <div>
          <p className="text-sm text-muted-foreground">À partir de</p>
          <p className="text-2xl font-bold text-gradient-gold">{price}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Restants</p>
            <p className={`font-semibold ${isLimited ? 'text-destructive' : 'text-secondary'}`}>
              {ticketsLeft.toLocaleString()}
            </p>
          </div>
          <Button variant="scan" size="lg">
            <Ticket className="w-4 h-4" />
            Acheter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
