import Project1 from "../../data/milford.PNG";
import Project2 from "../../data/odeals.PNG";
import "./project.css";

const Project = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <div id="project-section">
        <div className="box">
          <div className="imgBx">
            <a href="https://mdrc.vercel.app/" target="_blank">
              <img src={Project1} alt="" />{" "}
            </a>
          </div>
          <div className="content">
            <a href="https://mdrc.vercel.app/" target="_blank">
              <h3>Milford Resource Centre</h3>
            </a>
            <div className="content-links">
              <a href="https://mdrc.vercel.app/" target="_blank">
                <span>Live site</span>
              </a>
              <a href="https://github.com/barrytrearty/MDRC" target="_blank">
                <span>Source code</span>
              </a>
            </div>

            {/* <h3>HTML, JavaScript, CSS</h3> */}
          </div>
        </div>

        <div className="box">
          <div className="imgBx">
            <a href="https://clubstub-fe.vercel.app/home" target="_blank">
              <img src={Project2} alt="" />
            </a>
          </div>
          <div className="content">
            <a href="https://clubstub-fe.vercel.app/home" target="_blank">
              <h3>O'Deals GAA Tickets</h3>
            </a>
            <div className="content-links">
              <a href="https://clubstub-fe.vercel.app/home" target="_blank">
                <span>Live site</span>
              </a>
              <a
                href="https://github.com/barrytrearty/clubstub-fe"
                target="_blank"
              >
                <span>Source code</span>
              </a>
            </div>
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
    </div>
  );
};

export default Project;
