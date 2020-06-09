import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { ShoppingListPageRoutingModule } from "./shopping-list-routing.module";
import { ShoppingListPage } from "./shopping-list.page";

import { ShoppingService } from "./shopping.service";
import { ComponentsModule } from "../../components/components.module";
import { ShoppingItemsComponent } from "../../components/shopping-items/shopping-items.component"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingListPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ShoppingListPage,ShoppingItemsComponent],
  providers: [ShoppingService],
})
export class ShoppingListPageModule {}
