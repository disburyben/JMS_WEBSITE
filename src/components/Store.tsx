import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export function Store() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const shopifyURL = "https://jms-motorsport-store.myshopify.com/";

  return (
    <section ref={ref} id="store" className="bg-black text-white py-[100px] px-10 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 50px,
              rgba(255, 102, 0, 0.1) 50px,
              rgba(255, 102, 0, 0.1) 51px
            )`,
          }}
        />
      </div>

      {/* Dramatic orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff6600] opacity-[0.08] blur-[150px] rounded-full" />

      {/* Corner accent lights */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff6600] opacity-[0.06] blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff8800] opacity-[0.06] blur-[100px]" />

      <div className="max-w-[1200px] mx-auto relative z-[1] text-center">
        <motion.p
          className="text-[0.7em] tracking-[0.4em] mb-[30px] opacity-50 font-black uppercase"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 0.5 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Merch Store
        </motion.p>

        <motion.h2
          className="m-0 mb-[40px] tracking-[0.1em] uppercase relative inline-block"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(3em, 8vw, 6em)',
            fontWeight: 400,
            lineHeight: 1,
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-white via-[#ff6600] to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,102,0,0.5)]">
            JMS STORE
          </span>
        </motion.h2>

        <motion.p
          className="text-[1.2em] text-[#999] mb-[50px] max-w-[600px] mx-auto leading-[1.8]"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Shop official JMS Motorsport merchandise and gear.
        </motion.p>

        {/* Store Button */}
        <motion.div
          className="max-w-[500px] mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href={shopifyURL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-[40px] py-[18px] bg-[#ff6600] text-white text-[0.85em] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#ff7700] hover:shadow-[0_0_30px_rgba(255,102,0,0.4)]"
          >
            ENTER STORE
          </a>
        </motion.div>
      </div>
    </section>
  );
}
