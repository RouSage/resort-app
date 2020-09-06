import PropTypes from 'prop-types';
import React from 'react';
import Room from './room/Room';

const RoomList = ({ rooms }) => {
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

RoomList.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.object),
};

RoomList.defaultProps = {
  rooms: [],
};

export default React.memo(RoomList);
