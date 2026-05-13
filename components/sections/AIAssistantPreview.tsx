"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Bot, MapPin, Sparkles, ArrowRight, MessageSquare } from "lucide-react";

const mockMessages = [
  { role: "user", text: "O que posso fazer neste fim de semana em SGRA?" },
  {
    role: "assistant",
    text: "Tenho o roteiro perfeito para você! 🌿 Comece com uma trilha no Parque Estadual do Rio Doce pela manhã, depois vá à Cachoeira Véu de Noiva para um banho refrescante. No domingo, explore o centro histórico e encerre com o pôr do sol no Mirante da Pedra Redonda.",
  },
];

const suggestions = [
  "Quero conhecer a história",
  "Atrações naturais",
  "O que comer em SGRA?",
  "Roteiro de 2 dias",
];

export default function AIAssistantPreview() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-emerald-500/20 rounded-xl border border-emerald-400/25">
                <Sparkles className="h-4 w-4 text-emerald-300" />
              </div>
              <span className="type-label text-emerald-300 tracking-[0.14em]">Powered by IA</span>
            </div>

            <h2
              className="font-display font-bold text-white mb-6"
              style={{ fontSize: "clamp(1.875rem, 4.5vw, 3rem)", letterSpacing: "-0.025em", lineHeight: 1.1 }}
            >
              Seu guia turístico
              <span
                className="block"
                style={{
                  background: "linear-gradient(120deg, #6ee7b7, #5eead4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                inteligente
              </span>
            </h2>

            <p className="font-sans text-base md:text-[17px] text-emerald-100/65 mb-8 leading-[1.72] font-normal max-w-[440px]">
              O Assistente de Turismo com IA entende suas preferências e monta
              roteiros personalizados, recomenda atrações e responde dúvidas sobre
              São Gonçalo do Rio Abaixo.
            </p>

            <div className="space-y-3 mb-10">
              {[
                { icon: Bot, text: "Recomendações personalizadas baseadas no seu perfil" },
                { icon: MapPin, text: "Roteiros otimizados por localização e interesse" },
                { icon: MessageSquare, text: "Respostas instantâneas sobre a cidade e atrações" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="p-1.5 bg-emerald-500/15 rounded-lg border border-emerald-400/20 shrink-0">
                    <Icon className="h-3.5 w-3.5 text-emerald-300" />
                  </div>
                  <span className="font-sans text-[13.5px] text-emerald-100/70 leading-snug">{text}</span>
                </div>
              ))}
            </div>

            <Link
              href="/assistant"
              className="group inline-flex items-center gap-2 px-6 py-[14px] bg-emerald-400 hover:bg-emerald-300 text-emerald-950 rounded-2xl font-sans font-bold text-[14px] tracking-[-0.01em] transition-all duration-200 shadow-lg shadow-emerald-500/25"
            >
              Conversar com a IA
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: chat mockup */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="bg-white/6 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              {/* Chat header */}
              <div className="px-5 py-4 border-b border-white/10 flex items-center gap-3">
                <div className="p-2 bg-emerald-500/20 rounded-xl">
                  <Bot className="h-4.5 w-4.5 text-emerald-300" style={{ width: "1.125rem", height: "1.125rem" }} />
                </div>
                <div>
                  <p className="font-display font-semibold text-white text-[14px] tracking-[-0.01em]">
                    Assistente SGRA
                  </p>
                  <p className="font-sans text-[11px] text-emerald-400/80 flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block" />
                    Online agora
                  </p>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-3.5 min-h-[220px]">
                {mockMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.3 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "assistant" && (
                      <div className="p-1.5 bg-emerald-500/20 rounded-xl mr-2 mt-0.5 shrink-0 self-start">
                        <Bot className="h-3 w-3 text-emerald-300" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl font-sans text-[13px] leading-[1.6] ${
                        msg.role === "user"
                          ? "bg-emerald-500 text-white rounded-tr-sm"
                          : "bg-white/10 text-white/90 rounded-tl-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Suggestion chips */}
              <div className="px-5 pb-3">
                <p className="font-sans text-[10.5px] font-medium text-white/35 mb-2 uppercase tracking-[0.08em]">
                  Sugestões
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {suggestions.map((s) => (
                    <span
                      key={s}
                      className="font-sans text-[11.5px] font-medium px-2.5 py-1.5 bg-white/8 border border-white/12 text-white/65 rounded-full hover:bg-white/15 cursor-pointer transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Input area */}
              <div className="p-4">
                <div className="flex items-center gap-2.5 px-4 py-3 bg-white/8 border border-white/12 rounded-2xl">
                  <span className="font-sans text-[13px] text-white/28 flex-1">
                    Faça uma pergunta sobre SGRA…
                  </span>
                  <div className="p-1.5 bg-emerald-500 rounded-lg shrink-0">
                    <ArrowRight className="h-3 w-3 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
