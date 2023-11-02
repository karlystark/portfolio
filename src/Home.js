import "./Home.css";

/** Home renders a simple landing page.
 *
 * props: none
 *
 * state: none
 *
 * RoutesList => Home
 */

function Home() {

  return (
    <div className="Home" role="main">
      <img src="land.png" alt="abstract line drawing of hills"
        className="Home-image" />
      <div className="Home-text">
        <h1>hi, i'm karly.</h1>
        <p>i'm a software engineer with a passion for accessibility and making
          things that bring people closer to their communities.</p>
      </div>
    </div>
  );


}

export default Home;