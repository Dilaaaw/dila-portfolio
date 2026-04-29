"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import {
  SiNextdotjs, SiReact, SiFlutter, SiFirebase, SiPhp,
  SiGithub, SiJavascript, SiTailwindcss, SiCanva,
} from "react-icons/si";

import { FaJava, FaVideo, FaMicrosoft, FaUsers, FaClock, FaLightbulb } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { MdDesignServices, MdWeb } from "react-icons/md";
import { HiOutlineDatabase } from "react-icons/hi";

export default function Skills() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const tools = [
    { name: "Next.js", icon: <SiNextdotjs />, desc: "Framework React untuk Web" },
    { name: "React", icon: <SiReact className="text-cyan-400" />, desc: "Library UI Web & Mobile" },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400" />, desc: "Framework Mobile & Web" },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" />, desc: "Backend & Authentication" },
    { name: "PHP", icon: <SiPhp className="text-indigo-400" />, desc: "Server-side scripting" },
    { name: "Java", icon: <FaJava className="text-red-500" />, desc: "Pemrograman berorientasi objek" },
    { name: "GitHub", icon: <SiGithub />, desc: "Version control & kolaborasi" },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" />, desc: "Bahasa pemrograman Web" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" />, desc: "Utility CSS framework" },
    { name: "VS Code", icon: <VscVscode className="text-blue-500" />, desc: "Code editor" },
    { name: "Canva", icon: <SiCanva className="text-cyan-500" />, desc: "Desain & editing grafis" },
    { name: "CapCut", icon: <FaVideo className="text-black dark:text-white" />, desc: "Video editing" },
    { name: "Microsoft Office", icon: <FaMicrosoft className="text-blue-600" />, desc: "Word, Excel, PowerPoint" },
  ];

  const skills = [
    { name: "Pemrograman Aplikasi (Web & Mobile)", icon: <MdWeb /> },
    { name: "UI/UX Design", icon: <MdDesignServices /> },
    { name: "Pengolahan & Manajemen Data", icon: <HiOutlineDatabase /> },
    { name: "Desain Grafis", icon: <FaLightbulb /> },
    { name: "Manajemen Waktu", icon: <FaClock /> },
    { name: "Kreativitas", icon: <FaLightbulb /> },
    { name: "Komunikasi", icon: <FaUsers /> },
    { name: "Kerja Sama Tim", icon: <FaUsers /> },
  ];
  const skillSectionRef = useRef(null);
  const [showSkillSection, setShowSkillSection] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSkillSection(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
  
    if (skillSectionRef.current) observer.observe(skillSectionRef.current);
  
    return () => observer.disconnect();
  }, []);
  return (
<section
  ref={skillSectionRef}
  id="skills"
  className={`pt-28 pb-24 transition-colors duration-500 ${
    isDark
      ? "bg-gradient-to-b from-black to-[#111] text-gray-300"
      : "bg-gradient-to-b from-pink-50 to-white text-gray-700"
  }`}
>
      <div className="max-w-6xl mx-auto px-6">
      <h2
  className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent transition-all duration-700
  ${showSkillSection ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
>
  Skills & Tools
</h2>

        <div className="flex flex-col md:flex-row gap-12">

{/* ================= SKILLS ================= */}
<div className="md:w-1/2">
  <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
    🧠 Professional Skills
  </h3>
  <div className="grid grid-cols-2 gap-4">
  {skills.map((skill, index) => (
  <div
    key={index}
    className={`
      relative flex flex-col items-center justify-center
      p-4 rounded-lg cursor-default
      transition-all duration-700 transform
      ${showSkillSection ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90"}
      hover:-translate-y-2 hover:rotate-2 hover:scale-105
      ${isDark 
        ? "bg-gradient-to-t from-white/5 to-white/10 border border-white/10 shadow-[0_8px_15px_rgba(255,255,255,0.15)]"
        : "bg-gradient-to-t from-white/50 to-white border border-gray-200 shadow-[0_8px_15px_rgba(0,0,0,0.1)]"
      }`}
    style={{ transitionDelay: `${index * 120}ms` }}
  >
    <div className="absolute w-24 h-24 rounded-full blur-2xl -z-10 bg-pink-400/20"></div>
    <div className="text-3xl text-pink-500 mb-2">{skill.icon}</div>
    <p className="text-center text-sm font-medium">{skill.name}</p>
  </div>
))}
  </div>
</div>

{/* ================= TOOLS ================= */}
<div className="md:w-1/2">
  <h3 className="text-2xl font-semibold mb-8 text-center md:text-left">
    💻 Tech Stack & Tools
  </h3>
  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
  {tools.map((tool, index) => (
  <div
    key={index}
    className={`
      relative group w-20 h-20 md:w-24 md:h-24
      flex items-center justify-center
      rounded-lg
      transition-all duration-700 transform
      ${showSkillSection ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-75"}
      hover:-translate-y-2 hover:rotate-6 hover:scale-110
      ${isDark 
        ? "bg-black/30 border border-white/20 shadow-[0_12px_25px_rgba(255,255,255,0.25)]"
        : "bg-white border border-gray-200 shadow-[0_12px_25px_rgba(0,0,0,0.15)]"
      }`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className={`absolute w-24 h-24 rounded-full blur-2xl -z-10 ${
      isDark ? "bg-white/10" : "bg-pink-200/20"
    }`}></div>

    <div className="text-4xl">{tool.icon}</div>

    {/* Tooltip */}
    <div className="absolute bottom-full mb-2 w-max max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded px-3 py-2 text-center z-10">
      <p className="font-semibold">{tool.name}</p>
      <p className="mt-1 text-[10px]">{tool.desc}</p>
    </div>
  </div>
))}
  </div>
</div>

        </div>
      </div>
    </section>
  );
}