import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../../components/layout';
import Banner from '../../components/Banner';
import Contact from '../../components/Contact';

import caseStudyArchitecture from '../../assets/images/cocktail-experience-case-study-architecture.svg';

const CaseStudy = props => (
  <Layout>
    <Helmet>
      <html lang="en" />
      <title>Cocktail Experience</title>
      <meta name="description" content="Cocktail Experience" />
    </Helmet>

    <Banner
      title="Cocktail Experience"
      bgImg={props.data.caseStudyImg.childImageSharp.fluid}
      bgColor="#7c7c80"
    />

    <div id="main" className="case-study">
      <div className="inner">
        <header className="major">
          <h3>Services</h3>
        </header>
        <ul>
          <li>Frontend development</li>
          <li>Technical Lead</li>
        </ul>
        <br />
        <Contact />
      </div>
      <div className="inner">
        <header className="major">
          <h3>Story and Process</h3>
        </header>
        <p>
          The client already had a very successful offline experience with several bars, but they
          wanted to catch the attention of current and new customers by providing an online platform
          to create and order cocktails effortlessly.
        </p>
        <p>
          The backend team built the initial features and produced API documentation, while the
          design team delivered the full web app design for the frontend development to kickoff. My
          contribution was in the frontend team where I was in charge of leading the technical
          development, and weekly deliveries with a team of 2 developers.
        </p>
        <p>
          We started by identifying the frontend features and interrogations regarding the APIs for
          the e-commerce experience. As we laid out the features in the Backlog and estimated the
          effort for planning the first Sprints, we also assessed the design guidelines, desktop,
          and mobile UI design. In order to respect the grid’s guideline, we built a custom grid and
          study the User Interface (UI) architecture in search of reusable components. The latter
          was an arduous process since the UI wasn’t defined with the premise of reusable and
          self-contained elements which would save time in the frontend development. Hence, we had
          in many situations to approach the design and adapt accordingly, with respective
          validation, to save development time without dismissing the customer experience and design
          provided by the team.
        </p>
        <p>
          In the end, we were able to successfully deliver the cocktail experience for a final
          review before going live for the delight of the client’s customers.
        </p>
        <p>
          Our methodology included weekly Sprints, User Acceptance Testing,
          Pair Programming, Code Review, Continuous Integration, and Continuous Delivery.
        </p>
      </div>
      <div className="inner">
        <header className="major">
          <h3>Architecture and Technology</h3>
        </header>
        <ul>
          <li>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
              React
            </a>
            /
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
              Next.js
            </a>
          </li>
          <li>
            <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
              Redux
            </a>
          </li>
          <li>
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
              Node
            </a>
            /
            <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
              Express
            </a>
          </li>
          <li>
            <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
              Sass
            </a>
            ,{' '}
            <a
              href="https://github.com/css-modules/css-modules"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSS Modules
            </a>
          </li>
          <li>
            <a
              href="https://devexpress.github.io/testcafe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Testcafe
            </a>
            ,{' '}
            <a
              href="https://www.atlassian.com/continuous-delivery/ci-vs-ci-vs-cd"
              target="_blank"
              rel="noopener noreferrer"
            >
              CI/CD
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSP
            </a>
            ,{' '}
            <a href="https://jwt.io/" target="_blank" rel="noopener noreferrer">
              JWT
            </a>
            ,{' '}
            <a href="https://github.com/helmetjs/helmet" target="_blank" rel="noopener noreferrer">
              helmet
            </a>
          </li>
          <li>
            <a href="https://stripe.com" target="_blank" rel="noopener noreferrer">
              Stripe
            </a>
          </li>
          <li>
            <a href="http://heroku.com" target="_blank" rel="noopener noreferrer">
              Heroku
            </a>
          </li>
        </ul>
        <p>
          The frontend application was built with Next.js, the React framework for Server-Side
          rendering (SSR), and Express. Next.js was selected because of its opinionated setup with
          webpack, file-system routing, automatic code splitting for a fast page loading, and being
          SEO friendly.
        </p>
        <p>
          It was my first production SSR project; hence we encountered several issues before the
          main foundations were ready to deliver any features. With SSR the initial request for a
          page is handled on the server so that the browser can render the HTML page with the
          content already in place. In subsequent loadings, only the client-side is called into
          action. Therefore, we reviewed the approach of using Redux, cookies, local storage, and
          testing in general, to correctly run in a multi-environment like the one existing in SSR.
        </p>
        <p>
          My contribution was mainly in the authentication system, my account, orders, addresses,
          and favorites drinks management, basket and checkout system integrated with Stripe. All
          the delivered features were fully tested, and the Backend REST APIs were mocked not to
          trigger unnecessary HTTP requests during testing procedures. Each deploy initiated the
          pipeline, in a Continous Integration server, for build verification and errors detection
          before the weekly release.
        </p>
        <p>
          Regarding frontend performance, we included critical-path (above-the-fold) CSS to reduce
          page-blocking content, assets caching, image optimization, CSS/JS minification via
          webpack, and GZIP compression. Security was also a primary concern for this application.
          Hence, several HTTP headers and good practices were used, environment variables, and JWT
          for authentication between frontend and backend APIs.
        </p>
        <p>
          <img src={caseStudyArchitecture} alt="Cocktail Experience Architecture" />
        </p>
        <br />
        <br />
        <ul className="actions">
          <li>
            <Link to="/case-studies/experiments" className="button special">
              View Next Case Study
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
);

CaseStudy.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query {
    caseStudyImg: file(relativePath: { eq: "cocktail-experience-case-study.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default CaseStudy;
