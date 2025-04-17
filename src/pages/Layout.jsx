import { Outlet, Link } from "react-router-dom";
import { Box, Flex, Button } from '@chakra-ui/react';

function Layout() {
  return (
    <Box>
      {/* Optional Navbar or Sidebar can go here */}
      <Flex p={4} gap={4} bg="gray.100">
        <Button as={Link} to="/">Home</Button>
        <Button as={Link} to="/dashboard">Dashboard</Button>
        <Button as={Link} to="/settings">Settings</Button>
        <Button as={Link} to="/Emailtemplate">Email Template</Button>
        <Button as={Link} to="/OTPVerificationpage">OTP Page</Button>
        <Button as={Link} to="/AgentOnboardingpage">Onboarding</Button>
      </Flex>

      {/* Main content area */}
      <Box p={6}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
