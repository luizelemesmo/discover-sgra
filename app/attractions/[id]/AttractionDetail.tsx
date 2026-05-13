"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Star, MapPin, Clock, DollarSign, Calendar, ChevronLeft,
  ArrowRight, CheckCircle2, Share2, Heart, Navigation
} from "lucide-react";
import { Attraction } from "@/types";
import { attractions } from "@/data/attractions";
import { Badge } from "@/components/ui/badge";

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

export default function AttractionDetail({ attraction }: { attraction: Attraction }) {
  const [activeImage, setActiveImage] = useState(0);
  const [liked, setLiked] = useState(false);

  const related = attractions
    .filter((a) => a.id !== attraction.id && (a.category === attraction.category || a.featured))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Back link + Hero */}
      <div className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <img
          src={attraction.images[activeImage]}
          alt={attraction.title}
          className="w-full h-full object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

        {/* Nav bar */}
        <div className="absolute top-20 left-0 right-0 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link
              href="/attractions"
              className="flex items-center gap-1.5 px-3 py-2 bg-black/40 backdrop-blur-sm border border-white/20 text-white rounded-xl font-sans text-[13px] font-medium hover:bg-black/60 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Atrações
            </Link>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLiked(!liked)}
                className={`p-2.5 rounded-xl backdrop-blur-sm border transition-colors ${liked ? "bg-red-500/80 border-red-400 text-white" : "bg-black/40 border-white/20 text-white hover:bg-black/60"}`}
              >
                <Heart className={`h-4 w-4 ${liked ? "fill-white" : ""}`} />
              </button>
              <button className="p-2.5 bg-black/40 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-black/60 transition-colors">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <span className={`inline-block px-3 py-1 font-sans text-xs font-semibold rounded-full mb-3 ${categoryColors[attraction.category]}`}>
              {categoryLabels[attraction.category]}
            </span>
            <h1
              className="font-display font-bold text-white mb-2"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)", letterSpacing: "-0.03em", lineHeight: 1.08 }}
            >
              {attraction.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80 font-sans text-[13.5px]">
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold text-white">{attraction.rating}</span>
                <span>({attraction.reviewCount} avaliações)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-emerald-300" />
                {attraction.location}
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        {attraction.images.length > 1 && (
          <div className="absolute bottom-4 right-4 sm:right-8 flex gap-2">
            {attraction.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-12 h-9 rounded-lg overflow-hidden border-2 transition-all ${activeImage === i ? "border-white scale-110" : "border-white/40 opacity-70"}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: Description and highlights */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display font-bold text-stone-900 mb-4" style={{ fontSize: "1.375rem", letterSpacing: "-0.022em" }}>Sobre</h2>
              <p className="font-sans text-[14.5px] text-stone-600 leading-[1.72] font-normal">{attraction.description}</p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-display font-bold text-stone-900 mb-4" style={{ fontSize: "1.375rem", letterSpacing: "-0.022em" }}>Destaques</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {attraction.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3 p-3 bg-emerald-50 rounded-xl">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-sans text-[13px] text-stone-700 font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-display font-bold text-stone-900 mb-3" style={{ fontSize: "1.125rem", letterSpacing: "-0.018em" }}>Tags</h2>
              <div className="flex flex-wrap gap-2">
                {attraction.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-stone-100 text-stone-600 font-sans text-[12.5px] rounded-full font-medium capitalize">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="font-display font-bold text-stone-900 mb-4" style={{ fontSize: "1.375rem", letterSpacing: "-0.022em" }}>Localização</h2>
              <div className="rounded-2xl overflow-hidden border border-stone-200 h-48 bg-gradient-to-br from-emerald-50 to-teal-50 flex flex-col items-center justify-center gap-3 relative">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: "repeating-linear-gradient(0deg, #d1d5db 0, #d1d5db 1px, transparent 0, transparent 50%), repeating-linear-gradient(90deg, #d1d5db 0, #d1d5db 1px, transparent 0, transparent 50%)",
                  backgroundSize: "30px 30px"
                }} />
                <Navigation className="h-10 w-10 text-emerald-600" />
                <div className="text-center">
                  <p className="font-sans text-stone-700 font-semibold text-[14px]">{attraction.location}</p>
                  <p className="font-sans text-stone-500 text-[12.5px]">São Gonçalo do Rio Abaixo — MG</p>
                </div>
                <a
                  href={`https://maps.google.com/?q=${attraction.coordinates.lat},${attraction.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors z-10"
                >
                  Abrir no Maps
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Visiting info card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="sticky top-24"
            >
              <div className="bg-white rounded-2xl border border-stone-200 shadow-lg overflow-hidden">
                <div className="p-6 bg-emerald-600">
                  <h3 className="font-display font-bold text-white mb-1" style={{ fontSize: "1.0625rem", letterSpacing: "-0.018em" }}>Informações de Visita</h3>
                  <p className="font-sans text-emerald-100/80 text-[13px]">Planeje sua experiência</p>
                </div>
                <div className="p-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-emerald-50 rounded-lg shrink-0">
                      <Clock className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-sans text-stone-500 text-[11px] font-semibold uppercase tracking-wide mb-0.5">Horário</p>
                      <p className="font-sans text-stone-800 text-[13.5px] font-medium">{attraction.visitingInfo.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                      <DollarSign className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-sans text-stone-500 text-[11px] font-semibold uppercase tracking-wide mb-0.5">Preço</p>
                      <p className="font-sans text-stone-800 text-[13.5px] font-medium">{attraction.visitingInfo.price}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg shrink-0">
                      <Clock className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-sans text-stone-500 text-[11px] font-semibold uppercase tracking-wide mb-0.5">Duração média</p>
                      <p className="font-sans text-stone-800 text-[13.5px] font-medium">{attraction.visitingInfo.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-rose-50 rounded-lg shrink-0">
                      <Calendar className="h-4 w-4 text-rose-600" />
                    </div>
                    <div>
                      <p className="font-sans text-stone-500 text-[11px] font-semibold uppercase tracking-wide mb-0.5">Melhor época</p>
                      <p className="font-sans text-stone-800 text-[13.5px] font-medium">{attraction.visitingInfo.bestTime}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-stone-100 space-y-2">
                    <Link
                      href="/assistant"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 text-white rounded-xl font-sans font-semibold text-[13.5px] hover:bg-emerald-700 transition-colors"
                    >
                      Montar roteiro com IA
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={`https://maps.google.com/?q=${attraction.coordinates.lat},${attraction.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-stone-100 text-stone-700 rounded-xl font-sans font-semibold text-[13.5px] hover:bg-stone-200 transition-colors"
                    >
                      <Navigation className="h-4 w-4" />
                      Como chegar
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related attractions */}
        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-stone-100"
          >
            <h2 className="font-display font-bold text-stone-900 mb-8" style={{ fontSize: "1.375rem", letterSpacing: "-0.022em" }}>Atrações relacionadas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((a) => (
                <Link key={a.id} href={`/attractions/${a.id}`} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={a.image}
                        alt={a.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded-full">
                        <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-white text-xs font-semibold">{a.rating}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-display font-semibold text-stone-900 mb-1 group-hover:text-emerald-700 transition-colors" style={{ fontSize: "0.875rem", letterSpacing: "-0.01em" }}>
                        {a.title}
                      </h3>
                      <div className="flex items-center gap-1 text-stone-400 font-sans text-[11.5px]">
                        <MapPin className="h-3 w-3" />
                        <span className="truncate">{a.location.split(",")[0]}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
