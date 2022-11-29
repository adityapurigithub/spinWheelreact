import { useEffect, useState ,useRef} from "react";
import "./App.css";

function App() {
//   const [spin, setSpin] = useState("");

  const cirlce=useRef(null);
  const btn=useRef(null);
  
  const handleSpin = () => {
//     let circle = document.querySelector(".circle__outer");
    let deg = Math.floor(Math.random() * 5000);

    console.log(circle);
    circle.current.style.transition = "all 5s ease-out";
    circle.current.style.transform = `rotate(${deg}deg)`;
    btn.current.style.pointerEvents="none";

    circle.current.addEventListener("transitionend", () => {
      circle.current.style.transition = "none";
      circle.current.style.transform = "rotate(0deg)";
      btn.current.style.pointerEvents="auto";
      
    });
  };

  return (
    <div className="App">
      <div class="circle__main">
        <button ref={btn} className="spinBtn" onClick={handleSpin}>
          SPIN
        </button>
        <div ref={circle} class="circle__outer">
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
