"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  IconBuildingChurch,
  IconConfetti,
  IconGlassChampagne,
  IconToolsKitchen2,
  IconSparkles,
  IconHeart,
} from "@tabler/icons-react";
import { Flourish } from "./Ornaments";
import { wedding } from "@/lib/wedding";

gsap.registerPlugin(ScrollTrigger);

// CALENDAR DOWNLOAD

function downloadCalendar() {
  const { startUTC, endUTC, title } = wedding.calendar;
  const { church, hotel } = wedding.venues;

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Gayasha and Nimesh//Wedding//EN",
    "BEGIN:VEVENT",
    `UID:wedding-${startUTC}@gayasha-nimesh`,
    `DTSTAMP:${startUTC}`,
    `DTSTART:${startUTC}`,
    `DTEND:${endUTC}`,
    `SUMMARY:${title}`,
    `LOCATION:${church.name}\\, Kalutara (Mass) / ${hotel.name}\\, Kalutara (Reception)`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const url = URL.createObjectURL(
    new Blob([ics], {
      type: "text/calendar;charset=utf-8",
    })
  );

  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = "gayasha-nimesh-wedding.ics";

  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);

  URL.revokeObjectURL(url);
}

function ScheduleIcon({ index }: { index: number }) {
  const props = {
    size: 21,
    stroke: 1.35,
    "aria-hidden": true,
  };

  switch (index) {
    case 0:
      return <IconBuildingChurch {...props} />;

    case 1:
      return <IconConfetti {...props} />;

    case 2:
      return <IconGlassChampagne {...props} />;

    case 3:
      return <IconToolsKitchen2 {...props} />;

    case 4:
      return <IconSparkles {...props} />;

    case 5:
      return <IconHeart {...props} />;

    default:
      return null;
  }
}

export default function Schedule() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const timelineRef = useRef<HTMLDivElement | null>(null);

  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;

    const timeline = timelineRef.current;

    if (!section || !timeline) {
      return;
    }

    const ctx = gsap.context(() => {
      const items = itemsRef.current.filter(
        (item): item is HTMLLIElement => item !== null
      );


        // REDUCED MOTION

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            ".schedule-heading-main",
            ".schedule-heading-script",
            ".schedule-divider",
            ...items,
          ],
          {
            opacity: 1,
            y: 0,
          }
        );

        gsap.set(timeline, {
          scaleY: 1,
        });

        return;
      }

      gsap.set(".schedule-heading-main", {
        opacity: 0,
        y: 20,
      });

      gsap.set(".schedule-heading-script", {
        opacity: 0,
        y: 15,
      });

      gsap.set(".schedule-divider", {
        opacity: 0,
        scaleX: 0.5,
      });

      const headingTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      headingTimeline
        .to(".schedule-heading-main", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .to(
          ".schedule-heading-script",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .to(
          ".schedule-divider",
          {
            opacity: 1,
            scaleX: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        );

      gsap.set(timeline, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.to(timeline, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timeline,
          start: "top 72%",
          end: "bottom 70%",
          scrub: 0.7,
        },
      });

      items.forEach((item) => {
        const icon = item.querySelector(
          ".schedule-icon"
        ) as HTMLElement | null;

        const time = item.querySelector(
          ".schedule-time"
        ) as HTMLElement | null;

        const title = item.querySelector(
          ".schedule-title"
        ) as HTMLElement | null;

        if (!icon || !time || !title) {
          return;
        }

        gsap.set(item, {
          opacity: 0,
          y: 40,
        });

        gsap.set(icon, {
          opacity: 0,
          scale: 0.65,
        });

        gsap.set(time, {
          opacity: 0,
          y: 16,
        });

        gsap.set(title, {
          opacity: 0,
          y: 12,
        });

        const eventTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 84%",
            once: true,
          },
        });

        eventTimeline
          .to(item, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power3.out",
          })
          .to(
            icon,
            {
              opacity: 1,
              scale: 1,
              duration: 0.55,
              ease: "back.out(1.7)",
            },
            "-=0.4"
          )
          .to(
            time,
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.28"
          )
          .to(
            title,
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              ease: "power3.out",
            },
            "-=0.25"
          );
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-parchment
        px-6
        py-24
        sm:py-28
        lg:py-32
      "
    >

      <div className="text-center">

        <p className="mt-3 uppercase tracking-[0.32em] text-gold sm:text-4xl">
          Wedding Day
        </p>

        <h2
          className="
            schedule-heading-script
            mt-2
            font-script
            text-[3.15rem]
            leading-none
            text-[#7A263A]
            sm:text-[3.7rem]
          "
        >
          Schedule
        </h2>

        <Flourish className="my-5" />

      </div>

      <div
        className="
          relative
          mx-auto
          mt-16
          max-w-107.5
          sm:mt-20
        "
      >

        <div
          ref={timelineRef}
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-0
            h-[calc(100%-10px)]
            w-px
            -translate-x-1/2
            bg-[#8ca3ba]/45
          "
        />

        <ol className="relative">
          {wedding.schedule.map((item, index) => (
            <li
              key={`${item.time}-${item.title}`}
              ref={(element) => {
                itemsRef.current[index] = element;
              }}
              className="
                relative
                flex
                flex-col
                items-center
                pb-16
                last:pb-5
                sm:pb-18
              "
            >


              <div
                className="
                  schedule-icon
                  relative
                  z-10
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#8ca3ba]/65
                  bg-parchment
                  text-[#7A263A]
                "
              >
                <ScheduleIcon index={index} />
              </div>

              <p
                className="
                  schedule-time
                  mt-5
                  font-script
                  text-[2.65rem]
                  leading-none
                  text-[#7A263A]
                  sm:text-[3rem]
                "
              >
                {item.time}
              </p>

              <p
                className="
                  schedule-title
                  mt-3
                  max-w-75
                  text-center
                  text-[0.66rem]
                  font-medium
                  uppercase
                  tracking-[0.4em]
                  text-[#7A263A]
                  sm:text-[0.7rem]
                  sm:tracking-[0.43em]
                "
              >
                {item.title}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-10 text-center sm:mt-12">
        <button
          type="button"
          onClick={downloadCalendar}
          className="
            rounded-full
            border
            border-[#7A263A]/70
            px-8
            py-3
            text-[0.68rem]
            font-medium
            uppercase
            tracking-[0.28em]
            text-[#7A263A]
            transition-all
            duration-300
            hover:bg-[#7A263A]
            hover:text-[#f4f0e7]
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-[#7A263A]
          "
        >
          Save Our Day
        </button>

        <p
          className="
            mt-3
            text-xs
            italic
            text-[#7A263A]/70
          "
        >
          Add the wedding to your calendar
        </p>
      </div>
    </section>
  );
}