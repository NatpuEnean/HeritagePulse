import {useEffect,useState} from "react"
import API from "../services/api"
import MonumentCard from "../components/MonumentCard"
import "../styles/Home.css"

export default function Home(){

const [monuments,setMonuments]=useState<any[]>([])

useEffect(()=>{

API.get("/monuments").then(res=>{

setMonuments(res.data)

})

},[])

return(

<div>

<h1>HeritagePulse AI</h1>

<div className="grid">

{monuments.map((m,i)=>(
<MonumentCard key={i} name={m.name} city={m.city}/>
))}

</div>

</div>

)
}