import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { MEDIA, MediaItem } from "@/data/data";
import { Helmet } from "react-helmet-async";
import { SearchBar } from "@/components/SearchBar";
import { MediaCard } from "@/components/MediaCard";
import { Badge } from "@/components/ui/badge";
import { Tv } from "lucide-react";

const Series = () => {
  const [query, setQuery] = useState("");
  const [genreFilter, setGenreFilter] = useState<string | "all">("all");

  // Filter only series
  const series = MEDIA.filter(item => item.type === "series");

  const fuse = useMemo(() => new Fuse(series, {
    keys: ["title", "description", "genres", "cast"],
    threshold: 0.35,
  }), [series]);

  const results: MediaItem[] = useMemo(() => {
    const base = query ? fuse.search(query).map(r => r.item) : series;
    return base.filter((m) =>
      genreFilter === "all" || m.genres.includes(genreFilter)
    );
  }, [query, genreFilter, fuse, series]);

  // Get all unique genres from series
  const genres = Array.from(new Set(series.flatMap(show => show.genres))).sort();

  return (
    <>
      <Helmet>
        <title>Series - Crunchy Watch</title>
        <meta name="description" content="Watch the latest TV series and classic shows. Browse our extensive series collection." />
      </Helmet>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
            <Tv className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Series</h1>
            <p className="text-muted-foreground">Binge-watch your favorite shows</p>
          </div>
          <Badge variant="outline" className="ml-auto">
            {results.length} series
          </Badge>
        </div>

        {/* Search and Filters */}
        <div className="max-w-2xl">
          <SearchBar
            query={query}
            onQueryChange={setQuery}
            typeFilter="series"
            onTypeFilterChange={() => {}} // Disabled since we're only showing series
            genreFilter={genreFilter}
            onGenreFilterChange={setGenreFilter}
            onSubmit={() => {}}
          />
        </div>

        {/* Series Grid */}
        <div className="space-y-6">
          {results.length > 0 ? (
            <>
              {/* Featured Series */}
              {query === "" && genreFilter === "all" && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Featured Series</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {results.slice(0, 10).map((show) => (
                      <MediaCard key={show.id} item={show} />
                    ))}
                  </div>
                </div>
              )}

              {/* All Results */}
              {(query !== "" || genreFilter !== "all") && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">
                    {query ? `Search Results for "${query}"` : `${genreFilter} Series`}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {results.map((show) => (
                      <MediaCard key={show.id} item={show} />
                    ))}
                  </div>
                </div>
              )}

              {/* All Series when no search/filter */}
              {query === "" && genreFilter === "all" && results.length > 10 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">All Series</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {results.slice(10).map((show) => (
                      <MediaCard key={show.id} item={show} />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <Tv className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-semibold mb-2">No series found</h3>
              <p className="text-muted-foreground">
                {query ? `No series match "${query}"` : "No series match the selected filter"}
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Series;