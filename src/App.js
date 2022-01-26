import "./App.css";
import { useEffect } from "react";
import Project from "./components/Project/Project";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Contact from "./components/Contact/Contact";
// import Flipbook from "./components/Flipbook/FlipBook";

function App() {
  useEffect(() => {
    document.body.style = "background: #010615;";
  }, []);

  return (
    <div className="App">
      <Nav />

      <Header />
      {/* <Contact /> */}

      {/* <Flipbook /> */}
      <Project />
    </div>
  );
}

export default App;
