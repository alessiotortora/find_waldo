import "./App.css";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Game from "./components/Game/Game";
import Timer from "./components/Timer/Timer";

function App() {
  return (
    <div className="App">
      <h1>Where is Waldo?</h1>
      <Timer />
      <Game />
      <Scoreboard />
    </div>
  );
}

export default App;
