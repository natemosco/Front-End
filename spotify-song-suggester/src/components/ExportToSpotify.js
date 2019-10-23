import React from 'react'
import SideNav from "./SideNav";
export default function ExportToSpotify(props) {
    return (
        <div>
            <SideNav setSongs={props.setSongs} recommendedIsChecked={props.recommendedIsChecked} setRecs={props.setRecs}></SideNav>
        </div>
    )
}
