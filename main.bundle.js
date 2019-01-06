webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n.mat-dialog-container {\r\n  max-height: 70vh !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\r\n<div mat-app-background>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routing_routing_module__ = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_main_ui_module__ = __webpack_require__("../../../../../src/app/ui/main-ui.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__ui_main_ui_module__["a" /* MainUIModule */],
            __WEBPACK_IMPORTED_MODULE_3__routing_routing_module__["a" /* RoutingModule */]
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MATERIAL_COMPATIBILITY_MODE */], useValue: true }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/base/base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_loading_diag_component__ = __webpack_require__("../../../../../src/app/map/loading-diag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_login_component__ = __webpack_require__("../../../../../src/app/ui/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });



var BaseComponent = (function () {
    function BaseComponent() {
        this.subs = [];
    }
    BaseComponent.prototype.showLoadingDialog = function () {
        this.loadingDialog = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__map_loading_diag_component__["a" /* LoadingDialog */], { disableClose: true });
    };
    BaseComponent.prototype.hideLoadingDialog = function () {
        if (this.loadingDialog) {
            this.loadingDialog.close();
            this.loadingDialog = null;
        }
    };
    BaseComponent.prototype.ngOnInit = function () {
    };
    BaseComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeAll();
    };
    BaseComponent.prototype.unsubscribeAll = function () {
        __WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"](this.subs, function (sub) {
            sub.unsubscribe();
        });
    };
    BaseComponent.prototype.requireLogin = function () {
        var _this = this;
        this.subs.push(this.fireAuth.getUserObs().subscribe(function (user) {
            if (user) {
                if (_this.loginDiag) {
                    _this.loginDiag.close();
                }
                if (_this.fireAuth.currentUser) {
                    _this.postLoginSetup();
                }
                else {
                    _this.fireAuth.getAllUserInfo();
                    _this.subs.push(_this.fireAuth.onCurrentUserInfo.subscribe(function (user) {
                        _this.postLoginSetup();
                    }));
                }
            }
            else {
                _this.loginDiag = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__ui_login_component__["a" /* LoginComponent */], { data: { consumer: _this }, disableClose: true });
            }
        }));
    };
    BaseComponent.prototype.postLoginSetup = function () {
        console.log("BaseComponent post login, doing nothing.");
    };
    BaseComponent.prototype.login = function (creds) {
        var _this = this;
        this.errorMsg = "";
        console.log("BaseComponent logging in: ");
        console.log(creds);
        this.showLoadingDialog();
        this.fireAuth.login(creds.email, creds.password).then(function (user) {
            _this.hideLoadingDialog();
        }).catch(function (error) {
            _this.hideLoadingDialog();
            // Handle Errors here.
            console.log(error);
            var errorMessage = error.message;
            _this.errorMsg = errorMessage;
        });
    };
    BaseComponent.prototype.logout = function () {
        // this.mapComp.clearMaps();
        this.fireAuth.logout();
    };
    return BaseComponent;
}());

//# sourceMappingURL=base.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/address-dlg.component.html":
/***/ (function(module, exports) {

module.exports = "<form name='addrForm' #addrForm=\"ngForm\">\r\n  <div mat-dialog-content>\r\n    <!-- Normal dialog -->\r\n    <ng-container *ngIf=\"data.consumer.isEditStatus()\">\r\n      <div flex=\"\" layout=\"row\" layout-align=\"center center\" style=\"margin-top:5px;\">\r\n        <button *ngIf=\"data.consumer.currentGmapUrl && data.consumer.mapStarted\" mat-fab (click)=\"data.consumer.saveStatus()\" style=\"margin-right:5px;\"><mat-icon>save</mat-icon></button>\r\n        <a *ngIf=\"data.consumer.currentGmapUrl\" target=\"_blank\" href=\"{{ data.consumer.currentGmapUrl }}\" mat-fab style=\"margin-right:5px;\"><mat-icon svgIcon=\"google-map\"></mat-icon></a>\r\n        <a *ngIf=\"!data.consumer.hasMultiAdds() && !data.consumer.isUpdater()\" href=\"{{ data.consumer.currentFeedbackUrl }}\" target=\"_blank\" mat-fab style=\"margin-right:5px;\"><mat-icon svgIcon=\"edit-address\"></mat-icon></a>\r\n        <button *ngIf=\"data.consumer.isUpdater() && !data.consumer.hasMultiAdds()\" (click)=\"data.consumer.setEditingAddress();data.consumer.enableEditAddress()\" mat-fab style=\"margin-right:5px;\"><mat-icon svgIcon=\"edit-address\"></mat-icon></button>\r\n        <button mat-fab (click)=\"data.consumer.cancelAddrDlg()\"><mat-icon>cancel</mat-icon></button>\r\n      </div>\r\n      <mat-card *ngIf=\"data.consumer.mapStarted\">\r\n        <mat-card-content>\r\n          <div><h3>{{ data.consumer.currentAddrTitle }} </h3></div>\r\n          <div *ngIf=\"data.consumer.isNotAtHome() && data.consumer.hasDetail()\"><h4>Last Visited: {{ data.consumer.getLastVisited() | date:'EEE, hh:mm a, dd MMM y' }} </h4></div>\r\n          <div *ngIf=\"data.consumer.isUpdater() && data.consumer.currentAddr.addObj.tel\"><h5>PH: {{ data.consumer.currentAddr.addObj.tel }}</h5></div>\r\n          <mat-radio-group *ngIf=\"!data.consumer.hasMultiAdds() && data.consumer.selectedAddObj\" class=\"addrstat-radio-group\" name=\"stat\" [(ngModel)]=\"data.consumer.selectedAddObj.status\">\r\n            <mat-radio-button class=\"addrstat-radio-button\" *ngFor=\"let stat of data.consumer.addrStatuses\" [value]=\"stat.val\">\r\n              {{ stat.label }}\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n          <mat-list *ngIf=\"data.consumer.hasMultiAdds()\">\r\n            <mat-list-item *ngFor=\"let addObj of data.consumer.currentAddr.addObj\">\r\n              <button mat-raised-button color=\"accent\" (click)=\"data.consumer.selectAdd(addObj)\"> {{ data.consumer.getAddressTitle(addObj) }} </button>\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <mat-card *ngIf=\"!data.consumer.mapStarted\">\r\n        <mat-card-content>\r\n          <span><h3>{{ data.consumer.currentAddrTitle }} </h3></span>\r\n          <div>\r\n              If you are expecting to work on this map, please ask any map updaters to assign this map to an owner.\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </ng-container>\r\n    <!-- Admin Edit address mode version -->\r\n    <ng-container *ngIf=\"data.consumer.isEditModeAddress()\">\r\n      <div flex=\"\" layout=\"row\" layout-align=\"center center\" style=\"margin-top:5px;\">\r\n        <button mat-fab [disabled]=\"!addrForm.valid\" (click)=\"data.consumer.saveAddressEdit()\" style=\"margin-right:5px;\"><mat-icon>save</mat-icon></button>\r\n        <button mat-fab (click)=\"data.consumer.cancelAddrDlg()\"><mat-icon>cancel</mat-icon></button>\r\n      </div>\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <mat-list *ngIf=\"data.consumer.hasMultiAdds()\">\r\n            <mat-list-item *ngFor=\"let addObj of data.consumer.currentAddr.addObj\">\r\n              <button mat-raised-button color=\"accent\" (click)=\"data.consumer.selectAdd(addObj)\"> {{ data.consumer.getAddressTitle(addObj) }} </button>\r\n            </mat-list-item>\r\n          </mat-list>\r\n          <!-- Address edit mode -->\r\n          <div class=\"address-edit-container\" *ngIf=\"!data.consumer.hasMultiAdds() && data.consumer.selectedAddObj\">\r\n            <ng-container *ngFor=\"let addObj of data.consumer.selectedAddObj\">\r\n              <span><h3><a href=\"/map/{{addObj.mapId}}\" target=\"_blank\">{{ data.consumer.getAddressTitle(addObj) }}</a></h3></span>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Unit\" name=\"unit\" [(ngModel)]=\"addObj.unit\">\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"House Number\" name=\"hnum\" [(ngModel)]=\"addObj.hnum\" required>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Street\" name=\"st\" [(ngModel)]=\"addObj.st\" required>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Suburb\" name=\"burb\" [(ngModel)]=\"addObj.burb\" required>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Zipcode\" name=\"pcode\" [(ngModel)]=\"addObj.pcode\" required>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Latitude\" name=\"clat\" [(ngModel)]=\"addObj.clat\" required>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Longitude\" name=\"clong\" [(ngModel)]=\"addObj.clong\" required>\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Phone\" name=\"tel\" [(ngModel)]=\"addObj.tel\">\r\n              </mat-form-field>\r\n              <mat-divider></mat-divider>\r\n            </ng-container>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </ng-container>\r\n    <!-- Move Address -->\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/map/addresslist-dlg.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n\r\n      <span><h3>{{ data.consumer.title }} </h3></span>\r\n      <table width=\"100%\">\r\n        <tr>\r\n            <td><strong>Address</strong></td>\r\n            <td width=\"110px;\"><strong>Status</strong></td>\r\n        </tr>\r\n        <tr *ngFor=\"let addObj of data.consumer.currentAddrList\">\r\n          <td >\r\n            <a target=\"_blank\" href=\"{{ data.consumer.getGmapUrl(addObj) }}\" >\r\n              {{ data.consumer.getAddressTitle(addObj) }}\r\n            </a>\r\n          </td>\r\n          <td >\r\n            <mat-select [(ngModel)]=\"addObj.status\" [style.font-weight]=\"'bold'\" [style.background-color]=\"data.consumer.getStatusBgColor(addObj)\">\r\n              <ng-container *ngFor=\"let stat of data.consumer.addrStatuses\">\r\n                <mat-option [value]=\"stat.val\" >{{stat.label}}</mat-option>\r\n              </ng-container>\r\n            </mat-select>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n      <br/>\r\n      <button mat-fab *ngIf=\"data.consumer.mapStarted\" (click)=\"data.consumer.saveStatuses()\" ><mat-icon>save</mat-icon></button>\r\n      <button mat-fab (click)=\"data.consumer.closeAddrListDlg()\"><mat-icon>cancel</mat-icon></button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/map/loading-diag.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingDialog = (function () {
    function LoadingDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return LoadingDialog;
}());
LoadingDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'loading-dialog',
        template: "\n            <div mat-dialog-content>\n              <div class=\"flex-container\"\n               fxLayout=\"column\"\n               fxLayout.xs=\"column\"\n               fxLayoutAlign=\"center center\"\n               fxLayoutAlign.xs=\"start\">\n                  <img src=\"/assets/images/pie-loader.svg\">\n               </div>\n            </div>\n            "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["d" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["d" /* MatDialogRef */]) === "function" && _a || Object])
], LoadingDialog);

var _a;
//# sourceMappingURL=loading-diag.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/map-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <h2>\r\n    {{ appTitle }}\r\n  </h2>\r\n</div>\r\n<div>\r\n   <mat-toolbar [ngClass]=\"'bgc-blue-grey-900 whiteText marginTopBottom-2'\">\r\n      <userinfo></userinfo>\r\n      <span class=\"fill-remaining-space\"></span>\r\n      <span><a style=\"margin-right: 5px;\" mat-mini-fab [routerLink]=\"['/home']\" ><mat-icon >home</mat-icon></a></span>\r\n      <user-admin></user-admin>\r\n   </mat-toolbar>\r\n</div>\r\n<mat-tab-group >\r\n  <!-- <mat-tab label=\"Search\">\r\n    <map-search></map-search>\r\n  </mat-tab> -->\r\n  <mat-tab label=\"Add Data\">\r\n    <mat-radio-group class=\"radio-group\" [(ngModel)]=\"newDataType\" >\r\n      <mat-radio-button value=\"fsg\" class=\"radio-button\">FSG</mat-radio-button>\r\n      <mat-radio-button value=\"map\" class=\"radio-button\">Map</mat-radio-button>\r\n      <!-- <mat-radio-button value=\"[(ngModel)]=\"newDataType\" address\" class=\"radio-button\">Address</mat-radio-button> -->\r\n    </mat-radio-group>\r\n    <!-- -->\r\n    <div *ngIf=\"newDataType == 'fsg'\" style=\"padding: 10px;\">\r\n      <mat-form-field >\r\n        <input matInput placeholder=\"New FSG name\" [(ngModel)]=\"fsgName\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div *ngIf=\"newDataType == 'map'\" style=\"padding: 10px;\">\r\n      <mat-form-field >\r\n        <input matInput placeholder=\"New Map Name\" [(ngModel)]=\"mapName\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"FSG\" [(value)]=\"fsgName\">\r\n            <mat-option *ngFor=\"let fsg of fsgs\" [value]=\"fsg\">\r\n              {{fsg}}\r\n            </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div  style=\"padding: 10px;\">\r\n      <button mat-raised-button color=\"primary\" *ngIf=\"newDataType != null\" (click)=\"saveNewData()\">Save</button>\r\n      <div *ngIf=\"msg\">{{ msg }}</div>\r\n    </div>\r\n  </mat-tab>\r\n\r\n  <mat-tab label=\"Search Address\">\r\n    <form (ngSubmit)=\"searchData()\">\r\n      <!-- <mat-radio-group class=\"radio-group\" [(ngModel)]=\"searchDataType\" >\r\n        <mat-radio-button value=\"address\" class=\"radio-button\">Address</mat-radio-button>\r\n      </mat-radio-group> -->\r\n\r\n      <div *ngIf=\"searchDataType == 'address'\" style=\"padding: 10px; width:100%\">\r\n        <mat-form-field style=\"width: 400px;\">\r\n          <input matInput placeholder=\"Street Name (first few letters)\" [(ngModel)]=\"stName\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"isBusy\">\r\n        </mat-form-field>\r\n        <button type=\"submit\" mat-raised-button color=\"primary\" *ngIf=\"searchDataType != null\" (click)=\"searchData()\" [disabled]=\"isBusy\" >Search</button>\r\n      </div>\r\n\r\n      <div  style=\"padding: 10px;\">\r\n        <div *ngIf=\"msg\">{{ msg }}</div>\r\n      </div>\r\n\r\n      <table *ngIf=\"searchRes && searchRes.length > 0\" >\r\n        <thead>\r\n          <tr>\r\n            <td> Address </td>\r\n            <td> Suburb </td>\r\n            <td> Map </td>\r\n            <td> FSG </td>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let elem of searchRes\">\r\n            <td> {{ elem.fullSt }} </td>\r\n            <td> {{ elem.burb }} </td>\r\n            <td> <a [routerLink]=\"['/map', elem.mapId]\" target=\"_blank\"> {{ elem.map }} </a> </td>\r\n            <td> {{ elem.fsg }} </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n      <!-- <table mat-table [dataSource]=\"searchRes\" class=\"mat-elevation-z8\">\r\n        <ng-container matColumnDef=\"fullSt\">\r\n          <th mat-header-cell *matHeaderCellDef> Address </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.fullSt }} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"burb\">\r\n          <th mat-header-cell *matHeaderCellDef> Suburb </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.burb }} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"map\">\r\n          <th mat-header-cell *matHeaderCellDef> Map </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.map }} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"fsg\">\r\n          <th mat-header-cell *matHeaderCellDef> FSG </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.fsg }} </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table> -->\r\n    </form>\r\n  </mat-tab>\r\n\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "../../../../../src/app/map/map-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_service__ = __webpack_require__("../../../../../src/app/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__windowref_service__ = __webpack_require__("../../../../../src/app/map/windowref.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_base_component__ = __webpack_require__("../../../../../src/app/base/base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapAdminComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MapAdminComponent = (function (_super) {
    __extends(MapAdminComponent, _super);
    function MapAdminComponent(dialog, fireAuth, mapService, winRef) {
        var _this = _super.call(this) || this;
        _this.mapService = mapService;
        _this.winRef = winRef;
        _this.appTitle = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].app.title;
        _this.newDataType = null;
        _this.searchDataType = 'address';
        _this.isBusy = false;
        _this.displayedColumns = ["fullSt", "burb", "map", "fsg"];
        _this.mapBin = {};
        _this.mapIds = [];
        _this.dialog = dialog;
        _this.fireAuth = fireAuth;
        return _this;
    }
    MapAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapService.getAllFsgMaps(this.mapBin)
            .flatMap(function (mapId) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(null);
        })
            .debounce(function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(1000);
        })
            .subscribe(function () {
            __WEBPACK_IMPORTED_MODULE_5_lodash__["forOwn"](_this.mapBin, function (mapVal, mapId) {
                _this.mapIds.push(mapVal);
            });
            _this.fsgs = __WEBPACK_IMPORTED_MODULE_5_lodash__["uniq"](__WEBPACK_IMPORTED_MODULE_5_lodash__["map"](_this.mapIds, function (mapId) { return mapId.fsgName; }));
        });
        this.mapService.getMetadata().subscribe(function (meta) {
        });
    };
    MapAdminComponent.prototype.saveNewData = function () {
        var _this = this;
        var that = this;
        if (this.newDataType == "fsg") {
            if (__WEBPACK_IMPORTED_MODULE_5_lodash__["find"](this.fsgs, function (fsg) { return fsg == _this.fsgName; })) {
                this.msg = "Name already exists.";
                return;
            }
            this.isBusy = true;
            this.mapService.addNewFsg(this.fsgName, function () {
                that.msg = "FSG Successfully Added!";
                that.isBusy = false;
            });
        }
        if (this.newDataType == "map") {
            this.isBusy = true;
            this.mapService.addNewMap(this.fsgName, this.mapName, false, function () {
                that.msg = "Map Successfully Added!";
                that.isBusy = false;
            });
        }
    };
    MapAdminComponent.prototype.searchData = function () {
        var _this = this;
        this.isBusy = true;
        this.showLoadingDialog();
        var that = this;
        if (this.searchDataType == "address") {
            console.log("Finding: " + this.stName);
            this.mapService.findByStreet(this.stName, function (searchRes) {
                console.log(searchRes);
                _this.isBusy = false;
                var sRes = [];
                __WEBPACK_IMPORTED_MODULE_5_lodash__["forOwn"](searchRes, function (addObj, addId) {
                    addObj['addId'] = addId;
                    addObj['fullSt'] = (addObj.unit && addObj.unit != -9 ? addObj.unit + "/" : '') + " " + addObj.hnum + " " + addObj.st;
                    sRes.push(addObj);
                });
                _this.searchRes = sRes;
                _this.hideLoadingDialog();
            });
        }
    };
    return MapAdminComponent;
}(__WEBPACK_IMPORTED_MODULE_7__base_base_component__["a" /* BaseComponent */]));
MapAdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'map-admin-component',
        template: __webpack_require__("../../../../../src/app/map/map-admin.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__user_user_component__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__user_user_component__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__map_service__["a" /* MapService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__windowref_service__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__windowref_service__["a" /* WindowRef */]) === "function" && _d || Object])
], MapAdminComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=map-admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/map-edit-dlg.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n      <span><h3> Edit Map </h3></span>\r\n        <mat-card>\r\n          <mat-card-content>\r\n            <div>\r\n              <mat-form-field style=\"width: 300px;\">\r\n                <input matInput placeholder=\"Map Name\" [(ngModel)]=\"data.consumer.mapName\" [ngModelOptions]=\"{standalone: true}\" >\r\n              </mat-form-field>\r\n            </div>\r\n            <div>\r\n              <mat-form-field>\r\n                <mat-select placeholder=\"FSG\" [(value)]=\"data.consumer.fsgName\">\r\n                    <mat-option *ngFor=\"let fsg of data.consumer.fsgs\" [value]=\"fsg\">\r\n                      {{fsg}}\r\n                    </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n          </mat-card-content>\r\n          <mat-card-actions>\r\n            <button mat-fab (click)=\"data.consumer.saveMapEdit()\" ><mat-icon>save</mat-icon></button>\r\n            <button mat-fab (click)=\"data.consumer.closeMapEditDlg()\"><mat-icon>cancel</mat-icon></button>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n\r\n      <mat-dialog-actions>\r\n      </mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/map/map-returnconfirmdlg.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n  <mat-card>\r\n    <mat-card-title>\r\n      <h4>Are you sure want to return this map?</h4>\r\n    </mat-card-title>\r\n    <mat-card-subtitle>If you are Field Service Group overseer or you are assigned to take a group, consider reusing this map.</mat-card-subtitle>\r\n    <mat-card-actions>\r\n      <button mat-raised-button color=\"accent\" (click)=\"data.consumer.returnMap()\">Yes</button>\r\n      <button mat-raised-button color=\"accent\" (click)=\"data.consumer.closeConfirmDlg()\">No</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/map/map-share-dlg.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n  <form name='shareForm'>\r\n    <mat-card *ngIf=\"data.consumer.ownerMode\">\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          <h4>{{data.consumer.ownerCardTitle}}</h4>\r\n        </mat-card-title>\r\n        <mat-card-subtitle>{{ data.consumer.ownerCardDesc }}</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <mat-checkbox [(ngModel)]=\"data.consumer.isPersonal\" name=\"isPersonal\" (click)=\"data.consumer.togglePersonal()\">Personal Territory</mat-checkbox>\r\n        <tag-input [(ngModel)]=\"data.consumer.userList\" name=\"ownerDlg\"\r\n           [editable]=\"true\" [identifyBy]=\"'id'\" [displayBy]=\"'name'\"\r\n           [maxItems]=\"1\" [onlyFromAutocomplete]=\"true\" [placeholder]=\"data.consumer.placeHolderTxt\" [secondaryPlaceholder]=\"data.consumer.placeHolderTxt\">\r\n           <tag-input-dropdown [appendToBody]=\"false\" [autocompleteItems]='data.consumer.mapUsers' [identifyBy]=\"'$key'\" [displayBy]=\"'name'\"></tag-input-dropdown>\r\n        </tag-input>\r\n        <mat-form-field>\r\n          <textarea matInput placeholder=\"Additional notes\" matTextareaAutosize matAutosizeMinRows=\"1\"\r\n           matAutosizeMaxRows=\"10\" [(ngModel)]=\"data.consumer.notes\" name=\"notes\"></textarea>\r\n        </mat-form-field>\r\n        <!-- <mat-form-field>\r\n           <input type=\"text\" matInput name=\"selUser\" [(ngModel)]=\"data.consumer.selUser\"  [matAutocomplete]=\"autoPub\">\r\n        </mat-form-field>\r\n        <mat-autocomplete #autoPub=\"matAutocomplete\" [displayWith]=\"displayFn\">\r\n           <mat-option *ngFor=\"let mapUser of data.consumer.mapUsers\" [value]=\"mapUser\">\r\n             {{ mapUser.userInfoObj.name }}\r\n           </mat-option>\r\n        </mat-autocomplete> -->\r\n        <!-- <button mat-mini-fab (click)=\"data.consumer.done()\"><mat-icon>person_add</mat-icon></button> -->\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card *ngIf=\"!data.consumer.ownerMode\">\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          <h4>{{data.consumer.shareCardTitle}}</h4>\r\n        </mat-card-title>\r\n        <mat-card-subtitle>{{ data.consumer.shareCardDesc }}</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <tag-input [(ngModel)]=\"data.consumer.userList\" name=\"ownerDlg\"\r\n           [editable]=\"true\" [identifyBy]=\"'id'\" [displayBy]=\"'name'\" (onAdd)=\"data.consumer.onItemAdded($event)\" (onRemove)=\"data.consumer.onItemRemove($event)\"\r\n           [onlyFromAutocomplete]=\"true\" [placeholder]=\"data.consumer.placeHolderTxt\" [secondaryPlaceholder]=\"data.consumer.placeHolderTxt\">\r\n           <tag-input-dropdown [appendToBody]=\"false\" [autocompleteItems]='data.consumer.mapUsers' [identifyBy]=\"'$key'\" [displayBy]=\"'name'\"></tag-input-dropdown>\r\n        </tag-input>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </form>\r\n  <mat-dialog-actions>\r\n    <button mat-mini-fab (click)=\"data.consumer.done()\"><mat-icon>save</mat-icon></button>\r\n    <button mat-mini-fab (click)=\"data.consumer.cancel()\"><mat-icon>cancel</mat-icon></button>\r\n  </mat-dialog-actions>\r\n  <div>\r\n    {{data.consumer.errorMsg}}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/map/map-share.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-mini-fab (click)=\"showShareDlg(true)\" *ngIf=\"canAssignOwner()\"><mat-icon>assignment_ind</mat-icon></button>\r\n<button mat-mini-fab (click)=\"showShareDlg(false)\" *ngIf=\"canShare()\"><mat-icon>share</mat-icon></button>\r\n<button mat-mini-fab (click)=\"confirmReturnDlg()\" *ngIf=\"canReturn()\"><mat-icon>assignment_return</mat-icon></button>\r\n"

/***/ }),

