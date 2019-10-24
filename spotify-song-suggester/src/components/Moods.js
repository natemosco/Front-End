import React from 'react'
import SideNav from "./SideNav";

export default function Moods(props) {
    let { setSongs, recommendedIsChecked, setRecommendedIsChecked, setRecs, setMainGraphUrl } = props;
    return (
        <div>
            <SideNav {...props} setSongs={setSongs} recommendedIsChecked={recommendedIsChecked} setRecommendedIsChecked={setRecommendedIsChecked} setRecs={setRecs} setMainGraphUrl={setMainGraphUrl}></SideNav>
        </div>
    )
}
