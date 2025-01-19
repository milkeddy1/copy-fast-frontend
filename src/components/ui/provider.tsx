"use client";

import { ChakraProvider, ClientOnly, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function Provider(props: ColorModeProviderProps) {
  return (
    // 會有 hydration warning
    // 不確定 client only is the best solution
    <ClientOnly>
      <ChakraProvider value={defaultSystem}>
        <QueryClientProvider client={queryClient}>
          <ColorModeProvider {...props} />
        </QueryClientProvider>
      </ChakraProvider>
    </ClientOnly>
  );
}
