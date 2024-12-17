"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";

const RetreatsPage = () => {
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

  const retreatProgram = {
    saturday: [
      {
        time: "8:30 – 9:30",
        activity: "Fresh & Tone Full Body Yoga + Grace & Gratitude Meditation",
        location: "Yoga Pavilion",
        description:
          "Disconnect with an early-morning session in our garden's exhilarating presence - a revitalizing retreat experience.",
      },
      {
        time: "18:00 – 19:00",
        activity: "Calming Down Yoga + Blissful Sunset Meditation",
        location: "By the Sea",
        description:
          "Optional workshops to reflect and recoup with restorative exercise.",
      },
    ],
    sunday: [
      {
        time: "8:30 – 9:30",
        activity: "Strength & Balance Yoga Glow + Blissful Morning Meditation",
        location: "Yoga Pavilion",
        description: "A perfect workout suitable for all levels and ages.",
      },
      {
        time: "14:00 – 15:00",
        activity: "Cooking Lesson & Book Reading",
        location: "Mouries Cretan Restaurant",
        description:
          "Join our Executive Chef for a cooking lesson using locally-sourced ingredients and herbs from our organic garden, followed by a book reading session with Agapi from 'August Fifteenth'.",
      },
      {
        time: "18:00 – 19:00",
        activity: "Flow Evening Yoga + Sunset Meditation",
        location: "By the Sea",
        description:
          "Complete your retreat weekend feeling refreshed, inspired, and motivated.",
      },
    ],
  };

  const retreatHighlights = [
    {
      title: "Yoga & Meditation",
      description:
        "Daily practice sessions in nature, connecting mind and body",
      icon: "🧘‍♀️",
    },
    {
      title: "Storytelling",
      description:
        "Book readings and traditional Cretan tales under olive trees",
      icon: "📚",
    },
    {
      title: "Cultural Experience",
      description:
        "Immerse yourself in authentic Cretan traditions and cuisine",
      icon: "🌿",
    },
    {
      title: "Natural Settings",
      description: "Practice by the crystal-clear seas and ancient landscapes",
      icon: "🌊",
    },
  ];

  return (
    <main className="bg-[#f4f6ef]">
      <Header />
      {/* Hero Section */}
      <section className="min-h-[80vh] relative flex items-center pt-32 pb-20 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#1a2e1a]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1a2e1a]/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto space-y-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-[64px] font-serif leading-[1.1] tracking-[-0.02em] text-[#1a2e1a]">
              The Cretan Earth{" "}
              <span className="italic font-light relative">
                Yoga & Meditation
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1a2e1a]/20"></span>
              </span>
              <span className="block mt-4">Retreat</span>
            </h1>
            <p className="text-xl text-[#1a2e1a]/80 leading-relaxed">
              A lovely mix of yoga, meditation, relaxation and shared
              experiences to revitalize and restore your inner balance through a
              practice that will enhance the mind, nourish the soul, and give
              you every reason you need to celebrate life.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="aspect-video rounded-3xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://drive.google.com/file/d/1x0yTKl-Ph64pDKpzw7yhxxjv9c1TL8Li/preview"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 px-4 sm:px-8 bg-white/50 backdrop-blur-sm">
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
            Retreat Highlights
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {retreatHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <span className="text-4xl mb-4 block">{highlight.icon}</span>
                <h3 className="text-xl font-serif text-[#1a2e1a] mb-3">
                  {highlight.title}
                </h3>
                <p className="text-[#1a2e1a]/70">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery Section */}
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
            Experience the Magic
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
                    src={`/crete-${name}.webp`} // Replace with actual images
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

      {/* Dates & Booking Section */}
      <section className="py-24 px-4 sm:px-8 bg-[#1B392A] text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Program Schedule
            </h2>
          </motion.div>

          {Object.entries(retreatProgram).map(([day, activities]) => (
            <motion.div key={day} variants={fadeInUp} className="mb-12">
              <h3 className="text-2xl font-serif mb-6 uppercase">{day}</h3>
              <div className="space-y-8">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
                  >
                    <h4 className="text-xl font-serif mb-2">{activity.time}</h4>
                    <h5 className="text-lg mb-2 text-white/90">
                      {activity.activity}
                    </h5>
                    <p className="text-white/70 mb-2 italic">
                      {activity.location}
                    </p>
                    <p className="text-white/80">{activity.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#1B392A] px-12 py-5 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Request to Book
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
};

export default RetreatsPage;
