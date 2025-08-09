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
    id: "Transformers: Revenge of the Fallen",
    type: "movie",
    title: "Transformers: Revenge of the Fallen",
    year: 2009,
    rating: 6.0,
    genres: ["Advanture", "Action", "Sci-Fi"],
    description:
      "Taking place after Revenge of the Fallen, the war between Autobots and Decepticons continue to rage on. In order to bring down the heroes, Megatron plans to unleash a powerful Transformer named Shockwave.",
    poster:
      "https://pacdn.aoneroom.com/image/2024/12/12/076d284a6f9e0d758e9c5e86e8e31348.jpg?x-oss-process=image/resize%2Cw_250",
    source: {
      // Direct MP4 (fast to demo). You can replace with a YouTube or Archive link.
      url: "https://fmoviesunblocked.net/spa/videoPlayPage/movies/transformers-revenge-of-the-fallen-6JPSXA2wt71?id=940503673887671224&type=/movie/detail",
      provider: "direct",
    },
    {
    id: "Interstellar [Hindi]",
    type: "movie",
    title: "Interstellar [Hindi]",
    year: 2014,
    rating: 8.7,
    genres: ["Advanture", "Drama", "Sci-Fi"],
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity&apos;s survival.",
    poster:
      "https://pacdn.aoneroom.com/image/2022/09/02/53c4b56b3f1d8024bb953dc516767c13.jpg?x-oss-process=image/resize%2Cw_250",
    source: {
      // Direct MP4 (fast to demo). You can replace with a YouTube or Archive link.
      url: "https://fmoviesunblocked.net/spa/videoPlayPage/movies/interstellar-hindi-atK4mXcca06?id=5038022591622040232&type=/movie/detail",
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
