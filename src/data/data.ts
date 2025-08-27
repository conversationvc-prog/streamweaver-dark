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
    id: "Demon Slayer -Kimetsu no Yaiba- The Movie: Infinity Castle[CAM]",
    type: "movie",
    title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Infinity Castle[CAM]",
    year: 2025,
    rating: 9.0,
    genres: ["Advanture", "Action", "Anime"],
    description:
      "The Demon Slayer Corps are drawn into the Infinity Castle, where Tanjiro, Nezuko, and the Hashira face terrifying Upper Rank demons in a desperate fight as the final battle against Muzan Kibutsuji begins.",
    poster:
      "https://assetscdn1.paytm.com/images/cinema/poster%20(2)-bc745210-572d-11f0-8c69-e1cfd333c047.jpg?format=webp&imwidth=256",
    source: {
      // Direct MP4 (fast to demo). You can replace with a YouTube or Archive link.
      url: "https://drive.google.com/file/d/1Tz-OPyFPX0iJtkF2OKtB9SllVL_MjPnS/view?usp=sharing",
      provider: "direct",
    },
    },
  {
    id: "Coolie",
    type: "movie",
    title: "Coolie",
    year: 2025,
    rating: 6.4,
    genres: ["Advanture", "Action", "Thriller"],
    description:
      "This classic Bollywood film starring Amitabh Bachchan is an action-comedy-drama directed by Manmohan Desai. ",
    poster:
      "https://lh3.googleusercontent.com/proxy/DC2SqvMjxZYBhcs7zJivoUInIJZ5wazmmFrKYbFLzoBjs6Uaw2yks5i_kuQ_bqJiEQRqAGk6oR8LF1agZlRgpo4m0iLU9qWWSbGVBaky",
    source: {
      // Direct MP4 (fast to demo). You can replace with a YouTube or Archive link.
      url: "https://pkembed.online/embed-tdijdp3g872h.html",
      provider: "direct",
    },
    },
   {
    id: "Deva",
    type: "movie",
    title: "Deva",
    year: 2025,
    rating: 6.7,
    genres: ["Action", "Thriller"],
    description:
      "a 2025 Indian Hindi-language action thriller about a rebellious police officer, Dev Ambre (Shahid Kapoor), who loses his memory after an accident and must retrace his steps to identify his best friend's killer and uncover departmental corruption",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKbBLscGB5_mYUBJIgB7RTTHRDlOInNNkiMA&s",
    source: {
      // Direct MP4 (fast to demo). You can replace with a YouTube or Archive link.
      url: "https://pkembed.online/embed-8wqmn71um49d.html",
      provider: "direct",
    },
    },
  {
    id: "War 2 HINDI",
    type: "movie",
    title: "War 2 HINDI",
    year: 2025,
    rating: 6.0,
    genres: ["Advanture", "Action", "Thriller"],
    description:
      "a devastating global conflict between the Allied and Axis powers that resulted in 70 to 85 million deaths, and the deadliest war in human history.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2U0MGFkNzctOGI5OC00MzhhLWExYTctZjE5YjY3MzcwYjMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    source: {
      // Direct MP4 (fast to demo). You can replace with a YouTube or Archive link.
      url: "https://pkembed.online/embed-6ha1k8ef9pcq.html",
      provider: "direct",
    },
    },
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
      url: "https://embedpk.net/embed-4ugxl6g596zy.html",
      provider: "direct",
    },
    },
  {
    id: "The Boss Baby [2017]",
    type: "movie",
    title: "The Boss Baby [2017]",
    year: 2017,
    rating: 6.3,
    genres: ["Family", "Comedy", "Kids"],
    description:
      "a DreamWorks animated comedy about a suit-wearing, briefcase-carrying baby with a secret mission to stop a corporate plot that threatens the world's love for babies in favor of puppies",
    poster:
      "https://play-lh.googleusercontent.com/eMclFL5NRKlg_I4SJg5se716SV5hSIDsPgd32VgqTP8dkBrz6vyGPRUuPzDH3ODam9fiB7avYX2B8NSRWg=w240-h480-rw",
    source: {
      // Direct MP4 (fast to demo). You can replace with a YouTube or Archive link.
      url: "https://embedpk.net/embed-7ge89f1kfp5r.html",
      provider: "direct",
    },
    },
  {
    id: "The Boss Baby: Family Business (2021)",
    type: "movie",
    title: "The Boss Baby: Family Business (2021)",
    year: 2021,
    rating: 5.9,
    genres: ["Family", "Comedy", "Kids"],
    description:
      "follows the now-adult Templeton brothers, Tim and Ted, who have drifted apart. When a new, cutting-edge boss baby arrives, she brings them back together, revealing a new plan for a family business that requires their combined efforts to save the family from a crisis.",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvaVRbKL_d4VMUEUB1Tvq2_VGtBeDHKEeEA&s",
    source: {
      // Direct MP4 (fast to demo). You can replace with a YouTube or Archive link.
      url: "https://embedpk.net/embed-btwrnh1m5erb.html",
      provider: "direct",
    },
    },
    {
    id: "Dragon Ball Super Super Hero (2022)",
    type: "movie",
    title: "Dragon Ball Super Super Hero (2022)",
    year: 2022,
    rating: 7.1,
    genres: ["Action", "Advanture", "Animation"],
    description:
      "a 2022 animated film where the resurgent Red Ribbon Army, an old villainous organization from Goku's past, unleashes two powerful new androids, Gamma 1 and Gamma 2, who initially present themselves as superheroes.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjczMTg2N2MtMTVmZi00MDYxLWIwY2MtNTBlMDRkYmFkZGJmXkEyXkFqcGc@._V1_.jpg",
    source: {
      // Direct MP4 (fast to demo). You can replace with a YouTube or Archive link.
      url: "https://d-s.io/e/qeyf1ofqk2ak",
      provider: "direct",
    },
    },
  {
    id: "The Nun II 2023",
    type: "movie",
    title: "The Nun II 2023",
    year: 2023,
    rating: 5.6,
    genres: ["horror", "mistery", "Thriller"],
    description:
      "a 2023 supernatural horror film, the sequel to The Nun (2018) and the eighth installment in The Conjuring Universe",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNmJkYWIyYWYtNWVhZi00ZTkyLWExMTktZWUzNGE1MjNlNjQ0XkEyXkFqcGc@._V1_QL75_UY281_CR18,0,190,281_.jpg",
    source: {
      // Direct MP4 (fast to demo). You can replace with a YouTube or Archive link.
      url: "https://critic.vidzstore.com/video_emb.php?dmdl=007&id=Mjk3MzY5MTAyNzQ0NjE0OQ==",
      provider: "direct",
    },
    },
   {
    id: "The Fantastic Four: First Steps",
    type: "movie",
    title: "The Fantastic Four: First Steps",
    year: 2025,
    rating: 7.3,
    genres: ["action", "advanture", "Sci-Fi"],
    description:
      "Forced to balance their roles as heroes with the strength of their family bond, the Fantastic Four must defend Earth from a ravenous space god called Galactus and his enigmatic Herald, Silver Surfer.",
    poster:
      "https://lumiere-a.akamaihd.net/v1/images/p_movies_thefantasticfourfirststeps_hero1shot_poster_v1_4b798b70.jpeg?region=0%2C0%2C540%2C810",
    source: {
      // Direct MP4 (fast to demo). You can replace with a YouTube or Archive link.
      url: "https://pkembed.online/embed-0qf5605lc7tv.html",
      provider: "direct",
    },
   },
   {
    id: "Scooby Doo! Meets Courage the Cowardly Dog",
    type: "movie",
    title: "Scooby Doo! Meets Courage the Cowardly Dog",
    year: 2021,
    rating: 6.3,
    genres: ["kids", "animation", "comedy"],
    description:
      "a crossover film where Scooby-Doo and the Mystery Inc. gang travel to Nowhere, Kansas, and encounter Courage and his owners, Eustace and Muriel Bagge",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VQvPv-LS5_Y6fplIjx95SR5w0TfexrcDIg&s",
    source: {
      // Direct MP4 (fast to demo). You can replace with a YouTube or Archive link.
      url: "https://pkembed.online/embed-pvnarbfoefie.html",
      provider: "direct",
    },
   },
  {
    id: "The Conjuring",
    type: "movie",
    title: "The Conjuring",
    year: 2013,
    rating: 7.5,
    genres: ["horror", "mistery", "Thriller"],
    description:
      "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    poster:
      "https://images.moviesanywhere.com/64428a3af2258a8186ca97896f1fb060/de21bfe7-e298-4210-bdef-bfac8b2c53d0.jpg",
    source: {
      // Direct MP4 (fast to demo). You can replace with a YouTube or Archive link.
      url: "https://embedpk.net/embed-vbq5k0mbd1l7.html",
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
      url: "https://embedpk.net/embed-kb6fh2kxevb9.html",
      provider: "direct",
    },
  },
  {
    id: "How to Train Your Dragon",
    type: "movie",
    title: "How to Train Your Dragon ",
    year: 2025,
    rating: 9.0,
    genres: ["Advanture", "Comedy", "Action"],
    description:
      "As an ancient threat endangers both Vikings and dragons alike on the isle of Berk, the friendship between Hiccup, an inventive Viking, and Toothless, a Night Fury dragon, becomes the key to both species forging a new future together.",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/80/How_To_Train_Your_Dragon_2025_Poster.jpg",
    source: {
      // Direct MP4 (fast to demo). You can replace with a YouTube or Archive link.
      url: "https://pkembed.online/embed-bdmofo2rmuxc.html",
      provider: "direct",
    },
  },
  {
    id: "The Monkey",
    type: "movie",
    title: "The Monkey",
    year: 2025,
    rating: 6.0,
    genres: ["horror"],
    description:
      "When twin brothers Bill and Hal find their father's old monkey toy in the attic, a series of gruesome deaths start. The siblings decide to throw the toy away and move on with their lives, growing apart over the years.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzZhMTc5MWUtOTE2MS00MjUwLTljYWEtYTk1ZmVjNzhmMzYzXkEyXkFqcGc@._V1_.jpg",
    source: {
      url: "https://pkembed.online/embed-l6mgh1os4jmb.html",
      provider: "direct",
    },
  },
  {
    id: "Bring Her Back",
    type: "movie",
    title: "Bring Her Back",
    year: 2025,
    rating: 7.3,
    genres: ["Australia", "horror", "mistery"],
    description:
      "A brother and sister uncover a terrifying ritual at the secluded home of their new foster mother.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZTlhYTk1ZTEtOWY3NC00NWQ5LTlkOTctNjQ3ZDYyZGE5ZWNlXkEyXkFqcGc@._V1_.jpg",
    source: {
      url: "https://pkembed.online/embed-rb3s4yk3tg2o.html",
      provider: "direct",
    },
  },
    {
    id: "Evil Dead Rise",
    type: "movie",
    title: "Evil Dead Rise",
    year: 2023,
    rating: 6.5,
    genres: ["Horror"],
    description:
      "A twisted tale of two estranged sisters whose reunion is cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
    poster:
      "https://image.tmdb.org/t/p/original/mIBCtPvKZQlxubxKMeViO2UrP3q.jpg",
    source: {
      url: "https://embedpk.net/embed-gt06gkj1loub.html",
      provider: "direct",
    },
  },
  {
    id: "demon-slayer-s1",
    type: "series",
    title: "Demon Slayer: Kimetsu no Yaiba - Season 1",
    year: 2019,
    rating: 8.7,
    genres: ["Anime", "Action", "Adventure"],
    description:
      "Tanjiro Kamado joins the Demon Slayer Corps after his family is attacked and his sister Nezuko becomes a demon.",
    poster:
      "https://a.storyblok.com/f/178900/2896x4096/e7ecabafde/25c281a8ed06846d15249d6fa0eeb98c1630394205_main.jpg/m/filters:quality(95)format(webp)",
    seasons: [
      {
        id: "s1",
        number: 1,
        title: "Season 1",
          episodes: [
            {
              id: "s1e1",
              number: 1,
              title: "Episode 1: Cruelty",
              source: {
                // Demo source; replace with your preferred link
                url: "https://play.zephyrflick.top/video/b51a15f382ac914391a58850ab343b00",
                provider: "direct",
              },
            },
            {
              id: "s1e2",
              number: 2,
              title: "Episode 2: Trainer Sakonji Urokodaki",
              source: {
                // Demo source; replace with your preferred link
                url: "https://play.zephyrflick.top/video/193002e668758ea9762904da1a22337c",
                provider: "direct",
              },
            },
            {
              id: "s1e3",
              number: 3,
              title: "Episode 3: Sabito and Makomo",
              source: {
                // Demo source; replace with your preferred link
                url: "https://st2.febspot.com/remote_control.php?time=1754816334&cv=9738be8e7b5bcd18cfe959577dddf89b&lr=0&cv2=719f7b91c6d09f2c48e7b7b53585519b&file=%2Fvideos%2F2522000%2F2522592%2F2522592_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=cce09ebb159c91351cf7d3cc8b9be75e",
                provider: "direct",
              },
            },
            {
              id: "s1e4",
              number: 4,
              title: "Episode 4: Final Selection",
              source: {
                // Demo source; replace with your preferred link
                url: "https://st2.febspot.com/remote_control.php?time=1754816679&cv=02de8a1fc1910887a22aaba66c9f6b9a&lr=0&cv2=d566999336366c4f8c30a63f85c330c6&file=%2Fvideos%2F2522000%2F2522597%2F2522597_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=7576e649da84a4a1f6732ede24a696f1",
                provider: "direct",
              },
            },
            {
              id: "s1e5",
              number: 5,
              title: "Episode 5: My Own Steel",
              source: {
                // Demo source; replace with your preferred link
                url: "https://st2.febspot.com/remote_control.php?time=1754816805&cv=f18f00c3dae5d0819f177307953ea705&lr=0&cv2=6e9cbf0a018910e1e3107dee1596a50a&file=%2Fvideos%2F2522000%2F2522601%2F2522601_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=388e4afb8df57851f69fe93d87bb4343",
                provider: "direct",
              },
            },
            {
              id: "s1e6",
              number: 6,
              title: "Episode 6: Swordsman Accompanying a Demon",
              source: {
                // Demo source; replace with your preferred link
                url: "https://st2.febspot.com/remote_control.php?time=1754816901&cv=a0fd1d706c983449ea91fe5e5c58ae85&lr=0&cv2=c8bf0ce7009187e213b2ca20ea1f6a51&file=%2Fvideos%2F2522000%2F2522606%2F2522606_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=4793d659dbe3b9e9d6852784ab905127",
                provider: "direct",
              },
            },
            {
              id: "s1e7",
              number: 7,
              title: "Episode 7: Muzan Kibutsuji",
              source: {
                // Demo source; replace with your preferred link
                url: "https://st2.febspot.com/remote_control.php?time=1754816988&cv=62b6fc3e8feb99388d5c5f918771aad4&lr=0&cv2=98418ff98b859101c94e60e156a3faa8&file=%2Fvideos%2F2522000%2F2522618%2F2522618_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=49c1e5f2562a57487d912335dbbc7c88",
                provider: "direct",
              },
            },
            {
              id: "s1e8",
              number: 8,
              title: "Episode 8: The Smell of Enchanting Blood",
              source: {
                // Demo source; replace with your preferred link
                url: "https://st2.febspot.com/remote_control.php?time=1754817147&cv=bb8b2d597b7dffea62101bcebb55ba87&lr=0&cv2=f136030df5fc750f1deaabe177dd754b&file=%2Fvideos%2F2522000%2F2522621%2F2522621_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=e0ac8b491685ddbd27f507a991500b28",
                provider: "direct",
              },
            },
            {
              id: "s1e9",
              number: 9,
              title: "Episode 9: Temari Demon and Arrow Demon",
              source: {
                // Demo source; replace with your preferred link
                url: "https://st2.febspot.com/remote_control.php?time=1754817244&cv=89eed5a34cd33fb815ba5d0f80a94103&lr=0&cv2=246a4fb756125114f052122816a61a02&file=%2Fvideos%2F2522000%2F2522625%2F2522625_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=6cbac736682807f9ee34b15f4eea5a8c",
                provider: "direct",
              },
            },
            {
              id: "s1e10",
              number: 10,
              title: "Episode 10: Together Forever",
              source: {
                // Demo source; replace with your preferred link
                url: "https://st2.febspot.com/remote_control.php?time=1754817349&cv=103725b0d93b370e2cca77c7e107effd&lr=0&cv2=f408079a68674266e39a47d961e6bec3&file=%2Fvideos%2F2522000%2F2522628%2F2522628_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=7fad9228a1da12c576a0b31b6b6275f6",
                provider: "direct",
              },
            },
            {
              id: "s1e11",
              number: 11,
              title: "Episode 11: Tsuzumi Mansion",
              source: {
                // Demo source; replace with your preferred link
                url: "https://st2.febspot.com/remote_control.php?time=1754817454&cv=74572f4dfe6e496b3d83689f055912bd&lr=0&cv2=f4af888a73fac1c58ed9478d8977014b&file=%2Fvideos%2F2522000%2F2522629%2F2522629_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=d400c31eec612197f5f6f3485e88423a",
                provider: "direct",
              },
            },
            {
              id: "s1e12",
              number: 12,
              title: "Episode 12: The Boar Bares Its Fangs, Zenitsu Sleeps",
              source: {
                // Demo source; replace with your preferred link
                url: "https://st2.febspot.com/remote_control.php?time=1754817547&cv=bbb2c46fb5c372478668cc3a6550e447&lr=0&cv2=46fea493e808bc2898089a64d7bcefc9&file=%2Fvideos%2F2522000%2F2522795%2F2522795_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=0b7fa48f5f502c092458fccaf65955e7",
                provider: "direct",
              },
            },
            {
              id: "s1e13",
              number: 13,
              title: "Episode 13: Something More Important Than Life",
              source: {
                url: "https://st2.febspot.com/remote_control.php?time=1754818660&cv=16ef7289f5b313d83a6a313aa5d9ced4&lr=0&cv2=b5470ecb2998948c16ed4661d5b52f62&file=%2Fvideos%2F2522000%2F2522800%2F2522800_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=81c6d96f59997bdbd31d1faade202eb0",
                provider: "direct",
              },
            },
            {
              id: "s1e14",
              number: 14,
              title: "Episode 14: The House with the Wisteria Family Crest",
              source: {
                url: "https://st2.febspot.com/remote_control.php?time=1754818767&cv=231a453d67500d3db93ac625186904d4&lr=0&cv2=8b4a7c158d07c0d121da99bac3f05738&file=%2Fvideos%2F2522000%2F2522807%2F2522807_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=8677d1bb9bc14843fe45c8751ee4c86d",
                provider: "direct",
              },
            },
            {
              id: "s1e15",
              number: 15,
              title: "Episode 15: Mount Natagumo",
              source: {
                url: "https://st2.febspot.com/remote_control.php?time=1754819114&cv=76476d797718d20885c7f6c66851b858&lr=0&cv2=29ea2254cc7d37fc2c734c0104f9b11b&file=%2Fvideos%2F2522000%2F2522818%2F2522818_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=db54dbeed88b56c9ba1b5d7305644bc5",
                provider: "direct",
              },
            },
            {
              id: "s1e16",
              number: 16,
              title: "Episode 16: Letting Someone Else Go First",
              source: {
                url: "https://st2.febspot.com/remote_control.php?time=1754819295&cv=f6b7add529b2a3cc42dbb4bb52bd7027&lr=0&cv2=0704b30aaf1c14ea85ee617829c276a7&file=%2Fvideos%2F2522000%2F2522825%2F2522825_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=bdd9655f0c6fe4ee7d9b97ffa7d36edf",
                provider: "direct",
              },
            },
            {
              id: "s1e17",
              number: 17,
              title: "Episode 17: You Must Master a Single Thing",
              source: {
                url: "https://st2.febspot.com/remote_control.php?time=1754819425&cv=5a804923174829ae9049e91ea0df5f72&lr=0&cv2=debedb91e8bb7e8a4df17efe4ad90f93&file=%2Fvideos%2F2522000%2F2522833%2F2522833_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=d84ff3137c964d5bdb686cff638cf998",
                provider: "direct",
              },
            },
            {
              id: "s1e18",
              number: 18,
              title: "Episode 18: A Forged Bond",
              source: {
                url: "https://st2.febspot.com/remote_control.php?time=1754819477&cv=8680774457ef3faf157b38c766ae65ae&lr=0&cv2=37df6273c088054903d990d29ec608f8&file=%2Fvideos%2F2522000%2F2522836%2F2522836_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=025cc756d1ac57ce05e5039dc0f3d833",
                provider: "direct",
              },
            },
            {
              id: "s1e19",
              number: 19,
              title: "Episode 19: Hinokami",
              source: {
                url: "https://st2.febspot.com/remote_control.php?time=1754819586&cv=ae36584e721d34661377451b4d9a9cb0&lr=0&cv2=f68116667ff2f18513e16b27ff574881&file=%2Fvideos%2F2522000%2F2522838%2F2522838_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=242db281b36fc497ab9644cd7b489326",
                provider: "direct",
              },
            },
            {
              id: "s1e20",
              number: 20,
              title: "Episode 20: Pretend Family",
              source: {
                url: "https://st2.febspot.com/remote_control.php?time=1754819785&cv=9ab4998d5b82676b44e89c4329dff67e&lr=0&cv2=92612983c3c5f2ffdc41dbc8502d2cba&file=%2Fvideos%2F2522000%2F2522844%2F2522844_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=91a40ec12e51d5454cb07f8296dbf7db",
                provider: "direct",
              },
            },
            {
              id: "s1e21",
              number: 21,
              title: "Episode 21: Against Corps Rules",
              source: {
                url: "https://st2.febspot.com/remote_control.php?time=1754819949&cv=7915f85bfbb5c41b3368140cb4bb6f79&lr=0&cv2=caefaf7147b003eb7327791a698a2da9&file=%2Fvideos%2F2522000%2F2522857%2F2522857_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=5a15ab04534a4312b36bba53e992ba94",
                provider: "direct",
              },
            },
            {
              id: "s1e22",
              number: 22,
              title: "Episode 22: Master of the Mansion",
              source: {
                url: "https://st2.febspot.com/remote_control.php?time=1754820078&cv=d4f25040000519922b5d54db7020f7eb&lr=0&cv2=92ae3f898a97337c3b923dbd4f2892b3&file=%2Fvideos%2F2522000%2F2522866%2F2522866_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=9dfd9845f33db8f3f368707e345c03f9",
                provider: "direct",
              },
            },
            {
              id: "s1e23",
              number: 23,
              title: "Episode 23: Hashira Meeting",
              source: {
                url: "https://st2.febspot.com/remote_control.php?time=1754820165&cv=2879fc669e73801c470c1bd71cdd53ee&lr=0&cv2=a69fa738ce19823ed50ed23ed5614e13&file=%2Fvideos%2F2522000%2F2522870%2F2522870_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=56c0033b69c9d2e7c4cf760282ec0938",
                provider: "direct",
              },
            },
            {
              id: "s1e24",
              number: 24,
              title: "Episode 24: Rehabilitation Training",
              source: {
                url: "https://st2.febspot.com/remote_control.php?time=1754820249&cv=c057467006c66f0721c89cdd09301565&lr=0&cv2=4135f3a7419a71de0693985957c470e4&file=%2Fvideos%2F2522000%2F2522876%2F2522876_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=dda92b4081f7e97c835caacfd05d1728",
                provider: "direct",
              },
            },
            {
              id: "s1e25",
              number: 25,
              title: "Episode 25: Tsuguko, Kanao Tsuyuri",
              source: {
                url: "https://st2.febspot.com/remote_control.php?time=1754820343&cv=90e8eb1cb169bca30f27b29473b4a6c7&lr=0&cv2=ad7df3aa5fb7f5f5399271feefbf6532&file=%2Fvideos%2F2522000%2F2522883%2F2522883_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=13ecbfc67d5775f75f83646f94dec731",
                provider: "direct",
              },
            },
            {
              id: "s1e26",
              number: 26,
              title: "Episode 26: New Mission",
              source: {
                url: "https://st2.febspot.com/remote_control.php?time=1754820747&cv=e86aed780f48c16fa3b5909d1d94d112&lr=0&cv2=fd4ef2f0f2c748947a6ce4c1a8a801f1&file=%2Fvideos%2F2522000%2F2522887%2F2522887_720p.mp4&cv3=6f466072b403ded75718b0fb3f2d192f&cv4=78efee7b2ac8b3384a788ba7c4904018",
                provider: "direct",
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
