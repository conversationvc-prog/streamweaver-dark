import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-orange-500 to-purple-600 shadow" aria-hidden />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-orange-500">Crunchy</span>
            <span className="text-sm font-semibold text-purple-600 -mt-1">Watch</span>
          </div>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive}) => `story-link hover-scale ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>Home</NavLink>
          <NavLink to="/live-tv" className={({isActive}) => `story-link hover-scale ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>Live TV</NavLink>
          <NavLink to="/movies" className={({isActive}) => `story-link hover-scale ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>Movies</NavLink>
          <NavLink to="/series" className={({isActive}) => `story-link hover-scale ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>Series</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
