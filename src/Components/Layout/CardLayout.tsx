import React, { useState } from "react";
import CardBack from "../CardBack";
import CardFront from "../CardFront";
import PaymentForm from "../PaymentForm";
import CardSubmitted from "../CardSubmitted";
import DesktopBg from "../../assets/BgImages/bg-main-desktop.png";
import "../../App.css";

const CardLayout: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleContinue = () => setIsSubmitted(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left section */}
      <div
        className="w-full lg:w-1/3 flex items-center justify-center relative bg-center bg-cover min-h-[300px] lg:min-h-screen"
        style={{
          backgroundImage: `url(${DesktopBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-full h-[220px] max-w-[350px] lg:h-[480px] lg:max-w-[420px] mx-auto">
          <div
            className="
              absolute z-20
              left-4 lg:left-1/2 lg:-translate-x-[30%] xl:-translate-x-0 2xl:translate-x-[10%]
              top-36 sm:top-26 lg:top-10
              w-[280px] h-[155px]
              sm:w-[320px] sm:h-[175px]
              md:w-[340px] md:h-[185px]
              lg:w-[360px] lg:h-[195px]
              2xl:w-[447px] 2xl:h-[245px]
              transition-all duration-300
            "
          >
            <CardFront />
          </div>
          <div
            className="
              absolute z-10 
              left-7 lg:left-1/ lg:translate-x-[20%] md:left-[10%] xl:translate-x-[70%] 2xl:translate-x-[70%]
              top-9 lg:top-[60%]
              w-[280px] h-[155px]
              sm:w-[320px] sm:h-[175px]
              md:w-[340px] md:h-[185px]
              lg:w-[360px] lg:h-[195px]
              2xl:w-[447px] 2xl:h-[245px]
              transition-all duration-300
            "
          >
            <CardBack />
          </div>
        </div>
      </div>
      {/* Right section */}
      <div className="w-full lg:w-2/3 flex items-center justify-center px-4 py-10 lg:py-0">
        <div className="w-full max-w-md">
          {isSubmitted ? (
            <CardSubmitted onContinue={handleContinue} />
          ) : (
            <PaymentForm onSubmit={() => setIsSubmitted(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
