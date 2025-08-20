import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { MEDIA, MediaItem } from "@/data/data";
import { Helmet } from "react-helmet-async";
import { SearchBar } from "@/components/SearchBar";
import { MediaCard } from "@/components/MediaCard";
import { Badge } from "@/components/ui/badge";
import { Film } from "lucide-react";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [genreFilter, setGenreFilter] = useState<string | "all">("all");

  // Filter only movies
  const movies = MEDIA.filter(item => item.type === "movie");

  const fuse = useMemo(() => new Fuse(movies, {
    keys: ["title", "description", "genres", "cast"],
    threshold: 0.35,
  }), [movies]);

  const results: MediaItem[] = useMemo(() => {
    const base = query ? fuse.search(query).map(r => r.item) : movies;
    return base.filter((m) =>
      genreFilter === "all" || m.genres.includes(genreFilter)
    );
  }, [query, genreFilter, fuse, movies]);

  // Get all unique genres from movies
  const genres = Array.from(new Set(movies.flatMap(movie => movie.genres))).sort();

  return (
    <>
      <Helmet>
        <title>Movies - Crunchy Watch</title>
        <meta name="description" content="Watch the latest movies and classic films. Browse our extensive movie collection." />
      </Helmet>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
            <Film className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Movies</h1>
            <p className="text-muted-foreground">Discover your next favorite film</p>
          </div>
          <Badge variant="outline" className="ml-auto">
            {results.length} movies
          </Badge>
        </div>

        {/* Search and Filters */}
        <div className="max-w-2xl">
          <SearchBar
            query={query}
            onQueryChange={setQuery}
            typeFilter="movie"
            onTypeFilterChange={() => {}} // Disabled since we're only showing movies
            genreFilter={genreFilter}
            onGenreFilterChange={setGenreFilter}
            onSubmit={() => {}}
          />
        </div>

        {/* Movies Grid */}
        <div className="space-y-6">
          {results.length > 0 ? (
            <>
              {/* Featured Movies */}
              {query === "" && genreFilter === "all" && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Featured Movies</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {results.slice(0, 10).map((movie) => (
                      <MediaCard key={movie.id} item={movie} />
                    ))}
                  </div>
                </div>
              )}

              {/* All Results */}
              {(query !== "" || genreFilter !== "all") && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">
                    {query ? `Search Results for "${query}"` : `${genreFilter} Movies`}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {results.map((movie) => (
                      <MediaCard key={movie.id} item={movie} />
                    ))}
                  </div>
                </div>
              )}

              {/* All Movies when no search/filter */}
              {query === "" && genreFilter === "all" && results.length > 10 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">All Movies</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {results.slice(10).map((movie) => (
                      <MediaCard key={movie.id} item={movie} />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <Film className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-semibold mb-2">No movies found</h3>
              <p className="text-muted-foreground">
                {query ? `No movies match "${query}"` : "No movies match the selected filter"}
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Movies;