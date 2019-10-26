import React, { useState, useEffect } from 'react';
import SideNav from "./SideNav";
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from "axios";
import SongCard from './SongCard';
import Modal from "./Modal";
import HelpIcon from '@material-ui/icons/Help';
import data from "../data.json";

export default function Home(props) {
	let { setSongs, favoritesIdOnly, recommendedIsChecked, setRecommendedIsChecked, setRecs, setMainGraphUrl } = props

	const [topFive, setTopFive] = useState([]);
	const [graphUri, setGraphUri] = useState("")
	const [songCharacteristics, setSongCharacteristics] = useState({})
	const [visible, setVisible] = useState(false);

	//song characteristics function
	// takes the values and sorts for the values that are High? Low? spits them out
	//  to display a brief 1-3 liner of: your average song currently displays en emphasis on ________ tempo? acousticness?
	// 

	useEffect(() => {

		axios
			.get(`https://spotify-api-helper.herokuapp.com/playlist_mood_recs/DReaI4d55IIaiD6P9?playlist=${favoritesIdOnly}`)
			.then(res => {

				setTopFive(res.data[2]);
				setGraphUri(res.data[0]);
				setSongCharacteristics(res.data[1]);
			})
			.catch(err => {
				console.log(err, "err for myCurrentTopFiveArray on HomePage")
			})
	}, [favoritesIdOnly])

	const showHideModal = () => {
		setVisible(!visible);
	}

	if (!topFive) {
		return (
			<>
				<SideNav {...props} setSongs={setSongs} recommendedIsChecked={recommendedIsChecked} setRecommendedIsChecked={setRecommendedIsChecked} setRecs={setRecs} setMainGraphUrl={setMainGraphUrl}></SideNav>
				<br /><br /><br /><br />
				<div>loading...</div>
			</>
		)
	} else {
		return (
			<>
				<div>
					<SideNav {...props} setSongs={setSongs} recommendedIsChecked={recommendedIsChecked} setRecommendedIsChecked={setRecommendedIsChecked} setRecs={setRecs} setMainGraphUrl={setMainGraphUrl}></SideNav>
					<main>
						<section className="left">
							<h2>Your Current Top 5 Spotify Song Suggestions</h2>
							<span className="question-mark" onClick={showHideModal}>
								<HelpIcon style={{ height: "24px" }} ></HelpIcon>

							</span>
							{topFive.map((song, index) => <SongCard key={index} info={song} />)}
						</section>
						<section className="right">

							<embed type="image/svg+xml" src={graphUri} width="600" height="600" />
						</section>
					</main>
				</div>
				<Modal className={(visible) ? "dodisplayflex" : "dontdisplay"} setVisible={setVisible} header={data.home.header_songs} body={data.home.body_songs}></Modal>
			</>
		)
	}
}
