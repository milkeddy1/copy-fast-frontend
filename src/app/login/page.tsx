"use client";

import { useState } from "react";
import { Flex, Input, Stack, chakra, Box } from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import { FormControl } from "@chakra-ui/form-control";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack p="1rem" boxShadow="md">
              <FormControl>
                <Input type="username" placeholder="帳號" p={4} />
              </FormControl>
              <FormControl>
                <Input
                  p={4}
                  type={showPassword ? "text" : "password"}
                  placeholder="密碼"
                />
              </FormControl>
              <Button
                borderRadius={4}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                登入
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default App;
