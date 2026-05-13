"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Bot, Send, User, Sparkles, ArrowRight, RefreshCw,
  MapPin, TreePine, Utensils, Landmark, Clock
} from "lucide-react";
import { getBotResponse, suggestedPrompts, defaultResponse } from "@/data/chatbot";
import { ChatMessage } from "@/types";
import { Input } from "@/components/ui/input";

function parseMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br/>");
}

const quickPrompts = [
  { icon: TreePine, label: "Natureza", prompt: "Quero conhecer atrações naturais" },
  { icon: Landmark, label: "História", prompt: "Quero conhecer a história da cidade" },
  { icon: Utensils, label: "Gastronomia", prompt: "Onde comer comida mineira típica?" },
  { icon: Clock, label: "Fim de semana", prompt: "O que fazer neste fim de semana?" },
  { icon: MapPin, label: "Roteiro", prompt: "Monte um roteiro de 2 dias para mim" },
];

export default function AssistantPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: defaultResponse.response,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response delay
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 800));

    const response = getBotResponse(text);
    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: response.response,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMsg]);
    setIsTyping(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const resetChat = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: defaultResponse.response,
        timestamp: new Date(),
      },
    ]);
    setInput("");
  };

  const currentSuggestions = defaultResponse.suggestions;

  return (
    <div className="min-h-screen bg-stone-50 pt-16 flex flex-col">
      <div className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-600 rounded-2xl shadow-lg shadow-emerald-600/30">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1
                className="font-display font-bold text-stone-900"
                style={{ fontSize: "1.1875rem", letterSpacing: "-0.02em" }}
              >
                Assistente SGRA
              </h1>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="font-sans text-[11.5px] font-medium text-emerald-600">Online · Powered by IA</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={resetChat}
              className="p-2 text-stone-500 hover:text-stone-700 hover:bg-stone-100 rounded-xl transition-colors"
              title="Reiniciar conversa"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* Quick prompts */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2"
        >
          {quickPrompts.map(({ icon: Icon, label, prompt }) => (
            <button
              key={label}
              onClick={() => sendMessage(prompt)}
              className="flex items-center gap-2 px-3 py-2 bg-white border border-stone-200 text-stone-700 rounded-xl font-sans text-[13px] font-medium tracking-tight hover:border-emerald-400 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-200 shadow-sm"
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </button>
          ))}
        </motion.div>

        {/* Chat window */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-1 bg-white rounded-3xl shadow-sm border border-stone-100 flex flex-col overflow-hidden min-h-[500px]"
        >
          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  {/* Avatar */}
                  <div className={`shrink-0 w-8 h-8 rounded-2xl flex items-center justify-center ${
                    msg.role === "assistant"
                      ? "bg-emerald-100"
                      : "bg-stone-700"
                  }`}>
                    {msg.role === "assistant"
                      ? <Bot className="h-4 w-4 text-emerald-700" />
                      : <User className="h-4 w-4 text-white" />
                    }
                  </div>

                  {/* Bubble */}
                  <div className={`max-w-[75%] px-4 py-3 rounded-2xl font-sans text-[13.5px] leading-[1.65] ${
                    msg.role === "user"
                      ? "bg-emerald-600 text-white rounded-tr-sm"
                      : "bg-stone-50 text-stone-800 border border-stone-100 rounded-tl-sm"
                  }`}>
                    {msg.role === "assistant" ? (
                      <div dangerouslySetInnerHTML={{ __html: parseMarkdown(msg.content) }} />
                    ) : (
                      <p>{msg.content}</p>
                    )}
                    <p className={`font-sans text-[10.5px] mt-1.5 ${msg.role === "user" ? "text-emerald-200" : "text-stone-400"}`}>
                      {msg.timestamp.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3"
              >
                <div className="w-8 h-8 rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0">
                  <Bot className="h-4 w-4 text-emerald-700" />
                </div>
                <div className="bg-stone-50 border border-stone-100 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
                  {[0, 0.2, 0.4].map((delay, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-emerald-500 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay }}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {messages.length <= 2 && (
            <div className="px-6 pb-3">
              <p className="font-sans text-[11px] font-semibold text-stone-400 mb-2.5 uppercase tracking-[0.08em]">Tente perguntar</p>
              <div className="flex flex-wrap gap-2">
                {suggestedPrompts.slice(0, 4).map((p) => (
                  <button
                    key={p}
                    onClick={() => sendMessage(p)}
                    className="font-sans px-3 py-1.5 bg-stone-100 hover:bg-emerald-50 hover:text-emerald-700 text-stone-600 text-[12.5px] font-medium rounded-xl border border-transparent hover:border-emerald-200 transition-all duration-200 tracking-tight"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-stone-100">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pergunte sobre atrações, roteiros, eventos..."
                className="flex-1 h-12 bg-stone-50 border-stone-200 rounded-2xl focus-visible:ring-emerald-500 font-sans text-[13.5px] placeholder:text-stone-400"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="h-12 w-12 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-2xl flex items-center justify-center transition-colors shrink-0"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-emerald-600 shrink-0" />
            <div>
              <p className="font-display font-semibold text-stone-800 text-[14px] tracking-tight">
                Assistente Inteligente de Turismo
              </p>
              <p className="font-sans text-[12px] text-stone-500 mt-0.5 leading-snug">
                Recomendações personalizadas baseadas em IA para a melhor experiência em SGRA.
              </p>
            </div>
          </div>
          <Link
            href="/attractions"
            className="shrink-0 flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors"
          >
            Ver atrações
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
