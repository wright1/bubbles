import React from "react";
import { StyledQuestion } from "../styling/styles.js"

export const Question = (props) =>{

    return(
        <StyledQuestion>
            <h3>{ props.question}</h3>
        </StyledQuestion>
    )
}
