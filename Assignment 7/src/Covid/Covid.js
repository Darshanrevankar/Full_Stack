import  {useEffect,useState} from 'react';
import './Covid.css'
import Axios from 'axios';


function Covid ()  {
 const [data,setdata] = useState([])
  useEffect(()=>{
    Axios.get('https://api.rootnet.in/covid19-in/stats/latest')
    .then(res =>{
      console.log("Getting Data from : : : :",res.data)
      setdata(res.data.data.regional)}).catch(err=>console.log(err))
      
  }, [])
  const arr = data.map((data,index) =>{
    return(
      <tr>
        <td>{data.loc}</td>
        <td>{data.confirmedCasesIndian}</td>
        <td>{data.discharged}</td>
        <td>{data.deaths}</td>
      </tr>
    )
  })
  
  return(
    <div className="Covid">
      <table>
        <tr>
        <th>loc</th>
        <th>confirmedCasesIndian</th>
        <th>discharged</th>
        <th>deaths</th>
        </tr>
        {arr}
      </table>
    </div>
  )
  

}
export default Covid;