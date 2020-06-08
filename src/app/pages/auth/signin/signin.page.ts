import { Component, OnInit, Input } from "@angular/core";
import { Auth } from "../../../entities/Auth";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.page.html",
  styleUrls: ["./signin.page.scss"],
})
export class SigninPage implements OnInit {
  @Input()
  auth: Auth;

  constructor() {}

  ngOnInit() {}

  onLogin() {}
}
