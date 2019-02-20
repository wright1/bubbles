import React from "react";



export const Bubble = (props) => {

    
    return(
    <div className="circle_container">

    <svg width="6.5em" height="6.5em">
        <circle cx="50" cy="50" r="3em" 
         opacity={props.opacity}
         fill={props.fill}
         onClick={ () => props.onClick(props.text)} ></circle>
        <text x="50%" y="50%" textAnchor="middle">{props.text}</text>
    </svg>
    
     </div>
    )
}

Bubble.defaultProps = {
    height: "6.5em",
    width: "6.5em",
    radius: "3em",
    opacity: 0.3,
    fill:'#FBCFD0',
    text: 'flo'
}