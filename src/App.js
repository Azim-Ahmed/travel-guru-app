import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import PlaceDetails from './Components/PlaceDetails/PlaceDetails';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Search from './Components/Search/Search';

import NoMatch from './Components/NoMatch/NoMatch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



export const UserContext = createContext()

function App() {

  const [user, setUser] = useState({
    name: '',
    first: '',
    last: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    success: ''
  })



  return (
    <section style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://i.ibb.co/dKVDK2P/Rectangle-1.png')`, paddingBottom: "300px" }}>
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/book/:placeId">
              <PlaceDetails></PlaceDetails>
            </Route>

            <PrivateRoute path='/search'>

              <Search />

            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>

            </Route>
            <Route path='/home'>
              <Home></Home>

            </Route>
            <Route exact path='/'>
              <Home></Home>

            </Route>
            <Route path='*/'>
              <NoMatch></NoMatch>

            </Route>
          </Switch>
        </Router>

      </UserContext.Provider>
    </section>
  );
}

export default App;
