import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",

  amountDisabled = false,
  currencyDisabled = false,
}) {
  const id = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex`}>
      <div className="w-1/2">
        <label htmlFor={id} className="text-black mb-2 inline-block">
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="outline-none bg-transparent w-full py-1.5"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisabled}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black mb-2 w-full">Currency type</p>
        <select
          name="currency"
          className="outline-none bg-gray-100 rounded-lg px-1 py-1 w-full cursor-pointer"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
