"use client";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  const fadeInUp = {
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
    <main className="bg-[#f4f6ef]">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-7xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-[64px] font-serif leading-[1.1] tracking-[-0.02em] text-[#1a2e1a] mb-8"
          >
            About{" "}
            <span className="italic font-light relative">
              The Cretan Earth
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1a2e1a]/20"></span>
            </span>
          </motion.h1>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-8 bg-white/50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a2e1a]">
              Hi, I'm Agapi
            </h2>
            <p className="text-lg text-[#1a2e1a]/80 leading-relaxed">
              Born and raised on the stunning island of Crete, I grew up in a
              lively, traditional Cretan family with two sisters and two
              brothers. Sharing and togetherness were at the heart of my
              childhood, shaped by the raw beauty of the island, its
              crystal-clear seas, and the rich history of the Minoan
              civilization.
            </p>
            <p className="text-lg text-[#1a2e1a]/80 leading-relaxed">
              Before yoga became my passion, I spent years immersed in ballet,
              training in the Royal Academy of Dancing and Modern Theater Dance.
              Dance was my first love—a liberating art form that brought pure
              joy to my body and soul.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="relative w-full max-w-xs mx-auto lg:max-w-none lg:mx-0"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl max-h-[550px]">
              <Image
                src="/agapi-profile.jpeg"
                alt="Agapi Kefalogianni"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Journey Section */}
      <section className="py-16 px-4 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeInUp} className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative">
                <Image
                  src="/crete-nature.jpeg" // Replace with actual image
                  alt="Yoga in Nature"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative">
                <Image
                  src="/crete-meditation.jpeg" // Replace with actual image
                  alt="Cretan Landscape"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="space-y-6 order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a2e1a]">
              My Journey
            </h2>
            <p className="text-lg text-[#1a2e1a]/80 leading-relaxed">
              A foot injury in my twenties led me to step away from pointe shoes
              and embrace yoga and Pilates as a path to well-being. Practicing
              yoga in nature—beneath Crete's warm sun and by the blue
              sea—transformed my journey.
            </p>
            <p className="text-lg text-[#1a2e1a]/80 leading-relaxed">
              This connection to the island's energy inspired me to create
              Cretan Earth Yoga and Meditation Retreats, where I share the magic
              of balance, movement, and inner peace.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Book Section */}
      <section className="py-16 px-4 sm:px-8 bg-[#1B392A] text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif">
              August Fifteenth
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              I also believe in the power of storytelling to connect and
              inspire. My book, August Fifteenth, published in 2019, recounts my
              childhood in Crete during the '80s—summers at my grandmother's
              cottage, family gatherings, endless cooking, and cherished
              traditions.
            </p>
            <motion.a
              href="https://cycladic.gr/en/product/august-fifteenth-english-edition"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#1B392A] px-8 py-4 rounded-full text-lg
                       hover:bg-opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Purchase Book
            </motion.a>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative">
              <Image
                src="/agapi-photo.jpeg" // Replace with actual image
                alt="August Fifteenth Book Cover"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Certification Section */}
      <section className="py-16 px-4 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="space-y-6 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a2e1a]">
              Certified Teacher
            </h2>
            <p className="text-lg text-[#1a2e1a]/80 leading-relaxed">
              As a certified Hatha Yoga teacher (200 TT Hours), I blend nature,
              body balance, and inner happiness into everything I do. My mission
              is to spread love, harmony, and connection—both on and off the
              mat—while celebrating the beauty of Crete, my home and muse.
            </p>
          </motion.div>
        </motion.div>
      </section>
      <ContactSection />
      <Footer />
    </main>
  );
};

export default AboutPage;
