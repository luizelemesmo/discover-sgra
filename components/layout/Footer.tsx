import Link from "next/link";
import { Compass, MapPin, Mail, Phone, Share2, Rss, Heart, Globe } from "lucide-react";

const links = {
  explorar: [
    { label: "Atrações", href: "/attractions" },
    { label: "Roteiros", href: "/routes" },
    { label: "Eventos", href: "/events" },
    { label: "Galeria", href: "/gallery" },
  ],
  descubra: [
    { label: "Patrimônio", href: "/attractions?category=heritage" },
    { label: "Memória & História", href: "/attractions?category=history" },
    { label: "Cultura", href: "/attractions?category=culture" },
    { label: "Natureza", href: "/attractions?category=nature" },
    { label: "Gastronomia", href: "/attractions?category=gastronomy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-emerald-600/20 rounded-lg">
                <Compass className="h-5 w-5 text-emerald-400" />
              </div>
              <span className="font-display font-bold text-white" style={{ fontSize: "1rem", letterSpacing: "-0.02em" }}>
                Discover <span className="text-emerald-400">SGRA</span>
              </span>
            </Link>
            <p className="font-sans text-stone-400 text-[13px] leading-[1.72] mb-6 max-w-xs font-normal">
              A plataforma de turismo inteligente de São Gonçalo do Rio Abaixo — MG.
              Descubra natureza, cultura e experiências únicas no coração de Minas Gerais.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Share2, label: "Redes Sociais" },
                { icon: Rss, label: "Feed" },
                { icon: Globe, label: "Site" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="p-2 rounded-lg bg-stone-800 hover:bg-emerald-600 text-stone-400 hover:text-white transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-sans text-white font-semibold text-[11px] mb-4 uppercase tracking-[0.08em]">Explorar</h3>
            <ul className="space-y-2.5">
              {links.explorar.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-sans text-stone-400 hover:text-emerald-400 text-[13px] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-white font-semibold text-[11px] mb-4 uppercase tracking-[0.08em]">Descubra</h3>
            <ul className="space-y-2.5">
              {links.descubra.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-sans text-stone-400 hover:text-emerald-400 text-[13px] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-white font-semibold text-[11px] mb-4 uppercase tracking-[0.08em]">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 font-sans text-[13px] text-stone-400">
                <MapPin className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>Centro, São Gonçalo do Rio Abaixo — MG</span>
              </li>
              <li className="flex items-center gap-2 font-sans text-[13px] text-stone-400">
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>contato@discoversgra.com.br</span>
              </li>
              <li className="flex items-center gap-2 font-sans text-[13px] text-stone-400">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>(31) 3820-1800</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-stone-500 text-[11.5px]">
            © 2025 Discover SGRA. Todos os direitos reservados.
          </p>
          <p className="text-stone-500 text-xs flex items-center gap-1.5">
            Feito com <Heart className="h-3 w-3 text-red-400 fill-red-400" /> para São Gonçalo do Rio Abaixo
          </p>
        </div>
      </div>
    </footer>
  );
}