/***/ "../../../../../src/app/map/map-share.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_service__ = __webpack_require__("../../../../../src/app/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_base_component__ = __webpack_require__("../../../../../src/app/base/base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__windowref_service__ = __webpack_require__("../../../../../src/app/map/windowref.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_es6__ = __webpack_require__("../../../../moment-es6/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_es6___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment_es6__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapShareComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MapShareDlgComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MapReturnConfirmDlgComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var MapShareComponent = (function (_super) {
    __extends(MapShareComponent, _super);
    function MapShareComponent(dialog, fireAuth, mapService, winRef) {
        var _this = _super.call(this) || this;
        _this.mapService = mapService;
        _this.winRef = winRef;
        _this.campaignMode = false;
        _this.mapUsers = [];
        _this.newUsersList = [];
        _this.removeUsersList = [];
        _this.curOwner = null;
        _this.placeHolderTxt = 'Type and select name';
        _this.ownerCardTitle = 'Map Owner';
        _this.ownershipPersonalDuration = '3 months';
        _this.ownershipDuration = '2 weeks';
        _this.ownerCardDesc = "An owner can use/share the map within " + _this.ownershipDuration + " from the time of assignment. After this time, the map will be removed from the owner's assignment list. Please reassign ownership if needed. A map can only have one owner. Removing an owner, will remove all users.";
        _this.defaultOwnerCardDesc = _this.ownerCardDesc;
        _this.ownershipPersonalDesc = "Please consult the Service Overseer when assigning personal territories. An owner can use/share the map within " + _this.ownershipPersonalDuration + " from the time of assignment. After this time, the map will be removed from the owner's assignment list. Please reassign ownership if needed. A map can only have one owner. Removing an owner, will remove all users.";
        _this.shareCardTitle = 'Map Users';
        _this.shareCardDesc = "A user will have access to the map within the day of the assignment. After this time, the map will be removed from the user's list. Please reshare again if needed.";
        _this.ownerMode = false; // whether to set owners or sharers
        _this.dialog = dialog;
        _this.fireAuth = fireAuth;
        return _this;
    }
    MapShareComponent.prototype.showShareDlg = function (ownerMode) {
        var _this = this;
        if (ownerMode === void 0) { ownerMode = true; }
        this.ownerMode = ownerMode;
        this.subs.push(this.fireAuth.getAllUsersList().subscribe(function (userList) {
            _this.mapUsers = userList;
            _this.isPersonal = _this.map.assgnObj.isPersonal;
            _this.notes = _this.map.assgnObj.notes;
            if (_this.ownerMode && _this.map.hasOwner()) {
                _this.curOwner = _this.map.getOwner();
                _this.userList = [_this.curOwner];
            }
            else {
                _this.userList = _this.map.getUsersList();
            }
            if (!_this.shareDlg) {
                _this.shareDlg = _this.dialog.open(MapShareDlgComponent, {
                    data: { consumer: _this },
                    disableClose: true
                });
            }
        }));
    };
    MapShareComponent.prototype.done = function () {
        this.showLoadingDialog();
        if (this.ownerMode) {
            if (__WEBPACK_IMPORTED_MODULE_7_lodash__["isEmpty"](this.userList)) {
                this.mapService.removeOwner(this.map, this.curOwner, this.notes);
                this.mapService.removeUsers(this.map, this.map.getUsersList());
            }
            else {
                if (this.isPersonal) {
                    // set to 3 months from now...
                    this.userList[0].expiry = __WEBPACK_IMPORTED_MODULE_6_moment_es6___default()().hour(18).minute(0).second(0).add(3, 'months').toDate(); // set to expire at 8 pm eery time..
                }
                else {
                    // set to 2 weeks from now...
                    this.userList[0].expiry = __WEBPACK_IMPORTED_MODULE_6_moment_es6___default()().hour(18).minute(0).second(0).add(16, 'days').toDate(); // set to expire at 8 pm eery time..
                }
                this.mapService.updateOwner(this.map, this.userList[0], this.curOwner, this.isPersonal, this.notes);
            }
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_7_lodash__["isEmpty"](this.userList)) {
                console.log("Remove userslist");
                console.log(this.removeUsersList);
                this.mapService.removeUsers(this.map, this.removeUsersList);
            }
            else {
                // set to 1 day for all new items...
                __WEBPACK_IMPORTED_MODULE_7_lodash__["forEach"](this.newUsersList, function (entry) {
                    entry.expiry = __WEBPACK_IMPORTED_MODULE_6_moment_es6___default()().hour(20).minute(0).second(0).add(1, 'day').toDate(); // 8 pm too
                });
                this.mapService.removeUsers(this.map, this.removeUsersList);
                this.mapService.updateUsers(this.map, this.userList);
            }
        }
        this.closeShareDialog();
        this.hideLoadingDialog();
    };
    MapShareComponent.prototype.cancel = function () {
        this.closeShareDialog();
    };
    MapShareComponent.prototype.closeShareDialog = function () {
        this.shareDlg.close();
        this.shareDlg = null;
    };
    MapShareComponent.prototype.canAssignOwner = function () {
        if (this.map.mapObj.fsg == 'Queue') {
            return false;
        }
        var doneCtr = this.map.mapObj.doneCtr;
        if (this.campaignMode) {
            doneCtr = this.map.mapObj.campaignCtr;
        }
        if (doneCtr > 0 && (!this.fireAuth.currentUser.isAdmin() && !this.map.hasOwner())) {
            return false;
        }
        return this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater();
    };
    MapShareComponent.prototype.canShare = function () {
        return this.map.hasOwner(); //&& (this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.userInfoObj.$key == this.map.getOwner().id);
    };
    MapShareComponent.prototype.canReturn = function () {
        return this.map.hasOwner() && this.map.isOwner(this.fireAuth.currentUser);
    };
    MapShareComponent.prototype.confirmReturnDlg = function () {
        this.confirmDlg = this.dialog.open(MapReturnConfirmDlgComponent, {
            data: { consumer: this },
            disableClose: true
        });
    };
    MapShareComponent.prototype.closeConfirmDlg = function () {
        this.confirmDlg.close();
        this.confirmDlg = null;
    };
    MapShareComponent.prototype.returnMap = function () {
        if (this.fireAuth.currentUser.isAdmin()) {
            this.mapService.removeUsers(this.map, this.map.getUsersList());
            this.mapService.updateUsers(this.map, []);
            this.mapService.removeOwner(this.map, this.map.getOwner());
        }
        else {
            if (this.map.isOwner(this.fireAuth.currentUser)) {
                this.mapService.removeUsers(this.map, this.map.getUsersList());
                this.mapService.updateUsers(this.map, []);
                this.mapService.removeOwner(this.map, this.map.getOwner());
            }
        }
        this.closeConfirmDlg();
    };
    MapShareComponent.prototype.onItemAdded = function (item) {
        this.newUsersList.push(item);
        __WEBPACK_IMPORTED_MODULE_7_lodash__["remove"](this.removeUsersList, function (entry) {
            return entry.id == item.id;
        });
    };
    MapShareComponent.prototype.onItemRemove = function (item) {
        console.log(item);
        __WEBPACK_IMPORTED_MODULE_7_lodash__["remove"](this.newUsersList, function (entry) {
            return entry.id == item.id;
        });
        this.removeUsersList.push(item);
    };
    MapShareComponent.prototype.togglePersonal = function () {
        if (this.isPersonal) {
            this.ownerCardDesc = this.ownershipPersonalDesc;
        }
        else {
            this.ownerCardDesc = this.defaultOwnerCardDesc;
        }
    };
    return MapShareComponent;
}(__WEBPACK_IMPORTED_MODULE_3__base_base_component__["a" /* BaseComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__map_service__["b" /* Map */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__map_service__["b" /* Map */]) === "function" && _a || Object)
], MapShareComponent.prototype, "map", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], MapShareComponent.prototype, "campaignMode", void 0);
MapShareComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mapshare',
        template: __webpack_require__("../../../../../src/app/map/map-share.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__user_user_component__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_user_component__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__map_service__["a" /* MapService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__windowref_service__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__windowref_service__["a" /* WindowRef */]) === "function" && _e || Object])
], MapShareComponent);

var MapShareDlgComponent = (function () {
    function MapShareDlgComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    MapShareDlgComponent.prototype.displayFn = function (mapUser) {
        return mapUser ? mapUser.userInfoObj.name : "";
    };
    return MapShareDlgComponent;
}());
MapShareDlgComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'share-dlg',
        template: __webpack_require__("../../../../../src/app/map/map-share-dlg.component.html")
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialogRef */]) === "function" && _f || Object, Object])
], MapShareDlgComponent);

var MapReturnConfirmDlgComponent = (function () {
    function MapReturnConfirmDlgComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    return MapReturnConfirmDlgComponent;
}());
MapReturnConfirmDlgComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'share-dlg',
        template: __webpack_require__("../../../../../src/app/map/map-returnconfirmdlg.component.html")
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialogRef */]) === "function" && _g || Object, Object])
], MapReturnConfirmDlgComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=map-share.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar [ngClass]=\"'bgc-blue-grey-900 whiteText marginTopBottom-2'\">\r\n  <span><h3>{{title}}</h3></span>\r\n  <span class=\"fill-remaining-space\"></span>\r\n  <!-- <span><button mat-mini-fab (click)=\"startMap()\" *ngIf=\"currentMap\" style=\"margin-right: 10px;\"><mat-icon>play_arrow</mat-icon></button></span> -->\r\n  <span>\r\n    <button *ngIf=\"mapId != 'all' && isUpdater() && !isEditModeMoveAddress()\" mat-mini-fab (click)=\"addNewAddressMode()\" style=\"margin-right: 5px;\" >\r\n      <mat-icon>add_location</mat-icon>\r\n    </button>\r\n    <button *ngIf=\"mapId != 'all' && isUpdater() && !isEditModeMoveAddress() && !mapStarted\" mat-mini-fab (click)=\"startMoveAddressMode()\" style=\"margin-right: 5px;\" >\r\n      <mat-icon>transform</mat-icon>\r\n    </button>\r\n    <button *ngIf=\"isUpdater() && isEditModeMoveAddress()\" mat-mini-fab (click)=\"stopMoveAddressMode()\" style=\"margin-right: 5px;\" >\r\n      <mat-icon>cancel</mat-icon>\r\n    </button>\r\n    <button mat-mini-fab (click)=\"toggleShowLocation()\" style=\"margin-right: 5px;\" >\r\n      <mat-icon *ngIf=\"!showLocation\">location_disabled</mat-icon>\r\n      <mat-icon *ngIf=\"showLocation && !locationSearching\">my_location</mat-icon>\r\n      <mat-icon *ngIf=\"showLocation && locationSearching\">location_searching</mat-icon>\r\n    </button>\r\n  </span>\r\n  <span><button mat-mini-fab (click)=\"fitMap()\" ><mat-icon svgIcon=\"fit-map\"></mat-icon></button></span>\r\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\" >\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\" >\r\n    <button mat-menu-item (click)=\"viewList()\">\r\n      <mat-icon>view_list</mat-icon>\r\n      <span>List View</span>\r\n    </button>\r\n    <a href=\"{{ addUrl }}\" target=\"_blank\" mat-menu-item>\r\n      <mat-icon svgIcon=\"add-address\"></mat-icon>\r\n      <span>New Address</span>\r\n    </a>\r\n    <button mat-menu-item (click)=\"editMap()\" *ngIf=\"isUpdater() && this.mapId != 'all'\">\r\n      <mat-icon>edit</mat-icon>\r\n      <span>Edit Map</span>\r\n    </button>\r\n    <a mat-menu-item [routerLink]=\"['/home']\" >\r\n      <mat-icon>home</mat-icon>\r\n      <span>Home</span>\r\n    </a>\r\n  </mat-menu>\r\n</mat-toolbar>\r\n<mat-card *ngIf=\"isEditModeMoveAddress() && this.selectedAddresses.length > 0\">\r\n  <mat-card-title>Move Address(es)</mat-card-title>\r\n  <mat-card-content>\r\n    <p>\r\n      <mat-chip-list selectable=\"false\">\r\n        <mat-chip *ngFor=\"let addr of selectedAddresses\">{{ getAddressTitle(addr) }} </mat-chip>\r\n      </mat-chip-list>\r\n    </p>\r\n    <p>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Move to Map ID\" name=\"findMapId\" [(ngModel)]=\"findMapId\" required>\r\n      </mat-form-field>\r\n      <button mat-mini-fab (click)=\"findTargetMap()\" style=\"margin-right: 5px;\">\r\n        <mat-icon>search</mat-icon>\r\n      </button>\r\n    </p>\r\n    <p>\r\n      <span *ngIf=\"targetMapObj\"> Moving to map: {{ targetMapObj.terId }} - {{ targetMapObj.name }} </span>\r\n    </p>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button [disabled]=\"!targetMapObj\" mat-mini-fab (click)=\"moveSelectedAddresses()\" style=\"margin-right: 5px;\" >\r\n      <mat-icon>save</mat-icon>\r\n    </button>\r\n    <button mat-mini-fab (click)=\"stopMoveAddressMode()\" style=\"margin-right: 5px;\" >\r\n      <mat-icon>cancel</mat-icon>\r\n    </button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n<!-- <mat-toolbar [ngClass]=\"'bgc-yellow-100 marginTopBottom-2'\" *ngIf=\"isAdmin()\">\r\n  <span><mat-button-toggle style=\"margin-right: 10px;\" (change)=\"toggleShowInfo($event)\"><mat-icon>info</mat-icon></mat-button-toggle></span>\r\n  <span class=\"fill-remaining-space\"></span>\r\n</mat-toolbar> -->\r\n<agm-map [latitude]=\"centerLat\" [longitude]=\"centerLng\" [zoom]=\"zoom\" [ngStyle]=\"{'height': height}\">\r\n  <marker-cluster #markerCluster [onAddLocMarker]=\"onAddLocMarker\" [onFit]=\"onFit\" [minimumClusterSize]=\"minimumClusterSize\" [onAddressClick]=\"onAddressClick\" [onUpdate]=\"mapService.onUpdate\" [onSetShowClusterInfo]=\"onToggleShowInfo\" [points]=\"points\" ></marker-cluster>\r\n</agm-map>\r\n"

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_service__ = __webpack_require__("../../../../../src/app/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__windowref_service__ = __webpack_require__("../../../../../src/app/map/windowref.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base_base_component__ = __webpack_require__("../../../../../src/app/base/base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ui_home_component__ = __webpack_require__("../../../../../src/app/ui/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment_es6__ = __webpack_require__("../../../../moment-es6/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_moment_es6___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_moment_es6__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MapEditDlgComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddressDlgComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddressListDlgComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













var MapComponent = (function (_super) {
    __extends(MapComponent, _super);
    function MapComponent(mapService, dialog, fireAuth, route, winRef, iconRegistry, sanitizer) {
        var _this = _super.call(this) || this;
        _this.mapService = mapService;
        _this.route = route;
        _this.winRef = winRef;
        _this.currentLocation = {
            addObj: { clat: null, clang: null },
            // iconUrl: '/assets/images/ic_my_location_red_24px.svg',
            iconUrl: '/assets/images/my_location_1.svg',
            pushed: false
        };
        _this.points = [];
        _this.centerLat = -27.5518075;
        _this.centerLng = 153.0807544;
        _this.zoom = 13;
        _this.height = '700px';
        _this.heightPadding = 50;
        _this.maxWaitTries = 20;
        _this.maxWaitCtr = 0;
        _this.sameCtr = 0;
        _this.sameMax = 10;
        _this.checkInterval = 1000;
        _this.showInfo = false;
        _this.onToggleShowInfo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onAddressClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onAddLocMarker = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onPosMarker = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.onFit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.minimumClusterSize = 2;
        _this.shortenTitleWidth = 1024;
        _this.triggerUpdate = false;
        _this.mapStarted = false;
        _this.showLocation = false;
        _this.locationSearching = false;
        _this.EDIT_MODE_STATUS = 'editStatus';
        _this.EDIT_MODE_ADDRESS = 'editAddress';
        _this.EDIT_MODE_MOVE_ADDRESS = 'moveAddress';
        _this.statusCache = [];
        _this.ADDRESS_UNSELECTED_ICON = '/assets/images/place-markers/home-unselected.svg';
        _this.ADDRESS_SELECTED_ICON = '/assets/images/place-markers/home-selected.svg';
        _this.selectedAddrMarkers = [];
        _this.selectedAddresses = [];
        _this.lastSelectedAddress = null;
        _this.findMapId = null;
        _this.targetMapId = null;
        _this.targetMapObj = null;
        _this.mapBin = {};
        _this.mapIds = [];
        _this.dialog = dialog;
        _this.fireAuth = fireAuth;
        winRef.redirHttps();
        _this.requireLogin();
        iconRegistry.addSvgIcon('fit-map', sanitizer.bypassSecurityTrustResourceUrl('/assets/images/fitmap.svg'));
        iconRegistry.addSvgIcon('add-address', sanitizer.bypassSecurityTrustResourceUrl('/assets/images/add_address.svg'));
        _this.editMode = _this.EDIT_MODE_STATUS;
        return _this;
    }
    MapComponent.prototype.setEditingAddress = function () {
        this.editMode = this.EDIT_MODE_ADDRESS;
    };
    MapComponent.prototype.isEditModeAddress = function () {
        return this.editMode == this.EDIT_MODE_ADDRESS;
    };
    MapComponent.prototype.setEditModeMoveAddress = function () {
        this.editMode = this.EDIT_MODE_MOVE_ADDRESS;
    };
    MapComponent.prototype.isEditModeMoveAddress = function () {
        return this.editMode == this.EDIT_MODE_MOVE_ADDRESS;
    };
    MapComponent.prototype.setEditingStatus = function () {
        this.editMode = this.EDIT_MODE_STATUS;
    };
    MapComponent.prototype.isEditStatus = function () {
        return this.editMode == this.EDIT_MODE_STATUS;
    };
    MapComponent.prototype.adjustHeight = function () {
        this.numHeight = (this.winRef.nativeWindow.innerHeight - this.heightPadding);
        this.height = this.numHeight + 'px';
    };
    MapComponent.prototype.postLoginSetup = function () {
        var _this = this;
        // check the route...
        console.log(this.winRef.nativeWindow.innerHeight);
        this.adjustHeight();
        if (!this.mapId) {
            this.title = 'Loading...';
            this.subs.push(this.route.params.subscribe(function (params) {
                _this.mapId = params['id'];
                _this.mapService.getMetadata().subscribe(function (meta) {
                    _this.loadMaps();
                    _this.loadPreferences();
                });
            }));
        }
        else {
            console.log("Post login set up triggered, already loaded, doing nothing.");
        }
    };
    MapComponent.prototype.loadPreferences = function () {
        var _this = this;
        this.fireAuth.getUserInfo(this.fireAuth.currentUser).subscribe(function (user) {
            if (user.userInfoObj.geo) {
                var geoLocEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
                var lastSaved_1 = null;
                geoLocEmitter.subscribe(function (pos) {
                    var now = __WEBPACK_IMPORTED_MODULE_12_moment_es6___default()();
                    if (lastSaved_1 != null && now.isBefore(lastSaved_1.add(1, 'minute'))) {
                        return;
                    }
                    lastSaved_1 = now;
                    _this.fireAuth.saveLoc(_this.fireAuth.currentUser.userObj.uid, pos);
                });
                _this.mapService.enableGeolocation(geoLocEmitter);
            }
            _this.fireAuth.saveOnlineStat(_this.fireAuth.currentUser);
        });
    };
    MapComponent.prototype.ngOnDestroy = function () {
        this.clearMaps();
        this.unsubscribeAll();
    };
    MapComponent.prototype.toggleShowInfo = function () {
        this.showInfo = !this.showInfo;
        console.log("Emitting: " + this.showInfo);
        this.onToggleShowInfo.emit(this.showInfo);
    };
    MapComponent.prototype.toggleShowLocation = function () {
        this.showLocation = !this.showLocation;
        if (this.showLocation) {
            this.showCurrentLoc();
        }
        else {
            this.mapService.disableGeolocation(this.onPosMarker);
        }
    };
    MapComponent.prototype.fitMap = function () {
        this.onFit.emit({});
    };
    MapComponent.prototype.accessDenied = function () {
        this.title = "Access Denied";
        this.hideLoadingDialog();
        this.notifyDlg = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__ui_home_component__["b" /* NotifyDlgComponent */], {
            data: { consumer: this, title: "Access denied", subtitle: "You don't have privileges to access this page. If you think you should have access, please contact the administrator.", confirmText: "Go Home" },
            disableClose: true
        });
    };
    MapComponent.prototype.confirmNotification = function () {
        this.notifyDlg.close();
        this.winRef.location('/home');
    };
    MapComponent.prototype.saveAddressEdit = function () {
        var _this = this;
        this.mapService.saveAddr(this.selectedAddObj, this.mapId == 'all' ? null : this.currentMap, null, function () {
            _this.selectedAddObj = null;
            _this.closeAddrDlg();
            _this.resetEditMode();
        });
    };
    MapComponent.prototype.startMoveAddressMode = function () {
        var _this = this;
        this.setEditModeMoveAddress();
        __WEBPACK_IMPORTED_MODULE_5_lodash__["each"](this.points, function (point) {
            _this.statusCache.push(point.marker.icon.url);
            point.marker.icon.url = _this.ADDRESS_UNSELECTED_ICON;
        });
        this.mapService.triggerUpdate();
    };
    MapComponent.prototype.stopMoveAddressMode = function () {
        var _this = this;
        this.resetEditMode();
        __WEBPACK_IMPORTED_MODULE_5_lodash__["each"](this.points, function (point, idx) {
            point.marker.icon.url = _this.statusCache[idx];
        });
        this.statusCache = [];
        this.selectedAddresses = [];
        this.selectedAddrMarkers = [];
        this.mapService.triggerUpdate();
    };
    MapComponent.prototype.addNewAddressMode = function () {
        this.selectedAddObj = [{
                unit: '',
                hnum: '',
                st: '',
                burb: '',
                clat: '',
                clong: '',
                pcode: '',
                tel: ''
            }];
        this.setEditingAddress();
        this.showAddrDlg();
    };
    MapComponent.prototype.enableEditAddress = function () {
        if (this.isEditModeAddress()) {
            if (this.hasMultiAdds()) {
                this.selectedAddObj = __WEBPACK_IMPORTED_MODULE_5_lodash__["map"](this.currentAddr.addObj, function (addObj) {
                    var clone = __WEBPACK_IMPORTED_MODULE_5_lodash__["clone"](addObj);
                    clone.addId = addObj.$key;
                    if (__WEBPACK_IMPORTED_MODULE_5_lodash__["isUndefined"](clone.unit) || clone.unit == -9) {
                        clone.unit = '';
                    }
                });
            }
            else {
                var clone = __WEBPACK_IMPORTED_MODULE_5_lodash__["clone"](this.currentAddr.addObj);
                clone.addId = this.currentAddr.addObj.$key;
                if (__WEBPACK_IMPORTED_MODULE_5_lodash__["isUndefined"](clone.unit) || clone.unit == -9) {
                    clone.unit = '';
                }
                this.selectedAddObj = [clone];
            }
        }
        console.log(this.selectedAddObj);
        this.showAddrDlg();
    };
    MapComponent.prototype.loadMaps = function () {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_5_lodash__["isEmpty"](this.points)) {
            console.log("Maps already loaded");
            return;
        }
        var mapBase = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].app.mapBase;
        // this.showCurrentLoc();
        this.showLoadingDialog();
        if (this.mapId == 'all') {
            this.setEditingAddress();
            if (this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater()) {
                this.mapService.loadAllMapsWithMarkers(mapBase);
                // // listen for onClick events for 'all maps'
                // this.subs.push(this.onAddressClick.subscribe(data => {
                //   console.log(data);
                //   this.currentAddr = data.addrMarker;
                //   this.enableEditAddress();
                // }));
            }
            else {
                this.accessDenied();
                return;
            }
        }
        else {
            // this.mapService.loadMapMarkers(mapBase, this.mapId, true);
            this.loadSingleMap(mapBase);
            return;
        }
        var subs = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(this.checkInterval).subscribe(function (n) {
            if (_this.mapService.mapMarkers.length != _this.curPointsCtr) {
                _this.curPointsCtr = _this.mapService.mapMarkers.length;
                _this.sameCtr = 0;
            }
            else {
                _this.maxWaitCtr++;
                _this.sameCtr++;
                if (_this.maxWaitCtr > _this.maxWaitTries || _this.sameCtr > _this.sameMax) {
                    console.log("Got all addresses, rendering...");
                    console.log("Total no. maps: " + _this.mapService.maps.length);
                    console.log("Total no. of addresses: " + _this.mapService.mapMarkers.length);
                    _this.points = _this.mapService.mapMarkers;
                    subs.unsubscribe();
                    _this.hideLoadingDialog();
                    _this.mapService.trackUpdates = true;
                    _this.onComplete.emit({});
                    if (_this.triggerUpdate)
                        _this.mapService.triggerUpdate();
                    if (_this.mapService.maps.length > 1) {
                        if (_this.mapId == 'all') {
                            _this.title = 'All Maps';
                        }
                        else {
                            // TODO: decide what the title
                        }
                    }
                    else {
                        _this.title = _this.mapService.maps[0].terId + " - " + _this.mapService.maps[0].name + " " + (_this.mapService.isNormalMode() ? '' : '::Campaign');
                        if (_this.winRef.nativeWindow.innerWidth <= _this.shortenTitleWidth) {
                            _this.title = "Map " + _this.mapService.maps[0].terId + (_this.mapService.isNormalMode() ? '' : '::Campaign');
                        }
                    }
                    _this.subs.push(_this.onAddressClick.subscribe(function (data) {
                        console.log(data);
                        _this.currentAddr = data.addrMarker;
                        _this.handleAddressClick();
                    }));
                }
            }
        });
    };
    MapComponent.prototype.canOpenMap = function (map) {
        // if (this.fireAuth.currentUser) {
        //   console.log(map.isUser(this.fireAuth.currentUser) || this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater());
        // }
        return this.fireAuth.currentUser && (map.isUser(this.fireAuth.currentUser) || this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater());
    };
    MapComponent.prototype.loadSingleMap = function (mapBase) {
        var _this = this;
        this.minimumClusterSize = 200;
        this.subs.push(this.mapService.loadMapMarkersObs(mapBase, this.mapId).subscribe(function (map) {
            console.log("Map: ");
            console.log(map);
            if (!_this.canOpenMap(map)) {
                _this.accessDenied();
                return;
            }
            _this.mapStarted = map.assgnObj.$exists() && !__WEBPACK_IMPORTED_MODULE_5_lodash__["isEmpty"](map.assgnObj.started);
            // TODO: Check if there are any addresses that are empty
            // sort the addresses
            map.addresses = __WEBPACK_IMPORTED_MODULE_5_lodash__["sortBy"](map.addresses, [function (addr) {
                    return (__WEBPACK_IMPORTED_MODULE_5_lodash__["isUndefined"](addr.lSt) || __WEBPACK_IMPORTED_MODULE_5_lodash__["isNull"](addr.lSt) ? __WEBPACK_IMPORTED_MODULE_5_lodash__["toLower"](addr.st) : addr.lSt);
                }, function (addr) {
                    return __WEBPACK_IMPORTED_MODULE_5_lodash__["toSafeInteger"](addr.hnum);
                }, function (addr) {
                    return !addr.unit || addr.unit == -9 ? 0 : __WEBPACK_IMPORTED_MODULE_5_lodash__["toSafeInteger"](addr.unit);
                }]);
            _this.currentMap = map;
            if (_this.currentAddrList) {
                _this.currentAddrList = __WEBPACK_IMPORTED_MODULE_5_lodash__["cloneDeep"](_this.currentMap.addresses);
            }
            _this.mapService.createMarkersWithStatus(map);
            _this.points = _this.mapService.mapMarkers;
            _this.mapService.trackUpdates = true;
            _this.onComplete.emit({});
            if (_this.triggerUpdate) {
                _this.mapService.triggerUpdate();
            }
            _this.title = _this.mapService.maps[0].terId + " - " + _this.mapService.maps[0].name + " " + (_this.mapService.isNormalMode() ? '' : '::Campaign');
            if (_this.winRef.nativeWindow.innerWidth <= _this.shortenTitleWidth) {
                _this.title = "Map " + _this.mapService.maps[0].terId + " " + (_this.mapService.isNormalMode() ? '' : '::Campaign');
            }
            var fullName = (_this.fireAuth.currentUser && _this.fireAuth.currentUser.userInfoObj) ? _this.fireAuth.currentUser.userInfoObj.name : '';
            var terId = _this.mapService.maps[0].terId;
            _this.addUrl = "https://docs.google.com/forms/d/e/1FAIpQLScYHfYNwnSIWAL9RAH3rEPC74WfkFT0FgcvaJKx1nAIROXS6A/viewform?usp=pp_url&entry.1810388592=Yes&entry.1189370340=&entry.45257833&entry.681741514=" + terId + "&entry.1482719893=" + fullName + "&entry.1683213160=%E6%98%AF&entry.293956968=&entry.602343366&entry.2071713990=" + terId + "&entry.138422963=" + fullName + "&entry.1018422546&entry.2060338072&entry.1052547294&entry.365006055&entry.1323592748=" + terId + "&entry.1534052334=" + fullName + "&entry.1011916189&entry.1303192619&entry.825337910&entry.1931492709&entry.2023645450=" + terId + "&entry.913416032=" + fullName;
            // this.addUrl = `https://docs.google.com/forms/d/e/1FAIpQLScYHfYNwnSIWAL9RAH3rEPC74WfkFT0FgcvaJKx1nAIROXS6A/viewform?usp=pp_url&entry.1810388592=Yes&entry.1189370340&entry.45257833&entry.681741514&entry.1482719893&entry.1018422546&entry.2060338072&entry.1052547294&entry.365006055&entry.1323592748=${this.mapService.maps[0].terId}&entry.1534052334=${fullName}`;
            _this.hideLoadingDialog();
            _this.triggerUpdate = true;
            _this.subs.push(_this.onAddressClick.subscribe(function (data) {
                console.log(data);
                _this.currentAddr = data.addrMarker;
                _this.handleAddressClick();
            }));
        }));
    };
    MapComponent.prototype.handleAddressClick = function () {
        var _this = this;
        if (this.isEditModeAddress() || this.isEditStatus()) {
            // need to show the address dialog
            if (this.addrDlg) {
                // dialog already open, ignore...
                return;
            }
            if (this.hasMultiAdds()) {
                this.currentAddrTitle = "Multiple addresses, select one below.";
                this.currentGmapUrl = null;
                this.selectedAddObj = null;
            }
            else {
                this.currentAddrTitle = this.getAddressTitle(this.currentAddr.addObj);
                this.currentGmapUrl = this.getGmapUrl(this.currentAddr.addObj);
                this.selectedAddObj = this.currentAddr.addObj;
                if (__WEBPACK_IMPORTED_MODULE_5_lodash__["isUndefined"](this.selectedAddObj.status)) {
                    this.selectedAddObj.status = 0;
                }
                this.buildFeedbackUrl();
            }
            this.showAddrDlg();
        }
        else if (this.isEditModeMoveAddress()) {
            // TODO: determine why there are 2 click events!!!! For now just cache and clear
            // So catch the last one and just ignore the second click event
            if (this.lastSelectedAddress == this.currentAddr) {
                this.lastSelectedAddress = null;
                return;
            }
            else {
                this.lastSelectedAddress = this.currentAddr;
            }
            if (this.currentAddr.marker.icon.url == this.ADDRESS_SELECTED_ICON) {
                this.currentAddr.marker.icon.url = this.ADDRESS_UNSELECTED_ICON;
                __WEBPACK_IMPORTED_MODULE_5_lodash__["remove"](this.selectedAddrMarkers, function (item) { return __WEBPACK_IMPORTED_MODULE_5_lodash__["isEqual"](item, _this.currentAddr); });
            }
            else {
                this.currentAddr.marker.icon.url = this.ADDRESS_SELECTED_ICON;
                this.selectedAddrMarkers.push(this.currentAddr);
                this.lastSelectedAddress = null;
            }
            this.selectedAddresses = [];
            __WEBPACK_IMPORTED_MODULE_5_lodash__["each"](this.selectedAddrMarkers, function (addrMarker) {
                if (__WEBPACK_IMPORTED_MODULE_5_lodash__["isArray"](addrMarker.addObj)) {
                    __WEBPACK_IMPORTED_MODULE_5_lodash__["each"](addrMarker.addObj, function (addObj) {
                        _this.selectedAddresses.push(addObj);
                    });
                }
                else {
                    _this.selectedAddresses.push(addrMarker.addObj);
                }
            });
            this.mapService.triggerUpdate();
            this.adjustHeight();
            console.log(this.selectedAddresses);
        }
    };
    MapComponent.prototype.findTargetMap = function () {
        var _this = this;
        this.mapService.findByTerId(this.findMapId, function (mapObj) {
            if (mapObj) {
                __WEBPACK_IMPORTED_MODULE_5_lodash__["forOwn"](mapObj, function (map, mapId) {
                    _this.targetMapId = mapId;
                    _this.targetMapObj = map;
                });
            }
        });
    };
    MapComponent.prototype.moveSelectedAddresses = function () {
        var _this = this;
        console.log("Moving to " + this.targetMapId);
        console.log(this.targetMapObj);
        this.mapService.moveAddress(this.mapId, this.targetMapId, this.targetMapObj.terId, this.targetMapObj.name, this.targetMapObj.fsg, this.selectedAddresses, function () {
            var curMarkers = _this.selectedAddrMarkers;
            _this.stopMoveAddressMode();
            // update the markers...
            console.log("Removing...");
            console.log(curMarkers);
            console.log(_this.points);
            __WEBPACK_IMPORTED_MODULE_5_lodash__["remove"](_this.points, function (point) { return __WEBPACK_IMPORTED_MODULE_5_lodash__["includes"](curMarkers, point); });
            console.log(_this.points);
            _this.mapService.triggerUpdate();
        });
    };
    MapComponent.prototype.startMap = function (mapObj) {
    };
    MapComponent.prototype.isNotAtHome = function () {
        return this.currentAddr && this.currentAddr.map.getStatus(this.currentAddr.addId) == 3;
    };
    MapComponent.prototype.hasDetail = function () {
        return this.currentAddr && this.currentAddr.map.getStatusDetail(this.currentAddr.addId);
    };
    MapComponent.prototype.getLastVisited = function () {
        var detail = this.currentAddr.map.getStatusDetail(this.currentAddr.addId);
        if (detail) {
            return detail.nh_when;
        }
        return null;
    };
    MapComponent.prototype.getAddressTitle = function (addrObj) {
        if (__WEBPACK_IMPORTED_MODULE_5_lodash__["isUndefined"](addrObj.st) || __WEBPACK_IMPORTED_MODULE_5_lodash__["isEmpty"](addrObj.st)) {
            return '';
        }
        var unit = addrObj.unit;
        if (__WEBPACK_IMPORTED_MODULE_5_lodash__["isUndefined"](unit) || !unit || '-9' == "" + unit) {
            unit = '';
        }
        else {
            unit = unit + "/";
        }
        return "" + unit + addrObj.hnum + " " + addrObj.st + ", " + addrObj.burb;
    };
    MapComponent.prototype.getGmapUrl = function (addrObj) {
        return "https://www.google.com/maps/dir/?api=1&destination=" + addrObj.hnum + " " + addrObj.st + ", " + addrObj.burb + "&travelmode=driving";
    };
    MapComponent.prototype.getStatuses = function () {
        if (!this.addrStatuses) {
            this.addrStatuses = this.currentMap.getAddrStatuses(this.fireAuth.currentUser, this.mapService);
        }
    };
    MapComponent.prototype.showAddrDlg = function () {
        console.log(this.points);
        if (this.mapId != 'all') {
            this.getStatuses();
        }
        console.log("Opening dialog...");
        if (this.addrDlg) {
            this.closeAddrDlg();
        }
        this.addrDlg = this.dialog.open(AddressDlgComponent, {
            data: { consumer: this },
            disableClose: true
        });
    };
    MapComponent.prototype.closeAddrDlg = function () {
        console.log("Closing dialog...");
        // this.addrDlg.close();
        this.dialog.closeAll();
        this.addrDlg = null;
    };
    MapComponent.prototype.resetEditMode = function () {
        if (this.mapId == 'all') {
            this.setEditingAddress();
        }
        else {
            this.setEditingStatus();
        }
    };
    MapComponent.prototype.cancelAddrDlg = function () {
        this.selectedAddObj = null;
        this.closeAddrDlg();
        this.resetEditMode();
    };
    MapComponent.prototype.showCurrentLoc = function () {
        var _this = this;
        this.onPosMarker.subscribe(function (pos) {
            if (_this.locationSearching) {
                _this.locationSearching = false;
            }
            if (pos) {
                _this.onAddLocMarker.emit({
                    position: pos.position,
                    iconUrl: _this.currentLocation.iconUrl
                });
                _this.fireAuth.saveLoc(_this.fireAuth.currentUser.userObj.uid, pos);
            }
            else {
                _this.onAddLocMarker.emit(null);
            }
        });
        this.mapService.enableGeolocation(this.onPosMarker);
    };
    MapComponent.prototype.clearMaps = function () {
        this.mapService.clearAllMarkers();
        this.currentLocation.pushed = false;
    };
    MapComponent.prototype.showMarker = function () {
        this.clearMaps();
    };
    MapComponent.prototype.logout = function () {
        this.clearMaps();
        _super.prototype.logout.call(this);
        this.triggerUpdate = true;
    };
    MapComponent.prototype.isAdmin = function () {
        return this.fireAuth.currentUser && this.fireAuth.currentUser.isAdmin();
    };
    MapComponent.prototype.isUpdater = function () {
        return this.fireAuth.currentUser && (this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater());
    };
    MapComponent.prototype.onStatusChange = function (item) {
    };
    MapComponent.prototype.saveStatus = function () {
        var _this = this;
        var mapId = this.currentAddr.mapObj.$key;
        var addId = this.selectedAddObj.$key;
        var status = this.selectedAddObj.status;
        var ctr = this.selectedAddObj;
        this.closeAddrDlg();
        this.showLoadingDialog();
        console.log("Status: " + status);
        this.mapService.updateAddrStat(mapId, addId, status, this.fireAuth.currentUser, function (addId, status, nhData) {
            console.log("Manulaly setting Status: " + status);
            _this.currentAddr.map.setStatus(addId, status);
            _this.currentAddr.map.setStatusDetail(addId, nhData);
            _this.selectedAddObj = null;
        });
    };
    MapComponent.prototype.saveStatuses = function () {
        var _this = this;
        this.currentMap.addresses = this.currentAddrList;
        this.closeAddrListDlg();
        this.showLoadingDialog();
        this.mapService.updateAddrStats(this.currentMap, this.fireAuth.currentUser, function (map) {
            __WEBPACK_IMPORTED_MODULE_5_lodash__["each"](map.addresses, function (addObj) {
                var status = addObj.status;
                var addId = addObj.$key;
                _this.currentMap.setStatus(addId, status);
                // this.currentMap.setStatusDetail(addId, nhData);
            });
            _this.hideLoadingDialog();
        });
    };
    MapComponent.prototype.hasMultiAdds = function () {
        return this.currentAddr && __WEBPACK_IMPORTED_MODULE_5_lodash__["isArray"](this.currentAddr.addObj) && !this.selectedAddObj;
    };
    MapComponent.prototype.selectAdd = function (addObj) {
        this.currentAddrTitle = this.getAddressTitle(addObj);
        this.currentGmapUrl = this.getGmapUrl(addObj);
        this.selectedAddObj = addObj;
        this.buildFeedbackUrl();
    };
    MapComponent.prototype.buildFeedbackUrl = function () {
        var fullName = (this.fireAuth.currentUser && this.fireAuth.currentUser.userInfoObj) ? this.fireAuth.currentUser.userInfoObj.name : '';
        var terId = this.mapService.maps[0].terId;
        this.currentFeedbackUrl = "https://docs.google.com/forms/d/e/1FAIpQLScYHfYNwnSIWAL9RAH3rEPC74WfkFT0FgcvaJKx1nAIROXS6A/viewform?usp=pp_url&entry.1810388592=No&entry.1189370340=" + this.currentAddrTitle + "&entry.45257833&entry.681741514=" + terId + "&entry.1482719893=" + fullName + "&entry.1683213160=%E4%B8%8D%E6%98%AF&entry.293956968=" + this.currentAddrTitle + "&entry.602343366&entry.2071713990=" + terId + "&entry.138422963=" + fullName + "&entry.1018422546&entry.2060338072&entry.1052547294&entry.365006055&entry.1323592748=" + terId + "&entry.1534052334=" + fullName + "&entry.1011916189&entry.1303192619&entry.825337910&entry.1931492709&entry.2023645450=" + terId + "&entry.913416032=" + fullName;
        // this.currentFeedbackUrl = `https://docs.google.com/forms/d/e/1FAIpQLScYHfYNwnSIWAL9RAH3rEPC74WfkFT0FgcvaJKx1nAIROXS6A/viewform?usp=pp_url&entry.1810388592=No&entry.1189370340=${this.currentAddrTitle}&entry.45257833&entry.681741514=${this.mapService.maps[0].terId}&entry.1482719893=${fullName}&entry.1018422546&entry.2060338072&entry.1052547294&entry.365006055&entry.1323592748&entry.1534052334`
    };
    MapComponent.prototype.viewList = function () {
        this.getStatuses();
        // make a copy of the address list to we can cancel
        this.currentAddrList = __WEBPACK_IMPORTED_MODULE_5_lodash__["cloneDeep"](this.currentMap.addresses);
        this.addrListDlg = this.dialog.open(AddressListDlgComponent, {
            data: { consumer: this },
            disableClose: true
        });
    };
    MapComponent.prototype.closeAddrListDlg = function () {
        this.addrListDlg.close();
        this.currentAddrList = null;
        // this.addrListDlg = null;
    };
    MapComponent.prototype.getAddressTitleWithStatus = function (addObj) {
        var title = this.getAddressTitle(addObj);
        if (addObj.status) {
            title = this.getStatusLabel(addObj.status) + " - " + title;
        }
        return title;
    };
    MapComponent.prototype.getStatusLabel = function (addObj) {
        var label = 'Not Done';
        if (!__WEBPACK_IMPORTED_MODULE_5_lodash__["isUndefined"](addObj.status)) {
            __WEBPACK_IMPORTED_MODULE_5_lodash__["forEach"](this.addrStatuses, function (stat) {
                if (addObj.status == stat.val) {
                    label = stat.label;
                }
            });
        }
        return label;
    };
    MapComponent.prototype.getStatus = function (addObj) {
        if (__WEBPACK_IMPORTED_MODULE_5_lodash__["isUndefined"](addObj.status) || __WEBPACK_IMPORTED_MODULE_5_lodash__["isNull"](addObj.status)) {
            addObj.status = 0;
        }
        return addObj;
    };
    MapComponent.prototype.getStatusBgColor = function (addObj, stat) {
        if (stat === void 0) { stat = null; }
        var bg = "#960202";
        var status = addObj ? addObj.status : stat;
        if (!__WEBPACK_IMPORTED_MODULE_5_lodash__["isUndefined"](status)) {
            switch (status) {
                case 1:
                case 9:
                    bg = "#428214";
                    break;
                case 2:
                    bg = "#401804";
                    break;
                case 3:
                    bg = "#e88017";
                    break;
                case 4:
                    bg = "#8d57c2";
                    break;
                case 5:
                    bg = "#4a5963";
                    break;
                case 7:
                    bg = "#227874";
                    break;
                case 8:
                    bg = "#227874";
                    break;
                case 10:
                    bg = "#f2046f";
                    break;
            }
        }
        return bg;
    };
    MapComponent.prototype.editMap = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_5_lodash__["isUndefined"](this.fsgs)) {
            this.showLoadingDialog();
            var sub_1 = this.mapService.getAllFsgMaps(this.mapBin)
                .flatMap(function (mapId) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(null);
            })
                .debounce(function () {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(1000);
            })
                .subscribe(function () {
                sub_1.unsubscribe();
                __WEBPACK_IMPORTED_MODULE_5_lodash__["forOwn"](_this.mapBin, function (mapVal, mapId) {
                    _this.mapIds.push(mapVal);
                });
                _this.fsgs = __WEBPACK_IMPORTED_MODULE_5_lodash__["uniq"](__WEBPACK_IMPORTED_MODULE_5_lodash__["map"](_this.mapIds, function (mapId) {
                    return mapId.fsgName;
                }));
                _this.mapName = _this.currentMap.mapObj.name;
                _this.fsgName = _this.currentMap.mapObj.fsg;
                _this.mapKey = _this.mapBin[_this.mapId].mapKey;
                _this.hideLoadingDialog();
                _this.mapEditDlg = _this.dialog.open(MapEditDlgComponent, {
                    data: { consumer: _this },
                    disableClose: true
                });
            });
        }
        else {
            this.mapName = this.currentMap.mapObj.name;
            this.fsgName = this.currentMap.mapObj.fsg;
            this.mapKey = this.mapBin[this.mapId].mapKey;
            this.mapEditDlg = this.dialog.open(MapEditDlgComponent, {
                data: { consumer: this },
                disableClose: true
            });
        }
    };
    MapComponent.prototype.saveMapEdit = function () {
        var _this = this;
        this.closeMapEditDlg();
        this.showLoadingDialog();
        this.mapService.moveMap(this.mapId, this.mapKey, this.mapName, this.currentMap.mapObj.fsg, this.fsgName, function () {
            _this.currentMap.mapObj.fsg = _this.fsgName;
            _this.currentMap.mapObj.name = _this.mapName;
            _this.mapBin[_this.mapId].mapKey = _this.mapId;
            _this.title = _this.currentMap.mapObj.terId + " - " + _this.currentMap.mapObj.name + " " + (_this.mapService.isNormalMode() ? '' : '::Campaign');
            _this.hideLoadingDialog();
        });
    };
    MapComponent.prototype.closeMapEditDlg = function () {
        this.mapEditDlg.close();
    };
    return MapComponent;
}(__WEBPACK_IMPORTED_MODULE_8__base_base_component__["a" /* BaseComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('markerCluster'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], MapComponent.prototype, "markerClusterRef", void 0);
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'map-component',
        template: __webpack_require__("../../../../../src/app/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map/map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__map_service__["a" /* MapService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__user_user_component__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__user_user_component__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__windowref_service__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__windowref_service__["a" /* WindowRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatIconRegistry */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["d" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["d" /* DomSanitizer */]) === "function" && _h || Object])
], MapComponent);

