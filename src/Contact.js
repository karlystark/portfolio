import "./Contact.css";


/** Contact renders a contact page with links to contact methods.
 *
 * props: none
 *
 * state: none
 *
 * RoutesList => Contact
 */

function Contact() {

  return (
    <div className="Contact" role="main">
      <div className="Contact-image">
        <h1>let's connect</h1>
        <img src="land.png" alt="abstract line drawing of hills" />
      <div className="Contact-links">
        {/* <h2>here's my:</h2> */}
        <div className="Contact-github">
        <a href="https://github.com/karlystark" className="mx-2"
          aria-label="visit github" role="button">
          <i className="bi bi-github Footer-icon"></i>
        </a>
        <p>github</p>
        </div>
        <div className="Contact-linkedin">
        <a href="https://www.linkedin.com/in/karlystark/" className="mx-2"
          aria-label="visit linkedin" role="button">
          <i className="bi bi-linkedin Footer-icon"></i>
        </a>
        <p>linkedin</p>
        </div>
        {/* <div className="Contact-resume">
        <a href="resume.pdf" className="mx-2" download
          aria-label="download resume pdf" role="button">
          <i className="bi bi-file-person-fill"></i>
        </a>
        <p>resume</p>
        </div> */}
      </div>
      </div>
    </div>
  );

}

export default Contact;