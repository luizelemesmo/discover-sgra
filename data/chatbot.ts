export interface BotResponse {
  trigger: string[];
  response: string;
  suggestions?: string[];
  attractions?: string[];
}

export const suggestedPrompts = [
  "Quero conhecer a história da cidade",
  "Sugira atrações naturais para visitar",
  "O que fazer neste fim de semana?",
  "Onde comer comida mineira típica?",
  "Há trilhas para iniciantes?",
  "Quais eventos estão acontecendo?",
  "Monte um roteiro de 2 dias para mim",
  "Quero ver cachoeiras na região",
];

export const botResponses: BotResponse[] = [
  {
    trigger: ["história", "histórica", "museu", "colonial", "patrimônio"],
    response:
      "São Gonçalo do Rio Abaixo tem uma história fascinante! 🏛️\n\nA cidade foi fundada no século XVIII e guarda um rico acervo histórico. Recomendo:\n\n• **Igreja Nossa Senhora da Conceição** — Arquitetura barroca colonial deslumbrante\n• **Museu Histórico Municipal** — Fotografias e artefatos do século XIX\n• **Fazenda Histórica Pedra Branca** — Sede colonial tombada como patrimônio\n\nA **Rota Histórica** conecta todos esses pontos em um dia completo de imersão cultural. Quer que eu monte um itinerário detalhado?",
    suggestions: ["Monte a rota histórica completa", "Horários do museu", "Como chegar à fazenda histórica"],
    attractions: ["museu-historico-sgra", "igreja-nossa-senhora-conceicao", "fazenda-historica-pedra-branca"],
  },
  {
    trigger: ["natureza", "natural", "parque", "trilha", "mata", "verde", "floresta"],
    response:
      "A natureza de São Gonçalo do Rio Abaixo é simplesmente espetacular! 🌿\n\nTemos opções incríveis:\n\n• **Parque Estadual do Rio Doce** — Maior reserva de Mata Atlântica do estado, com trilhas para todos os níveis\n• **Cachoeira Véu de Noiva** — Queda de 45 metros com piscina natural\n• **Mirante da Pedra Redonda** — Vista panorâmica de 360° do Vale do Rio Doce\n• **Circuito das Pedras** — Trilha entre formações rochosas milenares\n\nQual tipo de experiência você prefere? Aventura intensa, contemplação tranquila ou algo intermediário?",
    suggestions: ["Trilhas para iniciantes", "Quero ver cachoeiras", "Melhor época para visitar"],
    attractions: ["parque-estadual-rio-doce", "cachoeira-veu-noiva", "mirante-pedra-redonda"],
  },
  {
    trigger: ["cachoeira", "queda", "água", "banho", "nadar"],
    response:
      "Ótima escolha! A **Cachoeira Véu de Noiva** é um dos maiores tesouros naturais da região! 💧\n\n✨ **Destaques:**\n• Queda impressionante de **45 metros**\n• Piscina natural para banho refrescante\n• Trilha de acesso de ~2km entre a Mata Atlântica\n• Mirante panorâmico para fotografias\n\n📍 **Como chegar:** Distrito de Carrapato, a 12km do centro\n🕐 **Horário:** Todos os dias, 07h–18h\n💰 **Valor:** R$ 10 (estacionamento)\n\n**Dica:** Vá nos meses de novembro a março quando a cachoeira está em plena vazão!",
    suggestions: ["Outras cachoeiras na região", "Monte a rota da natureza", "Há guias disponíveis?"],
    attractions: ["cachoeira-veu-noiva", "parque-estadual-rio-doce"],
  },
  {
    trigger: ["fim de semana", "final de semana", "sábado", "domingo", "2 dias", "dois dias"],
    response:
      "Montei o roteiro perfeito de fim de semana para você! 🗓️\n\n**Sábado:**\n🌿 **Manhã** — Trilha no Parque Estadual do Rio Doce\n💧 **Tarde** — Banho na Cachoeira Véu de Noiva\n🍽️ **Noite** — Jantar no Restaurante Sabor Mineiro\n\n**Domingo:**\n🏛️ **Manhã** — Igreja Nossa Senhora da Conceição + Museu Histórico\n🛒 **Almoço** — Buffet mineiro + Mercado Municipal\n🌅 **Tarde** — Pôr do sol no Mirante da Pedra Redonda\n\nEste roteiro combina natureza, história e gastronomia de forma equilibrada. Quer mais detalhes sobre alguma parada?",
    suggestions: ["Onde se hospedar?", "Detalhes da trilha", "Reservar mesa no restaurante"],
    attractions: ["parque-estadual-rio-doce", "cachoeira-veu-noiva", "mirante-pedra-redonda"],
  },
  {
    trigger: ["gastronomia", "comida", "comer", "restaurante", "mineira", "culinária", "almoço", "jantar"],
    response:
      "A gastronomia de São Gonçalo do Rio Abaixo é uma celebração da culinária mineira! 🍽️\n\n**Destaque absoluto:**\n🏆 **Restaurante Sabor Mineiro** — Referência da cidade com receitas centenárias. O feijão tropeiro e o frango ao molho pardo são imperdíveis!\n\n**Também recomendo:**\n• **Queijaria Artesanal Serra Verde** — Queijo artesanal premiado\n• **Mercado Municipal** — Produtos locais e petiscos\n• **Cachaçaria Tradição** — Degustação de cachaças artesanais\n\n**Dica especial:** Não deixe de provar o doce de leite artesanal da região — é de outro nível! 😍",
    suggestions: ["Horários do restaurante", "Rota gastronômica completa", "Feira de produtos locais"],
    attractions: ["restaurante-sabor-mineiro"],
  },
  {
    trigger: ["iniciante", "fácil", "família", "criança", "idoso", "acessível"],
    response:
      "Para quem busca experiências tranquilas e acessíveis, temos ótimas opções! 👨‍👩‍👧‍👦\n\n**Ideais para iniciantes e famílias:**\n\n• **Museu Histórico Municipal** — Visita tranquila, sem esforço físico\n• **Igreja Nossa Senhora da Conceição** — Patrimônio barroco, no centro da cidade\n• **Restaurante Sabor Mineiro** — Refeição completa em ambiente familiar\n• **Parque Estadual do Rio Doce** — Trilhas de nível fácil com guias\n\n**Trilha recomendada para iniciantes:**\nA Trilha das Borboletas no Parque Estadual tem apenas 2km e é plana, com paisagens incríveis. Perfeita para crianças e idosos! 🦋",
    suggestions: ["Programação infantil", "Outros pontos no centro", "Parque estadual para famílias"],
    attractions: ["museu-historico-sgra", "parque-estadual-rio-doce", "restaurante-sabor-mineiro"],
  },
  {
    trigger: ["evento", "eventos", "programação", "agenda", "festival", "show"],
    response:
      "A agenda cultural de São Gonçalo do Rio Abaixo está sempre movimentada! 🎉\n\n**Próximos destaques:**\n\n🎊 **Festa de São Gonçalo** (10–17 Jul) — A maior celebração do ano!\n🍽️ **Festival Gastronômico do Vale** (22–24 Ago) — Para os amantes da gastronomia\n🎨 **Mostra de Arte e Cultura** (5–12 Set) — Arte em todos os espaços da cidade\n🌙 **Trilha Noturna sob a Lua Cheia** (23 Jul) — Experiência única!\n🎵 **Concerto Música das Gerais** (9 Ago) — Orquestra ao ar livre gratuita\n\nVisita nossa página de Eventos para a agenda completa!",
    suggestions: ["Detalhes da Festa de São Gonçalo", "Festival gastronômico", "Ingressos dos eventos"],
  },
  {
    trigger: ["roteiro", "itinerário", "planejar", "viagem", "visita"],
    response:
      "Vou te ajudar a planejar a viagem perfeita! ✈️\n\nTemos 4 roteiros temáticos prontos:\n\n🏛️ **Rota Histórica** — 1 dia, fácil\n🌿 **Rota da Natureza** — 1-2 dias, moderado\n🍽️ **Rota Gastronômica** — 1 dia, fácil\n⭐ **Experiência de Fim de Semana** — 2 dias, fácil\n\nMe conta um pouco mais sobre você:\n• Quantos dias tem disponível?\n• Prefere natureza, história ou gastronomia?\n• Vai sozinho, em casal ou com família?\n\nAssim posso personalizar ainda melhor a sua experiência!",
    suggestions: ["Quero o roteiro histórico", "Roteiro de natureza", "Experiência completa de 2 dias"],
  },
];

export const defaultResponse = {
  response:
    "Olá! Sou o **Assistente Turístico de São Gonçalo do Rio Abaixo** 🌿\n\nPosso te ajudar a descobrir:\n• As melhores **atrações naturais** da região\n• O rico **patrimônio histórico e cultural**\n• A deliciosa **gastronomia mineira**\n• **Eventos e festivais** locais\n• **Roteiros personalizados** para sua visita\n\nO que você gostaria de explorar em SGRA?",
  suggestions: [
    "Quero conhecer a história",
    "Atrações naturais",
    "O que fazer neste fim de semana?",
    "Melhor gastronomia local",
  ],
};

export const getBotResponse = (message: string): BotResponse => {
  const lower = message.toLowerCase();
  const match = botResponses.find((r) =>
    r.trigger.some((t) => lower.includes(t))
  );
  return match ?? { ...defaultResponse, trigger: [] };
};
