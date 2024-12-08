"use client";
import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main className="bg-[#f4f6ef]">
      <Header />
      {/* Hero Section */}
      <section className="min-h-[50vh] relative flex items-center pt-32 pb-20 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#1a2e1a]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1a2e1a]/5 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-7xl mx-auto relative z-10 w-full"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto space-y-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-[64px] font-serif leading-[1.1] tracking-[-0.02em] text-[#1a2e1a]">
              Get in{" "}
              <span className="italic font-light relative">
                Touch
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1a2e1a]/20"></span>
              </span>
            </h1>
            <p className="text-xl text-[#1a2e1a]/80 leading-relaxed">
              Whether you're interested in our retreats, have questions about
              the book, or simply want to connect, I'd love to hear from you.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <motion.div variants={fadeInUp}>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="relative group"
                  >
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full py-4 bg-transparent border-b-2 border-[#1a2e1a]/20 
                               outline-none text-lg transition-all duration-300 
                               group-hover:border-[#1a2e1a] px-2"
                      required
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="relative group"
                  >
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full py-4 bg-transparent border-b-2 border-[#1a2e1a]/20 
                               outline-none text-lg transition-all duration-300 
                               group-hover:border-[#1a2e1a] px-2"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative group"
                >
                  <input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full py-4 bg-transparent border-b-2 border-[#1a2e1a]/20 
                             outline-none text-lg transition-all duration-300 
                             group-hover:border-[#1a2e1a] px-2"
                    required
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative group"
                >
                  <textarea
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full py-4 bg-transparent border-b-2 border-[#1a2e1a]/20 
                             outline-none text-lg resize-none transition-all duration-300 
                             group-hover:border-[#1a2e1a] px-2"
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1a2e1a] text-white px-12 py-5 rounded-full text-lg
                           shadow-xl hover:shadow-2xl transition-all duration-500
                           hover:bg-[#2a3f2a] w-full sm:w-auto"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-12">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/crete-yoga.jpeg" // Replace with actual image
                  alt="Cretan Landscape"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-8 bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
                <div>
                  <h3 className="text-xl font-serif text-[#1a2e1a] mb-2">
                    Location
                  </h3>
                  <p className="text-[#1a2e1a]/80">Crete, Greece</p>
                </div>

                <div>
                  <h3 className="text-xl font-serif text-[#1a2e1a] mb-2">
                    Email
                  </h3>
                  <p className="text-[#1a2e1a]/80">contact@cretanearth.com</p>
                </div>

                <div>
                  <h3 className="text-xl font-serif text-[#1a2e1a] mb-2">
                    Social
                  </h3>
                  <div className="flex space-x-4">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="text-[#1a2e1a]/80 hover:text-[#1a2e1a]"
                    >
                      Instagram
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="text-[#1a2e1a]/80 hover:text-[#1a2e1a]"
                    >
                      Facebook
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
};

export default ContactPage;
