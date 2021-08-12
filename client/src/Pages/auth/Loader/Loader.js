import React from 'react';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loaders from 'react-loader-spinner';

const Loader = () => {
  return (
    <Loaders
      style={{ textAlign: 'center', marginTop: '30vh' }}
      type="Puff"
      color="#8833FF"
      height={60}
      width={60}
      timeout={1000} //3 secs
    />
  );
};

export default Loader;
