import React from "react";
import "../Styles/Clothes.css";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";

type TWeatherTemp = {
  temperature: string;
};

export const Clothes = ({ temperature }: TWeatherTemp) => {
  const clothesRecommend = (t: string) => {
    if (parseInt(t) > 28) {
      return (
        // <img src={require("./images/1.jpg").default} />
        <img src={img1} />
      );
    } else if (parseInt(t) >= 22 && parseInt(t) < 28) {
      return (
        // <img src={require("./images/2.jpg").default} />
        <img src={img2} />
      );
    } else if (parseInt(t) >= 19 && parseInt(t) < 22) {
      return (
        // <img src={require("./images/3.jpg").default} />
        <img src={img3} />
      );
    } else if (parseInt(t) >= 17 && parseInt(t) < 19) {
      return (
        // <img src={require("./images/4.jpg").default} />
        <img src={img4} />
      );
    } else if (parseInt(t) >= 12 && parseInt(t) < 17) {
      return (
        // <img src={require("./images/5.jpg").default} />
        <img src={img5} />
      );
    } else if (parseInt(t) > 9 && parseInt(t) < 12) {
      return (
        // <img src={require("./images/6.jpg").default} />
        <img src={img6} />
      );
    } else if (parseInt(t) > 5 && parseInt(t) <= 9) {
      return (
        // <img src={require("./images/7.jpg").default} />
        <img src={img7} />
      );
    } else {
      return (
        // eslint-disable-next-line jsx-a11y/alt-text
        // <img src={require("./images/8.jpg").default} />
        <img src={img8} />
      );
    }
  };
  return <>{clothesRecommend(temperature)}</>;
};
