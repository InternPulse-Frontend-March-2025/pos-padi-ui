import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import OTPVerificationPage from "./pages/OTPVerificationPage";
import AgentOnboardingPage from "./pages/AgentOnboardingPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='settings' element={<Settings />} />
          <Route path='OTPVerificationpage' element={<OTPVerificationPage />} />
          <Route path='AgentOnboardingpage' element={<AgentOnboardingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
