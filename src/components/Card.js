import React from "react";

// let defaultProps = {
//     name:"My Fault" ,
//     src:"https://resizing.flixster.com/yWlJN4Z-Wmx3NUsxn3cM3NJrw10:/300x300/v2/https://flxt.tmsimg.com/assets/p24531823_v_v13_ac.jpg",
//     liked:"92% ❤"
// }

const Card = (props) => {
    return (
        <div className="card">
        <p>{props.name}</p>
        <img src={props.src} alt="" />
        <p className="liked">{props.liked}</p>
        <p>{props.date}</p>
        </div>
    )
}

export default Card;