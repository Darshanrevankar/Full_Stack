import React from 'react'
import "./States.css";
export default function States(props) {
  return (
      <div className="card1">
        <h2>{props.data.loc}</h2>
          <h3>Total Confirmed Cases:
            <span> {props.data.totalConfirmed}</span>
          </h3>
          <h3>Total Discharged:
            <span> {props.data.discharged}</span>
          </h3>
          <h3>Total Casualties:
            <span> {props.data.deaths}</span>
          </h3>
      </div>
  )
}
