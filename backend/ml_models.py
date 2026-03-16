import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LinearRegression


data = pd.read_csv("dataset/monument_training.csv")



X = data[["temperature", "humidity", "pollution", "decay"]]
y = data["risk"]

rf_model = RandomForestClassifier()
rf_model.fit(X, y)



health_X = data[["decay"]]
health_y = data["future_health"]

health_model = LinearRegression()
health_model.fit(health_X, health_y)



def predict_risk(temp, hum, pollution, decay):

    input_data = pd.DataFrame([{
        "temperature": temp,
        "humidity": hum,
        "pollution": pollution,
        "decay": decay
    }])

    pred = rf_model.predict(input_data)

    return pred[0]


def predict_health(decay):

    input_data = pd.DataFrame([{
        "decay": decay
    }])

    pred = health_model.predict(input_data)

    return int(pred[0])