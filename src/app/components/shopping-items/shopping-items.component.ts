import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-items',
  templateUrl: './shopping-items.component.html',
  styleUrls: ['./shopping-items.component.scss'],
})
export class ShoppingItemsComponent implements OnInit {

  @Input()
  savedList: any;

  constructor() { }

  ngOnInit() {}

  @Output() onDelete = new EventEmitter<any>();

  onRemove(index:number){
    this.onDelete.emit(index)
  }

}
