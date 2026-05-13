"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Clock } from "lucide-react";
import { getFeaturedEvents } from "@/data/events";

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

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

export default function EventsPreview() {
  const featured = getFeaturedEvents();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="type-label text-emerald-600 mb-3">Agenda</p>
            <h2
              className="font-display font-bold text-stone-900 mb-3"
              style={{ fontSize: "clamp(1.875rem, 4.5vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.15 }}
            >
              Eventos em destaque
            </h2>
            <p className="font-sans text-base md:text-[17px] text-stone-500 max-w-[420px] leading-[1.72] font-normal">
              Festivais, celebrações e experiências únicas ao longo do ano.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link
              href="/events"
              className="group inline-flex items-center gap-2 px-5 py-3 border border-stone-800 text-stone-800 rounded-xl font-sans font-semibold text-[13.5px] tracking-[-0.01em] hover:bg-stone-900 hover:text-white transition-all duration-200"
            >
              Ver agenda completa
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="group"
            >
              <Link href="/events">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100/80 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className={`font-sans text-[11px] font-semibold px-2.5 py-1 rounded-full ${categoryColors[event.category]}`}>
                        {categoryLabels[event.category]}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1.5 bg-black/50 backdrop-blur-sm rounded-lg">
                      <Calendar className="h-3 w-3 text-emerald-300" />
                      <span className="font-sans text-[11.5px] font-medium text-white">{formatDate(event.date)}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3
                      className="font-display font-semibold text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors"
                      style={{ fontSize: "1.0625rem", letterSpacing: "-0.015em", lineHeight: 1.28 }}
                    >
                      {event.title}
                    </h3>
                    <p className="font-sans text-[13.5px] text-stone-500 leading-[1.65] line-clamp-2 mb-4 flex-1 font-normal">
                      {event.description}
                    </p>

                    <div className="space-y-1.5 pt-3.5 border-t border-stone-100">
                      <div className="flex items-center gap-2 text-stone-400">
                        <Clock className="h-3 w-3 shrink-0" />
                        <span className="font-sans text-[12px] font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-stone-400">
                        <MapPin className="h-3 w-3 shrink-0" />
                        <span className="font-sans text-[12px] font-medium truncate">{event.location}</span>
                      </div>
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
