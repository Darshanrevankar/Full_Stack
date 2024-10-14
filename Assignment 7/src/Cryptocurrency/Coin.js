import React from 'react'

export default function Coin(props) {
  return (
  
    <div className='col-md-4 pb-4'>

<div className="card" style={{width: "18rem"}}>
  <img src={props.image} className="card-img-top" alt="no-img."/>
  <div className="card-body">
  <h1 className='card-title'>{props.name}</h1>

  </div>
</div>
</div>

  )
}