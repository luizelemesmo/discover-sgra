import { Attraction } from "@/types";

export const attractions: Attraction[] = [
  {
    id: "parque-estadual-rio-doce",
    title: "Parque Estadual do Rio Doce",
    shortDescription:
      "Maior reserva de Mata Atlântica do estado, com trilhas, lagos e rica biodiversidade.",
    description:
      "O Parque Estadual do Rio Doce é uma das maiores e mais importantes reservas de Mata Atlântica de Minas Gerais. Com mais de 35.000 hectares de floresta preservada, o parque abriga uma biodiversidade extraordinária, incluindo espécies raras de flora e fauna. Suas trilhas percorrem diferentes ecossistemas, revelando cachoeiras escondidas, lagos cristalinos e a beleza intocada da natureza mineira.",
    category: "nature",
    location: "Zona Rural, São Gonçalo do Rio Abaixo",
    rating: 4.8,
    reviewCount: 342,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80",
    ],
    highlights: [
      "Maior reserva de Mata Atlântica de MG",
      "Trilhas para todos os níveis",
      "Observação de aves raras",
      "Lagos e cachoeiras preservadas",
      "Centro de visitantes interativo",
    ],
    visitingInfo: {
      hours: "Ter–Dom, 08h–17h",
      price: "R$ 15 (adulto) | R$ 7,50 (meia)",
      duration: "3–6 horas",
      bestTime: "Abr–Out (estação seca)",
    },
    coordinates: { lat: -19.8217, lng: -43.0312 },
    tags: ["natureza", "trilhas", "biodiversidade", "mata atlântica"],
    featured: true,
  },
  {
    id: "museu-historico-sgra",
    title: "Museu Histórico Municipal",
    shortDescription:
      "Memória viva da história de São Gonçalo, com acervo fotográfico e cultural único.",
    description:
      "O Museu Histórico Municipal de São Gonçalo do Rio Abaixo preserva e conta a história da cidade desde seus primórdios. Com um rico acervo de fotografias históricas, documentos, artefatos culturais e peças arqueológicas, o museu mergulha os visitantes na fascinante trajetória desta cidade mineira. Exposições temporárias e permanentes revelam os costumes, a economia e a vida social ao longo dos séculos.",
    category: "history",
    location: "Centro Histórico, São Gonçalo do Rio Abaixo",
    rating: 4.6,
    reviewCount: 189,
    image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&q=80",
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    ],
    highlights: [
      "Acervo fotográfico do século XIX",
      "Exposições interativas",
      "Guias especializados em história local",
      "Biblioteca de referência histórica",
    ],
    visitingInfo: {
      hours: "Seg–Sex, 09h–17h | Sáb, 09h–13h",
      price: "Entrada gratuita",
      duration: "1–2 horas",
      bestTime: "Qualquer época",
    },
    coordinates: { lat: -19.8255, lng: -43.0198 },
    tags: ["história", "cultura", "museu", "patrimônio"],
    featured: true,
  },
  {
    id: "cachoeira-veu-noiva",
    title: "Cachoeira Véu de Noiva",
    shortDescription:
      "Queda d'água de 45 metros em meio à Mata Atlântica, ideal para banho e fotografia.",
    description:
      "A Cachoeira Véu de Noiva é uma das mais belas da região, com uma impressionante queda de 45 metros que forma um véu de névoa ao tocar as pedras abaixo. Cercada por exuberante Mata Atlântica, o local oferece uma experiência de imersão na natureza singular. O acesso é feito por uma trilha de nível moderado de aproximadamente 2 km, que revela paisagens deslumbrantes ao longo do percurso.",
    category: "adventure",
    location: "Distrito de Carrapato, São Gonçalo do Rio Abaixo",
    rating: 4.9,
    reviewCount: 521,
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
    ],
    highlights: [
      "Queda de 45 metros",
      "Piscina natural para banho",
      "Trilha interpretativa",
      "Mirante panorâmico",
    ],
    visitingInfo: {
      hours: "Aberto todos os dias, 07h–18h",
      price: "R$ 10 (estacionamento)",
      duration: "2–4 horas",
      bestTime: "Nov–Mar (cheia) | Abr–Out (banho)",
    },
    coordinates: { lat: -19.8341, lng: -43.0487 },
    tags: ["cachoeira", "aventura", "natureza", "trilha"],
    featured: true,
  },
  {
    id: "fazenda-historica-pedra-branca",
    title: "Fazenda Histórica Pedra Branca",
    shortDescription:
      "Sede centenária tombada como patrimônio, com turismo rural e vivência cultural.",
    description:
      "A Fazenda Histórica Pedra Branca é um testemunho vivo da história rural mineira. Com sua arquitetura colonial preservada, a sede da fazenda data do século XVIII e guarda histórias fascinantes sobre o período cafeeiro e a vida rural de Minas Gerais. O visitante pode vivenciar atividades rurais tradicionais, apreciar a gastronomia típica e explorar os amplos pastos e matas da propriedade.",
    category: "heritage",
    location: "Estrada Real, São Gonçalo do Rio Abaixo",
    rating: 4.7,
    reviewCount: 234,
    image: "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=800&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80",
      "https://images.unsplash.com/photo-1568092806457-5ba651e4e346?w=800&q=80",
    ],
    highlights: [
      "Arquitetura colonial século XVIII",
      "Patrimônio histórico tombado",
      "Vivência rural autêntica",
      "Gastronomia típica mineira",
    ],
    visitingInfo: {
      hours: "Sáb–Dom e feriados, 09h–17h",
      price: "R$ 25 (adulto) | R$ 12 (criança)",
      duration: "2–4 horas",
      bestTime: "Fins de semana",
    },
    coordinates: { lat: -19.8089, lng: -43.0421 },
    tags: ["patrimônio", "história", "fazenda", "cultura"],
    featured: false,
  },
  {
    id: "mirante-pedra-redonda",
    title: "Mirante da Pedra Redonda",
    shortDescription:
      "Ponto panorâmico com vista de 360° do Vale do Rio Doce e da Serra do Espinhaço.",
    description:
      "O Mirante da Pedra Redonda é considerado um dos pontos mais belos da região do Vale do Rio Doce. De seu cume a 1.200 metros de altitude, o visitante contempla uma vista espetacular de 360°, com o Rio Doce serpenteando entre as serras, a exuberante vegetação da Mata Atlântica e, em dias claros, a imponente Serra do Espinhaço ao fundo. O local é especialmente mágico ao amanhecer e ao pôr do sol.",
    category: "nature",
    location: "Serra da Piedade, São Gonçalo do Rio Abaixo",
    rating: 4.8,
    reviewCount: 412,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80",
    ],
    highlights: [
      "Vista panorâmica 360°",
      "Altitude de 1.200 metros",
      "Pôr do sol espetacular",
      "Acampamento permitido",
    ],
    visitingInfo: {
      hours: "Acesso 24h (trilha diurna recomendada)",
      price: "Gratuito",
      duration: "3–5 horas (ida e volta)",
      bestTime: "Mai–Set (céu limpo)",
    },
    coordinates: { lat: -19.7986, lng: -43.0156 },
    tags: ["mirante", "vista", "trekking", "fotografia"],
    featured: true,
  },
  {
    id: "restaurante-sabor-mineiro",
    title: "Restaurante Sabor Mineiro",
    shortDescription:
      "Gastronomia típica mineira com receitas centenárias em ambiente rústico e acolhedor.",
    description:
      "O Restaurante Sabor Mineiro é a referência gastronômica de São Gonçalo do Rio Abaixo. Fundado há mais de 40 anos pela família Pereira, o restaurante mantém vivas as tradições culinárias mineiras com receitas passadas de geração em geração. O feijão tropeiro, o frango ao molho pardo, o tutu de feijão e as deliciosas sobremesas como o doce de leite artesanal são apenas alguns dos pratos que encantam visitantes de todo o Brasil.",
    category: "gastronomy",
    location: "Rua Principal, Centro, São Gonçalo do Rio Abaixo",
    rating: 4.9,
    reviewCount: 678,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
    ],
    highlights: [
      "Receitas centenárias da família",
      "Feijão tropeiro premiado",
      "Ambiente rústico e acolhedor",
      "Queijo artesanal da região",
    ],
    visitingInfo: {
      hours: "Ter–Dom, 11h30–15h30 | Sex–Sáb 18h–22h",
      price: "Buffet: R$ 45pp | À la carte: R$ 35–120",
      duration: "1–2 horas",
      bestTime: "Fins de semana (reservar com antecedência)",
    },
    coordinates: { lat: -19.8243, lng: -43.0213 },
    tags: ["gastronomia", "comida mineira", "restaurante", "cultura"],
    featured: false,
  },
  {
    id: "igreja-nossa-senhora-conceicao",
    title: "Igreja Nossa Senhora da Conceição",
    shortDescription:
      "Igreja colonial do século XVIII, Patrimônio histórico com arte sacra excepcional.",
    description:
      "A Igreja Nossa Senhora da Conceição é o símbolo histórico e espiritual de São Gonçalo do Rio Abaixo. Construída no século XVIII em estilo barroco colonial, a igreja guarda em seu interior um extraordinário acervo de arte sacra, com imagens entalhadas em madeira, pinturas a óleo e altares dourados. Tombada pelo IEPHA como patrimônio histórico, a church é um dos mais belos exemplares da arquitetura religiosa mineira da região.",
    category: "heritage",
    location: "Praça Central, São Gonçalo do Rio Abaixo",
    rating: 4.7,
    reviewCount: 298,
    image: "https://images.unsplash.com/photo-1548625149-720094070607?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1548625149-720094070607?w=800&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      "https://images.unsplash.com/photo-1563461660947-507ef2e693c3?w=800&q=80",
    ],
    highlights: [
      "Arquitetura barroca do século XVIII",
      "Arte sacra preservada",
      "Patrimônio histórico tombado",
      "Visitação com guias especializados",
    ],
    visitingInfo: {
      hours: "Seg–Sex 09h–11h e 14h–17h | Dom após missas",
      price: "Contribuição voluntária",
      duration: "30–60 minutos",
      bestTime: "Manhã (melhor iluminação)",
    },
    coordinates: { lat: -19.8261, lng: -43.0201 },
    tags: ["igreja", "barroco", "patrimônio", "arte sacra"],
    featured: false,
  },
  {
    id: "trilha-circuito-das-pedras",
    title: "Circuito das Pedras",
    shortDescription:
      "Circuito de trilhas entre formações rochosas únicas, ideal para escalada e trekking.",
    description:
      "O Circuito das Pedras é um dos roteiros de trekking mais fascinantes de Minas Gerais. Percorrendo um conjunto de formações rochosas milenares moldadas pela erosão, a trilha oferece desafios para todos os níveis. Anfiteatros naturais de pedra, cavernas rasas e vistas panorâmicas surpreendentes fazem parte do roteiro. Guias locais especializados conduzem grupos com segurança e compartilham o conhecimento sobre a geologia e a história da região.",
    category: "adventure",
    location: "Serro das Pedras, São Gonçalo do Rio Abaixo",
    rating: 4.6,
    reviewCount: 187,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
      "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800&q=80",
    ],
    highlights: [
      "Formações rochosas milenares",
      "Trilhas de todos os níveis",
      "Guias locais especializados",
      "Possibilidade de escalada",
    ],
    visitingInfo: {
      hours: "Sáb–Dom, 07h–16h (com guia obrigatório)",
      price: "R$ 35 (adulto) | R$ 20 (criança)",
      duration: "4–6 horas",
      bestTime: "Abr–Set (tempo seco)",
    },
    coordinates: { lat: -19.7934, lng: -43.0534 },
    tags: ["trilha", "escalada", "aventura", "geologia"],
    featured: false,
  },
];

export const getAttractionById = (id: string): Attraction | undefined =>
  attractions.find((a) => a.id === id);

export const getAttractionsByCategory = (
  category: Attraction["category"]
): Attraction[] => attractions.filter((a) => a.category === category);

export const getFeaturedAttractions = (): Attraction[] =>
  attractions.filter((a) => a.featured);
