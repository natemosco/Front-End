import React from 'react'
import SideNav from "./SideNav";

export default function SearchHistory(props) {
    return (
        <div>
            <SideNav {...props} setSongs={props.setSongs}></SideNav>

        </div>
    )
}
