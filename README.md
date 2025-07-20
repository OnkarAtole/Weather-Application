
# 🌦️ React Weather App

A simple and responsive **Weather Application** built with **React.js** that displays the current weather for any city using the **OpenWeatherMap API**. The application uses **Material UI (MUI)** for a modern and user-friendly interface.

---

## 📌 Features

- 🔍 Search for any city to get real-time weather data
- 🌡️ Displays temperature, weather condition, humidity, and wind speed
- 🎨 Clean and responsive UI using Material UI components
- ⚡ Fast and smooth user experience with real-time API integration
- 📱 Mobile-friendly layout

---

## 🛠️ Tech Stack

| Technology          | Description                                 |
|---------------------|---------------------------------------------|
| React.js            | Frontend framework                          |
| OpenWeatherMap API  | Weather data provider                       |
| Material UI (MUI)   | UI component library for styling            |
| Axios / Fetch       | For making HTTP requests                    |
| Environment Variables | To securely manage API key               |

---

## 📦 Prerequisites

Before running the project, ensure the following is installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes bundled with Node.js)

To check if Node.js and npm are installed:

```bash
node -v
npm -v
````

If not installed, download and install from [nodejs.org](https://nodejs.org/).

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd weather-app
```

### 2. Install dependencies

```bash
npm install
```

---

## 🎨 Install Material UI

To install Material UI and related packages, run the following commands:

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install @fontsource/roboto
```

These packages include:

* Core Material UI components
* Icons (like search, weather icons, etc.)
* Roboto font (default Material UI font)

---

## 🔑 OpenWeatherMap API Setup

> ⚠️ **Important:** OpenWeatherMap's free tier provides **1000 API calls per month**. Exceeding this limit will result in failed API requests.

### Steps to get your API key:

1. Visit [OpenWeatherMap API](https://openweathermap.org/api)
2. Sign in or create a free account
3. Go to your **dashboard**
4. Copy your API key from the **API Keys** section

---

## 🔧 Using the API Key

### Option 1: Directly in the Code (for learning/testing)

Open `SearchBox.jsx` and replace:

```js
const API_KEY = "your_api_key_here";
```

with your actual API key.

### Option 2: Using Environment Variables (recommended)

1. Create a `.env` file in the project root
2. Add your API key like this:

```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

3. In `SearchBox.jsx`, access it like this:

```js
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
```

> 💡 Make sure to restart the development server after creating or updating the `.env` file.

---

## ▶️ Run the App

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## 📁 Folder Structure

```
weather-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── SearchBox.jsx
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── README.md
```

---

## ⚠️ API Usage Notice

* Free tier includes **1000 API calls/month**
* Use environment variables to protect your API key
* For production-level apps or more frequent usage, consider upgrading your OpenWeatherMap plan

---

## ✅ Future Improvements

* [ ] Add 5-day weather forecast feature
* [ ] Add weather by geolocation
* [ ] Add dark mode toggle

---

