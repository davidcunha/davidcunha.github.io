import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import Contact from '../components/Contact';

const Process = props => (
  <Layout>
    <Helmet>
      <html lang="en" />
      <title>Process</title>
      <meta name="description" content="Process" />
    </Helmet>

    <Banner title="Process" bgImg={props.data.process.childImageSharp.fluid} />

    <div id="main">
      <div className="inner">
        <p>
          I love when I find an issue where a small action or a more extensive one can improve productivity and results. And yes..
          In the end, I do the math 😛
        </p>
        <p>
          <em>
            Probably we could improve the team’s deliverables with <strong>code review</strong> or{' '}
            <strong>pair programming</strong>? Implement proper testing procedures via{' '}
            <strong>User Acceptance Testing</strong> or <strong>TDD</strong>? Could we reduce
            misinterpretations if we use another medium of communication? Learning more about X, Y,
            Z and getting that training in the platform the client is currently using?
          </em>
        </p>
        <p>
          As I saw in the past, there are always many questions, obstacles or bad practices that
          could be fixed right away, oh boy it can be overwhelming… I first start
          by listening and observing the current situation without any prescription in mind.
          Then here comes the opportuniy to <strong>draw a time-bound goal we want to achieve</strong>.
          Where do we see this in 2 weeks, 1 month, or 6 months? Time is important, <strong>time creates accountability</strong>.
          Then we chunk it into small actionable pieces - not too much, not too little. It helps us get focused and consistent, test, and measure the impact of an applied tactic towards the higher goal.
        </p>
        <br />
        <Contact />
      </div>
      <div className="inner">
        <header className="major">
          <h3>Methodology</h3>
        </header>
        <p>
          I’m an <strong>Agile</strong> practitioner. However, like everything in this world, there is the good, the bad, and the misunderstood. Every project and company is different, and the process should be adjusted to the needs of the product and team, however, while preserving the Agile values and principles.
        </p>
        <p>I believe in:</p>
        <ul>
          <li>Focus on customer&apos;s satisfaction</li>
          <li>Well-defined roles and workflows</li>
          <li>Continuous delivery and feedback</li>
          <li>Close collaboration with team members and customers</li>
          <li>Flexibility to adapt during the development cycle</li>
          <li>Daily communication to build trust</li>
          <li>Manage priorities and visualize progress</li>
          <li>Discuss successes, failures, and plans</li>
          <li>Test Assumptions, and get validation with small deliverables (<a href="https://www.scrum.org" target="_blank" rel="noopener noreferrer">Scrum</a>, <a href="http://theleanstartup.com/" target="_blank" rel="noopener noreferrer">Lean Startup</a>)</li>
        </ul>
      </div>
      <div className="inner">
        <header className="major">
          <h3>Software Stack</h3>
        </header>
        <p>
          As you can read a bit more <Link to="/">about me</Link>, I had the opportunity to work on
          several projects from frontend to backend and distributed computing.
        </p>
        <p>My current stack:</p>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/bm/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              JavaScript (ES6/ES7)
            </a>
          </li>
          <li>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
              React
            </a>{' '}
            with{' '}
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
              Next.js
            </a>
          </li>
          <li>
            <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
              Redux
            </a>{' '}
            or{' '}
            <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer">
              GraphQL
            </a>
          </li>
          <li>
            <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
              Sass
            </a>{' '}
            or{' '}
            <a href="https://www.styled-components.com/" target="_blank" rel="noopener noreferrer">
              Styled Components
            </a>
          </li>
          <li>
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
              Node.js
            </a>
          </li>
          <li>
            <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
              MySQL
            </a>{' '}
            and/or{' '}
            <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
              MongoDB
            </a>
          </li>
          <li>
            <a href="https://prismic.io/" target="_blank" rel="noopener noreferrer">
              Prismic
            </a>{' '}
            or{' '}
            <a href="https://wordpress.com/" target="_blank" rel="noopener noreferrer">
              Wordpress
            </a>
          </li>
          <li>
            <a
              href="https://devexpress.github.io/testcafe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Testcafe
            </a>{' '}
            and{' '}
            <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">
              Jest
            </a>
          </li>
          <li>
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
              Git
            </a>
          </li>
        </ul>
        <p>
          Node.js enables building fast, real-time, scalable network applications, as it’s capable
          of handling a vast number of{' '}
          <strong>
            simultaneous connections with high throughput, consequently providing high scalability
          </strong>
          . On the frontend side, React provides a client-side experience on a single-page
          application with small,{' '}
          <strong>reusable components, consistent behavior, and rich interactions</strong>.
        </p>
        <p>
          Finally, Next.js comes as the React framework for Server-Side rendering with an{' '}
          <strong>opinionated setup for SEO-friendly websites</strong>. It’s fast, ready for
          production, and{' '}
          <a href="https://zeit.co/" target="_blank" rel="noopener noreferrer">
            ZEIT
          </a>
          ’s great team is behind it!
        </p>
        <p>
          Besides programming languages, frameworks and database systems, I’m familiar with the{' '}
          <em>ops</em> side, regarding cloud services, such as{' '}
          <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">
            AWS
          </a>,{' '}
          <a href="https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment" target="_blank" rel="noopener noreferrer">
            CI/CD
          </a>
          , reverse proxies like{' '}
          <a href="https://www.nginx.com/" target="_blank" rel="noopener noreferrer">
            Nginx
          </a>
          , and “containerization” platforms such as{' '}
          <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
            Docker
          </a>
          .
        </p>
        <ul className="actions">
          <li>
            <Link to="/case-studies/mucho" className="button special">
              View Case Studies
            </Link>
          </li>
        </ul>
      </div>
      <div className="inner">
        <header className="major">
          <h3>Tools</h3>
        </header>
        <p>
          Most of the time me, the team, or the client are working in different locations. Therefore{' '}
          <strong>
            the way we communicate is the most important factor for the success of the project
          </strong>
          . Asynchronous channels, meaning sometimes the other person is not immediately available
          to respond, are useful to include frequent updates on current work, and documentation
          available for everyone to contribute to. However{' '}
          <strong>major decisions must be performed over video calls, on even in person</strong>, as
          for those cases the tone of voice and body language are beneficial to develop relationship
          and trust.
        </p>
        <p>From the myriad of tools out there, I use:</p>
        <ul>
          <li>
            <a href="http://trello.com" target="_blank" rel="noopener noreferrer">
              JIRA or Trello
            </a>{' '}
            - The former, the most used tool for Scrum projects, and the latter, a simple and easy to use tool for organizing tasks and collaboration
          </li>
          <li>
            <a href="https://slack.com" target="_blank" rel="noopener noreferrer">
              Slack
            </a>{' '}
            - team communication and collaboration
          </li>
          <li>
            <a href="http://appear.in" target="_blank" rel="noopener noreferrer">
              Appear.in
            </a>{' '}
            or{' '}
            <a href="https://www.skype.com/en/" target="_blank" rel="noopener noreferrer">
              Skype
            </a>{' '}
            - one-to-one or group chat
          </li>
          <li>
            <a href="https://www.google.com/docs/about" target="_blank" rel="noopener noreferrer">
              Google Docs
            </a>{' '}
            - documentation
          </li>
          <li>
            <a href="https://gitlab.com/" target="_blank" rel="noopener noreferrer">
              Gitlab
            </a>{' '}
            or{' '}
            <a href="http://github.com" target="_blank" rel="noopener noreferrer">
              Github
            </a>{' '}
            - code repository and code reviews
          </li>
          <li>
            <a href="https://www.browserstack.com/" target="_blank" rel="noopener noreferrer">
              Browserstack
            </a>{' '}
            - testing with real mobile devices and browsers
          </li>
        </ul>
        <br />
        <Contact />
        <br />
        <br />
      </div>
    </div>
  </Layout>
);

Process.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query {
    process: file(relativePath: { eq: "process.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default Process;
