import "./header.css";
import btImg from "../../data/bt.png";

const Header = () => {
  return (
    <div className="heading-holder">
      <div className="heading">
        <h1 className="neon" data-text="Barry T">
          Barry T
        </h1>
      </div>
      <h2>About Me</h2>
      <div className="aboutCardHolder">
        <div className="aboutCardGrad">
          <div className="aboutCard">
            <div className="aboutImgBox">
              <img src={btImg} alt="" />
              <img src={btImg} alt="" />
            </div>
            <div className="aboutDetails">
              <div className="aboutContent">
                <div>
                  <p>
                    My name is Barry and I am a graduate of Strive School.
                    Previously, I worked as an online English tutor. Now, I am a
                    Fullstack developer with a special focus on the frontend.{" "}
                  </p>
                  <p>
                    Feel free to check out my github and portfolio and don't
                    hesitate to get in touch. Thank you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="info"> */}

      {/* <img src={btImg} alt="" />
        <div>
          <p>
            My name is Barry and I am a graduate of Strive School. Previously, I
            worked as an online English tutor. Now, I am a Fullstack developer
            with a special focus on the frontend.{" "}
          </p>
          <p>
            Feel free to check out my github and portfolio and don't hesitate to
            get in touch. Thank you
          </p>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Header;
