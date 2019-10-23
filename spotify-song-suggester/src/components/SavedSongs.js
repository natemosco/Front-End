<<<<<<< HEAD
// import React, { useState, useEffect } from 'react';
// import SideNav from "./SideNav";
// import SortField from "./SortField";


// export default function SavedSongs(props) {
// 	const [sortFields, setSortFields] = useState({
// 		title: true,
// 		artist: false,
// 		duration: false,
// 		tempo: false
// 	})
=======
import React, { useState, useEffect } from 'react';
import SideNav from "./SideNav";
import SortField from "./SortField";
import FavListItem from "./FavListItem";


export default function SavedSongs(props) {
    let { favorites } = props;
    const [sortFields, setSortFields] = useState({
        title: true,
        artist: false,
        duration: false,
        tempo: false
    })
>>>>>>> cf764dba14fb6c541102e880b7abec9b6d8188e3

// 	const filterSelect = (event) => {
// 		event.preventDefault();
// 		setSortFields({
// 			title: false,
// 			artist: false,
// 			duration: false,
// 			tempo: false,
// 			[event.target.id]: true
// 		})
// 	}


<<<<<<< HEAD
// 	let favSongArray = [];


// 	useEffect(() => {
// 		if (sortFields.title) {
// 			let sortedTitleArray = [];
// 			sortedTitleArray = favorites.sort((a, b) => (a.title > b.title) ? 1 : -1).map((fav, index) => {
// 				<FavListItem key={index} fav={fav} />
// 			})
// 			favSongArray = sortedTitleArray;
// 		}
// 		else if (sortFields.artist) {
// 			let sortedArtistArray = [];
// 			sortedArtistArray = favorites.sort((a, b) => (a.artist > b.artist) ? 1 : -1).map((fav, index) => {
// 				<FavListItem key={index} fav={fav} />
// 			})
// 			favSongArray = sortedArtistArray;
// 		}
// 		else if (sortFields.duration) {
// 			let sortedDurationArray = [];
// 			sortedDurationArray = favorites.sort((a, b) => (a.artist > b.artist) ? 1 : -1).map((fav, index) => {
// 				<FavListItem key={index} fav={fav} />
// 			})
// 			favSongArray = sortedDurationArray;
// 		}
// 		else if (sortFields.tempo) {
// 			let sortedTempoArray = [];
// 			sortedTempoArray = favorites.sort((a, b) => (a.artist > b.artist) ? 1 : -1).map((fav, index) => {
// 				<FavListItem key={index} fav={fav} />
// 			})
// 			favSongArray = sortedTempoArray;
// 		}
// 	}, [sortFields])
=======
    let favSongArray = [];
    // favSongArray = favorites.map((fav, index) => {
    //     return <FavListItem key={index} fav={fav} />
    // })

    // useEffect(() => {
    if (sortFields.title) {
        let sortedTitleArray = [];
        sortedTitleArray = favorites.sort((a, b) => (a.song_name > b.song_name) ? 1 : -1).map((fav, index) => {
            return <FavListItem key={index} fav={fav} />
        })
        favSongArray = sortedTitleArray;
    }
    else if (sortFields.artist) {
        let sortedArtistArray = [];
        sortedArtistArray = favorites.sort((a, b) => (a.artist > b.artist) ? 1 : -1).map((fav, index) => {
            return <FavListItem key={index} fav={fav} />
        })
        favSongArray = sortedArtistArray;
    }
    else if (sortFields.duration) {
        let sortedDurationArray = [];
        sortedDurationArray = favorites.sort((a, b) => (a.artist > b.artist) ? 1 : -1).map((fav, index) => {
            return <FavListItem key={index} fav={fav} />
        })
        favSongArray = sortedDurationArray;
    }
    else if (sortFields.tempo) {
        let sortedTempoArray = [];
        sortedTempoArray = favorites.sort((a, b) => (a.artist > b.artist) ? 1 : -1).map((fav, index) => {
            return <FavListItem key={index} fav={fav} />
        })
        favSongArray = sortedTempoArray;
    }
    // }, [sortFields])
>>>>>>> cf764dba14fb6c541102e880b7abec9b6d8188e3

// 	return (
// 		<div>
// 			<SideNav></SideNav>
// 			<SortField filterSelect={filterSelect}></SortField>
// 			{favSongArray}
// 		</div>
// 	)
// }

