"use client";

import { useState } from "react";
import { Flex, Input, Stack, Box } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";

import { FormControl } from "@chakra-ui/form-control";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      flexDirection="column"
      width="100%"
      height="100%"
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

export default Login;
