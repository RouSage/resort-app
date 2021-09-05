import React from 'react';
import loadingGif from '../../images/gif/loading-arrow.gif';
import './Loading.scss';

const Loading = () => (
  <div className="loading">
    <h4>Rooms Data loading...</h4>
    <img src={loadingGif} alt="Loading..." />
  </div>
);

export default React.memo(Loading);
