import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Loading from '../components/Loading';

class IndexPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 5000);
  }

  render() {
    return (
      <Layout backgroundColor="dark">
        <SEO title="Hello!" keywords={[]} />
        {this.state.loading ? (
          <Loading />
        ) : (
          <div>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
          </div>
        )}
      </Layout>
    );
  }
}

export default IndexPage;
