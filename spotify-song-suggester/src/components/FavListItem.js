import React, { useState } from 'react'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import styled from "styled-components";

const FavListItemDiv = styled.div`
    margin-top:40px;
    width:100%
    height:40px;
    diplay:flex;
    border-bottom: solid 1px black;
    justify-content: flex-start;
    div{
        margin-left:20px;
        width:40px;
        height:40px;
    }
    .slot1{
        width:20%;
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
export default function FavListItem(props) {
    const [isOpen, setIsOpen] = useState(false)

    const changeIsOpen = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    }
    return (
        <>
            <FavListItemDiv>
                <div onClick={changeIsOpen}>
                    <PlayCircleOutlineIcon />
                </div>
                <span className="slot1">{props.title}</span>
                <span className="slot2">{props.artist}</span>
                <span className="slot3">{props.tempo}</span>
                <span className="slot4">{props.duration}</span>
            </FavListItemDiv>
            <iframe id={props.trackid} className={(isOpen) ? "dodisplay" : "dontdisplay"} src={`https://embed.spotify.com/?uri=spotify:track:${props.trackid}`} width="400px" height="100px"></iframe>
        </>
    )
}
