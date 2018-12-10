import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Hi, my name is David</h1>
      </header>
      <div className="content">
        <p>
          I’m a professional Software Engineer and Scrum Master
          <br />
          with more than 6 years of experience based in sunny Portugal.
        </p>
        <ul className="actions">
          <li>
            <a href="/about" className="button next">
              About me
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
