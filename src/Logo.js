import './Logo.css';
import React, { useState } from 'react';

/** Logo renders the logo element of the Nav.
 *
 * props: none
 *
 * state:
 * - isHovered => tracks if the home button element is hovered over or not,
 * which decides which icon is shown (empty circle or filled).
 *
 * Nav => Logo
 */
function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (

    <div className="Logo">
      <a href="/" aria-label="visit home page" role="button">
        <i className={`bi ${isHovered ? `bi-circle-fill` : `bi-circle`}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}></i>
      </a>
      <h1> k.stark </h1>
    </div>

  );
}

export default Logo;