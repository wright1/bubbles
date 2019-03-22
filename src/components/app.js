import React from "react";
import { render } from "react-dom";
import { getQuizData } from "../utils/getData";
import { shuffle } from "../utils/shuffle";
import Bubble from "./circle";
import "../../public/circle.css";
import { Sidebar } from "./sidebar.js";
import { Title } from "./title.js";
import { Question } from "./question.js";
import {
  Container,
  BubbleContainer,
  QuizHead,
  Main
} from "../styling/styles.js";

export default class App extends React.Component {
  state = {
    quizData: {},
    newQuestions: [],
    score: 0,
    seconds: 90
  };
  checkAnswer = the_answer => {
    console.log(the_answer);
    let answer = the_answer;
    if (the_answer == this.state.newQuestions[0].answer) {
      this.refs[answer].changeVisability(); // this updates the state within the bubble component causing it not to re-render
      this.setState(prevState => {
        return { newQuestions: prevState.newQuestions.slice(1) };
      });
      console.log(
        this.refs,
        "this is the question array",
        this.state.newQuestions
      );
    } else {
      console.log("try again");
      this.refs[answer].changeColour();
    }
  };

  componentDidMount() {
    getQuizData().then(data => {
      this.setState({ quizData: data.clues });
      this.selectingNewQuestions();
      console.log(this.state.newQuestions);
    });
  }
  selectingNewQuestions = () => {
    //array filtered- only answers that are 3 characters long remain
    const apiArr = this.state.quizData.filter(ele => {
      return ele.answer.length == 3;
    });

    shuffle(apiArr);

    this.setState({ quizData: apiArr });
    const questionArr = this.state.quizData.slice(0, 30); //selects the top 30 object in the api array
    this.setState({ newQuestions: questionArr });
    console.log(this.state.newQuestions[0].question);
  };

  render() {
    return (
      <Container>
        <Sidebar seconds={this.state.seconds} score={this.state.score} />

        <Main>
          <QuizHead>
            <Title />
            <Question
              question={
                this.state.newQuestions.length > 0
                  ? this.state.newQuestions[0].question
                  : "loading!!!!"
              }
            />
          </QuizHead>

          <BubbleContainer>
            {this.state.newQuestions.map(item => {
              return (
                <Bubble
                  text={item.answer}
                  ref={item.answer}
                  key={item.id}
                  onClick={this.checkAnswer}
                  id={item.id}
                />
              );
            })}
          </BubbleContainer>
        </Main>
      </Container>
    );
  }
}
