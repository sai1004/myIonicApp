import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { ShoppingListPageRoutingModule } from "./shopping-list-routing.module";
import { ShoppingListPage } from "./shopping-list.page";

import { ShoppingService } from "../../services/shopping.service"
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingListPageRoutingModule,
  ],
  declarations: [ShoppingListPage],
  providers: [ShoppingService]
})
export class ShoppingListPageModule {}
