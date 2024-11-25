import React from "react";
import background from "../../assets/photo/background.png"; // ภาพพื้นหลัง
import Temperature from "../../assets/photo/Temperature.png"; // รูปภาพ Temperature
import logo from "../../assets/photo/logo.png"; // โลโก้
import { Link } from "react-router-dom";

// Header Component
const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      {/* Logo Section */}
      <Link to ="/MainPage">
      <div className="flex items-center space-x-2">
        {/* Image Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-[141px] h-[134px]" // ขนาดของโลโก้
        />
        {/* Text */}
        <span className="text-[15px] font-bold text-blue-500">
          Measure Temperature IoT
        </span>
      </div>
      </Link>

      {/* Logout Button */}
      <Link to="/AuthForm" >
        <button className="bg-[#139BC9] text-[#FFFFFF] px-4 py-2 rounded-[50px] hover:bg-blue-600">
          Logout
        </button>
      </Link>
    </div>
  );
};

// TemperatureCard Component
const TemperatureCard = ({ temperature }) => {
  return (
    <div className="bg-[#008EC0] text-white p-8 rounded-[50px] mx-auto relative md:w-[1082px] md:h-[711px] w-[90%] h-auto">
      {/* รูปภาพ */}
      <img
        src={Temperature}
        alt="Thermometer"
        className="absolute"
        style={{
          top: "50%", // ให้อยู่ที่กลางของคอนเทนเนอร์
          left: "50%", // ให้อยู่ที่กลางของคอนเทนเนอร์
          width: "auto", // ขนาดตามสัดส่วน
          height: "531px", // ขนาดที่ต้องการ
          transform: "translate(50%, -45%)", // ใช้เพื่อให้จุดกลางของรูปตรงกับตำแหน่งที่กำหนด
          objectFit: "contain", // ไม่ยืดหดรูป
        }}
      />

      {/* Title */}
      <h2 className="text-white text-[48px] font-bold mb-4 z-10 ">
        อุณหภูมิที่วัดได้
      </h2>

      {/* Temperature Display */}
      <div className="flex justify-center items-center space-x-4 mb-4 z-10">
        <span className="text-[96px] md:text-[128px] font-extrabold">{temperature} °C</span>
      </div>

      {/* Description */}
      <div className="flex justify-center">
        <p className="text-[16px] md:text-[24px] bg-[#55C1E8] px-6 py-2 rounded-[5px] mb-4 z-10">
          อุณหภูมิร่างกายปกติ และไม่มีอาการผิดปกติ
        </p>
      </div>
    </div>
  );
};

// BG Component
const BG = ({ children }) => {
  return (
    <div
      className="min-h-screen bg-blue-50 flex flex-col"
      style={{
        width: "100vw", // ครอบคลุมความกว้างหน้าจอ
        height: "100vh", // ครอบคลุมความสูงหน้าจอ
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
};

// TemperaturePage Component
const TemperaturePage = () => {
  return (
    <BG>
      {/* Header สำหรับ TemperaturePage */}
      <Header />

      {/* การแสดง TemperatureCard */}
      <div className="flex justify-center items-center h-screen">
        <TemperatureCard temperature={36} />
      </div>
    </BG>
  );
};

export default TemperaturePage;
