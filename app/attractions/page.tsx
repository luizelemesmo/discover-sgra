"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, Star, MapPin, ArrowRight, SlidersHorizontal } from "lucide-react";
import { attractions } from "@/data/attractions";
import { AttractionCategory } from "@/types";
import { Input } from "@/components/ui/input";

const categories: { value: "all" | AttractionCategory; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "nature", label: "Natureza" },
  { value: "history", label: "História" },
  { value: "adventure", label: "Aventura" },
  { value: "gastronomy", label: "Gastronomia" },
  { value: "heritage", label: "Patrimônio" },
  { value: "culture", label: "Cultura" },
];

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

export default function AttractionsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | AttractionCategory>("all");
  const [sortBy, setSortBy] = useState<"rating" | "name">("rating");

  const filtered = useMemo(() => {
    return attractions
      .filter((a) => {
        const matchesCategory = activeCategory === "all" || a.category === activeCategory;
        const matchesSearch =
          search === "" ||
          a.title.toLowerCase().includes(search.toLowerCase()) ||
          a.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
          a.location.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating;
        return a.title.localeCompare(b.title);
      });
  }, [search, activeCategory, sortBy]);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Page header */}
      <div className="bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-800 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="type-label text-emerald-300 mb-3">Explore</p>
            <h1
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Atrações Turísticas
            </h1>
            <p className="font-sans text-base md:text-[17px] text-emerald-100/75 max-w-lg leading-[1.72] font-normal">
              Descubra os lugares mais incríveis de São Gonçalo do Rio Abaixo.
              Natureza, história, gastronomia e muito mais.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-stone-100 p-5 mb-8"
        >
          {/* Search + sort */}
          <div className="flex flex-col sm:flex-row gap-4 mb-5">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
              <Input
                placeholder="Buscar atrações por nome, descrição ou localização..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 h-11 bg-stone-50 border-stone-200 focus:ring-emerald-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-stone-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "rating" | "name")}
                className="h-11 px-3 bg-stone-50 border border-stone-200 rounded-lg font-sans text-[13.5px] text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="rating">Mais avaliados</option>
                <option value="name">Nome A–Z</option>
              </select>
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setActiveCategory(value)}
                className={`px-4 py-2 rounded-full font-sans text-[13px] font-medium tracking-tight transition-all duration-200 ${
                  activeCategory === value
                    ? "bg-stone-900 text-white shadow-sm"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        <p className="font-sans text-[13px] font-medium text-stone-400 mb-6 tracking-tight">
          {filtered.length} {filtered.length === 1 ? "atração encontrada" : "atrações encontradas"}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((attraction, i) => (
              <motion.div
                key={attraction.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group"
              >
                <Link href={`/attractions/${attraction.id}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={attraction.image}
                        alt={attraction.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${categoryColors[attraction.category]}`}>
                          {categoryLabels[attraction.category]}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                        <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-white text-xs font-semibold">{attraction.rating}</span>
                        <span className="text-white/60 text-xs">({attraction.reviewCount})</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col">
                      <h3
                        className="font-display font-semibold text-stone-900 mb-1.5 group-hover:text-emerald-700 transition-colors line-clamp-1"
                        style={{ fontSize: "0.9375rem", letterSpacing: "-0.012em", lineHeight: 1.3 }}
                      >
                        {attraction.title}
                      </h3>
                      <p className="font-sans text-[13px] text-stone-500 leading-[1.65] mb-3 line-clamp-2 flex-1 font-normal">
                        {attraction.shortDescription}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-stone-100">
                        <div className="flex items-center gap-1 text-stone-400">
                          <MapPin className="h-3 w-3 shrink-0" />
                          <span className="font-sans text-[11.5px] font-medium truncate max-w-[110px]">
                            {attraction.location.split(",")[0]}
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-0.5 font-sans text-[12px] font-semibold text-emerald-600">
                          Ver detalhes
                          <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-stone-300 text-6xl mb-4">🔍</div>
            <h3 className="font-display font-semibold text-stone-700 text-lg mb-2 tracking-tight">Nenhuma atração encontrada</h3>
            <p className="font-sans text-[13.5px] text-stone-500">Tente ajustar os filtros ou a busca.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
