import React from "react";
import { StyledSidebar } from "../styling/styles.js";


export const Sidebar = (props) =>{

    return(

        < StyledSidebar>
            <p>START</p>
            <p>{props.seconds}</p>
            <p>TIME</p>
            <p>{props.score}</p>
            <p>SCORE</p>
        </StyledSidebar>
    )
}