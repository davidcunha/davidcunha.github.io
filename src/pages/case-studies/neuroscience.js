import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import Banner from '../../components/Banner'

import caseStudyImg from '../../assets/images/neuroscience-case-study.jpg'

const CaseStudy = props => (
  <Layout>
    <Helmet>
      <title>Neuroscience</title>
      <meta name="description" content="Neuroscience" />
    </Helmet>

    <Banner title="Neuroscience" bgImg={caseStudyImg} bgColor="#7c7c80" />

    <div id="main" className="case-study">
      <div className="inner">
        <header className="major">
          <h3>Services</h3>
        </header>
        <ul>
          <li>Frontend development</li>
          <li>Backend and API development</li>
          <li>Technical Lead</li>
        </ul>
      </div>
      <div className="inner">
        <header className="major">
          <h3>Story and Process</h3>
        </header>
        <p>
          The client had a Neuropsychology clinic with several highly skilled
          professionals from this field: Ph.D.'s, researchers and doctors. With
          hundreds of patients every week, the team was studying new processes
          and innovative approaches for reducing effort and time spent to
          understand the behavioral and cognitive effects of neurological
          disorders.
        </p>
        <p>
          <h4>Neurofeeback (NFB)</h4>
        </p>
        <p>
          The treatment with Neurofeedback was slow, it required several 3rd
          party software with expensive licenses, and multiple skilled resources
          to analyze the output of each session, a task that could take a couple
          of weeks or even a month. Therefore the client's NFB team started by
          designing an algorithm and a microcomputer connected to a headset that
          would be used by patients during the treatment. The algorithm
          processed brain wave information, substituting a couple of different
          software, and send it to a backend for persisting in a database.
        </p>
        <p>
          I led a small team of 2 developers that was in charge of building the
          backend, data model, parser of data sources, and an interactive
          dashboard for technicians. Firstly we joined the client's NFB team for
          understanding the existing process and which features and information
          were crucial for the technician perspective in the Dashboard. While
          the Design team was designing the dashboard, we inspected the
          collected data and validated the data model with the client until we
          reached a good state of maturity before starting to build the actual
          APIs and parser. During the following months, the team delivered every
          2 weeks a new release of the parser and implemented the required
          features for the dashboard. While building the parser and data model,
          we got aware of the challenge and the complexity of the data sent by
          the microcomputer regarding structure and validation. It required
          extensive testing by both teams and was a time-consuming process
          during a significant part of the project. Unfortunately, we didn't
          find a more productive and easy way to simulate brain waves' good
          datasets within the 6-month deadline and resources we had available.
        </p>
        <p>
          In the end, we were able to deliver the prototype: dashboard, backend
          APIs, and parser, all integrated with the microcomputer, which
          decreased the time spent in treatment's analysis from a couple of
          weeks to 2 minutes. The prototype had bugs and wasn't completely
          reliable since the microcomputer algorithm was also being developed
          and adjusted based on the tests' results. Nevertheless, the client
          considered it a good starting point for further investment and demo
          purposes.
        </p>
        <p>
          <h4>Neurogames (NG)</h4>
        </p>
        <p>
          On the other hand, the treatment with Neurogames was brand new. It was
          state of the art applied methodology with 7 games already designed,
          and an extensive list of metrics and formulas to gather results from
          the treatment. The client didn't have any technical team besides the
          researchers that established the methodology and metrics.
        </p>
        <p>
          One of the team members was a specialist in motion, 3D and game
          development, while my experience in that area was minimal. Therefore
          my guidance was mostly towards code best practices, documentation and
          deliverables' quality than in the technology per se. The developer
          studied the several documents created by the research team and managed
          the expectations regarding the functionalities of each game. The 7
          cognitive games were all different from each other, with several
          sublevels, and there was a requirement for high time precision for
          each collected data point. Those data points were paramount for
          validating the treatment and comparing it with other existing
          strategies based on games. Therefore the game development was the
          biggest challenge of this project. For the dashboard, we reduced the
          development time significantly by building a components library from
          the NFB dashboard. This library was then used in the NG dashboard, and
          only specific features for this project were then implemented on top.
        </p>
        <p>
          In the end, we were able to deliver the prototype: dashboard, backend
          APIs, and 7 games, before the deadline. The prototype was then
          validated by real patients in the clinic, while bugs and small
          adjustments were developed in order to match the client's
          expectations.
        </p>
        <br />
        <p>
          Our methodology included bi-weekly Sprints, User Acceptance Testing
          for each feature/fix, Pair Programming, Code Review, Continuous
          Integration, and Continuous Delivery.
        </p>
      </div>
      <div className="inner">
        <header className="major">
          <h3>Architecture and Technology</h3>
        </header>
        <p>NFB/NG Dashboard &amp; Backend</p>
        <ul>
          <li>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
          </li>
          <li>
            <a
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
          </li>
          <li>
            <a
              href="https://www.ics.uci.edu/~fielding/pubs/dissertation/fielding_dissertation.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              REST APIs
            </a>
          </li>
          <li>
            <a
              href="https://nodejs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Node
            </a>
            /
            <a
              href="https://expressjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Express
            </a>
          </li>
          <li>
            <a
              href="https://sass-lang.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sass
            </a>
          </li>
          <li>
            <a href="https://jwt.io/" target="_blank" rel="noopener noreferrer">
              JWT
            </a>
          </li>
          <li>
            <a
              href="https://mochajs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mocha
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
              href="https://www.mysql.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MySQL
            </a>
          </li>
        </ul>

        <p>NFB Backend Parser</p>

        <ul>
          <li>
            <a
              href="https://nodejs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Node
            </a>
          </li>
          <li>
            <a
              href="https://www.rabbitmq.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              RabbitMQ
            </a>
          </li>
        </ul>

        <p>NG HTML5 Games</p>

        <ul>
          <li>
            <a
              href="http://www.pixijs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixi.js
            </a>
          </li>
          <li>
            <a
              href="https://sass-lang.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sass
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default CaseStudy
