import React, { createContext, useState } from 'react';
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
import Logins from './Components/LoginAuth/Login';
import Search from './Components/Search/Search';
import PrivateRoute from './Components/LoginAuth/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})


  return (
    <section style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://i.ibb.co/dKVDK2P/Rectangle-1.png')`, paddingBottom : "300px"}}>
    <UserContext.Provider  value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/book/:id">
            <PlaceDetails></PlaceDetails>

          </Route>
          <Route path='/login'>
            <Login></Login>

          </Route>
          <PrivateRoute path='/search'>

            <Search></Search>

          </PrivateRoute>
          <Route path='/search'>
            <Search></Search>

          </Route>
          <Route path='/'>
            <Home></Home>

          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>
    </section>
  );
}

export default App;
