import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  VStack,
  Text,
  Heading,
} from '@chakra-ui/react';
import { FiUser, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Agents = () => {
  return (
    <Box>
      <Heading>Add New Agent</Heading>
      <Text>Input agent details</Text>

      <VStack>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <InputGroup>
            <InputLeftElement children={<FiUser />} />
            <Input placeholder="Enter First Name" />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <InputGroup>
            <InputLeftElement children={<FiUser />} />
            <Input placeholder="Enter Last Name" />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Phone No</FormLabel>
          <InputGroup>
            <InputLeftElement children={<FiPhone />} />
            <Input placeholder="Enter Phone Number" type="tel" />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <InputLeftElement children={<FiMail />} />
            <Input placeholder="Enter Email" type="email" />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Terminal (Optional)</FormLabel>
          <Select placeholder="Assign Terminal" icon={<FiMapPin />} />
        </FormControl>

        <Button>Continue</Button>
      </VStack>
    </Box>
  );
};

export default Agents;