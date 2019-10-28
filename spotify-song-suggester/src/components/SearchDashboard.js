import React from 'react'
import styled from "styled-components";

import SongCard from "./SongCard";
import SideNav from "./SideNav";

const DashboardDiv = styled.div`
    width:100%;
    margin-top:100px;
    display: flex;
    justify-content:flex-start;
    section{
        width:50%;
        display:flex;
        justify-content:spaced-evenly;
        flex-wrap:wrap
    }
    .search-title{
        width:100%
        display:flex;
        justify-content:space-between;
        h3{
            width:100%;
        }
      
    }
`;

export default function SearchDashboard(props) {

	let { setUpdatedFavorites, updatedFavorites, songs, setSongs, recommendedIsChecked, setRecommendedIsChecked, mainGraphUrl, setMainGraphUrl, recs, setRecs } = props;
	let songsArray = [];
	let recsArray = [];
	for (let i = 0; i < songs.length; i++) {
		songsArray.push(<SongCard key={i} info={songs[i]} setUpdatedFavorites={setUpdatedFavorites} updatedFavorites={updatedFavorites} />)
	}
	for (let i = 0; i < recs.length; i++) {
		recsArray.push(<SongCard key={i} info={recs[i]} setUpdatedFavorites={setUpdatedFavorites} updatedFavorites={updatedFavorites} />)
	}


	if (!recommendedIsChecked) {
		return (
			<DashboardDiv>
				<SideNav {...props} setSongs={props.setSongs} setMainGraphUrl={setMainGraphUrl}></SideNav>
				<section className="songs-preview">
					<div className="search-title">
						<h3>Songs</h3>
						{/* <Link to="/search/songs"><p>SEE ALL</p></Link> */}
					</div>
					{songsArray}
				</section>
				<section className="artists-preview">
					{/* <div className="search-title">
						<h3>Song Graph</h3>
						<Link to="/search/artists"> <p>SEE ALL</p></Link>
					</div>
					<h2>Graph for each clicked song pops up <br />here when we click on each song</h2> */}

				</section>
			</DashboardDiv>
		)
	}
	else if (recommendedIsChecked && recs[0]) {
		return (
			<DashboardDiv>
				<SideNav {...props} setSongs={setSongs} recommendedIsChecked={recommendedIsChecked} setRecommendedIsChecked={setRecommendedIsChecked} setRecs={setRecs} setMainGraphUrl={setMainGraphUrl}></SideNav>
				<section className="songs-preview">
					<div className="search-title">
						<h3>{`Songs related to ${recs[0].song_name} by:${recs[0].artist}`}</h3>
					</div>
					{recsArray}
				</section>
				<section className="artists-preview">
					{/* <div className="search-title">
						<h3>Song Graph</h3>
					</div>
					<h2>Graph for each clicked song pops up <br />here when we click on each song</h2>*/}
					<embed type="image/svg+xml" src={mainGraphUrl} width="600" height="600" />

				</section>
			</DashboardDiv>
		)
	} else {
		return (
			<DashboardDiv>
				<SideNav {...props} setSongs={setSongs} recommendedIsChecked={recommendedIsChecked} setRecommendedIsChecked={setRecommendedIsChecked} setRecs={setRecs} setMainGraphUrl={setMainGraphUrl}></SideNav>
				<section className="songs-preview">
					<div className="search-title">
						<h3>You Have Entered Search By Related Mode</h3>
						<h2>Please Search For A Song As Usual To Proceed</h2>
					</div>
					{/* {recsArray} */}
				</section>
				<section className="artists-preview">
					{/* <div className="search-title">
							<h3>Song Graph</h3>
						</div>
						<h2>Graph for each clicked song pops up <br />here when we click on each song</h2>*/}
					{/* <embed type="image/svg+xml" src={mainGraphUrl} width="600" height="600" /> */}

				</section>
			</DashboardDiv>
		)
	}
}
