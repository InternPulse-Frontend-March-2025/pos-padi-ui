"use client";

import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { LuUser, LuMail } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";

import { PasswordInput } from "@/components/ui/password-input";

import podImage from "../../src/assets/POD.png";
import logoImage from "../../src/assets/logo.svg";

export default function HomePage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Box maxW="100%" p={0}>
      <Flex direction={{ base: "column", md: "row" }} minH="100vh">
        {/* Left - Image + Info */}
        <Box
          w={{ base: "100%", md: "50%" }}
          position="relative"
          bg="gray.800"
          color="white"
        >
          <Image
            src={podImage}
            alt="POS Terminal"
            objectFit="cover"
            w="100%"
            h="100%"
            position="absolute"
            opacity={0.8}
          />
          <Flex
            direction="column"
            justify="space-between"
            h="full"
            position="relative"
            p={{ base: 8, md: 12 }}
          >
            <HStack mb={4}>
              <Flex
                bg="green.400"
                p={2}
                borderRadius="md"
                alignItems="center"
                gap={2}
              >
                <Box bg="white" borderRadius="md">
                  <Image src={logoImage} alt="Logo" p={2} objectFit="cover" />
                </Box>

                <Text fontWeight="bold" textStyle="2xl">
                  POS-Padi
                </Text>
              </Flex>
            </HStack>
            <Box
              px={6}
              py={12}
              borderRadius="md"
              bg="rgba(255, 255, 255, 0.2)"
              backdropFilter="blur(10px)"
            >
              <Heading size="xl" mb={4}>
                Run Your POS Business Smarter with POS-Padi
              </Heading>
              <Text fontSize="md">
                Get full control over your operations — from managing agents and
                tracking transactions to monitoring performance in real time.
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* Right - Form */}
        <Box
          w={{ base: "100%", md: "50%" }}
          bg="white"
          py={{ base: 12, md: 24 }}
          px={{ base: 8, md: 12 }}
          display="flex"
          alignItems="center"
        >
          <Box w="full" maxW="md" mx="auto">
            <Stack spacing={8}>
              <Box>
                <HStack mb={2}>
                  <Box w={1} h={6} bg="green.400" />
                  <Heading size="lg">Create A New Account</Heading>
                </HStack>
                <Text color="gray.600">Input your personal details</Text>
              </Box>

              <VStack spacing={4} align="stretch">
                <Stack spacing={1}>
                  <Text fontWeight="medium">First Name</Text>
                  <InputGroup startElement={<LuUser />}>
                    <Input placeholder="Enter First Name" />
                  </InputGroup>
                </Stack>

                <Stack spacing={1}>
                  <Text fontWeight="medium">Last Name</Text>
                  <InputGroup startElement={<LuUser />}>
                    <Input placeholder="Enter Last Name" />
                  </InputGroup>
                </Stack>

                <Stack spacing={1}>
                  <Text fontWeight="medium">Phone No</Text>
                  <InputGroup startElement={<IoCallOutline />}>
                    <Input placeholder="Enter Phone Number" />
                  </InputGroup>
                </Stack>

                <Stack spacing={1}>
                  <Text fontWeight="medium">Email</Text>
                  <InputGroup startElement={<LuMail />}>
                    <Input placeholder="Enter Email" type="email" />
                  </InputGroup>
                </Stack>

                <Stack spacing={1}>
                  <Text fontWeight="medium">Password</Text>
                  <InputGroup startElement={<MdLockOutline />}>
                    <PasswordInput placeholder="Enter Password" />
                  </InputGroup>
                  <Flex gap={1}>
                    <Badge p={1}>Min 8 characters</Badge>
                    <Badge p={1}>1 Number</Badge>
                    <Badge p={1}>Special Character</Badge>
                  </Flex>
                </Stack>

                <Stack spacing={1}>
                  <Text fontWeight="medium">Confirm Password</Text>
                  <InputGroup startElement={<MdLockOutline />}>
                    <PasswordInput placeholder="Enter Password" />
                  </InputGroup>
                </Stack>

                <Button mt={6} w="full" colorPalette="green" size="lg">
                  Continue
                </Button>

                <Flex justify="center" mt={4}>
                  <Text color="gray.600" mr={1}>
                    Do you have an account?
                  </Text>
                  <Link color="green.500" fontWeight="bold">
                    Login
                  </Link>
                </Flex>
              </VStack>
            </Stack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
