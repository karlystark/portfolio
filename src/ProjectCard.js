import "./ProjectCard.css";
import { Link } from "react-router-dom";

/** ProjectCard renders a project overview card with a button that links to a
 * project detail page.
 *
 * props:
 *- project => an object containing project detail elements =>
 *        {id, title, date, type, role, description_short, description_long,
 *         stack, stack_explanation, img, detail_images, github, demo,
 *         bug_stories, purpose, lessons}
 * state: none
 *
 * Projects => ProjectCard => ProjectDetail
 */
function ProjectCard({ project }) {
  return (
    <div className="ProjectCard col">
      <div className="card h-100 bg-transparent border-transparent">
      <img src={project.img} alt={`${project.title} homepage`} className="ProjectCard-img card-img-top" />
      <div className="ProjectCard-info card-body">
        <h1 className="card-title">{project.title}</h1>
        <div className="card-text">
        <p>{project.date}</p>
        <p>{project.description_short}</p>
        {/* <p>Stack: {project.stack.map(language => `${language}, `)}</p> */}
        <Link to={`/projects/${project.id}`} className="ProjectCard-link">
          <button>
            {project.title} details
          </button>
        </Link>
      </div>
      </div>
      </div>
    </div >
  );
}

export default ProjectCard;