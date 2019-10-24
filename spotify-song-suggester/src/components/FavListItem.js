import React, { useState } from 'react'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import styled from "styled-components";
import axios from 'axios';

const GraphDiv = styled.div`
    margin-left:240px;
    min-height: 120px;
    `;
const MinorDiv = styled.div`
    margin-left:240px;
    `;
const FavListItemDiv = styled.div`
    margin-top:5px;
    margin-bottom:5px;
    margin-left: 240px;
    width:100%
    height:40px;
    display:flex;
    border-bottom: solid 1px black;
    justify-content: flex-start;
    div{
    height:40px;
    width:40px;
    margin-left:20px;
    .svg{
        height:100%;
        width:100%;
    }
    img{
        height:100%;
        width:100%;
    }
    }
    .slot1{
    width:25%;
    text-align:left;
    }
    .slot2{
    margin-left:10px;

    width:12%;
    text-align:left;
    }
    .slot3{
    margin-left:10px;
    width:10%;
    text-align:left;
    }
    .slot4{
    margin-left:10px;
    width:10%;
    text-align:left;
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
function Button(props) {
    return (
        <StyledButton >{props.name}</StyledButton>
    )
}

export default function FavListItem(props) {
    let { setMainGraphUrl } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [hover, setHover] = useState(false);
    const [buttonOpen, setButtonOpen] = useState(false);
    const [graphID, setGraphID] = useState("")

    console.log(props, "props in favlist item")


    const onHover = (event) => {
        event.preventDefault();
        setHover(!hover);
    }
    const changeIsOpen = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    }
    const showSimilarSongs = (event) => {
        props.setRecommendedIsChecked(true);
        let eventData2 = event.currentTarget;
        setButtonOpen(!buttonOpen)
        axios
            .get(`https://spotify-api-helper.herokuapp.com/graph/DReaI4d55IIaiD6P9/${eventData2.id}`)
            .then(res => {
                console.log(res, "axios resoponse for setting 5-way graph ")
                setMainGraphUrl(res.data.graph_uri)
                props.hisory.push("/search")
            })
            .catch(err => {
                console.log(err, "axios ERROR for setting 5-way graph  ")
            })
    }

    const showDetails = (event) => {
        event.preventDefault();
        let eventData = event.currentTarget;

        if (!buttonOpen) {
            setButtonOpen(!buttonOpen);
            axios
                .get(`https://spotify-api-helper.herokuapp.com/single_song_graph/DReaI4d55IIaiD6P9/${eventData.id}`)
                .then(res => {
                    console.log(res, "axios resoponse for Show Details button ")
                    setGraphID(res.data.graph_uri)
                })
                .catch(err => {
                    console.log(err, "axios err for Show Details button ")
                })
        } else if (buttonOpen) {
            setButtonOpen(!buttonOpen)
        }
    }


    return (
        <>
            <FavListItemDiv onMouseEnter={onHover} onMouseLeave={onHover}>

                <div onClick={changeIsOpen}>
                    <PlayCircleOutlineIcon className={(hover) ? "svg dodisplay" : "svg dontdisplay"} />
                    <img src={props.fav.small_image} alt={`album cover of ${props.fav.artist}`} className={(!hover) ? "dodisplay" : "dontdisplay"} />
                </div>
                <span className="slot1">{props.fav.song_name}</span>
                <span className="slot2">{props.fav.artist}</span>
                <span className="slot3" id={props.fav.id} onClick={showSimilarSongs}><Button name={"Similar Songs"} /></span>
                <span className="slot4" id={props.fav.id} onClick={showDetails}><Button name={"Track Details"} /></span>

            </FavListItemDiv>
            <MinorDiv>
                <iframe id={props.trackid} className={(isOpen) ? "dodisplay" : "dontdisplay"} src={`https://embed.spotify.com/?uri=${props.fav.uri}`} width="400px" height="100px" />
            </MinorDiv>
            <GraphDiv className={(buttonOpen && graphID) ? "dodisplay" : "dontdisplay"}>
                <embed type="image/svg+xml" src={graphID} width="600" height="600" />
            </GraphDiv>
        </>
    )
}

