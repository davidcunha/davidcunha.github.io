import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import process from '../assets/images/process.jpg'

const Process = props => (
  <Layout>
    <Helmet>
      <title>Process</title>
      <meta name="description" content="Process" />
    </Helmet>

    <Banner title="Process" bgImg={process} />

    <div id="main">
      <div className="inner">
        <p>
          I’m what they usually call a <em>process freak</em>. I love when I
          find an issue where a small action or a more extensive guideline can
          improve productivity and results. And yes.. In the end, I do the math
          😛
        </p>
        <p>
          <em>
            Probably I could improve my team’s deliverables with{' '}
            <strong>code review</strong> or <strong>pair programming</strong>?
            Implement proper testing procedures via{' '}
            <strong>User Acceptance Testing</strong> or <strong>TDD</strong>?
            Could we reduce misinterpretations if we use another medium of
            communication? Learning more about X, Y, Z and getting that
            certification in the platform the client is currently using?
          </em>
        </p>
        <p>
          As I saw in the past, there are always many questions, obstacles or
          bad practices that could be fixed right away, oh boy it can be
          overwhelming at a first stance… I first start by{' '}
          <strong>drawing a time-bound goal I want to achieve</strong>. Where do
          I see this in 3 months or 6 months, or 1 year? Time is important,{' '}
          <strong>time creates accountability</strong>. Then I chunk it into
          small actionable pieces - not too much, not too little. It helps me
          get focused and consistent, monitor the progress, and measure the
          impact of an applied tactic towards the higher goal.
        </p>
      </div>
      <div className="inner">
        <header className="major">
          <h3>Methodology</h3>
        </header>
        <p>
          I’m an <strong>Agile</strong> fan, well I said it. However, like
          everything in this world, there is the good, the bad and the
          misunderstood. Every project and company is different, and the process
          needs to adapt to the needs of the product and team, not the way
          around.
        </p>
        <p>I believe in:</p>
        <ul>
          <li>Well-defined roles and workflows</li>
          <li>Close collaboration with team members and client</li>
          <li>Flexibility to adapt during the development cycle</li>
          <li>Daily communication to build trust</li>
          <li>Manage priorities and visualize progress</li>
          <li>Discuss successes, failures, and plans</li>
          <li>Test Assumptions, and get validation with small deliverables</li>
        </ul>
      </div>
      <div className="inner">
        <header className="major">
          <h3>Software Stack</h3>
        </header>
        <p>
          As you can read a bit more <Link to="/about">about me</Link>, I had
          the opportunity to work on several projects from frontend to backend
          and distributed computing.
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
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>{' '}
            with{' '}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>
          </li>
          <li>
            <a
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>{' '}
            or{' '}
            <a
              href="https://graphql.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GraphQL
            </a>
          </li>
          <li>
            <a
              href="https://sass-lang.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sass
            </a>{' '}
            or{' '}
            <a
              href="https://www.styled-components.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Styled Components
            </a>
          </li>
          <li>
            <a
              href="https://nodejs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Node.js
            </a>
          </li>
          <li>
            <a
              href="https://www.mysql.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MySQL
            </a>{' '}
            and/or{' '}
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MongoDB
            </a>
          </li>
          <li>
            <a
              href="https://prismic.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prismic
            </a>{' '}
            or{' '}
            <a
              href="https://wordpress.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            <a
              href="https://jestjs.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jest
            </a>
          </li>
          <li>
            <a
              href="https://git-scm.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Git
            </a>
          </li>
        </ul>
        <p>
          Node.js enables building fast, real-time, scalable network
          applications, as it’s capable of handling a vast number of{' '}
          <strong>
            simultaneous connections with high throughput, consequently
            providing high scalability
          </strong>
          . On the frontend side, React provides a client-side experience on a
          single-page application with small,{' '}
          <strong>
            reusable components, consistent behavior, and rich interactions
          </strong>
          .
        </p>
        <p>
          Finally, Next.js comes as the React framework for Server-Side
          rendering with an{' '}
          <strong>opinionated setup for SEO-friendly websites</strong>. It’s
          fast, ready for production, and{' '}
          <a href="https://zeit.co/" target="_blank" rel="noopener noreferrer">
            ZEIT
          </a>
          ’s great team is behind it!
        </p>
        <p>
          Besides programming languages, frameworks and database systems, I’m
          familiar with the <em>ops</em> side, regarding cloud services, such as{' '}
          <a
            href="https://aws.amazon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS
          </a>
          , reverse proxies like{' '}
          <a
            href="https://www.nginx.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nginx
          </a>
          , and “containerization” platforms such as{' '}
          <a
            href="https://www.docker.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docker
          </a>
          .
        </p>
        <ul className="actions">
          <li>
            <Link to="/case-studies" className="button special">
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
          Most of the time me, the team, or the client are working in different
          locations. Therefore{' '}
          <strong>
            the way we communicate is the most important factor for the success
            of the project
          </strong>
          . Asynchronous channels, meaning sometimes the other person is not
          immediately available to respond, are useful to include frequent
          updates on current work, and documentation available for everyone to
          contribute to. However{' '}
          <strong>
            major decisions must be performed over video calls, on even in
            person
          </strong>
          , as for those cases the tone of voice and body language are
          beneficial to develop relationship and trust.
        </p>
        <p>From the myriad of tools out there, I use:</p>
        <ul>
          <li>
            <a
              href="http://trello.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trello
            </a>{' '}
            - simple and easy to use planning and project management
          </li>
          <li>
            <a
              href="https://slack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Slack
            </a>{' '}
            - team communication and collaboration
          </li>
          <li>
            <a
              href="http://appear.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Appear.in
            </a>{' '}
            or{' '}
            <a
              href="https://www.skype.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Skype
            </a>{' '}
            - one-to-one or group chat
          </li>
          <li>
            <a
              href="https://www.google.com/docs/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Docs
            </a>{' '}
            - documentation
          </li>
          <li>
            <a
              href="https://gitlab.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gitlab
            </a>{' '}
            or{' '}
            <a
              href="http://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{' '}
            - code repository and code reviews
          </li>
          <li>
            <a
              href="https://www.browserstack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Browserstack
            </a>{' '}
            - testing with real mobile devices and browsers
          </li>
        </ul>
      </div>
      <div className="inner">
        <header className="major">
          <h3>Writings</h3>
        </header>
        <p>
          Writing is the toughest and best thing I could do to improve my
          craftsmanship.{' '}
          <strong>
            I’m only sure that I know something when I{' '}
            <a
              href="https://instagram.com/davidcunha.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              write
            </a>{' '}
            or teach about it
          </strong>
          .
        </p>
        <p>
          I usually write about tech, processes, books and recent learnings in
          my{' '}
          <a
            href="https://instagram.com/davidcunha.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>{' '}
          account and/or{' '}
          <a
            href="https://medium.com/@_davidcunha"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>
          .
        </p>
        <p>
          Feel free to comment, clap, and{' '}
          <a href="mailto:davidgoncalvescunha@gmail.com">mail me here</a>, if
          you want to discuss more about a posted topic{' '}
          <span role="img" aria-label="emoji">
            🤙
          </span>
        </p>
      </div>
    </div>
  </Layout>
)

export default Process
