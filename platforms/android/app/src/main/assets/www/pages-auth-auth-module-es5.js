function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-auth-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/auth.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/auth.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"bg-img\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title align=\"center\"> Login </ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <form>\n\n          <ion-item>\n            <ion-label position=\"stacked\">Email: </ion-label>\n            <ion-input type=\"email\" clearInput placeholder=\"Enter The Email\" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Password: </ion-label>\n            <ion-input type=\"password\" clearInput placeholder=\"Enter The Password\" required></ion-input>\n          </ion-item>\n\n          <div class=\"Login\">\n            <button ion-button> Login </button>\n          </div>\n\n        </form>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/auth/auth.component.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/auth/auth.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAuthAuthComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg-img {\n  min-height: 100vh;\n  background: linear-gradient(150deg, #3498db, #8e44ad);\n  width: 100%;\n}\n\nion-card {\n  transform: translateY(65%);\n}\n\n.Login {\n  padding-top: 14px;\n  padding-bottom: 40px;\n}\n\nbutton {\n  height: 38px;\n  width: 120px;\n  color: white;\n  float: right;\n  outline: none;\n  background-color: blueviolet;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N0YWZmL3dvcmsvdGVtcC9teUlvbmljQXBwL3NyYy9hcHAvcGFnZXMvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLHFEQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1pbWcge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1MGRlZywgIzM0OThkYiwgIzhlNDRhZCk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tY2FyZCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2NSUpO1xufVxuXG4uTG9naW4ge1xuICBwYWRkaW5nLXRvcDogMTRweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5idXR0b24ge1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XG59XG4iLCIuYmctaW1nIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTBkZWcsICMzNDk4ZGIsICM4ZTQ0YWQpO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWNhcmQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjUlKTtcbn1cblxuLkxvZ2luIHtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG5idXR0b24ge1xuICBoZWlnaHQ6IDM4cHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/auth/auth.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/auth/auth.component.ts ***!
    \**********************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppPagesAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthComponent = /*#__PURE__*/function () {
      function AuthComponent() {
        _classCallCheck(this, AuthComponent);
      }

      _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthComponent;
    }();

    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/auth.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth.component.scss */
      "./src/app/pages/auth/auth.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AuthComponent);
    /***/
  },

  /***/
  "./src/app/pages/auth/auth.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/auth/auth.module.ts ***!
    \*******************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppPagesAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.component */
    "./src/app/pages/auth/auth.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: "",
      component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"]
    }];

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)]
    })], AuthModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-auth-auth-module-es5.js.map