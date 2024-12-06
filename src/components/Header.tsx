// components/Header.jsx
"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed w-full bg-[#f4f6ef] backdrop-blur-sm bg-opacity-90 py-6 px-8 z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-[#1a2e1a] text-2xl font-serif tracking-wide"
        >
          Fitness<span className="font-light align-super text-sm">™</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-12">
          {["Trainers", "Blog", "Plans", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[#1a2e1a] hover:text-[#354f35] transition-colors duration-300 text-[15px]"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-[#1a2e1a]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="ml-2 text-sm">0</span>
          </div>
          <button className="flex items-center bg-[#e8ebe3] hover:bg-[#dfe2d8] transition-colors duration-300 px-5 py-2.5 rounded-full">
            <Image
              src="/yoga-woman.png"
              alt="Profile"
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="ml-2 text-[15px]">Log In</span>
          </button>
        </div>
      </div>
    </header>
  );
}
