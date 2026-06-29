import { Attraction } from "@/types";

export const attractions: Attraction[] = [
  {
    id: "igreja-matriz-sao-goncalo-amarante",
    title: "Igreja Matriz de São Gonçalo do Amarante",
    shortDescription:
      "A igreja matriz da cidade, erguida em 1733 no ponto mais alto da Praça da Matriz.",
    description:
      "Construída em 1733 em terreno doado por José de Holanda Braga, a Igreja Matriz de São Gonçalo do Amarante é o principal marco histórico e religioso do município. Implantada estrategicamente no ponto mais elevado da região, tornou-se referência da vida espiritual da cidade desde a elevação à condição de paróquia independente, em 1850. Seu retábulo-mor é atribuído ao escultor português Francisco Vieira Servas, com elementos decorativos que transitam entre o rococó e o neoclássico. No adro, o imponente Cruzeiro de 1871 — talhado em peça única de madeira de braúna e considerado um dos maiores de Minas Gerais — completa o conjunto tombado pela Prefeitura Municipal em 2008.",
    category: "heritage",
    location: "Praça da Matriz, Centro, São Gonçalo do Rio Abaixo",
    rating: 4.8,
    reviewCount: 96,
    image: "/images/attractions/igreja-matriz-2.jpg",
    images: [
      "/images/attractions/igreja-matriz-2.jpg",
      "/images/attractions/igreja-matriz-1.jpg",
      "/images/attractions/igreja-matriz-3.jpg",
      "/images/attractions/igreja-matriz-interior.jpg",
    ],
    highlights: [
      "Construção original de 1733",
      "Retábulo atribuído a Francisco Vieira Servas",
      "Cruzeiro de 1871 em peça única de braúna",
      "Tombada pela Prefeitura Municipal em 2008",
      "Localizada na Praça da Matriz, coração da cidade",
    ],
    visitingInfo: {
      hours: "Aberta para visitação e missas — consulte horários da Paróquia São Gonçalo",
      price: "Entrada gratuita",
      duration: "30–45 minutos",
      bestTime: "Manhãs e durante celebrações religiosas",
    },
    coordinates: { lat: -19.8312, lng: -43.3451 },
    tags: ["igreja", "patrimônio", "história", "fé"],
    featured: true,
  },
  {
    id: "igreja-nossa-senhora-rosario",
    title: "Igreja de Nossa Senhora do Rosário",
    shortDescription:
      "Templo erguido pela comunidade negra no início do século XVIII, símbolo de fé e resistência.",
    description:
      "Erguida pela população escravizada nas primeiras décadas do século XVIII, a Igreja de Nossa Senhora do Rosário ocupa uma cota mais baixa que a Matriz — uma posição que, à época, refletia a hierarquia social do período colonial. Apesar da simplicidade construtiva, o templo guarda três retábulos de talha no estilo joanino: o altar-mor dedicado a Nossa Senhora do Rosário e os altares laterais a Nossa Senhora das Mercês e a São Benedito. Mais do que um edifício religioso, a igreja representa a identidade devocional e a história da população afrodescendente de São Gonçalo do Rio Abaixo. Foi tombada pela Prefeitura Municipal em 2006.",
    category: "heritage",
    location: "Centro, São Gonçalo do Rio Abaixo",
    rating: 4.7,
    reviewCount: 58,
    image: "/images/attractions/igreja-rosario-1.jpg",
    images: ["/images/attractions/igreja-rosario-1.jpg"],
    highlights: [
      "Construção do início do século XVIII",
      "Erguida pela comunidade negra local",
      "Três retábulos em estilo joanino",
      "Tombada pela Prefeitura Municipal em 2006",
    ],
    visitingInfo: {
      hours: "Consulte horários de missas da Paróquia São Gonçalo",
      price: "Entrada gratuita",
      duration: "20–30 minutos",
      bestTime: "Manhãs e celebrações da comunidade",
    },
    coordinates: { lat: -19.8305, lng: -43.3442 },
    tags: ["igreja", "patrimônio", "história", "memória afro-brasileira"],
    featured: true,
  },
  {
    id: "igreja-santa-efigenia",
    title: "Igreja de Santa Efigênia",
    shortDescription:
      "Conhecida como \"Igreja do Padre João\", no alto de uma colina com vista da cidade.",
    description:
      "Popularmente chamada de \"Igreja do Padre João\", a capela de Santa Efigênia foi construída por trabalho voluntário da comunidade a pedido do próprio Padre João José Marques Guimarães, que desejava um templo para celebrações após décadas de sacerdócio em São Gonçalo. Inaugurada em 1946, sua arquitetura faz referência à Igreja do Rosário, com torre única e um pequeno adro no alto de uma colina, alcançado por uma rampa de acesso acentuada. Do terreiro da igreja, o visitante tem uma das vistas mais bonitas do centro da cidade. O templo foi tombado pela Prefeitura Municipal em 2008 como manifestação da memória coletiva local.",
    category: "heritage",
    location: "Alto da colina, São Gonçalo do Rio Abaixo",
    rating: 4.7,
    reviewCount: 64,
    image: "/images/attractions/igreja-santa-efigenia-1.jpg",
    images: ["/images/attractions/igreja-santa-efigenia-1.jpg"],
    highlights: [
      "Construída por trabalho voluntário da comunidade",
      "Inaugurada em 1946 a pedido do Padre João",
      "Vista panorâmica do centro histórico",
      "Tombada pela Prefeitura Municipal em 2008",
    ],
    visitingInfo: {
      hours: "Consulte horários de missas da Paróquia São Gonçalo",
      price: "Entrada gratuita",
      duration: "20–40 minutos (inclui subida da rampa de acesso)",
      bestTime: "Fim de tarde, para o pôr do sol sobre a cidade",
    },
    coordinates: { lat: -19.8298, lng: -43.3469 },
    tags: ["igreja", "patrimônio", "mirante", "Padre João"],
    featured: true,
  },
  {
    id: "estatua-padre-joao",
    title: "Estátua do Padre João",
    shortDescription:
      "Memorial de 20 metros em homenagem ao padre que marcou a história e a fé da cidade.",
    description:
      "Erguido no bairro Patrimônio, em um dos pontos mais altos da cidade, o memorial de 20 metros homenageia o Cônego João José Marques Guimarães — o Padre João —, que assumiu a Paróquia de São Gonçalo do Rio Abaixo em 1924 e se dedicou à comunidade por cerca de cinco décadas, até seu falecimento em 1984. Esculpida em concreto pelo artista Genésio Gomes Moura, conhecido como \"Ceará\", a estátua tornou-se um destino de peregrinação e devoção popular, reunindo moradores e visitantes que guardam viva a memória do padre. O monumento também é um símbolo da identidade são-gonçalense, lembrado até no processo histórico de emancipação política do município, em 1962.",
    category: "history",
    location: "Bairro Patrimônio, São Gonçalo do Rio Abaixo",
    rating: 4.8,
    reviewCount: 73,
    image: "/images/attractions/estatua-padre-joao-1.jpg",
    images: [
      "/images/attractions/estatua-padre-joao-1.jpg",
      "/images/attractions/estatua-padre-joao-2.jpg",
    ],
    highlights: [
      "Monumento de 20 metros de altura",
      "Homenagem ao Padre João, pároco por cerca de 50 anos",
      "Esculpido pelo artista Genésio Gomes Moura (\"Ceará\")",
      "Importante destino de devoção popular",
      "Vista elevada sobre a cidade",
    ],
    visitingInfo: {
      hours: "Acesso livre, recomendado durante o dia",
      price: "Entrada gratuita",
      duration: "20–30 minutos",
      bestTime: "Manhã ou fim de tarde",
    },
    coordinates: { lat: -19.8276, lng: -43.3438 },
    tags: ["memorial", "fé", "história", "Padre João"],
    featured: true,
  },
  {
    id: "estacao-ambiental-peti",
    title: "Estação Ambiental de Peti",
    shortDescription:
      "Mais de 500 hectares de mata preservada, represa histórica e memória industrial.",
    description:
      "Originalmente conhecida como \"Bom Retiro\", a área hoje chamada de Peti recebeu esse nome a partir da cachoeira local. No início do século XX, a região foi transformada pela construção de uma usina hidrelétrica destinada a abastecer a mineração de ouro na época, passando depois por usos têxteis até ser adquirida pelo governo de Minas Gerais e operada pela Cemig. Hoje, a Estação Ambiental de Peti reúne mais de 500 hectares de mata preservada, com represa, trilhas, programas de recuperação de matas nativas e ciliares, manejo e reintrodução de fauna silvestre, educação ambiental e pesquisa científica — incluindo uma trilha adaptada para pessoas com deficiência visual. Em 2026, a Estação foi oficialmente tombada como patrimônio cultural do município, reconhecendo a união entre conservação ambiental e memória histórica.",
    category: "nature",
    location: "Distrito de Peti, São Gonçalo do Rio Abaixo",
    rating: 4.9,
    reviewCount: 112,
    image: "/images/attractions/estacao-peti-2.jpg",
    images: [
      "/images/attractions/estacao-peti-2.jpg",
      "/images/attractions/estacao-peti-1.jpg",
      "/images/attractions/estacao-peti-3.jpg",
      "/images/attractions/estacao-peti-4.jpg",
    ],
    highlights: [
      "Mais de 500 hectares de área preservada",
      "Represa e cachoeira históricas",
      "Edificação da antiga usina hidrelétrica, do início do século XX",
      "Trilha acessível para deficientes visuais",
      "Tombada como patrimônio cultural municipal em 2026",
    ],
    visitingInfo: {
      hours: "Consulte agendamento de visitas com a administração da Estação",
      price: "Consultar valores e condições de visitação",
      duration: "2–4 horas",
      bestTime: "Período de seca (abril a setembro)",
    },
    coordinates: { lat: -19.8534, lng: -43.3897 },
    tags: ["natureza", "represa", "trilha", "patrimônio ambiental"],
    featured: true,
  },
  {
    id: "centro-cultural-sgra",
    title: "Centro Cultural São Gonçalo do Rio Abaixo",
    shortDescription:
      "Espaço municipal dedicado às exposições, à memória e às manifestações artísticas locais.",
    description:
      "O Centro Cultural de São Gonçalo do Rio Abaixo é o espaço dedicado a preservar e divulgar as manifestações artísticas e a memória do município. Com exposições fotográficas e programação cultural variável, o local funciona como ponto de encontro entre moradores, artistas e visitantes interessados em conhecer um pouco mais da identidade são-gonçalense além dos monumentos históricos.",
    category: "culture",
    location: "Centro, São Gonçalo do Rio Abaixo",
    rating: 4.5,
    reviewCount: 31,
    image: "/images/attractions/centro-cultural-1.jpg",
    images: ["/images/attractions/centro-cultural-1.jpg"],
    highlights: [
      "Exposições sobre a cultura e a memória local",
      "Programação cultural variável",
      "Localização central, próxima à Praça da Matriz",
    ],
    visitingInfo: {
      hours: "Consulte horário de funcionamento com a Prefeitura Municipal",
      price: "Entrada gratuita",
      duration: "30–45 minutos",
      bestTime: "Dias de exposição ou programação cultural",
    },
    coordinates: { lat: -19.8309, lng: -43.3456 },
    tags: ["cultura", "exposição", "memória"],
    featured: false,
  },
  {
    id: "fazenda-brejauba-solar-pena",
    title: "Fazenda Brejaúba (Solar dos Pena)",
    shortDescription:
      "Sede rural erguida em 1792, ligada à história da família do presidente Afonso Pena.",
    description:
      "Também conhecida como Solar dos Pena, a Fazenda Brejaúba é uma das construções rurais mais antigas do município, erguida em 1792 e historicamente associada à família do presidente Afonso Pena. Cercada por mata preservada, a sede guarda características da arquitetura rural mineira do período colonial. Por se tratar de propriedade com acesso restrito, a visita costuma se dar de forma externa, apreciando o conjunto arquitetônico em meio à paisagem natural do entorno.",
    category: "heritage",
    location: "Zona Rural, São Gonçalo do Rio Abaixo",
    rating: 4.4,
    reviewCount: 19,
    image: "/images/attractions/fazenda-brejauba-1.jpg",
    images: ["/images/attractions/fazenda-brejauba-1.jpg"],
    highlights: [
      "Sede rural erguida em 1792",
      "Ligação histórica com a família do presidente Afonso Pena",
      "Arquitetura rural colonial preservada",
      "Entorno de mata nativa",
    ],
    visitingInfo: {
      hours: "Visitação externa — consulte condições de acesso",
      price: "Sob consulta",
      duration: "30–45 minutos",
      bestTime: "Período diurno",
    },
    coordinates: { lat: -19.8421, lng: -43.3612 },
    tags: ["fazenda", "patrimônio", "história rural"],
    featured: false,
  },
  {
    id: "gastronomia-mineira-local",
    title: "Sabores da Tradição Mineira",
    shortDescription:
      "Padarias, confeitarias e cozinhas de família mantêm viva a culinária mineira na cidade.",
    description:
      "Em São Gonçalo do Rio Abaixo, a tradição gastronômica mineira se mantém viva em padarias, confeitarias e cozinhas de família espalhadas pelo centro da cidade. Pão de queijo, pastéis, empadas e doces caseiros fazem parte do dia a dia local e das celebrações religiosas e populares ao longo do ano — uma forma simples e acolhedora de conhecer um pouco mais da cultura da região através da mesa.",
    category: "gastronomy",
    location: "Centro, São Gonçalo do Rio Abaixo",
    rating: 4.6,
    reviewCount: 47,
    image: "/images/attractions/gastronomia-1.jpg",
    images: ["/images/attractions/gastronomia-1.jpg"],
    highlights: [
      "Pão de queijo e doces caseiros tradicionais",
      "Padarias e confeitarias de família",
      "Presença marcante em festas religiosas e populares",
    ],
    visitingInfo: {
      hours: "Consulte horário de funcionamento de cada estabelecimento",
      price: "Variável",
      duration: "30–60 minutos",
      bestTime: "Manhã, com pão fresco",
    },
    coordinates: { lat: -19.8307, lng: -43.3448 },
    tags: ["gastronomia", "comida mineira", "tradição"],
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
