import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../../components/layout';
import Banner from '../../components/Banner';
import Contact from '../../components/Contact';

import caseStudyArchitecture from '../../assets/images/mucho-case-study-architecture.svg';

const CaseStudy = props => (
  <Layout>
    <Helmet>
      <html lang="en" />
      <title>Mucho</title>
      <meta name="description" content="Mucho" />
    </Helmet>

    <Banner title="Mucho" bgImg={props.data.caseStudyImg.childImageSharp.fluid} bgColor="#7c7c80" />

    <div id="main" className="case-study">
      <div className="inner">
        <header className="major">
          <h3>Services</h3>
        </header>
        <ul>
          <li>Scrum Master</li>
          <li>Backend and API development</li>
          <li>AWS setup and management</li>
        </ul>
        <br />
        <Contact />
      </div>
      <div className="inner">
        <header className="major">
          <h3>Story and Process</h3>
        </header>
        <p>
          My contribution to this project started when I was hired to join the backend development
          team that consisted of one developer at that time. I had a small period of adaptation
          where I was presented to the data model, existing features, and AWS services management.
          Precisely after that period, the actual backend developer quit the project, hence my first
          challenge was to take over the whole PHP codebase, which is not my primary programming
          language, and deliver the required features/fixes without disrupting the actual pace of
          development.
        </p>
        <p>
          At the same time, the vision was building a small team of developers and work with an Agile mindset step by step by implementing the Scrum framework. Besides the technical development responsibilities, I acted as a facilitator and change agent in the small organization, working closely with the Product Owner in order to focus on bringing the most value for Mucho&apos;s customers.
        </p>
        <p>
          Regarding the product, we focused on building new personalization features, such as recommendation feed, recipes
          of the day, adding other types of media to the recipes representation, like videos, aiming
          to offer a better experience for home’s cooks.{' '}
          <a href="https://apps.apple.com/us/app/mucho-recipes-groceries/id1052747180" target="_blank" rel="noopener noreferrer">
            Mucho
          </a>{' '}
          won the attention of the press when it was selected to join JLab to build a use-case for{' '}
          <a href="https://www.waitrose.com/" target="_blank" rel="noopener noreferrer">
            Waitrose
          </a>
          . During the following 10 weeks, we teamed up in London to brainstorm what would be the
          best process to integrate Mucho with products from Waitrose’s supermarkets. Since I didn’t
          have access initially to an internal product API from Waitrose, we opted to scrap (with
          Waitrose’s authorization) the products data from their e-commerce website. This option
          enabled us to build and test a successful click and collect scenario with own{' '}
          <a href="https://www.johnlewis.com/" target="_blank" rel="noopener noreferrer">
            John Lewis
          </a>{' '}
          employees as testers!
        </p>
        <p>
          Lately, we forked the codebase and created a new version of the app/backend for Colombia
          customers, which is an emerging market for foodies. This operation required the setup of
          testing and production environments, as a Git workflow, adequate for an easy development
          process.
        </p>
        <p>
          Our methodology included fortnightly Sprints, User Acceptance Testing, and Continuous
          Delivery.
        </p>
      </div>
      <div className="inner">
        <header className="major">
          <h3>Architecture and Technology</h3>
        </header>
        <ul>
          <li>
            <a href="https://php.net/" target="_blank" rel="noopener noreferrer">
              PHP
            </a>
            /
            <a href="https://laravel.com/" target="_blank" rel="noopener noreferrer">
              Laravel
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
            <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
              MySQL
            </a>
          </li>
          <li>
            <a href="https://stripe.com/" target="_blank" rel="noopener noreferrer">
              Stripe
            </a>
          </li>
          <li>
            <a
              href="https://aws.amazon.com/elasticbeanstalk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amazon Beanstalk
            </a>
            ,{' '}
            <a href="https://aws.amazon.com/ec2" target="_blank" rel="noopener noreferrer">
              EC2
            </a>
            ,{' '}
            <a href="https://aws.amazon.com/s3" target="_blank" rel="noopener noreferrer">
              S3
            </a>
            ,{' '}
            <a href="https://aws.amazon.com/rds" target="_blank" rel="noopener noreferrer">
              RDS
            </a>
            ,{' '}
            <a href="https://aws.amazon.com/sqs" target="_blank" rel="noopener noreferrer">
              SQS
            </a>
            ,{' '}
            <a href="https://aws.amazon.com/elasticache" target="_blank" rel="noopener noreferrer">
              ElastiCache
            </a>
            ,{' '}
            <a
              href="https://aws.amazon.com/elasticsearch-service"
              target="_blank"
              rel="noopener noreferrer"
            >
              Elasticsearch
            </a>
          </li>
        </ul>
        <p>
          The architecture consists of numerous REST APIs serving a mobile application developed in
          iOS. In the backend, I developed a content-based filtering recommendation engine that
          returns daily personal recommendations — catering to any of the user’s dietary
          requirements or allergies. For a smooth configuration, the recommendation engine has a set
          of configuration rules with parameters that can be adjusted by an Admin.
        </p>
        <p>
          Moreover, the app offers a friendly search UI for finding recipes that match user’s
          requirements. As we needed a scalable and trustable search engine system, Elastic Search
          was the selected tool. The queries results and used objects for users’ feed are cached in
          a memory object caching system such as Memcached.
        </p>
        <p>
          One of the most notables features, depicted in the architecture, is the digital cupboard.
          The purpose of the cupboard is solely to track ingredients quantities ordered and consumed
          by each user, to make sure that the system reduces waste and give users the most value
          they can get for the money they’re spending, in future orders.
        </p>
        <p>
          The whole backend infrastructure was set up and scaled by Amazon Web Services, with both
          testing and production environment, where we take advantage of the several services
          provided in AWS catalog. Amazon Beanstalk for handling deployments, EC2 managed by
          Beanstalk for server virtualization, S3 for static assets, RDS for the relational
          database, SQS when running background tasks, ElastiCache for caching, and Elasticsearch
          for the search engine.
        </p>
        <p>
          <img src={caseStudyArchitecture} alt="Mucho Architecture" />
        </p>
        <br />
        <br />
        <ul className="actions">
          <li>
            <Link to="/case-studies/neuroscience" className="button special">
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
    caseStudyImg: file(relativePath: { eq: "mucho-case-study.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

export default CaseStudy;
