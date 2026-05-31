interface MdxVideoProps {
  src: string;
  title?: string;
  caption?: string;
  poster?: string;
}

export function MdxVideo({ src, title, caption, poster }: MdxVideoProps) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-xl border border-border/50">
        <video
          src={src}
          title={title}
          poster={poster}
          controls
          className="w-full"
          preload="metadata"
        >
          Your browser does not support the video element.
        </video>
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-surface-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
