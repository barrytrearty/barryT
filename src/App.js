import "./App.css";
import { useEffect } from "react";
import Project from "./components/Project/Project";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Stacks from "./components/Stacks/Stacks";
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

      <Stacks />

      {/* <Flipbook /> */}
      <Project />

      <Contact />
    </div>
  );
}

export default App;
