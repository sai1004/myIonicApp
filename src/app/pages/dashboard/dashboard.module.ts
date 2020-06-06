import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { ShoppingListPageModule } from "../shopping-list/shopping-list.module";
import { RecipeListPageModule } from "../recipe-list/recipe-list.module";

const routes: Routes = [
  {
    path: "tabs",
    component: DashboardComponent,
    children: [
      {
        path: "shopping",
        children: [
          {
            path: "",
            loadChildren:
              "../shopping-list/shopping-list.module#ShoppingListPageModule",
          },
        ],
      },

      {
        path: "recipes",
        children: [
          {
            path: "",
            loadChildren:
              "../recipe-list/recipe-list.module#RecipeListPageModule",
          },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    ShoppingListPageModule,
    RecipeListPageModule,
  ],
})
export class DashboardModule {}
