import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import coupleEvents from "@/assets/coupleimages/image3.jpeg";

/**
 * MAP LINK
 * "View on Map" opens Google Maps with a pin on the venue.
 *
 * For a pin on the EXACT spot, fill in `coords` with "latitude,longitude"
 * (Google Maps -> long-press / right-click the venue -> tap the numbers to copy).
 * If `coords` is empty, the venue name + address is searched instead.
 */
const mapsPin = (target: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(target)}`;

const events = [
  {
    tag: "Join Us For",
    title: "Reception",
    date: "Sunday · 22 November 2026",
    time: "Evening · 5:00 PM",
    location: "Mukathala Mar Thoma Parish Hall, Kureepally",
    coords: "", // e.g. "8.9xxxxx,76.5xxxxx"
    query: "Mukathala Mar Thoma Parish Hall, Kureepally, Kollam, Kerala",
  },
];

export function Events() {
  return (
    <section className="relative overflow-hidden py-32 px-6">
      {/* Soft couple photo backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={coupleEvents}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-[0.32]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--cream) 0%, color-mix(in oklab, var(--cream) 25%, transparent) 22%, color-mix(in oklab, var(--cream) 25%, transparent) 78%, var(--cream) 100%)",
          }}
        />
      </div>

      <div className="relative z-10">
        <SectionHeading eyebrow="The Celebration" title="Reception" italic="Details" />
        <div className="mx-auto mt-20 grid max-w-xl gap-8">
          {events.map((e, i) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 60, filter: "blur(14px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, delay: i * 0.15, ease: [0.19, 1, 0.22, 1] }}
              whileHover={{ y: -6 }}
              className="glass gold-border relative overflow-hidden rounded-[2rem] p-10"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blush/25 blur-3xl" />
              <div className="pointer-events-none absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-temple-gold/25 blur-3xl" />

              <p className="font-display text-[10px] tracking-[0.5em] text-rose-gold uppercase">
                {e.tag}
              </p>
              <h3 className="mt-4 font-serif text-5xl text-deep-brown">{e.title}</h3>

              <div className="mt-8 space-y-4 text-sm text-deep-brown/80">
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-rose-gold" />
                  <span className="tracking-wide">{e.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-rose-gold" />
                  <span className="tracking-wide">{e.time}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-rose-gold" />
                  <span className="tracking-wide">{e.location}</span>
                </div>
              </div>

              <a
                href={mapsPin(e.coords || e.query)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-[11px] tracking-[0.3em] text-rose-gold uppercase underline-offset-4 transition-colors hover:text-deep-brown hover:underline"
              >
                View on Map
              </a>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-gold/40 to-transparent" />
                <span className="font-serif italic text-deep-brown/60">with your blessings</span>
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-gold/40 to-transparent" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}