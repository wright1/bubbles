import React from "reaact";


export const Sidebar = (props) =>{

    return(

        <div>
            <p>START</p>
            <p>{props.seconds}</p>
            <p>TIME</p>
            <p>{props.score}</p>
            <p>SCORE</p>
        </div>
    )
}