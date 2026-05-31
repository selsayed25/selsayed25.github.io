interface MdxYouTubeProps {
  id: string;
  title?: string;
  caption?: string;
}

export function MdxYouTube({ id, title, caption }: MdxYouTubeProps) {
  return (
    <figure className="my-8">
      <div className="relative aspect-video overflow-hidden rounded-xl border border-border/50">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={title || "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-surface-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
