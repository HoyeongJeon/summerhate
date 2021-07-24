import React from "react";
import "./App.css";
import { Clock } from "components/Clock";
import { Weather } from "components/Weather";
import { Background } from "components/Background";
import { Callender } from "components/Date";

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <Clock />
        <div className="Weather">
          <Weather />
        </div>
        {/* 가장 더운 지역 + 기온 */}
        <Callender />
        <Background />
      </div>
    </>
  );
};

export default App;
