import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"
import Coin from './Coin';

export const Crypto = () => {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [priceFilter] = useState(0)

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  
  useEffect(()=>{
    axios.get(url).then(res =>{
      console.log(res.data)
      setCoins(res.data)
    })
  },[])

  const getInputValue = (e) =>{
    setSearch(e.target.value)
  }

  // const getInputValue2 = (e) =>{
  //   setPriceFilter(e.target.value)
  // }

  const filterCoins = coins.filter(coin =>{
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })
  
  const priceFilterCoins = filterCoins.filter(coin =>{
    return coin.current_price > priceFilter
  })

  return (
    <div >
      <center> <h1>Crypto currency</h1></center>
      <div className="row">
      <div className="col-md-3"></div>
        <div className="col-md-6 text-center">
        <form>
            <input type="text" className="form-control" onChange={getInputValue} placeholder="search"/>
            
        </form>

        </div>
        <div className="col-md-3"></div>
        </div>
        <div className='text-center p-4'>
       <div className='coins-container'>
          <div className='row'>
            
          {
            priceFilterCoins.map((coin) =>{
              return(
           
               <Coin image={coin.image} name={coin.name}/>)
            })
          } 
          
          </div>
       </div>
       </div>
    </div>
  );
  
}


export default Crypto