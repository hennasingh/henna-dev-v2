export default function Footer() {
  return (
    <section className="section__footer">
      <footer className="footer">
        <h2 className="h2-footer">Other Projects</h2>
        <div className="footer-text">
          <div className="footer-text-box">
            <h3>Blogging:</h3>
            <ul>
              <li>
                <a
                  href="https://codelady.hashnode.dev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  codelady.hashnode.dev
                </a>
              </li>
              <li>
                <a
                  href="https://hennasingh.medium.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  hennasingh.medium.com
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-text-box">
            <h3>Community Building</h3>
            <ul>
              <li>
                <a
                  href="https://gdg.community.dev/gdg-dublin/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GDG Dublin - Co-Organizer
                </a>
              </li>
              <li>
                <a
                  href="https://www.mongodb.com/community/forums/t/join-us-in-the-adventure-of-100daysofcode/147472"
                  target="_blank"
                  rel="noreferrer"
                >
                  100 Days of Code
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-text-box">
            <h3>Advocacy</h3>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=VfK27SKN7pA"
                  target="_blank"
                  rel="noreferrer"
                >
                  Devoxx UK - From Mongodb to Mobile
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=TGyP6vDjBaY"
                  target="_blank"
                  rel="noreferrer"
                >
                  MongoDB.live - Best Practices: Performance and Monitoring for
                  Realm Sync
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h2 className="h2-footer">Contact</h2>
        <div className="footer-text">
          <ul className="social-list">
            <li className="social-list__item">
              <a
                className="social-list__link"
                href="https://github.com/hennasingh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github fa-2x"></i>
              </a>
            </li>
            <li className="social-list__item">
              <a
                className="social-list__link"
                href="https://linkedin.com/in/hennasingh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin fa-2x"></i>
              </a>
            </li>
            <li className="social-list__item">
              <a
                className="social-list__link"
                href="mailto:portfolio@hennasingh.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-envelope fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
}
