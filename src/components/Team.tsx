"use client";
import { motion } from "framer-motion";
import { FC } from "react";
import Image from "next/image";

const InstructorSection: FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-[#f4f6ef] via-[#f8f9f5] to-[#f4f6ef]">
      <section className="py-12 md:py-24 px-4 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center relative z-10"
        >
          <motion.div variants={fadeInUp} className="space-y-8 md:space-y-12">
            {/* Title Section */}
            <div className="pb-8 md:pb-12">
              <motion.p
                className="text-sm uppercase tracking-wider text-[#1B392A]/70 font-medium"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Your Guide & Instructor
              </motion.p>
              <motion.h2
                className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#1B392A] leading-[1.1]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Meet{" "}
                <span className="italic font-light relative inline-block">
                  Agapi
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1B392A]/20"></span>
                </span>
              </motion.h2>
            </div>

            {/* Bio Section */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-serif text-[#1a2e1a] leading-relaxed">
                Hi, I&apos;m <span className="italic">Agapi</span>
              </h3>
              <div className="space-y-4 md:space-y-6 text-[#1a2e1a]/80">
                <p className="text-base md:text-lg leading-relaxed">
                  {/* Your existing text */}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={fadeInUp}
            className="relative w-full max-w-sm md:max-w-md mx-auto lg:ml-auto mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Decorative Elements - Hidden on mobile */}
              <div className="hidden md:block absolute -top-4 -right-4 w-24 h-24 bg-[#1a2e1a]/5 rounded-full -z-10" />
              <div className="hidden md:block absolute -bottom-4 -left-4 w-32 h-32 bg-[#f4f6ef] rounded-full -z-10" />

              {/* Main Image Container */}
              <div className="aspect-[3/4] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-[0_32px_64px_rgba(0,0,0,0.15)] relative group">
                <Image
                  src="/agapi-profile.webp"
                  alt="Agapi Kefalogianni"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover transform transition-all duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Journey Section */}
      <section className="py-12 md:py-24 px-4 sm:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center"
        >
          <motion.div variants={fadeInUp} className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-[0_32px_64px_rgba(0,0,0,0.1)] relative group">
                <Image
                  src="/crete-nature.webp"
                  alt="Yoga in Nature"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-[0_32px_64px_rgba(0,0,0,0.1)] relative group mt-6 md:mt-12">
                <Image
                  src="/crete-meditation.webp"
                  alt="Cretan Landscape"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="space-y-6 md:space-y-8 order-1 lg:order-2"
          >
            <h3 className="text-2xl md:text-4xl font-serif text-[#1a2e1a] leading-relaxed">
              My <span className="italic">Journey</span>
            </h3>
            <div className="space-y-4 md:space-y-6 text-[#1a2e1a]/80">
              <p className="text-base md:text-lg leading-relaxed">
                A foot injury in my twenties led me to step away from pointe
                shoes and embrace yoga and Pilates as a path to well-being.
                Practicing yoga in nature—beneath Crete&apos;s warm sun and by
                the blue sea—transformed my journey.
              </p>
              <p className="text-lg leading-relaxed">
                This connection to the island&apos;s energy inspired me to
                create Cretan Earth Yoga and Meditation Retreats, where I share
                the magic of balance, movement, and inner peace.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default InstructorSection;
