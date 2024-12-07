"use client";
import { motion } from "framer-motion";
import React from "react";

interface StatProps {
  value: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => (
  <motion.div
    className="flex flex-col items-center px-4 py-2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <span className="text-3xl md:text-4xl font-bold text-white">{value}</span>
    <span className="text-xs md:text-sm text-white/80 mt-1 md:mt-2 text-center">
      {label}
    </span>
  </motion.div>
);

const Statistics: React.FC = () => {
  return (
    <div className="bg-[#1B392A] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between md:items-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
            <Stat value="200" label="Hours Certified" />
            <motion.div
              className="hidden md:block mx-8 h-12 w-px bg-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <Stat value="2019" label="Book Published" />
            <motion.div
              className="hidden md:block mx-8 h-12 w-px bg-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <Stat value="15+" label="Years Experience" />
          </div>

          <motion.div
            className="max-w-xs w-full mx-auto md:mx-0 text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-white/90 text-sm leading-relaxed">
              Experience the transformative power of yoga and meditation in the
              heart of Crete, where ancient wisdom meets modern practice under
              the warm Mediterranean sun.
            </p>
            <button
              className="mt-4 w-full md:w-auto px-6 py-2 text-[#C5A05E] 
                             hover:text-[#D4B06F] font-medium border border-[#C5A05E] 
                             hover:border-[#D4B06F] rounded-lg transition-colors"
            >
              Book Retreat
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Statistics;
