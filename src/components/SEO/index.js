import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import about from '../../images/about.jpg';

function SEO({ title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  return (
    <Helmet title={title} titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
      <meta
        name="description"
        content="Hello, I’m David. I’m a professional Software Engineer and Scrum Master with more than 6 years of experience. Interested in building scalable web apps and businesses that make people happy."
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
        content="Hello, I’m David. I’m a professional Software Engineer and Scrum Master with more than 6 years of experience. Interested in building scalable web apps and businesses that make people happy."
      />
      <meta name="twitter:image" content={about} />
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
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,500,700&display=swap"
        rel="stylesheet"
      />
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
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;
