'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import themeConfig from './theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <ColorModeScript initialColorMode={themeConfig.initialColorMode} />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
