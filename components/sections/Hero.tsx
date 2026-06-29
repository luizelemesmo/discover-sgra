"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Play, Star, TreePine, Landmark, Utensils } from "lucide-react";

const floatingBadges = [
  { icon: TreePine, label: "Natureza", color: "bg-emerald-500", delay: 0 },
  { icon: Landmark, label: "Patrimônio", color: "bg-amber-500", delay: 0.2 },
  { icon: Utensils, label: "Gastronomia", color: "bg-orange-500", delay: 0.4 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/attractions/igreja-matriz-2.jpg"
          alt="Igreja Matriz de São Gonçalo do Amarante, vista aérea"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/35 to-transparent" />
      </div>

      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 22}%`,
              width: `${2 + (i % 2)}px`,
              height: `${2 + (i % 2)}px`,
            }}
            animate={{ y: [-8, 8, -8], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 4 + i * 0.8, repeat: Infinity, delay: i * 0.6 }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36">
        <div className="max-w-[680px]">

          {/* Eyebrow badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex flex-wrap items-center gap-2 mb-7"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-full">
              <MapPin className="h-3 w-3 text-emerald-300" />
              <span className="font-sans text-[11px] font-medium text-white/90 tracking-wide">
                São Gonçalo do Rio Abaixo · Minas Gerais
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 border border-emerald-400/30 rounded-full backdrop-blur-sm">
              <Star className="h-2.5 w-2.5 text-yellow-400 fill-yellow-400" />
              <span className="font-sans text-[11px] font-semibold text-white/90 tracking-wide">
                4.8 · Destino Premiado
              </span>
            </div>
          </motion.div>

          {/* Main headline — Plus Jakarta Sans display */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-display font-extrabold text-white mb-6"
            style={{
              fontSize: "clamp(2.6rem, 6.5vw, 4.75rem)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
            }}
          >
            Descubra a alma
            <span
              className="block"
              style={{
                background: "linear-gradient(120deg, #6ee7b7 0%, #5eead4 50%, #a5f3fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              de Minas Gerais
            </span>
          </motion.h1>

          {/* Sub-headline — Inter for readability */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="font-sans text-base sm:text-lg text-white/75 mb-10 max-w-[500px] leading-[1.72] font-normal"
          >
            Igrejas históricas, memória viva e a natureza preservada da Estação de Peti.
            São Gonçalo do Rio Abaixo espera por você.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mb-12"
          >
            <Link
              href="/attractions"
              className="group inline-flex items-center justify-center gap-2 px-7 py-[14px] bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-sans font-semibold text-[14.5px] tracking-[-0.01em] transition-all duration-200 shadow-lg shadow-emerald-600/30 hover:shadow-emerald-400/40 hover:scale-[1.02]"
            >
              Explorar Atrações
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/assistant"
              className="inline-flex items-center justify-center gap-2 px-7 py-[14px] glass text-white border-0 rounded-2xl font-sans font-medium text-[14.5px] tracking-[-0.01em] transition-all duration-200 hover:bg-white/18"
            >
              <Play className="h-3.5 w-3.5 fill-white" />
              Assistente de Viagem IA
            </Link>
          </motion.div>

          {/* Floating category pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-2.5"
          >
            {floatingBadges.map(({ icon: Icon, label, color, delay }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.85, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.6 + delay, duration: 0.35, ease: "easeOut" }}
                className="flex items-center gap-2 px-3 py-[7px] glass rounded-xl"
              >
                <div className={`p-1 ${color} rounded-md`}>
                  <Icon className="h-3 w-3 text-white" />
                </div>
                <span className="font-sans text-[13px] font-medium text-white/90 tracking-tight">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.7 }}
          className="absolute bottom-10 left-4 right-4 sm:left-8 sm:right-8"
        >
          <div className="flex items-center gap-8 max-w-xs">
            {[
              { value: "8+", label: "Atrações" },
              { value: "4", label: "Roteiros" },
              { value: "6+", label: "Eventos/Ano" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div
                  className="font-display font-bold text-white"
                  style={{ fontSize: "1.6rem", lineHeight: 1, letterSpacing: "-0.04em" }}
                >
                  {value}
                </div>
                <div className="font-sans text-[11px] font-medium text-white/50 mt-0.5 tracking-wide uppercase">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2"
      >
        <span
          className="font-sans text-[10px] font-semibold text-white/40 tracking-[0.18em] uppercase"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Rolar
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
