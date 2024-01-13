import { useState } from 'react'
// import './App.css'
import useCurrrency from './hooks/useCurrency'
import { InputBox } from './components'
const App = () => {
  const [fromCurrency, setFromCurrency] = useState({label:'usd' , value : 1})
  const [toCurrency, setToCurrency] = useState({label:'inr' , value : 1})
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencies = useCurrrency(fromCurrency?.label)
  const options = Object.entries(currencies).map(([label, value]) => ({ label, value }))

  const onSwapCurrencyHandler = () => {
    setToCurrency(fromCurrency)
    setFromCurrency(toCurrency)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  const calculateConvertedAmount = () => {
    setConvertedAmount(amount * currencies[toCurrency?.label])
  }
  return (
    <div
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
      }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              calculateConvertedAmount()
            }}
          >
            <div className='w-full mb-1'>
              <InputBox
                label='From'
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                currencyOptions={options}
                currency={fromCurrency}
                onCurrencyChange={(currency) => setFromCurrency(currency)}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={onSwapCurrencyHandler}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label='To'
                amount={convertedAmount}
                amountDisable
                currencyOptions={options}
                currency={toCurrency}
                onCurrencyChange={(currency) => setToCurrency(currency)}
              />
            </div>
           
            <div className='w-full mt-1 mb-4'></div>
            <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
              Convert {fromCurrency?.label} to {toCurrency?.label}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
