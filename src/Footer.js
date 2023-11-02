import "./Footer.css";

/** Footer renders a footer bar with links to social media contacts.
 *
 * props: none
 *
 * state: none
 *
 * App => Footer
 */

function Footer() {

  return (
    <div className="Footer">
      <footer className="row justify-content-end">
          <p><i class="bi bi-c-circle"></i>website created by k.stark </p>
      </footer>
    </div>
  );
}

export default Footer;