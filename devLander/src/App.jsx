import devPhoto from "/dev.jpg";
import { socials } from "../src/data";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { skills } from "./data";

function App() {
  return (
    <>
      <main>
        <div>
          <header>
            <li>Home </li>
            <li>Portfolio</li>
            <li>CV/Resume</li>
          </header>
          <img src={devPhoto} alt="Devs's Photo" className="devPhoto" />
          <div className="name_card">
            <strong>Abiodun Sabitu</strong>{" "}
            <FaRegCircleCheck
              style={{ fontSize: "small", marginTop: "10px" }}
            />
            <div className="link_wrapper">
              <li>
                <FaGithubSquare
                  style={{ fontSize: "small", marginTop: "7px" }}
                />
                <a href={socials.github.url}>Github </a>
              </li>
              <li>
                <FaLinkedin style={{ fontSize: "small", marginTop: "7px" }} />
                <a href={socials.linkedin.url}>Linkedin</a>
              </li>
              <li>
                <FaSquareXTwitter
                  style={{ fontSize: "small", marginTop: "7px" }}
                />
                <a href={socials.twitter.url}>Twitter</a>
              </li>
            </div>
          </div>
          <div className="skill_wrapper">
            {Object.keys(skills).map((category) => (
              <div key={category}>
                <h4>
                  {category
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {skills[category].map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
