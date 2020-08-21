(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <img src=\"../assets/app-logo.svg\" style=\"height:60%\">\n      <h1 style=\"margin-left: 10px;\">My Home | DrukMap</h1>\n      <span class=\"menu-spacer\"></span>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/change-password/change-password.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>Change Password</span>\n</mat-toolbar>\n<div class=\"form-wraper\">\n  <div class=\"form-container card\">\n    <div class=\"form-header\">\n    </div>\n    <div class=\"form-body\">\n      <form [formGroup]=\"changePasswordForm\">\n        <mat-form-field class=\"justifier\">\n          <input matInput type=\"password\" placeholder=\"Old Password\" class=\"form-input\" name=\"oldPass\" formControlName=\"oldPass\" required>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <input matInput type=\"password\" placeholder=\"New Password\" class=\"form-input\" name=\"newPass\" formControlName=\"newPass\" required>\n        </mat-form-field>\n      </form>\n    </div>\n    <div class=\"form-footer\">\n      <button mat-raised-button class=\"btn custom-btn\" (click)=\"changePassword()\" color=\"primary\" [disabled]=\"!changePasswordForm.valid\">\n        <mat-icon>send</mat-icon> Change\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/confirm-dialog/confirm-dialog.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/confirm-dialog/confirm-dialog.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  {{data.message}}\n</div>\n<div mat-dialog-actions>\n  <button mat-button value=\"Confirm\" [mat-dialog-close]=\"true\" cdkFocusInitial>Yes</button>\n  <button mat-button value=\"Cancel\"  [mat-dialog-close]=\"false\">No</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"form-wraper\">\n  <div class=\"form-container card\" (click)=\"redirect('map')\" style=\"background-color: #f2f8f9;\">\n    <div class=\"form-header\" style=\"text-align: center;\">\n      <span class=\"material-icons\" style=\"padding: 6px;border: 1px solid #0000004a;border-radius: 22px; font-size: 70px;\">\n        contacts\n      </span>\n    </div>\n    <div class=\"form-body\" style=\"letter-spacing: 2px;margin-top: 12px;text-align: center;\">\n      Household Registration\n    </div>\n    <div class=\"form-body\" style=\"letter-spacing: 1px;margin-top: 1px;font-size: 13px;color: #696969;text-align: center;\">\n      register household information\n    </div>\n  </div>\n</div> -->\n<div class=\"form-wraper\">\n  <div class=\"form-container card\" (click)=\"scan()\" style=\"background-color: #f2f8f9;\">\n    <div class=\"form-header\" style=\"text-align: center;\">\n      <span class=\"material-icons\" style=\"padding: 6px;border: 1px solid #0000004a;border-radius: 22px; font-size: 70px;\">\n        crop_free\n      </span>\n    </div>\n    <div class=\"form-body\" style=\"letter-spacing: 2px;margin-top: 12px;text-align: center;\">\n      Scan QR Code\n    </div>\n    <div class=\"form-body\" style=\"letter-spacing: 1px;margin-top: 1px;font-size: 13px;color: #696969;text-align: center;\">\n      Scan qrcode to validate card, register household or update household details\n    </div>\n  </div>\n</div>\n<!-- <div class=\"form-wraper\">\n  <div class=\"form-container card\" (click)=\"update()\" style=\"background-color: #f2f8f9;\">\n    <div class=\"form-header\" style=\"text-align: center;\">\n      <span class=\"material-icons\" style=\"padding: 6px;border: 1px solid #0000004a;border-radius: 22px; font-size: 70px;\">\n        update\n      </span>\n    </div>\n    <div class=\"form-body\" style=\"letter-spacing: 2px;margin-top: 12px;text-align: center;\">\n      Update details\n    </div>\n    <div class=\"form-body\" style=\"letter-spacing: 1px;margin-top: 1px;font-size: 13px;color: #696969;text-align: center;\">\n      Update holdhold details\n    </div>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/error.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\n  <div class=\"notfound\">\n    <div class=\"notfound-404\">\n      <h1>Oops!</h1>\n      <h2>404 - The Page can't be found</h2>\n    </div>\n    <a href=\"#\" [routerLink]=\"['/login']\">Go To Homepage</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-wraper\">\n  <div class=\"form-container card\">\n    <div class=\"form-header\">\n      <img src=\"../../assets/app-logo.svg\"  class=\"main-lock-icon\" alt=\"\">\n    </div>\n    <div class=\"form-body\">\n      <form [formGroup]=\"loginForm\">\n        <mat-form-field class=\"justifier\">\n          <input matInput type=\"number\" placeholder=\"CID Number\" class=\"form-input\" name=\"cid\" formControlName=\"cid\" [ngClass]=\"{ 'is-invalid': submitted && f.cid.errors }\" required autofocus>\n          <div *ngIf=\"submitted && f.cid.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.cid.errors.required\">CID number is required</div>\n          <div *ngIf=\"f.cid.errors.minlength\">CID number must be atleast 11 characters</div>\n            <div *ngIf=\"f.cid.errors.maxlength\">CID number must be less then 11 characters</div>\n          </div>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <input matInput [type]=\"hide ? 'password' : 'text'\" placeholder=\"Password\" class=\"form-input\" name=\"password\" formControlName=\"password\"  [ngClass]=\"{ 'is-invalid': submitted && f.cid.errors }\" required>\n          <button mat-icon-button matSuffix type=\"button\" (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n          </button>\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n          </div>\n        </mat-form-field>\n      </form>\n    </div>\n    <div class=\"form-footer\">\n        <button mat-raised-button class=\"btn custom-btn\" (click)=\"login()\" color=\"primary\" [disabled]=\"!loginForm.valid\"><mat-icon>input</mat-icon> Login</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/map.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n\n</mat-toolbar>\n<div class=\"map-container\">\n    <div id=\"map\">\n      <div class=\"leaflet-bottom leaflet-right\">\n          <button style=\"\n          width: 52px;\n          border-radius: 23px;\n          height: 52px;\n          background: #ffffffa3;\n          margin-bottom: 20px;\n          border: none;\" value=\"Cancel\" class=\" span3 leaflet-control\" (click)=\"getMyLocation()\">\n            <mat-icon style=\"color: blue;\">location_searching</mat-icon>\n          </button>\n      </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modal/modal.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modal/modal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Scan QR Code</h1>\n<div mat-dialog-content>\n  <zxing-scanner (scanSuccess)=\"onCodeResult($event)\"></zxing-scanner>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/select-zone/select-zone.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/select-zone/select-zone.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>Select Zone</span>\n</mat-toolbar>\n<div class=\"form-wraper\">\n  <div class=\"form-container card\">\n    <div class=\"form-header\">\n    </div>\n    <div class=\"form-body\">\n      <form [formGroup]=\"zoneForm\">\n        <mat-form-field class=\"justifier\">\n          <mat-label>Dzongkhag</mat-label>\n          <mat-select #dzongkhag formControlName=\"dzongkhagControl\" name=\"dzongkhag\" (selectionChange)=\"getZoneList(dzongkhag.value)\" required>\n            <mat-option *ngFor=\"let dzongkhag of dzongkhags\" [value]=\"dzongkhag.id\">\n              {{dzongkhag.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Zone</mat-label>\n          <mat-select #zone formControlName=\"zoneControl\" name=\"zone\" (selectionChange)=\"getSubzoneList(zone.value)\" required>\n            <mat-option *ngFor=\"let zone of zones\" [value]=\"zone.id\">\n              {{zone.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Sub-zone</mat-label>\n          <mat-select formControlName=\"subZoneControl\" name=\"subZone\" required>\n            <mat-option *ngFor=\"let subZone of subZones\" [value]=\"subZone.id\">\n              {{subZone.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Shop</mat-label>\n          <mat-select name=\"shop\" formControlName=\"shopControl\">\n            <mat-option *ngFor=\"let shop of shops\" [value]=\"shop.id\">\n              {{shop.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </form>\n    </div>\n    <div class=\"form-footer\">\n      <button mat-raised-button class=\"btn custom-btn\" (click)=\"redirectToDashboard()\" color=\"primary\" [disabled]=\"!zoneForm.valid\">\n        <mat-icon>arrow_forward</mat-icon> Proceed\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/update-household/update-household.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/update-household/update-household.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>Update Household Details</span>\n  <span class=\"menu-spacer\"></span>\n  <!-- <button mat-mini-fab color=\"primary\" (click)=\"triggerCamera()\" aria-label=\"Click to open camera for qr code scanning\">\n    <mat-icon>camera_alt</mat-icon>\n  </button> -->\n</mat-toolbar>\n<div class=\"form-wraper\">\n  <div class=\"form-container card\">\n    <div class=\"form-body\">\n      <form [formGroup]=\"updateForm\">\n        <mat-form-field class=\"justifier\">\n          <mat-label>Mobile Number</mat-label>\n          <input matInput type=\"number\" name=\"mobileNo\" formControlName=\"mobileNoControl\" required min=\"0\" [readonly]=\"disableForm\" autofocus>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Total Male</mat-label>\n          <input matInput type=\"number\" name=\"totalMale\" formControlName=\"totalMaleControl\" min=\"0\" [readonly]=\"disableForm\" required>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Total Female</mat-label>\n          <input matInput type=\"number\" name=\"totalFemale\" formControlName=\"totalFemaleControl\" min=\"0\" [readonly]=\"disableForm\" required>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Members (Age over 60)</mat-label>\n          <input matInput type=\"number\" name=\"ageOverFifty\" formControlName=\"ageOverFiftyControl\" min=\"0\" [readonly]=\"disableForm\" required>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Members (Age below 10)</mat-label>\n          <input matInput type=\"number\" name=\"ageBelowTen\" formControlName=\"ageBelowTenControl\" min=\"0\" [readonly]=\"disableForm\" required>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Nationality</mat-label>\n          <mat-select name=\"nationality\" formControlName=\"nationalityControl\" [readonly]=\"disableForm\" required>\n            <mat-option *ngFor=\"let nationality of nationalities\" [value]=\"nationality.id\">\n              {{nationality.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field class=\"justifier\">\n          <mat-label>Emergency Mobile Number</mat-label>\n          <input matInput type=\"number\" name=\"emergencyMobileNo\" formControlName=\"emergencyMobileNoControl\" min=\"0\" [readonly]=\"disableForm\" required>\n        </mat-form-field>\n      </form>\n    </div>\n    <div class=\"form-footer\">\n      <button mat-raised-button class=\"btn custom-btn\" (click)=\"update()\" color=\"primary\" [disabled]=\"!updateForm.valid\">\n        <mat-icon>note_add</mat-icon> UPDATE\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");





