import React from "react";
import cardFrontImage from "../assets/BgImages/bg-card-front.png";
import cardLogo from "../assets/BgImages/card-logo.svg";
import "../App.css";

const CardFront: React.FC = () => {
  return (
    <div className="relative w-full h-full lg:w-full lg:h-full">
      <div
        className="relative rounded-lg bg-cover bg-center inset-0 overflow-hidden text-white  shadow-lg w-full h-full"
        style={{ backgroundImage: `url(${cardFrontImage})` }}
      >
        <div className="relative w-full h-full p-4 lg:p-6 text-white">
          <div className=" absolute top-6 lg:top-6 left-4 lg:left-6">
            <img
              src={cardLogo}
              alt=""
              className="w-14 h-8 lg:w-[4.5rem] lg:h-10"
            />
          </div>
          <div className="absolute bottom-12 lg:bottom-20 lg:right-6 right-4 left-4 lg:left-6">
            <div className="lg:text-xl text-xl tracking-widest font-grotesk font-medium uppercase">
              0000 0000 0000 0000
            </div>
          </div>
          <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 flex justify-between items-end text-xs lg:text-sm">
            <div className="tracking-wide">JANE APPLESEED</div>
            <div>00/00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
