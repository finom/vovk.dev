"use client";
import { useEffect, useRef } from "react";
import * as AsciinemaPlayer from "asciinema-player";
import "asciinema-player/dist/bundle/asciinema-player.css";

export default function Asciinema({ src, options = {} }: { src: string; options?: AsciinemaPlayer.AsciinemaPlayerOptions }) {
  const containerRef = useRef(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (containerRef.current && !isRenderedRef.current) {
      AsciinemaPlayer.create(src, containerRef.current, options);
      isRenderedRef.current = true;
    }

  }, [src, options]);

  return <div ref={containerRef} />;
}