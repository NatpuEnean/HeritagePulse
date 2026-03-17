import { Link } from "react-router-dom";
import "../styles/Card.css";

interface Props {
  name: string;
  city: string;
  image: string;
}

export default function MonumentCard({ name, city, image }: Props) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />

      <h2>{name}</h2>
      <p>{city}</p>

      {/* ✅ FIXED */}
      <Link to={`/monument/${encodeURIComponent(name)}`} className="view-btn">
        View Details
      </Link>
    </div>
  );
}