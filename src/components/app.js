import React from "react";
import { render } from "react-dom";
import { getQuizData } from "../utils/getData";
import { Bubble } from "./circle";
import "../../public/circle.css"


export default class App extends React.Component {

    state = {
        quizData: {},
        newQuestions: []
    }

    componentDidMount () {
        getQuizData()
        .then(data => {
            
            this.setState({quizData: data.clues});
            this.getQuizQuestions();

        })
        
        
    }
    newQuestions = () =>{
        

            const apiArr = this.state.quizData; // shuffles the api array
            for(let i = (apiArr.length)-1; i>1; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [apiArr[i], apiArr[j]] = [apiArr[j], apiArr[i]]; 
            }
            this.setState({quizData: apiArr})
            const questionArr = this.state.quizData.slice(0,31);//selects the top 30 object in the api array
            this.setState({newQuestions: questionArr})
            console.log(this.state.newQuestions)
    
    }

    render () {
        



        return (
            <div>
        
                <Bubble />

            </div>

        )
    }
}