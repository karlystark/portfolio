import "./About.css";
import QuestionSelect from "./QuestionSelect.js";

/** About renders a detail about page with portrait, short description, and
 * a info/question selection widget (QuestionSelect).
 *
 * props: none
 *
 * state: none
 *
 * RoutesList => About => QuestionSelect
 */

function About() {
  return (
    <div className="About" role="main">
      <img src="ks.jpeg" alt="karly sits on an armchair next to a plant."/>
      <div className="About-text">
        <div className="About-greet">
          <h1>hey all, i'm karly stark</h1>
          <i className="bi bi-emoji-smile-upside-down-fill About-smile"></i>
        </div>
        <p>(they/them)</p>
        <p>
        I'm an educator & full-stack software engineer with a passion for accessibility and
        making things that bring people closer to their communities. I currently
        spend my days teaching full-stack web development (MERN stack) and building
        projects with folks at <a href="https://thelastmile.org/">The Last Mile</a>.
        </p>
        <QuestionSelect />
      </div>
    </div>
  );
}

export default About;