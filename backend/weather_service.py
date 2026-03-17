import requests
from config import WEATHER_API_KEY

def get_weather(lat, lon):

    url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={WEATHER_API_KEY}&units=metric"

    r = requests.get(url).json()

    print("Weather API response:", r)


    return {
        "temperature": r["main"]["temp"],
        "humidity": r["main"]["humidity"],
        "wind": r["wind"]["speed"]
    }