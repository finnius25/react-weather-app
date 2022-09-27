import { useEffect, useState } from "react";
import "./App.css";
import bg from "./assets/bg-img.jpg";
import axois from 'axios'

const App = () => {
  const [weatherData, setWeatherData] = useState({})
  const [temp, setTemp] = useState();
  const [location, setLocation] = useState('Dallas');
  const [weatherDescription, setWeatherDescription] = useState();
  const [isCelcius, setIsCelcius] = useState(false);

  const styles = {
    backgroundImage: `url(${bg})`,
  };

  const API_KEY = "19764aafca74765d182a3e96f40348ec";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=London&appid=${API_KEY}`

  const fetchWeatherData = async () => {
    const { data } = await axois.get(API_URL)

    setWeatherData({
      temp : data.main.temp,
      city : data.name, 
      country : data.sys.country,
      description : data.weather[0].description
    })
  }

  useEffect(() => {
    fetchWeatherData();
  }, []);



  return (
    <div className="App" style={styles}>
      <h1>
        {weatherData.temp}
        <span>{isCelcius ? "℃" : "℉"}</span>
      </h1>
      <h2>{weatherData.city}, {weatherData.country}</h2>
      <h4>{weatherData.description}</h4>
    </div>
  );
};

export default App;
