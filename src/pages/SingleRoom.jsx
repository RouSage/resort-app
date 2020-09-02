import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';
import { RoomContext } from '../context';
import defaultImg from '../images/room-1.jpeg';
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
    <StyledHero img={room.images[0] || defaultImg}>
      <Banner title={`${room.name} room`}>
        <Link to={ROOMS_PAGE} className="btn-primary">
          Back to Rooms
        </Link>
      </Banner>
    </StyledHero>
  );
};

export default SingleRoom;
