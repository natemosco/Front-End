import React, { useState } from 'react'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import styled from "styled-components";


export default function FavListItem(props) {
    const MinorDiv = styled.div`
        margin-left:240px;
    `;
    const FavListItemDiv = styled.div`
    margin-top:20px;
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


    const [isOpen, setIsOpen] = useState(false);
    const [hover, setHover] = useState(false);
    console.log(props, "props in favlist item")


    const onHover = (event) => {
        event.preventDefault();
        setHover(!hover);
    }
    const changeIsOpen = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
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
                <span className="slot3">{props.fav.tempo}</span>
                <span className="slot4">{props.fav.duration}</span>
            </FavListItemDiv>
            <MinorDiv>
                <iframe id={props.trackid} className={(isOpen) ? "dodisplay" : "dontdisplay"} src={`https://embed.spotify.com/?uri=${props.fav.uri}`} width="400px" height="100px" />
            </MinorDiv>
        </>
    )
}
