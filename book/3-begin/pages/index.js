import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const Index = ({ user }) => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title>Dashboard</title>
      <meta name="description" content="This is a description of the Index page" />
    </Head>
    <p>Content on Index page</p>
    <p>
      Email:&nbsp;
      {user.email}
    </p>
  </div>
);

Index.getInitialProps = async (ctx) => ({ user: ctx.query.user });

  static defaultProps = {
    user: null,
  };

  render() {
    const { user } = this.props;
    return (
      <div style={{ padding: '10px 45px' }}>
        <Head>
          <title>
Dashboard
          </title>
          <meta name="description" content="List of purchased books." />
        </Head>
        <p>
          {' '}
Dashboard
          {' '}
        </p>
        <p>
          Email:
          {user.email}
        </p>
      </div>
    );
  }
}

export default Index;
