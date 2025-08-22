export interface LiveChannel {
  id: string;
  name: string;
  category: "news" | "sports" | "entertainment" | "kids" | "documentary";
  country: string;
  language: string;
  logo: string;
  url: string;
  description: string;
  isLive: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  country: string;
  category: "breaking" | "politics" | "business" | "sports" | "tech" | "world";
  thumbnail: string;
  url: string;
  publishedAt: string;
  source: string;
}

export const LIVE_CHANNELS: LiveChannel[] = [
  // US Channels
  {
    id: "cnn-live",
    name: "CNN International",
    category: "news",
    country: "US",
    language: "English",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/512px-CNN.svg.png",
    url: "https://cnn-cnninternational-1-eu.rakuten.wurl.tv/playlist.m3u8",
    description: "Breaking news and international coverage",
    isLive: true,
  },
  {
    id: "fox-news",
    name: "Fox News",
    category: "news",
    country: "US",
    language: "English",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/512px-Fox_News_Channel_logo.svg.png",
    url: "https://fox-foxnewsnow-samsungus.amagi.tv/playlist.m3u8",
    description: "American news and political commentary",
    isLive: true,
  },
  {
    id: "espn-sports",
    name: "ESPN",
    category: "sports",
    country: "US",
    language: "English",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/512px-ESPN_wordmark.svg.png",
    url: "https://espn-espn-1-eu.rakuten.wurl.tv/playlist.m3u8",
    description: "Sports news and live coverage",
    isLive: true,
  },
  // UK Channels
  {
    id: "bbc-news",
    name: "BBC News",
    category: "news",
    country: "UK",
    language: "English",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/BBC_News_%28TV_channel%29_logo.svg/512px-BBC_News_%28TV_channel%29_logo.svg.png",
    url: "https://vs-hls-push-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_news_channel_hd/t=3840/v=pv14/b=5070016/main.m3u8",
    description: "British news and world coverage",
    isLive: true,
  },
  {
    id: "sky-sports",
    name: "Sky Sports News",
    category: "sports",
    country: "UK",
    language: "English",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Sky_Sports_News_logo.svg/512px-Sky_Sports_News_logo.svg.png",
    url: "https://linear021-gb-hls1-prd-ak.cdn.skycdp.com/Content/HLS_001_sd/Live/channel(skysportsnews)/index_mobile.m3u8",
    description: "UK sports news and updates",
    isLive: true,
  },
  // German Channels
  {
    id: "dw-news",
    name: "Deutsche Welle",
    category: "news",
    country: "DE",
    language: "English",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Deutsche_Welle_symbol_2012.svg/512px-Deutsche_Welle_symbol_2012.svg.png",
    url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8",
    description: "German international news in English",
    isLive: true,
  },
  // French Channels
  {
    id: "france24-en",
    name: "France 24 English",
    category: "news",
    country: "FR",
    language: "English",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/FRANCE_24_logo.svg/512px-FRANCE_24_logo.svg.png",
    url: "https://static.france24.com/live/F24_EN_LO_HLS/live_web.m3u8",
    description: "French international news in English",
    isLive: true,
  },
  // Entertainment Channels
  {
    id: "red-bull-tv",
    name: "Red Bull TV",
    category: "sports",
    country: "International",
    language: "English",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Red_Bull_TV_logo.svg/512px-Red_Bull_TV_logo.svg.png",
    url: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8",
    description: "Extreme sports and adventure content",
    isLive: true,
  },
  // Pakistan Channels
  {
    id: "Ary news",
    name: "Ary News HD",
    category: "news",
    country: "PK",
    language: "URDU",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Arynews.jpg",
    url: "https://tamashaweb.com/ary-news",
    description: "A bilingual news channel in English and Urdu",
    isLive: true,
  },
];

export const COUNTRIES = [
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "PK", name: "Pakistan", flag: "🇵🇰" },
];

