"use client";
import { FC, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactSection: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gradient-to-br from-[#f8f9f3] via-[#f4f5f0] to-[#eceee7] py-32">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Image Gallery */}
          <motion.div variants={fadeInUp} className="flex-1 relative">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="col-span-2 row-span-2"
              >
                <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/yoga-woman.jpg" // Replace with actual retreat image
                    alt="Yoga in Crete"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
              {["meditation", "storytelling", "nature", "yoga", "note"].map(
                (activity, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="overflow-hidden rounded-3xl shadow-xl"
                  >
                    <div className="aspect-square">
                      <img
                        src={`/crete-${activity}.jpeg`} // Replace with actual activity images
                        alt={`Cretan Earth ${activity}`}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeInUp} className="flex-1 w-full max-w-xl">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-light mb-8 text-[#1a2e1a] tracking-tight"
            >
              Join the Journey
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg mb-12 text-gray-600 leading-relaxed"
            >
              Experience the transformative power of yoga and meditation in the
              heart of Crete. Connect with nature, tradition, and inner peace
              through our unique retreats.
            </motion.p>

            <motion.form
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative group"
              >
                <input
                  type="text"
                  placeholder="Your Name (required)"
                  className="w-full py-4 bg-transparent outline-none text-lg transition-all
                           duration-300 group-hover:border-[#1a2e1a] px-2"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
                <div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1a2e1a] 
                              group-hover:w-full transition-all duration-300"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative group"
              >
                <input
                  type="email"
                  placeholder="Email (required)"
                  className="w-full py-4 bg-transparent outline-none text-lg transition-all
                           duration-300 group-hover:border-[#1a2e1a] px-2"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
                <div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1a2e1a] 
                              group-hover:w-full transition-all duration-300"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative group"
              >
                <textarea
                  placeholder="Tell me about your interest in the retreat (required)"
                  rows={4}
                  className="w-full py-4 bg-transparent outline-none text-lg resize-none
                           transition-all duration-300 group-hover:border-[#1a2e1a] px-2"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
                <div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1a2e1a] 
                              group-hover:w-full transition-all duration-300"
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(26,46,26,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1a2e1a] text-white px-12 py-5 rounded-full text-lg
                         shadow-xl hover:shadow-2xl transition-all duration-500
                         hover:bg-[#2a3f2a] w-full lg:w-auto"
              >
                Inquire About Retreats
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
