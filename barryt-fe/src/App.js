import "./App.css";
import { useEffect } from "react";
import crazedChicken1 from "./data/crazedChicken1.png";
import crazedChicken2 from "./data/crazedChicken2.png";
import boredChicken from "./data/boredchicken.png";
import happyChicken from "./data/happyChicken.png";
import strongChicken from "./data/strongChicken.png";
import improveChicken from "./data/improveChicken.png";
import sadFace from "./data/sadFace.png";

function App() {
  useEffect(() => {
    document.body.style = "background: black;";
  }, []);

  const lastOne = () => {
    console.log("hello1");
    document.getElementById("probBtn").style.visibility = "hidden";
  };

  const nextOne = () => {
    console.log("hello");
    document.getElementById("chickenSaying").style.opacity = "1";
    document.getElementById("nextBtn").style.visibility = "hidden";
    document.getElementById("finalBtn").style.visibility = "visible";
  };

  const finalOne = () => {
    console.log("hello");
    document.getElementById("nftSaying").style.display = "none";
    document.getElementById("sadFace").style.visibility = "visible";
    document.getElementById("theEnd").style.display = "none";
    document.getElementById("finalSaying").style.visibility = "visible";
    document.getElementById("finalBtn").style.visibility = "hidden";
  };

  return (
    <div className="App">
      <div className="heading-holder">
        <h1 className="neon" data-text="Barry T">
          Barry T
        </h1>
      </div>

      <div className="flip-book-section">
        <input type="checkbox" id="c1" />
        <input type="checkbox" id="c2" />
        <input type="checkbox" id="c3" />
        <input type="checkbox" id="c4" />
        <input type="checkbox" id="c5" />
        <input type="checkbox" id="c6" />
        <div id="cover">
          {/* <h2>For Cluck's Sake:</h2>
          <h3>A Short Story</h3> */}
        </div>
        <div className="flip-book">
          {/* FLIP 0 */}
          <div className="flip" id="p1">
            <div className="front">
              <h2>For Cluck's Sake</h2>
              <h2>The Story of How I Became a Developer</h2>
              <div></div>
              <label className="next-btn" for="c1" id="next1">
                Next
              </label>
            </div>
            <div className="back">
              <p>
                Before I became a developer I was a little unsure of what to do
                with myself.
              </p>
              <p>I bounced between jobs and gigs like a crazed chicken.</p>

              <label className="back-btn" for="c1">
                Back
              </label>
            </div>
          </div>
          {/* FLIP 1 */}
          <div className="flip" id="p2">
            <div className="front">
              <img src={crazedChicken1} alt="" />
              <span className="caption">Crazed Chicken</span>
              <label className="next-btn" for="c2">
                Next
              </label>
            </div>
            <div className="back">
              <p>Then one day, things changed.</p>
              <p>
                I discovered coding. I loved it. It stimulated me and sent me
                into a flow state like I’d never before experienced. I was
                hooked!
              </p>
              <p>And for the next few years I...</p>
              <label className="back-btn" for="c2">
                Back
              </label>
            </div>
          </div>
          {/* FLIP 2 */}
          <div className="flip" id="p3">
            <div className="front">
              <img src={happyChicken} alt="" />
              <span className="caption">Optimistic Chicken</span>
              <label className="next-btn" for="c3">
                Next
              </label>
            </div>
            <div className="back">
              <p>
                ... aimlessly bounced between different programming languages
                and technologies with no end goal in sight.
              </p>
              <p>Like a crazed chicken the sequel.</p>
              <label className="back-btn" for="c3" id="probBtn">
                Back
              </label>
            </div>
          </div>
          {/* FLIP 3 */}
          <div className="flip" id="p4">
            <div className="front">
              <img src={crazedChicken2} alt="" />
              <span className="caption">Crazed Chicken (Again) </span>
              <label className="next-btn" for="c4">
                Next
              </label>
            </div>
            <div className="back">
              <p>And then something fantastic happened.</p>
              <p>
                I enrolled in Strive School and for six months, I studied web
                development under some amazing teachers.
              </p>
              <p>I made huge improvements</p>
              <p> beyond what I thought was possible</p>

              <label className="back-btn" for="c4">
                Back
              </label>
            </div>
          </div>
          {/* FLIP 4 */}
          <div className="flip" id="p5">
            <div className="front">
              <img src={improveChicken} alt="" />
              <span className="caption">A chicken on the rise</span>
              <label className="next-btn" for="c5">
                Next
              </label>
            </div>
            <div className="back">
              <p>Now I can call myself a Full Stack developer. </p>
              <p>And now I know that sometimes even chickens can fly.</p>
              <label className="back-btn" for="c5">
                Back
              </label>
            </div>
          </div>
          {/* FLIP 4 */}
          <div className="flip" id="p6">
            <div className="front">
              <img src={strongChicken} alt="" />
              <span className="caption">
                A purposeful, driven, determined chicken
              </span>
              <label className="next-btn" for="c6" onClick={lastOne}>
                Next
              </label>
            </div>
            <div className="back">
              <img src={boredChicken} alt="" />
              <span id="theEnd" className="caption">
                The End
              </span>
              <span id="finalSaying" className="caption">
                Bored Chicken
              </span>
              {/* <label className="back-btn" for="c6">
                Back
              </label> */}
            </div>
          </div>
          <div id="chickenSaying" className="dialog-1">
            <div className="left-point"></div>
            <span id="nftSaying">Please don't NFT me!</span>
            <img src={sadFace} alt="" id="sadFace" />
          </div>
          <button className="next-btn" id="nextBtn" onClick={nextOne}>
            Next
          </button>
          <button className="next-btn" id="finalBtn" onClick={finalOne}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
