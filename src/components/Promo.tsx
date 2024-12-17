"use client";
import { FC, useState } from "react";
import { motion } from "framer-motion";

const BookPromoSection: FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-[#f4f6ef] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.section
          className="bg-white/80 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <div className="max-w-7xl mx-auto p-6 md:p-12 lg:p-20 flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div
              className="flex-1 max-w-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-8 text-[#1a2e1a] leading-[1.2]">
                August Fifteenth,
                <motion.span
                  className="block italic text-[#4a7a4a]"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  a journey through
                </motion.span>
                Cretan summers.
              </h2>
              <p className="text-lg md:text-xl mb-12 text-gray-700 leading-relaxed">
                Step back into the sunlit summers of 1980s Crete through the
                eyes of a 12-year-old girl. Experience the joy of family
                gatherings, traditional bread baking, and the cherished moments
                that shaped a lifetime of memories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <motion.a
                  href="https://cycladic.gr/en/product/august-fifteenth-english-edition"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(26, 46, 26, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1a2e1a] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[#2a4e2a] text-center"
                >
                  Purchase Book
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 relative mt-12 md:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <div className="relative w-full max-w-[500px] mx-auto perspective-1000">
                <motion.img
                  src="/Book.webp" // Replace with your book image
                  alt="August Fifteenth - A Journey Through Cretan Summers"
                  className="w-full h-auto rounded-lg"
                  animate={{
                    rotateY: isHovered ? 10 : 0,
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  style={{
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-[#4a7a4a] text-white py-3 px-6 rounded-full font-bold shadow-xl"
                  whileHover={{ scale: 1.1 }}
                >
                  English Edition
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default BookPromoSection;
