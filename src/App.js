import { useEffect, useState } from "react";
import "./App.css";
import bg from "./assets/bg-img.jpg";

const App = () => {
  const [temp, setTemp] = useState();
  const [location, setLocation] = useState();
  const [weatherDescription, setWeatherDescription] = useState();
  const [isCelcius, setIsCelcius] = useState(false);

  const styles = {
    backgroundImage: `url(${bg})`,
  };

  const APIKEY = "19764aafca74765d182a3e96f40348ec";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Dallas,TX&appid=${APIKEY}`
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <div className="App" style={styles}>
      <h1>
        {temp}
        <span>{isCelcius ? "℃" : "℉"}</span>
      </h1>
      <h2>{location}</h2>
      <h4>{weatherDescription}</h4>
    </div>
  );
};

export default App;
