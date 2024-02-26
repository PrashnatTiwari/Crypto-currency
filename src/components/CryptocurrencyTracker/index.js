import './index.css'

import CryptoCurrenciesList from '../CryptocurrencyItem'

const CryptocurrencyTracker = () => {
  return (
    <div className="bg-container">
      <h1 className="main-heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <CryptoCurrenciesList />
    </div>
  )
}

export default CryptocurrencyTracker
