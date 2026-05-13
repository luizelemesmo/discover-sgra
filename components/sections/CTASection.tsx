"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, Map } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-r from-emerald-600 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/6 rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-white/6 rounded-full" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="type-label text-emerald-200/80 mb-5">Comece sua jornada</p>

          <h2
            className="font-display font-bold text-white mb-5"
            style={{ fontSize: "clamp(1.875rem, 4.5vw, 3.25rem)", letterSpacing: "-0.028em", lineHeight: 1.1 }}
          >
            São Gonçalo do Rio Abaixo
            <span className="block text-emerald-100/80">espera por você</span>
          </h2>

          <p className="font-sans text-base md:text-[17px] text-white/70 mb-10 max-w-md mx-auto leading-[1.72] font-normal">
            Use o nosso assistente com IA para montar o roteiro perfeito ou explore
            todas as nossas atrações e experiências.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/assistant"
              className="group inline-flex items-center justify-center gap-2 px-7 py-[15px] bg-white text-emerald-700 rounded-2xl font-sans font-bold text-[14px] tracking-[-0.01em] hover:bg-emerald-50 transition-all duration-200 shadow-lg shadow-black/10"
            >
              <Bot className="h-4.5 w-4.5" style={{ width: "1.125rem", height: "1.125rem" }} />
              Conversar com a IA
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/routes"
              className="inline-flex items-center justify-center gap-2 px-7 py-[15px] bg-white/12 backdrop-blur-sm border border-white/25 text-white rounded-2xl font-sans font-semibold text-[14px] tracking-[-0.01em] hover:bg-white/22 transition-all duration-200"
            >
              <Map className="h-4 w-4" />
              Ver roteiros
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
