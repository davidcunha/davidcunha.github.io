import React, { PureComponent } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

class IndexPage extends PureComponent {
  render() {
    return (
      <Layout backgroundColor="dark" withLoading={true}>
        <SEO title="Hello!" keywords={[]} />
        <div>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
