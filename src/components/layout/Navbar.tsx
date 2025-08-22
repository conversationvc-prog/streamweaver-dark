import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/auth/AuthModal";

export const Navbar = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // TODO: Replace with real auth state
  
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/7c3e48e0-0ac5-40dc-a0ab-0d09312c5bba.png" 
              alt="WEPLIX Logo" 
              className="h-8 w-auto"
            />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-6 text-sm">
            <NavLink to="/" className={({isActive}) => `story-link hover-scale ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>Home</NavLink>
            <NavLink to="/live-tv" className={({isActive}) => `story-link hover-scale ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>Live TV</NavLink>
            <NavLink to="/movies" className={({isActive}) => `story-link hover-scale ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>Movies</NavLink>
            <NavLink to="/series" className={({isActive}) => `story-link hover-scale ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>Series</NavLink>
            <NavLink to="/plans" className={({isActive}) => `story-link hover-scale ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>Plans</NavLink>
          </nav>
          
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden md:inline">Profile</span>
              </Button>
            ) : (
              <Button 
                variant="default" 
                size="sm" 
                onClick={() => setAuthModalOpen(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90"
              >
                <LogIn className="h-4 w-4" />
                <span className="hidden md:inline">Sign In</span>
              </Button>
            )}
          </div>
        </div>
        
        <AuthModal 
          isOpen={authModalOpen} 
          onClose={() => setAuthModalOpen(false)} 
        />
      </div>
    </header>
  );
};

export default Navbar;
