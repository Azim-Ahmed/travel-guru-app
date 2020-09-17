import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import PlaceDetails from './Components/PlaceDetails/PlaceDetails';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})


  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <h1>name: {loggedInUser.email}</h1>
      <Router>
        <Header></Header>
        <Switch>
          <Route path={`/book/:id`}>
            <PlaceDetails></PlaceDetails>

          </Route>
          <Route path='/login'>
            <Login></Login>

          </Route>
          <Route path='/'>
            <Home></Home>

          </Route>
          <Route path='/'>
            <Home></Home>

          </Route>
          <Route path='/'>
            <Home></Home>

          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
