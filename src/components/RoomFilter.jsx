/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

const RoomFilter = ({ rooms }) => {
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = useContext(RoomContext);

  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
  };

  let types = getUnique(rooms, 'type');
  types = ['all', ...types];
  const people = getUnique(rooms, 'capacity');

  return (
    <section className="filter-container">
      <Title title="Search rooms" />
      <form className="filter-form" />
      {/* Select type */}
      <div className="form-group">
        <label htmlFor="type">Room type</label>
        <select
          name="type"
          id="type"
          value={type}
          onChange={handleChange}
          className="form-control"
        >
          {types.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {/* Select guests */}
      <div className="form-group">
        <label htmlFor="capacity">Guests</label>
        <select
          name="capacity"
          id="capacity"
          value={capacity}
          onChange={handleChange}
          className="form-control"
        >
          {people.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {/* room price */}
      <div className="form-group">
        <label htmlFor="price">Room price ${price}</label>
        <input
          type="range"
          name="price"
          id="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={handleChange}
          className="form-control"
        />
      </div>
    </section>
  );
};

RoomFilter.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.object),
};

RoomFilter.defaultProps = {
  rooms: [],
};

export default React.memo(RoomFilter);
