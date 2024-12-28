"use client";
import { FC, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface FooterProps {
  currentYear?: number;
}

const Footer: FC<FooterProps> = ({ currentYear = 2024 }) => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Subscription failed");
      }

      setEmail("");
      setStatus("success");
    } catch (error) {
      console.error("Subscription failed:", error);
      setStatus("error");
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-[#DBE5DB] to-[#E5EDE5] px-6 py-16 md:px-8 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr,1fr] gap-12 md:gap-16">
          {/* Newsletter Section */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="text-3xl font-medium text-[#1B392A]">
              The Cretan Earth™
            </h2>
            <p className="text-gray-700 text-lg">
              Subscribe to receive updates about upcoming retreats and Cretan
              wellness insights.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative group"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent border-b-2 border-black/20 pb-3 focus:outline-none focus:border-[#1B392A] transition-all duration-300 text-lg px-2"
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1B392A] group-hover:w-full transition-all duration-300" />
              </motion.div>
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(27,57,42,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1B392A] text-white px-10 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-[#2A4F3A] w-full md:w-auto"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </motion.button>
              {status === "success" && (
                <p className="text-green-600">Successfully subscribed!</p>
              )}
              {status === "error" && (
                <p className="text-red-600">
                  Failed to subscribe. Please try again.
                </p>
              )}
            </form>
            <p className="text-sm text-gray-600 leading-relaxed">
              By subscribing you agree to our Privacy Policy and provide consent
              to receive updates about our retreats and events.
            </p>
          </motion.div>

          <motion.div></motion.div>
          {/* Connect Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-medium mb-8 text-[#1B392A]">Connect</h3>
            <motion.ul variants={staggerChildren} className="space-y-4">
              <motion.li key="Book Purchase" variants={fadeInUp}>
                <Link href="/book">
                  <span
                    onMouseEnter={() => setIsHovered("Book Purchase")}
                    onMouseLeave={() => setIsHovered("")}
                    className="relative inline-block text-lg text-gray-700 hover:text-[#1B392A] 
                             transition-colors duration-300"
                  >
                    Book Purchase
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1B392A] transform origin-left
                                   transition-transform duration-300 ${
                                     isHovered === "Book Purchase"
                                       ? "scale-x-100"
                                       : "scale-x-0"
                                   }`}
                    />
                  </span>
                </Link>
              </motion.li>
              <motion.li key="Instagram" variants={fadeInUp}>
                <Link
                  href="https://www.instagram.com/agapi_kefalogianni/"
                  passHref
                >
                  <span
                    onMouseEnter={() => setIsHovered("Instagram")}
                    onMouseLeave={() => setIsHovered("")}
                    className="relative inline-block text-lg text-gray-700 hover:text-[#1B392A] 
                             transition-colors duration-300"
                  >
                    Instagram
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1B392A] transform origin-left
                                   transition-transform duration-300 ${
                                     isHovered === "Instagram"
                                       ? "scale-x-100"
                                       : "scale-x-0"
                                   }`}
                    />
                  </span>
                </Link>
              </motion.li>
              <motion.li key="Contact" variants={fadeInUp}>
                <Link href="/contact">
                  <span
                    onMouseEnter={() => setIsHovered("Contact")}
                    onMouseLeave={() => setIsHovered("")}
                    className="relative inline-block text-lg text-gray-700 hover:text-[#1B392A] 
                             transition-colors duration-300"
                  >
                    Contact
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1B392A] transform origin-left
                                   transition-transform duration-300 ${
                                     isHovered === "Contact"
                                       ? "scale-x-100"
                                       : "scale-x-0"
                                   }`}
                    />
                  </span>
                </Link>
              </motion.li>
              <motion.li key="About Agapi" variants={fadeInUp}>
                <Link href="/about">
                  <span
                    onMouseEnter={() => setIsHovered("About Agapi")}
                    onMouseLeave={() => setIsHovered("")}
                    className="relative inline-block text-lg text-gray-700 hover:text-[#1B392A] 
                             transition-colors duration-300"
                  >
                    About Agapi
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1B392A] transform origin-left
                                   transition-transform duration-300 ${
                                     isHovered === "About Agapi"
                                       ? "scale-x-100"
                                       : "scale-x-0"
                                   }`}
                    />
                  </span>
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-center justify-between mt-16 md:mt-24 pt-8 
                     border-t border-black/10"
        >
          <div className="text-gray-600 text-center md:text-left">
            © {currentYear} All rights reserved. The Cretan Earth™
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 md:mt-0 text-center md:text-left">
            <Link href="#">
              <span
                onMouseEnter={() => setIsHovered("Back to top")}
                onMouseLeave={() => setIsHovered("")}
                className="relative text-gray-600 hover:text-[#1B392A] transition-colors duration-300"
              >
                Back to top
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1B392A] transform origin-left
                               transition-transform duration-300 ${
                                 isHovered === "Back to top"
                                   ? "scale-x-100"
                                   : "scale-x-0"
                               }`}
                />
              </span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
