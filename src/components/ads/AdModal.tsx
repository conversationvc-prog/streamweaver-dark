import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AdBanner } from "@/data/liveData";

interface AdModalProps {
  ad: AdBanner;
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export const AdModal = ({ ad, isOpen, onClose, onComplete }: AdModalProps) => {
  const [countdown, setCountdown] = useState(ad.duration);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    setCountdown(ad.duration);
    setCanSkip(false);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onComplete();
          return 0;
        }
        
        // Allow skipping after 5 seconds
        if (prev <= ad.duration - 5) {
          setCanSkip(true);
        }
        
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, ad.duration, onComplete]);

  if (!isOpen) return null;

  const handleSkip = () => {
    if (canSkip) {
      onComplete();
    }
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-full h-full max-w-4xl max-h-[80vh] mx-4">
        {/* Close button (always available) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        {/* Countdown and Skip Button */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-4">
          <div className="bg-black/50 px-3 py-1 rounded-full text-white text-sm">
            Ad: {countdown}s
          </div>
          {canSkip && (
            <Button
              onClick={handleSkip}
              variant="secondary"
              size="sm"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
            >
              Skip Ad
            </Button>
          )}
        </div>

        {/* Ad Content */}
        <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <div className="text-center space-y-6 p-8">
            <img
              src={ad.image}
              alt={ad.title}
              className="w-full max-w-2xl h-auto rounded-lg shadow-2xl mx-auto"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop';
              }}
            />
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">{ad.title}</h2>
              <p className="text-white/80 text-lg max-w-lg mx-auto">
                Discover amazing deals and offers. Click to learn more!
              </p>
              
              <Button
                onClick={() => window.open(ad.url, '_blank')}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-3 text-lg font-semibold"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-linear"
            style={{
              width: `${((ad.duration - countdown) / ad.duration) * 100}%`
            }}
          />
        </div>
      </div>
    </div>
  );
};