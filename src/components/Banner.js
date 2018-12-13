import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BannerDiv = styled.div`
  &:after {
    background-color: ${props => (props.bgColor ? props.bgColor : '#26547C')} !important;
  }
`;

const Banner = props => (
  <BannerDiv id="banner" className="major" bgColor={props.bgColor}>
    <Img fluid={props.bgImg} />
    <div className="inner">
      <header className="major">
        <h1>{props.title}</h1>
      </header>
      {props.children}
    </div>
  </BannerDiv>
);

Banner.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string,
  bgImg: PropTypes.object,
  bgColor: PropTypes.string,
};

export default Banner;
