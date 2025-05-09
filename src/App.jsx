import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import Agents from "./pages/Agents";
import Emailtemplate  from "./pages/Emailtemplate";
import OTPVerificationPage from "./pages/OTPVerificationPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='settings' element={<Settings />} />
          <Route path='agents' element={<Agents />} />
          <Route path='Emailtemplate' element={<Emailtemplate />} />
          <Route path='OTPVerificationpage' element={<OTPVerificationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
