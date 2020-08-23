import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import { RoomContext } from '../context';
import { ROOMS_PAGE } from '../routes';

const SingleRoom = () => {
  const { slug } = useParams();
  const { getRoom } = useContext(RoomContext);

  const room = getRoom(slug);

  if (!room) {
    return (
      <div className="error">
        <h3>No such room could be found...</h3>
        <Link to={ROOMS_PAGE} className="btn-primary">
          Back to Rooms
        </Link>
      </div>
    );
  }

  return (
    <Hero hero="roomsHero">
      <Banner title={`${room.name} room`}>
        <Link to={ROOMS_PAGE} className="btn-primary">
          Back to Rooms
        </Link>
      </Banner>
    </Hero>
  );
};

export default SingleRoom;
