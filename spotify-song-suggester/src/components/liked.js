import React from 'react';
import axios from 'axios';

export default function liked(event) {
    let clicked = event.target.id;
    if (favorites.clicked) {
        axios
            .put({`www.google.com/${clicked}`}, { clicked })
            .then(res => {
                console.log("axios response from PUT/ unliked function", res);
                let tempObj = { ...favorites };
                delete tempObj.clicked;
                setFavorites({ ...tempObj });
            })
        .catch(err => {
            console.log("axios errror from liked", err)
        })
}else {
    axios
        .post({`www.google.com/${clicked}`}, { clicked })
        .res(=> {
            console.log("axios response from POST liked function", res);
            setFavorites((favorites) => { ...favorites, [res]: res }
        )})
        .catch (err => {
    console.log("axios error from liked", err)
})
    }
}