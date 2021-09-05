import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/banner/Banner';
import FeaturedRooms from '../components/featuredRooms/FeaturedRooms';
import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';
import { ROOMS_PAGE } from '../routes';

const Home = () => (
  <>
    <Hero>
      <Banner title="Luxurious rooms" subtitle="Deluxe rooms starting at $299">
        <Link to={ROOMS_PAGE} className="btn-primary">
          Our Rooms
        </Link>
      </Banner>
    </Hero>
    <Services />
    <FeaturedRooms />
  </>
);

export default Home;