// Mock news data - in a real app, this would come from an API
export const MOCK_NEWS: NewsItem[] = [
  {
    id: "news-1",
    title: "Major Technology Breakthrough Announced",
    description: "Scientists reveal revolutionary advancement in quantum computing that could transform the industry",
    country: "US",
    category: "tech",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
    url: "#",
    publishedAt: "2025-01-30T14:30:00Z",
    source: "Tech News Network",
  },
  {
    id: "news-2",
    title: "Global Climate Summit Reaches Historic Agreement",
    description: "World leaders unite on ambitious new climate targets for the next decade",
    country: "International",
    category: "world",
    thumbnail: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=300&h=200&fit=crop",
    url: "#",
    publishedAt: "2025-01-30T12:15:00Z",
    source: "World News Today",
  },
  {
    id: "news-3",
    title: "Championship Finals Set for Weekend",
    description: "Two powerhouse teams prepare for the ultimate showdown in this year's championship",
    country: "US",
    category: "sports",
    thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=200&fit=crop",
    url: "#",
    publishedAt: "2025-01-30T10:45:00Z",
    source: "Sports Central",
  },
  {
    id: "news-4",
    title: "Market Reaches New All-Time High",
    description: "Stock indices continue record-breaking rally as investor confidence soars",
    country: "US",
    category: "business",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=300&h=200&fit=crop",
    url: "#",
    publishedAt: "2025-01-30T09:20:00Z",
    source: "Financial Report",
  },
];

export const getChannelsByCountry = (country: string) => {
  return LIVE_CHANNELS.filter(channel => channel.country === country || channel.country === "International");
};

export const getChannelsByCategory = (category: LiveChannel['category']) => {
  return LIVE_CHANNELS.filter(channel => channel.category === category);
};

export const getNewsByCountry = (country: string) => {
  return MOCK_NEWS.filter(news => news.country === country || news.country === "International");
};

// Ad banners system
export interface AdBanner {
  id: string;
  title: string;
  image: string;
  url: string;
  duration: number; // seconds
  type: "banner" | "video" | "popup";
  placement: "top" | "bottom" | "sidebar" | "modal";
  targeting: {
    plans: ("free" | "premium")[];
    countries?: string[];
    categories?: string[];
  };
}

export const AD_BANNERS: AdBanner[] = [
  {
    id: "banner-1",
    title: "Premium Gaming Setup",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=200&fit=crop",
    url: "#gaming-gear",
    duration: 5,
    type: "banner",
    placement: "top",
    targeting: {
      plans: ["free"],
      categories: ["entertainment", "sports"]
    }
  },
  {
    id: "banner-2", 
    title: "Travel Deals 2024",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=200&fit=crop",
    url: "#travel-deals",
    duration: 5,
    type: "banner",
    placement: "bottom",
    targeting: {
      plans: ["free"],
      countries: ["US", "UK", "CA"]
    }
  },
  {
    id: "banner-3",
    title: "Smart Home Solutions",  
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=200&fit=crop",
    url: "#smart-home",
    duration: 8,
    type: "banner",
    placement: "sidebar",
    targeting: {
      plans: ["free"]
    }
  },
  {
    id: "video-ad-1",
    title: "Car Insurance Savings",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
    url: "#car-insurance", 
    duration: 15,
    type: "video",
    placement: "modal",
    targeting: {
      plans: ["free"],
      categories: ["news"]
    }
  }
];

export const getAdsForUser = (userPlan: "free" | "premium", country?: string, category?: string) => {
  if (userPlan === "premium") return []; // No ads for premium users
  
  return AD_BANNERS.filter(ad => {
    // Check plan targeting
    if (!ad.targeting.plans.includes(userPlan)) return false;
    
    // Check country targeting if specified
    if (ad.targeting.countries && country && !ad.targeting.countries.includes(country)) return false;
    
    // Check category targeting if specified  
    if (ad.targeting.categories && category && !ad.targeting.categories.includes(category)) return false;
    
    return true;
  });
};
