"use client";

import { useState } from "react";
import { wedding } from "@/lib/wedding";
import Reveal from "./Reveal";

type Answer = "accept" | "decline";

const WHATSAPP_NUMBER = "94768726022";

export default function Rsvp() {
  const [name, setName] = useState("");
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [guests, setGuests] = useState(1);
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !answer) return;

    const guestName = name.trim();

    const message =
      answer === "accept"
        ? `Wedding RSVP

Hello Nimesh & Gayasha,

I’m happy to confirm that I will be joining you on your special day. 

Name: ${guestName}
Response: Joyfully accept
Number of guests: ${guests}

Looking forward to celebrating with you! `
        : `Wedding RSVP

Hello Nimesh & Gayasha,

Thank you for inviting me to your special day.

Name: ${guestName}
Response: Regretfully decline

I’m sorry that I won’t be able to join you, but I wish you both a beautiful and happy life together.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSent(true);
  }

  const choice = (value: Answer) =>
    `flex-1 rounded-sm border px-4 py-3 text-lg transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon ${
      answer === value
        ? "border-maroon bg-maroon text-cream"
        : "border-gold/60 bg-cream text-maroon hover:border-maroon"
    }`;

  return (
    <section className="lace-bg px-6 py-24">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="mt-3 uppercase tracking-[0.32em] text-gold sm:text-2xl">Kindly Respond</p>

        <h2 className="mt-3 font-script text-5xl text-maroon sm:text-6xl">
          R.S.V.P.
        </h2>

        <p className="mt-4 text-lg italic text-maroon-deep/80">
          Let us know if you can celebrate this unforgettable day with us
        </p>

        <p className="mt-1 text-sm uppercase tracking-[0.2em] text-gold">
          Please reply by {wedding.rsvpBy}
        </p>

        {sent ? (
          <div
            role="status"
            className="mt-10 rounded-sm border border-gold/60 bg-cream p-10 shadow-md"
          >
            <p className="font-script text-4xl text-maroon">
              Thank you, {name.trim()}
            </p>

            <p className="mt-3 text-lg text-maroon-deep/80">
              {answer === "accept"
                ? "Your RSVP has been prepared in WhatsApp. We can't wait to celebrate with you."
                : "Your response has been prepared in WhatsApp. We will miss you, and thank you for letting us know."}
            </p>

            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-6 text-sm uppercase tracking-[0.2em] text-maroon underline underline-offset-4 transition hover:text-maroon-deep"
            >
              Submit another response
            </button>
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="mt-10 space-y-8 rounded-sm border border-gold/60 bg-cream p-8 text-left shadow-md"
          >
            <label className="block">
              <span className="eyebrow">Your name</span>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
                placeholder="Enter your name"
                className="mt-2 w-full border-b border-maroon/40 bg-transparent py-2 text-xl text-maroon outline-none placeholder:text-maroon/30 focus:border-maroon"
              />
            </label>

            <fieldset>
              <legend className="eyebrow">
                Will you celebrate with us?
              </legend>

              <div className="mt-3 flex gap-3">
                <button
                  type="button"
                  aria-pressed={answer === "accept"}
                  onClick={() => setAnswer("accept")}
                  className={choice("accept")}
                >
                  Joyfully accept
                </button>

                <button
                  type="button"
                  aria-pressed={answer === "decline"}
                  onClick={() => setAnswer("decline")}
                  className={choice("decline")}
                >
                  Regretfully decline
                </button>
              </div>
            </fieldset>

            {answer === "accept" && (
              <div>
                <span className="eyebrow">Number of guests</span>

                <div className="mt-3 flex items-center gap-5">
                  <button
                    type="button"
                    aria-label="Fewer guests"
                    onClick={() =>
                      setGuests((g) => Math.max(1, g - 1))
                    }
                    className="h-10 w-10 rounded-full border border-maroon text-xl text-maroon transition hover:bg-maroon hover:text-cream"
                  >
                    −
                  </button>

                  <span
                    className="w-8 text-center text-2xl tabular-nums"
                    aria-live="polite"
                  >
                    {guests}
                  </span>

                  <button
                    type="button"
                    aria-label="More guests"
                    onClick={() =>
                      setGuests((g) => Math.min(10, g + 1))
                    }
                    className="h-10 w-10 rounded-full border border-maroon text-xl text-maroon transition hover:bg-maroon hover:text-cream"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={!name.trim() || !answer}
              className="w-full rounded-full bg-maroon px-8 py-3.5 text-sm uppercase tracking-[0.3em] text-cream transition hover:bg-maroon-deep disabled:cursor-not-allowed disabled:opacity-40"
            >
              Send our reply
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}

