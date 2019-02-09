import React from "react";



export const Bubble = (props) => {

    
    return(
    <div className="circle_container">

    <svg width="6.5em" height="6.5em">
        <circle cx="50" cy="50" r={props.radius} 
         opacity={props.opacity}
         fill={props.fill}></circle>
        <text x="50%" y="50%" textAnchor="middle">{props.text}</text>
    </svg>
    
    </div>
    )
}

Bubble.defaultProps = {
    radius: "3em",
    opacity: 0.3,
    fill:'#FBCFD0',
    text: 'flo'
}