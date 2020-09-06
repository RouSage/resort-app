import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/banner/Banner';
import Hero from '../components/hero/Hero';
import RoomContainer from '../components/RoomContainer';
import { HOME_PAGE } from '../routes';

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to={HOME_PAGE} className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </>
  );
};

export default Rooms;
