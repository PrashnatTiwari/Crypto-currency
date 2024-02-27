import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptoCurrenciesList extends Component {
  state = {
    cryptoCurrencyList: [],
    isLoading: true,
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
      isLoading: false,
    })
  }

  render() {
    const {cryptoCurrencyList, isLoading} = this.state
    return (
      <div className="card-container">
        <div className="top-container">
          <p className="top-container-heading">Coin Type</p>
          <div className="flex-container-2">
            <p className="top-container-heading">USD</p>
            <p className="top-container-heading>EURO</p>
          </div>
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          cryptoCurrencyList.map(eachData => (
            <CryptocurrencyItem itemDetails={eachData} key={eachData.id} />
          ))
        )}
  }
      </div>
    )
  }
}

export default CryptoCurrenciesList