var MapEditDlgComponent = (function () {
    function MapEditDlgComponent(dialogRef, data, iconRegistry, sanitizer) {
        this.dialogRef = dialogRef;
        this.data = data;
        iconRegistry.addSvgIcon('google-map', sanitizer.bypassSecurityTrustResourceUrl('/assets/images/google-maps.svg'));
        iconRegistry.addSvgIcon('edit-address', sanitizer.bypassSecurityTrustResourceUrl('/assets/images/edit_address.svg'));
    }
    return MapEditDlgComponent;
}());
MapEditDlgComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'map-edit-component',
        template: __webpack_require__("../../../../../src/app/map/map-edit-dlg.component.html")
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogRef */]) === "function" && _j || Object, Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatIconRegistry */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["d" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["d" /* DomSanitizer */]) === "function" && _l || Object])
], MapEditDlgComponent);

var AddressDlgComponent = (function () {
    function AddressDlgComponent(dialogRef, data, iconRegistry, sanitizer) {
        this.dialogRef = dialogRef;
        this.data = data;
        iconRegistry.addSvgIcon('google-map', sanitizer.bypassSecurityTrustResourceUrl('/assets/images/google-maps.svg'));
        iconRegistry.addSvgIcon('edit-address', sanitizer.bypassSecurityTrustResourceUrl('/assets/images/edit_address.svg'));
    }
    return AddressDlgComponent;
}());
AddressDlgComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'addr-component',
        template: __webpack_require__("../../../../../src/app/map/address-dlg.component.html")
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogRef */]) === "function" && _m || Object, Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatIconRegistry */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["d" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["d" /* DomSanitizer */]) === "function" && _p || Object])
], AddressDlgComponent);

