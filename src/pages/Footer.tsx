import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  // Scroll-based scale and opacity
  const textScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Container animation
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Individual item animation
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white font-sans pt-12 md:pt-20 border-t border-white min-h-screen flex flex-col"
    >
      {/* =========================
          TOP SECTION: INFO GRID
          ========================= */}
      <motion.div
        className="px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-12 shrink-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* =========================
            COLUMN 1: IDENTIFICATION
            ========================= */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-1"
        >
          <h3 className="font-sans text-xs font-bold uppercase tracking-widest mb-4 text-white/80">
            Identification
          </h3>

          <p className="font-sans text-xs md:text-sm font-medium uppercase tracking-wide leading-relaxed">
            Payal Sharad Salve
          </p>

          <p className="font-sans text-xs md:text-sm font-medium uppercase tracking-wide leading-relaxed text-white/60">
            UI/UX Designer & AI/Data Specialist
          </p>

          <p className="font-sans text-xs md:text-sm font-medium uppercase tracking-wide leading-relaxed text-white/60">
            Mumbai, India
          </p>
        </motion.div>

        {/* =========================
            COLUMN 2: CHANNELS
            ========================= */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-1"
        >
          <h3 className="font-sans text-xs font-bold uppercase tracking-widest mb-4 text-white/80">
            Channels
          </h3>

          <div className="flex flex-col gap-2">
            {/* Email */}
            <a
              href="mailto:payalsalve2112@gmail.com"
              className="font-sans text-xs md:text-sm font-medium uppercase tracking-wide hover:underline underline-offset-4 decoration-1 w-fit flex items-center gap-1"
            > 
             payalsalve2112@gmail.com
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/payal-salve-09139b28b"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs md:text-sm font-medium uppercase tracking-wide hover:underline underline-offset-4 decoration-1 w-fit flex items-center gap-1"
            >
              LinkedIn ↗
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Payal120324"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs md:text-sm font-medium uppercase tracking-wide hover:underline underline-offset-4 decoration-1 w-fit flex items-center gap-1"
            >
              GitHub ↗
            </a>

            {/* Medium */}
            <a
              href="https://medium.com/@payalhons1203"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs md:text-sm font-medium uppercase tracking-wide hover:underline underline-offset-4 decoration-1 w-fit flex items-center gap-1"
            >
              Medium ↗
            </a>
          </div>
        </motion.div>

        {/* =========================
            COLUMN 3: COLOPHON
            ========================= */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col h-full justify-between"
        >
          
        </motion.div>
      </motion.div>

      {/* =========================
          BOTTOM SECTION: BRANDING
          ========================= */}
      <motion.div
        style={{
          opacity: textOpacity,
          scale: textScale,
        }}
        className="w-full flex-1 min-h-[45vh] flex flex-col justify-center items-center overflow-hidden select-none pb-4"
      >
        <h1 className="font-sans font-black text-[23vw] leading-[0.8] text-white uppercase tracking-tighter flex items-start">
          Payal

          <span className="text-xl md:text-4xl lg:text-6xl font-medium mt-[2vw] ml-1 opacity-60">
            ®
          </span>
        </h1>
      </motion.div>
    </footer>
  );
};

export default Footer;