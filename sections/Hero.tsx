"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const isDark = theme === "dark" || resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const frameCount = 192;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let images: HTMLImageElement[] = [];
    let currentIndex = 0;

    /* =========================
       LOAD IMAGES
    ========================== */
    const currentFrame = (index: number) =>
      `/hero-sequence/ezgif-frame-${index
        .toString()
        .padStart(3, "0")}.jpg`;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    /* =========================
       RENDER
    ========================== */
    const render = (index: number) => {
      const img = images[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      context.clearRect(0, 0, width, height);

      // 🔥 Biar ga blur karena smoothing
      context.imageSmoothingEnabled = false;

      const imgRatio = img.width / img.height;
      const screenRatio = width / height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (imgRatio > screenRatio) {
        drawHeight = height;
        drawWidth = img.width * (height / img.height);
        offsetX = (width - drawWidth) / 2;
        offsetY = 0;
      } else {
        drawWidth = width;
        drawHeight = img.height * (width / img.width);
        offsetX = 0;
        offsetY = (height - drawHeight) / 2;
      }

      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    /* =========================
       CANVAS SIZE (SUPER SHARP)
    ========================== */
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);

      render(currentIndex);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    images[0].onload = () => render(0);

    /* =========================
       SCROLL CONTROL
    ========================== */
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight * 3;

      const progress = Math.min(scrollTop / maxScroll, 1);
      currentIndex = Math.floor(progress * (frameCount - 1));

      setFrameIndex(currentIndex);
      render(currentIndex);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, [mounted]);

  if (!mounted) return null;

  /* =========================
     TEXT PHASES
  ========================== */

  const textPhases = [
    {
      title: "PORTFOLIO",
      desc: "Welcome to My Portfolio",
    },
    {
      title: "HELLO",
      desc: "Welcome to My Portfolio",
    },
    {
      title: "DEVELOPER",
      desc: "Creative Web Developer",
    },
    {
      title: "EXPERIENCES",
      desc: "Crafting Digital Experiences",
    },
  ];

  const phaseIndex = Math.min(
    textPhases.length - 1,
    Math.floor((frameIndex / (192 / textPhases.length)))
  );
  
  const currentText = textPhases[phaseIndex];
  return (
    <section
      id="hero"
      style={{ height: "400vh" }}
      className={`relative ${isDark ? "bg-black" : "bg-white"}`}
    >
      {/* CANVAS */}
      <div className="sticky top-0 h-screen w-full">
        <canvas ref={canvasRef} />
      </div>


{/* TEXT OVERLAY */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <div
    key={phaseIndex}
    className="text-center text-white animate-fade"
  >
    <h1
      className="text-6xl sm:text-7xl lg:text-8xl font-extrabold
      bg-gradient-to-r from-pink-500 via-pink-600 to-purple-500
      bg-clip-text text-transparent"
    >
      {textPhases[phaseIndex].title}
    </h1>

    <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
      {textPhases[phaseIndex].desc}
    </p>
  </div>
</div>
    </section>
  );
}