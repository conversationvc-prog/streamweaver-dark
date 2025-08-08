import ReactPlayer from "react-player/lazy";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const VideoPlayer = ({ url }: { url: string }) => {
  const isArchiveEmbed = /archive\.org\/embed\//.test(url);

  return (
    <div className="w-full">
      <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-xl border bg-muted">
        {isArchiveEmbed ? (
          <iframe
            src={url}
            title="Internet Archive Player"
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
          />
        ) : (
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
        )}
      </AspectRatio>
    </div>
  );
};

export default VideoPlayer;
