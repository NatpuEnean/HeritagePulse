# HeritagePulse AI
### Climate Risk Intelligence for Cultural Monuments

HeritagePulse AI is a data-driven platform that analyzes how **climate conditions accelerate the deterioration of historical monuments**.  
It combines **environmental data, predictive machine learning, and visual analytics** to monitor monument health and identify preservation risks.

The system transforms abstract climate indicators into **actionable cultural preservation insights**.

---

# Problem Statement

Historical monuments across the world are increasingly threatened by **climate change and environmental stress**.  

Key environmental factors contributing to monument degradation include:

- Rising **humidity**
- Increasing **air pollution**
- Extreme **temperature fluctuations**
- Acid rain and atmospheric chemicals
- Wind erosion and moisture accumulation

Many heritage structures were built centuries ago and were **not designed to withstand modern environmental stress**.

Currently, preservation efforts are often **reactive**, meaning restoration begins only after visible damage occurs.

HeritagePulse AI aims to provide **proactive monitoring and predictive insights** to help conservation teams act earlier.

---

# Importance for Society

Cultural monuments are more than historical structures—they represent:

- Cultural identity
- Architectural heritage
- Tourism economies
- Historical knowledge
- Community pride

When monuments deteriorate, societies lose **irreplaceable historical assets**.

Examples include:

- Marble discoloration in the **Taj Mahal** due to pollution
- Stone erosion in **Hampi monuments**
- Humidity damage to temple structures

Climate change is accelerating these threats.  
Therefore, systems like HeritagePulse AI help societies **monitor, understand, and respond to environmental risks affecting heritage sites**.

---

# Key Features

### Real-Time Environmental Monitoring
The platform retrieves environmental data such as:

- Temperature
- Humidity
- Pollution (PM2.5)

using external APIs.

---

### Decay Velocity Analysis
A custom algorithm calculates the **rate of monument deterioration** based on environmental stress factors.

---

### Machine Learning Risk Classification
A **Random Forest model** predicts the monument’s risk category:

- Low
- Moderate
- High
- Critical

---

### Health Prediction
A **Linear Regression model** predicts monument health **one year into the future**.

---

### Root Cause Analysis
The system identifies the **primary environmental factor responsible for decay**.

Example causes:

- Humidity damage
- Air pollution corrosion
- Thermal stress

---

### Recommended Preservation Solutions
Based on the detected cause, the platform suggests **conservation strategies**.

---

### Visual Analytics Dashboard
Graphs display environmental stress factors and predicted monument health trends.

---

# Monuments Currently Included

The prototype currently analyzes the following monuments:

- Brihadeeswarar Temple (Tamil Nadu)
- Taj Mahal (Agra)
- Hampi Stone Chariot (Karnataka)
- Jaisalmer Fort (Rajasthan)

These monuments represent **different climates and construction materials**, enabling comparative analysis.

---

# Technology Stack

## Frontend
- React
- TypeScript
- Chart.js
- CSS

## Backend
- Python
- FastAPI

## Machine Learning
- Scikit-learn
- Random Forest Classifier
- Linear Regression

## APIs
- OpenWeather API
- OpenAQ Pollution API

---

# Dependencies

## Backend

Install required Python packages:

python -m pip install requirements.txt

---

## Frontend

Install required npm packages:

npm install axios chart.js react-chartjs-2 react-router-dom


---

# Environment Setup

Create a file in the backend directory:
config.py

Add your OpenWeather API key:

```python
WEATHER_API_KEY = "YOUR_API_KEY"  
```

You can obtain an API key from:

https://openweathermap.org/api

# How to Run the Project

## Step 1 — Start Backend

Navigate to the backend folder:


cd backend


Run the FastAPI server:


uvicorn main:app --reload


Backend will start at:


http://localhost:8000

## Step 2 — Start Frontend

Open a new terminal and navigate to the frontend folder:


cd frontend


Run the React application:


npm run dev


Frontend will start at:


http://localhost:5173

# Using the Application

1) Open the homepage.

2) View the list of monitored monuments.

3) Click a monument to open the analysis dashboard.

4) The dashboard displays:

5) Environmental data

6) Current decay percentage

7) Risk classification

8) Predicted health after one year

9) Primary cause of decay

10) Recommended conservation solution

11) Environmental stress graphs

# Machine Learning Dataset

The project includes a training dataset:


dataset/monument\_training.csv


## Columns:


temperature
humidity
pollution
decay
risk
future\_health


This dataset is used to train the Random Forest and Regression models.

# Future Improvements

Possible future enhancements include:

Multi-year climate prediction

Satellite environmental data

Global monument database

3D monument damage visualization

AI-driven conservation planning

##  Contributors


<img src="https://github.com/NatpuEnean.png" width="60" style="border-radius:50%"> <br> [Natpu Enean](https://github.com/NatpuEnean)<br> [Backend Development]