import React from 'react'
import { useState, useEffect } from "react";
import States from './States';
import "./Home.css"

export default function Home() {
    const api_Data = "https://api.rootnet.in/covid19-in/stats/latest";
    const [ApiData, setApiData] = useState([]);
    const [searchbar, setSearchBar] = useState("");

        const FetchApiData = async () => {
          const response = await fetch(api_Data);
          const data = await response.json();
          console.log(data);
          setApiData(data);
        };

        useEffect(() => {
          FetchApiData();
        }, []);
    return (
      <div className='home'>
            <div className='bg'>
                <h1>COVID-19 Data Analysis in 2021-22</h1>
                  <div className="container">
                    <div className="card">
                      <h2><span className='o'>IN</span><span className='w'>D</span><span className='g'>IA</span></h2>
                      <h3>Total Confirmed Cases:
                        <span> {ApiData.data && ApiData.data.summary.total}</span>
                      </h3>
                      <h3>Total Discharged:
                        <span> {ApiData.data && ApiData.data.summary.discharged}</span>
                      </h3>
                      <h3>Total Casualties:
                        <span> {ApiData.data && ApiData.data.summary.deaths}</span>
                      </h3>
                    </div>
                  </div>
                <div className="search_bar">
                  <input
                    type="text"
                    placeholder="Search the States"
                    className="Search_bar"
                    value={searchbar}
                    onChange={(e) => setSearchBar(e.target.value)}
                  />
                </div>
            </div>
          <div className="states">
            {ApiData.data &&
              ApiData.data.regional
                .filter((states) => {
                  if (searchbar === "") {
                    return states;
                  } else if (
                    states.loc.toLowerCase().includes(searchbar.toLowerCase())
                  ) {
                    return states;
                  }
                  return null;
                })
                .map((states) => <States data={states}/>)}
          </div>
      </div>
  )
}
