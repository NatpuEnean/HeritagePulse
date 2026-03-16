import requests

def get_pollution(city):

    url = f"https://api.openaq.org/v2/latest?city={city}"

    r = requests.get(url).json()

    pm25 = 0

    try:
        pm25 = r["results"][0]["measurements"][0]["value"]
    except:
        pm25 = 50

    return {
        "pm25": pm25
    }