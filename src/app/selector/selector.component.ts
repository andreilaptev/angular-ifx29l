import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent  {

  position: number;

  @Input() questions: any;
  @Output() choice = new EventEmitter<number>();
  
  onPick(){
    this.choice.emit(this.position)
  }
}
