import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from "axios";
import HelpIcon from '@material-ui/icons/Help';
import styled from "styled-components";


import SideNav from "./SideNav";
import SongCard from './SongCard';
import Modal from "./Modal";
import data from "../data.json";
import Loading from "./Loading"


const StyledMain = styled.main`
    margin: 100px 0 0 240px;
    display flex;
    width:1180;
    .left{
        display:flex;
        flex-wrap:wrap;
        width:50%; 
        span{
            margin: 10% 0 0 1%;
        }
        h2{
            width: 70%;
            margin-left: 5%;
        }
    }
    .right{
        width:50%;
        div{
            margin-top: -100px;
        }

    }
`;

export default function Home(props) {
    let { setUpdatedFavorites, updatedFavorites, setSongs, favoritesIdOnly, recommendedIsChecked, setRecommendedIsChecked, setRecs, setMainGraphUrl } = props

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
            // .get(`https://spotify-api-helper.herokuapp.com/playlist_mood_recs/DReaI4d55IIaiD6P9?playlist=${favoritesIdOnly}`)
            .get(`https://spotify-api-helper.herokuapp.com/playlist_recs/DReaI4d55IIaiD6P9?playlist=${favoritesIdOnly}`)
            .then(res => {
                console.log("Home Page response", res);
                let modifiedObjectShape3 = res.data[2].map(objectTBR => {
                    objectTBR.trackid = objectTBR.id
                    objectTBR.imagesongid = 0
                    delete objectTBR.id
                    return objectTBR
                })
                setTopFive(modifiedObjectShape3);
                setGraphUri(res.data[0].graph_uri);
                setSongCharacteristics(res.data[1]);
            })
            .catch(err => {
                console.log(err, "err for myCurrentTopFiveArray on HomePage")
            })
    }, [])

    if (topFive.length < 1) {
        return (
            <>
                <SideNav {...props} setSongs={setSongs} recommendedIsChecked={recommendedIsChecked} setRecommendedIsChecked={setRecommendedIsChecked} setRecs={setRecs} setMainGraphUrl={setMainGraphUrl}></SideNav>
                <br /><br /><br /><br />
                <div><Loading></Loading>Loading your most current profile changes...</div>
            </>
        )
    } else {
        const showHideModal = () => {
            setVisible(!visible);
        }
        const helpSpan = document.querySelector(".question-mark")
        const hoverOn = (event) => {
            helpSpan.addEventListener("mouseenter", () => {
                helpSpan.style.transform = "scale(1.2)"
                helpSpan.style.transition = "all 0.3s"
            })
        }
        const hoverOff = (event) => {
            helpSpan.addEventListener("mouseleave", () => {
                helpSpan.style.transform = "scale(1)";
                helpSpan.style.transition = "all 0.3"
            })
        }

        return (
            <>
                <div>
                    <SideNav {...props} setSongs={setSongs} recommendedIsChecked={recommendedIsChecked} setRecommendedIsChecked={setRecommendedIsChecked} setRecs={setRecs} setMainGraphUrl={setMainGraphUrl}></SideNav>
                    <StyledMain>
                        <section className="left">
                            <span className="question-mark" onClick={showHideModal} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                                <HelpIcon style={{ height: "24px" }} ></HelpIcon>

                            </span>
                            <h2>Your Current Top 5 Spotify Song Suggestions</h2>
                            {topFive.map((song, index) => <SongCard setUpdatedFavorites={setUpdatedFavorites} updatedFavorites={updatedFavorites} key={index} info={song} />)}
                        </section>
                        <section className="right">

                            <div><embed type="image/svg+xml" src={graphUri} width="600" height="600" /></div>
                        </section>
                    </StyledMain>
                </div>
                <Modal className={(visible) ? "dodisplayflex" : "dontdisplay"} setVisible={setVisible} header={data.home.header_songs} body={data.home.body_songs}></Modal>
            </>
        )
    }
}

