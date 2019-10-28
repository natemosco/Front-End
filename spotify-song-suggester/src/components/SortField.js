import React from 'react'
import styled from "styled-components";

const SortFieldDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 240px;
    margin-top: 95px;
    font-size:18px;
    font-weight:800;
    #title{
        flex-grow:0.1;
    }
    #artist{
        flex-grow:0.6;
    }
`;
export default function SortField(props) {
    console.log("props", props)
    console.dir("props2", props)
    return (
        <SortFieldDiv>
            <span>Sort by:</span>
            <span id="title" onClick={props.filterSelect}>Title</span>
            <span id="artist" onClick={props.filterSelect}>Artist</span>
            {/* <span id="duration" onClick={props.filterSelect}>Duration</span>
            <span id="tempo" onClick={props.filterSelect}>Tempo</span> */}
        </SortFieldDiv>
    )
}


