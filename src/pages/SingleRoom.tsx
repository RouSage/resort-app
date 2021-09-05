import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import Banner from '../components/banner/Banner';
import StyledHero from '../components/StyledHero';
import { RoomContext } from '../context';
import defaultImg from '../images/room-1.jpeg';
import { ROOMS_PAGE, SingleRoomParams } from '../routes';

import '../scss/pages/SingleRoom.scss';

const SingleRoom = (): JSX.Element => {
  const { slug } = useParams<SingleRoomParams>();
  const { getRoom } = useContext(RoomContext);

  const room = getRoom(slug);

  if (room == null) {
    return (
      <div className="error">
        <h3>No such room could be found...</h3>
        <Link to={ROOMS_PAGE} className="btn-primary">
          Back to Rooms
        </Link>
      </div>
    );
  }

  const [mainImg, ...roomImages] = room.images;

  return (
    <>
      <StyledHero img={mainImg !== '' ? mainImg : defaultImg}>
        <Banner title={`${room.name} room`}>
          <Link to={ROOMS_PAGE} className="btn-primary">
            Back to Rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {roomImages.map((image, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <img key={index} src={image} alt={room.name} />
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{room.description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>Price: ${room.price}</h6>
            <h6>Size: {room.size} SQFT</h6>
            <h6>
              Max Capacity:
              {room.capacity > 1
                ? ` ${room.capacity} People`
                : ` ${room.capacity} Person`}
            </h6>
            <h6>{room.pets ? 'Pets allowed' : 'No pets allowed'}</h6>
            <h6>{room.breakfast && 'Free breakfast included'}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>Extras</h6>
        <ul className="extras">
          {room.extras.map((extra, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>- {extra}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