var AddressListDlgComponent = (function () {
    function AddressListDlgComponent(dialogRef, data, iconRegistry, sanitizer) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    return AddressListDlgComponent;
}());
AddressListDlgComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'addrlist-component',
        template: __webpack_require__("../../../../../src/app/map/addresslist-dlg.component.html")
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogRef */]) === "function" && _q || Object, Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatIconRegistry */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["d" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["d" /* DomSanitizer */]) === "function" && _s || Object])
], AddressListDlgComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapslist_component__ = __webpack_require__("../../../../../src/app/map/mapslist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_service__ = __webpack_require__("../../../../../src/app/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loading_diag_component__ = __webpack_require__("../../../../../src/app/map/loading-diag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__marker_cluster__ = __webpack_require__("../../../../../src/app/map/marker-cluster.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__covalent_core__ = __webpack_require__("../../../../@covalent/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__windowref_service__ = __webpack_require__("../../../../../src/app/map/windowref.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__map_share_component__ = __webpack_require__("../../../../../src/app/map/map-share.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_chips__ = __webpack_require__("../../../../ngx-chips/dist/ngx-chips.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_chips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ngx_chips__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__map_admin_component__ = __webpack_require__("../../../../../src/app/map/map-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var MapModule = (function () {
    function MapModule() {
    }
    return MapModule;
}());
MapModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_16_ngx_chips__["TagInputModule"],
            __WEBPACK_IMPORTED_MODULE_1__agm_core__["a" /* AgmCoreModule */].forRoot({ apiKey: __WEBPACK_IMPORTED_MODULE_20__environments_environment__["a" /* environment */].agm.api }),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["l" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["m" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["j" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["n" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["o" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["f" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["k" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["p" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["h" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["q" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["r" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["i" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["s" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["t" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["u" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_11__covalent_core__["a" /* CovalentExpansionPanelModule */],
            __WEBPACK_IMPORTED_MODULE_11__covalent_core__["b" /* CovalentMessageModule */],
            __WEBPACK_IMPORTED_MODULE_13__user_user_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["v" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["g" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["w" /* MatTableModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__map_component__["a" /* MapComponent */], __WEBPACK_IMPORTED_MODULE_3__mapslist_component__["a" /* MapsListComponent */], __WEBPACK_IMPORTED_MODULE_9__marker_cluster__["a" /* MarkerClusterDirective */], __WEBPACK_IMPORTED_MODULE_8__loading_diag_component__["a" /* LoadingDialog */], __WEBPACK_IMPORTED_MODULE_15__map_share_component__["a" /* MapShareComponent */], __WEBPACK_IMPORTED_MODULE_15__map_share_component__["b" /* MapShareDlgComponent */], __WEBPACK_IMPORTED_MODULE_2__map_component__["b" /* AddressDlgComponent */], __WEBPACK_IMPORTED_MODULE_2__map_component__["c" /* AddressListDlgComponent */], __WEBPACK_IMPORTED_MODULE_15__map_share_component__["c" /* MapReturnConfirmDlgComponent */], __WEBPACK_IMPORTED_MODULE_19__map_admin_component__["a" /* MapAdminComponent */], __WEBPACK_IMPORTED_MODULE_2__map_component__["d" /* MapEditDlgComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__map_component__["a" /* MapComponent */], __WEBPACK_IMPORTED_MODULE_3__mapslist_component__["a" /* MapsListComponent */], __WEBPACK_IMPORTED_MODULE_15__map_share_component__["a" /* MapShareComponent */], __WEBPACK_IMPORTED_MODULE_15__map_share_component__["b" /* MapShareDlgComponent */], __WEBPACK_IMPORTED_MODULE_2__map_component__["b" /* AddressDlgComponent */], __WEBPACK_IMPORTED_MODULE_2__map_component__["c" /* AddressListDlgComponent */], __WEBPACK_IMPORTED_MODULE_15__map_share_component__["c" /* MapReturnConfirmDlgComponent */], __WEBPACK_IMPORTED_MODULE_9__marker_cluster__["a" /* MarkerClusterDirective */], __WEBPACK_IMPORTED_MODULE_19__map_admin_component__["a" /* MapAdminComponent */], __WEBPACK_IMPORTED_MODULE_2__map_component__["d" /* MapEditDlgComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6__map_service__["a" /* MapService */], __WEBPACK_IMPORTED_MODULE_14__windowref_service__["a" /* WindowRef */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_8__loading_diag_component__["a" /* LoadingDialog */], __WEBPACK_IMPORTED_MODULE_15__map_share_component__["b" /* MapShareDlgComponent */], __WEBPACK_IMPORTED_MODULE_2__map_component__["b" /* AddressDlgComponent */], __WEBPACK_IMPORTED_MODULE_2__map_component__["c" /* AddressListDlgComponent */], __WEBPACK_IMPORTED_MODULE_15__map_share_component__["c" /* MapReturnConfirmDlgComponent */], __WEBPACK_IMPORTED_MODULE_19__map_admin_component__["a" /* MapAdminComponent */], __WEBPACK_IMPORTED_MODULE_2__map_component__["d" /* MapEditDlgComponent */]]
    })
], MapModule);

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_es6__ = __webpack_require__("../../../../moment-es6/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_es6___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment_es6__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Map; });
/* unused harmony export Fsg */
/* unused harmony export AddressMarker */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Map = (function () {
    function Map(mapId, mapObj, assgnObj) {
        this.id = mapId;
        this.mapObj = mapObj;
        this.assgnObj = assgnObj;
        this.addressCount = __WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](mapObj.addresses) ? 0 : __WEBPACK_IMPORTED_MODULE_2_lodash__["size"](mapObj.addresses);
    }
    Object.defineProperty(Map.prototype, "isAssigned", {
        get: function () {
            return this.assgnObj.$exists();
        },
        enumerable: true,
        configurable: true
    });
    Map.prototype.hasOwner = function () {
        // if (this.id == "zhacW") {
        //   console.log(this.assgnObj);
        //   console.log(this.assgnObj && this.assgnObj.$exists() && !_.isEmpty(this.assgnObj.owner));
        // }
        return this.assgnObj && this.assgnObj.$exists() && !__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.assgnObj.owner);
    };
    Object.defineProperty(Map.prototype, "ownerInfo", {
        get: function () {
            return this.assgnObj.owner;
        },
        enumerable: true,
        configurable: true
    });
    Map.prototype.getOwner = function () {
        return this.assgnObj.owner;
    };
    Map.prototype.setOwner = function (userObj) {
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isFunction"](this.assgnObj.$exists) || !this.assgnObj.$exists()) {
            this.assgnObj = {};
        }
        if (!this.assgnObj.owner) {
            this.assgnObj.owner = {};
        }
        this.assgnObj.owner.id = userObj.$key;
        this.assgnObj.owner.name = userObj.name;
    };
    Map.prototype.getUsersList = function () {
        var list = [];
        __WEBPACK_IMPORTED_MODULE_2_lodash__["forOwn"](this.assgnObj.users, function (val, key) {
            list.push({ name: val.name, id: key, expiry: val.expiry });
        });
        return list;
    };
    Map.prototype.hasUsers = function () {
        return !__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.getUsersList());
    };
    Map.prototype.isOwner = function (user) {
        return user.userInfoObj.$key == this.assgnObj.owner.id;
    };
    Map.prototype.isUser = function (user) {
        var inUserList = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](this.getUsersList(), function (u) { return u.id == user.userInfoObj.$key; }) != null;
        return (this.hasOwner() && this.isOwner(user)) || (this.hasUsers() && inUserList);
    };
    Map.prototype.getStatus = function (addId) {
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["get"](this.assgnObj, "address." + addId);
    };
    // only for manually setting the status, does not synch or save to backend!
    Map.prototype.setStatus = function (addId, status) {
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isUndefined"](this.assgnObj.address)) {
            this.assgnObj.address = {};
        }
        this.assgnObj.address[addId] = status;
    };
    Map.prototype.getStatusDetail = function (addId) {
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["get"](this.assgnObj, "det." + addId);
    };
    Map.prototype.setStatusDetail = function (addId, detailData) {
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isUndefined"](this.assgnObj.det)) {
            this.assgnObj.det = {};
        }
        this.assgnObj.det[addId] = detailData;
    };
    Map.prototype.getAddrStatuses = function (currentUser, mapService) {
        var _this = this;
        var addrStatuses = [];
        if (currentUser.isAdmin() || currentUser.isUpdater()) {
            if (this.mapObj.search) {
                // this.addrStatuses = this.mapService.addrStatuses;
                addrStatuses = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](mapService.addrStatuses, function (stat) {
                    if (stat.val != 10 && stat.val != 4) {
                        if (stat.val == 3) {
                            stat.label = "Not at Home";
                        }
                        return stat;
                    }
                    else {
                        return false;
                    }
                });
            }
            else {
                addrStatuses = __WEBPACK_IMPORTED_MODULE_2_lodash__["filter"](mapService.addrStatuses, function (stat) {
                    if (mapService.isNormalMode()) {
                        return stat.val != 10 ? stat : false;
                    }
                    else {
                        if (mapService.isCampaignVisitOnce()) {
                            return (stat.val != 3 && stat.val != 4 && stat.val != 10) ? stat : false;
                        }
                        else {
                            return (stat.val != 10) ? stat : false;
                        }
                    }
                });
            }
        }
        else {
            if (mapService.isNormalMode()) {
                __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](mapService.addrStatuses, function (stat) {
                    if (stat.val != 5 && stat.val != 7) {
                        // skip not at home 2 and not at home 3 for search maps
                        if (_this.mapObj.search && (stat.val == 10 || stat.val == 4)) {
                            return true;
                        }
                        else if (stat.val == 3 && _this.mapObj.search) {
                            stat.label = "Not at Home";
                        }
                        else if (stat.val == 10) {
                            return true;
                        }
                        addrStatuses.push(stat);
                    }
                });
            }
            else {
                // when on campaign mode remove the not-at-home
                __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](mapService.addrStatuses, function (stat) {
                    if (stat.val != 5 && stat.val != 7 && stat.val != 10) {
                        if (mapService.isCampaignVisitOnce() && (stat.val == 3 || stat.val == 4)) {
                            return true;
                        }
                        addrStatuses.push(stat);
                    }
                });
            }
        }
        return addrStatuses;
    };
    return Map;
}());

var Fsg = (function () {
    function Fsg(fsgName, maps, meta) {
        if (meta === void 0) { meta = null; }
        this.fsgName = fsgName;
        this.maps = maps;
        this.completedMapsCtr = 0;
        this.completionRate = 0;
        this.metadata = meta;
    }
    Fsg.prototype.getCompletionPercent = function () {
        return this.completionRate;
    };
    Fsg.prototype.computeCompleted = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](this.maps, function (map) {
            if (_this.metadata.mode.campaign) {
                if (map.mapObj.campaignCtr > 0) {
                    _this.completedMapsCtr++;
                }
            }
            else {
                if (map.mapObj.doneCtr > 0) {
                    _this.completedMapsCtr++;
                }
            }
        });
        this.completionRate = this.completedMapsCtr == 0 ? 0 : Math.floor(((this.completedMapsCtr / this.maps.length) * 100));
    };
    return Fsg;
}());

var AddressMarker = (function () {
    function AddressMarker() {
    }
    return AddressMarker;
}());

var MapService = (function () {
    function MapService(db) {
        var _this = this;
        this.db = db;
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mapMarkers = [];
        this.markerIdx = 0;
        this.trackUpdates = false;
        this.updatePipe = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.subs = [];
        this.fsgs = [];
        this.addrStatuses = [
            { val: 0, label: "Not Done" },
            { val: 1, label: "Done - Mandarin" },
            { val: 9, label: "Done - Cantonese" },
            { val: 2, label: "Not Chinese" },
            { val: 3, label: "Not at Home - 1" },
            { val: 4, label: "Not at Home - 2" },
            { val: 10, label: "Not at Home - 3" },
            { val: 5, label: "Do Not Call" },
            { val: 7, label: "Phone Witnessing" },
            { val: 8, label: "Reported Issue" },
        ];
        this.currentActiveMapRoot = '/assignedMaps/active/';
        this.maps = [];
        this.updatePipe.debounceTime(5000).subscribe(function (data) {
            _this.onUpdate.emit(data);
        });
    }
    MapService.prototype.getMetadata = function () {
        var _this = this;
        if (this.metadata) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(this.metadata);
        }
        else {
            return this.db.object("/metadata").flatMap(function (meta) {
                _this.metadata = meta;
                if (_this.metadata.mode.campaign) {
                    _this.currentActiveMapRoot = '/assignedMaps/campaign/';
                }
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(_this.metadata);
            });
        }
    };
    MapService.prototype.triggerUpdate = function () {
        this.onUpdate.emit({});
    };
    /**
    Loads address markers, will not load all
    */
    MapService.prototype.loadMapMarkersObs = function (mapBaseUrl, mapId) {
        var _this = this;
        var mapBin = {};
        return this.db.object("/maps/" + mapId)
            .flatMap(function (mapObj) {
            if (mapObj.addresses) {
                if (_this.trackUpdates) {
                    _this.updatePipe.next({});
                }
                else {
                    _this.maps.push(mapObj);
                    mapBin.mapObj = mapObj;
                    return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(mapObj);
                }
            }
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(null);
        })
            .filter(function (mapObj) { return mapObj != null; })
            .flatMap(function (mapObj) {
            return _this.db.object("" + _this.currentActiveMapRoot + mapId).flatMap(function (assgnObj) {
                console.log("Got assigned maps object...");
                // console.log(assgnObj);
                mapBin.assgnObj = assgnObj;
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(mapObj);
            });
        })
            .flatMap(function (mapObj) {
            return _this.db.list("/maps/" + mapId + "/addresses").flatMap(function (addressesObj) {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].from(addressesObj);
            });
        })
            .filter(function (addIdObj) { return addIdObj != null; })
            .flatMap(function (addIdObj) {
            return _this.db.object("/addresses/" + addIdObj.$value);
        })
            .filter(function (addObj) { return addObj != null; })
            .flatMap(function (addObj) {
            if (!mapBin.addresses) {
                mapBin.addresses = [];
            }
            __WEBPACK_IMPORTED_MODULE_2_lodash__["remove"](mapBin.addresses, function (add) {
                return add.$key == addObj.$key;
            });
            addObj.addId = addObj.$key;
            mapBin.addresses.push(addObj);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(addObj);
        })
            .flatMap(function (whatever) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(mapBin);
        })
            .debounce(function () {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].interval(1000);
        })
            .flatMap(function (whatever) {
            var map = new Map(mapId, mapBin.mapObj, mapBin.assgnObj);
            __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](mapBin.addresses, function (add) {
                __WEBPACK_IMPORTED_MODULE_2_lodash__["forOwn"](mapBin.assgnObj.address, function (val, key) {
                    if (key == add.$key) {
                        add.status = __WEBPACK_IMPORTED_MODULE_2_lodash__["toNumber"](val);
                    }
                });
                if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isUndefined"](add.status) || __WEBPACK_IMPORTED_MODULE_2_lodash__["isNull"](add.status)) {
                    add.status = 0;
                }
            });
            map.addresses = mapBin.addresses;
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(map);
        });
    };
    MapService.prototype.createStatusMarkerIconConfig = function (size, statusVal) {
        return { scaledSize: size, url: "/assets/images/place-markers/status-" + statusVal + ".svg" };
    };
    MapService.prototype.createMarkersWithStatus = function (map) {
        var _this = this;
        var scaledMarkerSize = new google.maps.Size(35, 35);
        // create icons...
        var markerIcons = {};
        var defaultMarkerIcon = this.createStatusMarkerIconConfig(scaledMarkerSize, 403);
        __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](this.addrStatuses, function (stat) {
            if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](stat)) {
                stat = 0;
            }
            markerIcons[stat.val] = _this.createStatusMarkerIconConfig(scaledMarkerSize, stat.val);
        });
        // console.log(this.mapMarkers);
        __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](map.addresses, function (addObj) {
            var marker = null;
            var addId = addObj.$key;
            // console.log(`Add id is: ${addId}`);
            if (_this.trackUpdates) {
                marker = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](_this.mapMarkers, function (mrk) {
                    return __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](mrk.addId, function (mrkId) {
                        return mrkId == addId;
                    });
                });
                // console.log(`Marker is:`);
                // console.log(marker);
            }
            else {
                marker = new AddressMarker();
                marker.addId = [addId];
                marker.map = map;
            }
            addObj.clat = __WEBPACK_IMPORTED_MODULE_2_lodash__["toNumber"](addObj.clat);
            addObj.clong = __WEBPACK_IMPORTED_MODULE_2_lodash__["toNumber"](addObj.clong);
            // check if this lat and long already on the list...
            var multiMarker = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](_this.mapMarkers, function (mrk) {
                if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isArray"](mrk.addObj)) {
                    return __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](mrk.addObj, function (mrkAddObj) {
                        return mrkAddObj.clat == addObj.clat && mrkAddObj.clong == addObj.clong && mrkAddObj.$key != addId;
                    });
                }
                else {
                    return mrk.addObj.clat == addObj.clat && mrk.addObj.clong == addObj.clong && mrk.addObj.$key != addId;
                }
            });
            if (multiMarker) {
                if (!_this.trackUpdates) {
                    if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isArray"](multiMarker.addObj)) {
                        multiMarker.addObj.push(addObj);
                    }
                    else {
                        var newAddObj = [multiMarker.addObj];
                        newAddObj.push(addObj);
                        multiMarker.addObj = newAddObj;
                    }
                    marker = multiMarker;
                    marker.addId.push(addId);
                }
            }
            else {
                marker.addObj = addObj;
            }
            marker.mapObj = map.mapObj;
            marker.modalMode = true;
            // creating icon
            // if icon is multi addresses, then all icon set to be worked on...
            var addObjIcon = defaultMarkerIcon;
            if (multiMarker) {
                if (addObj.status) {
                    addObjIcon = markerIcons[addObj.status];
                    var statuses = __WEBPACK_IMPORTED_MODULE_2_lodash__["map"](multiMarker.addObj, function (mulitAddObj) {
                        return mulitAddObj.status;
                    });
                    // revert icon to wip if an address needs a visit
                    __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](statuses, function (status) {
                        switch (status) {
                            case 0:
                            case 3:
                                addObjIcon = markerIcons[status];
                        }
                    });
                }
                else {
                    if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](map.assgnObj.started)) {
                        addObjIcon = markerIcons[0];
                    }
                }
                // console.log(addObjIcon);
                multiMarker.marker = new google.maps.Marker({
                    position: new google.maps.LatLng(addObj.clat, addObj.clong),
                    icon: addObjIcon,
                    label: "" + multiMarker.addObj.length
                });
            }
            else {
                // console.log(`Using status: ${addObj.status}`);
                if (addObj.status) {
                    addObjIcon = markerIcons[addObj.status];
                }
                else {
                    if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](map.assgnObj.started)) {
                        addObjIcon = markerIcons[0];
                    }
                }
                // console.log(addObjIcon);
                marker.marker = new google.maps.Marker({
                    position: new google.maps.LatLng(addObj.clat, addObj.clong),
                    icon: addObjIcon
                });
                if (!_this.trackUpdates) {
                    _this.mapMarkers.push(marker);
                }
            }
        });
    };
    MapService.prototype.loadMapMarkers = function (mapBaseUrl, mapId, modalMode) {
        var _this = this;
        if (modalMode === void 0) { modalMode = false; }
        this.subs.push(this.db.object("/maps/" + mapId).subscribe(function (mapObj) {
            // console.log(mapObj);
            // if (mapId.$value == "X1Zce" || mapId.$value == "w1V3G") {
            //   console.log(`Got data:`);
            //   console.log(mapObj);
            // }
            if (mapObj.addresses) {
                if (_this.trackUpdates) {
                    _this.updatePipe.next({});
                }
                else {
                    _this.maps.push(mapObj);
                }
                var idx_1 = _this.markerIdx++;
                var addCtr_1 = 0;
                __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](mapObj.addresses, function (addId) {
                    console.log("/addresses/" + addId);
                    _this.subs.push(_this.db.object("/addresses/" + addId).subscribe(function (addObj) {
                        if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](addObj.burb)) {
                            addCtr_1++;
                            var marker = null;
                            if (_this.trackUpdates) {
                                marker = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](_this.mapMarkers, function (mrk) { return mrk.addId == addId; });
                            }
                            else {
                                marker = new AddressMarker();
                                marker.addId = addId;
                            }
                            addObj.clat = __WEBPACK_IMPORTED_MODULE_2_lodash__["toNumber"](addObj.clat);
                            addObj.clong = __WEBPACK_IMPORTED_MODULE_2_lodash__["toNumber"](addObj.clong);
                            marker.addObj = addObj;
                            marker.mapObj = mapObj;
                            if (modalMode) {
                                marker.modalMode = modalMode;
                            }
                            else {
                                marker.url = "/map/" + mapId;
                                marker.infoWindowStr = "\n                                          <div>Address: " + (addObj.unit == -9 || __WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](addObj.unit) ? '' : 'Unit ' + addObj.unit) + " " + addObj.hnum + " " + addObj.st + ", " + addObj.burb + "</div>\n                                          <div>Map: <a href='" + marker.url + "' target='_blank'>" + mapObj.terId + " - " + mapObj.name + "</a></div>\n                                          <div>FSG: " + mapObj.fsg + "</div>\n                                        ";
                                marker.markerIdx = idx_1;
                            }
                            if (!_this.trackUpdates) {
                                _this.mapMarkers.push(marker);
                            }
                        }
                        else {
                            console.log("Address not found: " + addId + " in map: " + mapId);
                        }
                    }));
                });
            }
            else {
                console.log("Map not found: " + mapId);
            }
        }));
    };
    // Asynch call
    MapService.prototype.loadAllMapsWithMarkers = function (mapBaseUrl) {
        var _this = this;
        this.subs.push(this.db.list('/fsg/list').subscribe(function (fsgList) {
            fsgList.forEach(function (fsg) {
                _this.subs.push(_this.db.list("/fsg/" + fsg.$value).subscribe(function (fsgMaps) {
                    fsgMaps.forEach(function (mapId) {
                        _this.loadMapMarkers(mapBaseUrl, mapId.$value);
                    });
                }));
            });
        }));
    };
    MapService.prototype.clearAllMarkers = function () {
        __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](this.subs, function (sub) {
            sub.unsubscribe();
        });
        this.subs.length = 0;
        this.maps.length = 0;
        this.mapMarkers.length = 0;
        this.trackUpdates = false;
        this.triggerUpdate();
    };
    MapService.prototype.getAllFsgMaps = function (mapBin) {
        var _this = this;
        this.fsgs.length = 0;
        return this.db.object('/fsg/list').flatMap(function (fsgObjList) {
            // console.log(`Got fsg list...`);
            var fsgList = [];
            __WEBPACK_IMPORTED_MODULE_2_lodash__["forOwn"](fsgObjList, function (fsgVal, fsgKey) {
                fsgList.push({ '$key': fsgKey, '$value': fsgVal });
            });
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].from(fsgList);
        })
            .flatMap(function (fsgObj) {
            var fsgName = fsgObj.$value;
            // console.log(`Getting FSG: ${fsgName}`);
            return _this.db.object("/fsg/" + fsgName).flatMap(function (mapIdObjList) {
                // console.log(`Got map ids...`);
                var mapIdList = [];
                __WEBPACK_IMPORTED_MODULE_2_lodash__["forOwn"](mapIdObjList, function (mapIdVal, mapIdKey) {
                    mapIdList.push({ '$key': mapIdKey, '$value': mapIdVal });
                });
                mapIdList.forEach(function (mapId) {
                    mapBin[mapId.$value] = { fsgName: fsgName, mapKey: mapId.$key };
                });
                // console.log(mapBin);
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].from(mapIdList);
            });
        });
    };
    MapService.prototype.getAllFsgMapsList = function (sortMaps) {
        var _this = this;
        if (sortMaps === void 0) { sortMaps = false; }
        var mapBin = {};
        return this.getAllFsgMaps(mapBin)
            .flatMap(function (mapId) {
            // console.log(`Getting map...${mapId.$value}`);
            return _this.db.object("/maps/" + mapId.$value);
        })
            .flatMap(function (mapObj) {
            // console.log(`Got map....`);
            mapBin[mapObj.$key].mapObj = mapObj;
            // console.log(mapBin[mapObj.$key]);
            return _this.db.object("" + _this.currentActiveMapRoot + mapObj.$key).flatMap(function (assgnObj) {
                mapBin[mapObj.$key].assgnObj = assgnObj;
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(mapObj);
            });
        })
            .flatMap(function (whatever) {
            // console.log(`Populated map bin...`);
            // console.log(mapBin);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(mapBin);
        })
            .debounce(function () {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].interval(1000);
        })
            .flatMap(function (whatever) {
            // Pivot data into...
            var fsgBin = {};
            __WEBPACK_IMPORTED_MODULE_2_lodash__["forOwn"](mapBin, function (val, key) {
                var fsg = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](_this.fsgs, function (fsg) { return fsg.fsgName == val.fsgName; });
                if (!fsg) {
                    fsg = new Fsg(val.fsgName, [], _this.metadata);
                    _this.fsgs.push(fsg);
                }
                var map = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](fsg.maps, function (map) { return map.id == key; });
                if (map) {
                    map.mapObj = val.mapObj;
                    map.assgnObj = val.assgnObj;
                }
                else {
                    fsg.maps.push(new Map(key, val.mapObj, val.assgnObj));
                }
            });
            if (sortMaps) {
                // Sort maps order:
                // 1. Started date
                // 2. Last completed
                __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](_this.fsgs, function (fsg) {
                    var sortedMaps = __WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"](fsg.maps, [function (map) {
                            return map.assgnObj && map.assgnObj.started ? __WEBPACK_IMPORTED_MODULE_4_moment_es6___default()(map.assgnObj.started).unix() : null;
                        }, function (map) {
                            return map.mapObj && map.mapObj.lastCompleted ? __WEBPACK_IMPORTED_MODULE_4_moment_es6___default()(map.mapObj.lastCompleted).unix() : 0;
                        }]);
                    fsg.maps = sortedMaps;
                });
            }
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(_this.fsgs);
        });
    };
    MapService.prototype.getUserMaps = function (user) {
        var _this = this;
        var mapBin = {};
        return this.db.object(this.getUserMapPath(user.userInfoObj.$key)).flatMap(function (mapListObj) {
            console.log("Got user maps list...");
            _this.fsgs = [];
            if (mapListObj.$exists()) {
                var mapIds_1 = [];
                __WEBPACK_IMPORTED_MODULE_2_lodash__["forOwn"](mapListObj, function (val, mapId) {
                    mapIds_1.push(mapId);
                });
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].from(mapIds_1);
            }
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(null);
        }).flatMap(function (mapId) {
            console.log("Got map id....");
            _this.fsgs.length = 0;
            if (mapId) {
                return _this.db.object("/maps/" + mapId);
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(null);
            }
        })
            .flatMap(function (mapObj) {
            console.log("Got map obj....");
            _this.fsgs.length = 0;
            if (mapObj) {
                if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](mapBin[mapObj.$key])) {
                    mapBin[mapObj.$key] = { fsgName: "Your Maps" };
                }
                mapBin[mapObj.$key].mapObj = mapObj;
                // console.log(mapBin[mapObj.$key]);
                return _this.db.object("" + _this.currentActiveMapRoot + mapObj.$key).flatMap(function (assgnObj) {
                    mapBin[mapObj.$key].assgnObj = assgnObj;
                    return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(mapObj);
                });
            }
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(null);
        })
            .flatMap(function (whatever) {
            // console.log(`Populated map bin...`);
            // console.log(mapBin);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(mapBin);
        })
            .debounce(function () {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].interval(1000);
        })
            .flatMap(function (whatever) {
            // Pivot data into...
            // console.log(this.fsgs);
            var fsgs = [];
            var fsgBin = {};
            __WEBPACK_IMPORTED_MODULE_2_lodash__["forOwn"](mapBin, function (val, key) {
                // let fsg = _.find(this.fsgs, (fsg)=>{return fsg.fsgName == val.fsgName });
                // if (!fsg) {
                //   fsg = new Fsg(val.fsgName, []);
                //   this.fsgs.push(fsg);
                // }
                // let map = _.find(fsg.maps, (map) => { return map.id == key });
                // if (map) {
                //   map.mapObj = val.mapObj;
                //   map.assgnObj = val.assgnObj;
                // } else {
                //   fsg.maps.push(new Map(key, val.mapObj, val.assgnObj));
                // }
                var fsg = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](fsgs, function (fsg) { return fsg.fsgName == val.fsgName; });
                if (!fsg) {
                    fsg = new Fsg(val.fsgName, []);
                    fsgs.push(fsg);
                }
                fsg.maps.push(new Map(key, val.mapObj, val.assgnObj));
            });
            // return Observable.of(this.fsgs);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(fsgs);
        });
    };
    MapService.prototype.updateLastSaved = function (map, userInfo) {
    };
    MapService.prototype.updateOwner = function (map, owner, prevOwner, isPersonal, notes) {
        if (isPersonal === void 0) { isPersonal = false; }
        if (notes === void 0) { notes = null; }
        var updateObj = {};
        if (map.assgnObj.address) {
            updateObj["" + this.currentActiveMapRoot + map.id + "/address"] = map.assgnObj.address;
        }
        if (map.assgnObj.users) {
            updateObj["" + this.currentActiveMapRoot + map.id + "/users"] = map.assgnObj.users;
        }
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](map.assgnObj.started)) {
            updateObj["" + this.currentActiveMapRoot + map.id + "/started"] = __WEBPACK_IMPORTED_MODULE_4_moment_es6___default()().toDate();
        }
        if (prevOwner && owner.id != prevOwner.id) {
            updateObj["" + this.currentActiveMapRoot + map.id + "/prevOwner"] = prevOwner;
        }
        if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isNull"](notes)) {
            updateObj["" + this.currentActiveMapRoot + map.id + "/notes"] = notes;
        }
        updateObj["" + this.currentActiveMapRoot + map.id + "/owner"] = { id: owner.id, name: owner.name, expiry: owner.expiry };
        updateObj["" + this.currentActiveMapRoot + map.id + "/expiry"] = owner.expiry;
        updateObj["" + this.currentActiveMapRoot + map.id + "/isPersonal"] = isPersonal;
        updateObj[this.getUserMapPath(owner.id, map.id) + "/expiry"] = owner.expiry;
        this.db.database.ref().update(updateObj);
    };
    MapService.prototype.updateUsers = function (map, users) {
        var _this = this;
        var updateObj = {};
        var userListObj = {};
        __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](users, function (user) {
            userListObj[user.id] = { name: user.name, expiry: user.expiry };
            updateObj[_this.getUserMapPath(user.id, map.id) + "/expiry"] = user.expiry;
        });
        updateObj["" + this.currentActiveMapRoot + map.id + "/users"] = userListObj;
        console.log(updateObj);
        this.db.database.ref().update(updateObj);
    };
    MapService.prototype.removeOwner = function (map, prevOwner, notes) {
        if (notes === void 0) { notes = null; }
        var updateObj = {};
        if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isNull"](notes)) {
            updateObj["" + this.currentActiveMapRoot + map.id + "/notes"] = notes;
        }
        updateObj["" + this.currentActiveMapRoot + map.id + "/owner"] = null;
        updateObj["" + this.currentActiveMapRoot + map.id + "/expiry"] = null;
        updateObj["" + this.getUserMapPath(prevOwner.id, map.id)] = null;
        updateObj["" + this.currentActiveMapRoot + map.id + "/prevOwner"] = prevOwner;
        this.db.database.ref().update(updateObj);
    };
    MapService.prototype.removeUsers = function (map, users) {
        var _this = this;
        var updateObj = {};
        __WEBPACK_IMPORTED_MODULE_2_lodash__["forEach"](users, function (user) {
            updateObj["" + _this.getUserMapPath(user.id, map.id)] = null;
            updateObj["" + _this.currentActiveMapRoot + map.id + "/users/" + user.id] = null;
        });
        this.db.database.ref().update(updateObj);
    };
    MapService.prototype.saveAddr = function (addrUpdates, currentMap, targetMap, cb) {
        var _this = this;
        if (currentMap === void 0) { currentMap = null; }
        if (targetMap === void 0) { targetMap = null; }
        if (cb === void 0) { cb = null; }
        var updateObj = {};
        __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](addrUpdates, function (addrUpdate) {
            var key = null;
            if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isString"](addrUpdate) || __WEBPACK_IMPORTED_MODULE_2_lodash__["isNumber"](addrUpdate)) {
                if (currentMap && targetMap) {
                    var fromMapId = currentMap.id;
                    var toMapId = targetMap.id;
                    var addrPath = "/addresses/" + key;
                    updateObj[addrPath + "/terId"] = currentMap.mapObj.terId;
                    updateObj[addrPath + "/mapId"] = toMapId;
                    updateObj[addrPath + "/map"] = targetMap.mapObj.name;
                    updateObj["/maps/" + toMapId + "/addresses/" + key] = key;
                    updateObj["/maps/" + fromMapId + "/addresses/" + key] = null;
                }
            }
            else {
                key = addrUpdate.addId;
                if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isUndefined"](key)) {
                    key = _this.metadata.ids.addId;
                    _this.metadata.ids.addId++;
                    updateObj["/metadata/ids/addId"] = _this.metadata.ids.addId;
                }
                var addrPath = "/addresses/" + key;
                updateObj[addrPath + "/unit"] = _this.getValueEmptyIfUndefined(addrUpdate.unit);
                updateObj[addrPath + "/hnum"] = _this.getValueEmptyIfUndefined(addrUpdate.hnum);
                updateObj[addrPath + "/st"] = _this.getValueEmptyIfUndefined(addrUpdate.st);
                updateObj[addrPath + "/lSt"] = _this.getValueEmptyIfUndefined(__WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"](addrUpdate.st));
                updateObj[addrPath + "/burb"] = _this.getValueEmptyIfUndefined(addrUpdate.burb);
                updateObj[addrPath + "/pcode"] = _this.getValueEmptyIfUndefined(addrUpdate.pcode);
                updateObj[addrPath + "/tel"] = _this.getValueEmptyIfUndefined(addrUpdate.tel);
                updateObj[addrPath + "/clat"] = _this.getValueEmptyIfUndefined(addrUpdate.clat);
                updateObj[addrPath + "/clong"] = _this.getValueEmptyIfUndefined(addrUpdate.clong);
                if (currentMap) {
                    var mapId = currentMap.id;
                    updateObj[addrPath + "/terId"] = currentMap.mapObj.terId;
                    updateObj[addrPath + "/mapId"] = mapId;
                    updateObj[addrPath + "/map"] = currentMap.mapObj.name;
                    updateObj["/maps/" + mapId + "/addresses/" + key] = key;
                }
            }
        });
        console.log(updateObj);
        this.db.database.ref().update(updateObj).then(function () {
            if (cb)
                cb();
        });
    };
    MapService.prototype.getValueEmptyIfUndefined = function (val) {
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["isUndefined"](val) ? '' : val;
    };
    MapService.prototype.updateAddrStat = function (mapId, addId, status, user, cb) {
        if (cb === void 0) { cb = null; }
        var updateObj = {};
        var nhData = {};
        updateObj["" + this.currentActiveMapRoot + mapId + "/address/" + addId] = status;
        if (status == 3 || status == 4) {
            // not at home 1 or 2
            nhData.nh_when = __WEBPACK_IMPORTED_MODULE_4_moment_es6___default()().toDate();
            nhData.nh_by = user.userInfoObj.name;
            updateObj["" + this.currentActiveMapRoot + mapId + "/det/" + addId + "/nh_when"] = nhData.nh_when;
            updateObj["" + this.currentActiveMapRoot + mapId + "/det/" + addId + "/nh_by"] = nhData.nh_by;
        }
        updateObj["" + this.currentActiveMapRoot + mapId + "/lastSaved"] = { id: user.userObj.uid, name: user.userInfoObj.name, when: __WEBPACK_IMPORTED_MODULE_4_moment_es6___default()().toDate() };
        this.db.database.ref().update(updateObj).then(function () {
            if (cb)
                cb(addId, status, nhData);
        });
    };
    MapService.prototype.updateAddrStats = function (map, user, cb) {
        var _this = this;
        if (cb === void 0) { cb = null; }
        var updateObj = {};
        var mapObj = map.mapObj;
        __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](map.addresses, function (addObj) {
            var nhData = {};
            var mapId = mapObj.$key;
            var addId = addObj.addId;
            var status = addObj.status;
            updateObj["" + _this.currentActiveMapRoot + mapId + "/address/" + addId] = status;
            if (status == 3 || status == 4) {
                // not at home 1 or 2
                nhData.nh_when = __WEBPACK_IMPORTED_MODULE_4_moment_es6___default()().toDate();
                nhData.nh_by = user.userInfoObj.name;
                updateObj["" + _this.currentActiveMapRoot + mapId + "/det/" + addId + "/nh_when"] = nhData.nh_when;
                updateObj["" + _this.currentActiveMapRoot + mapId + "/det/" + addId + "/nh_by"] = nhData.nh_by;
            }
            updateObj["" + _this.currentActiveMapRoot + mapId + "/lastSaved"] = { id: user.userObj.uid, name: user.userInfoObj.name, when: __WEBPACK_IMPORTED_MODULE_4_moment_es6___default()().toDate() };
        });
        // if (cb) cb(map);
        this.db.database.ref().update(updateObj).then(function () {
            if (cb)
                cb(mapObj);
        });
    };
    MapService.prototype.getCompletionPercentage = function (map) {
        if (map.mapObj.addresses && map.assgnObj && !__WEBPACK_IMPORTED_MODULE_2_lodash__["isUndefined"](map.assgnObj.address)) {
            return Math.round((this.getVisitedAddresses(map) / map.addressCount) * 100);
        }
        else {
            return 0;
        }
    };
    MapService.prototype.getVisitedAddresses = function (map) {
        var numDone = 0;
        if (map.mapObj.addresses && map.assgnObj && !__WEBPACK_IMPORTED_MODULE_2_lodash__["isUndefined"](map.assgnObj.address)) {
            __WEBPACK_IMPORTED_MODULE_2_lodash__["forOwn"](map.mapObj.addresses, function (addId, key) {
                if (!__WEBPACK_IMPORTED_MODULE_2_lodash__["isUndefined"](map.assgnObj.address[addId])) {
                    var status = __WEBPACK_IMPORTED_MODULE_2_lodash__["toNumber"](map.assgnObj.address[addId]);
                    switch (status) {
                        case 1:
                        case 2:
                        case 5:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                            numDone++;
                            break;
                        case 4:
                            if (!map.mapObj.search) {
                                numDone++;
                            }
                            break;
                    }
                }
            });
            return numDone;
        }
        else {
            return 0;
        }
    };
    MapService.prototype.getRemainingAddresses = function (map) {
        return map.addressCount - this.getVisitedAddresses(map);
    };
    MapService.prototype.getUserMapPath = function (userId, mapId) {
        if (mapId === void 0) { mapId = null; }
        if (this.metadata.mode.campaign) {
            return "/users/" + userId + "/campaign" + (__WEBPACK_IMPORTED_MODULE_2_lodash__["isNull"](mapId) ? '' : "/" + mapId);
        }
        else {
            return "/users/" + userId + "/maps" + (__WEBPACK_IMPORTED_MODULE_2_lodash__["isNull"](mapId) ? '' : "/" + mapId);
        }
    };
    MapService.prototype.getMapsUserUri = function () {
        if (this.metadata.mode.campaign) {
            return "campaignUsers";
        }
        else {
            return "users";
        }
    };
    MapService.prototype.isNormalMode = function () {
        return !this.metadata.mode.campaign;
    };
    MapService.prototype.isCampaignVisitOnce = function () {
        return this.metadata.mode.campaignVisitOnce;
    };
    MapService.prototype.enableGeolocation = function (onAddLocMarker) {
        if (navigator.geolocation) {
            this.locationWatch = navigator.geolocation.watchPosition(function (pos) {
                onAddLocMarker.emit({
                    position: { lat: pos.coords.latitude, lng: pos.coords.longitude }
                });
            }, function (error) {
                console.error(error);
            });
        }
    };
    MapService.prototype.disableGeolocation = function (onAddLocMarker) {
        if (navigator.geolocation) {
            navigator.geolocation.clearWatch(this.locationWatch);
            onAddLocMarker.emit(null);
        }
    };
    MapService.prototype.findByStreet = function (stName, cb) {
        this.findByTerm('/addresses/', 'lSt', __WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"](stName), false, cb);
    };
    MapService.prototype.findByTerm = function (path, term, param, isExactSearch, cb) {
        var ref = this.db.database.ref();
        if (isExactSearch) {
            ref.child(path).orderByChild(term).equalTo(param).on('value', function (snap) {
                if (!snap.val()) {
                    // try again...
                    ref.child(path).orderByChild(term).equalTo(__WEBPACK_IMPORTED_MODULE_2_lodash__["toInteger"](param)).on('value', function (snap2) {
                        cb(snap2.val());
                    });
                }
                else {
                    cb(snap.val());
                }
            });
        }
        else {
            ref.child(path).orderByChild(term).startAt(param).endAt(param + "\uF8FF").on('value', function (snap) {
                cb(snap.val());
            });
        }
        // const ref = this.db.database.ref(path);
        // var searchRes = [];
        // const queryObservable = this
        //
        // // subscribe to changes
        // queryObservable.subscribe(queriedItems => {
        //   console.log(queriedItems);
        // });
        //
        // return qSubject.next(param);
    };
    MapService.prototype.fsgHasCompletion = function (fsgName) {
        return fsgName != "Search" && fsgName != "Queue";
    };
    MapService.prototype.addNewFsg = function (fsgName, cb) {
        var that = this;
        var updateObj = {};
        updateObj["/fsg/list/" + fsgName] = fsgName;
        updateObj["/fsg/" + fsgName] = 0;
        this.db.database.ref().update(updateObj).then(function () {
            if (cb)
                cb();
        });
    };
    MapService.prototype.addNewMap = function (fsgName, mapName, isSearch, cb) {
        var updateObj = {};
        var terId = this.metadata.ids.terId;
        updateObj["/maps/" + terId] = {
            name: mapName,
            lname: __WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"](mapName),
            fsg: fsgName,
            terId: terId
        };
        updateObj["/fsg/" + fsgName + "/" + terId] = terId;
        updateObj["/metadata/ids/terId"] = terId + 1;
        this.db.database.ref().update(updateObj).then(function () {
            if (cb)
                cb();
        });
    };
    MapService.prototype.findByTerId = function (terId, cb) {
        this.findByTerm('/maps/', 'terId', terId, true, cb);
    };
    MapService.prototype.moveAddress = function (fromMapId, toMapId, toTerId, toMapName, fsg, addresses, cb) {
        var updateObj = {};
        __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](addresses, function (addr) {
            updateObj["/maps/" + fromMapId + "/addresses/" + addr.addId] = null;
            updateObj["/maps/" + toMapId + "/addresses/" + addr.addId] = addr.addId;
            updateObj["/addresses/" + addr.addId + "/mapId"] = toTerId;
            updateObj["/addresses/" + addr.addId + "/map"] = toMapName;
            updateObj["/addresses/" + addr.addId + "/fsg"] = fsg;
        });
        console.log(updateObj);
        this.db.database.ref().update(updateObj).then(function () {
            if (cb)
                cb();
        });
    };
    MapService.prototype.moveMap = function (mapId, mapKey, mapName, fromFsg, toFsg, cb) {
        var updateObj = {};
        updateObj["/maps/" + mapId + "/fsg"] = toFsg;
        updateObj["/maps/" + mapId + "/name"] = mapName;
        updateObj["/maps/" + mapId + "/lName"] = __WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"](mapName);
        updateObj["/fsg/" + fromFsg + "/" + mapKey] = null;
        updateObj["/fsg/" + toFsg + "/" + mapId] = mapId;
        console.log(updateObj);
        this.db.database.ref().update(updateObj).then(function () {
            if (cb)
                cb();
        });
    };
    return MapService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MapService.prototype, "onUpdate", void 0);
