import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://www.instagram.com/davidcunha.xyz"
            target="_blank"
            className="icon alt fa-instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/davidcunha"
            target="_blank"
            className="icon alt fa-github"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@_davidcunha"
            target="_blank"
            className="icon alt fa-medium"
          >
            <span className="label">Medium</span>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/_davidcunha"
            target="_blank"
            className="icon alt fa-twitter"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
