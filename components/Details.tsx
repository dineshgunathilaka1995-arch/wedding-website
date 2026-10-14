import { wedding } from "@/lib/wedding";
import Reveal from "./Reveal";
import { Flourish, LaceEdge } from "./Ornaments";

type Venue = (typeof wedding.venues)[keyof typeof wedding.venues];

function MapPreview({ venue }: { venue: Venue }) {
  const q = encodeURIComponent(venue.mapQuery);

  return (
    <div className="relative mt-7 overflow-hidden border border-gold/35 bg-[#e9e1d5]">
      <div className="relative h-64 overflow-hidden sm:h-72">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `
              linear-gradient(
                115deg,
                transparent 0%,
                transparent 18%,
                rgba(255,255,255,0.55) 18.5%,
                rgba(255,255,255,0.55) 21%,
                transparent 21.5%,
                transparent 100%
              ),
              linear-gradient(
                25deg,
                transparent 0%,
                transparent 34%,
                rgba(255,255,255,0.7) 34.5%,
                rgba(255,255,255,0.7) 37%,
                transparent 37.5%,
                transparent 100%
              ),
              linear-gradient(
                160deg,
                transparent 0%,
                transparent 67%,
                rgba(255,255,255,0.55) 67.5%,
                rgba(255,255,255,0.55) 70%,
                transparent 70.5%,
                transparent 100%
              )
            `,
          }}
        />

        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 600 300"
          preserveAspectRatio="none"
        >
          <path
            d="M-30 220 C100 190 120 105 230 120 S390 230 630 65"
            fill="none"
            stroke="#fbf5ec"
            strokeWidth="18"
            opacity="0.9"
          />
          <path
            d="M-30 220 C100 190 120 105 230 120 S390 230 630 65"
            fill="none"
            stroke="#cdbfae"
            strokeWidth="1.2"
            opacity="0.8"
          />

          <path
            d="M80 -20 C125 70 215 80 310 35 S470 5 530 330"
            fill="none"
            stroke="#fbf5ec"
            strokeWidth="12"
            opacity="0.85"
          />
          <path
            d="M80 -20 C125 70 215 80 310 35 S470 5 530 330"
            fill="none"
            stroke="#d2c5b5"
            strokeWidth="1"
            opacity="0.75"
          />

          <path
            d="M-20 55 C115 45 160 170 285 180 S460 155 620 205"
            fill="none"
            stroke="#ded4c7"
            strokeWidth="2"
            opacity="0.8"
          />

          <path
            d="M350 -20 C340 70 390 110 475 125 S555 180 630 190"
            fill="none"
            stroke="#d7ccbe"
            strokeWidth="2"
            opacity="0.65"
          />
        </svg>

        <div
          aria-hidden="true"
          className="absolute left-[12%] top-[25%] rotate-[-8deg] text-[9px] uppercase tracking-[0.18em] text-maroon/30"
        >
          Kalutara
        </div>

        <div
          aria-hidden="true"
          className="absolute right-[13%] top-[30%] rotate-[5deg] text-[8px] uppercase tracking-[0.16em] text-maroon/25"
        >
          Beach
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-[18%] left-[28%] rotate-12 text-[8px] uppercase tracking-[0.14em] text-maroon/25"
        >
          Sri Lanka
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-maroon/10" />

          <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gold bg-cream shadow-[0_4px_18px_rgba(107,29,45,0.18)]">
            <div className="h-3 w-3 rounded-full bg-maroon" />
          </div>

          <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap bg-cream/90 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-maroon shadow-sm backdrop-blur-sm">
            {venue.name}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-maroon/10 to-transparent" />

        <a
          href={`https://maps.google.com/maps?q=${q}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            absolute bottom-4 right-4
            inline-flex items-center gap-2
            border border-maroon/20
            bg-cream/95
            px-4 py-2.5
            font-serif text-xs
            tracking-[0.12em]
            text-maroon
            shadow-sm
            backdrop-blur-sm
            transition-all duration-300
            hover:border-maroon
            hover:bg-cream
            hover:shadow-md
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-maroon
          "
        >
          <span>OPEN IN MAPS</span>
          <span
            aria-hidden="true"
            className="text-gold transition-transform duration-300 group-hover:translate-x-0.5"
          >
            ↗
          </span>
        </a>
      </div>
    </div>
  );
}

function VenueCard({ venue }: { venue: Venue }) {
  return (
    <Reveal>
      <article className="group relative overflow-hidden border border-gold/35 bg-cream">
        <LaceEdge />

        <div className="px-6 pb-8 pt-8 sm:px-8 sm:pb-9">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-gold/60" />
              <p className="eyebrow">{venue.label}</p>
              <span className="h-px w-7 bg-gold/60" />
            </div>

            <h3 className="mt-4 font-script text-4xl leading-tight text-maroon sm:text-[2.7rem]">
              {venue.name}
            </h3>

            <p className="mt-2 text-sm tracking-wide text-maroon-deep/65">
              {venue.place}
            </p>

            <p className="mt-2 font-serif text-sm italic text-maroon/75">
              {venue.time}
            </p>
          </div>

          <Flourish className="mt-6 h-3 w-32 opacity-65" />

          <MapPreview venue={venue} />
        </div>
      </article>
    </Reveal>
  );
}

export default function Details() {
  return (
    <section className="relative overflow-hidden bg-parchment px-6 py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-gold/30"
      />

      <Reveal className="relative text-center">
        <p className="mt-3 uppercase tracking-[0.32em] text-gold sm:text-4xl">The Setting</p>

        <h2 className="mt-3 font-script text-5xl text-maroon sm:text-6xl">
          Details
        </h2>

        <Flourish className="mt-5" />

        <p className="mx-auto mt-6 max-w-md font-serif text-md leading-7 text-maroon-deep/65">
          Two beautiful moments, two special places.
          <br />
          We would love to celebrate with you.
        </p>
      </Reveal>

      <div className="relative mx-auto mt-14 grid max-w-5xl gap-10 md:mt-16 md:grid-cols-2 md:gap-8">
        <VenueCard venue={wedding.venues.church} />
        <VenueCard venue={wedding.venues.hotel} />
      </div>
    </section>
  );
}
