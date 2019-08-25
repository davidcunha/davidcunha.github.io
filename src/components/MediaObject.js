import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const MediaObject = props => (
  <section className="media-object">
    <Link to={props.url} className="image">
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
            <Link to={props.url} className="button special">
              {props.button}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

MediaObject.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.object,
  button: PropTypes.string,
};

export default MediaObject;
