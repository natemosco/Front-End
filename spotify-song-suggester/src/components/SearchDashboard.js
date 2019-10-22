import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

import SongCard from "./SongCard";
import ArtistCard from "./ArtistCard";
import SideNav from "./SideNav";
// import liked from "./liked";

const DashboardDiv = styled.div`
    width:100%;
    margin-top:100px;
    display: flex;
    justify-content:space-between;
    section{
        width:45%;
        display:flex;
        justify-content:spaced-evenly;
        flex-wrap:wrap
    }
    .search-title{
        width:100%
        display:flex;
        justify-content:space-between;
        h3{
            width:40%;
        }
        p{
            width:40%;
        }
    }
`;

export default function SearchDashboard(props) {
    // let { songs, artists } = props;
    // let songsArray = [];
    // let artistsArray = [];
    // for (let i = 0; i < songs.length || i < 8; i++) {
    //     songsArray.push(<SongCard key={i} info={songs[i]} />)
    // }
    // for (let i = 0; i < artists.length || i < 8; i++) {
    //     songsArray.push(<ArtistCard key={i + 99} info={songs[i]} />)
    // }

    return (
        <DashboardDiv>
            <SideNav></SideNav>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <section className="songs-preview">
                <div className="search-title">
                    <h3>Songs</h3>
                    <Link to="/search/songs"><p>SEE ALL</p></Link>
                </div>
                {/* {songsArray} */}
                <iframe src="https://embed.spotify.com/?uri=spotify:track:4aX4Oycsk1fhHIee1zqsDe" width="400px" height="100px"></iframe>
                <iframe src="https://embed.spotify.com/?uri=spotify:track:4aX4Oycsk1fhHIee1zqsDe" width="400px" height="100px"></iframe>
                <iframe src="https://embed.spotify.com/?uri=spotify:track:4aX4Oycsk1fhHIee1zqsDe" width="400px" height="100px"></iframe>
                <iframe src="https://embed.spotify.com/?uri=spotify:track:4aX4Oycsk1fhHIee1zqsDe" width="400px" height="100px"></iframe>
                <iframe src="https://embed.spotify.com/?uri=spotify:track:4aX4Oycsk1fhHIee1zqsDe" width="400px" height="100px"></iframe>

            </section>
            <section className="artists-preview">
                <div className="search-title">
                    <h3>Artists</h3>
                    <Link to="/search/artists"> <p>SEE ALL</p></Link>
                </div>
                {/* {artistsArray} */}
                <iframe src="https://embed.spotify.com/?uri=spotify:track:4aX4Oycsk1fhHIee1zqsDe" width="400px" height="100px"></iframe>
                <iframe src="https://embed.spotify.com/?uri=spotify:track:4aX4Oycsk1fhHIee1zqsDe" width="400px" height="100px"></iframe>
                <iframe src="https://embed.spotify.com/?uri=spotify:track:4aX4Oycsk1fhHIee1zqsDe" width="400px" height="100px"></iframe>
                <iframe src="https://embed.spotify.com/?uri=spotify:track:4aX4Oycsk1fhHIee1zqsDe" width="400px" height="100px"></iframe>
                <iframe src="https://embed.spotify.com/?uri=spotify:track:4aX4Oycsk1fhHIee1zqsDe" width="400px" height="100px"></iframe>

            </section>
        </DashboardDiv>
    )
}
