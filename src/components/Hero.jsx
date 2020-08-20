import PropTypes from 'prop-types';
import React from 'react';

const Hero = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

Hero.propTypes = {
  children: PropTypes.element.isRequired,
  hero: PropTypes.string,
};

Hero.defaultProps = {
  hero: 'defaultHero',
};

export default React.memo(Hero);
