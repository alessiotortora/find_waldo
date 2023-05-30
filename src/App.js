import "./App.css";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Game from "./components/Game/Game";
import Timer from "./components/Timer/Timer";
import { useState } from "react";

function App() {
  const [waldoFound, setWaldoFound] = useState(false);
  const [timePassed, setTimePassed] = useState(0);

  const handleWaldoFound = () => {
    setWaldoFound(true);
  };

  const handleTimePassed = (seconds) => {
    setTimePassed(seconds);
  };

  return (
    <div className="App">
      <h1>Where is Waldo?</h1>
      <Timer waldoFound={waldoFound} onTimePassed={handleTimePassed} />
      <Game onWaldoFound={handleWaldoFound} />
      <Scoreboard timePassed={timePassed} />
    </div>
  );
}

export default App;
