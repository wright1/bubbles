import React from "react";
import { render } from "react-dom";
import { getQuizData } from "../utils/getData";
import { Bubble } from "./circle";
import "../../public/circle.css"


export default class App extends React.Component {

    state = {
        quizData: {},
        answerData: []
    }

    componentDidMount () {
        getQuizData()
        .then(data => {

            this.setState({quizData: data.clues});

        })
        
    }

    render () {
        



        return (
            <div>
        
                <Bubble />

            </div>

        )
    }
}