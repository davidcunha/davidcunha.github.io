import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';

const CaseStudies = props => (
  <Layout>
    <Helmet>
      <html lang="en" />
      <title>Case Studies</title>
      <meta name="description" content="Case Studies" />
    </Helmet>

    <Banner title="Case Studies" bgImg={props.data.caseStudies.childImageSharp.fluid} />

    <div id="main">
      <section id="one" className="spotlights">
        <section className="case-study">
          <Link to="/case-studies/mucho" className="image">
            <Img fluid={props.data.caseStudy1.childImageSharp.fluid} />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Mucho</h3>
              </header>
              <p>
                <a href="http://getmucho.com" target="_blank" rel="noopener noreferrer">
                  Mucho
                </a>{' '}
                provides a personalized experience for grocery shopping with inspirational recipes
                contributed by a trusted community of foodies. With a few clicks, ingredients for
                recipes and breakfast &amp; snacks are ordered, and a selected supermarket will
                delivery the order to the customer’s doorstep.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/case-studies/mucho" className="button special">
                    View Case Study
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="case-study">
          <Link to="/case-studies/neuroscience" className="image">
            <Img fluid={props.data.caseStudy2.childImageSharp.fluid} />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Neuroscience</h3>
              </header>
              <p>
                Neuroscience (client’s name and website disclosed) were two R&D projects that solved
                distinctive problems through digital therapeutic solutions: Neurofeedback and
                Neurogames. Neurofeedback had as primary objective to innovate the standard process
                of assessing patient’s brainwave activity EEG (electroencephalogram) biofeedback. On
                the other hand, Neurogames was state of the art applied methodology that used HTML5
                cognitive games to assess and improve patient’s brain functions.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/case-studies/neuroscience" className="button special">
                    View Case Study
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
);

CaseStudies.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query {
    caseStudies: file(relativePath: { eq: "case-studies.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    caseStudy1: file(relativePath: { eq: "mucho-case-study.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    caseStudy2: file(relativePath: { eq: "neuroscience-case-study.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    caseStudy3: file(relativePath: { eq: "cocktail-shop-case-study.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default CaseStudies;
