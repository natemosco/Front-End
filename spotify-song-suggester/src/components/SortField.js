import React from 'react'
import styled from "styled-components";

const SortFieldDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
export default function SortField(props) {
    return (
        <SortFieldDiv>
            <span id="title" onClick={props.filterSelect}>Title</span>
            <span id="artist" onClick={props.filterSelect}>Artist</span>
            <span id="duration" onClick={props.filterSelect}>Duration</span>
            <span id="tempo" onClick={props.filterSelect}>Tempo</span>
        </SortFieldDiv>
    )
}