MapService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], MapService);

var _a;
//# sourceMappingURL=map.service.js.map

/***/ }),

/***/ "../../../../../src/app/map/mapslist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mapCard {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/mapslist.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<td-message *ngIf=\"!hasMaps\" label=\"Info\" sublabel=\"You have no maps, please contact the maps team if you are expecting maps.\" color=\"accent\" icon=\"info\"></td-message>\r\n<ng-container *ngFor=\"let fsg of fsgMaps; index as i \">\r\n  <td-expansion-panel #tdPanel (expanded)=\"toggleExpand(fsg, true)\" (collapsed)=\"toggleExpand(fsg, false)\" >\r\n    {{ addFsgComp(fsg, i, tdPanel) }}\r\n    <ng-template td-expansion-panel-header>\r\n      <mat-toolbar [ngClass]=\"'bgc-blue-grey-600 whiteText marginTopBottom-2'\">\r\n        <span><h2>{{ getFsgName(fsg) }}</h2> </span>\r\n        <span class=\"fill-remaining-space\"></span>\r\n        <span><mat-icon *ngIf=\"!fsg.expanded\">keyboard_arrow_down</mat-icon><mat-icon *ngIf=\"fsg.expanded\">keyboard_arrow_up</mat-icon></span>\r\n      </mat-toolbar>\r\n    </ng-template>\r\n    <mat-card class='mapCard' *ngFor=\"let map of fsg.maps\" [style.background-color]=\"getBgMap(map)\">\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          <h3>\r\n            <a *ngIf=\"canOpenMap(map); else elseBlock\" [routerLink]=\"['/map', map.id]\">\r\n              {{map.mapObj.terId}} - {{map.mapObj.name}} {{ isNormalMode() ? '' : '::: Campaign'}}\r\n            </a>\r\n            <ng-template #elseBlock >\r\n              {{map.mapObj.terId}} - {{map.mapObj.name}} {{ isNormalMode() ? '' : '::: Campaign'}}\r\n            </ng-template>\r\n          </h3>\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <mat-progress-bar class=\"marginBottom-10\" *ngIf=\"map.assgnObj && map.assgnObj.started\" [value]=\"getCompletionPercentage(map)\" [color]=\"primary\"></mat-progress-bar>\r\n        <div>\r\n          <mat-chip-list selectable=\"false\">\r\n            <mat-chip *ngIf=\"map.assgnObj && map.assgnObj.started\">Remaining: {{ getRemaining(map) }}</mat-chip>\r\n            <mat-chip>Addresses: {{map.addressCount}}</mat-chip>\r\n            <mat-chip *ngIf=\"map.assgnObj && map.assgnObj.lastSaved\">Last used on: {{ map.assgnObj.lastSaved.when  | date:'EEEE, hh:mm a, dd MMM y' }} </mat-chip>\r\n            <mat-chip *ngIf=\"map.assgnObj && map.assgnObj.lastSaved\">Last used by: {{ map.assgnObj.lastSaved.name }}</mat-chip>\r\n            <mat-chip *ngIf=\"map.hasOwner()\">Owner: {{ map.getOwner().name}} </mat-chip>\r\n            <mat-chip *ngIf=\"map.hasUsers()\">Users: {{ getMapUsers(map) }}</mat-chip>\r\n            <mat-chip *ngIf=\"map.assgnObj && map.assgnObj.started\">Started: {{ map.assgnObj.started | date:'dd MMM y'}}</mat-chip>\r\n            <mat-chip *ngIf=\"map.assgnObj && map.assgnObj.expiry\" [style.background-color]=\"getBg(map.assgnObj.expiry)\" >Expiry: {{ map.assgnObj.expiry | date:'dd MMM y'}}</mat-chip>\r\n            <mat-chip *ngIf=\"map.mapObj.lastCompleted && isUpdater() && isNormalMode()\">Last completed: {{ map.mapObj.lastCompleted | date:'dd MMM y'}}</mat-chip>\r\n            <mat-chip *ngIf=\"map.assgnObj.prevOwner && isUpdater()\" >Last Owner: {{ map.assgnObj.prevOwner.name }}</mat-chip>\r\n            <mat-chip *ngIf=\"map.assgnObj.isPersonal\">Personal Territory</mat-chip>\r\n            <mat-chip *ngIf=\"map.assgnObj.notes\">{{ map.assgnObj.notes }}</mat-chip>\r\n          </mat-chip-list>\r\n        </div>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <a *ngIf=\"canOpenMap(map)\" mat-mini-fab [routerLink]=\"['/map', map.id]\"><mat-icon>map</mat-icon></a>\r\n        <mapshare *ngIf=\"canOpenMap(map)\" [map]=\"map\" [campaignMode]=\"!isNormalMode()\"></mapshare>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </td-expansion-panel>\r\n</ng-container>\r\n<mat-card *ngIf=\"metadata\">\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      <h3>\r\n        Progress Report\r\n      </h3>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <h4 *ngIf=\"metadata.mode.campaign\">Days left for this campaign: {{ getCompletionReport().daysLeft }} days</h4>\r\n    <h4>Current overall map completion: {{ getOverallCompletion() }}% ( {{ getCompletionReport().completedMaps }} of {{ getMapCount() }} maps )</h4>\r\n    <h4>Current number addresses visited: {{ getCompletionReport().completionAddr }}% ( {{ getCompletionReport().visitedAddresses }} of {{ getCompletionReport().totalAddresses }} addresses )</h4>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/map/mapslist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_service__ = __webpack_require__("../../../../../src/app/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_base_component__ = __webpack_require__("../../../../../src/app/base/base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__windowref_service__ = __webpack_require__("../../../../../src/app/map/windowref.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_es6__ = __webpack_require__("../../../../moment-es6/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_es6___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment_es6__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsListComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MapsListComponent = (function (_super) {
    __extends(MapsListComponent, _super);
    function MapsListComponent(dialog, fireAuth, mapService, winRef) {
        var _this = _super.call(this) || this;
        _this.mapService = mapService;
        _this.winRef = winRef;
        _this.loaded = false;
        _this.hasMaps = false;
        _this.dialog = dialog;
        _this.fireAuth = fireAuth;
        winRef.redirHttps();
        return _this;
    }
    MapsListComponent.prototype.load = function () {
        var _this = this;
        this.showLoadingDialog();
        this.mapService.getMetadata().subscribe(function (meta) {
            _this.metadata = meta;
            if (_this.fireAuth.currentUser.isAdmin() || _this.fireAuth.currentUser.isUpdater()) {
                // load all if an admin...
                console.log("Loading current maps...");
                _this.getAllMapsList();
            }
            else {
                // load all assigned maps...
                if (_this.fireAuth.currentUser.isFsgAssistant()) {
                    _this.getFsgMaps();
                }
                else {
                    _this.getAllUserMaps();
                }
            }
            _this.loadPreferences();
            // pre-load the user list...
            _this.subs.push(_this.fireAuth.getAllUsersList().subscribe(function (userList) {
                console.log("User list pre-loaded..");
            }));
        });
    };
    MapsListComponent.prototype.getOverallCompletion = function () {
        if (this.metadata.mode.campaign) {
            return this.metadata.report.campaign.currentCompletion;
        }
        else {
            return this.metadata.report.regular.currentCompletion;
        }
    };
    MapsListComponent.prototype.getMapCount = function () {
        if (this.metadata.mode.campaign) {
            return this.metadata.report.campaign.mapCount;
        }
        else {
            return this.metadata.report.regular.mapCount;
        }
    };
    MapsListComponent.prototype.getCompletionReport = function () {
        if (this.metadata.mode.campaign) {
            return this.metadata.report.campaign;
        }
        else {
            return this.metadata.report.regular;
        }
    };
    MapsListComponent.prototype.getFsgMaps = function () {
        __WEBPACK_IMPORTED_MODULE_7_lodash__["forOwn"](this.fireAuth.currentUser.roles.fsg, function (flag, fsgName) {
        });
    };
    MapsListComponent.prototype.getAllUserMaps = function () {
        var _this = this;
        // maps listing depend on roles...
        console.log("Getting all user maps...");
        this.subs.push(this.mapService.getUserMaps(this.fireAuth.currentUser).subscribe(function (fsgMaps) {
            console.log("Got all user maps...");
            // remove all maps not shared....
            __WEBPACK_IMPORTED_MODULE_7_lodash__["forEach"](fsgMaps, function (fsg, idx) {
                __WEBPACK_IMPORTED_MODULE_7_lodash__["remove"](fsg.maps, function (map) {
                    return !map.isUser(_this.fireAuth.currentUser);
                });
                if (fsg.maps.length == 0 && fsgMaps.length > 0) {
                    fsgMaps.splice(idx, 1);
                }
                if (_this.fsgMaps) {
                    var fsgMatch = __WEBPACK_IMPORTED_MODULE_7_lodash__["find"](_this.fsgMaps, function (fsgM) {
                        return fsg.fsgName == fsgM.fsgName;
                    });
                    if (fsgMatch) {
                        console.log("Match found:::");
                        console.log(fsgMatch);
                        console.log(fsg);
                        fsgMatch.metadata = fsg.metadata;
                        fsgMatch.maps = fsg.maps;
                        fsgMatch.completedMapsCtr = fsg.completedMapsCtr;
                        fsgMatch.completionRate = fsg.completionRate;
                    }
                }
            });
            _this.hasMaps = fsgMaps && fsgMaps.length > 0;
            // if (!this.hasMaps) {
            //   this.oldFsgMaps = [];
            //   this.fsgMaps = [];
            // }
            // if (this.oldFsgMaps) {
            //   _.forEach(this.oldFsgMaps, (fsgMap) => {
            //     const currentFsg = _.find(this.fsgMaps, (curFsg) => {
            //       return curFsg.fsgName == fsgMap.fsgName
            //     });
            //     if (currentFsg) {
            //       currentFsg.expanded = fsgMap.expanded;
            //     }
            //   });
            // }
            // this.oldFsgMaps = this.fsgMaps;
            if (!_this.fsgMaps) {
                _this.fsgMaps = fsgMaps;
            }
            __WEBPACK_IMPORTED_MODULE_7_lodash__["each"](_this.fsgMaps, function (fsg) {
                fsg.maps = __WEBPACK_IMPORTED_MODULE_7_lodash__["sortBy"](fsg.maps, function (map) {
                    return __WEBPACK_IMPORTED_MODULE_7_lodash__["toInteger"](map.mapObj.terId);
                });
            });
            _this.hideLoadingDialog();
        }));
    };
    MapsListComponent.prototype.getFsgName = function (fsg) {
        if (fsg.fsgName != 'Your Maps') {
            return fsg.fsgName + " " + (this.mapService.fsgHasCompletion(fsg.fsgName) ? "- " + fsg.getCompletionPercent() + "%" : '');
        }
        return fsg.fsgName;
    };
    MapsListComponent.prototype.getAllMapsList = function () {
        var _this = this;
        // maps listing depend on roles...
        console.log("Getting all maps...");
        this.hasMaps = true;
        if (this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater()) {
            this.subs.push(this.mapService.getAllFsgMapsList(true).flatMap(function (fsgMaps) {
                __WEBPACK_IMPORTED_MODULE_7_lodash__["each"](fsgMaps, function (fsg) {
                    fsg.computeCompleted();
                    fsg.expanded = (_this.compMap ? _this.compMap[fsg.fsgName].fsg.expanded : false);
                });
                _this.fsgMaps = fsgMaps;
                console.log("All maps:");
                console.log(fsgMaps);
                return _this.mapService.getUserMaps(_this.fireAuth.currentUser);
            })
                .subscribe(function (userMaps) {
                // console.log(`User maps:`);
                // console.log(userMaps);
                if (_this.fsgMaps.length > 0 && userMaps.length > 0) {
                    // check if we need to add the "Your Maps"...
                    var userFsg = __WEBPACK_IMPORTED_MODULE_7_lodash__["find"](_this.fsgMaps, function (curFsg) {
                        return curFsg.fsgName == userMaps[0].fsgName;
                    });
                    if (!userFsg) {
                        _this.fsgMaps = userMaps.concat(_this.fsgMaps);
                    }
                }
                // if (this.oldFsgMaps) {
                //   // record the last diag open...
                //   _.forEach(this.oldFsgMaps, (fsgMap) => {
                //     // console.log(`Old:`);
                //     // console.log(fsgMap);
                //     const currentFsg = _.find(this.fsgMaps, (curFsg) => {
                //       return curFsg.fsgName == fsgMap.fsgName
                //     });
                //     if (currentFsg) {
                //       // console.log(`Set expanded state.`);
                //       currentFsg.expanded = fsgMap.expanded;
                //     }
                //   });
                // }
                // this.oldFsgMaps = this.fsgMaps;
                _this.hideLoadingDialog();
            }));
        }
    };
    MapsListComponent.prototype.getMapUsers = function (map) {
        var userList = '';
        __WEBPACK_IMPORTED_MODULE_7_lodash__["forEach"](map.getUsersList(), function (entry) {
            userList = "" + (__WEBPACK_IMPORTED_MODULE_7_lodash__["isEmpty"](userList) ? userList : userList + ', ') + entry.name;
        });
        return userList;
    };
    MapsListComponent.prototype.toggleExpand = function (fsg, expanded) {
        fsg.expanded = expanded;
    };
    MapsListComponent.prototype.canOpenMap = function (map) {
        // if (this.fireAuth.currentUser) {
        //   console.log(map.isUser(this.fireAuth.currentUser) || this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater());
        // }
        return this.fireAuth.currentUser
            && (map.isUser(this.fireAuth.currentUser) || this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater());
    };
    MapsListComponent.prototype.getCompletionPercentage = function (map) {
        return this.mapService.getCompletionPercentage(map);
    };
    MapsListComponent.prototype.getRemaining = function (map) {
        return this.mapService.getRemainingAddresses(map);
    };
    MapsListComponent.prototype.isUpdater = function () {
        return this.fireAuth.currentUser && (this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater());
    };
    MapsListComponent.prototype.getBg = function (expireDate, isNormalMode) {
        var today = __WEBPACK_IMPORTED_MODULE_6_moment_es6___default()();
        var expireMoment = __WEBPACK_IMPORTED_MODULE_6_moment_es6___default()(expireDate);
        var criticalMoment = __WEBPACK_IMPORTED_MODULE_6_moment_es6___default()().add(3, 'days');
        var soonMoment = __WEBPACK_IMPORTED_MODULE_6_moment_es6___default()().add(6, 'days');
        if (today.isSameOrAfter(expireMoment) || today.isBetween(criticalMoment, expireMoment, null, '[]')) {
            return "pink";
        }
        if (today.isBetween(soonMoment, expireMoment, null, '[]')) {
            return "yellow";
        }
        return "lightgray";
    };
    MapsListComponent.prototype.getBgMap = function (map) {
        var doneCtr = map.mapObj.doneCtr;
        if (!this.isNormalMode()) {
            doneCtr = map.mapObj.campaignCtr;
        }
        if (doneCtr > 0) {
            return "lightgray";
        }
        return "white";
    };
    MapsListComponent.prototype.isNormalMode = function () {
        return this.mapService.isNormalMode();
    };
    MapsListComponent.prototype.loadPreferences = function () {
        var _this = this;
        this.fireAuth.getUserInfo(this.fireAuth.currentUser).subscribe(function (user) {
            if (user.userInfoObj.geo) {
                var geoLocEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
                var lastSaved_1 = null;
                geoLocEmitter.subscribe(function (pos) {
                    var now = __WEBPACK_IMPORTED_MODULE_6_moment_es6___default()();
                    if (lastSaved_1 != null && now.isBefore(lastSaved_1.add(1, 'minute'))) {
                        return;
                    }
                    lastSaved_1 = now;
                    _this.fireAuth.saveLoc(_this.fireAuth.currentUser.userObj.uid, pos);
                });
                _this.mapService.enableGeolocation(geoLocEmitter);
            }
            _this.fireAuth.saveOnlineStat(_this.fireAuth.currentUser);
        });
    };
    MapsListComponent.prototype.addFsgComp = function (fsg, i, comp) {
        if (!this.compMap) {
            this.compMap = {};
        }
        if (!this.compMap[fsg.fsgName]) {
            this.compMap[fsg.fsgName] = { comp: comp, fsg: fsg };
            if (fsg.fsgName == 'Your Maps') {
                comp.open();
            }
        }
    };
    return MapsListComponent;
}(__WEBPACK_IMPORTED_MODULE_3__base_base_component__["a" /* BaseComponent */]));
MapsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mapslist-component',
        template: __webpack_require__("../../../../../src/app/map/mapslist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map/mapslist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__user_user_component__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_user_component__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__map_service__["a" /* MapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__map_service__["a" /* MapService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__windowref_service__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__windowref_service__["a" /* WindowRef */]) === "function" && _d || Object])
], MapsListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=mapslist.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/marker-cluster.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__markerclusterer_js__ = __webpack_require__("../../../../../src/app/map/markerclusterer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__markerclusterer_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__markerclusterer_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkerClusterDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MarkerClusterDirective = (function () {
    function MarkerClusterDirective(gmapsApi) {
        this.gmapsApi = gmapsApi;
        this.markers = [];
        this.maxTypeIdx = 3;
        this.maxColorIdx = 3;
        this.markerIcons = [];
        this.hasLoaded = false;
        this.style = {
            url: '/assets/images/place-markers/cluster.png',
            height: 40,
            width: 40,
            textColor: '#FFF',
            textSize: 11,
            backgroundPosition: 'center center'
        };
        this.options = {
            imagePath: '/assets/images/place-markers/cluster',
            gridSize: 20,
            minimumClusterSize: 2,
            styles: [this.style, this.style, this.style]
        };
        this.minimumClusterSize = 2;
    }
    MarkerClusterDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.onUpdate.subscribe(function (data) {
            _this.clearMarkers();
            _this.loadPoints();
        });
        this.onSetShowClusterInfo.subscribe(function (showStat) {
            _this.markerCluster.setShowInfo(showStat);
        });
        if (this.onFit) {
            this.onFit.subscribe(function (trigger) {
                _this.fitBounds();
            });
        }
        if (this.onClear) {
            this.onClear.subscribe(function (trigger) {
                _this.clearMarkers();
            });
        }
        if (this.onAddLocMarker) {
            this.onAddLocMarker.subscribe(function (markerConfig) {
                _this.gmapsApi.getNativeMap().then(function (map) {
                    _this.resetBounds();
                    if (!_this.locationMarker) {
                        _this.locationMarker = new google.maps.Marker({
                            position: markerConfig.position,
                            map: map,
                            icon: markerConfig.iconUrl,
                            optimized: false
                        });
                        _this.bounds.extend(_this.locationMarker.getPosition());
                    }
                    else {
                        if (markerConfig) {
                            var latlng = new google.maps.LatLng(markerConfig.position.lat, markerConfig.position.lng);
                            _this.locationMarker.setPosition(latlng);
                            _this.bounds.extend(_this.locationMarker.getPosition());
                        }
                        else {
                            _this.locationMarker.setMap(null);
                            _this.locationMarker = null;
                        }
                    }
                });
            });
        }
    };
    MarkerClusterDirective.prototype.resetBounds = function () {
        var _this = this;
        this.bounds = new google.maps.LatLngBounds();
        __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](this.markers, function (marker) {
            _this.bounds.extend(marker.getPosition());
        });
    };
    MarkerClusterDirective.prototype.ngOnChanges = function (changes) {
        this.clearMarkers();
        this.loadPoints();
    };
    MarkerClusterDirective.prototype.loadPoints = function () {
        var _this = this;
        if (!this.points || this.points.length == 0) {
            console.log("No points to load...");
            return;
        }
        this.bounds = new google.maps.LatLngBounds(); // empty bounds object
        this.gmapsApi.getNativeMap().then(function (map) {
            if (__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](_this.markerIcons)) {
                _this.scaledMarkerSize = new google.maps.Size(35, 35);
                for (var t = 0; t <= _this.maxTypeIdx; t++) {
                    for (var c = 0; c <= _this.maxColorIdx; c++) {
                        var pinUrl = "/assets/images/place-markers/pin-" + t + "-" + c + ".svg";
                        _this.markerIcons.push({ scaledSize: _this.scaledMarkerSize, url: pinUrl });
                    }
                }
            }
            __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"]
                .interval(500)
                .skipWhile(function (s) { return _this.points == null || _this.points.length <= 0; })
                .take(1)
                .subscribe(function () {
                if (_this.points.length > 0) {
                    console.log("Painting markers...");
                    var clickEmitter_1 = _this.onAddressClick;
                    var _loop_1 = function (point) {
                        var marker = new google.maps.Marker({
                            position: new google.maps.LatLng(point.addObj.clat, point.addObj.clong),
                            icon: _this.markerIcons[point.markerIdx % _this.markerIcons.length]
                        });
                        if (point.marker) {
                            marker = point.marker;
                        }
                        if (point.modalMode) {
                            marker.addListener('click', function () {
                                clickEmitter_1.emit({ gmap: map, gmarker: marker, addrMarker: point });
                            });
                        }
                        else {
                            var contentString = "<div id=\"info-window\">" + point.infoWindowStr + "</div>";
                            marker.infoWindowStr = point.infoWindowStr;
                            var infowindow_1 = new google.maps.InfoWindow({
                                content: contentString
                            });
                            marker.addListener('click', function () {
                                infowindow_1.open(map, marker);
                            });
                            // marker.addListener('click', function() {
                            //   clickEmitter.emit({gmap: map, gmarker: marker, addrMarker: point});
                            // });
                        }
                        // marker.addListener('mouseout', function() {
                        //   infowindow.close(map, marker);
                        // });
                        _this.markers.push(marker);
                        _this.bounds.extend(marker.getPosition());
                    };
                    for (var _i = 0, _a = _this.points; _i < _a.length; _i++) {
                        var point = _a[_i];
                        _loop_1(point);
                    }
                }
                else {
                    _this.markers = [];
                }
                _this.options.minimumClusterSize = _this.minimumClusterSize;
                _this.markerCluster = new MarkerClusterer(map, _this.markers, _this.options);
                // check if we've loaded already, ignore if already loaded...
                if (!_this.hasLoaded) {
                    _this.hasLoaded = true;
                    map.setCenter(_this.bounds.getCenter());
                    map.fitBounds(_this.bounds);
                }
            });
        });
    };
    MarkerClusterDirective.prototype.clearMarkers = function () {
        if (this.markerCluster) {
            __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](this.markers, function (marker) {
                google.maps.event.clearListeners(marker, 'click');
            });
            this.markers = [];
            this.markerCluster.clearMarkers();
        }
    };
    MarkerClusterDirective.prototype.fitBounds = function () {
        var _this = this;
        this.gmapsApi.getNativeMap().then(function (map) {
            map.setCenter(_this.bounds.getCenter());
            map.fitBounds(_this.bounds);
        });
    };
    return MarkerClusterDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MarkerClusterDirective.prototype, "points", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], MarkerClusterDirective.prototype, "onUpdate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], MarkerClusterDirective.prototype, "onFit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], MarkerClusterDirective.prototype, "onSetShowClusterInfo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], MarkerClusterDirective.prototype, "onClear", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _e || Object)
], MarkerClusterDirective.prototype, "onAddressClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _f || Object)
], MarkerClusterDirective.prototype, "onAddLocMarker", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], MarkerClusterDirective.prototype, "markerIcons", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MarkerClusterDirective.prototype, "style", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MarkerClusterDirective.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], MarkerClusterDirective.prototype, "minimumClusterSize", void 0);
MarkerClusterDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'marker-cluster'
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* GoogleMapsAPIWrapper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__agm_core__["b" /* GoogleMapsAPIWrapper */]) === "function" && _g || Object])
], MarkerClusterDirective);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=marker-cluster.js.map

