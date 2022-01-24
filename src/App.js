import "./App.css";
import { useEffect } from "react";
import crazedChicken1 from "./data/crazedChicken1.png";
import crazedChicken2 from "./data/crazedChicken2.png";
import boredChicken from "./data/boredchicken.png";
import happyChicken from "./data/happyChicken.png";
import strongChicken from "./data/strongChicken.png";
import improveChicken from "./data/improveChicken.png";
import sadFace from "./data/sadFace.png";
import Flipbook from "./components/FlipBook";
import Project from "./components/Project";

function App() {
  useEffect(() => {
    document.body.style = "background: #010615;";
  }, []);

  // const lastOne = () => {
  //   console.log("hello1");
  //   document.getElementById("probBtn").style.visibility = "hidden";
  // };

  // const nextOne = () => {
  //   console.log("hello");
  //   document.getElementById("chickenSaying").style.opacity = "1";
  //   document.getElementById("nextBtn").style.visibility = "hidden";
  //   document.getElementById("finalBtn").style.visibility = "visible";
  // };

  // const finalOne = () => {
  //   console.log("hello");
  //   document.getElementById("nftSaying").style.display = "none";
  //   document.getElementById("sadFace").style.visibility = "visible";
  //   document.getElementById("theEnd").style.display = "none";
  //   document.getElementById("finalSaying").style.visibility = "visible";
  //   document.getElementById("finalBtn").style.visibility = "hidden";
  // };

  return (
    <div className="App">
      <div className="heading-holder">
        <h1 className="neon" data-text="Barry T">
          Barry T
        </h1>
      </div>

      {/* <Flipbook /> */}

      <Project />
    </div>
  );
}

export default App;
