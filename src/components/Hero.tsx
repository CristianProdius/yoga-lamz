// components/Hero.jsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className=" bg-[#f4f6ef] pt-32 pb-20 px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="lg:w-[45%] space-y-8">
          <h1 className="text-[64px] font-serif leading-[1.1] tracking-[-0.02em]">
            Transform <span className="italic font-light">Your</span>
            <br />
            <span className="italic font-light">Body</span> and Mind
          </h1>
          <p className="text-lg text-[#1a2e1a]/80 max-w-md leading-relaxed">
            Join us in transforming your body and mind through our comprehensive
            yoga and fitness programs.
          </p>
          <div className="flex items-center space-x-5 pt-4">
            <button className="bg-[#1a2e1a] text-white px-8 py-4 rounded-full hover:bg-[#2a3f2a] transition-colors duration-300 text-[15px]">
              Join Member
            </button>
            <button className="bg-[#e8ebe3] text-[#1a2e1a] px-8 py-4 rounded-full hover:bg-[#dfe2d8] transition-colors duration-300 text-[15px]">
              Start for free
            </button>
          </div>
        </div>

        <div className="lg:w-[55%]">
          <div className="rounded-[32px] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.1)]">
            <Image
              src="/yoga-woman.png"
              alt="Meditation practice"
              width={800}
              height={900}
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
