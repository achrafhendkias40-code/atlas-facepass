import { Calendar, MapPin, Clock, User, QrCode } from 'lucide-react';

interface TicketPreviewProps {
  match: {
    date: string;
    time: string;
    opponent: string;
    opponentFlag: string;
    venue: string;
    stage: string;
  };
  seat: string;
  ticketId: string;
  holderName: string;
}

const TicketPreview = ({ match, seat, ticketId, holderName }: TicketPreviewProps) => {
  return (
    <div className="relative max-w-md mx-auto">
      {/* Ticket Container */}
      <div className="relative overflow-hidden">
        {/* Main Ticket Body */}
        <div className="gradient-morocco rounded-t-3xl p-6 pb-12 relative">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 pattern-zellige opacity-20" />
          
          {/* Header */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xl">🦁</span>
                </div>
                <div>
                  <p className="font-display font-bold text-white text-sm">CAN 2025</p>
                  <p className="text-white/70 text-xs">Morocco</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase">
                {match.stage}
              </span>
            </div>

            {/* Teams */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl mb-2 mx-auto">
                  🇲🇦
                </div>
                <p className="font-display font-bold text-white">Maroc</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-white/90">VS</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl mb-2 mx-auto">
                  {match.opponentFlag}
                </div>
                <p className="font-display font-bold text-white">{match.opponent}</p>
              </div>
            </div>

            {/* Match Info */}
            <div className="grid grid-cols-3 gap-2 text-white/90 text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{match.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{match.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span className="truncate">{match.venue}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tear Line */}
        <div className="relative h-8 bg-background flex items-center justify-between px-4">
          <div className="w-8 h-8 rounded-full bg-background absolute -left-4 top-0" />
          <div className="flex-1 border-t-2 border-dashed border-muted mx-4" />
          <div className="w-8 h-8 rounded-full bg-background absolute -right-4 top-0" />
        </div>

        {/* Ticket Footer */}
        <div className="glass-card rounded-b-3xl p-6 pt-2">
          <div className="flex items-start justify-between">
            {/* Holder Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Titulaire</span>
              </div>
              <p className="font-display font-bold text-lg mb-1">{holderName}</p>
              <p className="text-sm text-muted-foreground mb-3">Vérifié par FaceBuy</p>
              
              <div className="flex gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Place</p>
                  <p className="font-bold text-accent">{seat}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Billet #</p>
                  <p className="font-mono text-sm">{ticketId}</p>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center p-2 shadow-gold">
                <div className="w-full h-full bg-gradient-to-br from-morocco-dark to-morocco-green rounded-lg flex items-center justify-center">
                  <QrCode className="w-12 h-12 text-white" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Scannez à l'entrée</p>
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-4 pt-4 border-t border-border flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span>Billet vérifié et sécurisé</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPreview;
