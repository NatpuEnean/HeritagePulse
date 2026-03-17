import { useEffect, useState } from "react";
import API from "../services/api";
import MonumentCard from "../components/MonumentCard";
import "../styles/Home.css";

import tanjore from "../assets/images/tanjore.jpeg";
import taj from "../assets/images/tajmahal.jpeg";
import hampi from "../assets/images/hampi.jpeg";
import jaisalmer from "../assets/images/jaisalmar.jpeg";
import Statue from "../assets/images/Statue.jpeg";
import machu from "../assets/images/machu.jpeg";
import moha from "../assets/images/moha.jpeg";
import ma from "../assets/images/ma.jpeg";

const imageMap: { [key: string]: string } = {
  "Brihadeeswarar Temple": tanjore,
  "Taj Mahal": taj,
  "Hampi Stone Chariot": hampi,
  "Jaisalmer Fort": jaisalmer,
  "Statue of Liberty": Statue,
  "Bagerhat Mosques": ma,
  "Machu Picchu": machu,
  "Mohenjo-Daro": moha
};

export default function Home() {
  const [monuments, setMonuments] = useState<any[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  // Fetch monuments
  useEffect(() => {
    API.get("/monuments").then(res => {
      setMonuments(res.data);
    });
  }, []);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDarkMode(true);
  }, []);

  // Save theme
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Filter monuments
  const filteredMonuments = monuments.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={darkMode ? "dark" : "light"}>

      {/* HEADER */}
      <div className="header">
        <h1>HeritagePulse AI</h1>

        <div className="header-right">

          {/* 🔍 SEARCH BAR (CUSTOM DESIGN) */}
       <div className="search-container">
  <input
    type="text"
    placeholder="Search"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  <div className="search-icon"><span className="material-symbols-outlined">search</span></div>
</div>

          {/* 🌙 THEME TOGGLE */}
          <div
            className={`toggle ${darkMode ? "dark-toggle" : ""}`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <div className="toggle-thumb">
              {darkMode ? "🌙" : "☀️"}
            </div>
          </div>

        </div>
      </div>

      {/* GRID */}
      <div className="grid">
        {filteredMonuments.length > 0 ? (
          filteredMonuments.map((m, i) => (
            <MonumentCard
              key={i}
              name={m.name}
              city={m.city}
              image={imageMap[m.name] || taj}
            />
          ))
        ) : (
          <p className="no-results">No monuments found</p>
        )}
      </div>

    </div>
  );
}