import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const CaseStudy = props => (
  <section className="case-study">
    <Link to={`/case-studies/${props.url}`} className="image">
      <Img fluid={props.img} />
    </Link>
    <div className="content">
      <div className="inner">
        <header className="major">
          <h3>{props.title}</h3>
        </header>
        <p dangerouslySetInnerHTML={{ __html: props.description }} />
        <ul className="actions">
          <li>
            <Link to={`/case-studies/${props.url}`} className="button special">
              View Case Study
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

CaseStudy.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.object,
};

export default CaseStudy;
