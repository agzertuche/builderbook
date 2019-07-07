import PropTypes from 'prop-types';

import Head from 'next/head';

const Index = () => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title>
Index page
      </title>
      <meta name="description" content="This is the description of the Index page" />
    </Head>
    <p>
Content on Index page
    </p>
    <p>
      Email:
      {user.email}
    </p>
  </div>
);

export default Index;
