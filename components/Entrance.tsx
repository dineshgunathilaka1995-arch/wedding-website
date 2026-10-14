// "use client";

// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";

// import { wedding } from "@/lib/wedding";

// interface EntranceProps {
//   onEnter: () => void;
//   onReveal: () => void;
// }

// export default function Entrance({
//   onEnter,
//   onReveal,
// }: EntranceProps) {
//   const overlayRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);

//   const [entering, setEntering] = useState(false);

//   useEffect(() => {
//     const overlay = overlayRef.current;
//     const content = contentRef.current;

//     if (!overlay || !content) return;

//     document.body.style.overflow = "hidden";

//     const reduceMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     if (reduceMotion) {
//       gsap.set(content, {
//         opacity: 1,
//         y: 0,
//       });

//       return () => {
//         document.body.style.overflow = "";
//       };
//     }

//     gsap.fromTo(
//       content,
//       {
//         opacity: 0,
//         y: 18,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.2,
//         ease: "power3.out",
//         delay: 0.25,
//       }
//     );

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, []);

//   function handleEnter() {
//     if (entering) return;

//     setEntering(true);

//     onEnter();

//     const overlay = overlayRef.current;
//     const content = contentRef.current;

//     if (!overlay || !content) {
//       document.body.style.overflow = "";
//       onReveal();
//       return;
//     }

//     const reduceMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     if (reduceMotion) {
//       document.body.style.overflow = "";

//       gsap.set(overlay, {
//         display: "none",
//       });

//       onReveal();

//       return;
//     }

//     const tl = gsap.timeline({
//       onComplete: () => {
//         document.body.style.overflow = "";

//         gsap.set(overlay, {
//           display: "none",
//         });

//         onReveal();
//       },
//     });

//     tl.to(content, {
//       opacity: 0,
//       y: -15,
//       duration: 0.45,
//       ease: "power2.in",
//     }).to(
//       overlay,
//       {
//         opacity: 0,
//         duration: 0.85,
//         ease: "power2.inOut",
//       },
//       "-=0.1"
//     );
//   }

//   return (
//     <div
//       ref={overlayRef}
//       className="fixed inset-0 z-100 flex min-h-screen items-center justify-center bg-cream"
//       role="dialog"
//       aria-modal="true"
//       aria-label="Wedding invitation"
//     >
//       <div className="pointer-events-none absolute inset-0 opacity-60">
//         <div className="lace-bg absolute inset-0" />
//       </div>

//       <div className="pointer-events-none absolute inset-5 border border-gold/20 sm:inset-8 md:inset-10" />

//       <div
//         ref={contentRef}
//         className="relative z-10 flex w-full max-w-xl flex-col items-center px-8 text-center"
//       >
//         <p className="eyebrow mb-7 opacity-90">
//           The Wedding Of
//         </p>

//         <h1 className="font-script text-6xl leading-none text-maroon sm:text-7xl md:text-8xl">
//           {wedding.groom}

//           <span className="mx-2 text-4xl text-gold sm:mx-3 sm:text-5xl">
//             &
//           </span>

//           {wedding.bride}
//         </h1>

//         <div className="my-8 flex items-center gap-4">
//           <span className="h-px w-12 bg-gold/50 sm:w-16" />

//           <span
//             className="text-lg text-gold"
//             aria-hidden="true"
//           >
//             ✦
//           </span>

//           <span className="h-px w-12 bg-gold/50 sm:w-16" />
//         </div>

//         <p className="font-serif text-lg tracking-[0.12em] text-maroon-deep sm:text-xl">
//           {wedding.dateLabel}
//         </p>

//         <p className="mt-2 text-sm uppercase tracking-[0.18em] text-maroon/65">
//           {wedding.weekday}
//         </p>

//         <button
//           type="button"
//           onClick={handleEnter}
//           disabled={entering}
//           className="group mt-14 flex flex-col items-center gap-4 text-maroon transition-opacity duration-300 disabled:cursor-default"
//           aria-label="Enter wedding invitation"
//         >
//           <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-gold/60 transition-all duration-500 group-hover:border-maroon group-hover:bg-maroon group-hover:text-cream">
//             <svg
//               width="21"
//               height="21"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1.4"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               aria-hidden="true"
//               className="absolute transition-all duration-300 ease-in-out group-hover:scale-75 group-hover:opacity-0 motion-reduce:transition-none"
//             >
//               <rect
//                 x="3"
//                 y="5"
//                 width="18"
//                 height="14"
//                 rx="1.5"
//               />
//               <path d="m3 7 9 6 9-6" />
//             </svg>

//             <svg
//               width="21"
//               height="21"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1.4"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               aria-hidden="true"
//               className="absolute scale-75 opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none"
//             >
//               <path d="M3 10v9h18v-9" />
//               <path d="m3 10 9 7 9-7" />
//               <path d="M3 10 12 3l9 7" />
//             </svg>
//           </span>

//           <span className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-gold transition-colors duration-300 group-hover:text-maroon">
//             Tap to enter
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import { wedding } from "@/lib/wedding";

interface EntranceProps {
  onEnter: () => void;
  onReveal: () => void;
}

