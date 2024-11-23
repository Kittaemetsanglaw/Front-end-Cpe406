import React from "react";

const TemperatureCard = ({ temperature }) => {
  return (
    <div className="bg-blue-500 text-white p-8 rounded-xl shadow-lg max-w-sm mx-auto text-center">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">อุณหภูมิที่วัดได้</h2>
      
      {/* Temperature Display */}
      <div className="flex justify-center items-center space-x-4 mb-4">
        <span className="text-5xl font-extrabold">{temperature} °C</span>
        <img
          src="/path-to-thermometer.png"
          alt="Thermometer"
          className="w-12 h-12"
        />
      </div>

      {/* Description */}
      <p className="text-sm mb-4">
        อุณหภูมิร่างกายปกติ และไม่มีอาการผิดปกติ
      </p>

      {/* Save Button */}
      <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-bold hover:bg-gray-100">
        เก็บค่าอุณหภูมิ
      </button>
    </div>
  );
};

export default TemperatureCard;
