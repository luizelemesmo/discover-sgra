# Discover SGRA — Plataforma de Turismo Inteligente

**Discover SGRA** é uma plataforma moderna de turismo inteligente desenvolvida para apresentar São Gonçalo do Rio Abaixo — MG, Brasil como um destino turístico de excelência. O projeto combina design de produto moderno com conceitos de IA aplicada ao turismo e patrimônio cultural.

---

## Sobre o Projeto

São Gonçalo do Rio Abaixo é uma cidade do interior de Minas Gerais rica em natureza, história e cultura. A Discover SGRA foi concebida para:

- **Digitalizar** a experiência turística local com uma interface moderna e intuitiva
- **Democratizar** o acesso à informação turística através de um assistente com IA
- **Valorizar** o patrimônio cultural e natural da cidade
- **Conectar** viajantes a experiências autênticas e roteiros personalizados

---

## Stack Tecnológica

| Tecnologia | Uso |
|---|---|
| **Next.js 15** (App Router) | Framework principal |
| **TypeScript** | Tipagem estática |
| **TailwindCSS v4** | Estilização utility-first |
| **shadcn/ui** | Componentes de UI base |
| **Framer Motion** | Animações fluidas |
| **Lucide React** | Ícones |

---

## Como Executar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Acessar em http://localhost:3000
```

### Build para produção

```bash
npm run build
npm start
```

---

## Estrutura do Projeto

```
discover-sgra/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Layout raiz
│   ├── attractions/
│   │   ├── page.tsx          # Listagem de atrações
│   │   └── [id]/             # Detalhe da atração
│   ├── assistant/            # Assistente IA
│   ├── routes/               # Roteiros turísticos
│   ├── events/               # Agenda de eventos
│   └── gallery/              # Galeria imersiva
├── components/
│   ├── layout/               # Navbar, Footer
│   └── sections/             # Seções da landing page
├── data/                     # Mock data (atrações, eventos, roteiros)
├── types/                    # TypeScript types
└── lib/                      # Utilities
```

---

## Páginas e Funcionalidades

### 🏠 Landing Page
Hero cinematográfico com imagem full-screen, animações Framer Motion, estatísticas animadas, seções de categorias, atrações em destaque, preview do assistente IA, roteiros, eventos e galeria.

### 🗺️ Atrações Turísticas
Listagem com 8 atrações reais do município — incluindo a Igreja Matriz de São Gonçalo do Amarante, a Igreja de Nossa Senhora do Rosário, a Igreja de Santa Efigênia, a Estátua do Padre João e a Estação Ambiental de Peti — com busca em tempo real, filtros por categoria e ordenação por avaliação ou nome.

### 📍 Detalhe da Atração
Galeria de imagens, descrição detalhada, destaques, informações de visita (horário, preço, duração, melhor época), mapa mockado e atrações relacionadas.

### 🤖 Assistente Turístico IA
Interface de chat com respostas inteligentes baseadas em palavras-chave, prompts rápidos por categoria, indicador de digitação e sugestões contextuais.

### 🧭 Roteiros
4 roteiros temáticos com cards expandíveis, linha do tempo de paradas, informações de dificuldade e duração.

### 📅 Eventos
Agenda cultural ilustrativa com 6+ eventos de exemplo, agrupamento por mês, filtros por categoria e destaque para eventos principais. Datas e programação devem ser confirmadas junto à Prefeitura.

### 🖼️ Galeria
Layout masonry responsivo, 16 imagens categorizadas, filtros por categoria e lightbox com navegação.

---

## Conceito de IA Aplicada

O **Assistente Turístico SGRA** demonstra como a IA pode transformar a experiência turística:

### Implementação Atual (MVP demonstrativo)
- NLP por palavras-chave para identificação de intenção
- Respostas contextuais ricas com recomendações
- UX conversacional moderno com animações

### Visão Futura
- **LLM Integration**: Integração com Claude API para respostas dinâmicas
- **Personalização profunda**: Aprendizado de preferências ao longo do tempo
- **Recomendações por localização**: GPS + contexto de tempo real
- **Roteiros dinâmicos**: Geração de itinerários personalizados
- **Reconhecimento visual**: Identificação de pontos históricos via câmera
- **Chatbot multilíngue**: Suporte a turistas internacionais

---

## Futuras Melhorias

- [ ] Integração com Claude API para o Assistente IA
- [ ] Backend com banco de dados (PostgreSQL + Prisma)
- [ ] Mapa interativo com Mapbox ou Google Maps
- [ ] Sistema de reservas e agendamento
- [ ] PWA com suporte offline
- [ ] Internacionalização (PT-BR, EN, ES)
- [ ] Painel administrativo para gestores de turismo

---

*Discover SGRA — Descubra a alma de Minas Gerais* 🌿
