import "./ProjectCard.css";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleClick = (link) =>  () => {
    navigate(link);
    window.scrollTo(0,0);
  }

  return (
    <div className="ProjectCard">
      <img src={project.img} alt={`${project.title} homepage`} className="ProjectCard-img" />
      <div className="ProjectCard-info">
        <h1 className="ProjectCard-title">{project.title}</h1>
        <div className="ProjectCard-text">
        <p>{project.date}</p>
        <p>{project.description_short}</p>
          <button onClick={handleClick(`/projects/${project.id}`)} className="ProjectCard-link">
            {project.title} details
          </button>
      </div>
      </div>
    </div>
  );
}

export default ProjectCard;