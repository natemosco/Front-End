import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import styled from "styled-components";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import axios from "axios"

const StyledDiv = styled.div`
    width: 250px;
    height:40px;
    border-radius: 45px;
    background-color: white;
    display:flex;
    align-items:center;
    .SearchIcon{
        height:80%;
    }
    input{
        width:60%;
    }
    .HighlightOffIcon{
        height:80%;
    }
`;

export default function SearchBar(props) {
    const { setSongs, setArtists, data } = props

    const submit = (event) => {
        event.preventDefault();
        let value = event.target.value.toLowerCase();
        axios
            .get()
            .then(res => {
                console.log("axios from searchbar", res)
                props.history.push("/search")
                document.querySelector("#search").value = "";
            })
            .catch(err => {
                console.log("axios error searchbar", err)
            })

    }

    return (
        <StyledDiv>
            <SearchIcon className="SearchIcon"></SearchIcon>
            <input type="text" name="search" id="search" placeholder="Search" autofill="on" />
            <CheckCircleOutlineIcon className={CheckCircleOutlineIcon} onClick={submit}></CheckCircleOutlineIcon>
        </StyledDiv>
    )
}