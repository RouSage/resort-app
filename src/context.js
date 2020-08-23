import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import items from './data';

export const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [roomsData, setRoomsData] = useState({
    rooms: [],
    featuredRooms: [],
    sortedRooms: [],
  });

  const formatData = (data) => {
    const tempItems = data.map((item) => {
      const { id } = item.sys;
      const images = item.fields.images.map((image) => image.fields.file.url);
      const room = { ...item.fields, images, id };

      return room;
    });

    return tempItems;
  };

  useEffect(() => {
    const rooms = formatData(items);
    const featuredRooms = rooms.filter((room) => room.featured);

    setRoomsData((prevRoomsData) => ({
      ...prevRoomsData,
      rooms,
      featuredRooms,
      sortedRooms: rooms,
    }));
    setLoading(false);
  }, []);

  return (
    <RoomContext.Provider value={{ ...roomsData, loading }}>
      {children}
    </RoomContext.Provider>
  );
};

RoomProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RoomProvider;