export default function Entrance({
  onEnter,
  onReveal,
}: EntranceProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [entering, setEntering] = useState(false);

  useEffect(() => {
    const overlay = overlayRef.current;
    const content = contentRef.current;

    if (!overlay || !content) return;

    document.body.style.overflow = "hidden";

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(content, {
        opacity: 1,
        y: 0,
      });

      return () => {
        document.body.style.overflow = "";
      };
    }

    gsap.fromTo(
      content,
      {
        opacity: 0,
        y: 18,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.25,
      }
    );

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  function handleEnter() {
    if (entering) return;

    setEntering(true);

    onEnter();

    const overlay = overlayRef.current;
    const content = contentRef.current;

    if (!overlay || !content) {
      document.body.style.overflow = "";
      onReveal();
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      document.body.style.overflow = "";

      gsap.set(overlay, {
        display: "none",
      });

      onReveal();

      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";

        gsap.set(overlay, {
          display: "none",
        });

        onReveal();
      },
    });

    tl.to(content, {
      opacity: 0,
      y: -15,
      duration: 0.45,
      ease: "power2.in",
    }).to(
      overlay,
      {
        opacity: 0,
        duration: 0.85,
        ease: "power2.inOut",
      },
      "-=0.1"
    );
  }

  return (
    <div
      ref={overlayRef}
      className="
        fixed inset-0 z-100
        flex min-h-dvh
        items-center justify-center
        overflow-hidden
        bg-cream
      "
      role="dialog"
      aria-modal="true"
      aria-label="Wedding invitation"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="lace-bg absolute inset-0" />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          inset-4
          border border-gold/20
          sm:inset-6
          md:inset-8
          lg:inset-10
        "
      />

      <div
        ref={contentRef}
        className="
          relative z-10
          flex w-full
          max-w-[calc(100%-2rem)]
          flex-col
          items-center
          px-2
          text-center
          sm:max-w-[calc(100%-3rem)]
          sm:px-4
          md:max-w-3xl
          md:px-6
        "
      >
        <p
          className="
            eyebrow
            mb-[clamp(1.25rem,4vh,1.75rem)]
            opacity-90
            text-[0.62rem]
            sm:text-[0.68rem]
            md:text-xs
          "
        >
          The Wedding Of
        </p>

        <h1
          className="
            w-full
            max-w-full
            whitespace-nowrap
            font-script
            leading-[0.88]
            text-maroon
            text-[clamp(3rem,10vw,4.5rem)]
            sm:text-[clamp(4rem,9vw,5.5rem)]
            md:text-[clamp(5rem,8vw,7rem)]
            lg:text-[7.5rem]
          "
        >
          {wedding.groom}

          <span
            className="
              mx-1
              inline-block
              align-middle
              text-[clamp(2rem,6vw,3rem)]
              text-gold
              sm:mx-2
              sm:text-[clamp(2.5rem,5vw,3.5rem)]
              md:mx-3
              md:text-[clamp(3rem,4vw,4rem)]
            "
          >
            &
          </span>

          {wedding.bride}
        </h1>

        <div
          className="
            my-[clamp(1.5rem,4vh,2rem)]
            flex
            items-center
            gap-3
            sm:gap-4
          "
        >
          <span
            className="
              h-px
              w-8
              bg-gold/50
              sm:w-12
              md:w-16
            "
          />

          <span
            className="
              text-base
              text-gold
              sm:text-lg
              md:text-xl
            "
            aria-hidden="true"
          >
            ✦
          </span>

          <span
            className="
              h-px
              w-8
              bg-gold/50
              sm:w-12
              md:w-16
            "
          />
        </div>

        <p
          className="
            font-serif
            text-maroon-deep
            tracking-widest
            text-base
            sm:text-lg
            md:text-xl
          "
        >
          {wedding.dateLabel}
        </p>

        <p
          className="
            mt-2
            text-[0.65rem]
            uppercase
            tracking-[0.18em]
            text-maroon/65
            sm:text-xs
            md:text-sm
          "
        >
          {wedding.weekday}
        </p>

        <button
          type="button"
          onClick={handleEnter}
          disabled={entering}
          className="
            group
            mt-[clamp(2.5rem,8vh,3.75rem)]
            flex
            flex-col
            items-center
            gap-3
            text-maroon
            transition-opacity
            duration-300
            disabled:cursor-default
            sm:gap-4
          "
          aria-label="Enter wedding invitation"
        >
          <span
            className="
              relative
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-gold/60
              transition-all
              duration-500
              sm:h-12
              sm:w-12
              md:h-13
              md:w-13
              group-hover:border-maroon
              group-hover:bg-maroon
              group-hover:text-cream
            "
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="
                absolute
                transition-all
                duration-300
                ease-in-out
                group-hover:scale-75
                group-hover:opacity-0
                motion-reduce:transition-none
              "
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="1.5"
              />

              <path d="m3 7 9 6 9-6" />
            </svg>

            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="
                absolute
                scale-75
                opacity-0
                transition-all
                duration-300
                ease-in-out
                group-hover:scale-100
                group-hover:opacity-100
                motion-reduce:transition-none
              "
            >
              <path d="M3 10v9h18v-9" />
              <path d="m3 10 9 7 9-7" />
              <path d="M3 10 12 3l9 7" />
            </svg>
          </span>

          <span
            className="
              text-[0.62rem]
              font-medium
              uppercase
              tracking-[0.28em]
              text-gold
              transition-colors
              duration-300
              group-hover:text-maroon
              sm:text-[0.68rem]
              sm:tracking-[0.32em]
            "
          >
            Tap to enter
          </span>
        </button>
      </div>
    </div>
  );
}