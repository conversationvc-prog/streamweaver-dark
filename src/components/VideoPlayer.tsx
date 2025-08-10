import React, { useMemo } from "react";
import ReactPlayer from "react-player/lazy";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const VideoPlayer = ({ url }: { url: string }) => {
  const { isArchive, embedUrl, canReactPlayer } = useMemo(() => {
    const archiveDetailsRegex = /archive\.org\/details\//i;
    const archiveEmbedRegex = /archive\.org\/embed\//i;
    const isArchive = archiveDetailsRegex.test(url) || archiveEmbedRegex.test(url);
    const embedUrl = isArchive ? url.replace(archiveDetailsRegex, "archive.org/embed/") : url;

    const isDirect = /\.(mp4|webm|m3u8|mpd)(\?|$)/i.test(url);
    const isYouTube = /(youtube\.com|youtu\.be)/i.test(url);
    const canPlayFromLib = (ReactPlayer as any)?.canPlay?.(url) ?? false;
    const canReactPlayer = canPlayFromLib || isDirect || isYouTube;

    return { isArchive, embedUrl, canReactPlayer };
  }, [url]);

  return (
    <div className="w-full">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-xl relative">
        {isArchive ? (
          <iframe
            src={embedUrl}
            title="Internet Archive Player"
            className="h-full w-full border-0"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer"
          />
        ) : canReactPlayer ? (
          <ReactPlayer
            url={url}
            controls
            width="100%"
            height="100%"
            style={{ position: "absolute", inset: 0 }}
            config={{
              youtube: { playerVars: { modestbranding: 1, rel: 0, playsinline: 1 } },
              file: {
                attributes: { controlsList: "nodownload" },
                forceHLS: true,
                hlsVersion: "1.5.7",
                hlsOptions: { lowLatencyMode: true },
              },
            }}
            playsinline
          />
        ) : (
          <iframe
            src={url}
            title="Embedded Page Player"
            className="h-full w-full border-0"
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-presentation allow-popups"
            referrerPolicy="no-referrer"
            allowFullScreen
          />
        )}
      </AspectRatio>
    </div>
  );
};

export default VideoPlayer;
