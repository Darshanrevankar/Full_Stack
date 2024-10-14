import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import Earth from './Earth';
function Nasa() {
    const [draws ,setDraws] =useState([])
    const [dateFilter, setDateFilter] = useState('')
   const url ='https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=vV3PnNYzeRUep8YxeHe1L4tpLNsoJL6JHSwLgQtK'
    
    useEffect(()=>{
        axios.get(url).then(res =>{
          console.log(res.data.photos)
           setDraws(res.data.photos)
        })
      },[])

      const getTheDate = (e) =>{
        setDateFilter(e.target.value)
      }

      

      const dateFilterDisplay =  draws.filter(draw =>{
        return draw.earth_date > dateFilter 
      })

      
      return (
      <div className='text-center p-4'>
           <div className='row'>
            <h1>Data from Nasa </h1>
              <div className="input-group w-50 center" >
                  <input className="form-control" type="date" placeholder="search by date" onChange={getTheDate} />
              </div>
           </div>
            <div className='row px-5 '>
    
      {dateFilterDisplay.map((draw)=>{
        
    return (
      <div className='col-lg-4'>
     
      <Earth date={draw.earth_date} image={draw.img_src} full_name={draw.camera.full_name} name={draw.rover.name} id={draw.id} landing_date={draw.rover.landing_date} launch_date={draw.rover.launch_date}/>
    </div>
  )
})}
 </div>
        </div>
      );
}

export default Nasa