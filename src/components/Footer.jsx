export default function Footer() {
  return (
    <footer className="footer">
      <p>@2025 Henna Singh. All rights reserved</p>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://github.com/hennasingh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://linkedin.com/in/hennasingh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://hennasingh.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-medium"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://codelady.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-hashnode"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
