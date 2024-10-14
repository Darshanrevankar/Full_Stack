import React from 'react'

function Earth(props) {
  return (
    
    <div className="card my-3" style={{width: "18rem"}}>
    <div className='text-center'>
      <p className='card-title'>Earth on :{props.date}</p>
    <img src={props.image} className="img-fluid"  style={{width: "10rem"}}alt="..." />
    <p className=''>Camera :{props.full_name}</p>
    </div>
    
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Image Id : {props.id}</li>
      <li className="list-group-item">Landing Date: : {props.landing_date}</li>
      <li className="list-group-item">Launch Date : {props.launch_date}</li>
      <li className="list-group-item">Name : {props.name}</li>

    </ul>
  </div>
  )
}

export default Earth