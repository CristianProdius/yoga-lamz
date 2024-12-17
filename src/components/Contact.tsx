"use client";
import { FC, FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import emailjs from "@emailjs/browser";

{
  /*Create an EmailJS account and:
Create an Email Service (get SERVICE_ID)
Create an Email Template (get TEMPLATE_ID)
Get your Public Key from the Account page
Create an email template in EmailJS dashboard using these variables:
{{user_name}}
{{user_email}}
{{message}}
Replace the placeholders in the code:
YOUR_PUBLIC_KEY
YOUR_SERVICE_ID
YOUR_TEMPLATE_ID */
}

const ContactSection: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init({
      publicKey: "YOUR_PUBLIC_KEY", // Get this from EmailJS dashboard
    });
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID", // Get from EmailJS Email Services
        "YOUR_TEMPLATE_ID", // Get from EmailJS Email Templates
        e.target as HTMLFormElement
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
                <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl relative">
                  <Image
                    src="/yoga-woman.webp" // Replace with actual retreat image
                    alt="Yoga in Crete"
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
              {["meditation", "storytelling", "nature", "yoga", "note"].map(
                (activity, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="overflow-hidden rounded-3xl shadow-xl relative"
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={`/crete-${activity}.webp`} // Replace with actual activity images
                        alt={`Cretan Earth ${activity}`}
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-700"
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
                  name="user_name" // Important: match this with your EmailJS template
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
                  name="user_email" // Important: match this with your EmailJS template
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
                  name="message" // Important: match this with your EmailJS template
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
                disabled={isSubmitting}
                whileHover={{
                  scale: isSubmitting ? 1 : 1.05,
                  boxShadow: "0 10px 30px rgba(26,46,26,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`bg-[#1a2e1a] text-white px-12 py-5 rounded-full text-lg
               shadow-xl hover:shadow-2xl transition-all duration-500
               hover:bg-[#2a3f2a] w-full lg:w-auto ${
                 isSubmitting ? "opacity-70 cursor-not-allowed" : ""
               }`}
              >
                {isSubmitting ? "Sending..." : "Inquire About Retreats"}
              </motion.button>

              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 text-center"
                >
                  Thank you for your message! We&apos;ll get back to you soon.
                </motion.p>
              )}

              {submitStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-600 text-center"
                >
                  There was an error sending your message. Please try again
                  later.
                </motion.p>
              )}
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
