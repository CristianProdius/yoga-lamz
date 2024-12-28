"use client";
import React from "react";
import { HeartIcon, BookOpenIcon, SunIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#f4f6ef] to-[#eaf3ce] py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-24">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group p-6 rounded-2xl hover:bg-white/50 transition-all duration-300 hover:shadow-xl"
  >
    <div className="mb-6 sm:mb-8 transform group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-2xl sm:text-3xl font-serif mb-3 sm:mb-4 text-[#0A2012] tracking-tight">
      {title}
    </h3>
    <p className="text-[#0A2012]/70 text-[15px] leading-relaxed font-light">
      {description}
    </p>
  </motion.div>
);

const services = [
  {
    icon: <HeartIcon className="w-12 h-12 text-[#0A2012]" />,
    title: "Yoga & Meditation",
    description:
      "Experience transformative Hatha Yoga sessions and guided meditations in the serene natural settings of Crete, connecting mind, body, and spirit.",
  },
  {
    icon: <BookOpenIcon className="w-12 h-12 text-[#0A2012]" />,
    title: "Storytelling & Culture",
    description:
      "Immerse yourself in Cretan culture through storytelling sessions from 'August Fifteenth' and traditional experiences under ancient olive trees.",
  },
  {
    icon: <SunIcon className="w-12 h-12 text-[#0A2012]" />,
    title: "Nature Connection",
    description:
      "Practice yoga by the crystal-clear seas and embrace the raw beauty of Crete, drawing inspiration from the island's rich Minoan heritage.",
  },
];

export default ServicesSection;
