import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import podImage from "../../src/assets/POD.png";

const HomePage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  return (
    <Container
      maxW="container.xl"
      p={0}>
      <Flex
        direction={{ base: "column", md: "row" }}
        h={{ base: "auto", md: "100vh" }}>
        {/* Left side - Image and Description */}
        <Box
          w={{ base: "100%", md: "50%" }}
          h={{ base: "100%" }}
          position="relative"
          overflow="hidden"
          bg="gray.800"
          color="white">
          <Image
            src={podImage}
            alt="POS Terminal"
            objectFit="cover"
            w="100%"
            h="100%"
            position="absolute"
            opacity="0.8"
          />
          <Box
            position="relative"
            p={{ base: 8, md: 12 }}
            h="100%"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end">
            <Box
              bg="rgba(0,0,0,0.3)"
              p={6}
              borderRadius="md">
              <HStack mb={4}>
                <Box
                  bg="green.400"
                  p={2}
                  borderRadius="md">
                  <Text fontWeight="bold">POS-Padi</Text>
                </Box>
              </HStack>
              <Heading
                size="xl"
                mb={4}>
                Run Your POS Business Smarter with POS-Padi
              </Heading>
              <Text
                fontSize="md"
                mb={4}>
                Get full control over your operations — from managing agents and
                tracking transactions to monitoring performance in real time.
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Right side - Form */}
        <Box
          w={{ base: "100%", md: "50%" }}
          p={{ base: 8, md: 12 }}
          bg="white"
          display="flex"
          alignItems="center"
          pt={{ base: 12, md: 24 }}>
          <Box
            w="100%"
            maxW="md"
            mx="auto"
            mt={{ base: 5, md: 20 }}
            pt={{ base: 12, md: 24 }}>
            <Box mb={8}>
              <Box mb={6}>
                <HStack mb={2}>
                  <Box
                    w={1}
                    h={6}
                    bg="green.400"
                  />
                  <Heading size="lg">Create A New Account</Heading>
                </HStack>
                <Text color="gray.600">Input your personal details</Text>
              </Box>

              <VStack
                spacing={4}
                align="flex-start">
                <FormControl isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input placeholder="Enter First Name" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input placeholder="Enter Last Name" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Phone No</FormLabel>
                  <Input placeholder="Enter Phone Number" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder="Enter Email"
                    type="email"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }>
                        {showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Button
                  mt={6}
                  w="100%"
                  colorScheme="green"
                  size="lg"
                  borderRadius="md">
                  Continue
                </Button>

                <Flex
                  w="100%"
                  justify="center"
                  mt={4}>
                  <Text
                    color="gray.600"
                    mr={1}>
                    Do you have an account?
                  </Text>
                  <Link
                    color="blue.500"
                    fontWeight="bold">
                    Login
                  </Link>
                </Flex>
              </VStack>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
