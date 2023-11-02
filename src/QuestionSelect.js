import "./QuestionSelect.css";
import React, { useState } from 'react';

/** QuestionSelect renders a question details widget that allows users to click
 * on different question buttons to reveal answers. Used on the About page.
 *
 * props: none
 *
 * state:
 * - selectedBtn => allows app to track which question button has been clicked.
 *
 * About => QuestionSelect
 */

function QuestionSelect() {
  const [selectedBtn, setSelectedBtn] = useState(null);

  function handleClick(buttonId) {
    setSelectedBtn(buttonId);
  }

  return (
    <div className="QuestionSelect">
      <div className="QuestionSelect-buttons">
        <button className="QuestionSelect-btn" onClick={() => handleClick(1)}>
          <i class="bi bi-person-raised-hand"></i>how do I work on a team?
        </button>
        <button className="QuestionSelect-btn" onClick={() => handleClick(2)}>
          <i class="bi bi-eyeglasses"></i>what are my favorite tools?
        </button>
        <button className="QuestionSelect-btn" onClick={() => handleClick(3)}>
          <i class="bi bi-camera-reels-fill"></i>what was I doing before?
        </button>
        <button className="QuestionSelect-btn" onClick={() => handleClick(4)}>
          <i class="bi bi-tree"></i>what else am I up to?
        </button>
      </div>

      <div className="QuestionSelect-text">
        {
          selectedBtn === null
          &&
          <div className="QuestionSelect-default">
            <p>click to find out more:</p>
            <i class="bi bi-arrow-return-left"></i>
          </div>
        }
        {
          selectedBtn === 1
          &&
          <div className="QuestionSelect-career">
            <p>On a team, I show up as a skilled communicator
              and collaborator, a flexible and creative thinker, and someone
              who is always excited to learn and dive into new skills and
              projects. </p>
            <p> Beyond my passion-driven work ethic, I prioritize connections
              with others - I love to know how people work best, what their
              communication styles are, and what they need to feel empowered.</p>
            <p>As someone who has taught media technologies to middle, high
              school, and adult students, I absolutely love learning from and
              with others, and I'm particularly skilled at mentorship and
              breaking down complex topics for those with different levels of
              expertise.</p>
          </div>
        }
        {
          selectedBtn === 2
          &&
          <div className="QuestionSelect-tools">
            <p>I love working with:</p>
            <ul>
              <li>React</li>
              <li>Typescript</li>
              <li>CSS (and Bootstrap) </li>
              <li>Express/Node.js</li>
              <li>Python & Flask</li>
            </ul>
            <p>I'm currently learning:</p>
            <ul>
              <li>Next.js</li>
              <li>The ins and outs of web accessibility</li>
              <li>How to do cool things with multimedia</li>
            </ul>
          </div>
        }
        {
          selectedBtn === 3
          &&
          <div className="QuestionSelect-career">
            <p>I have a background in multimedia production,
              public education, and digitization/preservation.</p>
            <p>Some highlights:</p>
            <ul>
              <li>My short, queer experimental films have screened
                all over the world.</li>
              <li>I created two new classes for the School of Cinema at
                San Francisco State University (Queer & Trans Film Theory
                and The Essay Film)</li>
              <li>I helped develop and run a large-scale media digitization
                effort at UC Berkeley Library</li>
              <li>I served as Program Director for an arts non-profit that
                screened experimental films on a 100x100 foot wall in
                Uptown Oakland.</li>
            </ul>
          </div>
        }
        {
          selectedBtn === 4
          &&
          <div className="QuestionSelect-hobbies">
            <p>When I'm not coding, you can find me:</p>
            <ul>
              <li>sharing food with friends</li>
              <li>on a hiking trail</li>
              <li>at the climbing gym</li>
              <li>making music</li>
              <li>working on a little animation/video project</li>
              <li>nerding out about Survivor</li>
              <li>whittling spoons</li>
            </ul>
          </div>
        }
      </div>
    </div>
  );
}

export default QuestionSelect;