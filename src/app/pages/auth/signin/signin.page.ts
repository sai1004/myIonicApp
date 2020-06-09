import { Component, OnInit, Input } from "@angular/core";
import { Auth } from "../../../entities/Auth";
import { Router } from "@angular/router";
import { AppService } from "src/app/shared/utils/app.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.page.html",
  styleUrls: ["./signin.page.scss"],
})
export class SigninPage implements OnInit {
  isVisible: boolean;

  @Input()
  auth: Auth;

  constructor(public route: Router, private _appService: AppService) {
    this.auth = new Auth();
  }

  ngOnInit() {}

  togglePasswordFieldType() {
    this.isVisible = !this.isVisible;
  }

  onLogin() {
    this.route.navigate["/dashboard/tabs/shopping"];
    this._appService.showMessage("Signin SuccessFull.");
    console.log(this.auth);
  }
}