/***/ }),

/***/ "../../../../../src/app/map/markerclusterer.js":
/***/ (function(module, exports) {

// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url https://raw.githubusercontent.com/google/closure-compiler/master/contrib/externs/maps/google_maps_api_v3.js
// ==/ClosureCompiler==

/**
 * @name MarkerClusterer for Google Maps v3
 * @version version 1.0
 * @author Luke Mahe
 * @fileoverview
 * The library creates and manages per-zoom-level clusters for large amounts of
 * markers.
 * <br/>
 * This is a v3 implementation of the
 * <a href="http://gmaps-utility-library-dev.googlecode.com/svn/tags/markerclusterer/"
 * >v2 MarkerClusterer</a>.
 */

/**
 * @license
 * Copyright 2010 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * A Marker Clusterer that clusters markers.
 *
 * @param {google.maps.Map} map The Google map to attach to.
 * @param {Array.<google.maps.Marker>=} opt_markers Optional markers to add to
 *   the cluster.
 * @param {Object=} opt_options support the following options:
 *     'gridSize': (number) The grid size of a cluster in pixels.
 *     'maxZoom': (number) The maximum zoom level that a marker can be part of a
 *                cluster.
 *     'zoomOnClick': (boolean) Whether the default behaviour of clicking on a
 *                    cluster is to zoom into it.
 *     'averageCenter': (boolean) Whether the center of each cluster should be
 *                      the average of all markers in the cluster.
 *     'minimumClusterSize': (number) The minimum number of markers to be in a
 *                           cluster before the markers are hidden and a count
 *                           is shown.
 *     'styles': (object) An object that has style properties:
 *       'url': (string) The image url.
 *       'height': (number) The image height.
 *       'width': (number) The image width.
 *       'anchor': (Array) The anchor position of the label text.
 *       'textColor': (string) The text color.
 *       'textSize': (number) The text size.
 *       'backgroundPosition': (string) The position of the backgound x, y.
 *       'iconAnchor': (Array) The anchor position of the icon x, y.
 * @constructor
 * @extends google.maps.OverlayView
 */
function MarkerClusterer(map, opt_markers, opt_options) {
  // MarkerClusterer implements google.maps.OverlayView interface. We use the
  // extend function to extend MarkerClusterer with google.maps.OverlayView
  // because it might not always be available when the code is defined so we
  // look for it at the last possible moment. If it doesn't exist now then
  // there is no point going ahead :)
  this.extend(MarkerClusterer, google.maps.OverlayView);
  this.map_ = map;
  this.showInfo = false;
  /**
   * @type {Array.<google.maps.Marker>}
   * @private
   */
  this.markers_ = [];

  /**
   *  @type {Array.<Cluster>}
   */
  this.clusters_ = [];

  this.sizes = [53, 56, 66, 78, 90];

  /**
   * @private
   */
  this.styles_ = [];

  /**
   * @type {boolean}
   * @private
   */
  this.ready_ = false;

  var options = opt_options || {};

  /**
   * @type {number}
   * @private
   */
  this.gridSize_ = options['gridSize'] || 60;

  /**
   * @private
   */
  this.minClusterSize_ = options['minimumClusterSize'] || 2;


  /**
   * @type {?number}
   * @private
   */
  this.maxZoom_ = options['maxZoom'] || null;

  this.styles_ = options['styles'] || [];

  /**
   * @type {string}
   * @private
   */
  this.imagePath_ = options['imagePath'] ||
      this.MARKER_CLUSTER_IMAGE_PATH_;

  /**
   * @type {string}
   * @private
   */
  this.imageExtension_ = options['imageExtension'] ||
      this.MARKER_CLUSTER_IMAGE_EXTENSION_;

  /**
   * @type {boolean}
   * @private
   */
  this.zoomOnClick_ = true;

  if (options['zoomOnClick'] != undefined) {
    this.zoomOnClick_ = options['zoomOnClick'];
  }

  /**
   * @type {boolean}
   * @private
   */
  this.averageCenter_ = false;

  if (options['averageCenter'] != undefined) {
    this.averageCenter_ = options['averageCenter'];
  }

  this.setupStyles_();

  this.setMap(map);

  /**
   * @type {number}
   * @private
   */
  this.prevZoom_ = this.map_.getZoom();

  // Add the map event listeners
  var that = this;
  google.maps.event.addListener(this.map_, 'zoom_changed', function () {
    var zoom = that.map_.getZoom();

    if (that.prevZoom_ != zoom) {
      that.prevZoom_ = zoom;
      that.resetViewport();
    }
  });

  google.maps.event.addListener(this.map_, 'idle', function () {
    that.redraw();
  });

  // Finally, add the markers
  if (opt_markers && opt_markers.length) {
    this.addMarkers(opt_markers, false);
  }
}


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ = '../images/m';


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = 'png';


/**
 * Extends a objects prototype by anothers.
 *
 * @param {Object} obj1 The object to be extended.
 * @param {Object} obj2 The object to extend with.
 * @return {Object} The new extended object.
 * @ignore
 */
MarkerClusterer.prototype.extend = function (obj1, obj2) {
  return (function (object) {
    for (var property in object.prototype) {
      this.prototype[property] = object.prototype[property];
    }
    return this;
  }).apply(obj1, [obj2]);
};


/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.onAdd = function () {
  this.setReady_(true);
};

/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.draw = function () { };

/**
 * Sets up the styles object.
 *
 * @private
 */
MarkerClusterer.prototype.setupStyles_ = function () {
  if (this.styles_.length) {
    return;
  }

  for (var i = 0, size; size = this.sizes[i]; i++) {
    this.styles_.push({
      url: this.imagePath_ + (i + 1) + '.' + this.imageExtension_,
      height: size,
      width: size
    });
  }
};

/**
 *  Fit the map to the bounds of the markers in the clusterer.
 */
MarkerClusterer.prototype.fitMapToMarkers = function () {
  var markers = this.getMarkers();
  var bounds = new google.maps.LatLngBounds();
  for (var i = 0, marker; marker = markers[i]; i++) {
    bounds.extend(marker.getPosition());
  }

  this.map_.fitBounds(bounds);
};


/**
 *  Sets the styles.
 *
 *  @param {Object} styles The style to set.
 */
MarkerClusterer.prototype.setStyles = function (styles) {
  this.styles_ = styles;
};


/**
 *  Gets the styles.
 *
 *  @return {Object} The styles object.
 */
MarkerClusterer.prototype.getStyles = function () {
  return this.styles_;
};


/**
 * Whether zoom on click is set.
 *
 * @return {boolean} True if zoomOnClick_ is set.
 */
MarkerClusterer.prototype.isZoomOnClick = function () {
  return this.zoomOnClick_;
};

/**
 * Whether average center is set.
 *
 * @return {boolean} True if averageCenter_ is set.
 */
MarkerClusterer.prototype.isAverageCenter = function () {
  return this.averageCenter_;
};


/**
 *  Returns the array of markers in the clusterer.
 *
 *  @return {Array.<google.maps.Marker>} The markers.
 */
MarkerClusterer.prototype.getMarkers = function () {
  return this.markers_;
};


/**
 *  Returns the number of markers in the clusterer
 *
 *  @return {Number} The number of markers.
 */
MarkerClusterer.prototype.getTotalMarkers = function () {
  return this.markers_.length;
};


/**
 *  Sets the max zoom for the clusterer.
 *
 *  @param {number} maxZoom The max zoom level.
 */
MarkerClusterer.prototype.setMaxZoom = function (maxZoom) {
  this.maxZoom_ = maxZoom;
};


/**
 *  Gets the max zoom for the clusterer.
 *
 *  @return {number} The max zoom level.
 */
MarkerClusterer.prototype.getMaxZoom = function () {
  return this.maxZoom_;
};


/**
 *  The function for calculating the cluster icon image.
 *
 *  @param {Array.<google.maps.Marker>} markers The markers in the clusterer.
 *  @param {number} numStyles The number of styles available.
 *  @return {Object} A object properties: 'text' (string) and 'index' (number).
 *  @private
 */
MarkerClusterer.prototype.calculator_ = function (markers, numStyles) {
  var index = 0;
  var count = markers.length;
  var dv = count;
  while (dv !== 0) {
    dv = parseInt(dv / 10, 10);
    index++;
  }

  index = Math.min(index, numStyles);
  return {
    text: count,
    index: index
  };
};


/**
 * Set the calculator function.
 *
 * @param {function(Array, number)} calculator The function to set as the
 *     calculator. The function should return a object properties:
 *     'text' (string) and 'index' (number).
 *
 */
MarkerClusterer.prototype.setCalculator = function (calculator) {
  this.calculator_ = calculator;
};


/**
 * Get the calculator function.
 *
 * @return {function(Array, number)} the calculator function.
 */
MarkerClusterer.prototype.getCalculator = function () {
  return this.calculator_;
};


/**
 * Add an array of markers to the clusterer.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarkers = function (markers, opt_nodraw) {
  for (var i = 0, marker; marker = markers[i]; i++) {
    this.pushMarkerTo_(marker);
  }
  if (!opt_nodraw) {
    this.redraw();
  }
};


/**
 * Pushes a marker to the clusterer.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.pushMarkerTo_ = function (marker) {
  marker.isAdded = false;
  if (marker['draggable']) {
    // If the marker is draggable add a listener so we update the clusters on
    // the drag end.
    var that = this;
    google.maps.event.addListener(marker, 'dragend', function () {
      marker.isAdded = false;
      that.repaint();
    });
  }
  this.markers_.push(marker);
};


/**
 * Adds a marker to the clusterer and redraws if needed.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarker = function (marker, opt_nodraw) {
  this.pushMarkerTo_(marker);
  if (!opt_nodraw) {
    this.redraw();
  }
};


/**
 * Removes a marker and returns true if removed, false if not
 *
 * @param {google.maps.Marker} marker The marker to remove
 * @return {boolean} Whether the marker was removed or not
 * @private
 */
MarkerClusterer.prototype.removeMarker_ = function (marker) {
  var index = -1;
  if (this.markers_.indexOf) {
    index = this.markers_.indexOf(marker);
  } else {
    for (var i = 0, m; m = this.markers_[i]; i++) {
      if (m == marker) {
        index = i;
        break;
      }
    }
  }

  if (index == -1) {
    // Marker is not in our list of markers.
    return false;
  }

  marker.setMap(null);

  this.markers_.splice(index, 1);

  return true;
};


/**
 * Remove a marker from the cluster.
 *
 * @param {google.maps.Marker} marker The marker to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 * @return {boolean} True if the marker was removed.
 */
MarkerClusterer.prototype.removeMarker = function (marker, opt_nodraw) {
  var removed = this.removeMarker_(marker);

  if (!opt_nodraw && removed) {
    this.resetViewport();
    this.redraw();
    return true;
  } else {
    return false;
  }
};


/**
 * Removes an array of markers from the cluster.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 */
MarkerClusterer.prototype.removeMarkers = function (markers, opt_nodraw) {
  var removed = false;

  for (var i = 0, marker; marker = markers[i]; i++) {
    var r = this.removeMarker_(marker);
    removed = removed || r;
  }

  if (!opt_nodraw && removed) {
    this.resetViewport();
    this.redraw();
    return true;
  }
};


/**
 * Sets the clusterer's ready state.
 *
 * @param {boolean} ready The state.
 * @private
 */
MarkerClusterer.prototype.setReady_ = function (ready) {
  if (!this.ready_) {
    this.ready_ = ready;
    this.createClusters_();
  }
};


/**
 * Returns the number of clusters in the clusterer.
 *
 * @return {number} The number of clusters.
 */
MarkerClusterer.prototype.getTotalClusters = function () {
  return this.clusters_.length;
};


/**
 * Returns the google map that the clusterer is associated with.
 *
 * @return {google.maps.Map} The map.
 */
MarkerClusterer.prototype.getMap = function () {
  return this.map_;
};


/**
 * Sets the google map that the clusterer is associated with.
 *
 * @param {google.maps.Map} map The map.
 */
MarkerClusterer.prototype.setMap = function (map) {
  this.map_ = map;
};


/**
 * Returns the size of the grid.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getGridSize = function () {
  return this.gridSize_;
};


/**
 * Sets the size of the grid.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setGridSize = function (size) {
  this.gridSize_ = size;
};


/**
 * Returns the min cluster size.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getMinClusterSize = function () {
  return this.minClusterSize_;
};

/**
 * Sets the min cluster size.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setMinClusterSize = function (size) {
  this.minClusterSize_ = size;
};


/**
 * Extends a bounds object by the grid size.
 *
 * @param {google.maps.LatLngBounds} bounds The bounds to extend.
 * @return {google.maps.LatLngBounds} The extended bounds.
 */
MarkerClusterer.prototype.getExtendedBounds = function (bounds) {
  var projection = this.getProjection();

  // Turn the bounds into latlng.
  var tr = new google.maps.LatLng(bounds.getNorthEast().lat(),
      bounds.getNorthEast().lng());
  var bl = new google.maps.LatLng(bounds.getSouthWest().lat(),
      bounds.getSouthWest().lng());

  // Convert the points to pixels and the extend out by the grid size.
  var trPix = projection.fromLatLngToDivPixel(tr);
  trPix.x += this.gridSize_;
  trPix.y -= this.gridSize_;

  var blPix = projection.fromLatLngToDivPixel(bl);
  blPix.x -= this.gridSize_;
  blPix.y += this.gridSize_;

  // Convert the pixel points back to LatLng
  var ne = projection.fromDivPixelToLatLng(trPix);
  var sw = projection.fromDivPixelToLatLng(blPix);

  // Extend the bounds to contain the new bounds.
  bounds.extend(ne);
  bounds.extend(sw);

  return bounds;
};


/**
 * Determins if a marker is contained in a bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @param {google.maps.LatLngBounds} bounds The bounds to check against.
 * @return {boolean} True if the marker is in the bounds.
 * @private
 */
MarkerClusterer.prototype.isMarkerInBounds_ = function (marker, bounds) {
  return bounds.contains(marker.getPosition());
};


/**
 * Clears all clusters and markers from the clusterer.
 */
MarkerClusterer.prototype.clearMarkers = function () {
  this.hideAllClusterInfo();
  this.resetViewport(true);

  // Set the markers a empty array.
  this.markers_ = [];
};


/**
 * Clears all existing clusters and recreates them.
 * @param {boolean} opt_hide To also hide the marker.
 */
MarkerClusterer.prototype.resetViewport = function (opt_hide) {
  this.hideAllClusterInfo();
  // Remove all the clusters
  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
    cluster.remove();
  }

  // Reset the markers to not be added and to be invisible.
  for (var i = 0, marker; marker = this.markers_[i]; i++) {
    marker.isAdded = false;
    if (opt_hide) {
      marker.setMap(null);
    }
  }

  this.clusters_ = [];
};

/**
 *
 */
MarkerClusterer.prototype.repaint = function () {
  var oldClusters = this.clusters_.slice();
  this.clusters_.length = 0;
  this.resetViewport();
  this.redraw();

  // Remove the old clusters.
  // Do it in a timeout so the other clusters have been drawn first.
  window.setTimeout(function () {
    for (var i = 0, cluster; cluster = oldClusters[i]; i++) {
      cluster.remove();
    }
  }, 0);
};


/**
 * Redraws the clusters.
 */
MarkerClusterer.prototype.redraw = function () {
  this.createClusters_();
};


/**
 * Calculates the distance between two latlng locations in km.
 * @see http://www.movable-type.co.uk/scripts/latlong.html
 *
 * @param {google.maps.LatLng} p1 The first lat lng point.
 * @param {google.maps.LatLng} p2 The second lat lng point.
 * @return {number} The distance between the two points in km.
 * @private
*/
MarkerClusterer.prototype.distanceBetweenPoints_ = function (p1, p2) {
  if (!p1 || !p2) {
    return 0;
  }

  var R = 6371; // Radius of the Earth in km
  var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
  var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
};


/**
 * Add a marker to a cluster, or creates a new cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.addToClosestCluster_ = function (marker) {
  var distance = 40000; // Some large number
  var clusterToAddTo = null;
  var pos = marker.getPosition();
  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
    var center = cluster.getCenter();
    if (center) {
      var d = this.distanceBetweenPoints_(center, marker.getPosition());
      if (d < distance) {
        distance = d;
        clusterToAddTo = cluster;
      }
    }
  }

  if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
    clusterToAddTo.addMarker(marker);
  } else {
    var cluster = new Cluster(this);
    cluster.setShowInfo(this.showInfo);
    cluster.addMarker(marker);
    this.clusters_.push(cluster);
  }
};


/**
 * Creates the clusters.
 *
 * @private
 */
MarkerClusterer.prototype.createClusters_ = function () {
  if (!this.ready_) {
    return;
  }

  // Get our current map view bounds.
  // Create a new bounds object so we don't affect the map.
  var mapBounds = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),
      this.map_.getBounds().getNorthEast());
  var bounds = this.getExtendedBounds(mapBounds);

  for (var i = 0, marker; marker = this.markers_[i]; i++) {
    if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
      this.addToClosestCluster_(marker);
    }
  }
};

MarkerClusterer.prototype.hideAllClusterInfo = function() {
  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
    cluster.closeAllInfo();
  }
};

MarkerClusterer.prototype.setShowInfo = function(show) {
  this.showInfo = show;
  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
    cluster.setShowInfo(show);
    if (!show) {
      cluster.closeAllInfo();
    }
  }
};

/**
 * A cluster that contains markers.
 *
 * @param {MarkerClusterer} markerClusterer The markerclusterer that this
 *     cluster is associated with.
 * @constructor
 * @ignore
 */
function Cluster(markerClusterer) {
  this.markerClusterer_ = markerClusterer;
  this.map_ = markerClusterer.getMap();
  this.gridSize_ = markerClusterer.getGridSize();
  this.minClusterSize_ = markerClusterer.getMinClusterSize();
  this.averageCenter_ = markerClusterer.isAverageCenter();
  this.center_ = null;
  this.markers_ = [];
  this.bounds_ = null;
  this.clusterIcon_ = new ClusterIcon(this, markerClusterer.getStyles(),
      markerClusterer.getGridSize());
  this.infoWindowStr = null;
}

Cluster.prototype.closeAllInfo = function() {
  this.clusterIcon_.closeAllInfo();
};

Cluster.prototype.setShowInfo = function(show) {
  this.clusterIcon_.showInfo = show;
};
/**
 * Determins if a marker is already added to the cluster.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker is already added.
 */
Cluster.prototype.isMarkerAlreadyAdded = function (marker) {
  if (this.markers_.indexOf) {
    return this.markers_.indexOf(marker) != -1;
  } else {
    for (var i = 0, m; m = this.markers_[i]; i++) {
      if (m == marker) {
        return true;
      }
    }
  }
  return false;
};


/**
 * Add a marker the cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @return {boolean} True if the marker was added.
 */
Cluster.prototype.addMarker = function (marker) {
  if (this.isMarkerAlreadyAdded(marker)) {
    return false;
  }

  if (!this.center_) {
    this.center_ = marker.getPosition();
    this.calculateBounds_();
  } else {
    if (this.averageCenter_) {
      var l = this.markers_.length + 1;
      var lat = (this.center_.lat() * (l - 1) + marker.getPosition().lat()) / l;
      var lng = (this.center_.lng() * (l - 1) + marker.getPosition().lng()) / l;
      this.center_ = new google.maps.LatLng(lat, lng);
      this.calculateBounds_();
    }
  }

  marker.isAdded = true;
  this.markers_.push(marker);

  var len = this.markers_.length;
  if (len < this.minClusterSize_ && marker.getMap() != this.map_) {
    // Min cluster size not reached so show the marker.
    marker.setMap(this.map_);
  }

  if (len == this.minClusterSize_) {
    // Hide the markers that were showing.
    for (var i = 0; i < len; i++) {
      this.markers_[i].setMap(null);
    }
  }

  if (len >= this.minClusterSize_) {
    marker.setMap(null);
  }

  this.updateIcon();
  // recreate the info window string
  this.infoWindowStr = (this.infoWindowStr ?  this.infoWindowStr + '<hr>' : "") + marker.infoWindowStr;

  return true;
};


/**
 * Returns the marker clusterer that the cluster is associated with.
 *
 * @return {MarkerClusterer} The associated marker clusterer.
 */
Cluster.prototype.getMarkerClusterer = function () {
  return this.markerClusterer_;
};


/**
 * Returns the bounds of the cluster.
 *
 * @return {google.maps.LatLngBounds} the cluster bounds.
 */
Cluster.prototype.getBounds = function () {
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  var markers = this.getMarkers();
  for (var i = 0, marker; marker = markers[i]; i++) {
    bounds.extend(marker.getPosition());
  }
  return bounds;
};


/**
 * Removes the cluster
 */
