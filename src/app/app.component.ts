import { Component } from '@angular/core';
import * as questions  from '../assets/questions.json';
//import  questions  from '../assets/questions';
import 'rxjs/add/operator/filter';
import { Question } from './question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quiz';

 start: boolean = false;
 //currentQuestion = questions[0];
 currentQuestion : any;
 questionsCounter: number = 0;
 numberOfQuestons: number = questions['length'];
 score: number = 0;
 end: boolean = false
 message: string;
 toSelector: Array<Question> = questions as any;
 //toSelector: Array [];
 position : number;
 questSelected: boolean = false;

  ngOnInit(){
    // For STACKBLITZ live mode
    this.numberOfQuestons = questions.default.length;


  }

  onStart(){
    this.start = !this.start;
    this.questionsCounter += this.questionsCounter;
  }

  changeQuestion(e){
    if (this.currentQuestion.correctAnswer == e) {
      this.score = this.score + 1;
      sessionStorage.setItem('score', this.score.toString());
    } 
    this.questionsCounter ++;
    this.questionsCounter == this.numberOfQuestons ? this.endQuiz() : this.currentQuestion = questions[this.questionsCounter];
    this.questionsCounter == this.numberOfQuestons -1 ? this.questSelected = true: this.questSelected = !this.questSelected; 
  }

    endQuiz(){
      this.end = true;
      if(sessionStorage.getItem('score') == null) sessionStorage.setItem('score', '0')
      this.message = "Quiz is over. Your total score is " + sessionStorage.getItem('score') + " out of  " + this.numberOfQuestons;
      sessionStorage.clear();
  }

    setQuestion(position){
      this.position = position;
      this.currentQuestion = questions[position - 1];
      this.toSelector = this.toSelector.filter( q => q.id != position);
      this.questSelected = !this.questSelected;
    }

    retake() {
      window.location.reload();
    }
}
