import React from 'react';

import Room from '../room/Room';
import { RoomModel } from '../../context/room';

import './RoomList.scss';

interface RoomListProps {
  rooms: RoomModel[];
}

const RoomList = ({ rooms }: RoomListProps): JSX.Element => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
};

export default React.memo(RoomList);
