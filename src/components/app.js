import React from "react";
import { render } from "react-dom";
import { getQuizData } from "../utils/getData";

export default class App extends React.Component {

    state = {
        data: {}
    }

    componentDidMount () {
        getQuizData().then(data => console.log (data))
    }

    render () {

        return (
            <div>Hello</div>
        )
    }
}