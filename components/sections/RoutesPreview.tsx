"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Route, ArrowRight, ChevronRight } from "lucide-react";
import { routes } from "@/data/routes";

const difficultyLabel: Record<string, string> = {
  easy: "Fácil",
  moderate: "Moderado",
  challenging: "Desafiador",
};

const difficultyColor: Record<string, string> = {
  easy: "bg-green-100 text-green-700",
  moderate: "bg-yellow-100 text-yellow-700",
  challenging: "bg-red-100 text-red-700",
};

const colorMap: Record<string, string> = {
  amber: "from-amber-500 to-orange-600",
  emerald: "from-emerald-500 to-green-600",
  orange: "from-orange-500 to-red-500",
  violet: "from-violet-500 to-purple-600",
};

export default function RoutesPreview() {
  const preview = routes.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="type-label text-emerald-600 mb-3">Roteiros</p>
            <h2
              className="font-display font-bold text-stone-900 mb-3"
              style={{ fontSize: "clamp(1.875rem, 4.5vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.15 }}
            >
              Explore com propósito
            </h2>
            <p className="font-sans text-base md:text-[17px] text-stone-500 max-w-[420px] leading-[1.72] font-normal">
              Roteiros temáticos planejados para cada tipo de viajante.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="/routes"
              className="group inline-flex items-center gap-2 px-5 py-3 border border-stone-800 text-stone-800 rounded-xl font-sans font-semibold text-[13.5px] tracking-[-0.01em] hover:bg-stone-900 hover:text-white transition-all duration-200"
            >
              Ver todos os roteiros
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Route cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {preview.map((route, i) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="group"
            >
              <Link href="/routes">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100/80 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={route.image}
                      alt={route.title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${colorMap[route.color]} opacity-55`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="font-sans text-[11px] font-semibold text-white/90 tracking-wide px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                        {route.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`font-sans text-[11px] font-semibold px-2 py-0.5 rounded-full ${difficultyColor[route.difficulty]}`}>
                        {difficultyLabel[route.difficulty]}
                      </span>
                    </div>
                    <h3
                      className="font-display font-semibold text-stone-900 mb-0.5 group-hover:text-emerald-700 transition-colors"
                      style={{ fontSize: "1.0625rem", letterSpacing: "-0.015em", lineHeight: 1.28 }}
                    >
                      {route.title}
                    </h3>
                    <p className="font-sans text-[12.5px] text-stone-400 italic mb-2">{route.subtitle}</p>
                    <p className="font-sans text-[13.5px] text-stone-500 leading-[1.65] line-clamp-2 mb-4 flex-1 font-normal">
                      {route.description}
                    </p>

                    <div className="flex items-center justify-between pt-3.5 border-t border-stone-100">
                      <div className="flex items-center gap-3 text-stone-400">
                        <span className="flex items-center gap-1 font-sans text-[12px] font-medium">
                          <Clock className="h-3 w-3" />
                          {route.duration}
                        </span>
                        <span className="flex items-center gap-1 font-sans text-[12px] font-medium">
                          <Route className="h-3 w-3" />
                          {route.distance}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-0.5 font-sans text-[13px] font-semibold text-emerald-600">
                        Ver rota
                        <ChevronRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
