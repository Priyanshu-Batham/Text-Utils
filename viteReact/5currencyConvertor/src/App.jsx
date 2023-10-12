import { useState, useEffect } from 'react'
import useCurrInfo from './hooks/useCurrInfo'
import InputBox from './components/InputBox'

function App() {
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const data = useCurrInfo(fromCurrency);
  const options = Object.keys(data);

  
  // calculation part:
  function convert() {
    setConvertedAmount(amount * data[toCurrency]);
  }

  function swap() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(1);
    setConvertedAmount(0);
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://c0.wallpaperflare.com/preview/495/559/584/analysis-analytics-analyze-app.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                // label="From"
                // amount={amount}
                // currencyOptions={options}
                // onCurrencyChange={(currency) => setAmount(amount)}
                // selectCurrency={from}
                // onAmountChange={(amount) => setAmount(amount)}

                label = "From"
                amount = {amount}
                onAmountChange = {setAmount}
                amountDisable = {false}
                selectCurrency = {fromCurrency}
                onCurrencyChange = {setFromCurrency}
                currencyDisable = {false}
                currencyOptions = {options}
                        />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                // label="To"
                // amount={convertedAmount}
                // currencyOptions={options}
                // onCurrencyChange={(currency) => setTo(currency)}
                // selectCurrency={from}
                // amountDisable

                label = "To"
                amount = {convertedAmount}
                // onAmountChange = {setAmount}
                amountDisable = {true}
                selectCurrency = {toCurrency}
                onCurrencyChange = {setToCurrency}
                currencyDisable = {false}
                currencyOptions = {options}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
