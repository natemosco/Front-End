import React, { useState, useEffect } from 'react'
import SideNav from "./SideNav";


export default function SavedSongs(props) {
	const [sortFields, setSortFields] = useState({
		title: true,
		artist: false,
		duration: false,
		tempo: false
	})

	const filterSelect = (event) => {
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
			favSongArray = favorites.map((fav) => {
				<FavListItem fav={fav}></FavListItem>
			})
		}
		else if (sortFields.artist) {
			favSongArray = favorites.map((fav) => {
				<FavListItem fav={fav}></FavListItem>
			})
		}
		else if (sortFields.duration) {

		}
		else if (sortFields.tempo) {

		}
	}, [sortFields])

	return (
		<div>
			<SideNav></SideNav>

			<SortField></SortField>

			{favSongArray}

		</div>
	)
}

//SortField

