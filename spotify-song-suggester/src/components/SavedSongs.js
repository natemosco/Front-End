import React, { useState, useEffect } from 'react';
import SideNav from "./SideNav";
import SortField from "./SortField";
import FavListItem from "./FavListItem";
import styled from "styled-components";

const DivLimiter = styled.div`
    max-width: 100%;
`;


export default function SavedSongs(props) {
    let { setUpdatedFavorites, updatedFavorites, favorites, setSongs, recommendedIsChecked, setRecommendedIsChecked, setRecs, setMainGraphUrl } = props
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
            return <FavListItem key={index} {...props} fav={fav} setUpdatedFavorites={setUpdatedFavorites} updatedFavorites={updatedFavorites} setRecommendedIsChecked={setRecommendedIsChecked} setMainGraphUrl={setMainGraphUrl} setRecs={setRecs} />
        })
        favSongArray = sortedTitleArray;
    }
    else if (sortFields.artist) {
        let sortedArtistArray = [];
        sortedArtistArray = favorites.sort((a, b) => (a.artist > b.artist) ? 1 : -1).map((fav, index) => {
            return <FavListItem key={index} {...props} fav={fav} setUpdatedFavorites={setUpdatedFavorites} updatedFavorites={updatedFavorites} setRecommendedIsChecked={setRecommendedIsChecked} setMainGraphUrl={setMainGraphUrl} setRecs={setRecs} />
        })
        favSongArray = sortedArtistArray;
    }
    // else if (sortFields.duration) {
    //     let sortedDurationArray = [];
    //     sortedDurationArray = favorites.sort((a, b) => (a.artist > b.artist) ? 1 : -1).map((fav, index) => {
    //         return <FavListItem key={index} {...props} fav={fav} setUpdatedFavorites={setUpdatedFavorites} updatedFavorites={updatedFavorites} setRecommendedIsChecked={setRecommendedIsChecked} setMainGraphUrl={setMainGraphUrl} setRecs={setRecs} />
    //     })
    //     favSongArray = sortedDurationArray;
    // }
    // else if (sortFields.tempo) {
    //     let sortedTempoArray = [];
    //     sortedTempoArray = favorites.sort((a, b) => (a.artist > b.artist) ? 1 : -1).map((fav, index) => {
    //         return <FavListItem key={index} {...props} fav={fav} setUpdatedFavorites={setUpdatedFavorites} updatedFavorites={updatedFavorites} setRecommendedIsChecked={setRecommendedIsChecked} setMainGraphUrl={setMainGraphUrl} setRecs={setRecs} />
    //     })
    //     favSongArray = sortedTempoArray;
    // }



    return (
        <DivLimiter onLoad={window.location.reload}>
            <SideNav {...props} setSongs={setSongs} recommendedIsChecked={recommendedIsChecked} setRecommendedIsChecked={setRecommendedIsChecked} setRecs={setRecs} setMainGraphUrl={setMainGraphUrl}></SideNav>
            <SortField filterSelect={filterSelect}></SortField>
            {favSongArray}
        </DivLimiter>
    )
}

