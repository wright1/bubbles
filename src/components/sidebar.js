import React from "react";
import { StyledSidebar } from "../styling/styles.js";


export const Sidebar = (props) =>{

    return(

        < StyledSidebar>
           <div> START</div>
            <div>{props.seconds}</div>
            
            <div>{props.score}</div>
            
        </StyledSidebar>
    )
}