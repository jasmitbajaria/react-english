import { useState } from "react";
import "./App.css";
import React from "react";
import InputBox from "./components/inputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    const rate = currencyInfo[to];
    if (typeof rate === "number" && !isNaN(rate)) {
      const converted = amount * rate;
      setConvertedAmount(converted);
    } else {
      console.warn(`Conversion rate for '${to}' is not a valid number:`, rate);
      setConvertedAmount(0);
    }
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center relative">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/27288569/pexels-photo-27288569.jpeg)",
          filter: "blur(4px)",
          zIndex: -1,
        }}
      ></div>

      <div className="z-10 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl bg-green-300 p-3 rounded mb-8">
          Welcome to Currency Converter App
        </h1>
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                currencyOptions={options}
                selectedCurrency={from}
              />
            </div>

            {/* CORRECTED div for the swap button positioning */}
            <div className="relative h-0.5 w-full">
              {" "}
              {/* A thin div to serve as an anchor */}
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-300 text-white px-2 py-0.5 cursor-pointer"
                onClick={swap}
              >
                swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="to"
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                currencyOptions={options}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-300 text-white px-4 py-3 rounded-lg cursor-pointer"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
