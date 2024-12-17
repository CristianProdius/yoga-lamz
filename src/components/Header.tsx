"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 transition-all duration-300 z-40 w-screen ${
        isScrolled
          ? "py-4 bg-[#f4f6ef]/95 backdrop-blur-md shadow-lg"
          : "py-6 bg-[#f4f6ef]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between px-4 lg:px-8 box-border">
        <Link
          href="/"
          className="relative group text-[#1a2e1a] text-xl sm:text-2xl font-serif tracking-wide shrink-0"
        >
          The Cretan Earth
          <span className="font-light align-super text-sm">™</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a2e1a] transition-all group-hover:w-full"></span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-12">
          {["About", "Book", "Retreats", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative group text-[#1a2e1a] transition-colors duration-300"
            >
              <span className="text-[15px] hover:text-[#354f35]">{item}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#354f35] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/*<div className="flex items-center gap-3 sm:gap-6">
          <button className="hidden sm:flex items-center bg-[#e8ebe3] hover:bg-[#dfe2d8] transition-all duration-300 px-5 py-2.5 rounded-full hover:shadow-md active:scale-95">
            <Image
              src="/login.webp"
              alt="Profile"
              width={24}
              height={32}
              className="rounded-full"
            />
            <span className="ml-2 text-[15px] font-medium">Log In</span>
          </button>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-[#1a2e1a]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>*/}
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#f4f6ef] shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col w-full px-4 py-4">
          {["About", "Book", "Retreats", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="py-3 text-[#1a2e1a] hover:bg-[#e8ebe3] px-4 rounded-lg transition-colors"
            >
              {item}
            </Link>
          ))}
          {/* <button className="mt-3 w-full flex items-center justify-center bg-[#e8ebe3] hover:bg-[#dfe2d8] transition-all duration-300 px-5 py-2.5 rounded-lg sm:hidden">
            <Image
              src="/login.webp"
              alt="Profile"
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="ml-2 text-[15px] font-medium">Log In</span>
          </button>*/}
        </nav>
      </div>
    </header>
  );
}
