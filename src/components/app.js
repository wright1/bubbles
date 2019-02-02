import React from "react";
import { render } from "react-dom";
import { getQuizData } from "../utils/getData";

export default class App extends React.Component {

    state = {
        quizData: {},
        answerData: []
    }

    componentDidMount () {
        getQuizData()
        .then(data => {
            data.map(() =>{})

        })
    }

    render () {

        return (
            <div>Hello</div>
        )
    }
}