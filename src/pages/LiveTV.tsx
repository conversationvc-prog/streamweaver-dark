import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { LIVE_CHANNELS, COUNTRIES, MOCK_NEWS, getChannelsByCountry, getNewsByCountry, LiveChannel, NewsItem } from "@/data/liveData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Globe, Clock, Users } from "lucide-react";
import { VideoPlayer } from "@/components/VideoPlayer";

const LiveTV = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("US");
  const [selectedChannel, setSelectedChannel] = useState<LiveChannel | null>(null);

  const filteredChannels = getChannelsByCountry(selectedCountry);
  const filteredNews = getNewsByCountry(selectedCountry);

  const channelsByCategory = {
    news: filteredChannels.filter(ch => ch.category === "news"),
    sports: filteredChannels.filter(ch => ch.category === "sports"),
    entertainment: filteredChannels.filter(ch => ch.category === "entertainment"),
    documentary: filteredChannels.filter(ch => ch.category === "documentary"),
  };

  const handleChannelSelect = (channel: LiveChannel) => {
    setSelectedChannel(channel);
  };

  return (
    <>
      <Helmet>
        <title>Live TV - Crunchy Watch</title>
        <meta name="description" content="Watch live TV channels from around the world. News, sports, entertainment and more." />
      </Helmet>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Live TV</h1>
            <p className="text-muted-foreground">Watch live channels from around the world</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                {COUNTRIES.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    {country.flag} {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Badge variant="outline" className="flex items-center gap-1">
              <Globe className="h-3 w-3" />
              {filteredChannels.length} channels
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="channels" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="channels">Live Channels</TabsTrigger>
            <TabsTrigger value="news">Latest News</TabsTrigger>
          </TabsList>
          
          <TabsContent value="channels" className="space-y-6">
            {/* Video Player */}
            {selectedChannel && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <img 
                      src={selectedChannel.logo} 
                      alt={selectedChannel.name}
                      className="h-8 w-8 object-contain"
                    />
                    {selectedChannel.name}
                    <Badge variant="destructive" className="ml-auto">
                      LIVE
                    </Badge>
                  </CardTitle>
                  <CardDescription>{selectedChannel.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <VideoPlayer url={selectedChannel.url} />
                </CardContent>
              </Card>
            )}

            {/* Channel Categories */}
            <div className="space-y-6">
              {Object.entries(channelsByCategory).map(([category, channels]) => (
                channels.length > 0 && (
                  <div key={category} className="space-y-3">
                    <h2 className="text-xl font-semibold capitalize">{category}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {channels.map((channel) => (
                        <Card 
                          key={channel.id} 
                          className={`cursor-pointer transition-all hover:shadow-lg ${
                            selectedChannel?.id === channel.id ? "ring-2 ring-primary" : ""
                          }`}
                          onClick={() => handleChannelSelect(channel)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <img 
                                src={channel.logo} 
                                alt={channel.name}
                                className="h-12 w-12 object-contain rounded"
                              />
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold truncate">{channel.name}</h3>
                                <p className="text-sm text-muted-foreground mb-2">{channel.description}</p>
                                <div className="flex items-center gap-2">
                                  <Badge variant="secondary" className="text-xs">
                                    {channel.country}
                                  </Badge>
                                  {channel.isLive && (
                                    <Badge variant="destructive" className="text-xs">
                                      LIVE
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          </TabsContent>

          <TabsContent value="news" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((news) => (
                <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={news.thumbnail} 
                      alt={news.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{news.category}</Badge>
                        <Badge variant="secondary">{news.country}</Badge>
                      </div>
                      <h3 className="font-semibold line-clamp-2">{news.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{news.description}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{news.source}</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {new Date(news.publishedAt).toLocaleDateString()}
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
};

export default LiveTV;