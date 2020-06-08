import { Component, OnInit, Input } from "@angular/core";
import { Auth } from "../../../entities/Auth";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.page.html",
  styleUrls: ["./signin.page.scss"],
})
export class SigninPage implements OnInit {
  @Input()
  auth: Auth;

  constructor(public route: Router) {}

  ngOnInit() {}

  onLogin() {
    this.route.navigate["dashboard/tabs/shopping"];
  }
}
