import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';

const Experiments = props => (
  <Layout>
    <Helmet>
      <html lang="en" />
      <title>Experiments</title>
      <meta name="description" content="Experiments" />
    </Helmet>

    <Banner title="Experiments" bgImg={props.data.experiments.childImageSharp.fluid} />

    <div id="main">
      <div className="inner">
        <header className="major">
          <h3>Real-time object detection</h3>
        </header>
        <p>
          This experiment uses TensorFlow.js with COCO-SSD model. It can take any input from
          &#60;img&#62;, &#60;video&#62;, &#60;canvas&#62; elements, and returns an array of
          bounding boxes with class name and confidence level.{' '}
        </p>
        <p>
          <i className="icon alt fa-github" />{' '}
          <a
            href="https://github.com/davidcunha/tensorflowjs-real-time-object-detection"
            target="_blank"
            rel="noopener noreferrer"
          >
            tensorflowjs-real-time-object-detection
          </a>
          <br />
          <i className="icon alt fa-globe" />{' '}
          <a
            href="https://rt-object-detection.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            rt-object-detection.netlify.com
          </a>
        </p>
      </div>
    </div>
  </Layout>
);

Experiments.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query {
    experiments: file(relativePath: { eq: "experiments.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default Experiments;
