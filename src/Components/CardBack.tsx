import React from "react";
import cardBackImage from "../assets/BgImages/bg-card-back.png";

const CardBack: React.FC = () => {
  return (
    <div className="w-full relative h-full lg:h-full lg:w-full">
      <div
        className=" relative rounded-xl bg-cover bg-center inset-0 overflow-hidden text-white p-4 shadow-lg w-full h-full"
        style={{ backgroundImage: `url(${cardBackImage})` }}
      >
        <div className="w-full relative h-full">
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 lg:right-10">
            <div className="text-center text-gray-100 lg:text-sm text-xs px-3 py-1 rounded">
              000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBack;
