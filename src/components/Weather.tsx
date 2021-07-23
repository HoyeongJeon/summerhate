import React, { useState } from "react";
import { IWeather } from "./Interface";

const API = {
  api: "64779c24be2bccf0ecbb74005b638849",
  url: `https://api.openweathermap.org/data/2.5/`,
};

export const Weather: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [weather, setWeather] = useState<IWeather>({
    name: "",
    country: "",
    temp: "",
    weather: "",
  });
  const weather_icon = `http://openweathermap.org/img/wn/${weather.weather}@2x.png`;
  const getWeather = (evt: any) => {
    if (evt.key === "Enter") {
      fetch(`${API.url}weather?q=${query}&units=metric&APPID=${API.api}`)
        .then((response) => response.json())
        .then((result) => {
          setWeather({
            name: result.name,
            country: result.sys.country,
            temp: result.main.temp.toString(),
            weather: result.weather[0].icon,
          });
          setQuery("");
        })
        .catch((error) => {
          console.log("error");
          setQuery("");
        });
    }
  };

  return (
    <>
      <div className="Search-box">
        <input
          type="text"
          placeholder="Search.."
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          onKeyPress={getWeather}
        />
      </div>
      <h2>
        {weather.name} {weather.country}
      </h2>
      <h3>{weather.temp}</h3>
      <div className="Weather__icon">
        <img src={weather_icon} />
      </div>
    </>
  );
};
