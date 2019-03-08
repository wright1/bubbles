import React from "react";
import { render } from "react-dom";
import { getQuizData } from "../utils/getData";
import { Bubble } from "./circle";
import "../../public/circle.css";
import { Sidebar } from "./sidebar.js";
import { Title } from "./title.js";
import { Question } from "./question.js"
import { Container, BubbleContainer, QuizHead, Main } from "../styling/styles.js"


export default class App extends React.Component {

    state = {
        quizData: {},
        newQuestions: [],
    }
    checkAnswer = (the_answer) =>{
        console.log(the_answer)
        the_answer == this.state.newQuestions[0].answer ? console.log("you're right") : console.log("try again");
   
    }

    componentDidMount () {
        getQuizData()
        .then(data => {
            
            this.setState({quizData: data.clues});
            this.newQuestions();
            console.log(this.state.newQuestions)

        })
        
        
    }
    newQuestions = () =>{
        
            //array filtered- only answers that are 3 characters long remain
            const apiArr = this.state.quizData.filter((ele)=>{ return ele.answer.length == 3})
             console.log(apiArr)
            for(let i = (apiArr.length)-1; i>1; i--) {// shuffles the api array
                const j = Math.floor(Math.random() * (i + 1));
                [apiArr[i], apiArr[j]] = [apiArr[j], apiArr[i]]; 
            }
            this.setState({quizData: apiArr})
            const questionArr = this.state.quizData.slice(0,30);//selects the top 30 object in the api array
            this.setState({newQuestions: questionArr})
            console.log(this.state.newQuestions[0].question)
            
    
    }

    render () {
        
    


        return (
            <Container>

                <Sidebar
                 seconds={"8"}
                 score={ 0 }>
                </Sidebar>

            <Main>

                <QuizHead>
                    <Title />
                    <Question question={ this.state.newQuestions.length > 0 ? this.state.newQuestions[0].question : "loading!!!!"} />
                </QuizHead>

                <BubbleContainer>
                 {this.state.newQuestions.map((item)=>{
                 return(
                 <Bubble               
                 text ={item.answer} key={ item.id}
                 onClick ={this.checkAnswer} />
            );
                })}
                </BubbleContainer>
                
                
            </Main>


                
                
            

            </Container>

        )
    }
}