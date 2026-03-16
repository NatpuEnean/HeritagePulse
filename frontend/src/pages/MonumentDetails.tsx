import {useEffect,useState} from "react"
import {useParams} from "react-router-dom"
import API from "../services/api"
import "../styles/Monument.css"
import DecayChart from "../components/DecaycChart"

export default function MonumentDetails(){

const {name}=useParams()

const [data,setData]=useState<any>(null)

useEffect(()=>{

API.get(`/monument/${name}`).then(res=>{

setData(res.data)

})

},[])

if(!data) return <div>Loading...</div>

return(

<div className="container">

<h1>{data.monument.name}</h1>

<h3>{data.monument.city}</h3>
<DecayChart
 humidity={data.weather.humidity}
 pollution={data.pollution.pm25}
 temperature={data.weather.temperature}
/>

<div className="stats">

<p>Temperature: {data.weather.temperature} °C</p>

<p>Humidity: {data.weather.humidity}%</p>

<p>PM2.5: {data.pollution.pm25}</p>

<p>Decay Velocity: {data.decay}</p>

<p>Risk Level: {data.risk}</p>
<p>Current Decay: {data.decay_percentage}%</p>

<p>Predicted Health After 1 Year: {data.future_health}%</p>
<div className="decay-bar">
  <div
    className="decay-fill"
    style={{ width: `${data.decay_percentage}%` }}
  ></div>
</div>

<p>Main Cause of Decay: {data.main_cause}</p>

<p>Recommended Solution: {data.solution}</p>

</div>

</div>

)
}