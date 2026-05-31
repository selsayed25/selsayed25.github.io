"use client";

import NextImage from "next/image";
import { useState } from "react";

interface MdxImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export function MdxImage({ src, alt, width, height, caption }: MdxImageProps) {
  const [zoomed, setZoomed] = useState(false);

  const isRemote = src.startsWith("http");

  if (isRemote) {
    return (
      <figure className="my-8">
        <div
          className={`relative overflow-hidden rounded-xl border border-border/50 transition-all ${
            zoomed ? "cursor-zoom-out" : "cursor-zoom-in"
          }`}
          onClick={() => setZoomed(!zoomed)}
        >
          <NextImage
            src={src}
            alt={alt}
            width={width || 1200}
            height={height || 675}
            className={`h-auto w-full ${zoomed ? "scale-150" : "scale-100"} transition-transform duration-300`}
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

  return (
    <figure className="my-8">
      <div
        className={`relative overflow-hidden rounded-xl border border-border/50 ${
          zoomed ? "cursor-zoom-out" : "cursor-zoom-in"
        }`}
        onClick={() => setZoomed(!zoomed)}
      >
        <NextImage
          src={src}
          alt={alt}
          width={width || 1200}
          height={height || 675}
          className={`h-auto w-full ${zoomed ? "scale-150" : "scale-100"} transition-transform duration-300`}
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
