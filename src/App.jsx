import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BG from "./components/layout/BG"; // BG layout
import MainPage from "./components/page/MainPage"; // หน้า MainPage
import RegisterPage from "./components/page/RegisterPage";
import AuthForm from "./components/page/authForm/AuthForm";
import TemperaturePage from "./components/page/TemperaturePage"; // Import TemperaturePage

const App = () => {
  return (
    <BG>
      {/* Routes */}
      <Routes>
        {/* เส้นทางหลักคือ MainPage */}
        <Route path="/" element={<RegisterPage />} />
        {/* เส้นทาง TemperaturePage */}
        <Route path="/temperaturePage" element={<TemperaturePage />} />
        {/* เส้นทาง MainPage */}
        <Route path="/MainPage" element={<MainPage />} />
        {/* เส้นทาง AuthForm */}
        <Route path="/AuthForm" element={<AuthForm />} />
      </Routes>
    </BG>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
