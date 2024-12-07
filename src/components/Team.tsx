"use client";
import { motion } from "framer-motion";
import { FC } from "react";

interface InstructorInfo {
  name: string;
  image: string;
  credentials: string;
}

interface RetreatCard {
  title: string;
  description: string;
}

const InstructorSection: FC = () => {
  const retreatInfo: RetreatCard = {
    title: "Cretan Earth Retreats",
    description:
      "Immerse yourself in transformative yoga and meditation experiences, blending ancient wisdom with the natural beauty of Crete. Join intimate group sessions that nourish body, mind, and soul.",
  };

  const instructor: InstructorInfo = {
    name: "Agapi Kefalogianni",
    image: "/agapi-profile.jpeg",
    credentials: "Certified Hatha Yoga Teacher",
  };

  return (
    <section className="bg-[#f4f6ef] py-12 sm:py-16 px-4 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          className="text-sm uppercase tracking-wide mb-2 text-[#1B392A]/80"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          YOUR INSTRUCTOR
        </motion.p>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 md:mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Meet Agapi
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            className="bg-[#1B392A] rounded-3xl p-6 sm:p-8 text-white h-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-wide mb-4 text-white/70">
                  JOIN THE EXPERIENCE
                </p>
                <h3 className="text-2xl md:text-3xl font-light mb-4">
                  {retreatInfo.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-90 mb-8">
                  {retreatInfo.description}
                </p>
              </div>
              <motion.button
                className="bg-[#c9d1c3] text-[#1B392A] px-6 py-2.5 rounded-full text-sm
                          hover:bg-opacity-90 transition-all w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Retreat
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden">
              <motion.img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-full object-cover transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
              />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium">{instructor.name}</h3>
                <p className="text-sm text-gray-600">
                  {instructor.credentials}
                </p>
              </div>
              <motion.button
                className="text-sm flex items-center gap-2 hover:text-[#1B392A] transition-colors"
                whileHover={{ x: 5 }}
              >
                About Me
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default InstructorSection;
