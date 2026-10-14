"use client";

import { useEffect, useRef, useState } from "react";
import { wedding } from "@/lib/wedding";

interface MusicPlayerProps {
  shouldPlay: boolean;
}

export default function MusicPlayer({
  shouldPlay,
}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!shouldPlay) return;

    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.8;

    audio
      .play()
      .then(() => {
        setPlaying(true);
      })
      .catch(() => {
        setPlaying(false);
      });
  }, [shouldPlay]);

  async function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={wedding.music}
        loop
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        aria-pressed={playing}
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 bg-cream/90 text-maroon shadow-lg backdrop-blur transition hover:bg-maroon hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
      >
        {playing ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <rect
              x="6"
              y="5"
              width="4"
              height="14"
              rx="1"
            />
            <rect
              x="14"
              y="5"
              width="4"
              height="14"
              rx="1"
            />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9 18V6l10-2v12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <circle
              cx="6.5"
              cy="18"
              r="3"
              stroke="currentColor"
              strokeWidth="2"
            />

            <circle
              cx="16.5"
              cy="16"
              r="3"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        )}
      </button>
    </>
  );
}