import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import axios from "axios";
import jss from 'jss';


import SignIn from './components/Login';
import SignUp from "./components/SignUp";
import SideNav from "./components/SideNav";
import SearchDashboard from "./components/SearchDashboard";
import SongsSearchDisplay from './components/SongsSearchDisplay';
import ArtistsSearchDisplay from './components/ArtistsSearchDisplay';
import ArtistFullWork from "./components/ArtistsFullWork";
import SavedSongs from "./components/SavedSongs";
import SearchHistory from "./components/SearchHistory";
import ExportToSpotify from "./components/ExportToSpotify";

import Home from "./components/Home";




function App() {

  const [data, setData] = useState([]);
  const [songs, setSongs] = useState([]);
  const [artitsts, setArtitsts] = useState([]);
  const [favorites, setFavorites] = useState({})

  useEffect(() => {
    axios
      .get()
      .then(res => {
        console.log("axios response", res);
        // setData(res.somethingOrOther);
      })
      .catch(err => {
        console.log("axios error", err);
      })

  }, []);


  return (
    <div className="App">

      <Route exact path="/" render={(props) => <SignIn {...props} />}></Route>
      <Route exact path="/signup" render={(props) => <SignUp {...props} />}></Route>
      <Route path="/home" render={(props) => <Home {...props} />}></Route>
      <Route exact path="/search" render={(props) => <SearchDashboard {...props} />}></Route>
      <Route path="/search/songs" render={(props) => <SongsSearchDisplay {...props} />}></Route>
      <Route exact path="/search/artists" render={(props) => <ArtistsSearchDisplay {...props} />}></Route>
      <Route exact path="/search/artists/songs" render={(props) => <ArtistFullWork {...props} />}></Route>
      <Route path="/saved-songs" render={(props) => <SavedSongs {...props} />}></Route>
      <Route path="/search-history" render={(props) => <SearchHistory {...props} />}></Route>
      <Route path="/export-to-spotify" render={(props) => <ExportToSpotify {...props} />}></Route>
    </div>
  );
}

export default App;
