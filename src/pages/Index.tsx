import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { MEDIA, MediaItem } from "@/data/data";
import { Helmet } from "react-helmet-async";
import { SearchBar } from "@/components/SearchBar";
import { MediaCard } from "@/components/MediaCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "movie" | "series">("all");
  const [genreFilter, setGenreFilter] = useState<string | "all">("all");

  const fuse = useMemo(() => new Fuse(MEDIA, {
    keys: ["title", "description", "genres", "cast"],
    threshold: 0.35,
  }), []);

  const results: MediaItem[] = useMemo(() => {
    const base = query ? fuse.search(query).map(r => r.item) : MEDIA;
    return base.filter((m) =>
      (typeFilter === "all" || m.type === typeFilter) &&
      (genreFilter === "all" || m.genres.includes(genreFilter))
    );
  }, [query, typeFilter, genreFilter, fuse]);

  return (
    <>
      <Helmet>
        <title>Stream – Watch Movies & Series Online</title>
        <meta name="description" content="Watch movies and series in a sleek, modern dark UI. Paste video URLs in data.ts to stream from YouTube, Internet Archive, or direct links." />
        <link rel="canonical" href={window.location.origin + "/"} />
      </Helmet>

      

      <main className="container space-y-12 py-8">
        <section className="grid gap-6 md:grid-cols-[1.6fr,1fr]">
          <div className="rounded-3xl border bg-gradient-to-br from-primary/30 to-primary/5 p-6 md:p-10">
            <div className="max-w-xl space-y-4">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-muted-foreground">Now Streaming</div>
              <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Watch movies & series in a sleek, modern dark UI</h1>
              <p className="text-muted-foreground">Paste any valid video URL in data.ts (YouTube, Internet Archive, or direct MP4) and it will play instantly.</p>
              <Button asChild size="lg"><a href="#trending">Browse Catalog</a></Button>
            </div>
          </div>
          <SearchBar
            query={query}
            onQueryChange={setQuery}
            typeFilter={typeFilter}
            onTypeFilterChange={setTypeFilter}
            genreFilter={genreFilter}
            onGenreFilterChange={setGenreFilter}
            onSubmit={() => {}}
          />
        </section>

        <section id="trending" className="space-y-4">
          <h2 className="text-xl font-semibold">Trending</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {results.map((m) => (
              <MediaCard key={m.id} item={m} />
            ))}
          </div>
          {results.length === 0 && (
            <p className="text-muted-foreground">No results. Try another query or filters.</p>
          )}
        </section>
      </main>
    </>
  );
};

export default Index;
