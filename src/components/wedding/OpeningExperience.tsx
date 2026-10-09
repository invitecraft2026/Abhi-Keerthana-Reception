// src/components/wedding/OpeningExperience.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
// 👇 Change this to the couple photo you want on the intro screen
import coverImg from "@/assets/coupleimages/image1.jpeg";
// Hero background, preloaded so there is no flash when the intro fades out
import heroEndFrame from "@/assets/end_frame.jpg";

// 👇 Text shown on the intro screen
const INTRO_NAMES = "Abhi & Keerthana";
const INTRO_DATE = "21 · 22 November 2026"; // reception-only site: "22 November 2026"
// 👇 Which part of the photo stays in view on tall phone screens (x% y%)
const PHOTO_FOCUS = "50% 30%";

export function OpeningExperience({ onComplete }: { onComplete: () => void }) {
  const [opened, setOpened] = useState(false);

  // Preload the hero background so it is cached before the intro fades out.
  useEffect(() => {
    const img = new Image();
    img.src = heroEndFrame;
  }, []);

  const handleOpen = useCallback(() => {
    if (opened) return;
    setOpened(true);
    // Reveal the main page right away so it crossfades with the intro's fade-out.
    onComplete();
  }, [opened, onComplete]);

  return (
    <AnimatePresence>
      {!opened && (
        <motion.button
          key="opening"
          type="button"
          onClick={handleOpen}
          aria-label="Tap anywhere to open the invitation"
          className="fixed inset-0 z-[95] h-full w-full cursor-pointer overflow-hidden bg-black text-left"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
        >
          {/* Couple photo with a slow, gentle zoom */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.4, ease: [0.19, 1, 0.22, 1] }}
            style={{
              backgroundImage: `url(${coverImg})`,
              backgroundSize: "cover",
              backgroundPosition: PHOTO_FOCUS,
            }}
          />

          {/* Soft shading so the text stays readable on any photo */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 48%, rgba(0,0,0,0.62) 100%)",
            }}
          />

          {/* Names, date and tap hint */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-6 pb-12 text-center md:pb-16">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.7 }}
              className="font-script text-5xl leading-none text-warm-white drop-shadow-lg md:text-7xl"
            >
              {INTRO_NAMES}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="mt-4 text-[11px] tracking-[0.45em] text-warm-white/90 uppercase drop-shadow md:text-xs"
            >
              {INTRO_DATE}
            </motion.p>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 2.2, delay: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="mt-8 rounded-full bg-black/30 px-6 py-2 text-[10px] tracking-[0.5em] text-warm-white uppercase backdrop-blur-sm"
            >
              Tap anywhere to open
            </motion.span>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}