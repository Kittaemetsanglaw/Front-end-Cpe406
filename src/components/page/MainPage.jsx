import React from "react";
// รูปภาพต่าง ๆ
import logo from "../../assets/photo/logo.png"; // โลโก้
import doctor1 from "../../assets/photo/doctor1.png"; // รูปหมอคนแรก
import doctor2 from "../../assets/photo/doctor2.png"; // รูปหมอคนที่สอง
import iot from "../../assets/photo/iot.png"; //รูปมุมบน

const MainPage = () => {
  return (
    <div
      className="min-h-screen bg-blue-50 flex justify-center items-center"
      style={{
        backgroundImage: "linear-gradient(to bottom right, #e0f7fa, #ffffff)", // ไล่สีพื้นหลัง
      }}
    >
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 max-w-4xl">
        {/* ด้านซ้าย - ข้อความ */}
        <div className="md:w-1/2 p-4 space-y-4 text-center md:text-left">
          {/* โลโก้ */}
          <img src={logo} alt="Logo" className="w-20 h-20 mx-auto md:mx-0" />
          {/* ชื่อโปรเจกต์ */}
          <h1 className="text-4xl font-bold text-blue-500">temperature IOT</h1>
          {/* คำอธิบาย */}
          <p className="text-gray-700 text-sm md:text-base">
            การตรวจอุณหภูมิร่างกายเป็นกระบวนการที่ใช้ในการวัดอุณหภูมิของร่างกาย
            เพื่อการตรวจสอบสุขภาพ
            โดยปกติจะใช้เครื่องมืออย่างเทอร์โมมิเตอร์ในการวัด
            ซึ่งช่วยให้สามารถประเมินอุณหภูมิสูงหรือต่ำกว่าปกติ
            ที่อาจบ่งชี้ถึงการติดเชื้อหรือความผิดปกติทางสุขภาพ
          </p>
          {/* ปุ่ม Sign In และ Sign Up */}
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Sign in
            </button>
            <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-200">
              Sign up
            </button>
          </div>
        </div>

        {/* ด้านขวา - รูปภาพ */}
        <div className="md:w-1/2 relative flex justify-center items-center">
          {/* รูปหมอ */}
          <div className="relative">
            <img
              src={doctor1}
              alt="Doctor 1"
              className="w-32 h-48 md:w-40 md:h-56 absolute top-0 left-10"
              style={{ zIndex: 2 }}
            />
            <img
              src={doctor2}
              alt="Doctor 2"
              className="w-32 h-48 md:w-40 md:h-56 absolute top-10 left-24"
              style={{ zIndex: 1 }}
            />
          </div>
          {/* รูป IoT ด้านขวาบน */}
          <img
            src={iot}
            alt="IoT Device"
            className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
