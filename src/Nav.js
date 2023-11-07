import './Nav.css';
import Logo from './Logo.js';

/** Nav renders a navigation bar with a logo and links to about, projects,
 * blog, and contact pages.
 *
 * props: none
 *
 * state: none
 *
 * App => Nav => Logo
 */

function Nav() {
  return (
    <nav className="navbar bg-body-body" role="navigation">
      <div className="container-fluid d-flex">
        <div className="navbar-logo">
          <Logo />
        </div>
        <a className="navbar-about" href="/about">about</a>
        <a className="navbar-projects" href="/projects">projects</a>
        <a className="navbar-blog" href="https://medium.com/@karlystark">blog</a>
        <a className="navbar-contact" href="/contact">contact</a>
      </div>
    </nav>
  );
}

export default Nav;