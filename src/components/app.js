import React from "react";
import { render } from "react-dom";
import { getQuizData } from "../utils/getData";
import { Bubble } from "./circle";
import "../../public/circle.css";
import { Sidebar } from "./sidebar.js";
import { Title } from "./title.js";


export default class App extends React.Component {

    state = {
        quizData: {},
        newQuestions: []
    }

    componentDidMount () {
        getQuizData()
        .then(data => {
            
            this.setState({quizData: data.clues});
            this.newQuestions();

        })
        
        
    }
    newQuestions = () =>{
        
             console.log(this.state.quizData)
            const apiArr = this.state.quizData.filter((ele)=>{ return ele.answer.length == 3})
             console.log(apiArr)
            for(let i = (apiArr.length)-1; i>1; i--) {// shuffles the api array
                const j = Math.floor(Math.random() * (i + 1));
                [apiArr[i], apiArr[j]] = [apiArr[j], apiArr[i]]; 
            }
            this.setState({quizData: apiArr})
            const questionArr = this.state.quizData.slice(0,30);//selects the top 30 object in the api array
            this.setState({newQuestions: questionArr})
    
    }

    render () {
        



        return (
            <div>

                <Title />


                <Sidebar
                 seconds={"8"}
                 score={ 0 }>
                </Sidebar>

                {/* <StyledSidebar /> */}
        
            {this.state.newQuestions.map((item)=>{
                return(
                <Bubble
                width={item.answer.length +1+ "em"}
                height={ item.answer.length+1+ "em"} 
                radius ={item.answer.length +"em"}
                 text ={item.answer} key={ item.id} />
            );

                })}
                <Bubble />

            </div>

        )
    }
}