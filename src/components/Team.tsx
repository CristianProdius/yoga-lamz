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
      <section className="py-24 px-4 sm:px-8 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10"
        >
          <motion.div variants={fadeInUp} className="space-y-12">
            {/* Title Section */}
            <div className="pb-12">
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
                className="text-5xl sm:text-6xl md:text-7xl font-serif text-[#1B392A] leading-[1.1]"
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
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-serif text-[#1a2e1a] leading-relaxed">
                Hi, I&apos;m <span className="italic">Agapi</span>
              </h3>
              <div className="space-y-6 text-[#1a2e1a]/80">
                <p className="text-lg leading-relaxed">
                  Born and raised on the stunning island of Crete, I grew up in
                  a lively, traditional Cretan family with two sisters and two
                  brothers. Sharing and togetherness were at the heart of my
                  childhood, shaped by the raw beauty of the island.
                </p>
                <p className="text-lg leading-relaxed">
                  Before yoga became my passion, I spent years immersed in
                  ballet, training in the Royal Academy of Dancing and Modern
                  Theater Dance. Dance was my first love—a liberating art form
                  that brought pure joy to my body and soul.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={fadeInUp}
            className="relative w-full lg:w-[80%] mx-auto lg:ml-auto"
          >
            <div className="relative max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#1a2e1a]/5 rounded-full -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#f4f6ef] rounded-full -z-10" />

              {/* Main Image Container */}
              <div className="aspect-[3/4] w-full max-w-[400px] mx-auto rounded-3xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.15)] relative group">
                <Image
                  src="/agapi-profile.webp"
                  alt="Agapi Kefalogianni"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transform transition-all duration-700 group-hover:scale-105"
                  priority
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Journey Section */}
      <section className="py-24 px-4 sm:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          <motion.div variants={fadeInUp} className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.1)] relative group">
                <Image
                  src="/crete-nature.webp"
                  alt="Yoga in Nature"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.1)] relative group mt-12">
                <Image
                  src="/crete-meditation.webp"
                  alt="Cretan Landscape"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="space-y-8 order-1 lg:order-2"
          >
            <h3 className="text-3xl md:text-4xl font-serif text-[#1a2e1a] leading-relaxed">
              My <span className="italic">Journey</span>
            </h3>
            <div className="space-y-6 text-[#1a2e1a]/80">
              <p className="text-lg leading-relaxed">
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
