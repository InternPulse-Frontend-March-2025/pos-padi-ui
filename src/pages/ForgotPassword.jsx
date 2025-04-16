import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Input,
  Button,
  Heading,
  VStack,
  useToast,
  FormControl,
  FormLabel,
  HStack,
  Center,
  Text,
  Circle,
  Icon,
} from '@chakra-ui/react';
import { CheckCircleIcon, EmailIcon } from '@chakra-ui/icons'; 

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const toast = useToast();

  const [email, setEmail] = useState('');

  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef([]);

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (step !== 2 || timer <= 0) return;
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [step, timer]);

  const handleOtpChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== '');

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <VStack spacing={4} align="stretch">
            <Heading size="md">Forgot Password</Heading>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <Button
              colorScheme="green"
              onClick={() => {
                toast({
                  title: 'OTP sent!',
                  status: 'success',
                  duration: 2000,
                  isClosable: true,
                });
                setTimer(60); 
                setOtp(new Array(6).fill(''));
                setStep(2);
              }}
              isDisabled={!email.trim()}
            >
              Send Code
            </Button>
          </VStack>
        );

      case 2:
        return (
            <>
                <HStack spacing={2} alignItems="center" mb={6} justify="flex-end">
                    <CheckCircleIcon color="green.500" />
                    <Text color="green.500">Verification code has been sent to your email</Text>
                </HStack>
            
                <VStack spacing={6} align="stretch"> 
                    <Heading size="md" textAlign="center">
                    OTP Verification
                    </Heading>
                    <Text fontSize="sm" color="gray.600" textAlign="center">
                    Input the code that was sent to your mail inbox
                    </Text>
                    <Box display="flex" justifyContent="center">
                        <Circle size="60px" bg="green.100" display="flex" alignItems="center" justifyContent="center">
                            <Icon as={EmailIcon} boxSize={8} color="green.500" />
                        </Circle>
                    </Box>
                    <HStack spacing={2} justify="center" align="center">
                    {otp.map((digit, index) => (
                        <Input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(e.target.value, index)}
                        ref={(el) => (inputRefs.current[index] = el)}
                        textAlign="center"
                        fontSize="xl"
                        w="45px"
                        h="45px"
                        borderColor="gray.300"
                        focusBorderColor="green.400"
                        />
                    ))}
                    </HStack>
                    <Button
                    colorScheme="green"
                    w="full"
                    onClick={() => {
                        toast({
                        title: 'OTP verified!',
                        status: 'success',
                        duration: 2000,
                        isClosable: true,
                        });
                        setStep(3);
                    }}
                    isDisabled={!isOtpComplete}
                    >
                    Verify
                    </Button>
                    <Text fontSize="md" fontWeight="medium" textAlign="center"> 
                    0 : {timer.toString().padStart(2, '0')}
                    </Text>
                </VStack>
          </>
        );

      case 3:
        return (
          <VStack spacing={4} align="stretch">
            <Heading size="md">Set Up A New Password</Heading>
            <FormControl>
              <FormLabel>New Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormControl>
            <Button
              colorScheme="green"
              onClick={() => {
                toast({
                  title: 'Password reset successful!',
                  status: 'success',
                  duration: 2000,
                  isClosable: true,
                });
               
                setEmail('');
                setOtp(new Array(6).fill(''));
                setNewPassword('');
                setConfirmPassword('');
                setStep(1);
              }}
              isDisabled={!newPassword.trim() || !confirmPassword.trim()}
            >
              Confirm
            </Button>
          </VStack>
        );

      default:
        return <Box>Something went wrong</Box>;
    }
  };

  return (
    <Center minH="100vh" bg="#f7f7f7">
      <Box
        maxW="md"
        w="full"
        bg="white"
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        justifyContent="top"
        h="80vh"
      >
        {renderStep()}
      </Box>
    </Center>
  );
};

export default ForgotPassword;
