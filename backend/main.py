from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from monuments import monuments
from weather_service import get_weather
from pollution_service import get_pollution
from decay_model import decay_velocity
from ml_models import predict_risk, predict_health
from decay_model import decay_velocity, find_decay_cause, get_solution

app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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
        "decay_percentage": round(decay,2),
        "risk": risk,
        "future_health": health_future,
        "main_cause": cause,
        "solution": solution
    }