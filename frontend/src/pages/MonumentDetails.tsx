import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import "../styles/Monument.css";
import DecayChart from "../components/DecaycChart";

export default function MonumentDetails() {
  const { name } = useParams();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    API.get(`/monument/${name}`).then((res) => {
      setData(res.data);
    });
  }, [name]);

  if (!data) return <div className="loading">Loading monument data...</div>;

  return (
    <div className="monument-container">
      <header className="monument-header">
        <h1>{data.monument.name}</h1>
        <p className="location-tag">{data.monument.city}</p>
      </header>

      <div className="dashboard-grid">
        {/* Chart Section */}
        <section className="chart-card">
          <h3>Environmental Impact Analysis</h3>
          <DecayChart
            humidity={data.weather.humidity}
            pollution={data.pollution.pm25}
            temperature={data.weather.temperature}
          />
        </section>

        {/* Status Section */}
        <section className="stats-card">
          <div className="risk-badge" data-risk={data.risk.toLowerCase()}>
            {data.risk} RISK
          </div>

          <div className="stat-group">
            <label>Current Decay</label>
            <div className="decay-bar">
              <div
                className="decay-fill"
                style={{ width: `${data.decay_percentage}%` }}
              ></div>
            </div>
            <span className="stat-value">{data.decay_percentage}%</span>
          </div>

          <div className="metrics-grid">
            <div className="metric">
              <span>Temp</span>
              <strong>{data.weather.temperature}°C</strong>
            </div>
            <div className="metric">
              <span>Humidity</span>
              <strong>{data.weather.humidity}%</strong>
            </div>
            <div className="metric">
              <span>PM2.5</span>
              <strong>{data.pollution.pm25}</strong>
            </div>
          </div>
 <p><strong>Predicted Health of Monument:</strong> {data.health_future}</p>
          <hr />

          <div className="insights">
            <p><strong>Main Cause:</strong> {data.main_cause}</p>
            <p className="solution-text">
              <strong>Recommendation:</strong> {data.solution}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}