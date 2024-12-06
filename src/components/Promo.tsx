"use client";
import { FC } from "react";
import { motion } from "framer-motion";

const BookPromoSection: FC = () => {
  return (
    <div className="bg-[#f4f6ef]">
      <div className="container mx-auto px-4 py-16 ">
        <section className="bg-[#e8efe8] rounded-3xl overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center gap-16">
            <motion.div
              className="flex-1 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-5xl md:text-6xl mb-6 text-[#1a2e1a] leading-tight">
                Clearmind, <span className="italic">your partner</span> in
                mental wellness.
              </h2>
              <p className="text-xl mb-10 text-gray-700 leading-relaxed">
                Transform your mental wellness journey with our comprehensive
                guide. Discover practical techniques and insights for a balanced
                mind.
              </p>
              <div className="flex flex-wrap gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1a2e1a] text-white px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-[#2a4e2a] transition-all shadow-md"
                >
                  Get Your Copy Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[#1a2e1a] text-[#1a2e1a] px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-[#1a2e1a] hover:text-white transition-all"
                >
                  Preview Contents
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              className="flex-1 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-[400px] mx-auto">
                <img
                  src="/Book.png"
                  alt="Clearmind: Your Guide to Mental Wellness"
                  className="w-full h-auto shadow-2xl rounded-lg bg-white transform rotate-3 hover:rotate-0 transition-all duration-300"
                />
                <div className="absolute -bottom-4 -right-4 bg-[#4a7a4a] text-white py-2 px-6 rounded-full text-sm font-bold shadow-lg">
                  New Release
                </div>
                <div className="absolute -top-4 -left-4 bg-[#f3d42e] text-[#1a2e1a] py-2 px-6 rounded-full text-sm font-bold shadow-lg transform -rotate-12">
                  Best Seller
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BookPromoSection;
