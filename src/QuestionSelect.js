import "./QuestionSelect.css";
import React, { useState, useRef } from 'react';

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
  const textAreaRef = useRef(null);

  console.log("TEXTAREAREF=", textAreaRef);
  console.log("selectedBtn=", selectedBtn);


  function handleClick(buttonId) {
    setSelectedBtn(buttonId);
    textAreaRef.current.focus();
  }


  return (
    <div className="QuestionSelect">
      <div className="QuestionSelect-buttons">
        {[
          { id: 1, label: "how do I work on a team?", emoji: "bi bi-person-raised-hand" },
          { id: 2, label: "what are my favorite tools?", emoji: "bi bi-eyeglasses" },
          { id: 3, label: "what was I doing before?", emoji: "bi bi-camera-reels-fill" },
          { id: 4, label: "what else am I up to?", emoji: "bi bi-tree" }
        ].map((button) => (
          <button
            key={button.id}
            role="tab"
            aria-expanded={button.id === selectedBtn}
            aria-controls={`content-${button.id}`}
            className={`QuestionSelect-btn ${selectedBtn === button.id ? 'active' : ''}`}
            onClick={() => handleClick(button.id)}
          >
            <i className={button.emoji}></i>
            <p>{button.label}</p>
          </button>
        ))}
      </div>
      <div className="QuestionSelect-text"
        ref={textAreaRef}
        tabIndex="-1"
      >
        {
          selectedBtn === null
          &&
          <div className="QuestionSelect-default">
            <p>click to find out more!</p>
          </div>
        }
        {
          selectedBtn === 1
          &&
          <div className="QuestionSelect-career"
            id={`content-1`}
            aria-hidden={selectedBtn !== 1}>
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
          <div className="QuestionSelect-tools"
            id={`content-2`}
            aria-hidden={selectedBtn !== 2}>
            <p>I love working with:</p>
            <ul>
              <li>Next.js & TypeScript</li>
              <li>React</li>
              <li>CSS & TailwindCSS</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>SQL & PostgreSQL</li>
              <li>Python & Flask</li>
            </ul>
            <p>I'm currently exploring:</p>
            <ul>
              <li>GraphQL</li>
              <li>Rust</li>
              <li>ARIA</li>
              <li>p5.js</li>
              <li>D3</li>
            </ul>
          </div>
        }
        {
          selectedBtn === 3
          &&
          <div className="QuestionSelect-career"
            id={`content-3`}
            aria-hidden={selectedBtn !== 3}>
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
          <div className="QuestionSelect-hobbies"
            id={`content-4`}
            aria-hidden={selectedBtn !== 4}>
            <p>When I'm not coding, you can find me:</p>
            <ul>
              <li>sharing food with friends</li>
              <li>on a hiking trail</li>
              <li>at the climbing gym</li>
              <li>making music</li>
              <li>working on an animation/video project</li>
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