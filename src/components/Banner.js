import React from 'react'

const Banner = props => (
  <section
    id="banner"
    className="major"
    style={{ backgroundImage: `url(${props.img})` }}
  >
    <div className="inner">
      <header className="major">
        <h1>{props.title}</h1>
      </header>
      {props.children}
    </div>
  </section>
)

export default Banner
