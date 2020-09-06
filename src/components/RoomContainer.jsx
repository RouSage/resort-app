import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Loading from './loading/Loading';
import RoomFilter from './roomFilter/RoomFilter';
import RoomList from './RoomList';

const RoomContainer = () => {
  const { loading, sortedRooms, rooms } = useContext(RoomContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
};

export default React.memo(RoomContainer);
