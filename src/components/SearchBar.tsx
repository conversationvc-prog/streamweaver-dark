import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ALL_GENRES } from "@/data/data";
import { Search } from "lucide-react";

export type SearchBarProps = {
  query: string;
  onQueryChange: (v: string) => void;
  typeFilter: "all" | "movie" | "series";
  onTypeFilterChange: (v: "all" | "movie" | "series") => void;
  genreFilter: string | "all";
  onGenreFilterChange: (v: string | "all") => void;
  onSubmit?: () => void;
};

export const SearchBar = ({
  query,
  onQueryChange,
  typeFilter,
  onTypeFilterChange,
  genreFilter,
  onGenreFilterChange,
  onSubmit,
}: SearchBarProps) => {
  return (
    <div className="rounded-2xl border bg-card p-4 sm:p-6">
      <div className="flex items-center gap-2 rounded-xl border bg-background px-3 py-2">
        <Search className="h-5 w-5 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search by title, description, cast, or genre..."
          className="border-0 focus-visible:ring-0"
          onKeyDown={(e) => e.key === 'Enter' && onSubmit?.()}
        />
        <Button variant="secondary" onClick={onSubmit}>
          Search
        </Button>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Select value={typeFilter} onValueChange={(v: any) => onTypeFilterChange(v)}>
          <SelectTrigger className="w-[160px]"><SelectValue placeholder="All" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="movie">Movies</SelectItem>
            <SelectItem value="series">Series</SelectItem>
          </SelectContent>
        </Select>
        <Select value={genreFilter} onValueChange={(v: any) => onGenreFilterChange(v)}>
          <SelectTrigger className="w-[200px]"><SelectValue placeholder="All Genres" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Genres</SelectItem>
            {ALL_GENRES.map((g) => (
              <SelectItem key={g} value={g}>{g}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SearchBar;
