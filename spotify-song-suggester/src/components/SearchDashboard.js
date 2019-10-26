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
        width:40%;
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
      
    }
`;

export default function SearchDashboard(props) {

    let { songs, setSongs, recommendedIsChecked, setRecommendedIsChecked, mainGraphUrl, setMainGraphUrl, recs, setRecs } = props;
    let songsArray = [];
    let recsArray = [];
    for (let i = 0; i < songs.length; i++) {
        songsArray.push(<SongCard key={i} info={songs[i]} />)
    }
    for (let i = 0; i < recs.length; i++) {
        recsArray.push(<SongCard key={i} info={recs[i]} />)
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
                    <div className="search-title">
                        <h3>Song Graph</h3>
                        {/* <Link to="/search/artists"> <p>SEE ALL</p></Link> */}
                    </div>
                    <h2>Graph for each clicked song pops up <br />here when we click on each song</h2>

                </section>
            </DashboardDiv>
        )
    }
    else if (recommendedIsChecked) {
        return (
            <DashboardDiv>
                <SideNav {...props} setSongs={setSongs} recommendedIsChecked={recommendedIsChecked} setRecommendedIsChecked={setRecommendedIsChecked} setRecs={setRecs} setMainGraphUrl={setMainGraphUrl}></SideNav>
                <section className="songs-preview">
                    <div className="search-title">
                        <h3>Songs</h3>
                    </div>
                    {recsArray}
                </section>
                <section className="artists-preview">
                    <div className="search-title">
                        <h3>Song Graph</h3>
                    </div>
                    <h2>Graph for each clicked song pops up <br />here when we click on each song</h2>
                    <embed type="image/svg+xml" src={mainGraphUrl} width="500" height="500" />

                </section>
            </DashboardDiv>
        )
    }
}
