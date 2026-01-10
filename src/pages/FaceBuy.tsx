import { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Scan, CheckCircle, Camera, ArrowLeft, Shield, AlertCircle } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

type ScanState = 'instructions' | 'scanning' | 'detecting' | 'success' | 'error';

const FaceBuy = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [scanState, setScanState] = useState<ScanState>('instructions');
  const [errorMessage, setErrorMessage] = useState('');
  const [ticketData, setTicketData] = useState<{
    id: string;
    match: string;
    date: string;
    seat: string;
    holder: string;
  } | null>(null);

  // Cleanup camera on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const startCamera = useCallback(async () => {
    try {
      setScanState('scanning');
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: 640, height: 480 }
      });
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        
        // Start face detection simulation after camera is ready
        setTimeout(() => {
          setScanState('detecting');
          
          // Simulate face detection (in production, use face-api.js or similar)
          setTimeout(() => {
            // Stop camera after detection
            if (streamRef.current) {
              streamRef.current.getTracks().forEach(track => track.stop());
            }
            
            // Generate ticket
            const ticketId = `MAR-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
            setTicketData({
              id: ticketId,
              match: 'Maroc vs Égypte',
              date: '15 Janvier 2026 • 20:00',
              seat: `Tribune VIP • Section A • Siège ${Math.floor(Math.random() * 100) + 1}`,
              holder: 'Verified User'
            });
            setScanState('success');
          }, 2500);
        }, 1500);
      }
    } catch (err) {
      console.error('Camera error:', err);
      setErrorMessage('Impossible d\'accéder à la caméra. Veuillez autoriser l\'accès.');
      setScanState('error');
    }
  }, []);

  const resetScan = () => {
    setScanState('instructions');
    setErrorMessage('');
    setTicketData(null);
  };

  return (
    <div className="min-h-screen gradient-hero pattern-zellige flex flex-col">
      {/* Header */}
      <header className="p-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="text-foreground hover:text-primary"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-lg">
          
          {/* Instructions State */}
          {scanState === 'instructions' && (
            <div className="glass-card rounded-3xl p-8 text-center animate-scale-in">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-morocco flex items-center justify-center">
                <Scan className="w-10 h-10 text-white" />
              </div>
              <h1 className="font-display text-3xl font-bold mb-4">
                <span className="text-gradient-morocco">FaceBuy</span>
              </h1>
              <p className="text-muted-foreground mb-8">
                Positionnez votre visage devant la caméra pour vérifier votre identité et obtenir votre billet unique.
              </p>
              
              <div className="space-y-4 mb-8 text-left">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-card/50">
                  <Camera className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Bonne luminosité</p>
                    <p className="text-xs text-muted-foreground">Assurez-vous d'être bien éclairé</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-card/50">
                  <Shield className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">100% Sécurisé</p>
                    <p className="text-xs text-muted-foreground">Vos données faciales sont hashées</p>
                  </div>
                </div>
              </div>
              
              <Button variant="hero" size="xl" onClick={startCamera} className="w-full">
                <Camera className="w-5 h-5" />
                Activer la Caméra
              </Button>
            </div>
          )}

          {/* Scanning & Detecting States */}
          {(scanState === 'scanning' || scanState === 'detecting') && (
            <div className="glass-card rounded-3xl p-6 animate-scale-in">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black mb-6">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover scale-x-[-1]"
                />
                
                {/* Face Frame Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-48 h-60 border-4 rounded-[4rem] transition-colors duration-500 ${
                    scanState === 'detecting' ? 'border-secondary animate-pulse' : 'border-accent/50'
                  }`}>
                    {/* Corner accents */}
                    <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-accent rounded-tl-2xl" />
                    <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-accent rounded-tr-2xl" />
                    <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-accent rounded-bl-2xl" />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-accent rounded-br-2xl" />
                  </div>
                </div>
                
                {/* Scan Line Animation */}
                {scanState === 'detecting' && (
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent animate-[scan_2s_ease-in-out_infinite]" />
                )}
              </div>
              
              <div className="text-center">
                <p className="font-medium text-lg mb-2">
                  {scanState === 'scanning' ? 'Initialisation...' : 'Détection en cours...'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {scanState === 'scanning' 
                    ? 'Préparez-vous à scanner votre visage' 
                    : 'Gardez votre visage dans le cadre'}
                </p>
              </div>
            </div>
          )}

          {/* Success State - Ticket */}
          {scanState === 'success' && ticketData && (
            <div className="animate-scale-in">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-secondary">
                  Vérification Réussie!
                </h2>
                <p className="text-muted-foreground">Votre billet est prêt</p>
              </div>
              
              {/* Ticket Card */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                {/* Top Section */}
                <div className="gradient-morocco p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇲🇦</span>
                      <span className="font-display font-bold">CAN 2026</span>
                    </div>
                    <div className="text-xs bg-white/20 px-3 py-1 rounded-full">
                      E-TICKET
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-1">{ticketData.match}</h3>
                  <p className="text-white/80">{ticketData.date}</p>
                </div>
                
                {/* Dotted Separator */}
                <div className="relative h-6 bg-card">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-background" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-6 h-6 rounded-full bg-background" />
                  <div className="absolute inset-x-6 top-1/2 border-t-2 border-dashed border-muted" />
                </div>
                
                {/* Bottom Section */}
                <div className="bg-card p-6">
                  <div className="flex gap-6">
                    {/* QR Code */}
                    <div className="bg-white p-3 rounded-xl shadow-inner">
                      <QRCodeSVG
                        value={`MOROCCO-CAN-2026-${ticketData.id}`}
                        size={120}
                        level="H"
                        fgColor="#1a1a2e"
                        bgColor="#ffffff"
                      />
                    </div>
                    
                    {/* Details */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <p className="text-xs text-muted-foreground">SIÈGE</p>
                        <p className="font-medium text-sm">{ticketData.seat}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">ID BILLET</p>
                        <p className="font-mono text-xs text-primary">{ticketData.id}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-secondary">
                        <Shield className="w-3 h-3" />
                        <span>Vérifié par FaceBuy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <Button variant="gold" className="flex-1" onClick={() => navigate('/')}>
                  Voir Mes Billets
                </Button>
                <Button variant="glass" onClick={resetScan}>
                  Nouveau Scan
                </Button>
              </div>
            </div>
          )}

          {/* Error State */}
          {scanState === 'error' && (
            <div className="glass-card rounded-3xl p-8 text-center animate-scale-in">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/20 flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-destructive" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-2">Erreur</h2>
              <p className="text-muted-foreground mb-6">{errorMessage}</p>
              <Button variant="hero" onClick={resetScan}>
                Réessayer
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2">
          <Shield className="w-4 h-4" />
          <span>Données faciales hashées & chiffrées</span>
        </div>
      </footer>
    </div>
  );
};

export default FaceBuy;
