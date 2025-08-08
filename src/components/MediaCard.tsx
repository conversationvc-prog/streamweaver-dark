import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { MediaItem } from "@/data/data";

export const MediaCard = ({ item }: { item: MediaItem }) => {
  return (
    <Card className="overflow-hidden bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="relative aspect-[2/3] w-full overflow-hidden">
        {item.poster ? (
          <img
            src={item.poster}
            alt={`${item.title} poster`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/30 to-primary/10" />
        )}
        <div className="absolute left-2 top-2 flex items-center gap-2">
          <Badge variant="secondary">{item.type === 'movie' ? 'Movie' : 'Series'}</Badge>
          {item.year && <Badge variant="outline">{item.year}</Badge>}
          {item.rating && <Badge variant="default">⭐ {item.rating}</Badge>}
        </div>
      </div>
      <div className="space-y-2 p-4">
        <h3 className="line-clamp-1 text-base font-semibold">{item.title}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
        <div className="flex items-center justify-between pt-1">
          <div className="text-xs text-muted-foreground line-clamp-1">{item.genres.join(' • ')}</div>
          <Button asChild size="sm">
            <Link to={`/watch/${item.id}`}>Watch</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MediaCard;
