"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TreePine, Users, Star, Calendar } from "lucide-react";

const stats = [
  { icon: TreePine, value: 35000, suffix: " ha", label: "Mata Atlântica preservada", color: "text-emerald-600", bg: "bg-emerald-50", iconBg: "bg-emerald-100" },
  { icon: Users, value: 12000, suffix: "+", label: "Visitantes por ano", color: "text-blue-600", bg: "bg-blue-50", iconBg: "bg-blue-100" },
  { icon: Star, value: 4.8, suffix: "/5", label: "Avaliação média", color: "text-amber-600", bg: "bg-amber-50", iconBg: "bg-amber-100", decimal: true },
  { icon: Calendar, value: 6, suffix: "+", label: "Festivais anuais", color: "text-violet-600", bg: "bg-violet-50", iconBg: "bg-violet-100" },
];

function Counter({ target, suffix, decimal }: { target: number; suffix: string; decimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {decimal ? count.toFixed(1) : Math.floor(count).toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-14 bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <p className="type-label text-emerald-600 mb-2">Em números</p>
          <h2
            className="font-display font-bold text-stone-900"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", letterSpacing: "-0.025em", lineHeight: 1.2 }}
          >
            São Gonçalo do Rio Abaixo
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map(({ icon: Icon, value, suffix, label, color, bg, iconBg, decimal }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex flex-col items-center text-center p-5 md:p-6 rounded-2xl hover:bg-stone-50 transition-colors group"
            >
              <div className={`${iconBg} p-3 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <div
                className={`font-display font-extrabold ${color} mb-1`}
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.04em", lineHeight: 1 }}
              >
                <Counter target={value} suffix={suffix} decimal={decimal} />
              </div>
              <p className="font-sans text-[13px] font-medium text-stone-500 leading-snug mt-1">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
