import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Watch from "./pages/Watch";
import LiveTV from "./pages/LiveTV";
import Movies from "./pages/Movies";
import Series from "./pages/Series";  
import Plans from "./pages/Plans";
import Navbar from "@/components/layout/Navbar";
import { HelmetProvider } from "react-helmet-async";
import { AuthModal } from "./components/auth/AuthModal";
import { WeplixIntro } from "./components/auth/WeplixIntro";

const queryClient = new QueryClient();

const App = () => {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; tab?: "signin" | "signup" }>({
    isOpen: false
  });
  const [showIntro, setShowIntro] = useState(() => {
    // Only show intro if user hasn't seen it before
    return !localStorage.getItem('weplix-intro-seen');
  });

  const handleIntroComplete = () => {
    setShowIntro(false);
    localStorage.setItem('weplix-intro-seen', 'true');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {showIntro && <WeplixIntro onComplete={handleIntroComplete} />}
          <BrowserRouter>
            <Navbar onAuthClick={(tab) => setAuthModal({ isOpen: true, tab })} />
            <Routes>
              <Route path="/" element={<Index onAuthClick={(tab) => setAuthModal({ isOpen: true, tab })} />} />
              <Route path="/live-tv" element={<LiveTV />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/watch/:id" element={<Watch />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            
            <AuthModal
              isOpen={authModal.isOpen}
              onClose={() => setAuthModal({ isOpen: false })}
              initialTab={authModal.tab}
            />
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
