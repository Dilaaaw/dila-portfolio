"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function About() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // ================= EFFECT =================
  const textRef = useRef(null);
  const skillRef = useRef(null);
  const revealRef = useRef(null);
  const [showIntro, setShowIntro] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [showSkills, setShowSkills] = useState(false);

  const fullText = `Memahami dasar pengembangan aplikasi seperti sistem CRUD, autentikasi pengguna, serta pengelolaan database menggunakan MySQL maupun Firebase. Saat ini saya terus belajar dan mengembangkan kemampuan untuk membangun solusi digital yang rapi, efisien, dan sesuai kebutuhan pengguna.`;
  const eduRef = useRef(null);
  const [showEdu, setShowEdu] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);
  const expRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const photoRef = useRef(null);
const [showPhoto, setShowPhoto] = useState(false);
const galleryRef = useRef(null);
const [showGallery, setShowGallery] = useState(false);
  const [showExp, setShowExp] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // Typing Effect
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasTyped) {
        
        setTimeout(() => {
          let i = 0;
          const words = fullText.split(" ");

          const interval = setInterval(() => {
            setDisplayText(words.slice(0, i).join(" "));
            i++;

            if (i > words.length) {
              clearInterval(interval);
              setHasTyped(true);
            }
          }, 70);
        }, 400);
      }
    },
    { threshold: 0.3 }
  );

  if (textRef.current) observer.observe(textRef.current);

  return () => observer.disconnect();
}, [hasTyped]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowIntro(true);
        } else {
          setShowIntro(false);
        }
      },
      { threshold: 0.25 }
    );
  
    if (revealRef.current) observer.observe(revealRef.current);
  
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowPhoto(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
  
    if (photoRef.current) observer.observe(photoRef.current);
  
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowGallery(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
  
    if (galleryRef.current) observer.observe(galleryRef.current);
  
    return () => observer.disconnect();
  }, []);

  // Skills Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSkills(true);
        } else {
          setShowSkills(false);
        }
      },
      { threshold: 0.25 }
    );
  
    if (skillRef.current) observer.observe(skillRef.current);
  
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowEdu(true);
        } else {
          setShowEdu(false);
        }
      },
      { threshold: 0.25 }
    );
  
    if (eduRef.current) observer.observe(eduRef.current);
  
    return () => observer.disconnect();
  }, []);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setShowExp(entry.isIntersecting);
    },
    { threshold: 0.2 }
  );

  if (expRef.current) observer.observe(expRef.current);

  return () => observer.disconnect();
}, []);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setShowProject(entry.isIntersecting);
    },
    { threshold: 0.2 }
  );

  if (projectRef.current) observer.observe(projectRef.current);

  return () => observer.disconnect();
}, []);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setShowContact(entry.isIntersecting);
    },
    { threshold: 0.2 }
  );

  if (contactRef.current) observer.observe(contactRef.current);

  return () => observer.disconnect();
}, []);

  return (
    <section
      id="about"
      className={`pt-28 pb-20 transition-colors duration-500 ${
        isDark
          ? "bg-gradient-to-b from-[#0f0f0f] via-[#141414] to-black text-gray-300"
          : "bg-gradient-to-b from-gray-50 to-white text-gray-700"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* ================= TOP STRUCTURE ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT ================= */}
          <div
  ref={revealRef}
  className="space-y-6"
>

            <div>
            <h2
  className={`text-4xl font-bold mb-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent transition-all duration-700
  ${showIntro ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
>
  I’m Dila Dahlia
</h2>

              <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
            </div>

            {/* Highlight */}
            <div
  className={`p-6 rounded-2xl backdrop-blur-lg transition-all duration-700 delay-200
  ${showIntro ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
  ${
    isDark
      ? "bg-white/5 border border-white/10 shadow-lg shadow-pink-500/10"
      : "bg-white border border-gray-200 shadow-lg"
  }`}
>
              <p className="leading-relaxed text-lg">
                Lulusan <span className="font-semibold text-pink-500">
                  Teknik Informatika
                </span>{" "}
                yang memiliki minat dalam pengembangan aplikasi web dan mobile.
                Saya terbiasa menggunakan{" "}
                <span className="font-semibold text-purple-500">
                  HTML, CSS, JavaScript, PHP
                </span>{" "}
                serta beberapa framework seperti{" "}
                <span className="font-semibold text-blue-400">
                  Next.js, React, dan Flutter
                </span>.
              </p>
            </div>

            {/* ===== TYPING PARAGRAPH ===== */}
            <p ref={textRef} className="leading-relaxed">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>

            {/* ===== SKILLS ===== */}
            <div ref={skillRef} className="flex flex-wrap gap-3 pt-2">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "Next.js",
                "React",
                "Flutter",
                "Firebase",
                "MySQL"
              ].map((skill, i) => (
                <span
                  key={skill}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-500
                  ${showSkills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                  ${
                    isDark
                      ? "bg-white/10 text-pink-300 border border-white/10"
                      : "bg-pink-100 text-pink-600"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

{/* RIGHT - PHOTO + TERMINAL */}
<div
  ref={photoRef}
  className={`relative flex justify-center md:justify-end transition-all duration-1000
  ${showPhoto ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"}
`}
>

  {/* Glow Border Wrapper */}
  <div className="relative group animate-float">

    {/* Animated Border */}
    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-lg opacity-70 group-hover:opacity-100 animate-spin-slow"></div>

{/* Image Container 3D */}
<div
  className="relative"
  style={{ perspective: "1200px" }}
>
  <div
className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ease-out hover:scale-[1.02] ${
      isDark ? "bg-black border border-white/10" : "bg-white"
    }`}
    onMouseMove={(e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 8;
      const rotateY = ((x - centerX) / centerX) * -8;

      card.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
      `;

      // Update light position
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform =
        "rotateX(0deg) rotateY(0deg) scale(1)";
    }}
  >
   {/* 💖 PREMIUM PINK-BLUE FOLLOW LIGHT */}
<div
  className="absolute inset-0 pointer-events-none transition-opacity duration-300"
  style={{
    background: isDark
      ? `
        radial-gradient(
          320px circle at var(--mouse-x) var(--mouse-y),
          rgba(255, 0, 150, 0.45),
          rgba(120, 0, 255, 0.25),
          transparent 65%
        )
      `
      : `
        radial-gradient(
          320px circle at var(--mouse-x) var(--mouse-y),
          rgba(255, 105, 180, 0.55),
          rgba(135, 206, 250, 0.45),
          transparent 65%
        )
      `,
  }}
/>
{/* Soft Gradient Depth */}
<div
  className={`absolute inset-0 ${
    isDark
      ? "bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10"
      : "bg-gradient-to-br from-pink-300/40 via-white to-sky-300/40"
  }`}
/>

    {/* Shine Layer */}
    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-30 pointer-events-none"></div>

    {/* Profile Image */}
    <Image
      src="/profil.jpg"
      alt="Profile"
      width={380}
      height={480}
      className="relative z-10 object-cover w-[320px] md:w-[380px] h-auto"
    />
  </div>
</div>
</div>

{/* Terminal Card */}
<div
  className={`
    absolute bottom-0 -left-10 md:-left-16 
    w-80 p-5 rounded-2xl shadow-2xl 
    font-mono text-sm
    transition-all duration-300
    ${isDark
      ? "bg-[#0d1117] border border-white/10 text-green-400"
      : "bg-[#f6f8fa] border border-gray-300 text-gray-800"}
  `}
>


{/* Terminal Card - Mac Style */}
<div className="absolute bottom-4 right-0 md:-right-6 w-[260px] md:w-[300px] rounded-2xl shadow-2xl overflow-hidden animate-fadeUp">

  {/* Mac Header */}
  <div className="bg-[#2b2b2b] px-4 py-2 flex items-center gap-2">
    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
  </div>

  {/* Terminal Body */}
  <div className="bg-[#1c1c1e] px-4 py-4 text-sm font-mono text-gray-300 leading-relaxed">
    
    <p>
      <span className="text-gray-500"> ~ % </span>
      <span className="text-blue-400">
        npx create-next-app portfolio-dila
      </span>
    </p>

    <p className="text-gray-400 mt-2">✔ Installing skills...</p>
    <p className="text-gray-400">✔ Compiling creativity...</p>
    <p className="text-gray-400">✔ Launching innovation...</p>

    <p className="mt-2 flex items-center">
      <span className="text-pink-400">
        Portfolio Ready 🚀 💗
      </span>
      <span className="ml-1 animate-pulse text-gray-500">|</span>
    </p>

  </div>
</div>
</div>
        </div>
        </div>

{/* ================= EDUCATION ================= */}
<div ref={eduRef} className="mt-28">

  {/* TITLE */}
  <h3
    className={`text-3xl font-semibold mb-16 text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent transition-all duration-700
    ${showEdu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
  >
    Pendidikan
  </h3>

  {/* TIMELINE DOT */}
  <div className="relative">

  <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-pink-500 to-purple-500 opacity-10 blur-sm -translate-x-1/2"></div>

    {/* CARD */}
    <div
      className={`relative max-w-5xl mx-auto p-8 rounded-3xl transition-all duration-700 delay-200 group
      ${showEdu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      ${
        isDark
          ? "bg-white/5 border border-white/10 shadow-xl shadow-pink-500/10"
          : "bg-white border border-gray-200 shadow-xl"
      }`}
    >

      {/* Glow background */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-pink-500 to-purple-500 blur-2xl opacity-10 group-hover:opacity-25 transition"></div>

      <div className="relative grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div className="space-y-5">

          <h4 className="text-2xl font-bold tracking-wide">
            S1 Teknik Informatika
          </h4>

          <p className="text-lg font-medium text-pink-500">
            Universitas Muhammadiyah Purwokerto
          </p>

          <p className="leading-relaxed">
            📅 <span className="font-medium">Masa Studi:</span><br/>
            18 Agustus 2022 – 23 Januari 2026
          </p>

          {/* BADGE */}
          <div className="pt-3">
            <span
              className={`inline-block px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
              ${
                isDark
                  ? "bg-pink-500/20 text-pink-300 border border-pink-500/30 shadow-lg shadow-pink-500/10"
                  : "bg-pink-100 text-pink-600"
              }`}
            >
              🎓 Lulus 3.5 Tahun – Predikat Cumlaude ✨
            </span>
          </div>

        </div>

        {/* RIGHT LOGO */}
        <div className="flex justify-center md:justify-end">

          <div className="relative w-44 h-44 group">

            {/* Glow */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-2xl opacity-40 group-hover:opacity-70 transition"></div>

            {/* Floating effect */}
            <div className="relative w-full h-full transition-transform duration-500 group-hover:-translate-y-2">

              <Image
                src="/logo-ump.png"
                alt="Logo UMP"
                fill
                className="object-contain drop-shadow-xl"
              />

            </div>

          </div>

        </div>

      </div>

</div>
{/* ================= GRADUATION GALLERY ================= */}
<div
  ref={galleryRef}
  className={`relative mt-20 transition-all duration-1000
  ${showGallery ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
`}
>

  <div className="grid sm:grid-cols-3 gap-12">

  {["/wisuda1.JPG", "/wisuda2.JPG", "/wisuda3.JPG"].map((img, index) => (
  <div
    key={index}
    className={`relative group flex justify-center transition-all duration-1000
      ${showGallery ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"}
      `}
      style={{ 
        perspective: "1800px",
        transitionDelay: `${index * 200}ms`
      }}
  >

    {/* Glow Background */}
    <div className={`absolute -inset-6 -z-10 rounded-3xl blur-2xl transition duration-500
      ${isDark 
        ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-30 group-hover:opacity-50"
        : "bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 opacity-40 group-hover:opacity-60"
      }
    `}></div>

    {/* Glass Card */}
    <div className={`absolute -inset-3 -z-10 rounded-3xl backdrop-blur-xl transition
      ${isDark
        ? "bg-white/10 border border-white/20"
        : "bg-white border border-pink-200 shadow-lg"
      }
    `}></div>

    {/* Photo */}
    <div className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-700
      group-hover:scale-105 group-hover:rotate-y-12 group-hover:-rotate-x-6
      ${!isDark && "shadow-pink-200/50"}
    `}>
 <div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="shine-effect"></div>
</div>
      <Image
        src={img}
        alt={`Wisuda ${index + 1}`}
        width={400}
        height={300}
        className="object-cover rounded-2xl"
      />

    </div>

  </div>
))}

</div>
  </div>
</div>
</div>

 {/* ================= EXPERIENCE ================= */}
{/* ================= EXPERIENCE ================= */}
<div ref={expRef} className="mt-28 relative">

  <h3
    className={`text-3xl font-semibold mb-16 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent transition-all duration-700
    ${showExp ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
  >
    Pengalaman
  </h3>

  <div className="space-y-20">
{/* ================= MAGANG ADMIN TU ================= */}
<div className="grid md:grid-cols-2 gap-12 items-center">

  {/* TEXT */}
  <div
    className={`p-8 rounded-2xl transition-all duration-700
    ${showExp ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
    ${
      isDark
        ? "bg-white/5 border border-white/10 shadow-lg shadow-blue-500/10"
        : "bg-white border border-gray-200 shadow-lg"
    }`}
  >
    <div className="flex items-center justify-between mb-4">
      <h4 className="font-bold text-xl">
        Staf Administrasi (Magang)
      </h4>
      <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-400 to-pink-500 text-white">
        April 2026 - Sekarang
      </span>
    </div>

    <p className="font-medium text-blue-400 mb-4">
      Fakultas Hukum Universitas Muhammadiyah Purwokerto
    </p>

    <ul className="space-y-3 text-sm leading-relaxed">
      <li>• Mengelola dan mengarsipkan dokumen administrasi akademik mahasiswa.</li>
      <li>• Membantu proses surat-menyurat dan pelayanan administrasi fakultas.</li>
      <li>• Input dan pengolahan data menggunakan sistem administrasi kampus.</li>
      <li>• Memberikan pelayanan informasi kepada mahasiswa terkait kebutuhan administrasi.</li>
      <li>• Mendukung kegiatan operasional Tata Usaha (TU) sehari-hari.</li>
    </ul>

    <div className="flex flex-wrap gap-2 mt-6">
      {["Administrasi", "Data Entry", "Pelayanan", "Dokumentasi", "Teamwork"].map((skill) => (
        <span
          key={skill}
          className={`px-3 py-1 text-xs rounded-full ${
            isDark
              ? "bg-white/10 text-blue-300 border border-white/10"
              : "bg-blue-100 text-blue-600"
          }`}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>

  {/* IMAGE (optional, kalau belum ada gambar bisa pakai placeholder dulu) */}
  <div
    className={`relative group flex justify-center transition-all duration-700
    ${showExp ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
  >
    <div className="absolute -inset-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-20 blur-3xl rounded-3xl group-hover:opacity-40 transition"></div>

    <div className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:rotate-y-6">
      <Image
        src="/tu.jpg"  
        alt="Administrasi TU"
        width={400}
        height={300}
        className="object-cover rounded-2xl"
      />
    </div>
  </div>
</div>
    {/* ================= MAGANG ================= */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* TEXT */}
      <div
        className={`p-8 rounded-2xl transition-all duration-700
        ${showExp ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
        ${
          isDark
            ? "bg-white/5 border border-white/10 shadow-lg shadow-pink-500/10"
            : "bg-white border border-gray-200 shadow-lg"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold text-xl">
            IT & Administrasi Intern
          </h4>
          <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white">
            April 2025 - September 2025
          </span>
        </div>

        <p className="font-medium text-pink-500 mb-4">
          Klinik Rawa Medika
        </p>

        <ul className="space-y-3 text-sm leading-relaxed">
          <li>• Mengembangkan aplikasi layanan klinik berbasis mobile.</li>
          <li>• Implementasi sistem <span className="font-semibold">CRUD</span>.</li>
          <li>• Pengelolaan data administrasi.</li>
          <li>• Kolaborasi tim.</li>
        </ul>

        <div className="flex flex-wrap gap-2 mt-6">
          {["Mobile App", "CRUD", "Testing", "Teamwork"].map((skill) => (
            <span
              key={skill}
              className={`px-3 py-1 text-xs rounded-full ${
                isDark
                  ? "bg-white/10 text-pink-300 border border-white/10"
                  : "bg-pink-100 text-pink-600"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* IMAGE */}
      <div
        className={`relative group flex justify-center transition-all duration-700
        ${showExp ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
      >
        <div className="absolute -inset-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 opacity-20 blur-3xl rounded-3xl group-hover:opacity-40 transition"></div>

        <div className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:rotate-y-6">
          <Image
            src="/magang.png"
            alt="Magang Klinik"
            width={400}
            height={300}
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>

    {/* ================= ORGANISASI ================= */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* IMAGE LEFT */}
      <div
        className={`relative group flex justify-center order-2 md:order-1 transition-all duration-700
        ${showExp ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
      >
        <div className="absolute -inset-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 opacity-20 blur-3xl rounded-3xl group-hover:opacity-40 transition"></div>

        <div className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:-rotate-y-6">
          <Image
            src="/organisasi.png"
            alt="HMTI"
            width={400}
            height={300}
            className="object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* TEXT */}
      <div
        className={`p-8 rounded-2xl transition-all duration-700 order-1 md:order-2
        ${showExp ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
        ${
          isDark
            ? "bg-white/5 border border-white/10 shadow-lg shadow-purple-500/10"
            : "bg-white border border-gray-200 shadow-lg"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold text-xl">
            HMTI
          </h4>
          <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 text-white">
          4 Februari 2023 - 10 Desember 2023
          </span>
        </div>

        <p className="font-medium text-purple-500 mb-4">
          Universitas Muhammadiyah Purwokerto
        </p>

        <ul className="space-y-3 text-sm leading-relaxed">
          <li>• Aktif di kegiatan teknologi.</li>
          <li>• Ikut seminar & pelatihan.</li>
          <li>• Event kampus.</li>
        </ul>

        <div className="flex flex-wrap gap-2 mt-6">
          {["Leadership", "Event", "Public Speaking"].map((skill) => (
            <span
              key={skill}
              className={`px-3 py-1 text-xs rounded-full ${
                isDark
                  ? "bg-white/10 text-purple-300 border border-white/10"
                  : "bg-purple-100 text-purple-600"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>

  </div>
</div>  

  </div>
  <style jsx>{`
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-12px);
    }
  }

  .animate-float {
    animation: float 5s ease-in-out infinite;
  }

  @keyframes fadeUp {
    0% {
      opacity: 0;
      transform: translateY(40px) scale(0.95);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .animate-fadeUp {
    animation: fadeUp 1s ease forwards;
  }

  @keyframes floatSlow {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .animate-float-slow {
    animation: floatSlow 6s ease-in-out infinite;
  }

  @keyframes shineMove {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(200%);
    }
  }

  .shine-effect {
    width: 50%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255,255,255,0.4),
      transparent
    );
    transform: skewX(-20deg);
    animation: shineMove 3.5s infinite;
  }

`}</style>
    </section>
  );
}