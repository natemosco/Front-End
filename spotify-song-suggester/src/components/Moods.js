import React, { useEffect, useState } from 'react';
import SideNav from "./SideNav";
import MoodSliders from "./MoodSliders";
import styled from "styled-components";
import axios from "axios";
import Modal from "./Modal";
import data from "../data.json";

import SongCard2 from './SongCard2'

const Div = styled.div`
    width:auto;
    margin-left:240px;
    margin-top:100px;
    display: flex;
    flex-wrap: wrap;
    width:1180px;
    .sliders{
        display:flex;
        flex-direction: column;
    }
    .songs{
        margin-top: -100px;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        align-items:flex-start;
        width:1180px;
    }
`;
const StyledButton = styled.button`
    color: white;
    border-radius: 45px;
    margin-bottom:5px;
    height: 33px;
    width: 100px;
    margin: 5px 10px;
    font-size: 0.8rem;
    font-weight: 900;
    background: linear-gradient(#eae4e4, #040434);
    box-shadow: inset -1px -1px 20px 2px black;
`;

export default function Moods(props) {
    let { setSongs, recommendedIsChecked, setRecommendedIsChecked, setRecs, setMainGraphUrl } = props;
    const [songProfile, setSongProfile] = useState({})
    const [embedData, setEmbedData] = useState([]);
    const [graphUri, setGraphUri] = useState("")
    const [visible, setVisible] = useState(false);
    const [qualityName, setQualityName] = useState("");

    useEffect(() => {
        axios
            .get("https://spotify-api-helper.herokuapp.com/playlist_recs/DReaI4d55IIaiD6P9?playlist=[%271h2vCbRUWpWnYEgb2hfQbi%27,%27498ZVInMGDkmmNVpSWqHiZ%27,%273bidbhpOYeV4knp8AIu8Xn%27,%277B1QliUMZv7gSTUGAfMRRD%27,%272qYsSHsYkihWx043HVJQRV%27]")
            .then(res => {
                console.log(res, "MOOOOOds ")
                setSongProfile(res.data[1])
                setEmbedData(res.data[2])
                setGraphUri(res.data[0].graph_uri)
            })
            .catch(err => {
                console.log(err, "Bad mood")
            })
    }, [])
    const sliderSubmit = () => {
        let val = document.querySelectorAll(".makeStyles-root-153")
        // val[index in array].childNodes[1].outerText  === value of slider
        axios
            .get(`https://spotify-api-helper.herokuapp.com/playlist_mood_recs/DReaI4d55IIaiD6P9?acousticness=${val[0].childNodes[1].outerText}&danceability=${val[1].childNodes[1].outerText}&duration_ms=${val[2].childNodes[1].outerText}&energy=${val[3].childNodes[1].outerText}&instrumentalness=${val[4].childNodes[1].outerText}&key=${val[5].childNodes[1].outerText}&liveness=${val[6].childNodes[1].outerText}&loudness=${val[7].childNodes[1].outerText}&mode=${val[8].childNodes[1].outerText}&speechiness=${val[9].childNodes[1].outerText}&tempo=${val[10].childNodes[1].outerText}&time_signature=${val[11].childNodes[1].outerText}&valence=${val[12].childNodes[1].outerText}&playlist=[%271h2vCbRUWpWnYEgb2hfQbi%27,%27498ZVInMGDkmmNVpSWqHiZ%27,%273bidbhpOYeV4knp8AIu8Xn%27,%277B1QliUMZv7gSTUGAfMRRD%27,%272qYsSHsYkihWx043HVJQRV%27]`)
            .then(res => {
                console.log(res, "button Res from moods")
                setSongProfile(res.data[1])
                setEmbedData(res.data[2])
                setGraphUri(res.data[0].graph_uri)
            })
            .catch(err => {
                console.log(err, "err from moods button")
            })
    }


    let slidersArray = [];
    for (let prop in songProfile) {
        slidersArray.push(<MoodSliders visible={visible} setVisible={setVisible} setQualityName={setQualityName} songProfile={songProfile} initialValue={songProfile[prop]} name={`${prop}`} className={`${prop}`}></MoodSliders>)
    }


    return (
        <div>
            <SideNav {...props} setSongs={setSongs} recommendedIsChecked={recommendedIsChecked} setRecommendedIsChecked={setRecommendedIsChecked} setRecs={setRecs} setMainGraphUrl={setMainGraphUrl}></SideNav>
            <Div>

                <section className="sliders">
                    {slidersArray}
                    <StyledButton onClick={sliderSubmit}>Submit Slider Values</StyledButton>
                </section>
                <section id="GraphWhiteSpace" className="graph">
                    <embed type="image/svg+xml" src={graphUri} width="700" height="700" />
                </section>
                <section className="songs">
                    {embedData.map((song, index) => <SongCard2 className="SongCard2" key={index} info={song}></SongCard2>)}
                </section>
            </Div>
            <Modal className={(visible) ? "dodisplayflex" : "dontdisplay"} setVisible={setVisible} header={data.sliders[`header_${qualityName}`]} body={data.sliders[`body_${qualityName}`]}></Modal>
        </div>
    )
}
