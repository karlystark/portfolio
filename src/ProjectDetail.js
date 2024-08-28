import "./ProjectDetail.css";
import React from "react";
import { useParams } from 'react-router';

/** ProjectDetail renders a detail page for a project.
 *
 * props:
 * - projects => an array of objects containing project detail elements =>
 *        [{id, title, date, type, role, description_short, description_long,
 *         stack, stack_explanation, img, detail_images, github, demo,
 *         bug_stories, purpose, lessons}...]
 *
 * state: none
 *
 * RoutesList => ProjectDetail
 */

function ProjectDetail({ projects }) {
  const { id } = useParams();
  const project = projects.find(project => project.id === parseInt(id));

  return (
    <div className="ProjectDetail" role="main">
      <div className="ProjectDetail-header">
        <h1>{project.title}</h1>
        <p>{project.description_long}</p>
        <div className="ProjectDetail-header-lists">
          <div className="ProjectDetail-type">
            <p><b>TYPE</b></p>
            <p>{project.type}</p>
          </div>
          <div className="ProjectDetail-stack">
            <p><b>TOOLS</b></p>
            {project.stack.map(language => <p>{language}</p>)}
          </div>
          <div className="ProjectDetail-contributions">
            <p><b>CONTRIBUTIONS</b></p>
            {project.role.map(role => <p>{role}</p>)}
          </div>
        </div>
      </div>
      <img src={`/${project.img}`} alt={`${project.title} homepage`} className="ProjectDetail-main-img" />
      {project.purpose !== undefined &&
        <div className="ProjectDetail-purpose">
          <h2>Project Purpose and Goal</h2>
          {project.purpose.map(paragraph => <p>{paragraph}</p>)}
        </div>}
      <div className="ProjectDetail-images">
        {project.detail_images.map(image => <img src={`/${image[0]}`} alt={image[1]} className="ProjectDetail-img" />)}
      </div>
      {project.demo !== undefined &&
        <div className="ProjectDetail-demo">
          <video controls>
            <source src={`/${project.demo}`} type="video/mp4" />
          </video>
          <h2>Demo</h2>
        </div>
      }
    </div>

  );
}

export default ProjectDetail;