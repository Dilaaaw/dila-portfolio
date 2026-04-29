"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { useEffect, useRef } from "react";
type Project = {
  name: string;
  shortDesc: string;
  images: string[];
  fullDesc: string;
  link?: string;
  github?: string;
  type?: "web" | "mobile" | "video";
};
type TabType = "web" | "desain" | "video";

export default function ProjectsSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<"web" | "desain" | "video">("web");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const projectRef = useRef(null);
  const [showProject, setShowProject] = useState(false);
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

  const openModal = (project: Project) => {
    setModalProject(project);
  };

  const projects: Record<TabType, Project[]> = {
    web: [
      {
        name: "Platform UMKM",
        shortDesc: "Platform digital berbasis Next.js & Firebase",
        images: [
          "/projects/umkm.png",
          "/projects/umkm1.png",
          "/projects/umkm2.png",
          "/projects/umkm3.png",
          "/projects/umkm4.png",
        ],
        fullDesc: `Platform berbasis web menggunakan Next.js dan Firebase.
    
    Fitur:
    - Autentikasi
    - Dashboard admin & user
    - CRUD produk
    - Upload gambar
    - Program pelatihan
    - Penyimpanan data real-time
    
    Tech: Next.js, React, Firebase`,
    github: "https://github.com/Dilaaaw/si-umkm",
  },
    
  {
    name: "Website Profil Sekolah – SMP Muhammadiyah 2 Bolang",
    shortDesc: "Website profil sekolah berbasis JavaScript & Firebase",
    images: [
      "/projects/smp.png",
      "/projects/smp1.png",
      "/projects/smp2.png",
      "/projects/smp3.png",
      "/projects/smp4.png",
      "/projects/smp5.png",
      "/projects/smp6.png",
      "/projects/smp7.png",
      "/projects/smp8.png",
      "/projects/smp9.png",
      "/projects/smp10.png",
      "/projects/smp11.png",
      "/projects/smp12.png",
      "/projects/smp13.png",
    ],
    fullDesc: `Web Application Development
  
  Mengembangkan website profil sekolah berbasis JavaScript dengan integrasi Firebase sebagai backend dan database.
  
  Fitur Utama:
  - Manajemen data dinamis
  - Update konten real-time
  - Responsive & mobile friendly
  - Optimasi performa dan navigasi
  
  Berperan dalam pengembangan frontend dan integrasi database.`,
    
    link: "https://smpmuhammadiyah2bolang.sch.id/"
  },
  {
    name: "Aplikasi Layanan Klinik",
    shortDesc: "Aplikasi Flutter berbasis Firebase",
    images: [
      "/projects/klinik.png",
      "/projects/klinik1.png",
      "/projects/klinik2.png",
      "/projects/klinik3.png",
      "/projects/klinik4.png",
      "/projects/klinik5.png",
      "/projects/klinik6.png",
      "/projects/klinik7.png",
      "/projects/klinik8.png",
      "/projects/klinik9.png",
      "/projects/klinik10.png",
      "/projects/klinik11.png",
      "/projects/klinik12.png",
      "/projects/klinik13.png",
      "/projects/klinik14.png",
      "/projects/klinik15.png",
      "/projects/klinik16.png",
      "/projects/klinik17.png",
      "/projects/klinik18.png",
      "/projects/klinik19.png",
      "/projects/klinik20.png",
      "/projects/klinik21.png",
    ],
    fullDesc: `Aplikasi layanan klinik berbasis Flutter dengan integrasi Firebase sebagai database untuk mendukung digitalisasi pendaftaran dan manajemen layanan pasien.
  
  Fitur Utama:
  - Login & autentikasi pasien/admin
  - Pendaftaran dan pengelolaan data pasien (CRUD)
  - Informasi layanan & pengumuman klinik
  - Dashboard admin untuk manajemen data
  - Integrasi Firebase (Authentication & Firestore)
  
  Aplikasi memungkinkan pasien dan admin mengakses layanan secara real-time melalui perangkat seluler.`,
    type: "mobile",
  },
  {
    name: "Aplikasi E-Commerce Bunga",
    shortDesc: "Aplikasi e-commerce berbasis React Native & Firebase",
    images: [
      "/projects/ecommerce.png",
      "/projects/ecommerce1.png",
      "/projects/ecommerce2.png",
      "/projects/ecommerce3.png",
      "/projects/ecommerce4.png",
      "/projects/ecommerce5.png",
      "/projects/ecommerce6.png",
      "/projects/ecommerce7.png",
      "/projects/ecommerce8.png",
      "/projects/ecommerce9.png",
    ],
    fullDesc: `Aplikasi e-commerce berbasis React Native dengan integrasi Firebase untuk pengelolaan data produk dan transaksi secara real-time.
  
  Aplikasi dirancang untuk mempermudah proses pemesanan bunga melalui perangkat mobile.
  
  Fitur Utama:
  - Autentikasi pengguna
  - Katalog produk
  - Keranjang belanja & checkout
  - Perhitungan total harga otomatis
  - Penyimpanan data pesanan di Firebase
  
  Tech Stack:
  React Native, JavaScript, Firebase (Authentication & Firestore)`,
    type: "mobile",
  },
    ],
    desain: [
      {
        name: "Banner Series – Pertaruhan Menaklukkan Skripsi",
        shortDesc: "Desain banner cinematic bertema perjuangan skripsi",
        images: [
          "/projects/banner-skripsi.png", 
        ],
        fullDesc: `Desain banner promosi untuk konten series bertema perjuangan mahasiswa tingkat akhir dalam menyelesaikan skripsi.
      
      Konsep visual dibuat dengan pendekatan cinematic dan dramatis untuk menggambarkan tekanan, revisi yang terus datang, serta semangat mahasiswa menghadapi bimbingan.
      
      Elemen desain yang ditonjolkan:
      - Komposisi visual berlapis (foreground & background)
      - Tipografi bold dengan hierarki yang kuat
      - Dominasi warna merah & hitam untuk membangun suasana tegang
      - Efek lighting, shadow, dan smoke untuk kesan dramatis
      - Layout karakter seperti poster original series
      
      Tujuan desain ini adalah menciptakan daya tarik visual yang kuat, membangun emotional connection, serta menghadirkan pengalaman visual yang relate dengan mahasiswa tingkat akhir.
      
      Tools yang digunakan:
      Canva `,
      },
    ],
    video: [
      {
        name: "Video Animasi Opening KKN Desa Tirip UMP",
        shortDesc: "Opening animasi sinematik untuk KKN UMP",
        images: [
          "https://img.youtube.com/vi/h2Kd_vJPcyQ/maxresdefault.jpg"
        ],
        fullDesc: `Video animasi opening untuk program KKN Desa Tirip Universitas Muhammadiyah Purwokerto.
    
    Konsep:
    Opening sinematik dengan pendekatan storytelling visual yang menggambarkan semangat pengabdian mahasiswa KKN di Desa Tirip.
    
    Fitur & Elemen:
    - Motion text cinematic
    - Transisi dinamis & smooth
    - Color grading bernuansa film
    - Sound effect & backsound dramatis
    - Typography modern & impactful
    
    Tools:
    CapCut & Adobe Premiere Pro
    
    Video dirancang untuk memberikan kesan profesional, emosional, dan engaging sejak detik pertama.`,
        type: "video",
        link: "https://www.youtube.com/embed/h2Kd_vJPcyQ"
      },
    ],
  };

  return (
    <>
      <section
        ref={projectRef}
        id="projects"
        className={`min-h-screen pt-24 transition-colors duration-500 ${
          isDark ? "bg-black text-gray-300" : "bg-white text-gray-700"
        }`}
      >

        <div className="max-w-6xl mx-auto px-6">
        <h2
            className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent
            transition-all duration-700
            ${
              showProject
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            My Projects
          </h2>
  
          {/* Tabs */}
          <div className="flex justify-center mb-10 gap-4 flex-wrap">
            {[
              { key: "web", label: "Web & Mobile" },
              { key: "desain", label: "Desain" },
              { key: "video", label: "Video Editing" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as TabType)}
                className={`px-5 py-2 rounded-lg font-semibold transition ${
                  activeTab === tab.key
                    ? "bg-pink-600 text-white shadow-lg"
                    : isDark
                    ? "bg-gray-800 text-gray-300 border border-gray-700"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
  
    
          {/* 🔥 GRID PROJECT SUPER ANIMATED */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects[activeTab].map((p, idx) => (
              <div
                key={idx}
                onClick={() => setModalProject(p)}
                className={`
                  group relative rounded-xl p-4 cursor-pointer overflow-hidden
                  transition-all duration-700
                  
                  ${
                    showProject
                      ? "opacity-100 translate-y-0 scale-100 blur-0"
                      : "opacity-0 translate-y-16 scale-90 blur-sm"
                  }

                  hover:-translate-y-3 hover:scale-105
                  ${
                    isDark
                      ? "bg-gray-900 border border-gray-700"
                      : "bg-gray-100 border border-gray-200"
                  }
                `}
                style={{
                  transitionDelay: `${idx * 150}ms`,
                }}
              >
                {/* 🔥 GLOW EFFECT */}
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-30 blur-xl transition duration-500"></div>

                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* VIDEO ICON */}
                  {p.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/60 rounded-full p-4">
                        ▶
                      </div>
                    </div>
                  )}

                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <span className="text-white font-semibold">
                      View Project 🚀
                    </span>
                  </div>
                </div>

                {/* TEXT */}
                <h3 className="font-bold text-lg mt-3">{p.name}</h3>
                <p className="text-sm opacity-80">{p.shortDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {modalProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
          onClick={() => setModalProject(null)}
        >
          <div
            className={`relative rounded-2xl w-full ${
              modalProject.type === "mobile"
                ? "max-w-md h-[85vh] flex flex-col"
                : "max-w-6xl h-[80vh] flex"
            } overflow-hidden shadow-2xl ${
              isDark ? "bg-gray-900 text-gray-300" : "bg-white text-gray-700"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full p-8 overflow-y-auto">
              <h3 className="text-2xl font-bold mb-6">
                {modalProject.name}
              </h3>
  
              {/* VIDEO EMBED */}
              {modalProject.type === "video" && modalProject.link && (
                <div className="aspect-video mb-6">
                  <iframe
                    src={modalProject.link}
                    className="w-full h-full rounded-xl shadow-lg"
                    allowFullScreen
                  />
                </div>
              )}
  
              <p className="text-sm leading-relaxed whitespace-pre-line mb-6">
                {modalProject.fullDesc}
              </p>
  
              {/* IMAGE GRID (NON VIDEO) */}
              {modalProject.type !== "video" && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {modalProject.images?.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="preview"
                      className="w-full h-40 object-cover rounded-lg cursor-pointer hover:scale-105 transition"
                      onClick={() => setPreviewImage(img)}
                    />
                  ))}
                </div>
              )}
  
              <div className="flex flex-wrap gap-4">
                {modalProject.type !== "video" && modalProject.link && (
                  <a
                    href={modalProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-pink-600 text-white rounded-lg text-sm font-semibold hover:bg-pink-700 transition"
                  >
                    Visit Website
                  </a>
                )}
  
                {modalProject.github && (
                  <a
                    href={modalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-gray-800 text-white rounded-lg text-sm font-semibold hover:bg-gray-900 transition"
                  >
                    View GitHub
                  </a>
                )}
              </div>
            </div>
  
            <button
              onClick={() => setModalProject(null)}
              className="absolute top-4 right-6 text-gray-400 hover:text-pink-600 text-xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
  
      {/* ================= IMAGE PREVIEW ================= */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-6"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            alt="preview-full"
            className="max-w-5xl max-h-[90vh] object-contain rounded-xl shadow-2xl"
          />
  
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-6 right-8 text-white text-3xl font-bold"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}