import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [spin, setSpin] = useState("");

  const handleSpin = () => {
    setSpin("spin__start");
  };

  return (
    <div className="App">
      <div className=""></div>
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
