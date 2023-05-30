import React from "react";

function Scoreboard(props) {
  console.log(props.timePassed);
  return (
    <div>
      <p> Username, {props.timePassed} seconds</p>
    </div>
  );
}

export default Scoreboard;
