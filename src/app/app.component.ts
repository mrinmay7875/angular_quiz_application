import { Component, OnInit } from '@angular/core';
import questions from './assets/questions.json';

// ** Interfaces
interface answerOption {
  value: string;
  isCorrect: boolean;
}

interface singleQuestion {
  id: number;
  questionText: string;
  answerOptions: answerOption[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  questions: any = questions;
  questionIndexNumber: number = 0;
  currentQuestion: singleQuestion = questions[this.questionIndexNumber];
  gameEndText: string = '';
  gameEnded: boolean = false;
  showScore: boolean = false;
  score: number = 0;

  // ** Below methods checks if the Quiz has ended or not

  checkGameEndedOrNot() {
    if (this.questionIndexNumber >= this.questions.length) {
      this.gameEnded = true;
      this.gameEndText =
        'Thanks for playing! You can refresh the page to start playing again';
      this.showScore = true;
    }
  }

  // It checks if the answer is correct or not and moves to the next question
  handleClickOption(Option: answerOption) {
    if (this.questionIndexNumber <= this.questions.length) {
      if (Option.isCorrect === true) {
        this.score = this.score + 1;
      }

      this.questionIndexNumber = this.questionIndexNumber + 1;
      this.currentQuestion = this.questions[this.questionIndexNumber];
    }

    //  Checks if the end question has reached or not
    this.checkGameEndedOrNot();
  }
}
