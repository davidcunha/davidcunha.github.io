import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import about from '../assets/images/about.jpg'
class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <html lang="en" />
          <title>davidcunha.xyz</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
          <meta
            name="description"
            content="Hello, I’m David. I’m a professional Software Engineer with more than 6 years of experience. Interested in building scalable web apps and businesses that make people happy."
          />
          <meta itemProp="image" content={about} />
          <meta property="og:image" content={about} />
          <meta property="og:image:alt" content="davidcunha.xyz" />
          <meta property="og:image:width" content="260" />
          <meta property="og:image:height" content="260" />
          <meta property="og:url" content="https://davidcunha.xyz" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_GB" />
          <meta property="og:title" content="davidcunha.xyz" />
          <meta
            property="og:description"
            content="Hello, I’m David. I’m a professional Software Engineer with more than 6 years of experience. Interested in building scalable web apps and businesses that make people happy."
          />
          <meta name="twitter:image" content={about} />
          <meta property="twitter:image:width" content="260" />
          <meta property="twitter:image:height" content="260" />
          <meta
            property="twitter:description"
            content="Hello, I’m David. I’m a professional Software Engineer with more than 6 years of experience. Interested in building scalable web apps and businesses that make people happy."
          />
          <meta name="robots" content="index,follow" />>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="MobileOptimized" content="320" />
          <meta name="apple-mobile-web-app-title" content="davidcunha.xyz" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-touch-fullscreen" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="application-name" content="davidcunha.xyz" />
          <meta name="msapplication-TileColor" content="#FCFCFC" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-127658443-1"
          />
          <script>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-127658443-1');
            `}
          </script>
        </Helmet>

        <Banner
          title="Hi, my name is David"
          bgImg={this.props.data.about.childImageSharp.fluid}
        >
          <div className="content">
            <p>
              I’m a professional Software Engineer and Scrum Master
              <br /> with more than 6 years of experience based in sunny
              Portugal.
            </p>
            <ul className="actions">
              <li>
                <Link to="/about" className="button next">
                  About me
                </Link>
              </li>
            </ul>
          </div>
        </Banner>

        <div id="main">
          <section id="one" className="tiles">
            <article>
              <Img fluid={this.props.data.process.childImageSharp.fluid} />
              <header className="major">
                <h3>Process</h3>
              </header>
              <Link to="/process" className="link primary" />
            </article>
            <article>
              <Img fluid={this.props.data.caseStudies.childImageSharp.fluid} />
              <header className="major">
                <h3>Case Studies</h3>
              </header>
              <Link to="/case-studies" className="link primary" />
            </article>
          </section>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    about: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    process: file(relativePath: { eq: "process.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    caseStudies: file(relativePath: { eq: "case-studies.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default HomeIndex
