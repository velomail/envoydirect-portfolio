"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";

type ProjectShotProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export function ProjectShot({ src, alt, priority = false }: ProjectShotProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  function onMove(event: MouseEvent<HTMLDivElement>) {
    const frame = frameRef.current;
    const image = imageRef.current;
    if (!frame || !image) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = frame.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    image.style.transform = `scale(1.06) translate(${x * 12}px, ${y * 8}px)`;
  }

  function onLeave() {
    const image = imageRef.current;
    if (!image) return;
    image.style.transform = "scale(1) translate(0, 0)";
  }

  return (
    <div
      ref={frameRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative aspect-[16/10] w-full cursor-crosshair overflow-hidden border border-border bg-panel"
    >
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={90}
        sizes="(min-width: 1024px) 520px, 100vw"
        className="object-cover object-top transition-transform duration-500 ease-out will-change-transform motion-reduce:transform-none"
      />
    </div>
  );
}