Cluster.prototype.remove = function () {
  this.clusterIcon_.remove();
  this.markers_.length = 0;
  delete this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {number} The cluster center.
 */
Cluster.prototype.getSize = function () {
  return this.markers_.length;
};


/**
 * Returns the center of the cluster.
 *
 * @return {Array.<google.maps.Marker>} The cluster center.
 */
Cluster.prototype.getMarkers = function () {
  return this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {google.maps.LatLng} The cluster center.
 */
Cluster.prototype.getCenter = function () {
  return this.center_;
};


/**
 * Calculated the extended bounds of the cluster with the grid.
 *
 * @private
 */
Cluster.prototype.calculateBounds_ = function () {
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
};


/**
 * Determines if a marker lies in the clusters bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker lies in the bounds.
 */
Cluster.prototype.isMarkerInClusterBounds = function (marker) {
  return this.bounds_.contains(marker.getPosition());
};


/**
 * Returns the map that the cluster is associated with.
 *
 * @return {google.maps.Map} The map.
 */
Cluster.prototype.getMap = function () {
  return this.map_;
};


/**
 * Updates the cluster icon
 */
Cluster.prototype.updateIcon = function () {
  var zoom = this.map_.getZoom();
  var mz = this.markerClusterer_.getMaxZoom();

  if (mz && zoom > mz) {
    // The zoom is greater than our max zoom so show all the markers in cluster.
    for (var i = 0, marker; marker = this.markers_[i]; i++) {
      marker.setMap(this.map_);
    }
    return;
  }

  if (this.markers_.length < this.minClusterSize_) {
    // Min cluster size not yet reached.
    this.clusterIcon_.hide();
    return;
  }

  var numStyles = this.markerClusterer_.getStyles().length;
  var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
  this.clusterIcon_.setCenter(this.center_);
  this.clusterIcon_.setSums(sums);
  this.clusterIcon_.show();
};


/**
 * A cluster icon
 *
 * @param {Cluster} cluster The cluster to be associated with.
 * @param {Object} styles An object that has style properties:
 *     'url': (string) The image url.
 *     'height': (number) The image height.
 *     'width': (number) The image width.
 *     'anchor': (Array) The anchor position of the label text.
 *     'textColor': (string) The text color.
 *     'textSize': (number) The text size.
 *     'backgroundPosition: (string) The background postition x, y.
 * @param {number=} opt_padding Optional padding to apply to the cluster icon.
 * @constructor
 * @extends google.maps.OverlayView
 * @ignore
 */
function ClusterIcon(cluster, styles, opt_padding, showInfo) {
  cluster.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);

  this.styles_ = styles;
  this.padding_ = opt_padding || 0;
  this.cluster_ = cluster;
  this.center_ = null;
  this.map_ = cluster.getMap();
  this.div_ = null;
  this.sums_ = null;
  this.visible_ = false;
  this.infowindow = null;
  this.showInfo = showInfo;
  this.setMap(this.map_);
}


/**
 * Triggers the clusterclick event and zoom's if the option is set.
 *
 * @param {google.maps.MouseEvent} event The event to propagate
 */
ClusterIcon.prototype.triggerClusterClick = function (event) {
  var markerClusterer = this.cluster_.getMarkerClusterer();

  // Trigger the clusterclick event.
  google.maps.event.trigger(markerClusterer, 'clusterclick', this.cluster_, event);

  if (markerClusterer.isZoomOnClick()) {
    // Zoom into the cluster.
    this.map_.fitBounds(this.cluster_.getBounds());
  }
};


/**
 * Adding the cluster icon to the dom.
 * @ignore
 */
ClusterIcon.prototype.onAdd = function () {
  this.div_ = document.createElement('DIV');

  if (this.visible_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.cssText = this.createCss(pos);
    this.div_.innerHTML = this.sums_.text;
  }

  var panes = this.getPanes();
  panes.overlayMouseTarget.appendChild(this.div_);

  var that = this;
  var isDragging = false;
  google.maps.event.addDomListener(this.div_, 'click', function (event) {
    // Only perform click when not preceded by a drag
    if (!isDragging) {
      that.triggerClusterClick(event);
    }
  });
  google.maps.event.addDomListener(this.div_, 'mousedown', function () {
    isDragging = false;
  });
  google.maps.event.addDomListener(this.div_, 'mousemove', function () {
    isDragging = true;
  });
  this.infowindow = new google.maps.InfoWindow({
    content: "<div id='info-window'>"  + this.cluster_.infoWindowStr + '</div>'
  });
  var curMap = this.map_;
  var curCenter = this.center_;
  var infowindow = this.infowindow;
  var showInfo = this.showInfo;
  google.maps.event.addDomListener(this.div_, 'mouseover', function () {
    if (that.showInfo) {
      infowindow.setPosition(curCenter);
      infowindow.open(curMap);
    }
  });
  // google.maps.event.addDomListener(this.div_, 'mouseout', function () {
  //   infowindow.close(curMap);
  // });
};

ClusterIcon.prototype.closeAllInfo = function () {
  if (this.infowindow) {
    this.infowindow.close(this.map_);
  }
};


/**
 * Returns the position to place the div dending on the latlng.
 *
 * @param {google.maps.LatLng} latlng The position in latlng.
 * @return {google.maps.Point} The position in pixels.
 * @private
 */
ClusterIcon.prototype.getPosFromLatLng_ = function (latlng) {
  var pos = this.getProjection().fromLatLngToDivPixel(latlng);

  if (typeof this.iconAnchor_ === 'object' && this.iconAnchor_.length === 2) {
    pos.x -= this.iconAnchor_[0];
    pos.y -= this.iconAnchor_[1];
  } else {
    pos.x -= parseInt(this.width_ / 2, 10);
    pos.y -= parseInt(this.height_ / 2, 10);
  }
  return pos;
};


/**
 * Draw the icon.
 * @ignore
 */
ClusterIcon.prototype.draw = function () {
  if (this.visible_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.top = pos.y + 'px';
    this.div_.style.left = pos.x + 'px';
  }
};


/**
 * Hide the icon.
 */
ClusterIcon.prototype.hide = function () {
  if (this.div_) {
    this.div_.style.display = 'none';
  }
  this.visible_ = false;
};


/**
 * Position and show the icon.
 */
ClusterIcon.prototype.show = function () {
  if (this.div_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.cssText = this.createCss(pos);
    this.div_.style.display = '';
  }
  this.visible_ = true;
};


/**
 * Remove the icon from the map
 */
ClusterIcon.prototype.remove = function () {
  this.setMap(null);
};


/**
 * Implementation of the onRemove interface.
 * @ignore
 */
ClusterIcon.prototype.onRemove = function () {
  if (this.div_ && this.div_.parentNode) {
    this.hide();
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
  }
};


/**
 * Set the sums of the icon.
 *
 * @param {Object} sums The sums containing:
 *   'text': (string) The text to display in the icon.
 *   'index': (number) The style index of the icon.
 */
ClusterIcon.prototype.setSums = function (sums) {
  this.sums_ = sums;
  this.text_ = sums.text;
  this.index_ = sums.index;
  if (this.div_) {
    this.div_.innerHTML = sums.text;
  }

  this.useStyle();
};


/**
 * Sets the icon to the the styles.
 */
ClusterIcon.prototype.useStyle = function () {
  var index = Math.max(0, this.sums_.index - 1);
  index = Math.min(this.styles_.length - 1, index);
  var style = this.styles_[index];
  this.url_ = style['url'];
  this.height_ = style['height'];
  this.width_ = style['width'];
  this.textColor_ = style['textColor'];
  this.anchor_ = style['anchor'];
  this.textSize_ = style['textSize'];
  this.backgroundPosition_ = style['backgroundPosition'];
  this.iconAnchor_ = style['iconAnchor'];
};


/**
 * Sets the center of the icon.
 *
 * @param {google.maps.LatLng} center The latlng to set as the center.
 */
ClusterIcon.prototype.setCenter = function (center) {
  this.center_ = center;
};


/**
 * Create the css text based on the position of the icon.
 *
 * @param {google.maps.Point} pos The position.
 * @return {string} The css style text.
 */
ClusterIcon.prototype.createCss = function (pos) {
  var style = [];
  style.push('background-image:url(' + this.url_ + ');');
  var backgroundPosition = this.backgroundPosition_ ? this.backgroundPosition_ : '0 0';
  style.push('background-position:' + backgroundPosition + ';');

  if (typeof this.anchor_ === 'object') {
    if (typeof this.anchor_[0] === 'number' && this.anchor_[0] > 0 &&
        this.anchor_[0] < this.height_) {
      style.push('height:' + (this.height_ - this.anchor_[0]) +
          'px; padding-top:' + this.anchor_[0] + 'px;');
    } else if (typeof this.anchor_[0] === 'number' && this.anchor_[0] < 0 &&
        -this.anchor_[0] < this.height_) {
      style.push('height:' + this.height_ + 'px; line-height:' + (this.height_ + this.anchor_[0]) +
          'px;');
    } else {
      style.push('height:' + this.height_ + 'px; line-height:' + this.height_ +
          'px;');
    }
    if (typeof this.anchor_[1] === 'number' && this.anchor_[1] > 0 &&
        this.anchor_[1] < this.width_) {
      style.push('width:' + (this.width_ - this.anchor_[1]) +
          'px; padding-left:' + this.anchor_[1] + 'px;');
    } else {
      style.push('width:' + this.width_ + 'px; text-align:center;');
    }
  } else {
    style.push('height:' + this.height_ + 'px; line-height:' +
        this.height_ + 'px; width:' + this.width_ + 'px; text-align:center;');
  }

  var txtColor = this.textColor_ ? this.textColor_ : 'black';
  var txtSize = this.textSize_ ? this.textSize_ : 11;

  style.push('cursor:pointer; top:' + pos.y + 'px; left:' +
      pos.x + 'px; color:' + txtColor + '; position:absolute; font-size:' +
      txtSize + 'px; font-family:Arial,sans-serif; font-weight:bold');
  return style.join('');
};


// Export Symbols for Closure
// If you are not going to compile with closure then you can remove the
// code below.
window['MarkerClusterer'] = MarkerClusterer;
MarkerClusterer.prototype['addMarker'] = MarkerClusterer.prototype.addMarker;
MarkerClusterer.prototype['addMarkers'] = MarkerClusterer.prototype.addMarkers;
MarkerClusterer.prototype['clearMarkers'] =
    MarkerClusterer.prototype.clearMarkers;
MarkerClusterer.prototype['fitMapToMarkers'] =
    MarkerClusterer.prototype.fitMapToMarkers;
MarkerClusterer.prototype['getCalculator'] =
    MarkerClusterer.prototype.getCalculator;
MarkerClusterer.prototype['getGridSize'] =
    MarkerClusterer.prototype.getGridSize;
MarkerClusterer.prototype['getExtendedBounds'] =
    MarkerClusterer.prototype.getExtendedBounds;
MarkerClusterer.prototype['getMap'] = MarkerClusterer.prototype.getMap;
MarkerClusterer.prototype['getMarkers'] = MarkerClusterer.prototype.getMarkers;
MarkerClusterer.prototype['getMaxZoom'] = MarkerClusterer.prototype.getMaxZoom;
MarkerClusterer.prototype['getStyles'] = MarkerClusterer.prototype.getStyles;
MarkerClusterer.prototype['getTotalClusters'] =
    MarkerClusterer.prototype.getTotalClusters;
MarkerClusterer.prototype['getTotalMarkers'] =
    MarkerClusterer.prototype.getTotalMarkers;
MarkerClusterer.prototype['redraw'] = MarkerClusterer.prototype.redraw;
MarkerClusterer.prototype['removeMarker'] =
    MarkerClusterer.prototype.removeMarker;
MarkerClusterer.prototype['removeMarkers'] =
    MarkerClusterer.prototype.removeMarkers;
MarkerClusterer.prototype['resetViewport'] =
    MarkerClusterer.prototype.resetViewport;
MarkerClusterer.prototype['repaint'] =
    MarkerClusterer.prototype.repaint;
MarkerClusterer.prototype['setCalculator'] =
    MarkerClusterer.prototype.setCalculator;
MarkerClusterer.prototype['setGridSize'] =
    MarkerClusterer.prototype.setGridSize;
MarkerClusterer.prototype['setMaxZoom'] =
    MarkerClusterer.prototype.setMaxZoom;
MarkerClusterer.prototype['onAdd'] = MarkerClusterer.prototype.onAdd;
MarkerClusterer.prototype['draw'] = MarkerClusterer.prototype.draw;
MarkerClusterer.prototype['hideAllClusterInfo'] = MarkerClusterer.prototype.hideAllClusterInfo;
MarkerClusterer.prototype['setShowInfo'] = MarkerClusterer.prototype.setShowInfo;

Cluster.prototype['getCenter'] = Cluster.prototype.getCenter;
Cluster.prototype['getSize'] = Cluster.prototype.getSize;
Cluster.prototype['getMarkers'] = Cluster.prototype.getMarkers;
Cluster.prototype['closeAllInfo'] = Cluster.prototype.closeAllInfo;
Cluster.prototype['setShowInfo'] = Cluster.prototype.setShowInfo;

ClusterIcon.prototype['onAdd'] = ClusterIcon.prototype.onAdd;
ClusterIcon.prototype['draw'] = ClusterIcon.prototype.draw;
ClusterIcon.prototype['onRemove'] = ClusterIcon.prototype.onRemove;
ClusterIcon.prototype['closeAllInfo'] = ClusterIcon.prototype.closeAllInfo;


/***/ }),

/***/ "../../../../../src/app/map/windowref.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    WindowRef.prototype.redirHttps = function () {
        var window = this.nativeWindow;
        if ((window.location.hostname != 'localhost' && window.location.hostname.indexOf('10.0.0') == -1) && window.location.protocol != 'https:') {
            var url = "https://" + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + window.location.pathname + window.location.hash;
            console.log(url);
            window.location = url;
        }
        else {
            console.log("No https redir");
        }
    };
    WindowRef.prototype.location = function (url) {
        this.nativeWindow.location = url;
    };
    return WindowRef;
}());
WindowRef = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], WindowRef);

//# sourceMappingURL=windowref.service.js.map

/***/ }),

/***/ "../../../../../src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_home_component__ = __webpack_require__("../../../../../src/app/ui/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map_admin_component__ = __webpack_require__("../../../../../src/app/map/map-admin.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* unused harmony export routingComponents */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__ui_home_component__["a" /* HomeComponent */] },
    { path: 'map/:id', component: __WEBPACK_IMPORTED_MODULE_3__map_map_component__["a" /* MapComponent */] },
    { path: 'mapadmin', component: __WEBPACK_IMPORTED_MODULE_4__map_map_admin_component__["a" /* MapAdminComponent */] }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
    })
], RoutingModule);

var routingComponents = [__WEBPACK_IMPORTED_MODULE_2__ui_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__map_map_component__["a" /* MapComponent */], __WEBPACK_IMPORTED_MODULE_4__map_map_admin_component__["a" /* MapAdminComponent */]];
//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/ui/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <h2>\r\n    {{ appTitle }}\r\n  </h2>\r\n</div>\r\n<div>\r\n  <!-- <div class=\"flex-container\"\r\n     fxLayout=\"row\"\r\n     fxLayout.xs=\"row\"\r\n     fxLayoutAlign=\"space-around none\"\r\n     fxLayoutAlign.xs=\"start\"> -->\r\n     <mat-toolbar [ngClass]=\"'bgc-blue-grey-900 whiteText marginTopBottom-2'\">\r\n        <userinfo></userinfo>\r\n        <span class=\"fill-remaining-space\"></span>\r\n        <span><a style=\"margin-right: 5px;\" mat-mini-fab [routerLink]=\"['/map/all']\" *ngIf=\"canViewAllMaps()\"><mat-icon >map</mat-icon></a></span>\r\n        <span><a style=\"margin-right: 5px;\" mat-mini-fab [routerLink]=\"['/mapadmin']\" *ngIf=\"canViewAllMaps()\"><mat-icon >edit</mat-icon></a></span>\r\n        <span><a href=\"{{ addUrl }}\" target=\"_blank\" mat-mini-fab style=\"margin-right: 5px;\"><mat-icon svgIcon=\"add-address\"></mat-icon></a></span>\r\n        <span><a mat-mini-fab target=\"_blank\" href=\"https://docs.google.com/document/d/1sNfzBlGop98HkbRW46PdGk0K2Hg8TLbHLkmysjLExKw/edit?usp=drive_web\" ><mat-icon>help</mat-icon></a></span>\r\n        <user-admin></user-admin>\r\n     </mat-toolbar>\r\n   <!-- </div> -->\r\n  <mapslist-component #myMapsList></mapslist-component>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ui/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_mapslist_component__ = __webpack_require__("../../../../../src/app/map/mapslist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_base_component__ = __webpack_require__("../../../../../src/app/base/base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NotifyDlgComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var HomeComponent = (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(fireAuth, dialog, iconRegistry, sanitizer) {
        var _this = _super.call(this) || this;
        _this.appTitle = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].app.title + " " + __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].version.current;
        _this.dialog = dialog;
        _this.fireAuth = fireAuth;
        _this.errorMsg = _this.fireAuth.currentUser ? "" : "Please login.";
        _this.requireLogin();
        iconRegistry.addSvgIcon('add-address', sanitizer.bypassSecurityTrustResourceUrl('/assets/images/add_address.svg'));
        return _this;
    }
    HomeComponent.prototype.postLoginSetup = function () {
        console.log("Home Component Post Login");
        var fullName = (this.fireAuth.currentUser && this.fireAuth.currentUser.userInfoObj) ? this.fireAuth.currentUser.userInfoObj.name : '';
        this.addUrl = "https://docs.google.com/forms/d/e/1FAIpQLScYHfYNwnSIWAL9RAH3rEPC74WfkFT0FgcvaJKx1nAIROXS6A/viewform?usp=pp_url&entry.1810388592=Yes&entry.1189370340=&entry.45257833&entry.681741514=&entry.1482719893=&entry.1683213160=%E6%98%AF&entry.293956968=&entry.602343366&entry.2071713990=&entry.138422963=&entry.1018422546&entry.2060338072&entry.1052547294&entry.365006055&entry.1323592748=&entry.1534052334=" + fullName + "&entry.1011916189&entry.1303192619&entry.825337910&entry.1931492709&entry.2023645450=&entry.913416032=" + fullName;
        // this.addUrl = `https://docs.google.com/forms/d/e/1FAIpQLScYHfYNwnSIWAL9RAH3rEPC74WfkFT0FgcvaJKx1nAIROXS6A/viewform?usp=pp_url&entry.1810388592=Yes&entry.1189370340&entry.45257833&entry.681741514&entry.1482719893&entry.1018422546&entry.2060338072&entry.1052547294&entry.365006055&entry.1323592748=&entry.1534052334=${fullName}`;
        this.mapListComp.load();
    };
    HomeComponent.prototype.canViewAllMaps = function () {
        return this.fireAuth.currentUser && (this.fireAuth.currentUser.isAdmin() || this.fireAuth.currentUser.isUpdater());
    };
    return HomeComponent;
}(__WEBPACK_IMPORTED_MODULE_4__base_base_component__["a" /* BaseComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myMapsList'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__map_mapslist_component__["a" /* MapsListComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__map_mapslist_component__["a" /* MapsListComponent */]) === "function" && _a || Object)
], HomeComponent.prototype, "mapListComp", void 0);
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home-component',
        template: __webpack_require__("../../../../../src/app/ui/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_user_component__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_user_component__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatIconRegistry */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["d" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["d" /* DomSanitizer */]) === "function" && _e || Object])
], HomeComponent);

var NotifyDlgComponent = (function () {
    function NotifyDlgComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    return NotifyDlgComponent;
}());
NotifyDlgComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'notify-dlg',
        template: __webpack_require__("../../../../../src/app/ui/notify-dlg.component.html")
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialogRef */]) === "function" && _f || Object, Object])
], NotifyDlgComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n  <form name='loginFrm' (submit)='login($event)'>\r\n    <div class=\"flex-container\"\r\n       fxLayout=\"column\"\r\n       fxLayout.xs=\"column\"\r\n       fxLayoutAlign=\"center center\"\r\n       fxLayoutAlign.xs=\"start\">\r\n       <div>\r\n        <div>\r\n          <mat-form-field>\r\n            <label>Email</label>\r\n            <input matInput type='email' name=\"email\" [(ngModel)]=\"email\" >\r\n          </mat-form-field>\r\n        </div>\r\n        <div>\r\n          <mat-form-field>\r\n            <label>Password</label>\r\n            <input matInput type='password' name=\"password\" [(ngModel)]=\"password\" >\r\n          </mat-form-field>\r\n        </div>\r\n        <mat-dialog-actions>\r\n          <button mat-button mat-raised-button type='submit' [disabled]=\"isPending || isMaint\" >Login</button>\r\n        </mat-dialog-actions>\r\n        <div>\r\n          {{data.consumer.errorMsg}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ui/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var LoginComponent = (function () {
    function LoginComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.onLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LoginComponent.prototype.login = function (event) {
        console.log("Logging in...");
        var creds = { email: this.email, password: this.password };
        this.onLogin.emit(creds);
        this.data.consumer.login(creds);
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "onLogin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "errorMsg", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login-component',
        template: __webpack_require__("../../../../../src/app/ui/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/login.component.css")]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogRef */]) === "function" && _a || Object, Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/main-ui.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__("../../../../../src/app/ui/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_component__ = __webpack_require__("../../../../../src/app/ui/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map_module__ = __webpack_require__("../../../../../src/app/map/map.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainUIModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var MainUIModule = (function () {
    function MainUIModule() {
    }
    return MainUIModule;
}());
MainUIModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_6__user_user_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_7__map_map_module__["a" /* MapModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_4__home_component__["b" /* NotifyDlgComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__map_map_module__["a" /* MapModule */],
            __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__user_user_module__["a" /* AuthModule */]
        ],
        providers: [],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_4__home_component__["b" /* NotifyDlgComponent */]
        ]
    })
], MainUIModule);

//# sourceMappingURL=main-ui.module.js.map

/***/ }),

/***/ "../../../../../src/app/ui/notify-dlg.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n  <mat-card>\r\n    <mat-card-title *ngIf=\"data.title\">\r\n      <h4>{{data.title}}</h4>\r\n    </mat-card-title>\r\n    <mat-card-subtitle *ngIf=\"data.subtitle\"><div>{{ data.subtitle }}</div></mat-card-subtitle>\r\n    <mat-card-actions>\r\n      <div>\r\n        <br/>\r\n        <button mat-raised-button color=\"accent\" (click)=\"data.consumer.confirmNotification()\">{{ data.confirmText }}</button>\r\n      </div>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/user-admin-createuser.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n  <form name='createUserForm'>\r\n    <mat-card>\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          <h4>{{data.consumer.userSelectTitle}}</h4>\r\n        </mat-card-title>\r\n        <mat-card-subtitle>{{ data.consumer.userSelectDesc }}</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <mat-form-field>\r\n          <label>Name</label>\r\n          <input matInput type='text' name=\"text\" [(ngModel)]=\"data.consumer.newUser.name\" >\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <label>Email</label>\r\n          <input matInput type='email' name=\"email\" [(ngModel)]=\"data.consumer.newUser.email\" >\r\n        </mat-form-field>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </form>\r\n  <mat-dialog-actions>\r\n    <button mat-mini-fab (click)=\"data.consumer.createUser()\"><mat-icon>save</mat-icon></button>\r\n    <button mat-mini-fab (click)=\"data.consumer.cancel()\"><mat-icon>cancel</mat-icon></button>\r\n  </mat-dialog-actions>\r\n  <div>\r\n    {{data.consumer.errorMsg}}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/user-admin-selectuser.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n  <form name='selectUserForm'>\r\n    <mat-card>\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          <h4>{{data.consumer.userSelectTitle}}</h4>\r\n        </mat-card-title>\r\n        <mat-card-subtitle>{{ data.consumer.userSelectDesc }}</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <tag-input [(ngModel)]=\"data.consumer.selectedUsers\" name=\"selectUserDlg\"\r\n           [editable]=\"true\" [identifyBy]=\"'id'\" [displayBy]=\"'name'\"\r\n            [onlyFromAutocomplete]=\"true\" [placeholder]=\"data.consumer.placeHolderTxt\" [secondaryPlaceholder]=\"data.consumer.placeHolderTxt\">\r\n           <tag-input-dropdown [appendToBody]=\"false\" [autocompleteItems]='data.consumer.userList' [identifyBy]=\"'$key'\" [displayBy]=\"'name'\"></tag-input-dropdown>\r\n        </tag-input>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </form>\r\n  <mat-dialog-actions>\r\n    <button mat-mini-fab (click)=\"data.consumer.sendResetPassword()\"><mat-icon>save</mat-icon></button>\r\n    <button mat-mini-fab (click)=\"data.consumer.cancel()\"><mat-icon>cancel</mat-icon></button>\r\n  </mat-dialog-actions>\r\n  <div>\r\n    {{data.consumer.errorMsg}}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/user-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"isUpdater()\">\r\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\" >\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n<mat-menu #menu=\"matMenu\" >\r\n  <button mat-menu-item (click)=\"resetPassword()\">\r\n    <mat-icon>person_outline</mat-icon>\r\n    <span>Reset Password</span>\r\n  </button>\r\n  <button mat-menu-item (click)=\"addUser()\">\r\n    <mat-icon>person_add</mat-icon>\r\n    <span>Add User</span>\r\n  </button>\r\n  <button mat-menu-item (click)=\"showVersionDlg()\">\r\n    <mat-icon>info_outline</mat-icon>\r\n    <span>Release Notes</span>\r\n  </button>\r\n  <button mat-menu-item (click)=\"logout()\">\r\n    <mat-icon>exit_to_app</mat-icon>\r\n    <span>Logout</span>\r\n  </button>\r\n</mat-menu>\r\n</span>\r\n<span *ngIf=\"!isUpdater()\" style=\"margin-left: 5px;\">\r\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\" >\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\" >\r\n    <button mat-menu-item (click)=\"showVersionDlg()\">\r\n      <mat-icon>info_outline</mat-icon>\r\n      <span>Release Notes</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"logout()\">\r\n      <mat-icon>exit_to_app</mat-icon>\r\n      <span>Logout</span>\r\n    </button>\r\n  </mat-menu>\r\n</span>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/user-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_base_component__ = __webpack_require__("../../../../../src/app/base/base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAdminComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SelectUserDlgComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CreateUserDlgComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VersionDlgComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var UserAdminComponent = (function (_super) {
    __extends(UserAdminComponent, _super);
    function UserAdminComponent(fireAuth, dialog) {
        var _this = _super.call(this) || this;
        _this.fireAuth = fireAuth;
        _this.dialog = dialog;
        _this.subs = [];
        return _this;
    }
    UserAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.fireAuth.currentUser;
        this.subs.push(this.fireAuth.onCurrentUserInfo.subscribe(function (user) {
            _this.user = _this.fireAuth.currentUser;
        }));
        if (!this.userList) {
            this.subs.push(this.fireAuth.getAllUsersList().subscribe(function (userList) {
                _this.userList = userList;
            }));
        }
    };
    UserAdminComponent.prototype.isUpdater = function () {
        return this.user && (this.user.isAdmin() || this.user.isUpdater());
    };
    UserAdminComponent.prototype.resetPassword = function () {
        this.userSelectTitle = "User Password Reset";
        this.userSelectDesc = "Type the names of users";
        this.placeHolderTxt = "Publisher name";
        this.showDlg();
    };
    UserAdminComponent.prototype.addUser = function () {
        this.userSelectTitle = "Create New User";
        this.userSelectDesc = "Provide new user/publisher details";
        this.newUser = { name: '', email: '', role: 'publisher' };
        this.showUserDlg();
    };
    UserAdminComponent.prototype.showDlg = function () {
        if (!this.currentDlg) {
            this.currentDlg = this.dialog.open(SelectUserDlgComponent, {
                data: { consumer: this },
                disableClose: true
            });
        }
    };
    UserAdminComponent.prototype.showUserDlg = function () {
        if (!this.currentDlg) {
            this.currentDlg = this.dialog.open(CreateUserDlgComponent, {
                data: { consumer: this },
                disableClose: true
            });
        }
    };
    UserAdminComponent.prototype.showVersionDlg = function () {
        if (!this.currentDlg) {
            this.currentDlg = this.dialog.open(VersionDlgComponent, {
                data: { consumer: this },
                disableClose: true
            });
        }
    };
    UserAdminComponent.prototype.getVersions = function () {
        var versions = [];
        __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].version.list, function (versionNum) {
            versions.push({ versionNum: versionNum, text: __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].version.details[versionNum] });
        });
        return versions;
    };
    UserAdminComponent.prototype.closeDlg = function () {
        this.dialog.closeAll();
        this.currentDlg = null;
        this.selectedUsers = null;
    };
    UserAdminComponent.prototype.sendResetPassword = function () {
        var _this = this;
        var numToProcess = this.selectedUsers ? this.selectedUsers.length : 0;
        // let processCtr = 0;
        __WEBPACK_IMPORTED_MODULE_3_lodash__["forEach"](this.selectedUsers, function (user) {
            if (user.email) {
                console.log("Resetting: ");
                console.log(user);
                _this.fireAuth.sendPasswordReset(user.email);
                // processCtr++;
            }
            else {
                console.log("No email:");
                console.log(user);
            }
        });
        // if (processCtr >= numToProcess) {
        //
        // }
        this.closeDlg();
    };
    UserAdminComponent.prototype.createUser = function () {
        this.fireAuth.createUser(this.newUser.name, this.newUser.email, this.newUser.role);
        this.closeDlg();
    };
    UserAdminComponent.prototype.cancel = function () {
        this.closeDlg();
    };
    return UserAdminComponent;
}(__WEBPACK_IMPORTED_MODULE_2__base_base_component__["a" /* BaseComponent */]));
UserAdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-admin',
        template: __webpack_require__("../../../../../src/app/user/user-admin.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_component__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_component__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatDialog */]) === "function" && _b || Object])
], UserAdminComponent);

var SelectUserDlgComponent = (function () {
    function SelectUserDlgComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    return SelectUserDlgComponent;
}());
SelectUserDlgComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'selectuser-dlg',
        template: __webpack_require__("../../../../../src/app/user/user-admin-selectuser.html")
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogRef */]) === "function" && _c || Object, Object])
], SelectUserDlgComponent);

var CreateUserDlgComponent = (function () {
    function CreateUserDlgComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    return CreateUserDlgComponent;
}());
CreateUserDlgComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'selectuser-dlg',
        template: __webpack_require__("../../../../../src/app/user/user-admin-createuser.html")
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogRef */]) === "function" && _d || Object, Object])
], CreateUserDlgComponent);

