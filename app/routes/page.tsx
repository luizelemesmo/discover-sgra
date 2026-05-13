"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Clock, Route, ChevronDown, ChevronUp, ArrowRight, MapPin, Bot
} from "lucide-react";
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

const colorGradient: Record<string, string> = {
  amber: "from-amber-500 to-orange-600",
  emerald: "from-emerald-500 to-green-600",
  orange: "from-orange-500 to-red-500",
  violet: "from-violet-500 to-purple-600",
};

const colorAccent: Record<string, string> = {
  amber: "border-amber-400 bg-amber-50",
  emerald: "border-emerald-400 bg-emerald-50",
  orange: "border-orange-400 bg-orange-50",
  violet: "border-violet-400 bg-violet-50",
};

const colorText: Record<string, string> = {
  amber: "text-amber-700",
  emerald: "text-emerald-700",
  orange: "text-orange-700",
  violet: "text-violet-700",
};

export default function RoutesPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-teal-900 via-emerald-800 to-teal-800 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="type-label text-teal-300 mb-3">Roteiros</p>
            <h1
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Explore com propósito
            </h1>
            <p className="font-sans text-base md:text-[17px] text-teal-100/75 max-w-lg leading-[1.72] font-normal">
              Roteiros temáticos cuidadosamente planejados para guiar sua experiência
              em São Gonçalo do Rio Abaixo.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* AI suggestion banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 mb-10"
        >
          <div className="flex items-center gap-3 flex-1">
            <div className="p-2.5 bg-emerald-600 rounded-xl">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-display font-semibold text-stone-800 text-[14px] tracking-tight">Quer um roteiro personalizado?</p>
              <p className="font-sans text-[12px] text-stone-500 mt-0.5">Nosso assistente com IA cria itinerários exclusivos baseados nas suas preferências.</p>
            </div>
          </div>
          <Link
            href="/assistant"
            className="shrink-0 flex items-center gap-2 px-4 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors"
          >
            Criar roteiro
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>

        {/* Routes list */}
        <div className="space-y-5">
          {routes.map((route, i) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden"
            >
              {/* Route header */}
              <button
                onClick={() => setExpanded(expanded === route.id ? null : route.id)}
                className="w-full text-left"
              >
                <div className="flex flex-col md:flex-row md:items-center">
                  {/* Image */}
                  <div className="relative md:w-56 h-48 md:h-auto shrink-0 overflow-hidden">
                    <img
                      src={route.image}
                      alt={route.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${colorGradient[route.color]} opacity-60`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${difficultyColor[route.difficulty]}`}>
                            {difficultyLabel[route.difficulty]}
                          </span>
                          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-stone-100 text-stone-600">
                            {route.category}
                          </span>
                        </div>
                        <h2
                          className="font-display font-bold text-stone-900 mb-0.5"
                          style={{ fontSize: "1.125rem", letterSpacing: "-0.018em", lineHeight: 1.25 }}
                        >
                          {route.title}
                        </h2>
                        <p className="font-sans text-[13px] text-stone-400 italic mb-3">{route.subtitle}</p>
                        <p className="font-sans text-[13.5px] text-stone-600 leading-[1.65] line-clamp-2 mb-4 font-normal">{route.description}</p>
                        <div className="flex flex-wrap items-center gap-4 text-stone-400">
                          <span className="flex items-center gap-1 font-sans text-[12px] font-medium">
                            <Clock className="h-3 w-3" />
                            {route.duration}
                          </span>
                          <span className="flex items-center gap-1 font-sans text-[12px] font-medium">
                            <Route className="h-3 w-3" />
                            {route.distance}
                          </span>
                          <span className="flex items-center gap-1 font-sans text-[12px] font-medium">
                            <MapPin className="h-3 w-3" />
                            {route.stops.length} paradas
                          </span>
                        </div>
                      </div>

                      <div className={`p-2 rounded-xl transition-transform ${expanded === route.id ? "rotate-180" : ""}`}>
                        <ChevronDown className="h-5 w-5 text-stone-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              {/* Expanded: stops */}
              <AnimatePresence>
                {expanded === route.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className={`border-t ${colorAccent[route.color]} border-t-2 p-6`}>
                      <h3 className={`text-sm font-bold uppercase tracking-wide mb-5 ${colorText[route.color]}`}>
                        Paradas do Roteiro
                      </h3>
                      <div className="space-y-4">
                        {route.stops.map((stop, idx) => (
                          <motion.div
                            key={stop.order}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex gap-4"
                          >
                            {/* Timeline */}
                            <div className="flex flex-col items-center">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold bg-gradient-to-br ${colorGradient[route.color]} shrink-0`}>
                                {stop.order}
                              </div>
                              {idx < route.stops.length - 1 && (
                                <div className="w-px flex-1 bg-stone-200 mt-2" />
                              )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 pb-4">
                              <div className="flex gap-3">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-semibold text-stone-900 text-sm">{stop.name}</h4>
                                    <span className="px-2 py-0.5 bg-stone-100 text-stone-500 text-xs rounded-full">
                                      {stop.duration}
                                    </span>
                                  </div>
                                  <p className="text-stone-500 text-sm">{stop.description}</p>
                                </div>
                                <img
                                  src={stop.image}
                                  alt={stop.name}
                                  className="w-20 h-16 rounded-xl object-cover shrink-0 hidden sm:block"
                                />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="mt-5 pt-5 border-t border-stone-200">
                        <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-3">Destaques</p>
                        <div className="flex flex-wrap gap-2">
                          {route.highlights.map((h) => (
                            <span key={h} className="px-3 py-1 bg-white border border-stone-200 text-stone-600 text-xs rounded-full">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        href="/assistant"
                        className={`mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${colorGradient[route.color]} hover:opacity-90 transition-opacity`}
                      >
                        Personalizar com IA
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
