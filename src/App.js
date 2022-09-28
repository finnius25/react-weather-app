import { useEffect, useState } from "react";
import "./App.css";
import bg from "./assets/bg-img.jpg";
import axois from "axios";

const App = () => {
  const [weatherData, setWeatherData] = useState({
    temp: "",
    city: "",
    country: "",
    description: "",
  });
  const [temp, setTemp] = useState();
  const [location, setLocation] = useState("Dallas");
  const [weatherDescription, setWeatherDescription] = useState();
  const [isCelcius, setIsCelcius] = useState(false);
  const [error, setError] = useState();

  const [cityInput, setCityInput] = useState({ value: "Dallas" });

  const styles = {
    backgroundImage: `url(${bg})`,
  };

  const API_KEY = "19764aafca74765d182a3e96f40348ec";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${location}&appid=${API_KEY}`;

  const fetchWeatherData = async () => {
    try {
      const { data } = await axois.get(API_URL);

      setWeatherData({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
      });
      setError(null);
    } catch (err) {
      setError(err);
    }
  };

  const handleError = (err) => {
    return <p className="error-message">City not found</p>;
  };

  useEffect(() => {
    fetchWeatherData();
  }, [location]);


  const handleCityInputChange = (e) => {
    setCityInput({ value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setLocation(cityInput.value);
  };

  return (
    <div className="App" style={styles}>
      <form action="" onSubmit={handleSubmit}>
      <h2>
        <input
          type="text"
          value={cityInput.value.toUpperCase()}
          onChange={handleCityInputChange}
        />
      </h2>
      {error ? handleError() : ""}
      </form>
      <br />
      {weatherData.country}
      <div className="temp-descript-container">
      <h1>
        {weatherData.temp}
        <span>{isCelcius ? "℃" : "℉"}</span>
      </h1>
      <h4>{weatherData.description}</h4>
      </div>
    </div>
  );
};

export default App;
