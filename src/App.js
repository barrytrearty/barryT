import "./App.css";
import { useEffect } from "react";
import Project from "./components/Project";

function App() {
  useEffect(() => {
    document.body.style = "background: #010615;";
  }, []);

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
