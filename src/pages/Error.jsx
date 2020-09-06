import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/banner/Banner';
import Hero from '../components/Hero';
import { HOME_PAGE } from '../routes';

const Error = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="Page Not Found">
        <Link to={HOME_PAGE} className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
