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

// const NewAgent = () => {
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

// export default NewAgent;

// import React, { useState } from 'react';
// import { FiUser, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

// const NewAgent = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     terminal: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = () => {
//     console.log('Submitting:', formData);
//     // submission logic here
//   };

//   return (
//     <div className='flex justify-center  items-center '>

//     <div className="flex max-w-xl mx-auto flex-col px-4 py-8">
//       <div>
//       <h2 className="text-2xl font-bold mb-1">Add New Agent</h2>
//       <p className="text-gray-400 mb-6">Input agent details</p>
//       </div>

//       <div className='flex flex-col mt-10'>
//       <form className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">First Name</label>
//           <div className="relative">
//             <FiUser className="absolute top-1/2  -translate-y-1/2 text-gray-400" />
//             <input
//               name="firstName"
//               type="text"
//               placeholder="Enter First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Last Name</label>
//           <div className="relative">
//             <FiUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
//             <input
//               name="lastName"
//               type="text"
//               placeholder="Enter Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Phone No</label>
//           <div className="relative">
//             <FiPhone className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
//             <input
//               name="phone"
//               type="tel"
//               placeholder="Enter Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <div className="relative">
//             <FiMail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
//             <input
//               name="email"
//               type="email"
//               placeholder="Enter Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Terminal (Optional)</label>
//           <div className="relative">
//             <FiMapPin className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
//             <select
//               name="terminal"
//               value={formData.terminal}
//               onChange={handleChange}
//               className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//             >
//               <option value="">Assign Terminal</option>
//               <option value="Terminal A">Terminal A</option>
//               <option value="Terminal B">Terminal B</option>
//             </select>
//           </div>
//         </div>

//         <button
//   type="button"
//   onClick={handleSubmit}
//   className="w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-teal-700 transition"
// >
//   Continue
// </button>
//       </form>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default NewAgent;


import React from 'react';
import { FiUser, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const NewAgent = () => {
  // Custom styled components with better matching to the image
  const Box = ({ children, ...props }) => (
    <div style={{ 
      maxWidth: '500px', 
      margin: '0 auto', 
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }} {...props}>
      {children}
    </div>
  );

  const Heading = ({ children }) => (
    <h1 style={{ 
      fontSize: '1.5rem', 
      fontWeight: '700', 
      marginBottom: '0.5rem',
      color: '#1A202C'
    }}>
      {children}
    </h1>
  );

  const Text = ({ children }) => (
    <p style={{ 
      marginBottom: '2rem', 
      color: '#718096',
      fontSize: '0.875rem'
    }}>{children}</p>
  );

  const FormLabel = ({ children }) => (
    <label style={{
      display: 'block',
      marginBottom: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#2D3748'
    }}>
      {children}
    </label>
  );

  const Input = ({ placeholder, type = 'text', icon, ...props }) => (
    <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
      {icon && (
        <div style={{
          position: 'absolute',
          left: '0.75rem',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#A0AEC0'
        }}>
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        style={{
          padding: '0.75rem',
          paddingLeft: icon ? '2.5rem' : '0.75rem',
          border: '1px solid #E2E8F0',
          borderRadius: '6px',
          width: '100%',
          fontSize: '0.875rem',
          backgroundColor: '',
          outline: 'none',
          transition: 'border-color 0.2s',
          boxSizing: 'border-box'
        }}
        {...props}
      />
    </div>
  );

  const Select = ({ placeholder, icon, children, ...props }) => (
    <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
      {icon && (
        <div style={{
          position: 'absolute',
          left: '0.75rem',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#A0AEC0',
          zIndex: 1
        }}>
          {icon}
        </div>
      )}
      <select
        style={{
          padding: '0.75rem',
          paddingLeft: icon ? '2.5rem' : '0.75rem',
          border: '1px solid #E2E8F0',
          borderRadius: '6px',
          width: '100%',
          fontSize: '0.875rem',
          appearance: 'none',
          backgroundColor: '',
          color:'#A0AEC0',
          outline: 'none',
          cursor: 'pointer'
        }}
        {...props}
      >
        <option value="">{placeholder}</option>
        {children}
      </select>
      <div style={{
        position: 'absolute',
        right: '0.75rem',
        top: '50%',
        transform: 'translateY(-50%)',
        pointerEvents: 'none'
      }}>
        ▼
      </div>
    </div>
  );

  const Button = ({ children, ...props }) => (
    <button
      style={{
        padding: '0.75rem 1rem',
        backgroundColor: '#02B14F80',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        width: '100%',
        fontSize: '0.875rem',
        fontWeight: '500',
        cursor: 'pointer',
        marginTop: '0.5rem',
        transition: 'background-color 0.2s'
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#02B14F'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#02B14F80'}
      {...props}
    >
      {children}
    </button>
  );

  return (
    <Box>
      <Heading>Add New Agent</Heading>
      <Text>Input agent details</Text>

      <form>
        {/* First Name */}
        <FormLabel>First Name</FormLabel>
        <Input 
          placeholder="Enter First Name" 
          icon={<FiUser size={18} />}
        />

        {/* Last Name */}
        <FormLabel>Last Name</FormLabel>
        <Input 
          placeholder="Enter Last Name" 
          icon={<FiUser size={18} />}
        />

        {/* Phone */}
        <FormLabel>Phone No</FormLabel>
        <Input 
          placeholder="Enter Phone Number" 
          type="tel"
          icon={<FiPhone size={18} />}
        />

        {/* Email */}
        <FormLabel>Email</FormLabel>
        <Input 
          placeholder="Enter Email" 
          type="email"
          icon={<FiMail size={18} />}
        />

        {/* Terminal Select */}
        <FormLabel>Terminal (Optional)</FormLabel>
        <Select 
          placeholder="Assign Terminal"
          icon={<FiMapPin size={18} />}
        >
          <option value="terminal1">Terminal 1</option>
          <option value="terminal2">Terminal 2</option>
        </Select>

        <Button type="button">Continue</Button>
      </form>
    </Box>
  );
};

export default NewAgent;
