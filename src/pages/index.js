import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import IGFeed from '../components/IGFeed';
import CaseStudy from '../components/CaseStudy';

const About = props => (
  <Layout>
    <Helmet>
      <html lang="en" />
      <title>davidcunha.xyz</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
      <meta
        name="description"
        content="Hello, I’m David. I’m a professional Software Engineer and Scrum Master with more than 6 years of experience. Interested in building scalable web apps and businesses that make people happy."
      />
      <meta itemProp="image" content={props.data.about.childImageSharp.fluid} />
      <meta property="og:image" content={props.data.about.childImageSharp.fluid} />
      <meta property="og:image:alt" content="davidcunha.xyz" />
      <meta property="og:image:width" content="260" />
      <meta property="og:image:height" content="260" />
      <meta property="og:url" content="https://davidcunha.xyz" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:title" content="davidcunha.xyz" />
      <meta
        property="og:description"
        content="Hello, I’m David. I’m a professional Software Engineer and Scrum Master with more than 6 years of experience. Interested in building scalable web apps and businesses that make people happy."
      />
      <meta name="twitter:image" content={props.data.about.childImageSharp.fluid} />
      <meta property="twitter:image:width" content="260" />
      <meta property="twitter:image:height" content="260" />
      <meta
        property="twitter:description"
        content="Hello, I’m David. I’m a professional Software Engineer and Scrum Master with more than 6 years of experience. Interested in building scalable web apps and businesses that make people happy."
      />
      <meta name="robots" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="apple-mobile-web-app-title" content="davidcunha.xyz" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="application-name" content="davidcunha.xyz" />
      <meta name="msapplication-TileColor" content="#FCFCFC" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-127658443-1" />
      <script>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-127658443-1');
            `}
      </script>
    </Helmet>

    <Banner title="Hi, my name is David" bgImg={props.data.about.childImageSharp.fluid} />

    <div id="main">
      <div className="inner">
        <p>
          I&apos;m a professional Software Engineer and Scrum Master with more than 6 years of
          experience based in sunny Portugal. Interested in building scalable web apps and
          businesses that make people happy.
        </p>
        <p>I love to:</p>
        <p>
          <span role="img" aria-label="emoji">
            👥
          </span>{' '}
          Help Developers and Teams
          <br />
          <span role="img" aria-label="emoji">
            👨‍💻
          </span>{' '}
          Write code
          <br />
          <span role="img" aria-label="emoji">
            ✈️
          </span>{' '}
          Travel and experience new things
          <br />
        </p>
        <br />
        <p>
          Building a business isn&apos;t easy. Even worse a profitable one. As an Engineer close to
          business decisions and building features that can impact the happiness of end-users and
          consequently product&apos;s growth, I get acquainted with the business domain I&apos;m
          working on. Knowing how to explain technical decisions to non-tech-savvy, and how to help
          businesses get the most value by asking the right questions, is what I believe is
          fundamental to succeed.
        </p>
        <br />
        <p>
          <span role="img" aria-label="emoji">
            📩{' '}
          </span>
          Feel free to contact me for projects and collaborations.
        </p>
        <Contact />
      </div>
      <div className="inner">
        <header className="major">
          <h3>Testimonials</h3>
        </header>
        <div className="quote">
          <blockquote>
            “I&apos;ve had the pleasure of growing our business alongside David for the past 4 years
            in Mucho, seeing him grow as a developer and into his different endeavors. David is
            extremely diligent, clear and productive. He is naturally curious and seeks new
            challenges, working at his best when he sees genuine issues that new technologies can
            solve. As a developer, he also has a clear understanding of how to weight the business
            benefits tech work can have. He is invested in people, trying to understand where people
            come from, which makes him a great team member.”
          </blockquote>
          <div className="author">
            <strong>Juliana Zarate - CEO and Co-Founder @ Mucho</strong>
          </div>
        </div>
        <br />
        <br />
        <div className="quote">
          <blockquote>
            “David is an exceptionally talented developer who always goes above and beyond to meet
            and exceed client expectations. David would be an asset to any team he works for in
            future.”
          </blockquote>
          <div className="author">
            <strong>Ciara Clancy - CEO @ Beats Medical</strong>
          </div>
        </div>
        <br />
        <br />
        <div className="quote">
          <blockquote>
            “Working with David, it&apos;s just a pleasure! I can easily say that he is the person
            that I most respect professionally - hardworking, talented, caring, perfectionist,
            trustworthy, humble - The truth is that I could go on with words to describe him.
            Amazing talented people like David are hard to stick with you on your team because they
            are never satisfied and always pushing the bar. I couldn&apos;t recommend him more.”
          </blockquote>
          <div className="author">
            <strong>Ricardo Parente - CEO @ PICUS.</strong>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="inner">
        <header className="major">
          <h3>Case Studies</h3>
        </header>
        <section id="one" className="spotlights">
          {[
            {
              title: 'Mucho',
              url: 'mucho',
              description:
                '<a href="https://www.getmucho.com" target="_blank" rel="noopener noreferrer">Mucho</a> provides a personalized experience for grocery shopping with inspirational recipes contributed by a trusted community of foodies. With a few clicks, ingredients for recipes and breakfast &amp; snacks are ordered, and a selected supermarket will delivery the order to the customer&apos;s doorstep.',
              img: props.data.caseStudy1.childImageSharp.fluid,
            },
            {
              title: 'Neuroscience',
              url: 'neuroscience',
              description:
                'Neuroscience (client&apos;s name and website disclosed) were two R&amp;D projects that solved distinctive problems through digital therapeutic solutions: Neurofeedback and Neurogames. Neurofeedback had as primary objective to innovate the standard process of assessing patient&apos;s brainwave activity EEG (electroencephalogram) biofeedback. On the other hand, Neurogames was state of the art applied methodology that used HTML5 cognitive games to assess and improve patient&apos;s brain functions.',
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
      <div className="inner">
        <header className="major">
          <h3>What I can help you with</h3>
        </header>
        <ul>
          <li>I have an idea for a project. How should I approach it?</li>
          <li>
            We have a ton of bugs because we&apos;re not applying testing. What and how should I
            test?
          </li>
          <li>I need to grow my backend/full-stack team.</li>
          <li>
            What do you think about &lt;<em>tech-name-here</em>&gt;? Should we use it?
          </li>
          <li>We&apos;re shipping software, but we carry over every Sprint. What should we do?</li>
          <li>How can I make this code work?</li>
          <li>How can I improve this code?</li>
        </ul>
      </div>
      <div className="inner">
        <header className="major">
          <h3>Training</h3>
        </header>
        <p>
          With the experience acquired, I&apos;m now regularly giving training to small to medium
          sized teams, mentoring CS students and invited to teach in Northen Portugal Universities.
          Besides mentorship, I also act as a facilitator between the Development team and the
          Product Owner in order to build high-performance teams and excellent products.
        </p>
        <p>I&apos;m currently giving training in the following subjects:</p>
        <ul>
          <li>Git and Github</li>
          <li>Scrum</li>
          <li>Rapid development with Ruby on Rails</li>
          <li>
            <a href="https://jschool.io/" target="_blank" rel="noopener noreferrer">
              JavaScript and Node.js introduction
            </a>
          </li>
          <li>How to build client-side experiences on reusable components with React</li>
          <li>Software Testing</li>
          <li>Web fundamentals - HTML, CSS, JavaScript, HTTP</li>
        </ul>
        <p>
          <a href="mailto:davidgoncalvescunha@gmail.com" target="_blank" rel="noopener noreferrer">
            Mail me here
          </a>{' '}
          for pricing, and I&apos;ll be very happy to help you, your team or your students!
        </p>
        <p>
          Ah! And every weekday, I&apos;m available for a direct or remote 30-minute free session
          between 18:00-20:00 (GMT). Just contact me via Email to schedule it{' '}
          <span role="img" aria-label="emoji">
            🤙
          </span>
        </p>
        <br />
        <Contact />
        <br />
        <IGFeed />
        <br />
        <br />
      </div>
    </div>
  </Layout>
);

About.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query {
    about: file(relativePath: { eq: "about.jpg" }) {
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

export default About;