var VersionDlgComponent = (function () {
    function VersionDlgComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    return VersionDlgComponent;
}());
VersionDlgComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'version-dlg',
        template: __webpack_require__("../../../../../src/app/user/version-info.html")
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogRef */]) === "function" && _e || Object, Object])
], VersionDlgComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user-admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_es6__ = __webpack_require__("../../../../moment-es6/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_es6___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment_es6__);
/* unused harmony export MapsUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapsUser = (function () {
    function MapsUser() {
    }
    MapsUser.prototype.isAdmin = function () {
        return this.roles && this.roles.admin == true;
    };
    MapsUser.prototype.isUpdater = function () {
        return this.roles && this.roles.updater == true;
    };
    MapsUser.prototype.isFsgAssistant = function (fsgName) {
        if (fsgName === void 0) { fsgName = null; }
        return this.roles && __WEBPACK_IMPORTED_MODULE_4_lodash__["isEmpty"](fsgName) || __WEBPACK_IMPORTED_MODULE_4_lodash__["isNull"](fsgName) ? this.roles.fsgAssist == true
            : this.roles.fsgAssist == true && this.roles.fsg[fsgName] == true;
    };
    MapsUser.prototype.isPublisher = function () {
        return this.roles && this.roles.publisher == true;
    };
    Object.defineProperty(MapsUser.prototype, "hasUserInfo", {
        get: function () {
            return this.roles && this.userInfoObj;
        },
        enumerable: true,
        configurable: true
    });
    return MapsUser;
}());

var AuthService = (function () {
    function AuthService(af, db) {
        this.af = af;
        this.db = db;
        this.roleList = ['admin', 'updater', 'fsgoverseer', 'publisher'];
        this.onCurrentUserInfo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AuthService.prototype.getUser = function () {
        return this.af.auth.currentUser;
    };
    AuthService.prototype.getUserObs = function () {
        return this.af.authState;
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.getUser() != null;
    };
    AuthService.prototype.onAuthChange = function (method) {
        this.af.auth.onAuthStateChanged(method);
    };
    AuthService.prototype.login = function (username, password) {
        return this.af.auth.signInWithEmailAndPassword(username, password);
    };
    AuthService.prototype.logout = function () {
        return this.af.auth.signOut();
    };
    AuthService.prototype.getUserRole = function (user) {
        return this.db.object("/roles/" + user.userObj.uid).flatMap(function (rolesObj) {
            user.roles = rolesObj;
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(user);
        });
    };
    AuthService.prototype.getUserInfo = function (user) {
        return this.db.object("/users/" + user.userObj.uid).flatMap(function (userInfoObj) {
            user.userInfoObj = userInfoObj;
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(user);
        });
    };
    AuthService.prototype.getAllUserInfo = function () {
        var _this = this;
        this.currentUser = new MapsUser();
        this.currentUser.userObj = this.getUser();
        this.getUserRole(this.currentUser)
            .flatMap(function (user) {
            // retrieve the user object...
            return _this.getUserInfo(_this.currentUser);
        })
            .subscribe(function (user) {
            // console.log(`Emitting...`);
            // console.log(this.currentUser);
            _this.onCurrentUserInfo.emit(_this.currentUser);
        });
    };
    AuthService.prototype.getAllUsersList = function () {
        var _this = this;
        if (this.usersList) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.usersList);
        }
        else {
            return this.db.list("/users/list").flatMap(function (userIdList) {
                if (_this.usersList) {
                    _this.usersList.length = 0;
                }
                else {
                    _this.usersList = [];
                }
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].from(userIdList);
            })
                .flatMap(function (userId) {
                return _this.db.object("/users/" + userId.$value).flatMap(function (userObj) {
                    __WEBPACK_IMPORTED_MODULE_4_lodash__["remove"](_this.usersList, function (e) { return e.$key == userObj.$key; });
                    _this.usersList.push(userObj);
                    return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(userObj);
                });
            })
                .debounceTime(300)
                .flatMap(function (whatever) {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(_this.usersList);
            });
        }
    };
    AuthService.prototype.sendPasswordReset = function (email, cb) {
        if (cb === void 0) { cb = null; }
        this.af.auth.sendPasswordResetEmail(email).then(function () {
            if (cb)
                cb();
        });
    };
    AuthService.prototype.createUser = function (name, email, role) {
        this.db.object("/users/requests/pending/createUser/" + Date.now()).update({ name: name, email: email, role: role });
    };
    AuthService.prototype.saveLoc = function (uid, pos) {
        this.db.object("/log/" + uid + "/loc").update({ lat: pos.position.lat, lng: pos.position.lng, date: __WEBPACK_IMPORTED_MODULE_5_moment_es6___default()().utcOffset('+10:00').toISOString(true) });
    };
    AuthService.prototype.saveOnlineStat = function (currentUser) {
        this.db.object("/log/" + currentUser.userObj.uid + "/lastSeen").update({ name: currentUser.userInfoObj.name, date: __WEBPACK_IMPORTED_MODULE_5_moment_es6___default()().utcOffset('+10:00').toISOString(true) });
    };
    return AuthService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AuthService.prototype, "onCurrentUserInfo", void 0);
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__userinfo_component__ = __webpack_require__("../../../../../src/app/user/userinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_admin_component__ = __webpack_require__("../../../../../src/app/user/user-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_chips__ = __webpack_require__("../../../../ngx-chips/dist/ngx-chips.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_chips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ngx_chips__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_11_ngx_chips__["TagInputModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["u" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["h" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["n" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["i" /* MatInputModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_8__userinfo_component__["a" /* UserInfoComponent */], __WEBPACK_IMPORTED_MODULE_10__user_admin_component__["a" /* UserAdminComponent */], __WEBPACK_IMPORTED_MODULE_10__user_admin_component__["b" /* SelectUserDlgComponent */], __WEBPACK_IMPORTED_MODULE_10__user_admin_component__["c" /* CreateUserDlgComponent */], __WEBPACK_IMPORTED_MODULE_10__user_admin_component__["d" /* VersionDlgComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_8__userinfo_component__["a" /* UserInfoComponent */], __WEBPACK_IMPORTED_MODULE_10__user_admin_component__["a" /* UserAdminComponent */], __WEBPACK_IMPORTED_MODULE_10__user_admin_component__["b" /* SelectUserDlgComponent */], __WEBPACK_IMPORTED_MODULE_10__user_admin_component__["c" /* CreateUserDlgComponent */], __WEBPACK_IMPORTED_MODULE_10__user_admin_component__["d" /* VersionDlgComponent */]],
        bootstrap: [],
        providers: [__WEBPACK_IMPORTED_MODULE_7__user_component__["a" /* AuthService */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_10__user_admin_component__["b" /* SelectUserDlgComponent */], __WEBPACK_IMPORTED_MODULE_10__user_admin_component__["c" /* CreateUserDlgComponent */], __WEBPACK_IMPORTED_MODULE_10__user_admin_component__["d" /* VersionDlgComponent */]]
    })
], AuthModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/userinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"user && user.userObj\"><h3>{{user?.userInfoObj?.name}}</h3></span>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/userinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_base_component__ = __webpack_require__("../../../../../src/app/base/base.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserInfoComponent = (function (_super) {
    __extends(UserInfoComponent, _super);
    function UserInfoComponent(fireAuth) {
        var _this = _super.call(this) || this;
        _this.fireAuth = fireAuth;
        _this.subs = [];
        return _this;
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.fireAuth.currentUser;
        this.subs.push(this.fireAuth.onCurrentUserInfo.subscribe(function (user) {
            _this.user = _this.fireAuth.currentUser;
            console.log("User info:");
            console.log(_this.user);
        }));
    };
    return UserInfoComponent;
}(__WEBPACK_IMPORTED_MODULE_2__base_base_component__["a" /* BaseComponent */]));
UserInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'userinfo',
        template: __webpack_require__("../../../../../src/app/user/userinfo.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_component__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_component__["a" /* AuthService */]) === "function" && _a || Object])
], UserInfoComponent);

var _a;
//# sourceMappingURL=userinfo.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/version-info.html":
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\r\n    <mat-card>\r\n      <mat-card-header>\r\n        <mat-card-title>\r\n          <h3>Version Release Notes</h3>\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n      <mat-card-content style=\"height:400px; overflow-y: auto\">\r\n        <mat-list>\r\n          <mat-list-item *ngFor=\"let version of data.consumer.getVersions()\">\r\n            <h4 matLine> {{ version.versionNum }}</h4>\r\n            <p matLine> {{ version.text }} </p>\r\n          </mat-list-item>\r\n        </mat-list>\r\n      </mat-card-content>\r\n    </mat-card>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-mini-fab (click)=\"data.consumer.cancel()\"><mat-icon>cancel</mat-icon></button>\r\n  <div>\r\n    {{data.consumer.errorMsg}}\r\n  </div>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    addressFeedBackForm: 'https://docs.google.com/forms/d/e/1FAIpQLSdZYe2BmeJ_DLwW1lbvu9bcLWe7_wZ3Rs5fdaw-q4g9zfys3g/viewform',
    agm: {
        api: 'AIzaSyD_VnDujye_oVKyUnExhT3LqETfARNIoiw'
    },
    app: {
        title: "Toowong Ministry Maps",
        mapBase: 'http://localhost:4200/'
    },
    firebase: {
        apiKey: "AIzaSyAQ6yor3WnBT74kyErJVotz76y9x0A4f28",
        authDomain: "toowong-maps.firebaseapp.com",
        databaseURL: "https://toowong-maps.firebaseio.com",
        projectId: "toowong-maps",
        storageBucket: "toowong-maps.appspot.com",
        messagingSenderId: "1055117975996"
    },
    version: {
        current: '2.90.1',
        list: ['2.90.1', '2.90', '2.89.1', '2.89', '2.88', '2.87', '2.86', '2.85', '2.84', '2.83', '2.82', '2.8.1', '2.8', '2.7.1', '2.7'],
        details: {
            '2.90.1': 'Fixed add address dialog issue. Handled null street address on maps.',
            '2.90': 'Added search and edit map for map updaters',
            '2.89.1': 'Remove not-at-homes on campaign mode',
            '2.89': 'Last used on chip now shows the day of the week, as well as the time.',
            '2.88': 'Added more updater features',
            '2.87': 'Fixed status issue',
            '2.86': 'Improved in-app map links, search maps are no longer limited to being visited twice, and are now processed semi-automatically. Added address queues.',
            '2.85': 'Supports language surveys when marking addresses as "Done".',
            '2.84': 'Allowed setting of ownership on started maps. Added tag for personal territories. Added notes field for map updaters.',
            '2.83': 'Added personal territory flag when assigning ownership. Added link to Google Maps from address list.',
            '2.82': 'Address list dialog now allows editing of addresses. Improved progress report.',
            '2.8.1': 'Improved progress report information.',
            '2.8': 'Added territory coverage information to the home page. Added release notes to the menu, logout button now part of the menu.',
            '2.7.1': 'Fixed map sharing feature.',
            '2.7': 'Campaign mode added. For map updaters, completed maps are now grayed out and cannot be easily started.'
        }
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment-es6/node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment-es6/node_modules/moment/locale/af.js",
	"./af.js": "../../../../moment-es6/node_modules/moment/locale/af.js",
	"./ar": "../../../../moment-es6/node_modules/moment/locale/ar.js",
	"./ar-dz": "../../../../moment-es6/node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment-es6/node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment-es6/node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment-es6/node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment-es6/node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment-es6/node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment-es6/node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment-es6/node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment-es6/node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment-es6/node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment-es6/node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment-es6/node_modules/moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment-es6/node_modules/moment/locale/ar.js",
	"./az": "../../../../moment-es6/node_modules/moment/locale/az.js",
	"./az.js": "../../../../moment-es6/node_modules/moment/locale/az.js",
	"./be": "../../../../moment-es6/node_modules/moment/locale/be.js",
	"./be.js": "../../../../moment-es6/node_modules/moment/locale/be.js",
	"./bg": "../../../../moment-es6/node_modules/moment/locale/bg.js",
	"./bg.js": "../../../../moment-es6/node_modules/moment/locale/bg.js",
	"./bm": "../../../../moment-es6/node_modules/moment/locale/bm.js",
	"./bm.js": "../../../../moment-es6/node_modules/moment/locale/bm.js",
	"./bn": "../../../../moment-es6/node_modules/moment/locale/bn.js",
	"./bn.js": "../../../../moment-es6/node_modules/moment/locale/bn.js",
	"./bo": "../../../../moment-es6/node_modules/moment/locale/bo.js",
	"./bo.js": "../../../../moment-es6/node_modules/moment/locale/bo.js",
	"./br": "../../../../moment-es6/node_modules/moment/locale/br.js",
	"./br.js": "../../../../moment-es6/node_modules/moment/locale/br.js",
	"./bs": "../../../../moment-es6/node_modules/moment/locale/bs.js",
	"./bs.js": "../../../../moment-es6/node_modules/moment/locale/bs.js",
	"./ca": "../../../../moment-es6/node_modules/moment/locale/ca.js",
	"./ca.js": "../../../../moment-es6/node_modules/moment/locale/ca.js",
	"./cs": "../../../../moment-es6/node_modules/moment/locale/cs.js",
	"./cs.js": "../../../../moment-es6/node_modules/moment/locale/cs.js",
	"./cv": "../../../../moment-es6/node_modules/moment/locale/cv.js",
	"./cv.js": "../../../../moment-es6/node_modules/moment/locale/cv.js",
	"./cy": "../../../../moment-es6/node_modules/moment/locale/cy.js",
	"./cy.js": "../../../../moment-es6/node_modules/moment/locale/cy.js",
	"./da": "../../../../moment-es6/node_modules/moment/locale/da.js",
	"./da.js": "../../../../moment-es6/node_modules/moment/locale/da.js",
	"./de": "../../../../moment-es6/node_modules/moment/locale/de.js",
	"./de-at": "../../../../moment-es6/node_modules/moment/locale/de-at.js",
	"./de-at.js": "../../../../moment-es6/node_modules/moment/locale/de-at.js",
	"./de-ch": "../../../../moment-es6/node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment-es6/node_modules/moment/locale/de-ch.js",
	"./de.js": "../../../../moment-es6/node_modules/moment/locale/de.js",
	"./dv": "../../../../moment-es6/node_modules/moment/locale/dv.js",
	"./dv.js": "../../../../moment-es6/node_modules/moment/locale/dv.js",
	"./el": "../../../../moment-es6/node_modules/moment/locale/el.js",
	"./el.js": "../../../../moment-es6/node_modules/moment/locale/el.js",
	"./en-au": "../../../../moment-es6/node_modules/moment/locale/en-au.js",
	"./en-au.js": "../../../../moment-es6/node_modules/moment/locale/en-au.js",
	"./en-ca": "../../../../moment-es6/node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment-es6/node_modules/moment/locale/en-ca.js",
	"./en-gb": "../../../../moment-es6/node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment-es6/node_modules/moment/locale/en-gb.js",
	"./en-ie": "../../../../moment-es6/node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment-es6/node_modules/moment/locale/en-ie.js",
	"./en-il": "../../../../moment-es6/node_modules/moment/locale/en-il.js",
	"./en-il.js": "../../../../moment-es6/node_modules/moment/locale/en-il.js",
	"./en-nz": "../../../../moment-es6/node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment-es6/node_modules/moment/locale/en-nz.js",
	"./eo": "../../../../moment-es6/node_modules/moment/locale/eo.js",
	"./eo.js": "../../../../moment-es6/node_modules/moment/locale/eo.js",
	"./es": "../../../../moment-es6/node_modules/moment/locale/es.js",
	"./es-do": "../../../../moment-es6/node_modules/moment/locale/es-do.js",
	"./es-do.js": "../../../../moment-es6/node_modules/moment/locale/es-do.js",
	"./es-us": "../../../../moment-es6/node_modules/moment/locale/es-us.js",
	"./es-us.js": "../../../../moment-es6/node_modules/moment/locale/es-us.js",
	"./es.js": "../../../../moment-es6/node_modules/moment/locale/es.js",
	"./et": "../../../../moment-es6/node_modules/moment/locale/et.js",
	"./et.js": "../../../../moment-es6/node_modules/moment/locale/et.js",
	"./eu": "../../../../moment-es6/node_modules/moment/locale/eu.js",
	"./eu.js": "../../../../moment-es6/node_modules/moment/locale/eu.js",
	"./fa": "../../../../moment-es6/node_modules/moment/locale/fa.js",
	"./fa.js": "../../../../moment-es6/node_modules/moment/locale/fa.js",
	"./fi": "../../../../moment-es6/node_modules/moment/locale/fi.js",
	"./fi.js": "../../../../moment-es6/node_modules/moment/locale/fi.js",
	"./fo": "../../../../moment-es6/node_modules/moment/locale/fo.js",
	"./fo.js": "../../../../moment-es6/node_modules/moment/locale/fo.js",
	"./fr": "../../../../moment-es6/node_modules/moment/locale/fr.js",
	"./fr-ca": "../../../../moment-es6/node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment-es6/node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment-es6/node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment-es6/node_modules/moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment-es6/node_modules/moment/locale/fr.js",
	"./fy": "../../../../moment-es6/node_modules/moment/locale/fy.js",
	"./fy.js": "../../../../moment-es6/node_modules/moment/locale/fy.js",
	"./gd": "../../../../moment-es6/node_modules/moment/locale/gd.js",
	"./gd.js": "../../../../moment-es6/node_modules/moment/locale/gd.js",
	"./gl": "../../../../moment-es6/node_modules/moment/locale/gl.js",
	"./gl.js": "../../../../moment-es6/node_modules/moment/locale/gl.js",
	"./gom-latn": "../../../../moment-es6/node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment-es6/node_modules/moment/locale/gom-latn.js",
	"./gu": "../../../../moment-es6/node_modules/moment/locale/gu.js",
	"./gu.js": "../../../../moment-es6/node_modules/moment/locale/gu.js",
	"./he": "../../../../moment-es6/node_modules/moment/locale/he.js",
	"./he.js": "../../../../moment-es6/node_modules/moment/locale/he.js",
	"./hi": "../../../../moment-es6/node_modules/moment/locale/hi.js",
	"./hi.js": "../../../../moment-es6/node_modules/moment/locale/hi.js",
	"./hr": "../../../../moment-es6/node_modules/moment/locale/hr.js",
	"./hr.js": "../../../../moment-es6/node_modules/moment/locale/hr.js",
	"./hu": "../../../../moment-es6/node_modules/moment/locale/hu.js",
	"./hu.js": "../../../../moment-es6/node_modules/moment/locale/hu.js",
	"./hy-am": "../../../../moment-es6/node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment-es6/node_modules/moment/locale/hy-am.js",
	"./id": "../../../../moment-es6/node_modules/moment/locale/id.js",
	"./id.js": "../../../../moment-es6/node_modules/moment/locale/id.js",
	"./is": "../../../../moment-es6/node_modules/moment/locale/is.js",
	"./is.js": "../../../../moment-es6/node_modules/moment/locale/is.js",
	"./it": "../../../../moment-es6/node_modules/moment/locale/it.js",
	"./it.js": "../../../../moment-es6/node_modules/moment/locale/it.js",
	"./ja": "../../../../moment-es6/node_modules/moment/locale/ja.js",
	"./ja.js": "../../../../moment-es6/node_modules/moment/locale/ja.js",
	"./jv": "../../../../moment-es6/node_modules/moment/locale/jv.js",
	"./jv.js": "../../../../moment-es6/node_modules/moment/locale/jv.js",
	"./ka": "../../../../moment-es6/node_modules/moment/locale/ka.js",
	"./ka.js": "../../../../moment-es6/node_modules/moment/locale/ka.js",
	"./kk": "../../../../moment-es6/node_modules/moment/locale/kk.js",
	"./kk.js": "../../../../moment-es6/node_modules/moment/locale/kk.js",
	"./km": "../../../../moment-es6/node_modules/moment/locale/km.js",
	"./km.js": "../../../../moment-es6/node_modules/moment/locale/km.js",
	"./kn": "../../../../moment-es6/node_modules/moment/locale/kn.js",
	"./kn.js": "../../../../moment-es6/node_modules/moment/locale/kn.js",
	"./ko": "../../../../moment-es6/node_modules/moment/locale/ko.js",
	"./ko.js": "../../../../moment-es6/node_modules/moment/locale/ko.js",
	"./ky": "../../../../moment-es6/node_modules/moment/locale/ky.js",
	"./ky.js": "../../../../moment-es6/node_modules/moment/locale/ky.js",
	"./lb": "../../../../moment-es6/node_modules/moment/locale/lb.js",
	"./lb.js": "../../../../moment-es6/node_modules/moment/locale/lb.js",
	"./lo": "../../../../moment-es6/node_modules/moment/locale/lo.js",
	"./lo.js": "../../../../moment-es6/node_modules/moment/locale/lo.js",
	"./lt": "../../../../moment-es6/node_modules/moment/locale/lt.js",
	"./lt.js": "../../../../moment-es6/node_modules/moment/locale/lt.js",
	"./lv": "../../../../moment-es6/node_modules/moment/locale/lv.js",
	"./lv.js": "../../../../moment-es6/node_modules/moment/locale/lv.js",
	"./me": "../../../../moment-es6/node_modules/moment/locale/me.js",
	"./me.js": "../../../../moment-es6/node_modules/moment/locale/me.js",
	"./mi": "../../../../moment-es6/node_modules/moment/locale/mi.js",
	"./mi.js": "../../../../moment-es6/node_modules/moment/locale/mi.js",
	"./mk": "../../../../moment-es6/node_modules/moment/locale/mk.js",
	"./mk.js": "../../../../moment-es6/node_modules/moment/locale/mk.js",
	"./ml": "../../../../moment-es6/node_modules/moment/locale/ml.js",
	"./ml.js": "../../../../moment-es6/node_modules/moment/locale/ml.js",
	"./mn": "../../../../moment-es6/node_modules/moment/locale/mn.js",
	"./mn.js": "../../../../moment-es6/node_modules/moment/locale/mn.js",
	"./mr": "../../../../moment-es6/node_modules/moment/locale/mr.js",
	"./mr.js": "../../../../moment-es6/node_modules/moment/locale/mr.js",
	"./ms": "../../../../moment-es6/node_modules/moment/locale/ms.js",
	"./ms-my": "../../../../moment-es6/node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment-es6/node_modules/moment/locale/ms-my.js",
	"./ms.js": "../../../../moment-es6/node_modules/moment/locale/ms.js",
	"./mt": "../../../../moment-es6/node_modules/moment/locale/mt.js",
	"./mt.js": "../../../../moment-es6/node_modules/moment/locale/mt.js",
	"./my": "../../../../moment-es6/node_modules/moment/locale/my.js",
	"./my.js": "../../../../moment-es6/node_modules/moment/locale/my.js",
	"./nb": "../../../../moment-es6/node_modules/moment/locale/nb.js",
	"./nb.js": "../../../../moment-es6/node_modules/moment/locale/nb.js",
	"./ne": "../../../../moment-es6/node_modules/moment/locale/ne.js",
	"./ne.js": "../../../../moment-es6/node_modules/moment/locale/ne.js",
	"./nl": "../../../../moment-es6/node_modules/moment/locale/nl.js",
	"./nl-be": "../../../../moment-es6/node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment-es6/node_modules/moment/locale/nl-be.js",
	"./nl.js": "../../../../moment-es6/node_modules/moment/locale/nl.js",
	"./nn": "../../../../moment-es6/node_modules/moment/locale/nn.js",
	"./nn.js": "../../../../moment-es6/node_modules/moment/locale/nn.js",
	"./pa-in": "../../../../moment-es6/node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment-es6/node_modules/moment/locale/pa-in.js",
	"./pl": "../../../../moment-es6/node_modules/moment/locale/pl.js",
	"./pl.js": "../../../../moment-es6/node_modules/moment/locale/pl.js",
	"./pt": "../../../../moment-es6/node_modules/moment/locale/pt.js",
	"./pt-br": "../../../../moment-es6/node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment-es6/node_modules/moment/locale/pt-br.js",
	"./pt.js": "../../../../moment-es6/node_modules/moment/locale/pt.js",
	"./ro": "../../../../moment-es6/node_modules/moment/locale/ro.js",
	"./ro.js": "../../../../moment-es6/node_modules/moment/locale/ro.js",
	"./ru": "../../../../moment-es6/node_modules/moment/locale/ru.js",
	"./ru.js": "../../../../moment-es6/node_modules/moment/locale/ru.js",
	"./sd": "../../../../moment-es6/node_modules/moment/locale/sd.js",
	"./sd.js": "../../../../moment-es6/node_modules/moment/locale/sd.js",
	"./se": "../../../../moment-es6/node_modules/moment/locale/se.js",
	"./se.js": "../../../../moment-es6/node_modules/moment/locale/se.js",
	"./si": "../../../../moment-es6/node_modules/moment/locale/si.js",
	"./si.js": "../../../../moment-es6/node_modules/moment/locale/si.js",
	"./sk": "../../../../moment-es6/node_modules/moment/locale/sk.js",
	"./sk.js": "../../../../moment-es6/node_modules/moment/locale/sk.js",
	"./sl": "../../../../moment-es6/node_modules/moment/locale/sl.js",
	"./sl.js": "../../../../moment-es6/node_modules/moment/locale/sl.js",
	"./sq": "../../../../moment-es6/node_modules/moment/locale/sq.js",
	"./sq.js": "../../../../moment-es6/node_modules/moment/locale/sq.js",
	"./sr": "../../../../moment-es6/node_modules/moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment-es6/node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment-es6/node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment-es6/node_modules/moment/locale/sr.js",
	"./ss": "../../../../moment-es6/node_modules/moment/locale/ss.js",
	"./ss.js": "../../../../moment-es6/node_modules/moment/locale/ss.js",
	"./sv": "../../../../moment-es6/node_modules/moment/locale/sv.js",
	"./sv.js": "../../../../moment-es6/node_modules/moment/locale/sv.js",
	"./sw": "../../../../moment-es6/node_modules/moment/locale/sw.js",
	"./sw.js": "../../../../moment-es6/node_modules/moment/locale/sw.js",
	"./ta": "../../../../moment-es6/node_modules/moment/locale/ta.js",
	"./ta.js": "../../../../moment-es6/node_modules/moment/locale/ta.js",
	"./te": "../../../../moment-es6/node_modules/moment/locale/te.js",
	"./te.js": "../../../../moment-es6/node_modules/moment/locale/te.js",
	"./tet": "../../../../moment-es6/node_modules/moment/locale/tet.js",
	"./tet.js": "../../../../moment-es6/node_modules/moment/locale/tet.js",
	"./tg": "../../../../moment-es6/node_modules/moment/locale/tg.js",
	"./tg.js": "../../../../moment-es6/node_modules/moment/locale/tg.js",
	"./th": "../../../../moment-es6/node_modules/moment/locale/th.js",
	"./th.js": "../../../../moment-es6/node_modules/moment/locale/th.js",
	"./tl-ph": "../../../../moment-es6/node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment-es6/node_modules/moment/locale/tl-ph.js",
	"./tlh": "../../../../moment-es6/node_modules/moment/locale/tlh.js",
	"./tlh.js": "../../../../moment-es6/node_modules/moment/locale/tlh.js",
	"./tr": "../../../../moment-es6/node_modules/moment/locale/tr.js",
	"./tr.js": "../../../../moment-es6/node_modules/moment/locale/tr.js",
	"./tzl": "../../../../moment-es6/node_modules/moment/locale/tzl.js",
	"./tzl.js": "../../../../moment-es6/node_modules/moment/locale/tzl.js",
	"./tzm": "../../../../moment-es6/node_modules/moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment-es6/node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment-es6/node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment-es6/node_modules/moment/locale/tzm.js",
	"./ug-cn": "../../../../moment-es6/node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment-es6/node_modules/moment/locale/ug-cn.js",
	"./uk": "../../../../moment-es6/node_modules/moment/locale/uk.js",
	"./uk.js": "../../../../moment-es6/node_modules/moment/locale/uk.js",
	"./ur": "../../../../moment-es6/node_modules/moment/locale/ur.js",
	"./ur.js": "../../../../moment-es6/node_modules/moment/locale/ur.js",
	"./uz": "../../../../moment-es6/node_modules/moment/locale/uz.js",
	"./uz-latn": "../../../../moment-es6/node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment-es6/node_modules/moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment-es6/node_modules/moment/locale/uz.js",
	"./vi": "../../../../moment-es6/node_modules/moment/locale/vi.js",
	"./vi.js": "../../../../moment-es6/node_modules/moment/locale/vi.js",
	"./x-pseudo": "../../../../moment-es6/node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment-es6/node_modules/moment/locale/x-pseudo.js",
	"./yo": "../../../../moment-es6/node_modules/moment/locale/yo.js",
	"./yo.js": "../../../../moment-es6/node_modules/moment/locale/yo.js",
	"./zh-cn": "../../../../moment-es6/node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment-es6/node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment-es6/node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment-es6/node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment-es6/node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment-es6/node_modules/moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment-es6/node_modules/moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map