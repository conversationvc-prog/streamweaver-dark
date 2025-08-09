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
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-xl border bg-muted relative">
        {isArchive ? (
          <iframe
            src={embedUrl}
            title="Internet Archive Player"
            className="h-full w-full"
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
              youtube: { playerVars: { modestbranding: 1, rel: 0 } },
              file: { attributes: { controlsList: "nodownload" } },
            }}
          />
        ) : (
          <iframe
            src={url}
            title="Embedded Page Player"
            className="h-full w-full"
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture"
            sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-presentation"
            referrerPolicy="no-referrer"
          />
        )}
      </AspectRatio>
      {!canReactPlayer && !isArchive && (
        <p className="mt-2 text-xs text-muted-foreground">
          If this site blocks embedding, open directly: {" "}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Open in new tab
          </a>
        </p>
      )}
    </div>
  );
};

export default VideoPlayer;
