import Project1 from "../data/milford.PNG";
import Project2 from "../data/odeals.PNG";

const Project = () => {
  return (
    <div id="project-section">
      {/* <h2 className="neon">My Projects</h2> */}
      <div className="box">
        <div className="imgBx">
          <img src={Project1} alt="" />
        </div>
        <div className="content">
          <h2>Milford Resource Centre</h2>
          {/* <h2>HTML, JavaScript, CSS</h2> */}
        </div>
      </div>
      <div className="box">
        <div className="imgBx">
          <img src={Project2} alt="" />
        </div>
        <div className="content">
          <h2>O'Deals GAA Tickets</h2>
          {/* <h2>MongoDB, Express, React, Redux, Node.js</h2> */}
        </div>
      </div>
      {/* <div className="box">
        <div className="imgBx">
          <img src={Project1} alt="" />
        </div>
        <div className="content">
          <h2>Milford Resource Centre</h2>
          <h2>HTML, JavaScript, CSS</h2>
        </div>
      </div> */}
    </div>
  );
};

export default Project;
