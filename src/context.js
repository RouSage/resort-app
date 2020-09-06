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
  const [filterData, setFilterData] = useState({
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
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

  const getRoom = (slug) => {
    const tempRooms = [...roomsData.rooms];
    const room = tempRooms.find((tempRoom) => tempRoom.slug === slug);

    return room;
  };

  const filterRooms = () => {
    const { rooms } = roomsData;
    const { type, minSize, maxSize, breakfast, pets } = filterData;
    let { capacity, price } = filterData;
    // All the rooms
    let tempRooms = [...rooms];

    // Transform values
    capacity = parseInt(capacity, 10);
    price = parseInt(price, 10);

    // Filter by type
    if (type !== 'all') {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    // Filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    // Filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);
    // Filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    // Filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast);
    }
    // Filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets);
    }

    // Update state with sorted rooms
    setRoomsData({ ...roomsData, sortedRooms: tempRooms });
  };

  const handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    setFilterData({ ...filterData, [name]: value });
  };

  useEffect(() => {
    // Filter rooms after each change in filterData
    filterRooms();
  }, [filterData]);

  useEffect(() => {
    const rooms = formatData(items);
    const featuredRooms = rooms.filter((room) => room.featured);
    const maxPrice = Math.max(...rooms.map((room) => room.price));
    const maxSize = Math.max(...rooms.map((room) => room.size));

    setRoomsData((prevRoomsData) => ({
      ...prevRoomsData,
      rooms,
      featuredRooms,
      sortedRooms: rooms,
    }));
    setFilterData((prevFilterData) => ({
      ...prevFilterData,
      price: maxPrice,
      maxPrice,
      maxSize,
    }));
    setLoading(false);
  }, []);

  return (
    <RoomContext.Provider
      value={{ ...roomsData, ...filterData, loading, getRoom, handleChange }}
    >
      {children}
    </RoomContext.Provider>
  );
};

RoomProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RoomProvider;
