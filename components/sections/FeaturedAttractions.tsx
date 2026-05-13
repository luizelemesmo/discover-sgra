"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { getFeaturedAttractions } from "@/data/attractions";

const categoryColors: Record<string, string> = {
  nature: "bg-emerald-100 text-emerald-700",
  history: "bg-amber-100 text-amber-700",
  adventure: "bg-blue-100 text-blue-700",
  gastronomy: "bg-orange-100 text-orange-700",
  heritage: "bg-violet-100 text-violet-700",
  culture: "bg-rose-100 text-rose-700",
};

const categoryLabels: Record<string, string> = {
  nature: "Natureza",
  history: "História",
  adventure: "Aventura",
  gastronomy: "Gastronomia",
  heritage: "Patrimônio",
  culture: "Cultura",
};

export default function FeaturedAttractions() {
  const featured = getFeaturedAttractions();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="type-label text-emerald-600 mb-3">Destaques</p>
            <h2
              className="font-display font-bold text-stone-900 mb-3"
              style={{ fontSize: "clamp(1.875rem, 4.5vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.15 }}
            >
              Atrações em evidência
            </h2>
            <p className="font-sans text-base md:text-lg text-stone-500 max-w-[440px] leading-[1.72] font-normal">
              Os lugares mais amados e visitados de São Gonçalo do Rio Abaixo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <Link
              href="/attractions"
              className="group inline-flex items-center gap-2 px-5 py-3 border border-stone-800 text-stone-800 rounded-xl font-sans font-semibold text-[13.5px] tracking-[-0.01em] hover:bg-stone-900 hover:text-white transition-all duration-200"
            >
              Ver todas as atrações
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((attraction, i) => (
            <motion.div
              key={attraction.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="group"
            >
              <Link href={`/attractions/${attraction.id}`}>
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100/80 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`font-sans text-[11px] font-semibold px-2.5 py-1 rounded-full ${categoryColors[attraction.category]}`}>
                        {categoryLabels[attraction.category]}
                      </span>
                    </div>
                    {/* Rating */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 bg-black/55 backdrop-blur-sm rounded-full">
                      <Star className="h-2.5 w-2.5 text-yellow-400 fill-yellow-400" />
                      <span className="font-sans text-[11.5px] font-semibold text-white">{attraction.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3
                      className="font-display font-semibold text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors"
                      style={{ fontSize: "1.0625rem", letterSpacing: "-0.015em", lineHeight: 1.28 }}
                    >
                      {attraction.title}
                    </h3>
                    <p className="font-sans text-[13.5px] text-stone-500 leading-[1.65] mb-4 line-clamp-2 font-normal">
                      {attraction.shortDescription}
                    </p>
                    <div className="flex items-center justify-between pt-3.5 border-t border-stone-100">
                      <div className="flex items-center gap-1 text-stone-400">
                        <MapPin className="h-3 w-3 shrink-0" />
                        <span className="font-sans text-[12px] font-medium truncate max-w-[150px]">
                          {attraction.location.split(",")[0]}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 font-sans text-[13px] font-semibold text-emerald-600 group-hover:gap-1.5 transition-all">
                        Ver mais
                        <ArrowRight className="h-3 w-3" />
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
