"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MapPin, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/attractions", label: "Atrações" },
  { href: "/routes", label: "Roteiros" },
  { href: "/events", label: "Eventos" },
  { href: "/gallery", label: "Galeria" },
  { href: "/assistant", label: "Assistente IA" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome;

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          solid
            ? "bg-white/96 backdrop-blur-xl border-b border-stone-200/80 shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[60px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div
                className={cn(
                  "p-1.5 rounded-lg transition-all duration-200",
                  solid ? "bg-emerald-50 group-hover:bg-emerald-100" : "bg-white/15 group-hover:bg-white/25"
                )}
              >
                <Compass
                  className={cn(
                    "h-[18px] w-[18px] transition-colors",
                    solid ? "text-emerald-700" : "text-white"
                  )}
                />
              </div>
              <span
                className={cn(
                  "font-display font-bold text-[15px] tracking-[-0.02em] transition-colors",
                  solid ? "text-stone-900" : "text-white"
                )}
              >
                Discover{" "}
                <span className={cn(solid ? "text-emerald-600" : "text-emerald-300")}>
                  SGRA
                </span>
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-3.5 py-2 rounded-lg font-sans text-[13.5px] font-medium tracking-[-0.005em] transition-all duration-150",
                      active
                        ? solid
                          ? "text-emerald-700 bg-emerald-50"
                          : "text-white bg-white/18"
                        : solid
                        ? "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                        : "text-white/80 hover:text-white hover:bg-white/12"
                    )}
                  >
                    {link.label}
                    {active && (
                      <span
                        className={cn(
                          "absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full",
                          solid ? "bg-emerald-500" : "bg-white/60"
                        )}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-2.5">
              <Link
                href="/assistant"
                className={cn(
                  "hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full font-sans text-[13px] font-semibold tracking-[-0.01em] transition-all duration-200",
                  solid
                    ? "bg-stone-900 text-white hover:bg-stone-700 shadow-sm"
                    : "bg-white text-stone-900 hover:bg-white/90 shadow-md shadow-black/10"
                )}
              >
                <MapPin className="h-3.5 w-3.5" />
                Explorar
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
                className={cn(
                  "md:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors",
                  solid
                    ? "text-stone-700 hover:bg-stone-100"
                    : "text-white hover:bg-white/15"
                )}
              >
                {mobileOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-white/98 backdrop-blur-xl border-b border-stone-200 shadow-lg md:hidden"
          >
            <div className="px-4 pt-3 pb-5 flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl font-sans text-[14px] font-medium tracking-[-0.005em] transition-colors",
                    pathname === link.href
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-stone-700 hover:bg-stone-50 hover:text-stone-900"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-stone-100 my-2" />
              <Link
                href="/assistant"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3.5 bg-stone-900 text-white rounded-2xl font-sans text-[14px] font-semibold tracking-[-0.01em]"
              >
                <MapPin className="h-4 w-4" />
                Explorar com IA
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
