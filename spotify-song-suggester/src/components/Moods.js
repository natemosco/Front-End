import React, { useEffect, useState } from 'react';
import SideNav from "./SideNav";
import MoodSliders from "./MoodSliders";
import styled from "styled-components";
import axios from "axios";

const Div = styled.div`
    margin-left:240px;
    margin-top:100px;
`;

export default function Moods(props) {
    let { setSongs, recommendedIsChecked, setRecommendedIsChecked, setRecs, setMainGraphUrl } = props;
    const [songProfile, setSongProfile] = useState({})
    useEffect(() => {
        axios
            .get("https://spotify-api-helper.herokuapp.com/playlist_recs/DReaI4d55IIaiD6P9?playlist=[%271h2vCbRUWpWnYEgb2hfQbi%27,%27498ZVInMGDkmmNVpSWqHiZ%27,%273bidbhpOYeV4knp8AIu8Xn%27,%277B1QliUMZv7gSTUGAfMRRD%27,%272qYsSHsYkihWx043HVJQRV%27]")
            .then(res => {
                console.log(res, "MOOOOOds ")
                setSongProfile(res.data[1])
            })
            .catch(err => {
                console.log(err, "Bad mood")
            })
    }, [])
    console.log(typeof songProfile.acousticness, "songProfile.acousticness")
    let slidersArray = [];
    for (let prop in songProfile) {
        slidersArray.push(<MoodSliders songProfile={songProfile} initialValue={songProfile[prop]} name={`${prop}`} className={`${prop}`}></MoodSliders>)
    }

    return (
        <div>
            <SideNav {...props} setSongs={setSongs} recommendedIsChecked={recommendedIsChecked} setRecommendedIsChecked={setRecommendedIsChecked} setRecs={setRecs} setMainGraphUrl={setMainGraphUrl}></SideNav>
            <Div>
                {slidersArray}
            </Div>
        </div>
    )
}
