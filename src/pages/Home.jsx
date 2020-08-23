import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import FeaturedRooms from '../components/FeaturedRooms';
import Hero from '../components/Hero';
import Services from '../components/Services';
import { ROOMS_PAGE } from '../routes';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious rooms"
          subtitle="Deluxe rooms starting at $299"
        >
          <Link to={ROOMS_PAGE} className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
