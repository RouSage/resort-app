import React, { useEffect, useState } from 'react';

// import items from './data';
import { FilterData, RoomModel, RoomType } from './room';

import client from '../contentful';

interface ContextType {
  rooms: RoomModel[];
  featuredRooms: RoomModel[];
  sortedRooms: RoomModel[];
  loading: boolean;
  filters: FilterData;
  getRoom: (slug: string) => RoomModel | undefined;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const defaultValues: ContextType = {
  rooms: [],
  featuredRooms: [],
  sortedRooms: [],
  loading: false,
  filters: {
    type: RoomType.All,
    capacity: '1',
    price: '0',
    minPrice: 0,
    maxPrice: 0,
    minSize: '0',
    maxSize: '0',
    breakfast: false,
    pets: false,
  },
  handleChange: () => {},
  getRoom: () => {
    return undefined;
  },
};

export const RoomContext = React.createContext<ContextType>(defaultValues);

interface RoomProviderProps {
  children: React.ReactNode;
}

const RoomProvider = ({ children }: RoomProviderProps): JSX.Element => {
  const [loading, setLoading] = useState(defaultValues.loading);
  const [roomsData, setRoomsData] = useState<{
    rooms: RoomModel[];
    featuredRooms: RoomModel[];
    sortedRooms: RoomModel[];
  }>({
    rooms: defaultValues.rooms,
    featuredRooms: defaultValues.featuredRooms,
    sortedRooms: defaultValues.sortedRooms,
  });
  const [filterData, setFilterData] = useState<FilterData>(
    defaultValues.filters
  );

  const formatData = (data: any): RoomModel[] => {
    const tempItems = data.map((item: any) => {
      const { id } = item.sys;
      const images = item.fields.images.map(
        (image: any) => image.fields.file.url
      );
      const room = { ...item.fields, images, id };

      return room;
    });

    return tempItems;
  };

  const getRoom = (slug: string): RoomModel | undefined => {
    const tempRooms = [...roomsData.rooms];
    return tempRooms.find((tempRoom) => tempRoom.slug === slug);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { target } = event;
    const value =
      target.type === 'checkbox'
        ? (target as HTMLInputElement).checked
        : target.value;
    const { name } = target;

    setFilterData({ ...filterData, [name]: value });
  };

  useEffect(() => {
    const filterRooms = (rooms: RoomModel[]): void => {
      const { type, minSize, maxSize, breakfast, pets, capacity, price } =
        filterData;
      // All the rooms
      let tempRooms = [...rooms];

      // Filter by type
      if (type !== RoomType.All) {
        tempRooms = tempRooms.filter((room) => room.type === type);
      }
      // Filter by capacity
      if (Number(capacity) !== 1) {
        tempRooms = tempRooms.filter(
          (room) => room.capacity >= Number(capacity)
        );
      }
      // Filter by price
      tempRooms = tempRooms.filter((room) => room.price <= Number(price));
      // Filter by size
      tempRooms = tempRooms.filter(
        (room) => room.size >= Number(minSize) && room.size <= Number(maxSize)
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
      setRoomsData((prevRoomsData) => ({
        ...prevRoomsData,
        sortedRooms: tempRooms,
      }));
    };

    // Filter rooms after each change in filterData
    filterRooms(roomsData.rooms);
  }, [filterData, roomsData.rooms]);

  useEffect(() => {
    // Get data
    const getData = async (): Promise<void> => {
      try {
        setLoading(true);

        const response = await client.getEntries({
          content_type: 'resortRoom',
          order: 'fields.price',
        });

        const rooms = formatData(response.items);
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
          price: String(maxPrice),
          maxPrice,
          maxSize: String(maxSize),
        }));
        setLoading(false);
      } catch (error) {
        throw Error(error as string);
      }
    };

    getData();
  }, []);

  return (
    <RoomContext.Provider
      value={{
        ...roomsData,
        filters: filterData,
        loading,
        getRoom,
        handleChange,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
