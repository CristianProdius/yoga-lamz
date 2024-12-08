"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";

const BookPage = () => {
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
      <section className="min-h-screen relative flex items-center pt-32 pb-20 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#1a2e1a]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1a2e1a]/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
        >
          <motion.div variants={fadeInUp} className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-[64px] font-serif leading-[1.1] tracking-[-0.02em] text-[#1a2e1a]">
              August{" "}
              <span className="italic font-light relative">
                Fifteenth
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1a2e1a]/20"></span>
              </span>
            </h1>
            <p className="text-xl text-[#1a2e1a]/80 leading-relaxed">
              A journey through vintage summer days in a small family village in
              Crete during the 1980s
            </p>
            <motion.a
              href="https://cycladic.gr/en/product/august-fifteenth-english-edition"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1a2e1a] text-white px-8 py-4 rounded-full text-lg
                     hover:bg-[#2a4e2a] transition-all duration-300 shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Purchase Book
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/book1.png" // Replace with actual book cover
                alt="August Fifteenth Book Cover"
                fill
                className="object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 bg-[#1B392A] text-white py-3 px-6 rounded-full font-bold shadow-xl"
              whileHover={{ scale: 1.1 }}
            >
              English Edition
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Book Description Section */}
      <section className="py-24 px-4 sm:px-8 bg-white/50 backdrop-blur-sm">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center space-y-12"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xl text-[#1a2e1a]/80 leading-relaxed italic"
          >
            &apos;Explore, taste and feel the carefreeness of vintage summer
            days in a small family village in the island of Crete during the
            1980s.&apos;
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="space-y-6 text-lg text-[#1a2e1a]/80 leading-relaxed"
          >
            <p>
              Inspiring, joyful and nostalgic this little book of stories
              travels the reader to the easy and relaxing family summer days
              underlining Cretan tradition and the ethics of the era, through
              the eyes and the youthful impulse of a 12 year old girl.
            </p>
            <p>
              Smell the figs, lose your breath skidding down rural farmers paths
              and feel the mountain breeze. Bake bread, or welcome the guests
              and become part of the big feast preparations. Or secretly maybe
              fall in love.
            </p>
            <p>
              Mostly daydream and connect with the big boisterous family soirees
              surrounded with all kinds of stories, fresh fruit and iced home
              made raki.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Visual Journey Section */}
      <section className="py-24 px-4 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-serif text-[#1a2e1a] text-center mb-16"
          >
            A Visual Journey Through Cretan Summers
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {["meditation", "nature", "note", "storytelling", "yoga"].map(
              (name, index) => (
                <motion.div
                  key={index}
                  className="aspect-square rounded-2xl overflow-hidden shadow-xl relative"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={`/crete-${name}.jpeg`} // Replace with actual images
                    alt={`Cretan ${
                      name.charAt(0).toUpperCase() + name.slice(1)
                    } Scene`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-8 bg-[#1B392A] text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-serif"
          >
            Experience the Magic of Cretan Summers
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-white/80 leading-relaxed"
          >
            Join me in reliving these precious memories through the pages of
            August Fifteenth
          </motion.p>

          <motion.a
            variants={fadeInUp}
            href="https://cycladic.gr/en/product/august-fifteenth-english-edition"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#1B392A] px-12 py-5 rounded-full text-lg
                     hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Copy Now
          </motion.a>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
};

export default BookPage;
