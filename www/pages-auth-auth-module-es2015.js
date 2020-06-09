(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/signin/signin.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/signin/signin.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"secondary\">\n  <ion-card>\n    <ion-card-header class=\"ion-text-center\">\n      <ion-card-title> Login </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <form #singInForm=\"ngForm\" (ngSubmit)=\"onLogin()\">\n        <ion-list>\n          <ion-item>\n            <ion-label position=\"floating\">Email: </ion-label>\n            <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"auth.email\" clearInput required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Password: </ion-label>\n            <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"auth.password\" clearInput required></ion-input>\n          </ion-item>\n\n          <div class=\"ion-margin-top\">\n            <ion-button slot=\"end\" type=\"submit\" expand=\"block\" [disabled]=\"!singInForm.valid\"\n              routerLink=\"/dashboard/tabs/shopping\">Login</ion-button>\n          </div>\n\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <h6> Sign Up? </h6>\n              </ion-col>\n              <ion-col class=\"ion-text-end\">\n                <h6>Forgot Password?</h6>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n        </ion-list>\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/entities/Auth.ts":
/*!**********************************!*\
  !*** ./src/app/entities/Auth.ts ***!
  \**********************************/
/*! exports provided: Auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return Auth; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Auth {
}


/***/ }),

/***/ "./src/app/pages/auth/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_signin_signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/signin/signin.page */ "./src/app/pages/auth/signin/signin.page.ts");







const routes = [
    {
        path: "signin",
        component: _auth_signin_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"],
    },
];
let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_auth_signin_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ],
    })
], AuthModule);



/***/ }),

/***/ "./src/app/pages/auth/signin/signin.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/signin/signin.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  transform: translateY(50%);\n}\n\nh6 {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0YWZmL3dvcmsvdGVtcC9teUlvbmljQXBwL3NyYy9hcHAvcGFnZXMvYXV0aC9zaWduaW4vc2lnbmluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXV0aC9zaWduaW4vc2lnbmluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ25pbi9zaWduaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbn1cblxuaDYge1xuICBjb2xvcjogYmxhY2s7XG59XG4iLCJpb24tY2FyZCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xufVxuXG5oNiB7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/auth/signin/signin.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/signin/signin.page.ts ***!
  \**************************************************/
/*! exports provided: SigninPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPage", function() { return SigninPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../entities/Auth */ "./src/app/entities/Auth.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SigninPage = class SigninPage {
    constructor(route) {
        this.route = route;
        this.auth = new _entities_Auth__WEBPACK_IMPORTED_MODULE_2__["Auth"]();
    }
    ngOnInit() { }
    onLogin() {
        this.route.navigate["dashboard/tabs/shopping"];
    }
};
SigninPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _entities_Auth__WEBPACK_IMPORTED_MODULE_2__["Auth"])
], SigninPage.prototype, "auth", void 0);
SigninPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-signin",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/signin/signin.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin.page.scss */ "./src/app/pages/auth/signin/signin.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SigninPage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-auth-module-es2015.js.map