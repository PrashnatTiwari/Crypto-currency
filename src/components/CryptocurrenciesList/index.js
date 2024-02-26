import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptoCurrenciesList extends Component {
  state = {
    cryptoCurrencyList: [],
  }

  componentDidMount() {
    this.getCryptocurrencyData()
  }

  getCryptocurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))

    this.setState({
      cryptoCurrencyList: updatedData,
    })
  }

  render() {
    const {cryptoCurrencyList} = this.state
    return (
      <div className="card-container">
        <div className="top-container">
          <h1>Coin Type</h1>
          <div className="flex-container-2">
            <p>USD</p>
            <p>EURO</p>
          </div>
        </div>
        {cryptoCurrencyList.map(eachData => (
          <CryptocurrencyItem itemDetails={eachData} key={eachData.id} />
        ))}
      </div>
    )
  }
}

export default CryptoCurrenciesList
