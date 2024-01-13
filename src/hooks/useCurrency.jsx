import { useState, useEffect } from 'react'
const useCurrency = (currency) => {
  const [data, setData] = useState({})
  /** for fetching the currency exchange rates */
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => {
        return res.json()
      })
      .then((res) => setData(res[currency]))
  }, [currency])
  return data
}

export default useCurrency;
