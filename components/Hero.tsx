"use client";

import { motion, useReducedMotion } from "motion/react";
import { wedding } from "@/lib/wedding";

interface HeroProps {
  entered: boolean;
}

export default function Hero({ entered }: HeroProps) {
  const reduce = useReducedMotion();

  const fade = (delay: number) => ({
    initial:
      reduce && entered
        ? false
        : {
            opacity: 0,
            y: 24,
          },

    animate:
      entered
        ? {
            opacity: 1,
            y: 0,
          }
        : {
            opacity: 0,
            y: 24,
          },

    transition: {
      duration: 1,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <header className="relative min-h-svh overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/photos/hero.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 flex min-h-svh items-center justify-center px-4 py-12 sm:px-6 sm:py-16">
        <div
          className="
            relative
            w-[min(88vw,680px)]
            sm:w-[min(82vw,680px)]
            md:w-[min(72vw,680px)]
            lg:w-[min(58vw,680px)]
            xl:w-[min(52vw,680px)]
          "
        >
          <img
            src="/photos/lace.webp"
            alt=""
            aria-hidden="true"
            className="block h-auto w-full select-none"
          />

            <div
              className="
                absolute
                inset-x-[16%]
                top-[17%]
                bottom-[17%]
                flex
                flex-col
                items-center
                justify-center
                text-center
              "
            >
            <motion.p
              className="
                w-full
                max-w-full
                text-center
                text-[clamp(6px,1.8vw,10px)]
                font-medium
                uppercase
                leading-tight
                tracking-[0.16em]
                text-maroon/75
                sm:tracking-[0.28em]
                md:tracking-[0.32em]
              "
              {...fade(0.1)}
            >
              You are cordially invited
            </motion.p>

            <motion.p
              className="
                mt-[0.5%]
                font-serif
                text-[10px]
                italic
                text-maroon/70
                sm:text-xs
                md:text-sm
              "
              {...fade(0.25)}
            >
              to the wedding of
            </motion.p>

            <motion.h1
              className="
              mt-[5%]
              max-w-full
              font-script
              text-[clamp(1.65rem,5.5vw,3.5rem)]
              leading-none
              text-maroon
              lg:text-[clamp(2.5rem,4.5vw,5.5rem)]
              "
              {...fade(0.4)}
            >
              {wedding.groom}
            </motion.h1>

            <motion.div
              className="
                my-[2%]
                flex
                w-full
                items-center
                justify-center
                gap-3
              "
              {...fade(0.55)}
            >
              <span className="h-px w-[18%] bg-gold/70" />

              <span className="font-script text-xl text-gold sm:text-2xl md:text-3xl">
                &amp;
              </span>

              <span className="h-px w-[18%] bg-gold/70" />
            </motion.div>

            <motion.h1
              className="
              mt-[5%]
              max-w-full
              font-script
              text-[clamp(1.65rem,5.5vw,3.5rem)]
              leading-none
              text-maroon
              lg:text-[clamp(2.5rem,4.5vw,5.5rem)]
              "
              {...fade(0.7)}
            >
              {wedding.bride}
            </motion.h1>

            <motion.div
              className="mt-[7%]"
              {...fade(0.95)}
            >
              <p
                className="
                  whitespace-nowrap
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-maroon-deep
                  sm:text-[10px]
                  sm:tracking-[0.22em]
                  md:text-xs
                "
              >
                {wedding.weekday.toUpperCase()} ·{" "}
                {wedding.dateLabel.toUpperCase()}
              </p>

              <p
                className="
                  mt-1
                  whitespace-nowrap
                  font-serif
                  text-[9px]
                  italic
                  text-maroon/75
                  sm:text-[11px]
                  md:text-sm
                "
              >
                {wedding.venues.church.name}, Kalutara
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}