import React from 'react';
import axios from 'axios';

export default function liked(props) {
    let clicked = event.target.id;
    if (favorites.clicked) {
        axios
            .post(`https:spotify-song-suggester-app.com/${clicked}`, clicked)
            .then(res => {
                console.log("axios response from Delete/ unliked function", res);


            })
            .catch(err => {
                console.log("axios errror from liked", err)
            })
    } else {
        axios
            .post(`https:spotify-song-suggester-app.com/${clicked}`, clicked)
            .then(res => {
                console.log("axios response from POST liked function", res);

            })
            .catch(err => {
                console.log("axios error from liked", err)
            })
    }
}

