import React from "react";
import CompleteIcon from "../assets/BgImages/icon-complete.svg";

interface CardSubmittedProps {
  onContinue: () => void;
}

const CardSubmitted: React.FC<CardSubmittedProps> = ({ onContinue }) => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[400px] mt-14">
      <div className="mb-5">
        <img src={CompleteIcon} alt="" className="" />
      </div>
      <div className="text-center">
        <h1 className="text-xl">Thank You!</h1>
        <p className="text-sm">We've added your card details</p>
      </div>
      <button
        type="submit"
        onClick={onContinue}
        className="transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-950 rounded-lg hover:bg-purple-900 w-full text-white bg-purple-950 py-4 mt-2 font-grotesk text-xs lg:text-lg"
      >
        Continue
      </button>
    </div>
  );
};

export default CardSubmitted;
