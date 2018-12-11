import React from 'react'
import styled from 'styled-components'

const Banner = styled.div`
  background-image: url(${props => props.bgImg});
  &:after {
    background-color: ${props =>
      props.bgColor ? props.bgColor : '#7c7c80'} !important;
  }
`

export default props => (
  <Banner
    id="banner"
    className="major"
    bgImg={props.bgImg}
    bgColor={props.bgColor}
  >
    <div className="inner">
      <header className="major">
        <h1>{props.title}</h1>
      </header>
      {props.children}
    </div>
  </Banner>
)
