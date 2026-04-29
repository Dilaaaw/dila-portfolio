"use client";

import { useTheme } from "next-themes";
import { Mail, Phone, Linkedin, Github, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section
      id="contact"
      className={`min-h-screen pt-24 flex items-center justify-center transition-colors duration-500 ${
        isDark ? "bg-black text-gray-300" : "bg-white text-gray-700"
      }`}
    >
      <div className="max-w-4xl w-full px-6">

        {/* ===== OUTER CINEMATIC BOX ===== */}
        <div className="relative rounded-3xl p-[2px] overflow-hidden">

          {/* Animated glowing border (punyamu tetap) */}
          <div className="absolute inset-0 animate-borderMove bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-70 blur-lg"></div>

          {/* tambahan glow layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-blue-500/20 blur-2xl"></div>

          {/* Inner container */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative rounded-3xl p-10 md:p-14 backdrop-blur-xl ${
              isDark
                ? "bg-gray-950/90 border border-gray-800"
                : "bg-white/90 border border-gray-200"
            }`}
          >
            <div>

              {/* TITLE ANIMATION */}
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold text-pink-600 mb-6"
              >
                Let’s Work Together 🚀
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-10 opacity-80"
              >
                Tertarik bekerja sama atau ingin berdiskusi tentang project?
                Hubungi saya melalui kontak berikut.
              </motion.p>

              <div className="space-y-6">

                {/* Email */}
                <motion.a
                  href="mailto:dahliadila2314@gmail.com"
                  whileHover={{ scale: 1.03, x: 5 }}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-pink-600 text-white group-hover:scale-110 transition shadow-lg shadow-pink-500/30">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm opacity-70">
                      dahliadila2314@gmail.com
                    </p>
                  </div>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/6283827740907?text=Halo%20Dila,%20saya%20tertarik%20untuk%20bekerja%20sama."
                  target="_blank"
                  whileHover={{ scale: 1.03, x: 5 }}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-green-600 text-white group-hover:scale-110 transition shadow-lg shadow-green-500/30">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-sm opacity-70">
                      0838-2774-0907
                    </p>
                  </div>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/dila-dahlia-38b067262"
                  target="_blank"
                  whileHover={{ scale: 1.03, x: 5 }}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-blue-600 text-white group-hover:scale-110 transition shadow-lg shadow-blue-500/30">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <p className="text-sm opacity-70">
                      linkedin.com/in/dila-dahlia
                    </p>
                  </div>
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href="https://instagram.com/diladhlia_"
                  target="_blank"
                  whileHover={{ scale: 1.03, x: 5 }}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white group-hover:scale-110 transition shadow-lg shadow-pink-500/30">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Instagram</h3>
                    <p className="text-sm opacity-70">
                      @diladhlia_
                    </p>
                  </div>
                </motion.a>

              </div>

              {/* GitHub Button */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12"
              >
                <a
                  href="https://github.com/Dilaaaw"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-xl font-semibold hover:bg-pink-700 transition shadow-lg shadow-pink-500/40 hover:scale-105"
                >
                  <Github size={20} />
                  View My GitHub
                </a>
              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <p className="mt-16 text-center text-sm opacity-50">
          © {new Date().getFullYear()} Dila Dahlia — Web & Mobile Developer
        </p>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-2 h-2 bg-pink-500 rounded-full animate-float1 absolute top-10 left-20"></div>
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-float2 absolute bottom-20 right-20"></div>
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-float3 absolute top-1/2 left-1/3"></div>
      </div>

      {/* Animated Border CSS (punyamu + tambahan) */}
      <style jsx>{`
        @keyframes borderMove {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-borderMove {
          animation: borderMove 8s linear infinite;
        }

        @keyframes float1 {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float2 {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }

        @keyframes float3 {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-float1 { animation: float1 6s ease-in-out infinite; }
        .animate-float2 { animation: float2 7s ease-in-out infinite; }
        .animate-float3 { animation: float3 5s ease-in-out infinite; }
      `}</style>

    </section>
  );
}