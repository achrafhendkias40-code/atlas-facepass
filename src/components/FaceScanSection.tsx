import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Camera, CheckCircle, Scan, Shield, AlertCircle } from 'lucide-react';

const FaceScanSection = () => {
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'success' | 'error'>('idle');

  const startScan = () => {
    setScanState('scanning');
    // Simulate scan process
    setTimeout(() => {
      setScanState('success');
    }, 3000);
  };

  const resetScan = () => {
    setScanState('idle');
  };

  return (
    <section id="facebuy" className="py-24 gradient-stadium relative overflow-hidden">
      {/* Floodlight Effect */}
      <div className="absolute inset-0 floodlight opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Info */}
          <div className="animate-slide-in-left">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-semibold uppercase tracking-wider mb-4">
              Technologie Exclusive
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Achetez avec </span>
              <span className="text-gradient-gold">FaceBuy</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Notre système de reconnaissance faciale garantit que chaque supporter ne peut acheter 
              qu'un seul billet. Équité totale, zéro scalping.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Données Sécurisées</h3>
                  <p className="text-sm text-muted-foreground">
                    Vos données faciales sont hashées et chiffrées. Aucune image stockée.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Scan className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Scan Rapide</h3>
                  <p className="text-sm text-muted-foreground">
                    Vérification en moins de 3 secondes grâce à notre IA avancée.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Un Visage, Un Billet</h3>
                  <p className="text-sm text-muted-foreground">
                    Garantie d'équité pour tous les supporters des Lions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Face Scan Interface */}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card rounded-3xl p-8 relative">
              {/* Scan Area */}
              <div className="relative aspect-square max-w-sm mx-auto mb-8">
                {/* Camera Frame */}
                <div className={`absolute inset-0 rounded-full border-4 transition-all duration-500 ${
                  scanState === 'idle' ? 'border-muted' :
                  scanState === 'scanning' ? 'face-frame' :
                  scanState === 'success' ? 'border-secondary glow-green' :
                  'border-destructive'
                }`}>
                  {/* Inner Circle */}
                  <div className="absolute inset-8 rounded-full bg-muted/50 flex items-center justify-center overflow-hidden">
                    {scanState === 'idle' && (
                      <Camera className="w-16 h-16 text-muted-foreground" />
                    )}
                    {scanState === 'scanning' && (
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 border-4 border-accent rounded-full animate-ping opacity-75" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Scan className="w-16 h-16 text-accent animate-pulse" />
                        </div>
                        {/* Scan Line */}
                        <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent scan-line" />
                      </div>
                    )}
                    {scanState === 'success' && (
                      <div className="flex flex-col items-center animate-scale-in">
                        <CheckCircle className="w-20 h-20 text-secondary mb-2" />
                        <span className="text-secondary font-semibold">Vérifié!</span>
                      </div>
                    )}
                    {scanState === 'error' && (
                      <div className="flex flex-col items-center animate-scale-in">
                        <AlertCircle className="w-20 h-20 text-destructive mb-2" />
                        <span className="text-destructive font-semibold">Erreur</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Corner Markers */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-accent rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-accent rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-accent rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-accent rounded-br-lg" />
              </div>

              {/* Status Text */}
              <div className="text-center mb-6">
                {scanState === 'idle' && (
                  <p className="text-muted-foreground">
                    Positionnez votre visage dans le cadre
                  </p>
                )}
                {scanState === 'scanning' && (
                  <p className="text-accent animate-pulse">
                    Analyse en cours...
                  </p>
                )}
                {scanState === 'success' && (
                  <p className="text-secondary">
                    Identité vérifiée avec succès!
                  </p>
                )}
              </div>

              {/* Action Button */}
              <div className="flex justify-center gap-4">
                {scanState === 'idle' && (
                  <Button variant="hero" size="xl" onClick={startScan}>
                    <Camera className="w-5 h-5" />
                    Démarrer le Scan
                  </Button>
                )}
                {scanState === 'success' && (
                  <>
                    <Button variant="secondary" size="lg" onClick={resetScan}>
                      Nouveau Scan
                    </Button>
                    <Button variant="gold" size="lg">
                      Continuer l'Achat
                    </Button>
                  </>
                )}
              </div>

              {/* Privacy Notice */}
              <p className="text-xs text-muted-foreground text-center mt-6">
                <Shield className="w-3 h-3 inline mr-1" />
                Vos données sont traitées conformément au RGPD
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaceScanSection;
