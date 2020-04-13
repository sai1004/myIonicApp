import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthComponent } from "./auth.component";

import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
  },
];

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
