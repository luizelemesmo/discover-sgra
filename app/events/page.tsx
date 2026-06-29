"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Tag, ArrowRight, Filter } from "lucide-react";
import Link from "next/link";
import { events } from "@/data/events";
import { EventCategory } from "@/types";

const categoryColors: Record<string, string> = {
  festival: "bg-rose-100 text-rose-700",
  culture: "bg-violet-100 text-violet-700",
  gastronomy: "bg-orange-100 text-orange-700",
  music: "bg-blue-100 text-blue-700",
  sports: "bg-emerald-100 text-emerald-700",
  heritage: "bg-amber-100 text-amber-700",
};

const categoryLabels: Record<string, string> = {
  festival: "Festival",
  culture: "Cultura",
  gastronomy: "Gastronomia",
  music: "Música",
  sports: "Esporte",
  heritage: "Patrimônio",
};

const filters: { value: "all" | EventCategory; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "festival", label: "Festivais" },
  { value: "culture", label: "Cultura" },
  { value: "gastronomy", label: "Gastronomia" },
  { value: "music", label: "Música" },
  { value: "sports", label: "Esporte" },
  { value: "heritage", label: "Patrimônio" },
];

function formatDateRange(start: string, end?: string): string {
  const opts: Intl.DateTimeFormatOptions = { day: "2-digit", month: "short" };
  const s = new Date(start + "T00:00:00").toLocaleDateString("pt-BR", opts);
  if (!end) return s;
  const e = new Date(end + "T00:00:00").toLocaleDateString("pt-BR", { ...opts, year: "numeric" });
  return `${s} – ${e}`;
}

function getMonth(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
}

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | EventCategory>("all");

  const filtered = useMemo(() => {
    return events.filter((e) => activeFilter === "all" || e.category === activeFilter);
  }, [activeFilter]);

  const grouped = useMemo(() => {
    const map: Record<string, typeof filtered> = {};
    filtered.forEach((e) => {
      const m = getMonth(e.date);
      if (!map[m]) map[m] = [];
      map[m].push(e);
    });
    return map;
  }, [filtered]);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-violet-900 via-purple-800 to-violet-800 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="type-label text-violet-300 mb-3">Agenda</p>
            <h1
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Eventos & Experiências
            </h1>
            <p className="font-sans text-base md:text-[17px] text-violet-100/75 max-w-lg leading-[1.72] font-normal">
              Festivais, celebrações e experiências culturais únicas ao longo do ano em
              São Gonçalo do Rio Abaixo.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 px-4 py-3 bg-violet-50 border border-violet-200 rounded-xl text-violet-700 font-sans text-[12.5px] leading-snug"
        >
          Agenda ilustrativa de exemplo — datas, horários e programação devem ser confirmados junto à Prefeitura e à Secretaria de Cultura de São Gonçalo do Rio Abaixo.
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm border border-stone-100 p-5 mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <Filter className="h-4 w-4 text-stone-500" />
            <span className="font-sans text-[13px] font-semibold text-stone-700 tracking-tight">Filtrar por categoria</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setActiveFilter(value)}
                className={`px-4 py-2 rounded-full font-sans text-[13px] font-medium tracking-tight transition-all duration-200 ${
                  activeFilter === value
                    ? "bg-violet-600 text-white shadow-sm"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Events grouped by month */}
        <AnimatePresence mode="wait">
          <div className="space-y-10">
            {Object.entries(grouped).map(([month, monthEvents]) => (
              <motion.div
                key={month}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Month label */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-violet-100 rounded-xl">
                    <Calendar className="h-4 w-4 text-violet-600" />
                  </div>
                  <h2 className="font-display font-bold text-stone-800 capitalize" style={{ fontSize: "1.0625rem", letterSpacing: "-0.018em" }}>{month}</h2>
                  <div className="flex-1 h-px bg-stone-200" />
                  <span className="font-sans text-[12.5px] font-medium text-stone-400">{monthEvents.length} evento{monthEvents.length !== 1 ? "s" : ""}</span>
                </div>

                {/* Events grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {monthEvents.map((event, i) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="group"
                    >
                      <div className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full ${event.featured ? "ring-2 ring-violet-300" : ""}`}>
                        {event.featured && (
                          <div className="px-4 pt-2.5">
                            <span className="text-xs font-bold text-violet-600 uppercase tracking-wide">⭐ Destaque</span>
                          </div>
                        )}

                        {/* Image */}
                        <div className="relative h-44 overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute top-3 left-3">
                            <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${categoryColors[event.category]}`}>
                              {categoryLabels[event.category]}
                            </span>
                          </div>
                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                            <span className="flex items-center gap-1.5 px-2.5 py-1.5 bg-black/50 backdrop-blur-sm text-white text-xs rounded-lg font-medium">
                              <Calendar className="h-3 w-3 text-violet-300" />
                              {formatDateRange(event.date, event.endDate)}
                            </span>
                            <span className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold ${event.price === "Gratuito" || event.price === "Entrada gratuita" ? "bg-emerald-600 text-white" : "bg-white/20 backdrop-blur-sm text-white"}`}>
                              {event.price}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex-1 flex flex-col">
                          <h3 className="font-display font-bold text-stone-900 mb-2" style={{ fontSize: "0.9375rem", letterSpacing: "-0.012em", lineHeight: 1.3 }}>
                            {event.title}
                          </h3>
                          <p className="font-sans text-[13px] text-stone-500 leading-[1.65] line-clamp-2 mb-4 flex-1 font-normal">
                            {event.description}
                          </p>

                          <div className="space-y-1.5 pt-3 border-t border-stone-100">
                            <div className="flex items-center gap-2 text-stone-400 text-xs">
                              <Clock className="h-3.5 w-3.5" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-stone-400 text-xs">
                              <MapPin className="h-3.5 w-3.5" />
                              <span className="truncate">{event.location}</span>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {event.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="flex items-center gap-1 px-2 py-0.5 bg-stone-100 text-stone-500 text-xs rounded-full">
                                <Tag className="h-2.5 w-2.5" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-stone-700 font-semibold text-lg mb-2">Nenhum evento encontrado</h3>
            <p className="text-stone-500 text-sm">Tente outro filtro de categoria.</p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Não perca nenhum evento</h3>
          <p className="text-violet-100/80 mb-6">
            Consulte o nosso Assistente IA para saber mais sobre eventos e montar o roteiro perfeito.
          </p>
          <Link
            href="/assistant"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-violet-700 rounded-xl font-bold hover:bg-violet-50 transition-colors"
          >
            Falar com a IA
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
