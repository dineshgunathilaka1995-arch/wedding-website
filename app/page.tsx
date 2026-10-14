"use client";

import { useState } from "react";

import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Story from "@/components/Story";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import Details from "@/components/Details";
import Rsvp from "@/components/Rsvp";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import Entrance from "@/components/Entrance";

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);

  return (
    <>
      {!entered && (
        <Entrance
          onEnter={() => {
            setMusicStarted(true);
          }}
          onReveal={() => {
            setEntered(true);
          }}
        />
      )}

      <main>
        <Hero entered={entered} />

        <Countdown />
        <Story />
        <Schedule />
        <Gallery />
        <Details />
        <Rsvp />
        <Footer />

        <MusicPlayer shouldPlay={musicStarted} />
      </main>
    </>
  );
}