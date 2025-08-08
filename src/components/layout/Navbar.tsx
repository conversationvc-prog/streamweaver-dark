import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-primary/80 to-primary shadow" aria-hidden />
          <span className="text-lg font-semibold">Stream</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive}) => `story-link hover-scale ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>Home</NavLink>
          <a href="#trending" className="story-link hover-scale text-muted-foreground hover:text-foreground">Trending</a>
          <a href="#catalog" className="story-link hover-scale text-muted-foreground hover:text-foreground">Catalog</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
