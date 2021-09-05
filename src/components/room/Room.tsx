import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import { RoomModel } from '../../context/room';
import placeholderRoom from '../../images/room-1.jpeg';
import { ROOMS_PAGE } from '../../routes';

import './Room.scss';

interface RoomProps {
  room: RoomModel;
}

const Room = ({ room }: RoomProps): JSX.Element => {
  const { name, slug, images, price } = room;
  const image = images[0] !== '' ? images[0] : placeholderRoom;

  return (
    <article className="room">
      <div className="img-container">
        <LazyLoadImage
          alt={name}
          src={image}
          placeholderSrc={placeholderRoom}
        />
        {/* <img src={images[0] || placeholderRoom} alt="Single Room" /> */}
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`${ROOMS_PAGE}/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

export default React.memo(Room);
