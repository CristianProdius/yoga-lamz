"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative bg-[#f4f6ef] flex items-center pt-32 pb-20 px-4 sm:px-8 w-full overflow-x-hidden">
      {/* Keep background pattern div */}

      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={stagger}
        className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10"
      >
        <motion.div variants={fadeUp} className="lg:w-[45%] space-y-8">
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-[64px] font-serif leading-[1.1] tracking-[-0.02em]"
          >
            The Cretan Earth{" "}
            <span className="italic font-light relative">
              Yoga
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1a2e1a]/20"></span>
            </span>
            <br />
            <span className="italic font-light relative">
              & Meditation
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1a2e1a]/20"></span>
            </span>{" "}
            Experience
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-[#1a2e1a]/80 max-w-md leading-relaxed"
          >
            Join me in a transformative journey combining yoga, meditation, and
            the authentic spirit of Crete, where nature meets tradition.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 sm:space-x-5 pt-4"
          >
            <button className="w-full sm:w-auto bg-[#1a2e1a] text-white px-8 py-4 rounded-full hover:bg-[#2a3f2a] transition-all duration-300 text-[15px] hover:shadow-lg hover:scale-105 active:scale-95">
              Book Retreat
            </button>
            <button className="w-full sm:w-auto bg-[#e8ebe3] text-[#1a2e1a] px-8 py-4 rounded-full hover:bg-[#dfe2d8] transition-all duration-300 text-[15px] hover:shadow-lg hover:scale-105 active:scale-95">
              Explore Book
            </button>
          </motion.div>

          {/* Optional Featured Section */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-start space-x-12 pt-8"
          >
            {[
              { number: "200 TT", label: "Certified Teacher" },
              { number: "2019", label: "Published Author" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-[#1a2e1a]">
                  {stat.number}
                </div>
                <div className="text-sm text-[#1a2e1a]/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} className="lg:w-[45%]">
          <div className="relative rounded-[32px] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.1)] group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image
              src="/hero.jpg" // Replace with your hero image
              alt="Yoga practice in Crete"
              width={800}
              height={900}
              className="object-cover w-full h-full transform group-hover:scale-105 transition-all duration-700 max-w-full"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
