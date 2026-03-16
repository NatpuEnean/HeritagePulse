import "../styles/Card.css"

interface Props{
 name:string
 city:string
}

export default function MonumentCard({name,city}:Props){

return(
<div className="card">

<h2>{name}</h2>

<p>{city}</p>

<a href={`/monument/${name}`}>View Details</a>

</div>
)
}