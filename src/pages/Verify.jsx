import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  HStack,
  Circle,
  Icon,
  Image,
} from "@chakra-ui/react";
import { MdArrowBack, MdMarkEmailRead } from 'react-icons/md';
import podImage from "../../src/assets/POD.png";
import logoImage from "../../src/assets/logo.svg";

const Verify = () => {
  const [timer, setTimer] = useState(120);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    console.log('Verifying OTP:', enteredOtp);
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const EmailIconCustom = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <Container maxW="full" p={0} minH="100vh">
      <Flex direction={{ base: 'column', md: 'row' }} h="full">
        {/* Left side - Image */}
        <Box
          w={{ base: 'full', md: '50%' }}
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

        {/* Right side - Form Section */}
        <Box
          w={{ base: 'full', md: '50%' }}
          h="full"
          bg="white"
          px={{ base: 6, md: 8 }}
          py={{ base: 8, md: 12 }}
        >
          <Flex direction="column" h="full" justify="right" align="right" maxW="lg" mx="auto">
            {/* Notification Box */}
            <Flex w="full" justify="flex-end" mb={{ base: 6, md: 8 }}>
              <Flex
                align="right"
                bg="green.50"
                color="green.600"
                px={3}
                py={2}
                borderRadius="sm"
                fontSize={{ base: 'sm', md: 'md' }}
                fontWeight="medium"
              >
                <Circle size="20px" bg="green.100" color="green.500" mr={2}>
                  <Icon as={MdMarkEmailRead} boxSize="14px" />
                </Circle>
                <Text>
                  Verification code has been sent to your email
                </Text>
              </Flex>
            </Flex>

            {/* Step progress bar */}
            <Flex w="100%" mb={6} position="relative" align="center">
              <Box w="full" h="1px" bg="gray.200" position="absolute" />

              <Flex w="full" justify="space-between" position="relative">
                <Circle size="10px" bg="green.500" />
                <Circle size="10px" bg="green.500" />
                <Circle size="10px" bg="gray.200" />
              </Flex>
            </Flex>

            {/* Card */}
            <Box
              bg="gray.50"
              p={{ base: 6, md: 8 }}
              borderRadius="lg"
              boxShadow="md"
              w="full"
            >
              <Flex direction="column" align="center">
                <Heading
                  fontSize={{ base: 'xl', md: '2xl' }}
                  textAlign="center"
                  mb={2}
                  color="black"
                >
                  <Icon as={MdArrowBack} mr={2} /> Verify your email
                </Heading>

                <Text fontSize={{ base: 'sm', md: 'md' }} textAlign="center" mb={4}>
                  Input the code that was sent to your email
                </Text>

                <Circle size={{ base: "60px", md: "80px" }} bg="green.100" my={4}>
                  <Box color="green.500">
                    <EmailIconCustom />
                  </Box>
                </Circle>

                <HStack spacing={3} mb={6}>
                  {otp.map((digit, index) => (
                    <Input
                      key={index}
                      id={`otp-input-${index}`}
                      type="text"
                      maxLength={1}
                      w={{ base: "10", md: "12" }}
                      h={{ base: "10", md: "12" }}
                      textAlign="center"
                      fontSize="xl"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      borderColor="gray.300"
                    />
                  ))}
                </HStack>

                <Button
                  w="full"
                  bg="green.500"
                  color="white"
                  size="lg"
                  _hover={{ bg: 'green.600' }}
                  onClick={handleVerify}
                  mb={4}
                >
                  Verify
                </Button>

                <Text fontSize="md" fontWeight="medium">
                  {formatTime(timer)} seconds
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Verify;