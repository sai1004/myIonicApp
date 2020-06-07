import { Injectable, Input } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ShoppingService {
  saveShoppingList: any[] = [];

  constructor() {}

  addItem(item: any) {
    this.saveShoppingList.push(item);
    console.log(this.saveShoppingList);
  }

  getItems() {
    return this.saveShoppingList;
  }

  removeItem(index: number) {
    this.saveShoppingList.splice(index, 1);
  }
}
