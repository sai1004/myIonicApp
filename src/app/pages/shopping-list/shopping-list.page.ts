import { Component, OnInit, Input } from "@angular/core";
import { ShoppingService } from "./shopping.service";
import { ShoppingList } from "../../entities/ShoppingList";
import { NgForm } from "@angular/forms";
import { ActionSheetController, Platform } from "@ionic/angular";
import { AppService } from "src/app/shared/utils/app.service";
@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.page.html",
  styleUrls: ["./shopping-list.page.scss"],
})
export class ShoppingListPage implements OnInit {
  savedList: any;

  @Input()
  shoppingList: ShoppingList;

  constructor(
    public platform: Platform,
    public actionSheetCtrl: ActionSheetController,
    private _shoppingListService: ShoppingService,
    private _appService: AppService
  ) {
    this.shoppingList = new ShoppingList();
    this.savedList = _shoppingListService.getItems();
  }

  ngOnInit() {}

  onAddItem() {
    this._shoppingListService.addItem(this.shoppingList);
  }

  onRemove(index: number) {
    this._shoppingListService.removeItem(index);
    this._appService.showMessage("Deleted SuccessFully.");
  }

  async deleteActionSheet(index) {
    const actionSheet = await this.actionSheetCtrl.create({
      cssClass: "action-sheets-basic-page",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          icon: !this.platform.is("ios") ? "trash" : null,
          handler: () => {
            this.onRemove(index);
          },
        },
        {
          text: "Cancel",
          role: "cancel", // will always sort to be on the bottom
          icon: !this.platform.is("ios") ? "close" : null,
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
