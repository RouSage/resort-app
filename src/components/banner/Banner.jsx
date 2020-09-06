import PropTypes from 'prop-types';
import React from 'react';
import './Banner.scss';

const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

Banner.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

Banner.defaultProps = {
  children: null,
  subtitle: '',
};

export default React.memo(Banner);
