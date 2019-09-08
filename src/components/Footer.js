import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://www.instagram.com/davidcunha.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="icon alt fa-instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/davidcunha"
            target="_blank"
            rel="noopener noreferrer"
            className="icon alt fa-github"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/_davidcunha"
            target="_blank"
            rel="noopener noreferrer"
            className="icon alt fa-twitter"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
      </ul>
      <ul className="nav">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/process">Process</Link>
        </li>
        <li>
          <Link to="/case-studies/mucho">Case Studies</Link>
        </li>
      </ul>
      <ul className="copyright">
        <li>David Cunha - {new Date().getFullYear()}</li>
      </ul>
    </div>
  </footer>
);

export default Footer;
