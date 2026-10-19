import Image from "next/image";
import { wedding } from "@/lib/wedding";
import Reveal from "./Reveal";
import { Flourish } from "./Ornaments";

export default function Gallery() {
  return (
    <section className="lace-bg px-6 py-24">
      <Reveal className="text-center">
        <p className="mt-3 uppercase tracking-[0.32em] text-gold sm:text-4xl">
          Captured
        </p>

        <h2 className="mt-3 font-script text-5xl text-maroon sm:text-6xl">
          Our Moments
        </h2>
      </Reveal>

      <Flourish className="mx-auto my-5" />

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-5 lg:gap-7">
        {wedding.gallery.slice(0, 3).map((photo, i) => (
          <Reveal
            key={i}
            delay={i * 0.1}
            className={`
              group relative overflow-hidden
              border-[6px] border-cream
              bg-cream
              shadow-[0_10px_35px_rgba(70,20,20,0.18)]
              ring-1 ring-gold/50
              ${i === 1 ? "sm:-translate-y-8" : "sm:translate-y-4"}
            `}
          >
            <div className="relative aspect-4/5 overflow-hidden border border-gold/40">
              {photo.src ? (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="
                    object-cover
                    transition-all
                    duration-1000
                    ease-out
                    md:grayscale
                    md:group-hover:grayscale-0
                    group-hover:scale-105
                  "
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-blush/30 p-6 text-center text-maroon/70">
                  <span className="text-xs uppercase tracking-[0.25em]">
                    Photo {i + 1}
                  </span>
                </div>
              )}

              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#470909]/20 via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-30" />
            </div>

            {/* <div className="absolute bottom-3 left-3 flex h-7 w-7 items-center justify-center rounded-full border border-gold/70 bg-cream/90 text-xs text-maroon">
              {String(i + 1).padStart(2, "0")}
            </div> */}
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-md text-center">
        <div className="mx-auto h-px w-20 bg-gold/60" />

        <p className="mt-5 font-serif text-sm italic tracking-wide text-maroon/70">
          A collection of moments we will always cherish
        </p>
      </div>
    </section>
  );
}