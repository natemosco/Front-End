import React from 'react'
import SideNav from "./SideNav";

export default function Home(props) {
    return (
        <div>
            <SideNav {...props} setSongs={props.setSongs}></SideNav>
            <br /><br /><br />
            <p>hello1</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <h1>Data Science graph / visualizer</h1>
        </div>
    )
}
