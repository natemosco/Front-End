import React, { useState, useEffect } from 'react';
import SideNav from "./SideNav";
import SortField from "./SortField";
import FavListItem from "./FavListItem";


export default function SavedSongs(props) {
    let { favorites, setRecommendedIsChecked } = props;
    const [sortFields, setSortFields] = useState({
        title: true,
        artist: false,
        duration: false,
        tempo: false
    })

    const filterSelect = (event) => {
        event.preventDefault();
        setSortFields({
            title: false,
            artist: false,
            duration: false,
            tempo: false,
            [event.target.id]: true
        })
    }


    let favSongArray = [];

    if (sortFields.title) {
        let sortedTitleArray = [];
        sortedTitleArray = favorites.sort((a, b) => (a.song_name > b.song_name) ? 1 : -1).map((fav, index) => {
            return <FavListItem key={index} fav={fav} setRecommendedIsChecked={setRecommendedIsChecked} />
        })
        favSongArray = sortedTitleArray;
    }
    else if (sortFields.artist) {
        let sortedArtistArray = [];
        sortedArtistArray = favorites.sort((a, b) => (a.artist > b.artist) ? 1 : -1).map((fav, index) => {
            return <FavListItem key={index} fav={fav} setRecommendedIsChecked={setRecommendedIsChecked} />
        })
        favSongArray = sortedArtistArray;
    }
    else if (sortFields.duration) {
        let sortedDurationArray = [];
        sortedDurationArray = favorites.sort((a, b) => (a.artist > b.artist) ? 1 : -1).map((fav, index) => {
            return <FavListItem key={index} fav={fav} setRecommendedIsChecked={setRecommendedIsChecked} />
        })
        favSongArray = sortedDurationArray;
    }
    else if (sortFields.tempo) {
        let sortedTempoArray = [];
        sortedTempoArray = favorites.sort((a, b) => (a.artist > b.artist) ? 1 : -1).map((fav, index) => {
            return <FavListItem key={index} fav={fav} setRecommendedIsChecked={setRecommendedIsChecked} />
        })
        favSongArray = sortedTempoArray;
    }

    return (
        <div>
            <SideNav {...props} setSongs={props.setSongs} recommendedIsChecked={props.recommendedIsChecked} setRecs={props.setRecs}></SideNav>
            <SortField filterSelect={filterSelect}></SortField>
            {favSongArray}
        </div>
    )
}

