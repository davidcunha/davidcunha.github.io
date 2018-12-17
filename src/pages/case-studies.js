import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import CaseStudy from '../components/CaseStudy';

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
        {[
          {
            title: 'Mucho',
            url: 'mucho',
            description:
              '<a href="https://www.getmucho.com" target="_blank" rel="noopener noreferrer">Mucho</a> provides a personalized experience for grocery shopping with inspirational recipes contributed by a trusted community of foodies. With a few clicks, ingredients for recipes and breakfast &amp; snacks are ordered, and a selected supermarket will delivery the order to the customer’s doorstep.',
            img: props.data.caseStudy1.childImageSharp.fluid,
          },
          {
            title: 'Neuroscience',
            url: 'neuroscience',
            description:
              'Neuroscience (client&apos;s name and website disclosed) were two R&amp;D projects that solved distinctive problems through digital therapeutic solutions: Neurofeedback and Neurogames. Neurofeedback had as primary objective to innovate the standard process of assessing patient&apos;s brainwave activity EEG (electroencephalogram) biofeedback. On the other hand, Neurogames was state of the art applied methodology that used HTML5 cognitive games to assess and improve patient’s brain functions.',
            img: props.data.caseStudy2.childImageSharp.fluid,
          },
          {
            title: 'Cocktail Experience',
            url: 'cocktail-experience',
            description:
              'Cocktail Experience (client&apos;s name and website disclosed) provides a unique online shopping experience to create and deliver customized cocktails.From flavors to spirits, liqueurs, wine, or garnish, customers can build a cocktail step by step or select a bartender recommendation to be quickly delivered to their doorstep for a wonderful party.',
            img: props.data.caseStudy3.childImageSharp.fluid,
          },
          {
            title: 'Experiments',
            url: 'experiments',
            description: 'Open-source tools, snippets, templates, and curiosities.',
            img: props.data.caseStudy4.childImageSharp.fluid,
            imgPosition: 'right',
          },
        ].map((caseStudy, key) => (
          <CaseStudy
            key={`${key}-${caseStudy.url}`}
            title={caseStudy.title}
            url={caseStudy.url}
            description={caseStudy.description}
            img={caseStudy.img}
          />
        ))}
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
    caseStudy3: file(relativePath: { eq: "cocktail-experience-case-study.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    caseStudy4: file(relativePath: { eq: "experiments-case-study.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default CaseStudies;
