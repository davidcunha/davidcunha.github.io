import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import process from '../assets/images/process.jpg'
import caseStudies from '../assets/images/case-studies.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>davidcunha.xyz</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
          <meta
            name="description"
            content="Hello, I’m David. I’m a professional Software Engineer with more than 6 years of experience. Interested in building scalable web apps that make people happy."
          />
          <meta itemProp="image" content="/logo.png" />
          <meta property="og:image:alt" content="davidcunha.xyz" />
          <meta property="og:image:width" content="260" />
          <meta property="og:image:height" content="260" />
          <meta property="og:url" content="https://davidcunha.xyz" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_GB" />
          <meta property="og:image" content="/logo.png" />
          <meta property="og:title" content="davidcunha.xyz" />
          <meta
            property="og:description"
            content="Hello, I’m David. I’m a professional Software Engineer with more than 6 years of experience. Interested in building scalable web apps that make people happy."
          />
          <meta name="twitter:image" content="/logo.png" />
          <meta property="twitter:image:width" content="260" />
          <meta property="twitter:image:height" content="260" />
          <meta
            property="twitter:description"
            content="Hello, I’m David. I’m a professional Software Engineer with more than 6 years of experience. Interested in building scalable web apps that make people happy."
          />
          <meta name="robots" content="index,follow" />>
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,maximum-scale=1"
          />
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
          <meta name="msapplication-TileColor" content="#ffffff" />
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

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${process})` }}>
              <header className="major">
                <h3>Process</h3>
              </header>
              <Link to="/process" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${caseStudies})` }}>
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

export default HomeIndex
