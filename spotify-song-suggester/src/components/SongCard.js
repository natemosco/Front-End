import React, { useState } from 'react';
import styled from "styled-components";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

// import liked from "./liked";

const SongCardMain = styled.main`
    width:auto;
    height:100px;
    display:flex;
    margin: 10px 0;

    .FavoriteIconDiv{
        display:flex;
        justify-content:center;
        align-items:center;
        box-sizing: border-box;
        height:80px;
        width:80px;
    }
    .info{
        height:100px;
        width:400px;
        display:flex;
        justify-content:center;
        align-items:center;
        
    }
    .DeleteIconDiv{
        box-sizing: border-box;
        height:80px;
        width:60px;
    }
 
`;

export default function SongCard(props) {
    console.log(props.info, "props in song card");
    const [liked, setLiked] = useState(false);

    const addToLiked = (event) => {
        event.preventDefault();
        if (!liked) {
            axiosWithAuth()
                .post(
                    `https://spotify-song-suggester-app.herokuapp.com/songs/song`, props.info.id)

                .then(res => {
                    console.log(res, "response from liking a song")
                })
                .catch(err => {
                    console.log(err, "error from liking a song")
                })
        }
        setLiked(true);

    }
    const deleted = (event) => {
        event.preventDefault();
        setLiked(false);
        // axios
        // .delete()
        // .then(res =>{
        //     console.log(res, "response from liking a song")
        // })
        // .catch(err => {
        //     console.log(err, "error from liking a song")
        // })
    }

    if (props.info) {
        return (
            <SongCardMain>
                <div className="FavoriteIconDiv" id={props.info.id} onClick={addToLiked}>
                    <FavoriteBorderIcon className={(!liked) ? "dodisplay" : "dontdisplay"}></FavoriteBorderIcon>
                    <FavoriteIcon className={(liked) ? "dodisplay" : "dontdisplay"}></FavoriteIcon>
                </div>
                <div className="info">
                    <iframe className="iframe" src={`https://embed.spotify.com/?uri=${props.info.uri}`} width="400px" height="100px" />
                </div>
                <div id={props.info.id} className={(liked) ? "dodisplayflex DeleteIconDiv" : "dontdisplay DeleteIconDiv"} onClick={deleted}>
                    <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
                </div>
            </SongCardMain>
        )
    } else if (!props.info) {
        return (
            <div>loading page...</div>
        )
    }

}
