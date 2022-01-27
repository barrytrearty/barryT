import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <h2>Contact me</h2>
      <div>
        <p>
          If you wish you can reach me at{" "}
          <span className="highlight">btrearty@gmail.com</span>
        </p>
        <p>I'm also available at:</p>
        <div>
          <span>
            <a
              href="https://www.linkedin.com/in/barry-trearty"
              target="_blank"
              id="linkedin"
            >
              <BsLinkedin />
            </a>
          </span>
          <span>
            <a
              href="https://github.com/barrytrearty"
              target="_blank"
              id="github"
            >
              <BsGithub />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
