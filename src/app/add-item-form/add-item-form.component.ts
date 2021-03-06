import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms'; // Importing the communication to angular form folder
import { BudgetItem } from '../shared/budget-item';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  // Two-Way data Binding via inputs and outputs
  // while also using an event emmitter to display
  // the form data

  @Input() item: BudgetItem = new BudgetItem('', 0);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter;

  constructor() { }

  // Creation of onSubmit method to submit our form data
  onSubmit(form: NgForm){
    console.log(this.formSubmit.emit(form.value));
  }

  ngOnInit(): void {
  }

}
