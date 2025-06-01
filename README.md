```md
# 🍽️ FastOrder

Projeto em Next.js focado em um sistema de pedidos rápidos para restaurantes, utilizando arquitetura baseada em **MVC** e o novo **App Router** do Next.js.

---

## 📁 Estrutura do Projeto

A estrutura do projeto foi organizada de forma a manter uma separação clara entre responsabilidades, adotando uma abordagem **MVC-like (Model, View, Controller)** para facilitar escalabilidade e manutenção:
```

src/
├── app/ # Páginas do Next.js (App Router)
│ ├── restaurant/ # Página de restaurantes
│ │ └── \[restaurantId]/product/\[productId]/request/\[nameRequest]/page.tsx
│ ├── sumary/ # Tela de resumo dos pedidos
│ └── layout.tsx # Layout global
│
├── components/ # Componentes reutilizáveis (UI)
│ ├── Header.tsx
│ ├── Footer.tsx
│ └── ButtonShowTicket.tsx
│
├── contexts/ # Context API (estado global)
│ └── TicketContext.tsx
│
├── controllers/ # Hooks personalizados (Controllers)
│ ├── useRestaurants.tsx
│ ├── useMenus.tsx
│ └── useExtraSidesTicket.tsx
│
├── data/ # Dados mockados para testes
│ ├── restaurants.json
│ ├── menus.json
│ └── extraSidesTicket.json
│
├── models/ # Tipagens e modelos
│ ├── restaurant.ts
│ ├── menu.ts
│ └── ticket.ts
│
├── utils/ # Funções utilitárias
│ ├── format.ts
│ └── generate.ts

````

---

## 🚀 Como rodar o projeto

### Pré-requisitos

- Node.js (v18+ recomendado)
- Yarn ou npm

### Passos

```bash
# Instale as dependências
npm install

# ou
yarn install

# Rode o projeto em modo de desenvolvimento
npm run dev

# ou
yarn dev
````

O projeto será executado em `http://localhost:3000`.

---

## 🧠 Tomadas de Decisão

- **App Router do Next.js**: Utilizado para aproveitar o carregamento assíncrono nativo, layouts por pasta e melhor organização de rotas dinâmicas.
- **Arquitetura baseada em MVC**:

  - `models/`: Interface e estrutura dos dados.
  - `controllers/`: Hooks personalizados que atuam como controladores de lógica de negócio.
  - `components/`: Interface e elementos visuais (View).

- **Context API**: Utilizado para gerenciar o estado global de tickets, evitando prop-drilling.
- **Dados mockados**: `data/` foi usado para simular respostas de uma API externa.
- **Tailwind CSS** — estilização rápida e responsiva
- **Modularização**: Cada tipo de entidade (restaurantes, menus, tickets) tem seus arquivos separados, mantendo responsabilidade única.

---

## ⚠️ Avisos

- Algumas funcionalidades ainda estão em desenvolvimento, como alguns botões não clicáveis.
