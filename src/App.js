import "./index.css";

//images
import one from "./images/1.png";
import two from "./images/2.png";
import three from "./images/3.png";
import four from "./images/4.png";
import { useState } from "react";

function App() {
  const [move, setMove] = useState(false);

  return (
    <div
      className="App"
      onClick={() => {
        setMove(!move);
        console.log("move");
      }}
    >
      <div className="container">
        <img
          src={one}
          className="one"
          alt=""
          style={{ transform: move ? "translateY(100px)" : "translateY(0px)" }}
        />
        <img
          src={two}
          className="two"
          alt=""
          style={{ transform: move ? "translateY(100px)" : "translateY(0px)" }}
        />
        <img
          src={three}
          className="three"
          alt=""
          style={{ transform: move ? "translateY(-100px)" : "translateY(0px)" }}
        />
        <img
          src={four}
          className="four"
          alt=""
          style={{ transform: move ? "translateY(-100px)" : "translateY(0px)" }}
        />
      </div>
    </div>
  );
}

export default App;
