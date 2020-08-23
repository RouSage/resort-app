import PropTypes from 'prop-types';
import React from 'react';

export const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
  return <RoomContext.Provider value="bye">{children}</RoomContext.Provider>;
};

RoomProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RoomProvider;
