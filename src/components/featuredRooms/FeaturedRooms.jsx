import React, { useContext } from 'react';
import { RoomContext } from '../../context';
import Loading from '../loading/Loading';
import Room from '../room/Room';
import Title from '../Title';
import './FeaturedRooms.scss';

const FeaturedRooms = () => {
  const { featuredRooms, loading } = useContext(RoomContext);

  return (
    <section className="featured-rooms">
      <Title title="Featured Rooms" />
      <div className="featured-rooms-center">
        {loading ? (
          <Loading />
        ) : (
          featuredRooms.map((room) => <Room key={room.id} room={room} />)
        )}
      </div>
    </section>
  );
};

export default React.memo(FeaturedRooms);
