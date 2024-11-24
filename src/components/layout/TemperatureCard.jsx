import React from "react";
import Temperature from "../../assets/photo/Temperature.png"

const TemperatureCard = ({ temperature }) => {
  return (
    <div
      className="bg-[#008EC0] 
        text-white 
        p-8 
        rounded-[50px]
        mx-auto 
        relative
        w-[1082px] 
        h-[711px]
      "
      >
      <img 
       src={Temperature}
       alt="Thermometer"
       className="absolute w-[auto] h-[531px]"
       style={{
         top: "110px",
         left: "750px",
         gap: "0px",
         
       }}
      />
    
      {/* Title */}
      <h2 className="text-[48px] font-bold mb-4 z-10">อุณหภูมิที่วัดได้</h2>

      {/* Temperature Display */}
      <div className="flex justify-center items-center space-x-4 mb-4 z-10">
        <span className="text-[128px] font-extrabold">{temperature} °C</span>
      
      </div>

      {/* Description */}
      <div className="flex justify-center">
      <p className="text-[24px] bg-[#55C1E8] px-6 py-2 rounded-[5px] mb-4 z-10 display inline-block"
      >
        อุณหภูมิร่างกายปกติ และไม่มีอาการผิดปกติ
      </p>
      </div>
       
      {/* Save Button */}
      <button className="bg-[#55C1E8] text-white px-6 py-2 rounded-full font-bold hover:bg-gray-100 z-10">
        เก็บค่าอุณหภูมิ
      </button>
     
    </div>
  );
};

export default TemperatureCard;