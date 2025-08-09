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
    id: "How to Train Your Dragon [Hindi]",
    type: "movie",
    title: "How to Train Your Dragon [Hindi]",
    year: 2025,
    rating: 7.9,
    genres: ["Animation", "Adventure", "Comedy"],
    description:
      "As an ancient threat endangers both Vikings and dragons alike on the isle of Berk, the friendship between Hiccup, an inventive Viking, and Toothless, a Night Fury dragon, becomes the key to both species forging a new future together.",
    poster:
      "https://pacdn.aoneroom.com/image/2025/06/10/7a1442298ece8498543d25748a6e5fec.jpg?x-oss-process=image/resize%2Cw_250",
    source: {
      url: "https://fmoviesunblocked.net/spa/videoPlayPage/movies/how-to-train-your-dragon-hindi-cuSauV4ME09?id=7562597214405952408&type=/movie/detail",
      provider: "direct",
    },
  },
  {
    id: "s2",
    type: "series",
    title: "Wednesday Season 2",
    year: 2025,
    rating: 8.0,
    genres: ["Action", "horror"],
    description:
      "Wednesday returns to Nevermore and while developing her psychic abilities she must face a new tormentor and prevent Enid's death.",
    poster:
      "https://pacdn.aoneroom.com/image/2024/04/15/33d8c2d05bf29255c239b0c0ad8a570d.jpg?x-oss-process=image/resize%2Cw_250",
    seasons: [
      {
        id: "s2",
        number: 1,
        title: "all episord",
        episodes: [
          {
            id: "s2",
            number: all episord,
            title: "All Episord in hindi",
            source: {
              url: "https://st25.febspot.com/remote_control.php?time=1754727123&cv=9d8a5508c6107d8b5ef612d561bf476d&lr=0&cv2=3a88ef8de5a2433095588fa00fc3649d&file=%2Fvideos%2F2895000%2F2895079%2F2895079_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=91407b9612ec10a590b248c90037be64",
              provider: "direct",
             },
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
