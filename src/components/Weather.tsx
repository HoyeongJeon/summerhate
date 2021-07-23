import React, { useState } from "react";

const API = {
  api: "64779c24be2bccf0ecbb74005b638849",
  url: `https://api.openweathermap.org/data/2.5/`,
};

export const Weather = () => {
  const [query, setQuery] = useState<string>("");
  const [weather, setWeather] = useState("");

  const getWeather = (evt: any) => {
    if (evt.key === "Enter") {
      fetch(`${API.url}weather?q=${query}&units=metric&APPID=${API.api}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (d: any) => {
    let months = [
      "January",
      "Feburary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={(e: any) => setQuery(e.target.value)}
          value={query}
          onKeyPress={getWeather}
        />
      </div>
      <div className="location-box">
        <div className="location"></div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
    </>
  );
};
