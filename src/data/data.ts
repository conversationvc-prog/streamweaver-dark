// Central types and data for media items. Add or edit items here.
// How to add a movie:
// {
//   id: "unique-id",
//   type: "movie",
//   title: "Your Movie Title",
//   year: 2024,
//   genres: ["Action", "Drama"],
//   description: "Short description...",
//   poster: "optional image url",
//   source: { url: "https://your-video-url-or-youtube-link" }
// }
//
// How to add a series:
// {
//   id: "unique-series-id",
//   type: "series",
//   title: "Series Name",
//   year: 2025,
//   genres: ["Sci-Fi"],
//   description: "Synopsis...",
//   seasons: [
//     {
//       id: "s1",
//       number: 1,
//       title: "Season 1",
//       episodes: [
//         { id: "e1", number: 1, title: "Episode 1", source: { url: "https://..." } },
//         { id: "e2", number: 2, title: "Episode 2", source: { url: "https://..." } }
//       ]
//     }
//   ]
// }

export type MediaType = "movie" | "series";

export type VideoSource = {
  url: string; // Supports YouTube links, direct MP4 links, or Internet Archive embeds
  provider?: "youtube" | "archive" | "direct";
};

export type Episode = {
  id: string;
  number: number;
  title: string;
  durationMinutes?: number;
  source: VideoSource;
};

export type Season = {
  id: string;
  number: number;
  title?: string;
  episodes: Episode[];
};

export type MediaItem = {
  id: string;
  type: MediaType;
  title: string;
  year?: number;
  rating?: number; // 0-10
  genres: string[];
  description: string;
  cast?: string[];
  poster?: string;
  backdrop?: string;
  source?: VideoSource; // for movies
  seasons?: Season[];  // for series
};

export const MEDIA: MediaItem[] = [
  {
    id: "big-buck-bunny",
    type: "movie",
    title: "Big Buck Bunny",
    year: 2008,
    rating: 7.5,
    genres: ["Animation", "Comedy"],
    description:
      "A giant rabbit seeks revenge against criminal rodents. Open movie from the Blender Foundation.",
    poster:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Titles.png",
    source: {
      // Direct MP4 (fast to demo). You can replace with a YouTube or Archive link.
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      provider: "direct",
    },
  },
  {
    id: "sintel",
    type: "movie",
    title: "Sintel",
    year: 2010,
    rating: 7.2,
    genres: ["Animation", "Adventure"],
    description:
      "A girl befriends a dragon. Another open movie from the Blender Foundation.",
    poster:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Sintel_poster.jpg",
    source: {
      url: "https://www.youtube.com/watch?v=eRsGyueVLvQ",
      provider: "youtube",
    },
  },
  {
    id: "open-movie-series",
    type: "series",
    title: "Open Movie Shorts",
    year: 2025,
    rating: 7.4,
    genres: ["Animation", "Short"],
    description:
      "A mini anthology of open movies used for demo. Select a season and episode to play.",
    poster:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Tears_of_Steel_-_movie_poster.jpg",
    seasons: [
      {
        id: "s1",
        number: 1,
        title: "Volume 1",
        episodes: [
          {
            id: "e1",
            number: 1,
            title: "Big Buck Bunny",
            source: {
              url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              provider: "direct",
            },
          },
          {
            id: "e2",
            number: 2,
            title: "Sintel",
            source: {
              url: "https://www.youtube.com/watch?v=eRsGyueVLvQ",
              provider: "youtube",
            },
          },
          {
            id: "e3",
            number: 3,
            title: "Tears of Steel (Archive)",
            source: {
              // Internet Archive embed works via iframe
              url: "https://archive.org/embed/Tears-of-Steel-2012",
              provider: "archive",
            },
          },
        ],
      },
      {
        id: "s2",
        number: 2,
        title: "Volume 2",
        episodes: [
          {
            id: "e1",
            number: 1,
            title: "Elephants Dream",
            source: {
              url: "https://archive.org/embed/ElephantsDream",
              provider: "archive",
            },
          },
        ],
      },
    ],
  },
];

export const ALL_GENRES = Array.from(
  MEDIA.reduce((acc, item) => {
    item.genres.forEach((g) => acc.add(g));
    return acc;
  }, new Set<string>())
).sort();
