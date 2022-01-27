import {
  SiRedux,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiReact,
} from "react-icons/si";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import "./stacks.css";

const Stacks = () => {
  return (
    <div id="stacks-container">
      <h2>Stacks</h2>
      <div id="stacks">
        <span className="html">
          <IoLogoHtml5 className="icon" /> HTML
        </span>
        <span className=" css">
          <IoLogoCss3 className="icon" /> CSS
        </span>
        <span className=" js">
          <IoLogoJavascript className="icon" /> JavaScript
        </span>
        <span className=" react">
          <SiReact className="icon" /> React
        </span>
        <span className=" redux">
          <SiRedux className="icon" /> Redux
        </span>
        <span className=" node">
          <SiNodedotjs className="icon" /> Node.js
        </span>
        <span className=" ts">
          <SiTypescript className="icon" /> TypeScript
        </span>
        <span className=" mdb">
          <SiMongodb className="icon" /> MongoDB
        </span>
      </div>
    </div>
  );
};

export default Stacks;
