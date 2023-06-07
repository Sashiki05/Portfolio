import { useEffect, useState } from "react";
import {
  
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import AnimatedLetters from "../components/AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
           👋 En reconversion vers le métier de développeur web, après avoir travaillé en tant que manager dans la restauration rapide. Je souhaite transformer ma passion dans mon métier.


          </p>
          <p>💪 J ai appris à être travailler en equipe, gérer les priorités, résoudre des problèmes de façon efficace, ainsi qu à travailler dans un environnement dynamique et en constante évolution. J aspire à exploiter cette expérience au service de mon futur métier.

          </p>
          <p>
          🔍 Actuellement en formation pour devenir développeur web Fullstack (Javascript / React / NodeJS /Express), je recherche activement une alternance en contrat de professionnalisation à partir de Septembre 2023.

          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#13be3b" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
