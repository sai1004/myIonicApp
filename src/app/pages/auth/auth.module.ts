import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";

import { RouterModule, Routes } from "@angular/router";
import { SigninPage } from "../auth/signin/signin.page";

const routes: Routes = [
  {
    path: "signin",
    component: SigninPage,
  },
];

@NgModule({
  declarations: [SigninPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
})
export class AuthModule {}
