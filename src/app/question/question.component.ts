import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  @Input() question: any;
  @Output() nextQuestion = new EventEmitter<string>();

  isSubmitted: boolean = false;
  empty: boolean = false;

  onAnswer(form: any) {
    this.isSubmitted = true;
    form.answer == "" ? this.empty = true : this.nextQuestion.emit(form.answer)    
  }

  changed(){
    this.empty = false
  }

 
}
