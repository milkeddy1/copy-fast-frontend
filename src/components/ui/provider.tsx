"use client";

import {
  ChakraProvider,
  ClientOnly,
  defineConfig,
  createSystem,
  defaultConfig,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
    layerStyles: {
      nav: {
        description: "nav styles",
        value: {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
          borderBottom: "1px solid #E0E0E0",
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
  return (
    // 會有 hydration warning
    // 不確定 client only is the best solution
    <ClientOnly>
      <ChakraProvider value={system}>
        <QueryClientProvider client={queryClient}>
          <ColorModeProvider {...props} />
        </QueryClientProvider>
      </ChakraProvider>
    </ClientOnly>
  );
}
