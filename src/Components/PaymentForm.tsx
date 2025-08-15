import React, { useState } from "react";

interface PaymentFormProps {
  onSubmit: () => void;
}
const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit }) => {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [errors, setErrors] = useState({
    cardholderName: false,
    cardNumber: false,
    expiry: false,
    expiryInvalid: false,
    cvc: false,
  });

  const validateForm = () => {
    const newErrors = {
      cardholderName: !cardholderName.trim(),
      cardNumber: !cardNumber.replace(/\s/g, "").match(/^\d{16}$/),
      expiry: !expMonth.trim() || !expYear.trim(),
      expiryInvalid: false,
      cvc: !cvc.match(/^\d{3}$/),
    };

    if (!newErrors.expiry) {
      const month = parseInt(expMonth, 10);
      const year = parseInt(`20${expYear}`, 10);
      const currentYear = new Date().getFullYear();
      newErrors.expiryInvalid = month < 1 || month > 12 || year < currentYear;
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit();
    }
  };

  return (
    <div className="w-full ">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 w-full max-w-[400px] mx-auto mt-10 lg:mt-0"
      >
        <div className="form-group space-y-2 ">
          <label
            htmlFor="cardholder-name"
            className="block text-[10px] lg:text-xs font-semibold text-purple-950 tracking-[0.15em] uppercase"
          >
            CARDHOLDER NAME
          </label>
          <input
            type="text"
            id="cardholder-name"
            className="w-full text-xs border border-gray-200 focus:border-transparent focus:ring-2 focus:ring-[linear-gradient(90deg,_hsl(249,99%,64%)_0%,_hsl(278,94%,30%)_100%)] px-4 py-3 rounded-lg focus:outline-none transition-colors placeholder-gray-400 font-grotesk text-base"
            placeholder="e.g Jane Appleseed"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
          />
          <div
            className={`text-red-500 text-xs ${
              errors.cardholderName ? "" : "hidden"
            }`}
          >
            Can't be blamk
          </div>
        </div>

        <div className="space-y-2 form-group ">
          <label className="block text-[10px] lg:text-xs font-semibold text-gray-700 tracking-wide">
            CARD NUMBER
          </label>
          <input
            type="text"
            maxLength={19}
            id="card-number"
            className="w-full text-xs border border-gray-200 focus:border-transparent focus:ring-2 focus:ring-[linear-gradient(90deg,_hsl(249,99%,64%)_0%,_hsl(278,94%,30%)_100%)] px-4 py-3 rounded-lg focus:outline-none transition-colors placeholder-gray-400 font-grotesk text-base"
            placeholder="e.g. 1234 5678 9123 0000"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          <div
            className={`text-red-500 text-xs ${
              errors.cardNumber ? "" : "hidden"
            }`}
          >
            Can't be blank or must be 16 digits
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="exp-month"
              className="block text-[10px] lg:text-xs font-semibold text-purple-950 tracking-[0.15em] uppercase mb-2"
            >
              EXP. DATE (MM/YY)
            </label>
            <div className="flex space-x-2">
              <input
                id="exp-month"
                type="text"
                maxLength={2}
                className="text-center text-xs w-full border border-gray-200 focus:border-solid focus:ring-2 focus:ring-[linear-gradient(90deg,_hsl(249,99%,64%)_0%,_hsl(278,94%,30%)_100%)] px-4 py-3 rounded-lg focus:outline-none transition-colors placeholder-gray-400 font-grotesk text-base"
                placeholder="MM"
                value={expMonth}
                onChange={(e) => setExpMonth(e.target.value)}
              />
              <input
                id="exp-year"
                type="text"
                maxLength={2}
                className=" text-center text-xs w-full border border-gray-200 focus:border-transparent focus:ring-2 focus:ring-[linear-gradient(90deg,_hsl(249,99%,64%)_0%,_hsl(278,94%,30%)_100%)] px-4 py-3 rounded-lg focus:outline-none transition-colors placeholder-gray-400 font-grotesk text-base"
                placeholder="YY"
                value={expYear}
                onChange={(e) => setExpYear(e.target.value)}
              />
            </div>
            <div
              className={`text-red-500 text-[10px] lg:text-xs ${
                errors.expiry ? "" : "hidden"
              }`}
            >
              Can't be blamk
            </div>
            <div
              className={`text-red-500 text-[10px] lg:text-xs mt-2 ${
                errors.expiryInvalid ? "" : "hidden"
              }`}
            >
              Enter a valid date
            </div>
          </div>

          <div className="flex-1">
            <div className="space-y-2">
              <label className="block tracking-wide uppercase text-[10px] lg:text-xs font-semibold text-gray-700">
                CVC
              </label>
              <input
                id="exp-year"
                type="text"
                maxLength={3}
                className="form-control w-full text-xs border border-gray-200 focus:border-transparent focus:ring-2 focus:ring-[linear-gradient(90deg,_hsl(249,99%,64%)_0%,_hsl(278,94%,30%)_100%)] px-4 py-3 rounded-lg focus:outline-none transition-colors placeholder-gray-400"
                placeholder="e.g 123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </div>
            <div
              className={`text-red-500 text-[10px] lg:text-xs ${
                errors.cvc ? "" : "hidden"
              }`}
            >
              Can't be blamk
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-950 rounded-lg hover:bg-purple-900 w-full text-white bg-purple-950 py-4 mt-2 font-grotesk text-xs lg:text-lg"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
