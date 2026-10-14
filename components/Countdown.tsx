"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/lib/wedding";
import Reveal from "./Reveal";

const target = new Date(wedding.dateISO).getTime();

function remaining(now: number) {
  const diff = Math.max(0, target - now);
  const s = Math.floor(diff / 1000);

  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown() {
  const [time, setTime] =
    useState<ReturnType<typeof remaining> | null>(null);

  useEffect(() => {
    const tick = () => {
      setTime(remaining(Date.now()));
    };

    tick();

    const id = setInterval(tick, 1000);

    return () => clearInterval(id);
  }, []);

  const cells = [
    {
      label: "Days",
      value: time ? String(time.days) : "--",
    },
    {
      label: "Hours",
      value: time ? pad(time.hours) : "--",
    },
    {
      label: "Minutes",
      value: time ? pad(time.minutes) : "--",
    },
    {
      label: "Seconds",
      value: time ? pad(time.seconds) : "--",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-maroon px-6 py-24 text-center text-cream sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute left-6 right-6 top-8 border-t border-gold/15 sm:left-12 sm:right-12"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-6 right-6 border-t border-gold/15 sm:left-12 sm:right-12"
      />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-center justify-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-gold/50 sm:w-16"
            />

            <p className="eyebrow text-gold">Counting the days</p>

            <span
              aria-hidden="true"
              className="h-px w-10 bg-gold/50 sm:w-16"
            />
          </div>

          <h2 className="mt-4 font-script text-5xl leading-none sm:text-6xl md:text-7xl">
            until forever
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className="mx-auto mt-14 grid max-w-4xl grid-cols-2 sm:grid-cols-4"
            role="timer"
            aria-live="off"
          >
            {cells.map((cell, index) => (
              <div
                key={cell.label}
                className={[
                  "relative px-5 py-5 sm:px-8 sm:py-3",
                  index < cells.length - 1
                    ? "sm:border-r sm:border-gold/25"
                    : "",
                  index < 2
                    ? "border-b border-gold/20 sm:border-b-0"
                    : "",
                ].join(" ")}
              >
                <div
                  className="
                    font-light
                    text-6xl
                    leading-none
                    tracking-[-0.04em]
                    tabular-nums
                    text-cream
                    sm:text-7xl
                    md:text-8xl
                  "
                >
                  {cell.value}
                </div>

                <div className="mt-4 text-[10px] uppercase tracking-[0.35em] text-gold sm:text-[11px]">
                  {cell.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex items-center justify-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-12 bg-gold/30 sm:w-20"
            />

            <span
              aria-hidden="true"
              className="font-serif text-lg text-gold/80"
            >
              ❦
            </span>

            <span
              aria-hidden="true"
              className="h-px w-12 bg-gold/30 sm:w-20"
            />
          </div>

          <p className="mt-5 font-serif text-base italic tracking-wide text-blush sm:text-lg">
            until we say “I do”
          </p>
        </Reveal>
      </div>
    </section>
  );
}