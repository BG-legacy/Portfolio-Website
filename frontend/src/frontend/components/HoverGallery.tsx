"use client";

import Image from "next/image";
import { useState } from "react";

export default function HoverGallery({ images }: { images: string[] }) {
  const [hovered, setHovered] = useState(false);

  const offset = ((images.length - 1) / images.length) * 100;

  return (
    <div
      className="mt-6 overflow-hidden rounded-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="flex transition-transform duration-[1200ms] ease-in-out"
        style={{
          transform: hovered ? `translateX(-${offset}%)` : "translateX(0)",
        }}
      >
        {images.map((src, i) => (
          <div key={i} className="relative aspect-video w-full shrink-0">
            <Image
              src={src}
              alt={`Photo ${i + 1}`}
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
