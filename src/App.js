import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [spin, setSpin] = useState("");

  const handleSpin = () => {
    let circle = document.querySelector(".circle__outer");
    let deg = Math.floor(Math.random() * 5000);

    console.log(circle);
    circle.style.transition = "all 5s ease-out";
    circle.style.transform = `rotate(${deg}deg)`;
    deg = 0;

    // circle.addEventListener("transitionend", () => {
    //   circle.style.transition = "none";
    //   let actualDeg = deg % 360;

    //   circle.style.transform = `rotate(${actualDeg}deg)`;
    // });
  };

  return (
    <div className="App">
      <div class="circle__main">
        <button className="spinBtn" onClick={handleSpin}>
          SPIN
        </button>
        <div class={`circle__outer ${spin}`}>
          <div class="poly1">1</div>
          <div class="poly2">2</div>
          <div class="poly3">3</div>
          <div class="poly4">4</div>
          <div class="poly5">5</div>
        </div>
      </div>
    </div>
  );
}

export default App;
