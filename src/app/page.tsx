import { Button } from "@/components/ui/button";
import { HStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <main>
        <HStack wrap="wrap" gap="6">
          <Button size="xs">Button (xs)</Button>
          <Button size="sm">Button (sm)</Button>
          <Button size="md">Button (md)</Button>
          <Button size="lg">Button (lg)</Button>
          <Button size="xl">Button (xl)</Button>
        </HStack>
      </main>
      <footer>Footer</footer>
    </div>
  );
}
