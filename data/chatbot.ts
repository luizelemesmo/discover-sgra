export interface BotResponse {
  trigger: string[];
  response: string;
  suggestions?: string[];
  attractions?: string[];
}

export const suggestedPrompts = [
  "Quero conhecer igrejas históricas da cidade",
  "Monte um roteiro cultural por São Gonçalo do Rio Abaixo",
  "Quais pontos posso visitar em uma tarde?",
  "Quem foi o Padre João?",
  "O que é a Estação Ambiental de Peti?",
  "Onde comer comida mineira típica?",
  "Quais eventos estão acontecendo?",
];

export const botResponses: BotResponse[] = [
  {
    trigger: ["igreja", "igrejas", "histórica", "histórias", "colonial", "religios"],
    response:
      "São Gonçalo do Rio Abaixo guarda um patrimônio religioso e histórico precioso! ⛪\n\nAs três igrejas históricas do centro são imperdíveis:\n\n• **Igreja Matriz de São Gonçalo do Amarante** — Erguida em 1733, com retábulo colonial e o Cruzeiro centenário de 1871\n• **Igreja de Nossa Senhora do Rosário** — Construída pela comunidade negra no início do século XVIII\n• **Igreja de Santa Efigênia** — Conhecida como \"Igreja do Padre João\", no alto de uma colina com vista da cidade\n\nO **Roteiro Histórico e Religioso** conecta as três em uma caminhada de meio dia. Quer que eu monte o itinerário completo?",
    suggestions: ["Monte o roteiro histórico completo", "Quem foi o Padre João?", "Horários de visitação das igrejas"],
    attractions: ["igreja-matriz-sao-goncalo-amarante", "igreja-nossa-senhora-rosario", "igreja-santa-efigenia"],
  },
  {
    trigger: ["roteiro cultural", "cultural", "centro", "cultura"],
    response:
      "Ótima escolha! O **Roteiro Cultural pelo Centro** é perfeito para sentir o ritmo da cidade. 🎨\n\n**Paradas sugeridas:**\n\n• **Praça da Matriz** — coração social e religioso da cidade\n• **Centro Cultural São Gonçalo do Rio Abaixo** — exposições e memória local\n• **Comércio e casario do centro** — arquitetura tradicional preservada\n• **Parada gastronômica** — pão de queijo e doces caseiros\n\nLeva cerca de 2 a 3 horas, em ritmo tranquilo. Quer que eu sugira o melhor horário para fazer esse passeio?",
    suggestions: ["Melhor horário para o passeio", "O que tem no Centro Cultural?", "Outras opções de roteiro"],
    attractions: ["centro-cultural-sgra", "gastronomia-mineira-local"],
  },
  {
    trigger: ["tarde", "poucas horas", "rápido", "curto"],
    response:
      "Para quem tem só uma tarde livre, dá para conhecer bastante do centro histórico! 🕐\n\n**Sugestão de roteiro expresso (3–4h):**\n\n1. **Igreja Matriz de São Gonçalo do Amarante** — 45min\n2. **Igreja de Nossa Senhora do Rosário** — 30min\n3. **Igreja de Santa Efigênia** — 45min (com a subida até o adro)\n4. **Estátua do Padre João** — 30min\n\nTodos os pontos ficam próximos e podem ser feitos a pé, no centro da cidade. Quer que eu monte esse roteiro em detalhes?",
    suggestions: ["Monte esse roteiro em detalhes", "Tenho o dia todo, não só a tarde", "Quero algo com natureza"],
    attractions: ["igreja-matriz-sao-goncalo-amarante", "igreja-nossa-senhora-rosario", "igreja-santa-efigenia", "estatua-padre-joao"],
  },
  {
    trigger: ["padre joão", "padre", "joão", "milagre", "estátua"],
    response:
      "O Padre João é uma das figuras mais marcantes da história de São Gonçalo! 🙏\n\nO Cônego João José Marques Guimarães assumiu a Paróquia em 1924 e se dedicou à comunidade por cerca de cinco décadas, até seu falecimento em 1984. Sua memória é tão presente que está ligada até ao processo de emancipação política do município, em 1962.\n\nHoje ele é homenageado por dois marcos:\n\n• **Estátua do Padre João** — memorial de 20 metros no bairro Patrimônio\n• **Igreja de Santa Efigênia** — capela erguida a seu pedido, conhecida como \"Igreja do Padre João\"\n\nMuitos visitantes consideram a visita ao memorial um momento de reflexão e fé. Quer saber como chegar até lá?",
    suggestions: ["Como chegar à Estátua do Padre João", "Conhecer a Igreja de Santa Efigênia", "Monte um roteiro histórico"],
    attractions: ["estatua-padre-joao", "igreja-santa-efigenia"],
  },
  {
    trigger: ["peti", "estação ambiental", "natureza", "trilha", "represa", "mata"],
    response:
      "A Estação Ambiental de Peti é o grande tesouro natural de São Gonçalo do Rio Abaixo! 🌿\n\n**Destaques:**\n• Mais de **500 hectares** de mata preservada\n• Represa e cachoeira históricas, ligadas a uma antiga usina hidrelétrica do início do século XX\n• Trilhas para caminhada, incluindo um percurso acessível para deficientes visuais\n• Programas de educação ambiental e pesquisa científica\n\nEm 2026, a Estação foi oficialmente tombada como patrimônio cultural do município. O **Roteiro Estação de Peti e Arredores** dedica uma tarde inteira a esse passeio. Quer os detalhes?",
    suggestions: ["Monte o roteiro de Peti", "Como agendar a visita?", "Outras opções de natureza"],
    attractions: ["estacao-ambiental-peti"],
  },
  {
    trigger: ["gastronomia", "comida", "comer", "restaurante", "mineira", "culinária", "pão de queijo", "doce"],
    response:
      "A tradição mineira está bem viva em São Gonçalo do Rio Abaixo! 🧀\n\nPadarias, confeitarias e cozinhas de família mantêm vivos os sabores da região: pão de queijo, pastéis, empadas e doces caseiros fazem parte do dia a dia local e das festas religiosas ao longo do ano.\n\nUma boa pedida é incluir uma parada gastronômica no **Roteiro Cultural pelo Centro**, logo após visitar o Centro Cultural. Quer que eu inclua isso no seu roteiro?",
    suggestions: ["Incluir no roteiro cultural", "Quais doces são típicos?", "Quero conhecer as igrejas também"],
    attractions: ["gastronomia-mineira-local"],
  },
  {
    trigger: ["evento", "eventos", "programação", "agenda", "festival", "festa"],
    response:
      "A agenda cultural de São Gonçalo do Rio Abaixo costuma reunir fé, música e tradição ao longo do ano! 🎉\n\nFestejos religiosos, mostras culturais e celebrações populares acontecem principalmente em torno das datas do padroeiro e das tradições locais. Para não perder nada, vale visitar a página de **Eventos** e confirmar as datas atualizadas direto com a Prefeitura ou a Paróquia São Gonçalo.\n\nQuer que eu te mostre os próximos eventos cadastrados na plataforma?",
    suggestions: ["Ver agenda de eventos", "Quero conhecer a cidade primeiro", "Monte um roteiro para mim"],
  },
  {
    trigger: ["roteiro", "itinerário", "planejar", "viagem", "visita", "passeio"],
    response:
      "Vou te ajudar a planejar a visita perfeita a São Gonçalo do Rio Abaixo! ✈️\n\nTemos 4 roteiros temáticos prontos:\n\n⛪ **Roteiro Histórico e Religioso** — meio dia, fácil\n🏛️ **Roteiro Cultural pelo Centro** — meio dia, fácil\n🗿 **Roteiro Memória e Patrimônio** — 1 dia, moderado\n🌿 **Roteiro Estação de Peti e Arredores** — meio dia, moderado\n\nMe conta um pouco mais:\n• Quanto tempo você tem disponível?\n• Prefere história e fé, natureza ou um pouco de cada?\n\nAssim posso recomendar o roteiro ideal para você!",
    suggestions: ["Quero o roteiro histórico", "Quero o roteiro de Peti", "Tenho o dia todo disponível"],
  },
  {
    trigger: ["iniciante", "fácil", "família", "criança", "idoso", "acessível"],
    response:
      "Para quem busca um passeio tranquilo e acessível, o centro da cidade é a melhor opção! 👨‍👩‍👧‍👦\n\n**Ideais para famílias:**\n\n• **Igreja Matriz de São Gonçalo do Amarante** — acesso fácil, na Praça da Matriz\n• **Centro Cultural São Gonçalo do Rio Abaixo** — visita tranquila e educativa\n• **Sabores da Tradição Mineira** — parada gastronômica com pão de queijo e doces\n\nA **Igreja de Santa Efigênia** tem uma subida mais acentuada até o adro — vale considerar o preparo físico de cada visitante antes de incluir essa parada.",
    suggestions: ["Roteiro cultural pelo centro", "Vale a pena subir até Santa Efigênia?", "Quero conhecer Peti também"],
    attractions: ["igreja-matriz-sao-goncalo-amarante", "centro-cultural-sgra", "gastronomia-mineira-local"],
  },
];

export const defaultResponse = {
  response:
    "Olá! Sou o **Assistente Turístico de São Gonçalo do Rio Abaixo** 🌿\n\nPosso te ajudar a descobrir:\n• As **igrejas históricas** e o patrimônio religioso da cidade\n• A história do **Padre João** e seu memorial\n• A **Estação Ambiental de Peti**, com represa e trilhas\n• A gastronomia e a cultura local\n• **Roteiros personalizados** para sua visita\n\nO que você gostaria de explorar em São Gonçalo do Rio Abaixo?",
  suggestions: [
    "Quero conhecer igrejas históricas da cidade",
    "Monte um roteiro cultural por São Gonçalo do Rio Abaixo",
    "Quais pontos posso visitar em uma tarde?",
    "O que é a Estação Ambiental de Peti?",
  ],
};

export const getBotResponse = (message: string): BotResponse => {
  const lower = message.toLowerCase();
  const match = botResponses.find((r) =>
    r.trigger.some((t) => lower.includes(t))
  );
  return match ?? { ...defaultResponse, trigger: [] };
};
