"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark" || resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-10 transition-colors duration-500
      ${isDark ? "bg-black/70 backdrop-blur text-gray-300" : "bg-white/70 backdrop-blur text-gray-700"}
      px-6 py-4`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT AREA */}
        <div className="flex items-center gap-4">

          {/* THEME BUTTON */}
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-full
            border border-pink-500 text-pink-500
            hover:bg-pink-500 hover:text-white
            transition-all duration-300"
          >
            {isDark ? "☀ Light" : "🌙 Dark"}
          </button>

          {/* HAMBURGER MOBILE */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-[2px] bg-pink-500"></span>
            <span className="w-6 h-[2px] bg-pink-500"></span>
            <span className="w-6 h-[2px] bg-pink-500"></span>
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-sm font-medium ml-6">

            <a href="#hero" className="hover:text-pink-500 transition">
              Home
            </a>

            <a href="#about" className="hover:text-pink-500 transition">
              About
            </a>

            <a href="#skills" className="hover:text-pink-500 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-pink-500 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-pink-500 transition">
              Contact
            </a>

          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className={`md:hidden mt-4 flex flex-col gap-4
          ${isDark ? "text-gray-300" : "text-gray-700"}`}
        >
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}