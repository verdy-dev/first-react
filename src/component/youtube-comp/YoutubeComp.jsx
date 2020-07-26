import React from 'react';
import './YoutubeComp.css'

const YoutubeComp = (props) => {
    return (
        <div className="yt-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/_hopxgcz1AA/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCnRWhNbSf-IzTAybIRPNUcaWarqA" alt=""/>
    <p className="time">{props.time}</p>
            </div>
            <p className="title"> {props.title} </p>
            <p className="desc"> {props.desc}</p>
        </div>
    )    
}

YoutubeComp.defaultProps = {
    time : "00.00",
    title : "Membuat component menggunakan X",
    desc : "x hari yang lalu, x di tayangkan"    
}

export default YoutubeComp;