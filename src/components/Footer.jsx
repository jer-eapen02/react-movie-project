import BrowserLogo from "../assets/browser logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <a href="#">
            <figure className="footer__logo">
              <img src={BrowserLogo} className="footer__logo--img" alt="" />
            </figure>
          </a>
          <div className="footer__list">
            <a href="#" className="footer__link">Home</a>
            <span className="footer__link no-cursor">About</span>
            <span className="footer__link no-cursor">Contact</span>
          </div>
          <div className="footer__copyright">Copyright &copy; 2026 Film Frenzy</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer