import React from "react";
import { CogIcon, BellIcon, HeartIcon } from "@heroicons/react/24/outline";

const ServicesSection: React.FC = () => {
  return (
    <div className="bg-[#f4f6ef] py-32">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex justify-between items-start mb-24">
          <div className="max-w-[560px]">
            <h2 className="text-[56px] text-[#0A2012] font-normal leading-tight tracking-tight">
              Our Services
            </h2>
            <p className="text-[#0A2012]/80 text-[15px] leading-relaxed mt-6 font-light">
              Whether you are a beginner or an advanced practitioner, our
              offerings are designed to inspire and support you on your wellness
              journey.
            </p>
          </div>
          <button className="px-8 py-3.5 bg-[#0A2012] text-white rounded-full hover:bg-[#0A2012]/90 transition-all text-[15px]">
            Explore the services
          </button>
        </div>

        <div className="grid grid-cols-3 gap-24">
          <ServiceCard
            icon={<CogIcon className="w-12 h-12 text-[#0A2012]" />}
            title="Yoga Classes"
            description="Classes for all levels, from beginners to advanced. Enjoy various styles like Hatha, Vinyasa, and Yin Yoga."
          />
          <ServiceCard
            icon={<BellIcon className="w-12 h-12 text-[#0A2012]" />}
            title="Fitness Training"
            description="Personalized training programs tailored to your fitness goals. Focus on strength and flexibility."
          />
          <ServiceCard
            icon={<HeartIcon className="w-12 h-12 text-[#0A2012]" />}
            title="Wellness Laps"
            description="Explore workshops on mindfulness, stress relief, and holistic wellness. Suitable for all levels of experience."
          />
        </div>
      </div>
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div>
    <div className="mb-8">{icon}</div>
    <h3 className="text-[32px] font-normal mb-4 text-[#0A2012] tracking-tight">
      {title}
    </h3>
    <p className="text-[#0A2012]/70 text-[15px] leading-relaxed font-light">
      {description}
    </p>
  </div>
);

export default ServicesSection;
