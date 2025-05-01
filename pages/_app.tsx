import { TinaProvider, TinaCMS } from 'tinacms';
import tinaConfig from '../tina/config';

const cms = new TinaCMS({
  enabled: true,
  apis: {
    get: async (query: string) => {
      // Adicione a lógica para buscar dados (como arquivos JSON)
      return {};
    },
    create: async (mutation: any) => {},
    update: async (mutation: any) => {},
  },
});

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TinaProvider cms={cms}>
      <Component {...pageProps} />
    </TinaProvider>
  );
}

export default MyApp;
