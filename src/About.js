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
          As a full-stack engineer who loves user-focused,
          accessible design, I am drawn to projects that allow me to utilize
          my creative background towards solutions that prioritize clean,
          well-documented, well-tested code.
        </p>
        <QuestionSelect />
      </div>
    </div>
  );
}

export default About;