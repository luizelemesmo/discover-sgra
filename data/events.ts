import { Event } from "@/types";

export const events: Event[] = [
  {
    id: "festa-sao-goncalo-2025",
    title: "Festa de São Gonçalo",
    description:
      "A maior celebração da cidade honra o padroeiro com missas solenes, procissões iluminadas, shows de música sertaneja e forró, barracas de comida típica e fogos de artifício. Um evento que reúne moradores e turistas de toda a região em uma semana de pura alegria e fé.",
    date: "2025-07-10",
    endDate: "2025-07-17",
    time: "17h – 01h",
    location: "Praça Central e Parque de Exposições",
    category: "festival",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    price: "Entrada gratuita",
    featured: true,
    tags: ["festival", "religioso", "tradição", "música"],
  },
  {
    id: "festival-gastronomico-2025",
    title: "Festival Gastronômico do Vale",
    description:
      "O Festival Gastronômico do Vale reúne os melhores restaurantes, chefs e produtores artesanais da região em um evento dedicado à culinária mineira. Degustações, aulas de culinária com chefs renomados, concurso do melhor feijão tropeiro e feira de produtos artesanais compõem esta celebração da gastronomia local.",
    date: "2025-08-22",
    endDate: "2025-08-24",
    time: "11h – 22h",
    location: "Parque Municipal da Cidade",
    category: "gastronomy",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    price: "R$ 20 (entrada geral)",
    featured: true,
    tags: ["gastronomia", "culinária", "chef", "artesanal"],
  },
  {
    id: "mostra-arte-cultura-2025",
    title: "Mostra de Arte e Cultura",
    description:
      "A Mostra de Arte e Cultura de São Gonçalo do Rio Abaixo apresenta o talento local em uma semana de exposições, performances, teatro de rua, cinema ao ar livre e workshops. Artistas plásticos, músicos, fotógrafos e artesãos da cidade e da região transformam o centro histórico em um grande palco cultural.",
    date: "2025-09-05",
    endDate: "2025-09-12",
    time: "10h – 22h",
    location: "Centro Histórico e Casa de Cultura",
    category: "culture",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
    price: "Gratuito",
    featured: true,
    tags: ["arte", "cultura", "exposição", "teatro"],
  },
  {
    id: "trilha-noturna-lua-cheia",
    title: "Trilha Noturna sob a Lua Cheia",
    description:
      "Uma experiência única de trekking noturno guiado pelo Parque Estadual do Rio Doce sob a luz da lua cheia. O passeio revela a vida noturna da floresta, com observação de fauna, estrelas e a magia incomparável da natureza iluminada pela lua. Inclui lanche especial e café ao final.",
    date: "2025-07-23",
    time: "19h30 – 23h",
    location: "Parque Estadual do Rio Doce",
    category: "sports",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
    price: "R$ 45 por pessoa",
    featured: false,
    tags: ["trilha", "noturno", "natureza", "aventura"],
  },
  {
    id: "semana-patrimonio-2025",
    title: "Semana do Patrimônio Cultural",
    description:
      "Em comemoração ao Dia do Patrimônio Cultural, São Gonçalo do Rio Abaixo abre as portas de seus principais bens históricos e culturais com visitas guiadas gratuitas. A programação inclui palestra sobre a história da cidade, apresentações de folclore mineiro e lançamento de publicação sobre o patrimônio local.",
    date: "2025-10-17",
    endDate: "2025-10-24",
    time: "09h – 17h",
    location: "Pontos históricos da cidade",
    category: "heritage",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    price: "Gratuito",
    featured: false,
    tags: ["patrimônio", "história", "cultura", "educação"],
  },
  {
    id: "concert-musica-classica",
    title: "Concerto ao Ar Livre — Música das Gerais",
    description:
      "A Orquestra Filarmônica de Minas Gerais apresenta um concerto especial ao ar livre com obras inspiradas na cultura e paisagens mineiras. O evento acontece no Parque Municipal com o pôr do sol como cenário e é aberto ao público com entrada gratuita. Leve sua cadeira ou manta e desfrute de uma noite inesquecível.",
    date: "2025-08-09",
    time: "18h – 21h",
    location: "Parque Municipal — Anfiteatro Natural",
    category: "music",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80",
    price: "Gratuito",
    featured: false,
    tags: ["música", "orquestra", "ao ar livre", "cultura"],
  },
];

export const getUpcomingEvents = (): Event[] => {
  const today = new Date();
  return events
    .filter((e) => new Date(e.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export const getFeaturedEvents = (): Event[] => events.filter((e) => e.featured);
