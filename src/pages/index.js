import React, { PureComponent } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Loading from '../components/Loading';

class IndexPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.isLoadingTimeout = setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 5000);
  }

  componentWillUnmount() {
    if (this.isLoadingTimeout) {
      clearTimeout(this.isLoadingTimeout);
    }
  }

  render() {
    return (
      <Layout backgroundColor="dark" isLoading={this.state.isLoading}>
        <SEO title="Hello!" keywords={[]} />
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <>
            <div>
              <h1>Hi people</h1>
              <p>Welcome to your new Gatsby site.</p>
              <p>Now go build something great.</p>
            </div>
            <div className="transition">
              <div className="transition-layer" />
              <div className="transition-layer" />
              <div className="transition-layer" />
            </div>
          </>
        )}
      </Layout>
    );
  }
}

export default IndexPage;
