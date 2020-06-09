import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";

import { RouterModule, Routes } from "@angular/router";
import { SigninPage } from "../auth/signin/signin.page";
import { AppService } from 'src/app/shared/utils/app.service';

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
  providers:[AppService]
})
export class AuthModule {}
