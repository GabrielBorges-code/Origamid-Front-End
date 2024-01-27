import "./App.css";
import Slide from "./animation/Slide";
import foto from "../img/foto.jpg";
import Dog from "../img/dog.svg?react";
import DogSvg from "./DogSvg";

const Main = () => {
  const slides = [
    {
      id: "slide1",
      text: "Slide 1",
    },
    {
      id: "slide2",
      text: "Slide 2",
    },
    {
      id: "slide3",
      text: "Slide 3",
    },
  ];

  return (
    <>
      <Slide slides={slides} />
      <p className="background"></p>
      <Dog />
      <DogSvg color={"#84e"} />
      <img src={foto} alt="cachorro" />
    </>
  );
};

export default Main;
