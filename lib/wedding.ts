export const wedding = {
  bride: "Gayasha",
  groom: "Nimesh",

  dateISO: "2026-12-02T08:45:00+05:30",
  dateLabel: "December 02, 2026",
  weekday: "Wednesday",

  calendar: {
    startUTC: "20261202T031500Z",
    endUTC: "20261202T103000Z",
    title: "Nimesh & Gayasha's Wedding",
  },

  music: "/music/final.mp3",

story: [
  {
    title: "How it all began",
    text: "They first met in a library, where a simple meeting quietly became the beginning of something beautiful. One conversation turned into many, and those many conversations grew into six wonderful years of love, memories, dreams, and togetherness.",
  },
  {
    title: "Through The Distance",
    text: "Even when distance came between them, their love never faded. Through long days apart, countless messages, late-night conversations, every achievement, every challenge, and every plan for the future, they continued to choose each other.",
  },
  {
    title: "A Future Together",
    text: "Somewhere between the quiet mornings and the loud laughter, they realised they had stopped imagining a future apart. Distance had only made them understand how much they truly meant to each other.",
  },
  {
    title: "A New Beginning",
    text: "After six beautiful years, they are ready to turn all those dreams, plans, and promises into a new beginning.",
  },
],

  venues: {
    church: {
      label: "The Ceremony",
      name: "Holy Cross Church",
      place: "Kalutara, Sri Lanka",
      time: "Holy Mass begins at 8:45 AM",
      mapQuery: "Holy Cross Church Kalutara",
    },
    hotel: {
      label: "The Reception",
      name: "Tangerine Beach Hotel",
      place: "Kalutara, Sri Lanka",
      time: "11:00 AM to 4:00 PM",
      mapQuery: "Tangerine Beach Hotel Kalutara",
    },
  },

  schedule: [
    { time: "8:45 AM", title: "Holy Mass" },
    { time: "11:00 AM", title: "Reception Begins" },
    { time: "11:05 AM", title: "Welcome Drink" },
    { time: "12:00 PM", title: "Buffet Opening" },
    { time: "2:00 PM", title: "Going Away" },
    { time: "4:00 PM", title: "Farewell" },
  ],

  gallery: [
    { src: "/photos/image4.jpeg" as string | null, alt: "Gayasha and Nimesh, photo 1" },
    { src: "/photos/image5.jpg" as string | null, alt: "Gayasha and Nimesh, photo 2" },
    { src: "/photos/image6.jpg" as string | null, alt: "Gayasha and Nimesh, photo 3" },
  ],

  rsvpBy: "November 15, 2026",
  phones: ["+94 76 872 6022", "+94 76 461 6212"],
};
