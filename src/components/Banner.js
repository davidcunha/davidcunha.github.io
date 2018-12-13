import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Banner = styled.div`
  &:after {
    background-color: ${props =>
      props.bgColor ? props.bgColor : '#26547C'} !important;
  }
`

export default props => (
  <Banner id="banner" className="major" bgColor={props.bgColor}>
    <Img fluid={props.bgImg} />
    <div className="inner">
      <header className="major">
        <h1>{props.title}</h1>
      </header>
      {props.children}
    </div>
  </Banner>
)
