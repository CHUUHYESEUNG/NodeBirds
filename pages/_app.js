import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';

const TruckMap = ({ Component }) => {
  return (
    <>
      <Head>
        <title>TruckMap</title>
      </Head>
      <Component />
    </>
  );
};

TruckMap.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(TruckMap);
