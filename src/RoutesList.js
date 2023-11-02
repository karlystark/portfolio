import React from "react";
import Home from "./Home.js";
import About from "./About.js";
import Projects from "./Projects.js";
import ProjectDetail from "./ProjectDetail.js";
import Contact from "./Contact.js";
import { Routes, Route, Navigate } from "react-router-dom";

/** RoutesList defines possible routes in App and renders components for each
 * route.
 *
 * props:
 * - projects => an array of objects containing project detail elements =>
 *        [{id, title, date, type, role, description_short, description_long,
 *         stack, stack_explanation, img, detail_images, github, demo,
 *         bug_stories, purpose, lessons}...]
 *
 * state: none
 *
 * App => RoutesList
 */

function RoutesList({projects}) {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects projects={projects}/>} />
      <Route path="/projects/:id" element={<ProjectDetail projects={projects}/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );


}

export default RoutesList;