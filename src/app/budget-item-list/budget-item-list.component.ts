import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from '../shared/budget-item';
@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  // TODO add modal functionality for update of list data\

  @Input() budgetItems: BudgetItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
