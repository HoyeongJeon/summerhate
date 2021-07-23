import React from "react";
import "./App.css";
import { Clock } from "components/Clock";
import { Weather } from "components/Weather";
import { Background } from "components/Background";

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <Clock />
        <Weather />
        {/* 가장 더운 지역 + 기온 */}
        <div>summer hate!!</div>
        <Background />
      </div>
    </>
  );
};

export default App;
