import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { Box, Flex } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            justifyContent="center"
            alignItems="center"
          >
            {/* header */}
            <Box as="nav" layerStyle="nav">
              {/* <Box as="ul">
                  <Box as="li">
                    <Link href="/">
                      <Text>Home</Text>
                    </Link>
                  </Box>
                </Box> */}
              <ColorModeButton />
            </Box>

            {/* page content */}
            {children}
          </Flex>
        </Provider>
      </body>
    </html>
  );
}