var routes = [
    // {path: '', component: LoginComponent},
    // {path: 'login', component: LoginComponent},
    // {path: 'selectzone', component: SelectZoneComponent, canActivate: [RouteGuard]},
    // {path: 'dashboard', component: DashboardComponent, canActivate: [RouteGuard]},
    // {path: 'register/:id', component: RegisterComponent, canActivate: [RouteGuard]},
    // {path: 'update-household/:id', component: UpdateHouseholdComponent, canActivate: [RouteGuard]},
    // {path: 'changepassword', component: ChangePasswordComponent, canActivate: [RouteGuard]},
    // {path: 'map', component: MapComponent, canActivate: [RouteGuard]},
    { path: '', component: _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"] },
    { path: '**', component: _error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\nmat-sidenav-container {\n  height: 100%;\n}\n\nmat-sidenav, mat-sidenav-content {\n  padding: 16px;\n}\n\nmat-sidenav {\n  background-color: lightcoral;\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFBST0pFQ1RTXFxjb3ZpZF8xOVxcZHJ1a21hcFxcY292aWRvdXRwYXNzLWFwcC1tYXN0ZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1zaWRlbmF2LCBtYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxubWF0LXNpZGVuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xuICB3aWR0aDogMjAwcHg7XG59XG4iLCIubWVudS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtc2lkZW5hdiwgbWF0LXNpZGVuYXYtY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcbiAgd2lkdGg6IDIwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: MatMenuListItem, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenuListItem", function() { return MatMenuListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "./src/app/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var MatMenuListItem = /** @class */ (function () {
    function MatMenuListItem() {
    }
    return MatMenuListItem;
}());

var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router, changeDetectorRef, dialog, location) {
        this.authService = authService;
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this.dialog = dialog;
        this.location = location;
        this.menuList = [
            {
                menuLinkText: 'Registration',
                menuIcon: 'contacts',
                routerLink: 'register'
            },
            {
                menuLinkText: 'Scan',
                menuIcon: 'crop_free',
                routerLink: 'scan'
            },
            {
                menuLinkText: 'Change Password',
                menuIcon: 'refresh',
                routerLink: 'changepassword'
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (value) {
            _this.isUserLoggedIn = value;
        });
    };
    AppComponent.prototype.redirect = function (menuItem) {
        this.router.navigate([menuItem.routerLink]);
        this.changeDetectorRef.detectChanges();
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        var confirmDialog = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"], {
            data: {
                title: 'Confirmation',
                message: 'Do you really want to logout?'
            }
        });
        confirmDialog.afterClosed().subscribe(function (result) {
            if (result) {
                _this.authService.logout();
                _this.router.navigate(['login']);
            }
        });
    };
    AppComponent.prototype.back = function () {
        if (this.router.url === '/selectzone') {
            this.logout();
        }
        else {
            this.location.back();
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
// export const API_URL = 'http://covidoutpass.local/api';
var API_URL = 'https://outpassdashboard.desuung.org.bt/api';


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _select_zone_select_zone_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select-zone/select-zone.component */ "./src/app/select-zone/select-zone.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_http_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/http-interceptor.service */ "./src/app/service/http-interceptor.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "./src/app/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _update_household_update_household_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./update-household/update-household.component */ "./src/app/update-household/update-household.component.ts");







// import { RegisterComponent } from './register/register.component';














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                // RegisterComponent,
                _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"],
                _select_zone_select_zone_component__WEBPACK_IMPORTED_MODULE_8__["SelectZoneComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_16__["ChangePasswordComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_17__["MapComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["ModalComponent"],
                _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmDialogComponent"],
                _update_household_update_household_component__WEBPACK_IMPORTED_MODULE_20__["UpdateHouseholdComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"], useClass: _service_http_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["HttpInterceptorService"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_18__["ModalComponent"], _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmDialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(fb) {
        this.fb = fb;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.reactiveForm();
    };
    ChangePasswordComponent.prototype.reactiveForm = function () {
        this.changePasswordForm = this.fb.group({
            oldPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            newPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    };
    ChangePasswordComponent.prototype.changePassword = function () { };
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/change-password/change-password.component.scss")]
        })
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/confirm-dialog/confirm-dialog.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/confirm-dialog/confirm-dialog.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/confirm-dialog/confirm-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/confirm-dialog/confirm-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__(/*! raw-loader!./confirm-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-dialog.component.scss */ "./src/app/confirm-dialog/confirm-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-card {\n  display: block;\n  top: 0px;\n  position: relative;\n  max-width: 262px;\n  background-color: #f2f8f9;\n  border-radius: 4px;\n  padding: 32px 24px;\n  margin: 12px;\n  text-decoration: none;\n  z-index: 0;\n  overflow: hidden;\n  border: 1px solid #f2f8f9;\n}\n.custom-card:hover {\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n  box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);\n  top: -4px;\n  border: 1px solid #cccccc;\n  background-color: white;\n}\n.custom-card:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: -16px;\n  right: -16px;\n  background: #00838d;\n  height: 32px;\n  width: 32px;\n  border-radius: 32px;\n  -webkit-transform: scale(2);\n          transform: scale(2);\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  -webkit-transition: -webkit-transform 0.15s ease-out;\n  transition: -webkit-transform 0.15s ease-out;\n  transition: transform 0.15s ease-out;\n  transition: transform 0.15s ease-out, -webkit-transform 0.15s ease-out;\n}\n.custom-card:hover:before {\n  -webkit-transform: scale(2.15);\n          transform: scale(2.15);\n}\n.content {\n  padding: 16px;\n}\n.content > mat-card {\n  margin-bottom: 16px;\n}\n.css-grid {\n  display: grid;\n  grid-gap: 8px;\n  grid-template-columns: 33% 67%;\n  grid-template-rows: 33% 67%;\n  height: 100%;\n  width: 100%;\n}\n.css-grid .css-grid-tile.top-left {\n  grid-column: 1/2;\n}\n.css-grid .css-grid-tile.top-right {\n  grid-column: 2/3;\n}\n.css-grid .css-grid-tile.bottom {\n  grid-column: 1/3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0Q6XFxQUk9KRUNUU1xcY292aWRfMTlcXGRydWttYXBcXGNvdmlkb3V0cGFzcy1hcHAtbWFzdGVyL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDQUY7QURFRTtFQUNFLHFDQUFBO0VBQUEsNkJBQUE7RUFDQSw2Q0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FDQUo7QURHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0Esb0RBQUE7RUFBQSw0Q0FBQTtFQUFBLG9DQUFBO0VBQUEsc0VBQUE7QUNESjtBRElFO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBQ0ZKO0FETUE7RUFDRSxhQUFBO0FDSEY7QURNQTtFQUNFLG1CQUFBO0FDSEY7QURNQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSEY7QURLTTtFQUNFLGdCQUFBO0FDSFI7QURLTTtFQUNFLGdCQUFBO0FDSFI7QURLTTtFQUNFLGdCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY3VzdG9tLWNhcmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAyNjJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjhmOTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAzMnB4IDI0cHg7XG4gIG1hcmdpbjogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB6LWluZGV4OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjJmOGY5O1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMzgsIDM4LCAzOCwgMC4yKTtcbiAgICB0b3A6IC00cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0b3A6IC0xNnB4O1xuICAgIHJpZ2h0OiAtMTZweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDA4MzhkO1xuICAgIGhlaWdodDogMzJweDtcbiAgICB3aWR0aDogMzJweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgZWFzZS1vdXQ7XG4gIH1cblxuICAmOmhvdmVyOmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyLjE1KTtcbiAgfVxufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5jb250ZW50ID4gbWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uY3NzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogOHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzJSA2NyU7IC8vIHR3byBjb2x1bW5zXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzMlIDY3JTsgLy8gdHdvIHJvd3NcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLmNzcy1ncmlkLXRpbGUge1xuICAgICAgJi50b3AtbGVmdCB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICAgIH1cbiAgICAgICYudG9wLXJpZ2h0IHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgICAgfVxuICAgICAgJi5ib3R0b20ge1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgICB9XG4gICAgfVxuICB9XG4iLCIuY3VzdG9tLWNhcmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAyNjJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjhmOTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAzMnB4IDI0cHg7XG4gIG1hcmdpbjogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB6LWluZGV4OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjJmOGY5O1xufVxuLmN1c3RvbS1jYXJkOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMzgsIDM4LCAzOCwgMC4yKTtcbiAgdG9wOiAtNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5jdXN0b20tY2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB0b3A6IC0xNnB4O1xuICByaWdodDogLTE2cHg7XG4gIGJhY2tncm91bmQ6ICMwMDgzOGQ7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLW91dDtcbn1cbi5jdXN0b20tY2FyZDpob3ZlcjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDIuMTUpO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5jb250ZW50ID4gbWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uY3NzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogOHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzJSA2NyU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzMlIDY3JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jc3MtZ3JpZCAuY3NzLWdyaWQtdGlsZS50b3AtbGVmdCB7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG59XG4uY3NzLWdyaWQgLmNzcy1ncmlkLXRpbGUudG9wLXJpZ2h0IHtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbn1cbi5jc3MtZ3JpZCAuY3NzLWdyaWQtdGlsZS5ib3R0b20ge1xuICBncmlkLWNvbHVtbjogMS8zO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: Qrcode, DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Qrcode", function() { return Qrcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "./src/app/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _service_sound_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/sound.service */ "./src/app/service/sound.service.ts");








var Qrcode = /** @class */ (function () {
    function Qrcode() {
    }
    return Qrcode;
}());

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, dialog, dataService, snackBar, soundService) {
        this.router = router;
        this.dialog = dialog;
        this.dataService = dataService;
        this.snackBar = snackBar;
        this.soundService = soundService;
        this.qrcode = new Qrcode();
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent.prototype.redirect = function (path) {
        sessionStorage.setItem('transactionType', 'registration');
        this.router.navigate([path]);
    };
    DashboardComponent.prototype.update = function () {
        sessionStorage.setItem('transactionType', 'update');
        this.router.navigate(['map']);
    };
    DashboardComponent.prototype.scan = function () {
        var _this = this;
        this.getLocation();
        var dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], {
            width: '300px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.dataService.validateQRCode('scan', result).subscribe(function (response) {
                _this.soundService.successBeep();
                if (response.status_code === 'ACTIVE') {
                    if (response.data.building_id === 0) {
                        var confirmDialog = _this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
                            data: {
                                title: 'Alert!',
                                message: 'This QR Code is not associated with a building, please select a building.'
                            }
                        });
                        confirmDialog.afterClosed().subscribe(function (confirmResult) {
                            if (confirmResult) {
                                sessionStorage.setItem('transactionType', 'update');
                                sessionStorage.setItem('qrUUID', result);
                                _this.router.navigate(['map']);
                            }
                        });
                        _this.qrcode.qr_code_id = response.qr_code_id;
                        _this.qrcode.sub_zone_id = Number(sessionStorage.getItem('zoneId'));
                        _this.qrcode.user_id = Number(sessionStorage.getItem('userId'));
                        _this.qrcode.household_detail_id = response.data.id;
                        _this.qrcode.lat = _this.latitude;
                        _this.qrcode.lng = _this.longitude;
                        _this.qrcode.accuracy = _this.accuracy;
                        _this.dataService.postQRScan(_this.qrcode).subscribe(function (resp) {
                            console.log('QR Scan successful');
                        });
                    }
                    else {
                        _this.qrcode.qr_code_id = response.qr_code_id;
                        _this.qrcode.sub_zone_id = Number(sessionStorage.getItem('zoneId'));
                        _this.qrcode.user_id = Number(sessionStorage.getItem('userId'));
                        _this.qrcode.household_detail_id = response.data.id;
                        _this.qrcode.lat = _this.latitude;
                        _this.qrcode.lng = _this.longitude;
                        _this.qrcode.accuracy = _this.accuracy;
                        _this.dataService.postQRScan(_this.qrcode).subscribe(function (resp) {
                            _this.snackBar.open('QR code successfully scanned with the current location', '', {
                                duration: 5000,
                                verticalPosition: 'top',
                                panelClass: ['success-snackbar']
                            });
                        });
                    }
                }
                else if (response.status_code === 'INVALID') {
                    var confirmDialog = _this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
                        data: {
                            title: 'Alert!',
                            message: 'The QR code is invalid. Please reissue a new QR code?'
                        }
                    });
                    confirmDialog.afterClosed().subscribe(function (confirmResult) {
                        if (confirmResult) {
                            _this.router.navigate(['map']);
                            sessionStorage.setItem('requestType', 'SCAN');
                            sessionStorage.setItem('qrCodeId', 'NA');
                            sessionStorage.setItem('transactionType', 'registration');
                        }
                    });
                }
                else if (response.status_code === 'INACTIVE') {
                    var confirmDialog = _this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
                        data: {
                            title: 'Alert!',
                            message: 'Scan failed, this QR Code has not been registered with any household. Please register a new household?'
                        }
                    });
                    confirmDialog.afterClosed().subscribe(function (confirmResult) {
                        if (confirmResult) {
                            _this.router.navigate(['map']);
                            sessionStorage.setItem('requestType', 'REGISTER');
                            sessionStorage.setItem('qrCodeId', response.qr_code_id);
                            sessionStorage.setItem('transactionType', 'registration');
                        }
                    });
                }
                else {
                    _this.snackBar.open('QR Code scan failed, please try again.', '', {
                        duration: 5000,
                        verticalPosition: 'top',
                        panelClass: ['error-snackbar']
                    });
                }
            }, function (err) {
                _this.soundService.failureBeep();
                _this.snackBar.open('QR Code scan failed, please try again.', '', {
                    duration: 5000,
                    verticalPosition: 'top',
                    panelClass: ['error-snackbar']
                });
            });
        });
    };
    DashboardComponent.prototype.getLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.longitude = position.coords.longitude;
                _this.latitude = position.coords.latitude;
                _this.accuracy = position.coords.accuracy;
            }, function (error) {
                console.error('No support for geolocation');
            }, options);
        }
        else {
            console.error('No support for geolocation');
        }
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _service_sound_service__WEBPACK_IMPORTED_MODULE_7__["SoundService"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/error/error.component.scss":
/*!********************************************!*\
  !*** ./src/app/error/error.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n}\n\n#notfound {\n  position: relative;\n  height: 100vh;\n}\n\n#notfound .notfound {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n\n.notfound {\n  max-width: 520px;\n  width: 100%;\n  line-height: 1.4;\n  text-align: center;\n}\n\n.notfound .notfound-404 {\n  position: relative;\n  height: 200px;\n  margin: 0px auto 20px;\n  z-index: -1;\n}\n\n.notfound .notfound-404 h1 {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 236px;\n  font-weight: 200;\n  margin: 0px;\n  color: #211b19;\n  text-transform: uppercase;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n\n.notfound .notfound-404 h2 {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 28px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: #211b19;\n  background: #fff;\n  padding: 10px 5px;\n  margin: auto;\n  display: inline-block;\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n}\n\n.notfound a {\n  font-family: \"Montserrat\", sans-serif;\n  display: inline-block;\n  font-weight: 700;\n  text-decoration: none;\n  color: #fff;\n  text-transform: uppercase;\n  padding: 13px 23px;\n  background: #ff6300;\n  font-size: 18px;\n  -webkit-transition: 0.2s all;\n  transition: 0.2s all;\n}\n\n.notfound a:hover {\n  color: #ff6300;\n  background: #211b19;\n}\n\n@media only screen and (max-width: 767px) {\n  .notfound .notfound-404 h1 {\n    font-size: 148px;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .notfound .notfound-404 {\n    height: 148px;\n    margin: 0px auto 10px;\n  }\n\n  .notfound .notfound-404 h1 {\n    font-size: 86px;\n  }\n\n  .notfound .notfound-404 h2 {\n    font-size: 16px;\n  }\n\n  .notfound a {\n    padding: 7px 15px;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvRDpcXFBST0pFQ1RTXFxjb3ZpZF8xOVxcZHJ1a21hcFxcY292aWRvdXRwYXNzLWFwcC1tYXN0ZXIvc3JjXFxhcHBcXGVycm9yXFxlcnJvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFVSxzQkFBQTtBQ0NWOztBREVBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO0VBRVEsZ0NBQUE7QUNDVjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx3Q0FBQTtFQUVRLGdDQUFBO0FDQ1Y7O0FERUE7RUFDRSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxnQkFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxxQkFBQTtFQ0FGOztFREVBO0lBQ0UsZUFBQTtFQ0NGOztFRENBO0lBQ0UsZUFBQTtFQ0VGOztFREFBO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0VDR0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4jbm90Zm91bmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbiNub3Rmb3VuZCAubm90Zm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5ub3Rmb3VuZCB7XG4gIG1heC13aWR0aDogNTIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMS40O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW46IDBweCBhdXRvIDIwcHg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjM2cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogIzIxMWIxOTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMiB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMyMTFiMTk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5ub3Rmb3VuZCBhIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxM3B4IDIzcHg7XG4gIGJhY2tncm91bmQ6ICNmZjYzMDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XG59XG5cbi5ub3Rmb3VuZCBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZjYzMDA7XG4gIGJhY2tncm91bmQ6ICMyMTFiMTk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDEge1xuICAgIGZvbnQtc2l6ZTogMTQ4cHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XG4gICAgaGVpZ2h0OiAxNDhweDtcbiAgICBtYXJnaW46IDBweCBhdXRvIDEwcHg7XG4gIH1cbiAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDEge1xuICAgIGZvbnQtc2l6ZTogODZweDtcbiAgfVxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5ub3Rmb3VuZCBhIHtcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbiIsIioge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbiNub3Rmb3VuZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuI25vdGZvdW5kIC5ub3Rmb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLm5vdGZvdW5kIHtcbiAgbWF4LXdpZHRoOiA1MjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbjogMHB4IGF1dG8gMjBweDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIzNnB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICMyMTFiMTk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDIge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMyMTFiMTk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5ub3Rmb3VuZCBhIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDEzcHggMjNweDtcbiAgYmFja2dyb3VuZDogI2ZmNjMwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYWxsO1xuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbn1cblxuLm5vdGZvdW5kIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmNjMwMDtcbiAgYmFja2dyb3VuZDogIzIxMWIxOTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XG4gICAgZm9udC1zaXplOiAxNDhweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XG4gICAgaGVpZ2h0OiAxNDhweDtcbiAgICBtYXJnaW46IDBweCBhdXRvIDEwcHg7XG4gIH1cblxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XG4gICAgZm9udC1zaXplOiA4NnB4O1xuICB9XG5cbiAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDIge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5ub3Rmb3VuZCBhIHtcbiAgICBwYWRkaW5nOiA3cHggMTVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/error/error.component.scss")]
        })
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.invalid {\n  border: 1px solid #ea6153;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXFBST0pFQ1RTXFxjb3ZpZF8xOVxcZHJ1a21hcFxcY292aWRvdXRwYXNzLWFwcC1tYXN0ZXIvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWZvcm17XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYTYxNTM7XG59XG4iLCIubXktZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYTYxNTM7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, fb, authService, snackBar) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.snackBar = snackBar;
        this.hide = true;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.reactiveForm();
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.reactiveForm = function () {
        this.loginForm = this.fb.group({
            cid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(11)])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
        this.loginForm.controls.cid.setValue(localStorage.getItem('loginId'));
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.valid) {
            var loginId_1 = this.loginForm.get('cid').value;
            var password = this.loginForm.get('password').value;
            this.authService.validateLogin(loginId_1, password).subscribe(function (response) {
                sessionStorage.setItem('userId', response.user.id);
                localStorage.setItem('loginId', loginId_1);
                _this.router.navigate(['selectzone']);
                _this.snackBar.open('Welcome Desuup ' + response.user.name, '', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    panelClass: ['success-snackbar']
                });
            }, function (error) {
                _this.submitted = false;
                _this.snackBar.open('Invalid login credentials, please try again', '', {
                    duration: 5000,
                    verticalPosition: 'bottom',
                    panelClass: ['error-snackbar']
                });
                console.log(error);
            });
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.scss":
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin-top: 112px;\n}\n\n.map-frame {\n  border: 2px solid black;\n  height: 100%;\n}\n\n#map {\n  height: 100%;\n  width: 100%;\n}\n\n.menu-spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.btnStyle {\n  cursor: pointer;\n  background-color: #4D90FE;\n  border-radius: 15px;\n  background-image: -moz-linear-gradient(center top, #4D90FE, #4787ED);\n  border: 1px solid #3079ED;\n  color: #FFFFFF;\n  padding: 4px;\n  margin-top: 4px;\n  margin-bottom: 20px;\n  width: 28%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL0Q6XFxQUk9KRUNUU1xcY292aWRfMTlcXGRydWttYXBcXGNvdmlkb3V0cGFzcy1hcHAtbWFzdGVyL3NyY1xcYXBwXFxtYXBcXG1hcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtVQUFBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0VBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDExMnB4O1xufVxuXG4ubWFwLWZyYW1lIHtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI21hcCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tZW51LXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uYnRuU3R5bGUge1xuICBjdXJzb3I6cG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzREOTBGRTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoY2VudGVyIHRvcCAsICM0RDkwRkUsICM0Nzg3RUQpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzA3OUVEO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOjI4JVxufVxuIiwiLm1hcC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMTEycHg7XG59XG5cbi5tYXAtZnJhbWUge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1lbnUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5idG5TdHlsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzREOTBGRTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoY2VudGVyIHRvcCwgIzREOTBGRSwgIzQ3ODdFRCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMDc5RUQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDI4JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: Building, MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Building", function() { return Building; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var Building = /** @class */ (function () {
    function Building() {
    }
    return Building;
}());

var MapComponent = /** @class */ (function () {
    function MapComponent(http, router, dataService, snackBar, dialog, zone) {
        this.http = http;
        this.router = router;
        this.dataService = dataService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.zone = zone;
        this.isAddAllowed = false;
        this.greenMarker = leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
            iconUrl: 'assets/marker-green.png',
            iconSize: [15, 15]
        });
        this.redMarker = leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
            iconUrl: 'assets/marker-red.png',
            iconSize: [15, 15]
        });
        this.myMarker = leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
            iconUrl: 'assets/marker-icon.png',
            iconSize: [20, 20]
        });
        this.building = new Building();
    }
    MapComponent.prototype.ngOnInit = function () {
        this.renderMap();
    };
    MapComponent.prototype.getMyLocation = function () {
        this.map.locate({ setView: true, maxZoom: 15, watch: true });
    };
    MapComponent.prototype.renderMap = function () {
        var _this = this;
        var sat = leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            minZoom: 13,
        });
        var osm = leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
            minZoom: 13,
        });
        var drukmap = leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"].wms('http://{s}.myhome.bt:8080/geoserver/bhutan/wms', {
            layers: 'bhutan:thimphu',
            maxZoom: 20,
            minZoom: 13,
            format: 'image/png',
            transparent: true
        });
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_2__["map"]('map', {
            center: [27.4712, 89.64191],
            zoom: 13,
            maxZoom: 20,
            layers: [sat]
        });
        var streeTile = leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"].wms('http://{s}.myhome.bt:8080/geoserver/bhutan/wms', {
            layers: 'bhutan:street_11august',
            maxZoom: 25,
            minZoom: 13,
            format: 'image/png',
            transparent: true
        }).addTo(this.map);
        var bldgTile = leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"].wms('http://{s}.myhome.bt:8080/geoserver/bhutan/wms', {
            layers: 'bhutan:building_numbers_11august',
            maxZoom: 25,
            minZoom: 13,
            format: 'image/png',
            transparent: true
        }).addTo(this.map);
        var baseMaps = {
            "Satellite Image": sat,
            "OSM base map": osm,
            "Drukmap Base": drukmap
        };
        var overlayMaps = {
            "Buildings": bldgTile,
            "Streets": streeTile
        };
        leaflet__WEBPACK_IMPORTED_MODULE_2__["control"].layers(baseMaps, overlayMaps).addTo(this.map);
        this.onMapReady(this.map);
        this.map.on('locationerror', function (err) {
            if (err.code === 0) {
                _this.snackBar.open('Couldnot pull your location, please try again later', '', {
                    verticalPosition: 'top',
                    duration: 3000
                });
            }
            if (err.code === 1) {
                _this.snackBar.open('Location service is disabled, please enable it and try again', '', {
                    verticalPosition: 'top',
                    duration: 3000
                });
            }
            if (err.code === 2) {
                _this.snackBar.open('Your location couldnot be determined', '', {
                    verticalPosition: 'top',
                    duration: 3000
                });
            }
            if (err.code === 3) {
                _this.snackBar.open('Couldnot get your location', '', {
                    verticalPosition: 'top',
                    duration: 3000
                });
            }
        });
        this.map.on('locationfound', function (e) {
            var radius = e.accuracy;
            leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"](e.latlng, { icon: _this.myMarker }).addTo(_this.map).bindPopup("You are here").openPopup();
            if (radius < 100) {
                leaflet__WEBPACK_IMPORTED_MODULE_2__["circle"](e.latlng, radius).addTo(_this.map);
            }
        });
    };
    MapComponent.prototype.onMapReady = function (map) {
        var zoneId = Number(sessionStorage.getItem('subZoneId'));
    };
    MapComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/map/map.component.scss")]
        })
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal.component.scss":
/*!********************************************!*\
  !*** ./src/app/modal/modal.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ModalComponent = /** @class */ (function () {
    function ModalComponent(dialogRef, snackBar, dataService, router) {
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.dataService = dataService;
        this.router = router;
        dialogRef.disableClose = true;
        dialogRef.backdropClick().subscribe(function () {
            dialogRef.disableClose = true;
        });
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.onCodeResult = function (resultString) {
        this.dialogRef.close(resultString);
        navigator.vibrate(200);
    };
    ModalComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
        { type: _service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/modal/modal.component.scss")]
        })
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/select-zone/select-zone.component.scss":
/*!********************************************************!*\
  !*** ./src/app/select-zone/select-zone.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0LXpvbmUvRDpcXFBST0pFQ1RTXFxjb3ZpZF8xOVxcZHJ1a21hcFxcY292aWRvdXRwYXNzLWFwcC1tYXN0ZXIvc3JjXFxhcHBcXHNlbGVjdC16b25lXFxzZWxlY3Qtem9uZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VsZWN0LXpvbmUvc2VsZWN0LXpvbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2VsZWN0LXpvbmUvc2VsZWN0LXpvbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktZm9ybXtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCIubXktZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/select-zone/select-zone.component.ts":
/*!******************************************************!*\
  !*** ./src/app/select-zone/select-zone.component.ts ***!
  \******************************************************/
/*! exports provided: SelectZoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectZoneComponent", function() { return SelectZoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");






var SelectZoneComponent = /** @class */ (function () {
    function SelectZoneComponent(router, fb, dataService, authService) {
        this.router = router;
        this.fb = fb;
        this.dataService = dataService;
        this.authService = authService;
        this.dzongkhags = [];
        this.zones = [];
        this.subZones = [];
        this.shops = [];
    }
    SelectZoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (value) {
            _this.isUserLoggedIn = value;
        });
        this.reactiveForm();
        this.getDzongkhagList();
        var dzongkhagId = sessionStorage.getItem('dzongkhagId');
        var zoneId = sessionStorage.getItem('zoneId');
        var subZoneId = sessionStorage.getItem('subZoneId');
        var shopId = sessionStorage.getItem('shopId');
        this.getZoneList(dzongkhagId);
        this.getSubzoneList(zoneId);
        this.dzongkhag = dzongkhagId;
        this.zone = zoneId;
        this.subZone = subZoneId;
        this.shop = shopId;
    };
    SelectZoneComponent.prototype.reactiveForm = function () {
        this.zoneForm = this.fb.group({
            zoneControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            subZoneControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            shopControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([])],
            dzongkhagControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    };
    SelectZoneComponent.prototype.getDzongkhagList = function () {
        var _this = this;
        this.dataService.getDzongkhags().subscribe(function (response) {
            _this.dzongkhags = response.data;
        });
    };
    SelectZoneComponent.prototype.getZoneList = function (dzongkhagId) {
        var _this = this;
        this.dataService.getZones(dzongkhagId).subscribe(function (response) {
            _this.zones = response.data;
        });
    };
    SelectZoneComponent.prototype.getSubzoneList = function (zoneId) {
        var _this = this;
        this.dataService.getSubZones(zoneId).subscribe(function (response) {
            _this.subZones = response.data;
        });
    };
    SelectZoneComponent.prototype.redirectToDashboard = function () {
        if (this.zoneForm.valid) {
            sessionStorage.setItem('dzongkhagId', this.zoneForm.get('dzongkhagControl').value);
            sessionStorage.setItem('zoneId', this.zoneForm.get('zoneControl').value);
            sessionStorage.setItem('subZoneId', this.zoneForm.get('subZoneControl').value);
            sessionStorage.setItem('shopId', this.zoneForm.get('shopControl').value);
            this.router.navigate(['dashboard']);
        }
    };
    SelectZoneComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    SelectZoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select-zone',
            template: __webpack_require__(/*! raw-loader!./select-zone.component.html */ "./node_modules/raw-loader/index.js!./src/app/select-zone/select-zone.component.html"),
            styles: [__webpack_require__(/*! ./select-zone.component.scss */ "./src/app/select-zone/select-zone.component.scss")]
        })
    ], SelectZoneComponent);
    return SelectZoneComponent;
}());



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: TOKEN, AUTHENTICATED_USER, IS_AUTHENTICATED, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATED_USER", function() { return AUTHENTICATED_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_AUTHENTICATED", function() { return IS_AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var TOKEN = 'token';
var AUTHENTICATED_USER = 'authenticatedUser';
var IS_AUTHENTICATED = 'isAuthenticated';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.authState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    AuthenticationService.prototype.validateLogin = function (cid, password) {
        var _this = this;
        return this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "/login", {
            cid: cid,
            password: password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            sessionStorage.setItem(AUTHENTICATED_USER, cid);
            sessionStorage.setItem(TOKEN, "Bearer " + data.access_token);
            _this.authState.next(true);
            return data;
        }));
    };
    AuthenticationService.prototype.getAuthenticatedUser = function () {
        return sessionStorage.getItem(AUTHENTICATED_USER);
    };
    AuthenticationService.prototype.getAuthenticatedToken = function () {
        if (this.getAuthenticatedUser()) {
            return sessionStorage.getItem(TOKEN);
        }
    };
    AuthenticationService.prototype.setAuthenticatedUser = function (username) {
        sessionStorage.setItem(AUTHENTICATED_USER, username);
        this.authState.next(true);
    };
    AuthenticationService.prototype.isUserLoggedIn = function () {
        if (this.getAuthenticatedUser()) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.logout = function () {
        sessionStorage.removeItem(AUTHENTICATED_USER);
        sessionStorage.removeItem(TOKEN);
        sessionStorage.removeItem('zoneId');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('requestType');
        sessionStorage.removeItem('qrUUID');
        sessionStorage.removeItem('transactionType');
        sessionStorage.removeItem('qrCodeId');
        sessionStorage.removeItem('shopId');
        sessionStorage.removeItem('subZoneId');
        sessionStorage.removeItem('dzongkhagId');
        this.authState.next(false);
    };
    AuthenticationService.prototype.getItem = function (key) {
        return sessionStorage.getItem(key);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/data.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/data.service.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");






var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // Handle API errors
    DataService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    DataService.prototype.authenticateUser = function (uid, pass) {
        var user = {
            user: uid,
            password: pass
        };
        return this.http
            .post(_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + "/login", user, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataService.prototype.getDzongkhags = function () {
        return this.http
            .get(_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + "/dzongkhags", this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataService.prototype.getZones = function (dzongkhagId) {
        return this.http
            .get(_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + "/zones?dzongkhag_id=" + dzongkhagId, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataService.prototype.getSubZones = function (zoneId) {
        return this.http
            .get(_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + "/sub-zones?zone_id=" + zoneId, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataService.prototype.validateQRCode = function (requestType, uuid) {
        return this.http
            .get(_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + "/validate-qr/" + requestType + "/" + uuid, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataService.prototype.postRegistration = function (item) {
        return this.http
            .post(_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + "/household-details", item, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataService.prototype.postUpdateHouseHold = function (item, houseHoldId) {
        return this.http
            .put(_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + "/household-details/" + houseHoldId, item, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataService.prototype.postCompletion = function (buildingId) {
        return this.http
            .post(_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + "/mark-building-completed/" + buildingId, '', this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataService.prototype.postNewBuilding = function (item) {
        return this.http
            .post(_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + "/buildings", item, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataService.prototype.postQRScan = function (item) {
        return this.http
            .post(_app_constants__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + "/scan", item, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/service/http-interceptor.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/http-interceptor.service.ts ***!
  \*****************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/service/authentication.service.ts");



var HttpInterceptorService = /** @class */ (function () {
    function HttpInterceptorService(authService) {
        this.authService = authService;
    }
    HttpInterceptorService.prototype.intercept = function (request, next) {
        var basicAuthHeaderString = this.authService.getAuthenticatedToken();
        var username = this.authService.getAuthenticatedUser();
        if (basicAuthHeaderString && username) {
            request = request.clone({
                setHeaders: {
                    Authorization: basicAuthHeaderString
                }
            });
        }
        return next.handle(request);
    };
    HttpInterceptorService.ctorParameters = function () { return [
        { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    HttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HttpInterceptorService);
    return HttpInterceptorService;
}());



/***/ }),

/***/ "./src/app/service/sound.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/sound.service.ts ***!
  \******************************************/
/*! exports provided: SoundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundService", function() { return SoundService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoundService = /** @class */ (function () {
    function SoundService() {
    }
    SoundService.prototype.successBeep = function () {
        var audio = new Audio();
        audio.src = 'assets/scan.mp3';
        audio.load();
        audio.play();
    };
    SoundService.prototype.failureBeep = function () {
        var audio = new Audio();
        audio.src = 'assets/errorsound.mp3';
        audio.load();
        audio.play();
    };
    SoundService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SoundService);
    return SoundService;
}());



/***/ }),

/***/ "./src/app/update-household/update-household.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/update-household/update-household.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.menu-spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.myLocation-button {\n  width: 42px;\n  border-radius: 23px;\n  height: 42px;\n  background: #ffffffa3;\n  margin-bottom: 20px;\n  border: none;\n}\n\n.leaflet-message {\n  margin-bottom: 20px;\n  font-size: 13px;\n  font-weight: bold;\n  color: white;\n  background-color: #df1515;\n  padding: 5px;\n  margin-right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLWhvdXNlaG9sZC9EOlxcUFJPSkVDVFNcXGNvdmlkXzE5XFxkcnVrbWFwXFxjb3ZpZG91dHBhc3MtYXBwLW1hc3Rlci9zcmNcXGFwcFxcdXBkYXRlLWhvdXNlaG9sZFxcdXBkYXRlLWhvdXNlaG9sZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXBkYXRlLWhvdXNlaG9sZC91cGRhdGUtaG91c2Vob2xkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO1VBQUEsY0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdXBkYXRlLWhvdXNlaG9sZC91cGRhdGUtaG91c2Vob2xkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWZvcm17XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVudS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLm15TG9jYXRpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDQycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIzcHg7XG4gIGhlaWdodDogNDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZmEzO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5sZWFmbGV0LW1lc3NhZ2Uge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZjE1MTU7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuIiwiLm15LWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1lbnUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5teUxvY2F0aW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiA0MnB4O1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBoZWlnaHQ6IDQycHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmZhMztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubGVhZmxldC1tZXNzYWdlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGYxNTE1O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/update-household/update-household.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/update-household/update-household.component.ts ***!
  \****************************************************************/
/*! exports provided: Qrcode, Household, UpdateHouseholdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Qrcode", function() { return Qrcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Household", function() { return Household; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateHouseholdComponent", function() { return UpdateHouseholdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "./src/app/confirm-dialog/confirm-dialog.component.ts");







var Qrcode = /** @class */ (function () {
    function Qrcode() {
    }
    return Qrcode;
}());

var Household = /** @class */ (function () {
    function Household() {
    }
    return Household;
}());

var UpdateHouseholdComponent = /** @class */ (function () {
    function UpdateHouseholdComponent(fb, route, dialog, dataService, router, snackBar) {
        this.fb = fb;
        this.route = route;
        this.dialog = dialog;
        this.dataService = dataService;
        this.router = router;
        this.snackBar = snackBar;
        this.disableForm = true;
        this.nationalities = [
            { id: 'BHUTANESE', name: 'Bhutanese' },
            { id: 'FOREIGN NATIONAL', name: 'Foreign National' }
        ];
        this.household = new Household();
    }
    UpdateHouseholdComponent.prototype.ngOnInit = function () {
        this.buildingId = this.route.snapshot.params['id'];
        this.reactiveForms();
        this.getQRDetails();
    };
    UpdateHouseholdComponent.prototype.reactiveForms = function () {
        this.updateForm = this.fb.group({
            mobileNoControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])],
            totalMaleControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            totalFemaleControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            ageOverFiftyControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            ageBelowTenControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            nationalityControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            emergencyMobileNoControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    };
    UpdateHouseholdComponent.prototype.getQRDetails = function () {
        var _this = this;
        var qrUUID = sessionStorage.getItem('qrUUID');
        this.dataService.validateQRCode('scan', qrUUID).subscribe(function (response) {
            console.log(response);
            if (response.status_code === 'ACTIVE') {
                _this.updateForm.controls.mobileNoControl.setValue(response.data.mobile_no);
                _this.updateForm.controls.totalMaleControl.setValue(response.data.total_male);
                _this.updateForm.controls.totalFemaleControl.setValue(response.data.total_female);
                _this.updateForm.controls.ageOverFiftyControl.setValue(response.data.total_above_60);
                _this.updateForm.controls.ageBelowTenControl.setValue(response.data.total_below_10);
                _this.updateForm.controls.nationalityControl.setValue(response.data.nationality);
                _this.updateForm.controls.emergencyMobileNoControl.setValue(response.data.emergency_contact_no);
                _this.qrId = response.data.qr_code_id;
                _this.houseHoldId = response.data.id;
                _this.disableForm = false;
            }
            else if (response.status_code === 'INVALID') {
                var confirmDialog = _this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], {
                    data: {
                        title: 'Alert!',
                        message: 'The QR code is invalid. Please reissue a new QR code?'
                    }
                });
                confirmDialog.afterClosed().subscribe(function (confirmResult) {
                    if (confirmResult) {
                        _this.router.navigate(['map']);
                        sessionStorage.setItem('requestType', 'SCAN');
                    }
                });
            }
            else {
                // tslint:disable-next-line: max-line-length
                _this.snackBar.open('Scan failed, this QR Code has not been registered with any household. Please register it and then scan.', '', {
                    duration: 5000,
                    verticalPosition: 'top',
                    panelClass: ['error-snackbar']
                });
            }
        }, function (err) {
            _this.snackBar.open('QR Code scan failed, please try again.', '', {
                duration: 5000,
                verticalPosition: 'top',
                panelClass: ['error-snackbar']
            });
        });
    };
    UpdateHouseholdComponent.prototype.update = function () {
        var _this = this;
        this.household.mobile_no = this.updateForm.get('mobileNoControl').value;
        this.household.total_male = this.updateForm.get('totalMaleControl').value;
        this.household.total_female = this.updateForm.get('totalFemaleControl').value;
        this.household.total_above_60 = this.updateForm.get('ageOverFiftyControl').value;
        this.household.total_below_10 = this.updateForm.get('ageBelowTenControl').value;
        this.household.nationality = this.updateForm.get('nationalityControl').value;
        this.household.emergency_contact_no = this.updateForm.get('emergencyMobileNoControl').value;
        this.household.id = this.houseHoldId;
        this.household.building_id = this.buildingId;
        this.household.qr_code_id = this.qrId;
        this.household.user_id = Number(sessionStorage.getItem('userId'));
        this.household._method = 'PUT';
        console.log(JSON.stringify(this.household));
        this.dataService.postUpdateHouseHold(this.household, this.houseHoldId).subscribe(function (response) {
            _this.snackBar.open('Household detail update has been successfully done', '', {
                duration: 5000,
                verticalPosition: 'top',
                panelClass: ['success-snackbar']
            });
            _this.updateForm.reset();
            _this.router.navigate(['dashboard']);
        }, function (error) {
            _this.snackBar.open('Household detail update failed, please try again', '', {
                duration: 5000,
                verticalPosition: 'top',
                panelClass: ['error-snackbar']
            });
            _this.disableForm = true;
        });
    };
    UpdateHouseholdComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    UpdateHouseholdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-household',
            template: __webpack_require__(/*! raw-loader!./update-household.component.html */ "./node_modules/raw-loader/index.js!./src/app/update-household/update-household.component.html"),
            styles: [__webpack_require__(/*! ./update-household.component.scss */ "./src/app/update-household/update-household.component.scss")]
        })
    ], UpdateHouseholdComponent);
    return UpdateHouseholdComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\PROJECTS\covid_19\drukmap\covidoutpass-app-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map