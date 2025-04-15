// import React from 'react';
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   InputLeftElement,
//   Select,
//   VStack,
//   Text,
//   Heading,
// } from '@chakra-ui/react';
// import { FiUser, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

// const Agents = () => {
//   return (
//     <Box>
//       <Heading>Add New Agent</Heading>
//       <Text>Input agent details</Text>

//       <VStack>
//         <FormControl>
//           <FormLabel>First Name</FormLabel>
//           <InputGroup>
//             <InputLeftElement children={<FiUser />} />
//             <Input placeholder="Enter First Name" />
//           </InputGroup>
//         </FormControl>

//         <FormControl>
//           <FormLabel>Last Name</FormLabel>
//           <InputGroup>
//             <InputLeftElement children={<FiUser />} />
//             <Input placeholder="Enter Last Name" />
//           </InputGroup>
//         </FormControl>

//         <FormControl>
//           <FormLabel>Phone No</FormLabel>
//           <InputGroup>
//             <InputLeftElement children={<FiPhone />} />
//             <Input placeholder="Enter Phone Number" type="tel" />
//           </InputGroup>
//         </FormControl>

//         <FormControl>
//           <FormLabel>Email</FormLabel>
//           <InputGroup>
//             <InputLeftElement children={<FiMail />} />
//             <Input placeholder="Enter Email" type="email" />
//           </InputGroup>
//         </FormControl>

//         <FormControl>
//           <FormLabel>Terminal (Optional)</FormLabel>
//           <Select placeholder="Assign Terminal" icon={<FiMapPin />} />
//         </FormControl>

//         <Button>Continue</Button>
//       </VStack>
//     </Box>
//   );
// };

// export default Agents;

import React, { useState } from 'react';
import { FiUser, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const NewAgent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    terminal: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Submitting:', formData);
    // submission logic here
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-1">Add New Agent</h2>
      <p className="text-gray-600 mb-6">Input agent details</p>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <div className="relative">
            <FiUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              name="firstName"
              type="text"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <div className="relative">
            <FiUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              name="lastName"
              type="text"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone No</label>
          <div className="relative">
            <FiPhone className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              name="phone"
              type="tel"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <div className="relative">
            <FiMail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Terminal (Optional)</label>
          <div className="relative">
            <FiMapPin className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <select
              name="terminal"
              value={formData.terminal}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Assign Terminal</option>
              <option value="Terminal A">Terminal A</option>
              <option value="Terminal B">Terminal B</option>
            </select>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default NewAgent;
