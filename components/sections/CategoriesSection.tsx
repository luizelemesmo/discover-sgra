"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Landmark, Sparkles, Utensils, TreePine, Calendar, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Landmark,
    title: "Patrimônio Religioso",
    description: "Igrejas históricas tombadas e o Cruzeiro centenário do centro da cidade.",
    image: "/images/attractions/igreja-rosario-1.jpg",
    color: "from-amber-500 to-orange-600",
    href: "/attractions?category=heritage",
    count: "4 atrações",
  },
  {
    icon: Sparkles,
    title: "Memória & História",
    description: "O memorial do Padre João e a história que moldou a identidade da cidade.",
    image: "/images/attractions/estatua-padre-joao-1.jpg",
    color: "from-violet-500 to-purple-600",
    href: "/attractions?category=history",
    count: "1 atração",
  },
  {
    icon: TreePine,
    title: "Natureza & Meio Ambiente",
    description: "A Estação Ambiental de Peti, com represa, trilhas e mata preservada.",
    image: "/images/attractions/estacao-peti-2.jpg",
    color: "from-emerald-500 to-green-600",
    href: "/attractions?category=nature",
    count: "1 atração",
  },
  {
    icon: Landmark,
    title: "Cultura",
    description: "O Centro Cultural e as manifestações artísticas da cidade.",
    image: "/images/attractions/centro-cultural-1.jpg",
    color: "from-blue-500 to-indigo-600",
    href: "/attractions?category=culture",
    count: "1 atração",
  },
  {
    icon: Utensils,
    title: "Gastronomia",
    description: "Pão de queijo, doces caseiros e a tradição mineira em cada esquina.",
    image: "/images/attractions/gastronomia-1.jpg",
    color: "from-red-500 to-rose-600",
    href: "/attractions?category=gastronomy",
    count: "1 atração",
  },
  {
    icon: Calendar,
    title: "Eventos",
    description: "Festejos religiosos, mostras culturais e celebrações ao longo do ano.",
    image: "/images/attractions/igreja-matriz-1.jpg",
    color: "from-pink-500 to-rose-500",
    href: "/events",
    count: "6+ eventos",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="type-label text-emerald-600 mb-3">O que explorar</p>
          <h2
            className="font-display font-bold text-stone-900 mb-4"
            style={{ fontSize: "clamp(1.875rem, 4.5vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.15 }}
          >
            Experiências para todos
          </h2>
          <p className="font-sans text-base md:text-lg text-stone-500 max-w-[480px] mx-auto leading-[1.72] font-normal">
            De aventuras na natureza a imersões culturais — São Gonçalo do Rio Abaixo
            oferece uma diversidade incomparável.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {categories.map(({ icon: Icon, title, description, image, color, href, count }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <Link
                href={href}
                className="group relative block overflow-hidden rounded-2xl h-[260px] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.07] transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-65 group-hover:opacity-75 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                {/* Card content */}
                <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                      <Icon className="h-4.5 w-4.5 text-white" style={{ width: "1.125rem", height: "1.125rem" }} />
                    </div>
                    <span className="font-sans text-[11px] font-semibold text-white/90 tracking-wide px-2.5 py-1 bg-black/28 backdrop-blur-sm rounded-full uppercase">
                      {count}
                    </span>
                  </div>

                  <div>
                    <h3
                      className="font-display font-bold text-white mb-1.5"
                      style={{ fontSize: "1.2rem", letterSpacing: "-0.015em", lineHeight: 1.2 }}
                    >
                      {title}
                    </h3>
                    <p className="font-sans text-[13px] text-white/75 leading-[1.55] mb-3 font-normal">
                      {description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-sans text-[13px] font-semibold text-white/90 group-hover:gap-2.5 transition-all duration-200">
                      Explorar
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
