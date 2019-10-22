import React from 'react'
import styled from "styled-components";


const ArtistCardMain = styled.main`
    width:320px;
    height:80px;
    .random-background{
        background: url("https://source.unsplash.com/random") 100%/cover no-repeat;
        height:80px;
        width:80px;
    }
    .info{
        height:80px;
        width:240px;
        display:flex;
        justify-content:center;
        align-items:center
        h2{
            width:60%;
        }
        
    }
`;
export default function ArtistCard(props) {
    return (

        <ArtistCardMain>
            <div className="random-background">
            </div>
            <div className="info">
                <h2>{props.artist}</h2>
            </div>
        </ArtistCardMain>
    )
}