import { Event } from "@/types";

export const events: Event[] = [
  {
    id: "festa-sao-goncalo-amarante",
    title: "Festa de São Gonçalo do Amarante",
    description:
      "Celebração em homenagem ao padroeiro da cidade, com missas solenes, procissão e programação comunitária na Praça da Matriz, reunindo moradores e visitantes em torno da fé e das tradições locais.",
    date: "2026-09-10",
    endDate: "2026-09-13",
    time: "Consulte programação da Paróquia",
    location: "Praça da Matriz, Centro",
    category: "festival",
    image: "/images/attractions/igreja-matriz-1.jpg",
    price: "Entrada gratuita",
    featured: true,
    tags: ["festival", "religioso", "tradição", "padroeiro"],
  },
  {
    id: "semana-patrimonio-cultural",
    title: "Semana do Patrimônio Cultural",
    description:
      "Programação dedicada aos bens tombados do município, com visitas guiadas às igrejas históricas e à Estação Ambiental de Peti, além de atividades educativas sobre a memória de São Gonçalo do Rio Abaixo.",
    date: "2026-08-15",
    endDate: "2026-08-21",
    time: "09h – 17h",
    location: "Igrejas históricas e Estação Ambiental de Peti",
    category: "heritage",
    image: "/images/attractions/igreja-rosario-1.jpg",
    price: "Gratuito",
    featured: true,
    tags: ["patrimônio", "história", "educação", "visita guiada"],
  },
  {
    id: "encontro-cultural-centro-cultural",
    title: "Encontro Cultural São Gonçalo",
    description:
      "Mostra de artes, fotografia e tradições locais no Centro Cultural, valorizando artistas e a memória do município em um fim de semana de exposições e atividades abertas ao público.",
    date: "2026-07-18",
    endDate: "2026-07-19",
    time: "10h – 18h",
    location: "Centro Cultural São Gonçalo do Rio Abaixo",
    category: "culture",
    image: "/images/attractions/centro-cultural-1.jpg",
    price: "Gratuito",
    featured: true,
    tags: ["cultura", "exposição", "arte"],
  },
  {
    id: "romaria-memorial-padre-joao",
    title: "Romaria ao Memorial do Padre João",
    description:
      "Caminhada devocional até o memorial em homenagem ao Padre João, reunindo fiéis que mantêm viva a memória e a fé ligadas a uma das figuras mais marcantes da história da cidade.",
    date: "2026-10-04",
    time: "07h – 12h",
    location: "Bairro Patrimônio",
    category: "heritage",
    image: "/images/attractions/estatua-padre-joao-1.jpg",
    price: "Entrada gratuita",
    featured: false,
    tags: ["fé", "romaria", "Padre João", "tradição"],
  },
  {
    id: "trilha-ecologica-peti",
    title: "Trilha Ecológica na Estação Ambiental de Peti",
    description:
      "Caminhada guiada pelas trilhas da Estação Ambiental de Peti, com atividades de educação ambiental e observação da mata preservada e da represa histórica da antiga usina hidrelétrica.",
    date: "2026-09-26",
    time: "08h – 12h",
    location: "Estação Ambiental de Peti",
    category: "sports",
    image: "/images/attractions/estacao-peti-1.jpg",
    price: "Consultar valores e agendamento",
    featured: false,
    tags: ["natureza", "trilha", "educação ambiental"],
  },
  {
    id: "festival-sabores-de-minas",
    title: "Festival Sabores de Minas",
    description:
      "Encontro gastronômico com produtores e cozinheiras locais, valorizando o pão de queijo, os doces caseiros e outras receitas da tradição mineira presentes no dia a dia de São Gonçalo do Rio Abaixo.",
    date: "2026-11-14",
    time: "10h – 18h",
    location: "Centro de São Gonçalo do Rio Abaixo",
    category: "gastronomy",
    image: "/images/attractions/gastronomia-1.jpg",
    price: "Entrada gratuita",
    featured: false,
    tags: ["gastronomia", "tradição", "comida mineira"],
  },
];

export const getUpcomingEvents = (): Event[] => {
  const today = new Date();
  return events
    .filter((e) => new Date(e.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export const getFeaturedEvents = (): Event[] => events.filter((e) => e.featured);
