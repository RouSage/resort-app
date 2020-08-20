import React from 'react';
import './App.css';
import Error from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Home />
      <SingleRoom />
      <Rooms />
      <Error />
    </>
  );
};

export default App;
