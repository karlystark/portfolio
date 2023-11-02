
import ProjectCard from "./ProjectCard.js";
import "./Projects.css";

/** Projects renders project cards for each project contained within projectData.
 *
 * props:
 * - projects => an array of objects containing project detail elements =>
 *        [{id, title, date, type, role, description_short, description_long,
 *         stack, stack_explanation, img, detail_images, github, demo,
 *         bug_stories, purpose, lessons}...]
 *
 * state: none
 *
 * RoutesList => Projects => ProjectCard
 */
function Projects({ projects }) {
  return (
    <div className="Projects row row-cols-1 row-cols-md-3 g-4" role="main">
      {projects.map(project => {
        return (
          <ProjectCard key={project.id} project={project} />
        )
      })}
    </div>
  );
}

export default Projects;