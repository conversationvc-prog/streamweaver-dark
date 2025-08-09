import React, { useMemo, useRef, useCallback } from "react";
import ReactPlayer from "react-player/lazy";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Maximize2 } from "lucide-react";

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

  const containerRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const handleFullscreen = useCallback(() => {
    const el = iframeRef.current ?? containerRef.current;
    if (!el) return;
    const doc: any = document;
    if (!doc.fullscreenElement) {
      el.requestFullscreen?.();
    } else {
      doc.exitFullscreen?.();
    }
  }, []);

  return (
    <div className="w-full" ref={containerRef}>
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
          <>
            <Button
              type="button"
              onClick={handleFullscreen}
              variant="secondary"
              size="icon"
              className="absolute right-2 top-2 z-10 shadow hover-scale animate-fade-in"
              aria-label="Toggle fullscreen"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
            <iframe
              ref={iframeRef}
              src={url}
              title="Embedded Page Player"
              className="h-full w-full"
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-presentation allow-popups"
              referrerPolicy="no-referrer"
              allowFullScreen
            />
          </>
        )}
      </AspectRatio>
    </div>
  );
};

export default VideoPlayer;
