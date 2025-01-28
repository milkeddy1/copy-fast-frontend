import { Button } from "@/components/ui/button";
import { Box, HStack } from "@chakra-ui/react";
import Tabs from "@/components/tabs";

export default function Home() {
  return (
    <Box width="100%" height="100%">
      <Box as="main" width="100%" height="100%">
        <Tabs />
      </Box>
      {/* <footer>footer</footer> */}
    </Box>
  );
}
