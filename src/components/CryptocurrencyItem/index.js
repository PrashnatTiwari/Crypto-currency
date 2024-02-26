import './index.css'

const CryptocurrencyItem = props => {
  const {itemDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = itemDetails
  return (
    <div className="item-container">
      <div className="flex-container">
        <img src={currencyLogo} className="currency-logo" alt="" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="flex-container">
        <p className="currency-name">{usdValue}</p>
        <p className="currency-name">{euroValue}</p>
      </div>
    </div>
  )
}

export default CryptocurrencyItem
