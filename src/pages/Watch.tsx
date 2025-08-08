import { useParams, Link } from "react-router-dom";
import { MEDIA, MediaItem } from "@/data/data";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";

const Watch = () => {
  const { id } = useParams();
  const item = useMemo(() => MEDIA.find((m) => m.id === id), [id]);

  const [seasonId, setSeasonId] = useState<string | undefined>(() =>
    item?.type === "series" ? item.seasons?.[0]?.id : undefined
  );

  const currentSeason = useMemo(() =>
    item?.type === "series" ? item.seasons?.find((s) => s.id === seasonId) : undefined,
  [item, seasonId]);

  const [episodeId, setEpisodeId] = useState<string | undefined>(() =>
    currentSeason?.episodes?.[0]?.id
  );

  const currentEpisode = useMemo(() =>
    currentSeason?.episodes?.find((e) => e.id === episodeId),
  [currentSeason, episodeId]);

  if (!item) {
    return (
      <div className="container py-10">
        <p className="text-muted-foreground">Not found.</p>
        <Button className="mt-4" asChild><Link to="/">Go Home</Link></Button>
      </div>
    );
  }

  const pageTitle = `${item.title} – Stream`;
  const pageDescription = item.description.slice(0, 150);

  return (
    <main className="container space-y-8 py-6">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": item.type === 'movie' ? 'Movie' : 'TVSeries',
            "name": item.title,
            "description": item.description,
            "genre": item.genres,
            "datePublished": item.year,
            "aggregateRating": item.rating ? { "@type": "AggregateRating", "ratingValue": item.rating, "bestRating": 10 } : undefined,
          })}
        </script>
      </Helmet>

      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <section className="space-y-4">
          <h1 className="text-2xl font-bold tracking-tight">{item.title}</h1>
          <Card className="p-3">
            {item.type === "movie" && item.source && (
              <VideoPlayer url={item.source.url} />
            )}
            {item.type === "series" && (
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Select value={seasonId} onValueChange={(v) => { setSeasonId(v); const first = item.seasons?.find(s => s.id === v)?.episodes?.[0]?.id; setEpisodeId(first); }}>
                    <SelectTrigger className="w-[160px]"><SelectValue placeholder="Season" /></SelectTrigger>
                    <SelectContent>
                      {item.seasons?.map((s) => (
                        <SelectItem key={s.id} value={s.id}>Season {s.number}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={episodeId} onValueChange={(v) => setEpisodeId(v)}>
                    <SelectTrigger className="w-[200px]"><SelectValue placeholder="Episode" /></SelectTrigger>
                    <SelectContent>
                      {currentSeason?.episodes?.map((e) => (
                        <SelectItem key={e.id} value={e.id}>Ep {e.number}: {e.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {currentEpisode && <VideoPlayer url={currentEpisode.source.url} />}
              </div>
            )}
          </Card>
        </section>

        <aside className="space-y-4">
          <Card className="p-4">
            <h2 className="mb-2 text-lg font-semibold">About</h2>
            <p className="text-sm text-muted-foreground">{item.description}</p>
            {item.genres.length > 0 && (
              <p className="mt-3 text-sm"><span className="text-muted-foreground">Genres:</span> {item.genres.join(', ')}</p>
            )}
            {item.year && (
              <p className="text-sm"><span className="text-muted-foreground">Year:</span> {item.year}</p>
            )}
          </Card>
          <Button variant="secondary" asChild className="w-full"><Link to="/">⬅ Back to Home</Link></Button>
        </aside>
      </div>
    </main>
  );
};

export default Watch;
