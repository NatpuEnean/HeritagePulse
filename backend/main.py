from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from monuments import monuments
from weather_service import get_weather
from pollution_service import get_pollution
from decay_model import decay_velocity, find_decay_cause, get_solution
from ml_models import predict_risk, predict_health

app = FastAPI()

# CORS (allow all for now)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check
@app.get("/")
def home():
    return {"status": "API running"}

@app.get("/monuments")
def get_monuments():
    return monuments

@app.get("/monument/{name}")
def monument_details(name: str):
    m = next(x for x in monuments if x["name"] == name)

    weather = get_weather(m["lat"], m["lon"])
    pollution = get_pollution(m["city"])

    decay = decay_velocity(
        m["material"],
        weather["humidity"],
        pollution["pm25"],
        weather["temperature"]
    )

    risk = predict_risk(
        weather["temperature"],
        weather["humidity"],
        pollution["pm25"],
        decay
    )

    health_future = predict_health(decay)

    cause = find_decay_cause(
        weather["humidity"],
        pollution["pm25"],
        weather["temperature"]
    )

    solution = get_solution(cause)

    return {
        "monument": m,
        "weather": weather,
        "pollution": pollution,
        "decay_percentage": round(decay, 2),
        "risk": risk,
        "future_health": health_future,
        "main_cause": cause,
        "solution": solution,
        "decay": decay
    }

# Railway entry
if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port)