import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import TemperatureCard from "./components/layout/TemperatureCard";
import MainPage from "./components/page/MainPage";
import RegisterPage from "./components/page/RegisterPage";
import BG from "./components/layout/BG"; // Import BG
import AuthForm from "./components/page/authForm/AuthForm";

const App = () => {
  const location = useLocation(); // ใช้ useLocation เพื่อตรวจสอบเส้นทาง

  return (
    <BG>
      {/* แสดง Header เฉพาะหน้า "/" */}
      {location.pathname === "/" && <Header />}

      {/* กำหนด Routes */}
      <Routes>
        <Route path="/" element={<TemperatureCard temperature={36} />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
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
