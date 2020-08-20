import PropTypes from 'prop-types';
import React from 'react';

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
  subtitle: PropTypes.string.isRequired,
};

Banner.defaultProps = {
  children: null,
};

export default Banner;
