import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import venue from "@/assets/venue.jpg";
import coupleSecondary from "@/assets/coupleimages/image4.jpeg";
import { SectionHeading } from "./SectionHeading";

/**
 * MAP LINKS
 * "Get Directions" opens Google Maps navigation straight to the venue.
 * "View on Map" opens Google Maps with a pin on the venue.
 *
 * For a pin on the EXACT spot, fill in `coords` with "latitude,longitude"
 * (Google Maps -> long-press / right-click the venue -> tap the numbers to copy).
 * If `coords` is empty, the venue name + address is searched instead.
 */
const mapsDirections = (target: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(target)}&travelmode=driving`;
const mapsPin = (target: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(target)}`;

const venues = [
  {
    label: "Reception · 22 Nov",
    nameLead: "Mukathala Mar Thoma",
    nameItalic: "Parish Hall",
    address: "Mukathala Mar Thoma Parish Hall, Kureepally.",
    alt: "Mukathala Mar Thoma Parish Hall",
    image: venue,
    coords: "", // e.g. "8.9xxxxx,76.5xxxxx"
    query: "Mukathala Mar Thoma Parish Hall, Kureepally, Kollam, Kerala",
  },
];

export function Venue() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-32">
      {/* Soft couple photo backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={coupleSecondary}
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
        <SectionHeading eyebrow="Where We Gather" title="The" italic="Venue" />

        <div className="mx-auto mt-10 max-w-5xl space-y-6 md:mt-16 md:space-y-10">
          {venues.map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, y: 40, filter: "blur(14px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              className="gold-border grid overflow-hidden rounded-[1.5rem] md:grid-cols-2 md:rounded-[2rem]"
            >
              {/* Image: short banner on mobile, full-height half on laptop */}
              <div
                className={`relative h-44 overflow-hidden sm:h-56 md:h-auto md:min-h-[340px] ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <img
                  src={v.image}
                  alt={v.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep-brown/30 via-transparent to-transparent md:hidden" />
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="relative flex flex-col items-center">
                    <div className="absolute -inset-5 rounded-full bg-warm-white/40 blur-2xl" />
                    <div
                      className="relative flex h-11 w-11 items-center justify-center rounded-full text-warm-white shadow-lg md:h-14 md:w-14"
                      style={{
                        background: "linear-gradient(135deg, var(--rose-gold), var(--deep-brown))",
                      }}
                    >
                      <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div className="mt-1.5 h-2.5 w-2.5 rotate-45 rounded-sm bg-deep-brown md:mt-2 md:h-3 md:w-3" />
                  </div>
                </motion.div>
              </div>

              {/* Details: centered on mobile, left-aligned on laptop */}
              <div className="glass flex flex-col items-center justify-center gap-3 p-6 text-center sm:p-8 md:items-start md:gap-6 md:p-12 md:text-left">
                <p className="font-display text-[9px] tracking-[0.4em] text-rose-gold uppercase md:text-[10px] md:tracking-[0.5em]">
                  {v.label}
                </p>
                <h3 className="font-serif text-[1.65rem] leading-tight text-deep-brown sm:text-3xl md:text-4xl lg:text-5xl">
                  {v.nameLead} <span className="italic text-gradient-gold">{v.nameItalic}</span>
                </h3>
                <span className="h-px w-12 bg-gradient-to-r from-transparent via-rose-gold/60 to-transparent md:hidden" />
                <p className="max-w-xs text-sm leading-relaxed text-deep-brown/75 md:max-w-none md:text-base">
                  {v.address}
                </p>
                <div className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center md:justify-start md:pt-2">
                  <a
                    href={mapsDirections(v.coords || v.query)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[10px] tracking-[0.3em] text-warm-white uppercase transition-transform hover:scale-[1.02] md:text-[11px] md:tracking-[0.35em]"
                    style={{
                      background: "linear-gradient(135deg, var(--rose-gold), var(--deep-brown))",
                    }}
                  >
                    <Navigation className="h-4 w-4" /> Get Directions
                  </a>
                  <a
                    href={mapsPin(v.coords || v.query)}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden items-center justify-center gap-2 rounded-full border border-rose-gold/40 px-6 py-3 text-[11px] tracking-[0.35em] text-deep-brown uppercase sm:inline-flex"
                  >
                    <MapPin className="h-4 w-4" /> View on Map
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}