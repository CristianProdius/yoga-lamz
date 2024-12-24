"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false); // Set initial state to false to enable sound
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeUp = {
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

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative bg-[#f4f6ef] flex items-center pt-32 pb-20 px-4 sm:px-8 w-full overflow-x-hidden">
      <div className="absolute inset-0 bg-repeat opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f4f6ef]" />
      </div>

      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={stagger}
        className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10"
      >
        <motion.div variants={fadeUp} className="lg:w-[45%] space-y-8">
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-[64px] font-serif leading-[1.1] tracking-[-0.02em] text-center lg:text-left"
          >
            The Cretan Earth{" "}
            <span className="italic font-light relative">
              Yoga
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1a2e1a]/20"></span>
            </span>
            <br />
            <span className="italic font-light relative">
              & Meditation
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1a2e1a]/20"></span>
            </span>{" "}
            Experience
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-[#1a2e1a]/80 max-w-md leading-relaxed text-center lg:text-left"
          >
            Join me in a transformative journey combining yoga, meditation, and
            the authentic spirit of Crete, where nature meets tradition.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 sm:space-x-5 pt-4 justify-center lg:justify-start"
          >
            <Link href="/retreats" passHref>
              <button className="w-full sm:w-auto bg-[#1a2e1a] text-white px-8 py-4 rounded-full hover:bg-[#2a3f2a] transition-all duration-300 text-[15px] hover:shadow-lg hover:scale-105 active:scale-95">
                Explore Retreat
              </button>
            </Link>
            <Link href="/book" passHref>
              <button className="w-full sm:w-auto bg-[#e8ebe3] text-[#1a2e1a] px-8 py-4 rounded-full hover:bg-[#dfe2d8] transition-all duration-300 text-[15px] hover:shadow-lg hover:scale-105 active:scale-95">
                Explore Book
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} className="lg:w-[50%] relative">
          <div className="relative rounded-[32px] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.1)] group">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e1a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            {/* Video element */}
            <video
              ref={videoRef}
              src="/main_video.mp4"
              className="object-cover w-full h-full transform group-hover:scale-105 transition-all duration-700 max-w-full"
              autoPlay
              loop
              playsInline
              muted={isMuted} // Bind the muted attribute to the state
              onError={(e) => console.error("Video error:", e)}
            />

            {/* Video controls overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <div className="flex gap-4">
                <button
                  onClick={togglePlayPause}
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all duration-300"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <PauseIcon className="w-6 h-6 text-white" />
                  ) : (
                    <PlayIcon className="w-6 h-6 text-white" />
                  )}
                </button>
                <button
                  onClick={toggleMute}
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all duration-300"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <VolumeOffIcon className="w-6 h-6 text-white" />
                  ) : (
                    <VolumeOnIcon className="w-6 h-6 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Helper components for icons
const PlayIcon = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const VolumeOnIcon = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
  </svg>
);

const VolumeOffIcon = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
  </svg>
);
