import { wedding } from "@/lib/wedding";
import { LaceEdge } from "./Ornaments";

export default function Footer() {
  return (
    <footer className="bg-[#470909] text-center text-cream">
      <LaceEdge className="text-cream" />
      <div className="px-6 pb-16 pt-8">
        <p className="text-lg italic text-blush">Thank you for being part of our story.</p>
        <p className="mt-3 font-script text-5xl">
          {wedding.groom} &amp; {wedding.bride}
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-2 text-lg sm:flex-row sm:gap-8">
          {wedding.phones.map((p) => (
            <a
              key={p}
              href={`tel:${p.replace(/\s/g, "")}`}
              className="underline-offset-4 hover:underline"
            >
              {p}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
