import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Tv, Play, Clapperboard, Crown, Grid, Settings, TvIcon, Star, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface IndexProps {
  onAuthClick?: (tab?: "signin" | "signup") => void;
}

const Index = ({ onAuthClick }: IndexProps) => {

  return (
    <>
      <Helmet>
        <title>WEPLIX – Stream Movies, Series & Live TV | Premium Entertainment Platform</title>
        <meta name="description" content="Stream unlimited movies, series, and live TV on WEPLIX. Choose FREE with ads or Premium ad-free experience. Access global content in stunning 4K quality." />
        <link rel="canonical" href={window.location.origin + "/"} />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 backdrop-blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5" />
          <div className="relative mx-auto max-w-7xl px-4 py-20">
            <div className="text-center">
              <div className="mb-8 inline-flex items-center gap-3">
                <img 
                  src="/lovable-uploads/7c3e48e0-0ac5-40dc-a0ab-0d09312c5bba.png" 
                  alt="WEPLIX" 
                  className="h-16 w-auto animate-float"
                />
              </div>
              
              <h1 className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Stream Everything
                </span>
                <br />
                <span className="text-foreground">Everywhere</span>
              </h1>
              
              <p className="mb-8 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover unlimited movies, series, and live TV from around the world. 
                Start free with ads or upgrade to premium for the ultimate streaming experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                  size="lg"
                  onClick={() => onAuthClick?.("signup")}
                  className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link to="/plans">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="px-8 py-4 text-lg rounded-2xl border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                  >
                    View Plans
                  </Button>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-muted-foreground">Movies & Series</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500 mb-2">500+</div>
                  <div className="text-muted-foreground">Live Channels</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-2">56+</div>
                  <div className="text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl p-4 md:p-8">

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Live TV - Large Card */}
            <Link 
              to="/live-tv" 
              className="md:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-500 to-teal-600 p-8 transition-transform duration-300 hover:scale-[1.02] shadow-xl"
            >
              <div className="relative z-10 flex h-full flex-col justify-center text-center text-white">
                <TvIcon className="mx-auto mb-6 h-16 w-16 opacity-90" />
                <h2 className="text-3xl font-bold mb-2">LIVE TV</h2>
                <p className="text-blue-100 opacity-90">Watch live channels</p>
              </div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
            </Link>

            {/* Movies */}
            <Link 
              to="/movies" 
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 p-8 transition-transform duration-300 hover:scale-[1.02] shadow-xl"
            >
              <div className="relative z-10 flex h-full flex-col justify-center text-center text-white">
                <Play className="mx-auto mb-4 h-12 w-12 opacity-90" />
                <h2 className="text-2xl font-bold">MOVIES</h2>
              </div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
            </Link>

            {/* Series */}
            <Link 
              to="/series" 
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-600 p-8 transition-transform duration-300 hover:scale-[1.02] shadow-xl"
            >
              <div className="relative z-10 flex h-full flex-col justify-center text-center text-white">
                <Clapperboard className="mx-auto mb-4 h-12 w-12 opacity-90" />
                <h2 className="text-2xl font-bold">SERIES</h2>
              </div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
            </Link>

            {/* Plans */}
            <Link 
              to="/plans" 
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-6 transition-transform duration-300 hover:scale-[1.02] shadow-lg"
            >
              <div className="relative z-10 flex items-center gap-3 text-white">
                <Crown className="h-8 w-8 opacity-90" />
                <span className="font-semibold">PLANS</span>
              </div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
            </Link>

            {/* Multi-Screen */}
            <Link 
              to="/multi-screen" 
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-500 to-green-600 p-6 transition-transform duration-300 hover:scale-[1.02] shadow-lg"
            >
              <div className="relative z-10 flex items-center gap-3 text-white">
                <Grid className="h-8 w-8 opacity-90" />
                <span className="font-semibold">MULTI-SCREEN</span>
              </div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
            </Link>

            {/* Settings */}
            <Link 
              to="/settings" 
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-500 to-gray-600 p-6 transition-transform duration-300 hover:scale-[1.02] shadow-lg"
            >
              <div className="relative z-10 flex items-center gap-3 text-white">
                <Settings className="h-8 w-8 opacity-90" />
                <span className="font-semibold">SETTINGS</span>
              </div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;