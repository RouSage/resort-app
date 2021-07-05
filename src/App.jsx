import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Error from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import { HOME_PAGE, ROOMS_PAGE, SINGLE_ROOM_PAGE } from './routes';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path={HOME_PAGE}>
        <Home />
      </Route>
      <Route path={SINGLE_ROOM_PAGE}>
        <SingleRoom />
      </Route>
      <Route path={ROOMS_PAGE}>
        <Rooms />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  </>
);

export default App;
