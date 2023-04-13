import "./App.css";
import dice from "./images/icon-dice.svg";
import patternMobile from "./images/pattern-divider-mobile.svg";
import patternDesktop from "./images/pattern-divider-desktop.svg";
import { useState, useEffect } from "react";

function App() {
  const [wisdom, setWisdom] = useState({
    slip: { id: 15, advice: "If it ain't broke don't fix it." },
  });
  const wisdomAPI = () => {
    fetch(`https://api.adviceslip.com/advice/${getRandomInt(100)}`)
      .then((response) => response.json())
      .then((data) => {
        setWisdom(data);
        console.log(data);
      });
  };

  useEffect(() => {
    wisdomAPI();
  }, []);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <main>
      <p className="advice">Advice #{wisdom.slip.id}</p>
      <p className="wisdom">{`"${wisdom.slip.advice}"`}</p>
      <div className="pattern">
        <picture>
          <source media="(min-width:500px)" srcSet={patternDesktop} />
          <img src={patternMobile} alt="Flowers" />
        </picture>
      </div>

      <div className="dice" onClick={wisdomAPI}>
        <img src={dice} alt="" />
      </div>
    </main>
  );
}

export default App;
