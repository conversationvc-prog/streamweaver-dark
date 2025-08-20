import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Tv, Play, Clapperboard, Radio, Grid, Settings, TvIcon } from "lucide-react";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Crunchy Watch – Stream Movies, Series & Live TV</title>
        <meta name="description" content="Watch movies, series, and live TV in a modern streaming platform. Access live sports, news, and entertainment from around the world." />
        <link rel="canonical" href={window.location.origin + "/"} />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 p-4 md:p-8">
        <div className="mx-auto max-w-6xl">
          {/* Header Info */}
          <div className="mb-8 text-right">
            <p className="text-muted-foreground text-sm">
              Logged in: guest
            </p>
          </div>

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

            {/* Live with EPG */}
            <Link 
              to="/live-epg" 
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 p-6 transition-transform duration-300 hover:scale-[1.02] shadow-lg"
            >
              <div className="relative z-10 flex items-center gap-3 text-white">
                <Radio className="h-8 w-8 opacity-90" />
                <span className="font-semibold">LIVE WITH EPG</span>
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