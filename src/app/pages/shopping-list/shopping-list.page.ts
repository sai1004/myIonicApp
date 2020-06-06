import { Component, OnInit, Input } from "@angular/core";
import { Shopping } from "./Shopping";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.page.html",
  styleUrls: ["./shopping-list.page.scss"],
})
export class ShoppingListPage implements OnInit {
  @Input()
  shopping: Shopping;

  shoppingList: any[] = [];

  constructor() {
    this.shopping = new Shopping();
  }

  ngOnInit() {}

  addItem(list: NgForm) {
    this.shoppingList.push(list);
    list.resetForm()
  }

  clearItems(listForm: any) {
    listForm.rest();
  }
}
