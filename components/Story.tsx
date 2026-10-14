import { wedding } from "@/lib/wedding";
import Reveal from "./Reveal";
import { Flourish } from "./Ornaments";

export default function Story() {
  return (
    <section className="lace-bg px-6 py-24 text-center">
      <Reveal className="mx-auto max-w-3xl">
        <p className="mt-3 uppercase tracking-[0.32em] text-gold sm:text-4xl">Our Story</p>

        <Flourish className="my-5" />

        <div className="space-y-8">
          {wedding.story.map((chapter, index) => (
            <div key={index}>
              <h3 className="mb-3 font-script text-3xl text-maroon sm:text-4xl">
                {chapter.title}
              </h3>

              <p className="text-xl leading-relaxed text-maroon-deep/90 sm:text-2xl">
                {chapter.text}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}