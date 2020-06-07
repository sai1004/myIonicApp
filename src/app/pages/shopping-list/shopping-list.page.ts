import { Component, OnInit, Input } from "@angular/core";
import { ShoppingService } from "../../services/shopping.service";
import { ShoppingList } from "../../entities/ShoppingList";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.page.html",
  styleUrls: ["./shopping-list.page.scss"],
})
export class ShoppingListPage implements OnInit {
  savedList: any;

  @Input()
  shoppingList: ShoppingList;

  constructor(private _shoppingListService: ShoppingService) {
    this.shoppingList = new ShoppingList();
    this.savedList = _shoppingListService.getItems();
  }

  ngOnInit() {}

  onAddItem(list: NgForm) {
    this._shoppingListService.addItem(list);
  }

  onRemove(index: number) {
    this._shoppingListService.removeItem(index);
  }
}
