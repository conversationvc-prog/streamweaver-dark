import { useEffect, useState } from "react";

interface WeplixIntroProps {
  onComplete: () => void;
}

export const WeplixIntro = ({ onComplete }: WeplixIntroProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 2000); // Give time for fade out animation
    }, 9500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] ${fadeOut ? 'fade-out' : ''}`}>
      <style>{`
        .intro-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: radial-gradient(circle at center, #0d0d0d 0%, #000 100%);
          perspective: 1400px;
          overflow: hidden;
          animation: cameraZoom 6s ease-in-out forwards;
        }

        .aura {
          position: absolute;
          width: 900px;
          height: 900px;
          background: radial-gradient(circle, rgba(255,0,0,0.45) 0%, transparent 70%),
                      radial-gradient(circle, rgba(0,0,255,0.2) 0%, transparent 70%);
          border-radius: 50%;
          z-index: 0;
          animation: auraPulse 8s infinite ease-in-out;
          filter: blur(60px);
        }

        @keyframes auraPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }

        .strand {
          position: absolute;
          width: 8px;
          height: 100%;
          background: linear-gradient(to bottom, rgba(255,0,0,1), transparent);
          top: 0;
          filter: blur(2px);
          transform: rotateX(25deg) scaleY(1.2);
          opacity: 0;
          animation: strandAnim 3s ease-out forwards;
        }

        @keyframes strandAnim {
          0% { transform: translateY(-150%) scaleY(0.4) rotateX(25deg); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateY(150%) scaleY(1.2) rotateX(25deg); opacity: 0; }
        }

        .intro-logo {
          font-size: 8rem;
          font-weight: 900;
          letter-spacing: 14px;
          position: relative;
          color: transparent;
          background: linear-gradient(90deg, #ff1a1a, #ff3333, #990000);
          -webkit-background-clip: text;
          background-clip: text;
          opacity: 0;
          transform: scale(0.5) translateY(60px) rotateX(25deg);
          animation: logoReveal 5s cubic-bezier(0.2, 0.6, 0.2, 1) forwards 3s;
          text-shadow: 
            0 0 40px rgba(255,0,0,0.9),
            0 0 120px rgba(255,0,0,0.6),
            0 0 250px rgba(255,0,0,0.5);
          z-index: 10;
          font-family: "Arial Black", sans-serif;
        }

        @keyframes logoReveal {
          0%   { opacity: 0; transform: scale(0.5) translateY(60px) rotateX(25deg); }
          70%  { opacity: 1; transform: scale(1.1) translateY(0) rotateX(0deg); }
          100% { opacity: 1; transform: scale(1) translateY(0) rotateX(0deg); }
        }

        .intro-logo::before {
          content: "";
          position: absolute;
          top: 0;
          left: -200%;
          width: 200%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.7), transparent);
          transform: skewX(-25deg);
          animation: flare 5s ease-in-out 4s forwards;
        }

        @keyframes flare {
          0% { left: -200%; }
          100% { left: 200%; }
        }

        @keyframes cameraZoom {
          0%   { transform: scale(1.4); }
          100% { transform: scale(1); }
        }

        .fade-out {
          animation: fadeOut 2s ease-in forwards;
        }

        @keyframes fadeOut {
          to { opacity: 0; visibility: hidden; }
        }

        @media (max-width: 768px) {
          .intro-logo {
            font-size: 4rem;
            letter-spacing: 8px;
          }
        }
      `}</style>
      
      <div className="intro-container">
        <div className="aura"></div>
        
        <div className="strand" style={{ left: '30%', animationDelay: '0s' }}></div>
        <div className="strand" style={{ left: '50%', animationDelay: '.4s' }}></div>
        <div className="strand" style={{ left: '70%', animationDelay: '.8s' }}></div>
        
        <div className="intro-logo">WEPLIX</div>
      </div>
    </div>
  );
};