import React from 'react'
import styled from "styled-components";

const SortFieldDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-left: 240px;
    margin-top: 100px;
`;
export default function SortField(props) {
    console.log("props", props)
    console.dir("props2", props)
    return (
        <SortFieldDiv>
            <span id="title" onClick={props.filterSelect}>Title</span>
            <span id="artist" onClick={props.filterSelect}>Artist</span>
            {/* <span id="duration" onClick={props.filterSelect}>Duration</span>
            <span id="tempo" onClick={props.filterSelect}>Tempo</span> */}
        </SortFieldDiv>
    )
}


