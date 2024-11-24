import React from "react";
import Header from "./components/layout/Header";
import TemperatureCard from "./components/layout/TemperatureCard";
import MainPage from "./components/page/MainPage"; //เพิ่มหน้า mainpage
import './App.css';
import background from "./assets/photo/background.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="bg-blue-50 min-h-screen flex flex-col"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<TemperatureCard temperature={36} />} />
          <Route path="/MainPage" element={<MainPage />} /> {/* ใช้ MainPage */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
