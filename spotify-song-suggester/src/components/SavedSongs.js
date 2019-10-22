import React, { useState, useEffect } from 'react';
import SideNav from "./SideNav";
import SortField from "./SortField";


export default function SavedSongs(props) {
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


    useEffect(() => {
        if (sortFields.title) {
            let sortedTitleArray = [];
            sortedTitleArray = favorites.sort((a, b) => (a.title > b.title) ? 1 : -1).map((fav, index) => {
                <FavListItem key={index} fav={fav} />
            })
            favSongArray = sortedTitleArray;
        }
        else if (sortFields.artist) {
            let sortedArtistArray = [];
            sortedArtistArray = favorites.sort((a, b) => (a.artist > b.artist) ? 1 : -1).map((fav, index) => {
                <FavListItem key={index} fav={fav} />
            })
            favSongArray = sortedArtistArray;
        }
        else if (sortFields.duration) {
            let sortedDurationArray = [];
            sortedDurationArray = favorites.sort((a, b) => (a.artist > b.artist) ? 1 : -1).map((fav, index) => {
                <FavListItem key={index} fav={fav} />
            })
            favSongArray = sortedDurationArray;
        }
        else if (sortFields.tempo) {
            let sortedTempoArray = [];
            sortedTempoArray = favorites.sort((a, b) => (a.artist > b.artist) ? 1 : -1).map((fav, index) => {
                <FavListItem key={index} fav={fav} />
            })
            favSongArray = sortedTempoArray;
        }
    }, [sortFields])

    return (
        <div>
            <SideNav></SideNav>
            <SortField filterSelect={filterSelect}></SortField>
            {favSongArray}
        </div>
    )
}

