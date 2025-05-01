# Landing Page - Templates

Este projeto é uma aplicação Next.js que exibe uma página com duas listas de links para templates. Cada lista contém 1000 links, totalizando 2000 páginas. Acima de cada lista, há uma imagem representando o respectivo template.

## O que foi feito

- **Divisão de Links**: Os links foram divididos em duas listas:
  - `/paginatemplate1/1` até `/paginatemplate1/1000`
  - `/paginatemplate2/1` até `/paginatemplate2/1000`
- **Imagens**: Adicionadas imagens acima de cada lista para representar os templates.
- **Estilo**: Utilizado Tailwind CSS para estilização e organização da página.
- **CMS**: Integrado com TinaCMS para facilitar a edição de conteúdo.

## Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Acesse [http://localhost:3000](http://localhost:3000) no navegador para visualizar a página.

## Estrutura da Página

- **Template 1**:
  - Imagem representando o template.
  - Lista de links de 1 a 1000.
- **Template 2**:
  - Imagem representando o template.
  - Lista de links de 1 a 1000.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [TinaCMS](https://tina.io)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
