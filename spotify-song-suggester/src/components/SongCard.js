import React from 'react';
import styled from "styled-components";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import liked from "./liked";

const SongCardMain = styled.main`
    width:320px;
    height:80px;
    .FavoriteBorderIcon{
        box-sizing: border-box;
        height:80px;
        width:80px;
        padding: 5%;
    }
    .random-background{
        background: url("https://source.unsplash.com/random") 100%/cover no-repeat;
        height:80px;
        width:80px;
    }
    .info{
        height:80px;
        width:160px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-wrap:wrap;
        .iframe{
            width:60%
        }
    }
`;

export default function SongCard(props) {



    return (

        <SongCardMain>
            <div className="FavoriteBorderIcon">
                <FavoriteBorderIcon className="heart-icon"></FavoriteBorderIcon>
            </div>
            <div className="random-background">
            </div>
            <div className="info">
                <iframe className="iframe" src={`https://embed.spotify.com/?uri=spotify:track:${props.id}`} width="400px" height="100px"></iframe>
            </div>
        </SongCardMain>
    )
}
