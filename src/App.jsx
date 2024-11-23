import React from "react";
import Header from "./components/layout/Header";
import TemperatureCard from "./components/layout/TemperatureCard";
import './App.css';

const App = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center">
        <TemperatureCard temperature={36} />
      </main>
    </div>
  );
};

export default App;
