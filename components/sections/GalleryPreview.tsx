"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ZoomIn } from "lucide-react";
import { galleryImages } from "@/data/gallery";

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 8);

  return (
    <section className="py-20 md:py-28 bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="type-label text-emerald-400 mb-3">Galeria</p>
            <h2
              className="font-display font-bold text-white mb-3"
              style={{ fontSize: "clamp(1.875rem, 4.5vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.15 }}
            >
              A beleza em imagens
            </h2>
            <p className="font-sans text-base md:text-[17px] text-stone-400 max-w-[420px] leading-[1.72] font-normal">
              Uma janela para a extraordinária beleza natural e cultural de São Gonçalo do Rio Abaixo.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link
              href="/gallery"
              className="group flex items-center gap-2 px-5 py-3 border-2 border-stone-600 text-white rounded-xl font-semibold hover:border-emerald-400 hover:text-emerald-400 transition-all duration-200 text-sm"
            >
              Ver galeria completa
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Masonry-style grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3"
        >
          {preview.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl break-inside-avoid mb-3"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ aspectRatio: i % 3 === 0 ? "2/3" : "4/3" }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-medium">{img.alt}</p>
                <span className="text-white/60 text-xs capitalize">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
