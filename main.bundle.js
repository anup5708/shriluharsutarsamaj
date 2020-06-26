webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/allabout-samaj/allabout-samaj.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/allabout-samaj/allabout-samaj.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel with-nav-tabs panel-info\">\n  <div class=\"panel-heading\">\n          <ul class=\"nav nav-tabs\">\n              <li class=\"active\"><a href=\"#tab1default\" data-toggle=\"tab\">Top News</a></li>\n              <li><a href=\"#tab3default\" data-toggle=\"tab\">Gallery</a></li>\n          </ul>\n  </div>\n  \n  <div class=\"panel-body\">\n      <div class=\"tab-content\">\n          <div class=\"tab-pane fade in active\" id=\"tab1default\">\n                <app-formupload [choice] = topimage></app-formupload>\n                    <br/>\n                    <br/>\n                <app-listupload></app-listupload>\n          </div>\n          <div class=\"tab-pane fade\" id=\"tab3default\">\n                <app-formupload [choice] = gallery>\n                </app-formupload>\n                <br/>\n                <br/>\n                <app-listupload></app-listupload>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/allabout-samaj/allabout-samaj.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllaboutSamajComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AllaboutSamajComponent = (function () {
    function AllaboutSamajComponent() {
        this.topimage = null;
        this.gallery = null;
        this.topimage = 'uploads';
        this.gallery = 'gallery';
    }
    AllaboutSamajComponent.prototype.ngOnInit = function () {
    };
    return AllaboutSamajComponent;
}());
AllaboutSamajComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-allabout-samaj',
        template: __webpack_require__("../../../../../src/app/allabout-samaj/allabout-samaj.component.html"),
        styles: [__webpack_require__("../../../../../src/app/allabout-samaj/allabout-samaj.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AllaboutSamajComponent);

//# sourceMappingURL=allabout-samaj.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar1 {\r\n    background: #F17153;\r\n    /* For browsers that do not support gradients */\r\n    /* For Safari 5.1 to 6.0 */\r\n    /* For Opera 11.1 to 12.0 */\r\n    /* For Firefox 3.6 to 15 */\r\n    background: linear-gradient(#F17153, #F58D63, #f1ab53);\r\n    /* Standard syntax */\r\n    padding: 0px;\r\n    min-height: 100%;\r\n}\r\n.logo {\r\n    max-height: 130px;\r\n}\r\n.logo>img {\r\n    margin-top: 30px;\r\n    padding: 3px;\r\n    border: 3px solid white;\r\n    border-radius: 100%;\r\n}\r\n.list {\r\n    color: #fff;\r\n    list-style: none;\r\n    padding-left: 0px;\r\n}\r\n.list::first-line {\r\n    color: rgba(255, 255, 255, 0.5);\r\n}\r\n.list> li, h5 {\r\n    padding: 5px 0px 5px 40px;\r\n    cursor: pointer;\r\n}\r\n.list>li:hover {\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    border-left: 5px solid white;\r\n    color: white;\r\n    font-weight: bolder;\r\n    padding-left: 35px;\r\n}.main-content{\r\ntext-align:center;\r\n}\r\n.logo-img{\r\n    width: 105px;\r\n    height: 110px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-2 col-sm-4 sidebar1\"  *ngIf=\"isLoggedIn$ | async as isLoggedIn\">\r\n            <div class=\"logo\">\r\n                <img src=\"assets/images/logo.png\" class=\"img-responsive center-block logo-img\" alt=\"Logo\">\r\n            </div>\r\n            <br>\r\n            <div class=\"left-navigation\">\r\n                <ul class=\"list\">\r\n                    <h5><strong>Ver 17.4.1.0</strong></h5>\r\n                   <li> <a routerLink = \"/candidate\">Candidate Request</a></li>\r\n                   <li><a routerLink = \"/member\"> Member Request </a></li>\r\n                   <li><a routerLink = \"/slideimage\"> Slide Image </a></li>\r\n                   <li><a routerLink = \"/gallery\"> Gallery Image </a></li>\r\n                   \r\n                    <li> <a (click) = \"logOut()\" routerLink = \"/\">Log Out  </a></li>\r\n                </ul>\r\n                <br>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-10 col-sm-8 main-content\">\r\n        <!--Main content code to be written here --> \r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repo_databaseQuery__ = __webpack_require__("../../../../../src/app/repo/databaseQuery.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, databaseQuery) {
        this.router = router;
        this.databaseQuery = databaseQuery;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.databaseQuery.isLoggedIn;
        console.log("AppComponent : ", this.isLoggedIn$);
    };
    AppComponent.prototype.logOut = function () {
        this.databaseQuery.logout();
    };
    return AppComponent;
}());
AppComponent.boolLooged = false;
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__repo_databaseQuery__["a" /* DatabaseQuery */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__repo_databaseQuery__["a" /* DatabaseQuery */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repo_databaseQuery__ = __webpack_require__("../../../../../src/app/repo/databaseQuery.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdel_Globals__ = __webpack_require__("../../../../../src/app/mdel/Globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_file_service_service__ = __webpack_require__("../../../../../src/app/upload-file-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_4_data_table_bootstrap_4__ = __webpack_require__("../../../../angular-4-data-table-bootstrap-4/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__demo1_data_table_demo1__ = __webpack_require__("../../../../../src/app/demo1/data-table-demo1.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__demo2_data_table_demo2__ = __webpack_require__("../../../../../src/app/demo2/data-table-demo2.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__demo3_data_table_demo3__ = __webpack_require__("../../../../../src/app/demo3/data-table-demo3.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__homepage_homepage_component__ = __webpack_require__("../../../../../src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__bridepage_bridepage_component__ = __webpack_require__("../../../../../src/app/bridepage/bridepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__groompage_groompage_component__ = __webpack_require__("../../../../../src/app/groompage/groompage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__allabout_samaj_allabout_samaj_component__ = __webpack_require__("../../../../../src/app/allabout-samaj/allabout-samaj.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__listupload_listupload_component__ = __webpack_require__("../../../../../src/app/listupload/listupload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__detailsupload_detailsupload_component__ = __webpack_require__("../../../../../src/app/detailsupload/detailsupload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__formupload_formupload_component__ = __webpack_require__("../../../../../src/app/formupload/formupload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng_lazyload_image__ = __webpack_require__("../../../../ng-lazyload-image/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ng_lazyload_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__toverux_ngx_sweetalert2__ = __webpack_require__("../../../../@toverux/ngx-sweetalert2/@toverux/ngx-sweetalert2.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__topimage_topimage_component__ = __webpack_require__("../../../../../src/app/topimage/topimage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__galleryimage_galleryimage_component__ = __webpack_require__("../../../../../src/app/galleryimage/galleryimage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_image_compress__ = __webpack_require__("../../../../ng2-image-compress/ng2-image-compress.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_image_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_ng2_image_compress__);
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
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__demo1_data_table_demo1__["a" /* DataTableDemo1 */],
            __WEBPACK_IMPORTED_MODULE_13__demo2_data_table_demo2__["a" /* DataTableDemo2 */],
            __WEBPACK_IMPORTED_MODULE_14__demo3_data_table_demo3__["a" /* DataTableDemo3 */],
            __WEBPACK_IMPORTED_MODULE_16__homepage_homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_17__bridepage_bridepage_component__["a" /* BridepageComponent */],
            __WEBPACK_IMPORTED_MODULE_18__groompage_groompage_component__["a" /* GroompageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__allabout_samaj_allabout_samaj_component__["a" /* AllaboutSamajComponent */],
            __WEBPACK_IMPORTED_MODULE_20__listupload_listupload_component__["a" /* ListuploadComponent */],
            __WEBPACK_IMPORTED_MODULE_26__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_21__detailsupload_detailsupload_component__["a" /* DetailsuploadComponent */],
            __WEBPACK_IMPORTED_MODULE_22__formupload_formupload_component__["a" /* FormuploadComponent */],
            __WEBPACK_IMPORTED_MODULE_28__topimage_topimage_component__["a" /* TopimageComponent */],
            __WEBPACK_IMPORTED_MODULE_29__galleryimage_galleryimage_component__["a" /* GalleryimageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular_4_data_table_bootstrap_4__["b" /* DataTableModule */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(
            // {apiKey: "AIzaSyBQ_-17OtrC66Q5FnSWxWrOabMwv-62Vws",
            // authDomain: "adminpanelsamaj-5ffe8.firebaseapp.com",
            // databaseURL: "https://adminpanelsamaj-5ffe8.firebaseio.com",   //Live
            // projectId: "adminpanelsamaj-5ffe8",
            // storageBucket: "adminpanelsamaj-5ffe8.appspot.com",
            // messagingSenderId: "1054979309550"}
            {
                apiKey: "AIzaSyCaOv0BlX9oT4wwfeyWn4gd5Q6ITMqs2T0",
                authDomain: "adminpanelsamaj.firebaseapp.com",
                databaseURL: "https://adminpanelsamaj.firebaseio.com",
                projectId: "adminpanelsamaj",
                storageBucket: "adminpanelsamaj.appspot.com",
                messagingSenderId: "1027931712644"
            }),
            __WEBPACK_IMPORTED_MODULE_24__toverux_ngx_sweetalert2__["a" /* SweetAlert2Module */].forRoot({
                buttonsStyling: false,
                customClass: 'modal-content',
                confirmButtonClass: 'btn btn-primary',
                cancelButtonClass: 'btn'
            }),
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_26__login_login_component__["a" /* LoginComponent */] },
                { path: 'candidate', component: __WEBPACK_IMPORTED_MODULE_16__homepage_homepage_component__["a" /* HomepageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__auth_guard__["a" /* AuthGuard */]] },
                { path: 'member', component: __WEBPACK_IMPORTED_MODULE_18__groompage_groompage_component__["a" /* GroompageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__auth_guard__["a" /* AuthGuard */]] },
                { path: 'slideimage', component: __WEBPACK_IMPORTED_MODULE_28__topimage_topimage_component__["a" /* TopimageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__auth_guard__["a" /* AuthGuard */]] },
                { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_29__galleryimage_galleryimage_component__["a" /* GalleryimageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_27__auth_guard__["a" /* AuthGuard */]] },
                { path: '**', component: __WEBPACK_IMPORTED_MODULE_26__login_login_component__["a" /* LoginComponent */] }
            ]),
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_25_angularfire2_firestore__["b" /* AngularFirestoreModule */],
            __WEBPACK_IMPORTED_MODULE_23_ng_lazyload_image__["LazyLoadImageModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_30_ng2_image_compress__["ImageCompressService"], __WEBPACK_IMPORTED_MODULE_30_ng2_image_compress__["ResizeOptions"], __WEBPACK_IMPORTED_MODULE_27__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_2__upload_file_service_service__["a" /* UploadFileServiceService */], __WEBPACK_IMPORTED_MODULE_10_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_0__repo_databaseQuery__["a" /* DatabaseQuery */], __WEBPACK_IMPORTED_MODULE_1__mdel_Globals__["a" /* Globals */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repo_databaseQuery__ = __webpack_require__("../../../../../src/app/repo/databaseQuery.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(databaseQuery, router) {
        this.databaseQuery = databaseQuery;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.databaseQuery.isLoggedIn.take(1) // {2} 
            .map(function (isLoggedIn) {
            if (!isLoggedIn) {
                _this.router.navigate(['']); // {4}
                return false;
            }
            return true;
        });
        ;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__repo_databaseQuery__["a" /* DatabaseQuery */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__repo_databaseQuery__["a" /* DatabaseQuery */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/bridepage/bridepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bridepage/bridepage.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  bridepage works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/bridepage/bridepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BridepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BridepageComponent = (function () {
    function BridepageComponent() {
    }
    BridepageComponent.prototype.ngOnInit = function () {
    };
    return BridepageComponent;
}());
BridepageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bridepage',
        template: __webpack_require__("../../../../../src/app/bridepage/bridepage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bridepage/bridepage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BridepageComponent);

//# sourceMappingURL=bridepage.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo1/data-table-demo1-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    { "name": "Aaron 2Moore", "email": "Heath44@hotmail.com", "jobTitle": "Regional Configuration Producer", "active": true, "phoneNumber": "611-898-6201", "date": "2015-11-06T07:21:25.510Z" },
    { "name": "Yvonne Conroy Mrs.", "email": "Gideon9@yahoo.com", "jobTitle": "Global Mobility Orchestrator", "active": false, "phoneNumber": "115-850-0969", "date": "2014-12-20T00:48:40.276Z" },
    { "name": "Laron Padberg", "email": "Laney_Huels@hotmail.com", "jobTitle": "Senior Directives Supervisor", "active": false, "phoneNumber": "632-654-3034", "date": "2015-09-29T04:33:38.544Z" },
    { "name": "Dr. Maryam Spinka", "email": "Aletha.Labadie@hotmail.com", "jobTitle": "Dynamic Mobility Associate", "active": true, "phoneNumber": "547-345-0067", "date": "2015-09-23T01:13:39.320Z" },
    { "name": "Kiley Baumbach", "email": "Rogelio24@hotmail.com", "jobTitle": "Principal Metrics Orchestrator", "active": true, "phoneNumber": "958-524-5164", "date": "2014-12-05T23:39:27.340Z" },
    { "name": "Hollis MacGyver", "email": "Yazmin.Heidenreich97@gmail.com", "jobTitle": "Direct Markets Assistant", "active": true, "phoneNumber": "603-607-3241", "date": "2015-02-12T10:40:52.977Z" },
    { "name": "Axel McLaughlin", "email": "Deon_Heaney@gmail.com", "jobTitle": "Forward Mobility Architect", "active": false, "phoneNumber": "983-639-0705", "date": "2015-03-01T02:28:26.030Z" },
    { "name": "Ricardo Botsford", "email": "Melisa73@yahoo.com", "jobTitle": "Direct Quality Consultant", "active": true, "phoneNumber": "408-082-9480", "date": "2015-01-31T03:41:54.611Z" },
    { "name": "Corbin Funk Mrs.", "email": "Marjory.Morissette51@gmail.com", "jobTitle": "Human Configuration Manager", "active": true, "phoneNumber": "386-937-8683", "date": "2014-12-05T15:07:36.843Z" },
    { "name": "Rosalind Paucek", "email": "Ivy_Stanton@gmail.com", "jobTitle": "Future Creative Supervisor", "active": true, "phoneNumber": "977-661-7403", "date": "2015-06-10T17:42:38.644Z" },
    { "name": "Henderson Moore", "email": "Randi_Corkery@hotmail.com", "jobTitle": "Internal Accountability Director", "active": true, "phoneNumber": "078-101-6377", "date": "2015-09-26T05:14:34.913Z" },
    { "name": "Kelli Schoen", "email": "Reva.Kiehn54@yahoo.com", "jobTitle": "National Accountability Architect", "active": false, "phoneNumber": "654-591-6561", "date": "2015-05-04T06:50:37.482Z" },
    { "name": "Kenna Fritsch", "email": "Wilburn2@gmail.com", "jobTitle": "Legacy Response Administrator", "active": true, "phoneNumber": "790-480-2859", "date": "2015-10-10T23:37:05.867Z" },
    { "name": "Judge Marquardt", "email": "Letha_Champlin69@hotmail.com", "jobTitle": "Human Program Specialist", "active": true, "phoneNumber": "100-494-1787", "date": "2015-04-04T23:29:48.588Z" },
    { "name": "Kurtis Hane", "email": "Mona.Gaylord47@yahoo.com", "jobTitle": "International Optimization Director", "active": false, "phoneNumber": "008-800-2959", "date": "2014-12-04T21:09:50.722Z" },
    { "name": "Nicolette Lind", "email": "Thurman30@yahoo.com", "jobTitle": "Legacy Marketing Facilitator", "active": true, "phoneNumber": "007-908-2460", "date": "2015-06-22T08:11:57.381Z" },
    { "name": "Idella Green", "email": "Fernando_Ward@yahoo.com", "jobTitle": "Dynamic Division Orchestrator", "active": false, "phoneNumber": "147-865-1578", "date": "2015-02-12T23:00:31.283Z" },
    { "name": "Mackenzie Bartell", "email": "Price25@yahoo.com", "jobTitle": "National Directives Associate", "active": false, "phoneNumber": "235-649-0980", "date": "2015-06-24T20:21:51.356Z" },
    { "name": "Mose Kohler", "email": "Malika56@hotmail.com", "jobTitle": "Lead Implementation Executive", "active": true, "phoneNumber": "614-886-4868", "date": "2015-03-04T13:05:23.698Z" },
    { "name": "Cielo Kuphal", "email": "Jude_Terry24@gmail.com", "jobTitle": "Dynamic Division Analyst", "active": false, "phoneNumber": "590-976-7492", "date": "2015-06-02T20:52:32.664Z" },
    { "name": "Haleigh Stokes", "email": "Belle_Herman64@yahoo.com", "jobTitle": "Global Intranet Executive", "active": false, "phoneNumber": "418-255-9365", "date": "2015-04-10T00:32:10.283Z" },
    { "name": "Tyrese Walter", "email": "Garland.Veum52@hotmail.com", "jobTitle": "Senior Web Liason", "active": false, "phoneNumber": "041-555-9831", "date": "2015-08-18T20:05:08.839Z" },
    { "name": "Barney Shields", "email": "Anika27@gmail.com", "jobTitle": "District Web Administrator", "active": true, "phoneNumber": "379-438-0217", "date": "2015-06-01T09:28:46.778Z" },
    { "name": "Favian Abbott Miss", "email": "Palma_Little@hotmail.com", "jobTitle": "Lead Implementation Facilitator", "active": false, "phoneNumber": "642-808-5400", "date": "2015-08-09T07:38:06.588Z" },
    { "name": "Carissa Kunze", "email": "Merl_Frami@yahoo.com", "jobTitle": "Regional Division Technician", "active": true, "phoneNumber": "949-983-0342", "date": "2015-11-05T08:09:09.463Z" }
]);
//# sourceMappingURL=data-table-demo1-data.js.map

/***/ }),

/***/ "../../../../../src/app/demo1/data-table-demo1.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n:host /deep/ .data-table-row {\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo1/data-table-demo1.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: auto; max-width: 1000px; margin-bottom: 50px;\">\r\n    <data-table id=\"persons-grid\"\r\n        headerTitle=\"Employees (Double click)\"\r\n        [items]=\"items\"\r\n        [itemCount]=\"itemCount\"\r\n        (reload)=\"reloadItems($event)\"\r\n\r\n        (rowClick)=\"rowClick($event)\"\r\n        (rowDoubleClick)=\"rowDoubleClick($event)\"\r\n        [rowTooltip]=\"rowTooltip\"\r\n        >\r\n        <data-table-column\r\n            [property]=\"'name'\"\r\n            [header]=\"'Name'\"\r\n            [sortable]=\"true\"\r\n            [resizable]=\"true\">\r\n        </data-table-column>\r\n        <data-table-column\r\n            [property]=\"'date'\"\r\n            [header]=\"'Date'\"\r\n            [sortable]=\"true\">\r\n            <template #dataTableCell let-item=\"item\">\r\n                <span>{{item.date | date:'yyyy-MM-dd'}}</span>\r\n            </template>\r\n        </data-table-column>\r\n        <data-table-column\r\n            property=\"phoneNumber\"\r\n            header=\"Phone number\"\r\n            width=\"150px\">\r\n        </data-table-column>\r\n        <data-table-column\r\n            [property]=\"'jobTitle'\"\r\n            [header]=\"'Job title'\"\r\n            [visible]=\"false\">\r\n        </data-table-column>\r\n        <data-table-column\r\n            [property]=\"'active'\"\r\n            [header]=\"'Active'\"\r\n            [width]=\"100\"\r\n            [resizable]=\"true\">\r\n            <template #dataTableHeader let-item=\"item\">\r\n                <span style=\"color: rgb(232, 0, 0)\">Active</span>\r\n            </template>\r\n            <template #dataTableCell let-item=\"item\">\r\n                <span style=\"color: grey\">\r\n                <span class=\"fa fa-check\" *ngIf=\"item.active\"></span>\r\n                <span class=\"fa fa-times\" *ngIf=\"!item.active\"></span>\r\n                </span>\r\n            </template>\r\n        </data-table-column>\r\n    </data-table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/demo1/data-table-demo1.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableDemo1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table_bootstrap_4__ = __webpack_require__("../../../../angular-4-data-table-bootstrap-4/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_table_demo1_data__ = __webpack_require__("../../../../../src/app/demo1/data-table-demo1-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataTableDemo1 = (function () {
    function DataTableDemo1() {
        var _this = this;
        this.itemResource = new __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table_bootstrap_4__["c" /* DataTableResource */](__WEBPACK_IMPORTED_MODULE_2__data_table_demo1_data__["a" /* default */]);
        this.items = [];
        this.itemCount = 0;
        this.itemResource.count().then(function (count) { return _this.itemCount = count; });
    }
    DataTableDemo1.prototype.reloadItems = function (params) {
        var _this = this;
        this.itemResource.query(params).then(function (items) { return _this.items = items; });
    };
    // special properties:
    DataTableDemo1.prototype.rowClick = function (rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    };
    DataTableDemo1.prototype.rowDoubleClick = function (rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    };
    DataTableDemo1.prototype.rowTooltip = function (item) { return item.jobTitle; };
    return DataTableDemo1;
}());
DataTableDemo1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'data-table-demo-1',
        providers: [],
        template: __webpack_require__("../../../../../src/app/demo1/data-table-demo1.html"),
        styles: [__webpack_require__("../../../../../src/app/demo1/data-table-demo1.css")]
    }),
    __metadata("design:paramtypes", [])
], DataTableDemo1);

//# sourceMappingURL=data-table-demo1.js.map

/***/ }),

/***/ "../../../../../src/app/demo2/data-table-demo2-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cars; });
var cars = [
    { year: 1997, maker: 'Ford', model: 'E350', desc: 'ac, abs, moon', price: 3000.00 },
    { year: 1999, maker: 'Chevy', model: 'Venture "Extended Edition"', price: 4900.00 },
    { year: 1999, maker: 'Checy', model: 'Venture "Extended Edition, Very Large"', price: 5000.00 },
    { year: 1996, maker: 'Jeep', model: 'Grand Cherokee', desc: 'air, moon roof, loaded', price: 4799.00 }
];
//# sourceMappingURL=data-table-demo2-data.js.map

/***/ }),

/***/ "../../../../../src/app/demo2/data-table-demo2.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: auto; max-width: 600px;\">\r\n  <div>\r\n    <span>Highlight after: </span>\r\n    <input type=\"number\" [(ngModel)]=\"yearLimit\" class=\"form-control input-sm\" style=\"display: inline-block; width: 100px\">\r\n  </div>\r\n  <data-table\r\n    headerTitle=\"Cars (Multiple selection)\"\r\n    [items]=\"cars\"\r\n    [itemCount]=\"carCount\"\r\n    (reload)=\"reloadCars($event)\"\r\n\r\n    [pagination]=\"false\"\r\n    [indexColumn]=\"false\"\r\n    [selectColumn]=\"true\"\r\n    [multiSelect]=\"true\"\r\n    [rowColors]=\"rowColors\"\r\n    >\r\n    <data-table-column\r\n      property=\"year\"\r\n      header=\"Year\"\r\n      sortable=\"true\">\r\n      <template #dataTableCell let-item=\"item\">\r\n        <input type=\"number\" [(ngModel)]=\"item.year\" class=\"form-control input-sm\" style=\"width: 75px\"/>\r\n      </template>\r\n    </data-table-column>\r\n    <data-table-column\r\n      property=\"maker\"\r\n      header=\"Maker\">\r\n    </data-table-column>\r\n    <data-table-column\r\n      property=\"model\"\r\n      header=\"Model\">\r\n    </data-table-column>\r\n    <data-table-column\r\n      property=\"price\"\r\n      header=\"Price ($)\">\r\n    </data-table-column>\r\n    <data-table-column\r\n      header=\"Actions\">\r\n      <template #dataTableHeader let-item=\"item\">\r\n        <i>Actions</i>\r\n      </template>\r\n      <template #dataTableCell let-item=\"item\">\r\n        <button (click)=\"carClicked(item)\" class=\"btn btn-sm btn-default\">Buy</button>\r\n      </template>\r\n    </data-table-column>\r\n  </data-table>\r\n  <div>\r\n    <div>\r\n        <b>Selected:</b>\r\n        <span [textContent]=\"carsTable.selectedRows.length\"></span>\r\n    </div>\r\n    <div *ngFor=\"let selected of carsTable.selectedRows\">\r\n        <span [textContent]=\"selected.item.model\"></span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/demo2/data-table-demo2.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableDemo2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table_bootstrap_4__ = __webpack_require__("../../../../angular-4-data-table-bootstrap-4/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_table_demo2_data__ = __webpack_require__("../../../../../src/app/demo2/data-table-demo2-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataTableDemo2 = (function () {
    function DataTableDemo2() {
        var _this = this;
        this.carResource = new __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table_bootstrap_4__["c" /* DataTableResource */](__WEBPACK_IMPORTED_MODULE_2__data_table_demo2_data__["a" /* cars */]);
        this.cars = [];
        this.carCount = 0;
        this.yearLimit = 1999;
        this.rowColors = this.rowColors.bind(this);
        this.carResource.count().then(function (count) { return _this.carCount = count; });
    }
    DataTableDemo2.prototype.reloadCars = function (params) {
        var _this = this;
        this.carResource.query(params).then(function (cars) { return _this.cars = cars; });
    };
    // custom features:
    DataTableDemo2.prototype.carClicked = function (car) {
        alert(car.model);
    };
    DataTableDemo2.prototype.rowColors = function (car) {
        if (car.year >= this.yearLimit)
            return 'rgb(255, 255, 197)';
    };
    return DataTableDemo2;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_angular_4_data_table_bootstrap_4__["a" /* DataTable */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table_bootstrap_4__["a" /* DataTable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_4_data_table_bootstrap_4__["a" /* DataTable */]) === "function" && _a || Object)
], DataTableDemo2.prototype, "carsTable", void 0);
DataTableDemo2 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'data-table-demo-2',
        template: __webpack_require__("../../../../../src/app/demo2/data-table-demo2.html")
    }),
    __metadata("design:paramtypes", [])
], DataTableDemo2);

var _a;
//# sourceMappingURL=data-table-demo2.js.map

/***/ }),

/***/ "../../../../../src/app/demo3/data-table-demo3.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n:host /deep/ .index-column,\r\n:host /deep/ .index-column-header {\r\n    text-align: right;\r\n}\r\n\r\n:host /deep/ .data-table .data-table-row.selected {\r\n    background-color: #E4EDF9;\r\n}\r\n:host /deep/ .data-table > thead > tr > th, [_nghost-c3] .data-table > tbody > tr > td {\r\n    overflow: hidden;\r\n    text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo3/data-table-demo3.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: auto; max-width: 1000px; margin-top:50px\">\r\n    <data-table id=\"films-grid\"\r\n        headerTitle = \"Require For Confirmation\"\r\n        [items]=\"films\"\r\n        [itemCount]=\"filmCount\"\r\n        (reload)=\"reloadFilms($event)\"\r\n\r\n        [limit]=\"8\"\r\n        [sortBy]=\"'rating'\"\r\n        [sortAsc]=\"false\"\r\n\r\n        [selectColumn]=\"true\"\r\n        [multiSelect]=\"false\"\r\n        [substituteRows]=\"false\"\r\n        [expandableRows]=\"true\"\r\n        [translations]=\"translations\"\r\n        [indexColumnHeader]=\"'#'\"\r\n        [selectOnRowClick]=\"true\"\r\n        >\r\n        <template *ngIf = \"_category == 'candidate'\" #dataTableExpand let-item=\"item\">\r\n            <!-- <div [textContent]=\"item.description\" style=\"padding: 5px; color: gray\"></div> -->\r\n            <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-3 col-lg-3 \" align=\"center\"> <img alt=\"User Pic\" src=\"{{item.images1}}\" class=\"img-circle img-responsive\" style=\"    width: 100px;\r\n                    border-radius: 50px;\"> </div>\r\n                  <div class=\" col-md-9 col-lg-9 \"> \r\n                    <table class=\"table table-user-information\">\r\n                      <tbody>\r\n                        <tr>\r\n                          <td>First name:</td>\r\n                          <td>{{item.name}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Middle name</td>\r\n                          <td>{{item?.middlename}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Last name</td>\r\n                          <td>{{item.lastname}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Gender</td>\r\n                          <td>{{item.gender}}</td>\r\n                        </tr>\r\n                          <tr>\r\n                          <td>Date of Birth</td>\r\n                          <td>{{item.dob}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Birth place</td>\r\n                          <td>{{item.birthplace}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Height</td>\r\n                          <td>{{item.height}}\r\n                          </td>    \r\n                        </tr>\r\n                        <tr>\r\n                          <td>Weight</td>\r\n                          <td>{{item.weight}}\r\n                          </td>    \r\n                        </tr>\r\n                             <tr>\r\n                          <td>Educational Qualification</td>\r\n                          <td>{{item.qualification}}\r\n                          </td>    \r\n                        </tr>\r\n                             <tr>\r\n                          <td>Business / Job of Candidate</td>\r\n                          <td>{{item.bussinessjob}}\r\n                          </td>    \r\n                        </tr>\r\n                             <tr>\r\n                          <td>Monthly income</td>\r\n                          <td>{{item.income}}\r\n                          </td>    \r\n                        </tr>\r\n                          <tr>\r\n                          <td>Maritial Status</td>\r\n                          <td>{{item.maritalstatus}}\r\n                          </td>    \r\n                        </tr>\r\n                        <tr>\r\n                          <td>Physical Disability</td>\r\n                          <td>{{item.disability}}\r\n                          </td>    \r\n                        </tr>\r\n                         <tr>\r\n                          <td>Glasses</td>\r\n                          <td>{{item.glasses}}\r\n                          </td>    \r\n                        </tr>\r\n                          <tr>\r\n                          <td>Mangal</td>\r\n                          <td>{{item.mangal}}\r\n                          </td>    \r\n                        </tr>\r\n                          <tr>\r\n                          <td>Hobby</td>\r\n                          <td>{{item.hobby}}\r\n                          </td>    \r\n                        </tr>\r\n                         <tr>\r\n                          <td>Expectation</td>\r\n                          <td>{{item.expectation}}\r\n                          </td>    \r\n                        </tr>\r\n                          <tr>\r\n                          <td>Father's Full name</td>\r\n                          <td>{{item.fathername}}\r\n                          </td>    \r\n                        </tr>\r\n                         <tr>\r\n                          <td>Sub Cast</td>\r\n                          <td>{{item.subcaste}}\r\n                          </td>    \r\n                        </tr>\r\n                        <tr>\r\n                          <td>Mother's name</td>\r\n                          <td>{{item.mothername}}\r\n                          </td>    \r\n                        </tr><tr>\r\n                          <td>Parent's Business</td>\r\n                          <td>{{item.parentbusiness}}\r\n                          </td>    \r\n                        </tr>\r\n                        <tr>\r\n                          <td>Native Place</td>\r\n                          <td>{{item.nativeplace}}\r\n                          </td>    \r\n                        </tr>\r\n                        <tr>\r\n                          <td>Address 1 </td>\r\n                          <td>{{item.addressline1}}\r\n                          </td>    \r\n                        </tr>\r\n                         <tr>\r\n                          <td>Address 2</td>\r\n                          <td>{{item.addressline2}}\r\n                          </td>    \r\n                        </tr>\r\n                        <tr>\r\n                          <td>Landmark</td>\r\n                          <td>{{item.landmark}}\r\n                          </td>    \r\n                        </tr>\r\n                         <tr>\r\n                          <td>Area</td>\r\n                          <td>{{item.area}}\r\n                          </td>    \r\n                        </tr>\r\n                         <tr>\r\n                          <td>City</td>\r\n                          <td>{{item.city}}\r\n                          </td>    \r\n                        </tr>\r\n                         <tr>\r\n                          <td>Pincode</td>\r\n                          <td>{{item.pincode}}\r\n                          </td>    \r\n                        </tr>\r\n                         <tr>\r\n                          <td>State</td>\r\n                          <td>{{item.state}}\r\n                          </td>    \r\n                        </tr>\r\n                         <tr>\r\n                          <td>Country</td>\r\n                          <td>{{item.country}}\r\n                          </td>    \r\n                        </tr>\r\n                          <tr>\r\n                          <td>Contact No (Parent)</td>\r\n                          <td>{{item.parentcontact}}\r\n                          </td>    \r\n                        </tr>\r\n                         <tr>\r\n                          <td>Contact No (Candidate)</td>\r\n                          <td>{{item.candidatecontact}}\r\n                          </td>    \r\n                        </tr>\r\n                        <tr>\r\n                          <td>Email ID</td>\r\n                          <td>{{item.emailid}}\r\n                          </td>    \r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                    <button type = \"button\" class=\"btn btn-danger\" (click) = \"reject(item)\">Reject</button>\r\n                    <button type = \"button\" class=\"btn btn-primary\" (click) = 'approve(item)'  *ngIf = \"item.statusAP == 'Pending'\"> Approve</button>\r\n                    <input id=\"inputImage\" type=\"file\" accept=\"image/*\" (change)=\"onChange($event)\" single *ngIf = \"item.statusAP == 'Pending'\" />\r\n                 \r\n                  </div>\r\n                </div>\r\n              </div>\r\n        </template>\r\n        <template *ngIf = \"_category != 'candidate'\" #dataTableExpand let-item=\"item\">\r\n          <!-- <div [textContent]=\"item.description\" style=\"padding: 5px; color: gray\"></div> -->\r\n          <div class=\"panel-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-3 col-lg-3 \" align=\"center\"> <img alt=\"User Pic\" src=\"{{item.imageurl}}\" class=\"img-circle img-responsive\" style=\"    width: 100px;\r\n                  border-radius: 50px;\"> </div>\r\n                <div class=\" col-md-9 col-lg-9 \"> \r\n                  <table class=\"table table-user-information\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <td>First name:</td>\r\n                        <td>{{item.displayname}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Request Date</td>\r\n                        <td>{{item.joineddate | date: 'yyyy-MM-dd'}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Contact No:.</td>\r\n                        <td>{{item.mob}}</td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Location</td>\r\n                        <td>{{item.location}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n               \r\n                  <button type = \"button\" class=\"btn btn-danger\" (click) = \"reject(item)\">Reject</button>\r\n                  <button type = \"button\" class=\"btn btn-primary\" (click) = 'approve(item)' *ngIf = \"item.statusAP == 'Pending'\">Approve</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n      </template>\r\n\r\n        <data-table-column *ngIf = \"_category == 'candidate'\"\r\n            [property]=\"'name'\"\r\n            [header]=\"'Name'\"\r\n            [sortable]=\"true\">\r\n        </data-table-column>\r\n        <data-table-column *ngIf = \"_category != 'candidate'\"\r\n        [property]=\"'displayname'\"\r\n        [header]=\"'Name'\"\r\n        [sortable]=\"true\">\r\n    </data-table-column>\r\n        <data-table-column *ngIf = \"_category == 'candidate'\"\r\n            [property]=\"'dob'\"\r\n            [header]=\"'DOB (YEAR)'\"\r\n            [sortable]=\"true\">\r\n        </data-table-column>\r\n        <data-table-column\r\n            [property]=\"'gender'\"\r\n            [header]=\"'Gender'\"\r\n            [sortable]=\"true\"\r\n            [cellColors]=\"cellColor\">\r\n        </data-table-column>\r\n        <data-table-column\r\n            [property]=\"'emailid'\"\r\n            [header]=\"'Email ID'\"\r\n            [sortable]=\"true\"\r\n            [cellColors]=\"cellColor\">\r\n        </data-table-column>\r\n        <data-table-column\r\n        [property]=\"'statusAP'\"\r\n        [header]=\"'Status'\"\r\n        [sortable]=\"true\"\r\n        [cellColors]=\"cellColor\">\r\n    </data-table-column>\r\n    </data-table>\r\n    <div style=\"margin-top: 10px\">\r\n        <b>Selected:</b>\r\n        <span *ngIf=\"filmsTable.selectedRow == null\"><i>No item selected</i></span>\r\n        <span [textContent]=\"filmsTable.selectedRow && filmsTable.selectedRow.item.title\"></span>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/demo3/data-table-demo3.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableDemo3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repo_databaseQuery__ = __webpack_require__("../../../../../src/app/repo/databaseQuery.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_4_data_table_bootstrap_4__ = __webpack_require__("../../../../angular-4-data-table-bootstrap-4/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdel_firebaseCollectionName__ = __webpack_require__("../../../../../src/app/mdel/firebaseCollectionName.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_image_compress__ = __webpack_require__("../../../../ng2-image-compress/ng2-image-compress.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_image_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_image_compress__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { films } from './data-table-demo3-data';




var DataTableDemo3 = (function () {
    function DataTableDemo3(databaseQuery) {
        this.databaseQuery = databaseQuery;
        this.films = [];
        this.filmCount = 0;
        this._selectedImage = null;
        this.showTitle = false;
        // special params:
        this.translations = {
            indexColumn: 'Index column',
            expandColumn: 'Expand column',
            selectColumn: 'Select column',
            paginationLimit: 'Max results',
            paginationRange: 'Result range'
        };
    }
    Object.defineProperty(DataTableDemo3.prototype, "text", {
        set: function (value) {
            this._category = value;
            if (this._category == 'candidate') {
                this.getList();
            }
            else
                this.getMemberList();
        },
        enumerable: true,
        configurable: true
    });
    DataTableDemo3.prototype.getMemberList = function () {
        var _this = this;
        this.databaseQuery.getAllMemberList().then(function (res) {
            _this.films = res;
            _this.filmResource = new __WEBPACK_IMPORTED_MODULE_2_angular_4_data_table_bootstrap_4__["c" /* DataTableResource */](_this.films);
            _this.filmResource.count().then(function (count) { return _this.filmCount = count; });
        });
    };
    DataTableDemo3.prototype.onChange = function (event) {
        this._selectedImage = event;
    };
    DataTableDemo3.prototype.getList = function () {
        var _this = this;
        this.databaseQuery.getAllCandidateList().then(function (res) {
            _this.films = res;
            _this.filmResource = new __WEBPACK_IMPORTED_MODULE_2_angular_4_data_table_bootstrap_4__["c" /* DataTableResource */](_this.films);
            _this.filmResource.count().then(function (count) { return _this.filmCount = count; });
        });
    };
    DataTableDemo3.prototype.reject = function (item) {
        var _this = this;
        if (this._category == 'candidate') {
            this.databaseQuery.getProfileByEmailID(item.emailid).then(function (res) {
                var ueId = res[0].userid;
                var refUrlImage = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref().
                    child(__WEBPACK_IMPORTED_MODULE_4__mdel_firebaseCollectionName__["a" /* FirebaseCollectionName */].CANDIDATEIMAGEFOLDER + '/' + ueId + '/' + item.registerDate);
                refUrlImage.delete().then(function () {
                    _this.databaseQuery.deleteCandidate(_this._category, item.id).then(function (res) {
                        if (res) {
                            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Status...', 'Successfully Deleted!', 'success');
                            if (_this._category == 'candidate')
                                _this.getList();
                            else
                                _this.getMemberList();
                        }
                    });
                });
            });
        }
        else {
            this.databaseQuery.deleteCandidate(this._category, item.id).then(function (res) {
                if (res) {
                    __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Status...', 'Successfully Deleted!', 'success');
                    if (_this._category == 'candidate')
                        _this.getList();
                    else
                        _this.getMemberList();
                }
            });
        }
    };
    DataTableDemo3.prototype.reloadFilms = function (params) {
        var _this = this;
        this.filmResource.query(params).then(function (films) { return _this.films = films; });
    };
    DataTableDemo3.prototype.cellColor = function (car) {
        return 'rgb(255, 255,' + (155 + Math.floor(100 - ((car.rating - 8.7) / 1.3) * 100)) + ')';
    };
    ;
    DataTableDemo3.prototype.approve = function (item) {
        var _this = this;
        var offsetRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref(".info/serverTimeOffset");
        offsetRef.on("value", function (snap) {
            var tmpDate = new Date().getTime() + snap.val();
            if (_this._category != 'candidate') {
                _this.databaseQuery.setValidUser(item.id, tmpDate).then(function (res) {
                    if (res == true)
                        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Status...', 'Successfully Approved!', 'success');
                    _this.getMemberList();
                });
            }
            else {
                if (_this._selectedImage != null) {
                    _this.databaseQuery.setValidCandidate(item.id).then(function (res) {
                        if (res == true) {
                            var fileList = void 0;
                            var images = [];
                            __WEBPACK_IMPORTED_MODULE_6_ng2_image_compress__["ImageCompressService"].filesToCompressedImageSource(_this._selectedImage.target.files).then(function (observableImages) {
                                observableImages.subscribe(function (image) {
                                    _this.databaseQuery.getProfileByEmailID(item.emailid).then(function (responseID) {
                                        _this.databaseQuery.saveCompressedCandidateImage(responseID[0].userid, item.registerDate, image, item.id).then(function (res) {
                                            __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Status...', 'Successfully Approved!', 'success');
                                            _this._selectedImage = null;
                                            _this.getList();
                                        });
                                    });
                                });
                            });
                        }
                    });
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()('Save Candidate Image with extension .jpg and select file and then press Approve button', 'For Compression of Images', 'error');
                }
            }
        });
    };
    return DataTableDemo3;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('text'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], DataTableDemo3.prototype, "text", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular_4_data_table_bootstrap_4__["a" /* DataTable */]),
    __metadata("design:type", Object)
], DataTableDemo3.prototype, "filmsTable", void 0);
DataTableDemo3 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'data-table-demo-3',
        template: __webpack_require__("../../../../../src/app/demo3/data-table-demo3.html"),
        styles: [__webpack_require__("../../../../../src/app/demo3/data-table-demo3.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__repo_databaseQuery__["a" /* DatabaseQuery */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__repo_databaseQuery__["a" /* DatabaseQuery */]) === "function" && _a || Object])
], DataTableDemo3);

var _a;
//# sourceMappingURL=data-table-demo3.js.map

/***/ }),

/***/ "../../../../../src/app/detailsupload/detailsupload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/detailsupload/detailsupload.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\n{{fileUpload.name}}\n<button (click)='deleteFileUpload(fileUpload)'\n  class=\"btn btn-danger btn-xs\" style=\"float: right\">Delete</button>\n<img [defaultImage]=\"defaultImage\" [lazyLoad] = \"fileUpload.url\" alt=\"{{fileUpload.name}}\" style=\"max-width:350px;margin-top:5px;\"/>\n\n<br/>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/detailsupload/detailsupload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsuploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload_file_service_service__ = __webpack_require__("../../../../../src/app/upload-file-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdel_FileUpload__ = __webpack_require__("../../../../../src/app/mdel/FileUpload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsuploadComponent = (function () {
    function DetailsuploadComponent(uploadService) {
        this.uploadService = uploadService;
        this.defaultImage = 'http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif';
        this.offset = 100;
    }
    DetailsuploadComponent.prototype.ngOnInit = function () {
    };
    DetailsuploadComponent.prototype.deleteFileUpload = function (fileUpload) {
        console.log("deleteFileUpload");
        this.uploadService.deleteFileUpload(fileUpload);
    };
    return DetailsuploadComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mdel_FileUpload__["a" /* FileUpload */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mdel_FileUpload__["a" /* FileUpload */]) === "function" && _a || Object)
], DetailsuploadComponent.prototype, "fileUpload", void 0);
DetailsuploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-detailsupload',
        template: __webpack_require__("../../../../../src/app/detailsupload/detailsupload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/detailsupload/detailsupload.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__upload_file_service_service__["a" /* UploadFileServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__upload_file_service_service__["a" /* UploadFileServiceService */]) === "function" && _b || Object])
], DetailsuploadComponent);

var _a, _b;
//# sourceMappingURL=detailsupload.component.js.map

/***/ }),

/***/ "../../../../../src/app/formupload/formupload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/formupload/formupload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"row\">\n\t<div class = \"col-md-4 col-md-offset-4\">\n<div  *ngIf=\"currentFileUpload\" class=\"text-center progress\" style=\"width:253px\">\n\t<div class=\"progress-bar progress-bar-info progress-bar-striped\"\n\t\trole=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\n\t\taria-valuemin=\"0\" aria-valuemax=\"100\"\n\t\t[ngStyle]=\"{width:progress.percentage+'%'}\">\n\t\t{{progress.percentage}}%</div>\n</div>\n</div>\n</div>\n \n<label class=\"btn btn-default\"> <input type=\"file\" multiple\n\t(change)=\"selectFile($event)\">\n</label>\n \n<button class=\"btn btn-success\" [disabled]=\"!selectedFiles\"\n\t(click)=\"upload()\">Upload</button>"

/***/ }),

/***/ "../../../../../src/app/formupload/formupload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormuploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload_file_service_service__ = __webpack_require__("../../../../../src/app/upload-file-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdel_FileUpload__ = __webpack_require__("../../../../../src/app/mdel/FileUpload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdel_Globals__ = __webpack_require__("../../../../../src/app/mdel/Globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__ = __webpack_require__("../../../../ng2-image-compress/ng2-image-compress.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormuploadComponent = (function () {
    function FormuploadComponent(uploadService, imgCompressService) {
        this.uploadService = uploadService;
        this.imgCompressService = imgCompressService;
        this.progress = { percentage: 0 };
        this.listOfImages = [];
    }
    Object.defineProperty(FormuploadComponent.prototype, "choice", {
        set: function (value) {
            __WEBPACK_IMPORTED_MODULE_3__mdel_Globals__["a" /* Globals */].choiceupload = value;
            console.log("value value ", value);
        },
        enumerable: true,
        configurable: true
    });
    FormuploadComponent.prototype.ngOnInit = function () {
    };
    FormuploadComponent.prototype.selectFile = function (event) {
        this.eventTarget = event;
        var file = event.target.files.item(0);
        if (file.type.match('image.*')) {
            this.selectedFiles = event.target.files;
        }
        else {
            alert('invalid format!');
        }
    };
    FormuploadComponent.prototype.upload = function () {
        var _this = this;
        console.log("Globals.choiceupload", __WEBPACK_IMPORTED_MODULE_3__mdel_Globals__["a" /* Globals */].choiceupload);
        var size = this.selectedFiles.length;
        var file = this.selectedFiles.item(0);
        //  this.selectedFiles = undefined
        this.currentFileUpload = new __WEBPACK_IMPORTED_MODULE_1__mdel_FileUpload__["a" /* FileUpload */](file);
        __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__["ImageCompressService"].filesToCompressedImageSource(this.eventTarget.target.files).then(function (observableImages) {
            observableImages.subscribe(function (image) {
                console.log("image", image);
                _this.uploadService.pushFileToStorage(image, _this.progress, __WEBPACK_IMPORTED_MODULE_3__mdel_Globals__["a" /* Globals */].choiceupload);
                _this.listOfImages.push(image);
                //    images.push(image);
            }, function (error) {
                console.log("Error while converting");
            }, function () {
                //  this.processedImages = images;      
                //   this.showTitle = true;          
            });
        });
    };
    return FormuploadComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])('choice'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], FormuploadComponent.prototype, "choice", null);
FormuploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-formupload',
        template: __webpack_require__("../../../../../src/app/formupload/formupload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/formupload/formupload.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__upload_file_service_service__["a" /* UploadFileServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__upload_file_service_service__["a" /* UploadFileServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__["ImageCompressService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__["ImageCompressService"]) === "function" && _b || Object])
], FormuploadComponent);

var _a, _b;
//# sourceMappingURL=formupload.component.js.map

/***/ }),

/***/ "../../../../../src/app/galleryimage/galleryimage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/galleryimage/galleryimage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-formupload [choice] = gallery>\n</app-formupload>\n<br/>\n<br/>\n<app-listupload></app-listupload>"

/***/ }),

/***/ "../../../../../src/app/galleryimage/galleryimage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryimageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryimageComponent = (function () {
    function GalleryimageComponent() {
        this.gallery = 'gallery';
    }
    GalleryimageComponent.prototype.ngOnInit = function () {
    };
    return GalleryimageComponent;
}());
GalleryimageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-galleryimage',
        template: __webpack_require__("../../../../../src/app/galleryimage/galleryimage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/galleryimage/galleryimage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GalleryimageComponent);

//# sourceMappingURL=galleryimage.component.js.map

/***/ }),

/***/ "../../../../../src/app/groompage/groompage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.wrapper {    \r\n\tmargin-top: 80px;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 420px;\r\n  padding: 30px 38px 66px;\r\n  margin: 0 auto;\r\n  background-color: #eee;\r\n  border: 3px dotted rgba(0,0,0,0.1);  \r\n  }\r\n\r\n.form-signin-heading {\r\n  text-align:center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.form-control {\r\n  position: relative;\r\n  font-size: 16px;\r\n  height: auto;\r\n  padding: 10px;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  margin-bottom: 0px;\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\ninput[type=\"password\"] {\r\n  margin-bottom: 20px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.colorgraph {\r\n  height: 7px;\r\n  border-top: 0;\r\n  background: #c4e17f;\r\n  border-radius: 5px;\r\n  background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);\r\n}\r\n\r\n.sidebar1 {\r\n    background: #F17153;\r\n    /* For browsers that do not support gradients */\r\n    /* For Safari 5.1 to 6.0 */\r\n    /* For Opera 11.1 to 12.0 */\r\n    /* For Firefox 3.6 to 15 */\r\n    background: linear-gradient(#F17153, #F58D63, #f1ab53);\r\n    /* Standard syntax */\r\n    padding: 0px;\r\n    min-height: 100%;\r\n}\r\n.logo {\r\n    max-height: 130px;\r\n}\r\n.logo>img {\r\n    margin-top: 30px;\r\n    padding: 3px;\r\n    border: 3px solid white;\r\n    border-radius: 100%;\r\n}\r\n.list {\r\n    color: #fff;\r\n    list-style: none;\r\n    padding-left: 0px;\r\n}\r\n.list::first-line {\r\n    color: rgba(255, 255, 255, 0.5);\r\n}\r\n.list> li, h5 {\r\n    padding: 5px 0px 5px 40px;\r\n    cursor: pointer;\r\n}\r\n.list>li:hover {\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    border-left: 5px solid white;\r\n    color: white;\r\n    font-weight: bolder;\r\n    padding-left: 35px;\r\n}.main-content{\r\ntext-align:center;\r\n}\r\n.logo-img{\r\n    width: 105px;\r\n    height: 110px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/groompage/groompage.component.html":
/***/ (function(module, exports) {

module.exports = "<data-table-demo-3 [text] = category></data-table-demo-3>"

/***/ }),

/***/ "../../../../../src/app/groompage/groompage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroompageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repo_databaseQuery__ = __webpack_require__("../../../../../src/app/repo/databaseQuery.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroompageComponent = (function () {
    function GroompageComponent(database) {
        this.database = database;
        this.category = "user";
    }
    GroompageComponent.prototype.ngOnInit = function () {
    };
    return GroompageComponent;
}());
GroompageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-groompage',
        template: __webpack_require__("../../../../../src/app/groompage/groompage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/groompage/groompage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__repo_databaseQuery__["a" /* DatabaseQuery */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__repo_databaseQuery__["a" /* DatabaseQuery */]) === "function" && _a || Object])
], GroompageComponent);

var _a;
//# sourceMappingURL=groompage.component.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.wrapper {    \r\n\tmargin-top: 80px;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 420px;\r\n  padding: 30px 38px 66px;\r\n  margin: 0 auto;\r\n  background-color: #eee;\r\n  border: 3px dotted rgba(0,0,0,0.1);  \r\n  }\r\n\r\n.form-signin-heading {\r\n  text-align:center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.form-control {\r\n  position: relative;\r\n  font-size: 16px;\r\n  height: auto;\r\n  padding: 10px;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  margin-bottom: 0px;\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\ninput[type=\"password\"] {\r\n  margin-bottom: 20px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.colorgraph {\r\n  height: 7px;\r\n  border-top: 0;\r\n  background: #c4e17f;\r\n  border-radius: 5px;\r\n  background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);\r\n}\r\n\r\n\r\n.sidebar1 {\r\n    background: #F17153;\r\n    /* For browsers that do not support gradients */\r\n    /* For Safari 5.1 to 6.0 */\r\n    /* For Opera 11.1 to 12.0 */\r\n    /* For Firefox 3.6 to 15 */\r\n    background: linear-gradient(#F17153, #F58D63, #f1ab53);\r\n    /* Standard syntax */\r\n    padding: 0px;\r\n    min-height: 100%;\r\n}\r\n.logo {\r\n    max-height: 130px;\r\n}\r\n.logo>img {\r\n    margin-top: 30px;\r\n    padding: 3px;\r\n    border: 3px solid white;\r\n    border-radius: 100%;\r\n}\r\n.list {\r\n    color: #fff;\r\n    list-style: none;\r\n    padding-left: 0px;\r\n}\r\n.list::first-line {\r\n    color: rgba(255, 255, 255, 0.5);\r\n}\r\n.list> li, h5 {\r\n    padding: 5px 0px 5px 40px;\r\n    cursor: pointer;\r\n}\r\n.list>li:hover {\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    border-left: 5px solid white;\r\n    color: white;\r\n    font-weight: bolder;\r\n    padding-left: 35px;\r\n}.main-content{\r\ntext-align:center;\r\n}\r\n.logo-img{\r\n    width: 105px;\r\n    height: 110px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<data-table-demo-3 [text] = category></data-table-demo-3>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repo_databaseQuery__ = __webpack_require__("../../../../../src/app/repo/databaseQuery.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_image_compress__ = __webpack_require__("../../../../ng2-image-compress/ng2-image-compress.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_image_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_image_compress__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = (function () {
    function HomepageComponent(databaseQuery) {
        this.databaseQuery = databaseQuery;
        this.category = "candidate";
        this.files = [];
        this.title = 'app';
        this.processedImages = [];
        this.showTitle = false;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.databaseQuery.isLoggedIn;
    };
    HomepageComponent.prototype.onChange = function (fileInput) {
        var _this = this;
        var fileList;
        var images = [];
        __WEBPACK_IMPORTED_MODULE_2_ng2_image_compress__["ImageCompressService"].filesToCompressedImageSource(fileInput.target.files).then(function (observableImages) {
            observableImages.subscribe(function (image) {
                images.push(image);
            }, function (error) {
            }, function () {
                _this.processedImages = images;
                _this.showTitle = true;
            });
        });
        // or you can pass File[] 
        this.files = Array.from(fileInput.target.files);
        __WEBPACK_IMPORTED_MODULE_2_ng2_image_compress__["ImageCompressService"].filesArrayToCompressedImageSource(this.files).then(function (observableImages) {
            observableImages.subscribe(function (image) {
                images.push(image);
            }, function (error) {
            }, function () {
                _this.processedImages = images;
                _this.showTitle = true;
            });
        });
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-homepage',
        template: __webpack_require__("../../../../../src/app/homepage/homepage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/homepage/homepage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__repo_databaseQuery__["a" /* DatabaseQuery */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__repo_databaseQuery__["a" /* DatabaseQuery */]) === "function" && _a || Object])
], HomepageComponent);

var _a;
//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ "../../../../../src/app/listupload/listupload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listupload/listupload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n\n\t<div class=\"panel-heading\">List of Files</div>\n\t<div >\n\t\t<div class=\"panel-body\">\n      <div class = \"row\">\n       <div class = \"col-md-4\" *ngFor=\"let file of fileUploads | async\">\n          <app-detailsupload [fileUpload]='file'></app-detailsupload>\n    \n      </div>\n    </div>\n    <button [swal]=\"['Oops!', 'This is not implemented yet :/', 'success']\">\n      Do it!\n    </button>\n\t\t\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/listupload/listupload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListuploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload_file_service_service__ = __webpack_require__("../../../../../src/app/upload-file-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListuploadComponent = (function () {
    function ListuploadComponent(uploadService) {
        this.uploadService = uploadService;
    }
    ListuploadComponent.prototype.ngOnInit = function () {
        console.log("IN ListuploadComponent");
        this.fileUploads = this.uploadService.getFileUploads({ limitToLast: 1000 });
    };
    return ListuploadComponent;
}());
ListuploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-listupload',
        template: __webpack_require__("../../../../../src/app/listupload/listupload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/listupload/listupload.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__upload_file_service_service__["a" /* UploadFileServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__upload_file_service_service__["a" /* UploadFileServiceService */]) === "function" && _a || Object])
], ListuploadComponent);

var _a;
//# sourceMappingURL=listupload.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.wrapper {    \r\n\tmargin-top: 80px;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.form-signin {\r\n  max-width: 420px;\r\n  padding: 30px 38px 66px;\r\n  margin: 0 auto;\r\n  background-color: #eee;\r\n  border: 3px dotted rgba(0,0,0,0.1);  \r\n  }\r\n\r\n.form-signin-heading {\r\n  text-align:center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.form-control {\r\n  position: relative;\r\n  font-size: 16px;\r\n  height: auto;\r\n  padding: 10px;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  margin-bottom: 0px;\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\ninput[type=\"password\"] {\r\n  margin-bottom: 20px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.colorgraph {\r\n  height: 7px;\r\n  border-top: 0;\r\n  background: #c4e17f;\r\n  border-radius: 5px;\r\n  background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);\r\n}\r\n.sidebar1 {\r\n    background: #F17153;\r\n    /* For browsers that do not support gradients */\r\n    /* For Safari 5.1 to 6.0 */\r\n    /* For Opera 11.1 to 12.0 */\r\n    /* For Firefox 3.6 to 15 */\r\n    background: linear-gradient(#F17153, #F58D63, #f1ab53);\r\n    /* Standard syntax */\r\n    padding: 0px;\r\n    min-height: 100%;\r\n}\r\n.logo {\r\n    max-height: 130px;\r\n}\r\n.logo>img {\r\n    margin-top: 30px;\r\n    padding: 3px;\r\n    border: 3px solid white;\r\n    border-radius: 100%;\r\n}\r\n.list {\r\n    color: #fff;\r\n    list-style: none;\r\n    padding-left: 0px;\r\n}\r\n.list::first-line {\r\n    color: rgba(255, 255, 255, 0.5);\r\n}\r\n.list> li, h5 {\r\n    padding: 5px 0px 5px 40px;\r\n    cursor: pointer;\r\n}\r\n.list>li:hover {\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    border-left: 5px solid white;\r\n    color: white;\r\n    font-weight: bolder;\r\n    padding-left: 35px;\r\n}.main-content{\r\ntext-align:center;\r\n}\r\n.logo-img{\r\n    width: 105px;\r\n    height: 110px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <div class=\"wrapper\">\n      <form action=\"\" method=\"post\" name=\"Login_Form\" class=\"form-signin\">       \n          <h3 class=\"form-signin-heading\">Shri Luhar Sutar Samaj Mandal - Mumbai! Please Sign In</h3>\n            <hr class=\"colorgraph\"><br>\n            \n            <input type=\"text\" class=\"form-control\" name=\"Username\" placeholder=\"Username\" required  autofocus=\"\" [(ngModel)] = \"username\" />\n            <input type=\"password\" class=\"form-control\" name=\"Password\" placeholder=\"Password\" required  [(ngModel)] = \"password\"/>     \t\t  \n           \n            <button class=\"btn btn-lg btn-primary btn-block\"  name=\"Submit\" value=\"Login\" type=\"Submit\" (click) = \"submitButton()\">Login</button>  \t\t\t\n      </form>\t\t\t\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdel_Globals__ = __webpack_require__("../../../../../src/app/mdel/Globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__repo_databaseQuery__ = __webpack_require__("../../../../../src/app/repo/databaseQuery.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, databaseQuery) {
        this.router = router;
        this.databaseQuery = databaseQuery;
        this.username = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submitButton = function () {
        var _this = this;
        if (this.username != '' || this.password != '' || this.password) {
            this.databaseQuery.getValidate(this.username, this.password).then(function (res) {
                if (res.length != 0) {
                    _this.router.navigateByUrl('/candidate');
                    __WEBPACK_IMPORTED_MODULE_2__mdel_Globals__["a" /* Globals */].loggedIn = true;
                }
                else
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Logged...', 'Wrong UserID and password!', 'error');
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Logged...', 'Please input values!', 'error');
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__repo_databaseQuery__["a" /* DatabaseQuery */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__repo_databaseQuery__["a" /* DatabaseQuery */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/mdel/FileUpload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUpload; });
var FileUpload = (function () {
    function FileUpload(file) {
        this.file = file;
    }
    return FileUpload;
}());

//# sourceMappingURL=FileUpload.js.map

/***/ }),

/***/ "../../../../../src/app/mdel/Globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = (function () {
    function Globals() {
    }
    return Globals;
}());
Globals.choiceupload = null;
Globals.loggedIn = false;
Globals = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Globals);

//# sourceMappingURL=Globals.js.map

/***/ }),

/***/ "../../../../../src/app/mdel/firebaseCollectionName.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseCollectionName; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FirebaseCollectionName = (function () {
    function FirebaseCollectionName() {
    }
    return FirebaseCollectionName;
}());
FirebaseCollectionName.CONTACT = 'contact';
FirebaseCollectionName.CANDIDATE = 'candidate';
FirebaseCollectionName.USER = 'user';
FirebaseCollectionName.CANDIDATEIMG = 'candidateimage';
FirebaseCollectionName.CANDIDATEIMAGEFOLDER = 'picupload';
FirebaseCollectionName = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], FirebaseCollectionName);

//# sourceMappingURL=firebaseCollectionName.js.map

/***/ }),

/***/ "../../../../../src/app/repo/databaseQuery.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseQuery; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mdel_firebaseCollectionName__ = __webpack_require__("../../../../../src/app/mdel/firebaseCollectionName.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







;
;

var DatabaseQuery = (function () {
    function DatabaseQuery(ngzone, afs, afd) {
        this.ngzone = ngzone;
        this.afs = afs;
        this.afd = afd;
        this.loggedIn = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        //USER REF 
        this.candidateCollectionRef = this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__mdel_firebaseCollectionName__["a" /* FirebaseCollectionName */].CANDIDATE);
    }
    Object.defineProperty(DatabaseQuery.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable(); // {2}
        },
        enumerable: true,
        configurable: true
    });
    DatabaseQuery.prototype.logout = function () {
        this.loggedIn.next(false);
    };
    DatabaseQuery.prototype.getProfile = function (test) {
        var _this = this;
        console.log("calles present");
        return new Promise(function (resolve, reject) {
            _this.candidateCollectionRef = _this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__mdel_firebaseCollectionName__["a" /* FirebaseCollectionName */].CANDIDATE, function (ref) {
                return ref.where('gender', '==', test);
            });
            _this.regist = _this.candidateCollectionRef.snapshotChanges().map(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return __assign({ id: id }, data);
                });
            });
            _this.regist.subscribe(function (val) {
                console.log("val ", val);
                resolve(val);
            });
        });
    };
    DatabaseQuery.prototype.getProfileByEmailID = function (email) {
        var _this = this;
        console.log("calles present");
        return new Promise(function (resolve, reject) {
            _this.memberCollectionRef = _this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__mdel_firebaseCollectionName__["a" /* FirebaseCollectionName */].USER, function (ref) {
                return ref.where('emailid', '==', email);
            });
            _this.userGist = _this.memberCollectionRef.snapshotChanges().map(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return __assign({ id: id }, data);
                });
            });
            _this.userGist.subscribe(function (val) {
                console.log("val ", val);
                resolve(val);
            });
        });
    };
    DatabaseQuery.prototype.getAllCandidateList = function () {
        var _this = this;
        console.log("calles present");
        return new Promise(function (resolve, reject) {
            _this.candidateCollectionRef = _this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__mdel_firebaseCollectionName__["a" /* FirebaseCollectionName */].CANDIDATE);
            _this.regist = _this.candidateCollectionRef.snapshotChanges().map(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return __assign({ id: id }, data);
                });
            });
            _this.regist.subscribe(function (val) {
                console.log("val ", val);
                resolve(val);
            });
        });
    };
    DatabaseQuery.prototype.getAllMemberList = function () {
        var _this = this;
        console.log("Member List called");
        return new Promise(function (resolve, reject) {
            _this.memberCollectionRef = _this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__mdel_firebaseCollectionName__["a" /* FirebaseCollectionName */].USER);
            _this.userGist = _this.memberCollectionRef.snapshotChanges().map(function (actions) {
                return actions.map(function (a) {
                    console.log(" a.payload.doc.data()", a.payload.doc.data());
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return __assign({ id: id }, data);
                });
            });
            _this.userGist.subscribe(function (val) {
                console.log("val ", val);
                resolve(val);
            });
        });
    };
    DatabaseQuery.prototype.setValidCandidate = function (uid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var userRef = _this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__mdel_firebaseCollectionName__["a" /* FirebaseCollectionName */].CANDIDATE).doc(uid);
            userRef.update({ statusAP: 'Approved' }).then(function () {
                resolve(true);
            });
        });
    };
    DatabaseQuery.prototype.setValidUser = function (uid, approvedDate) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var userRef = _this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__mdel_firebaseCollectionName__["a" /* FirebaseCollectionName */].USER).doc(uid);
            userRef.update({ statusAP: 'Approved', approveddate: approvedDate }).then(function () {
                resolve(true);
            });
        });
    };
    DatabaseQuery.prototype.deleteCandidate = function (collectionName, uid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var userRef = _this.afs.collection(collectionName).doc(uid);
            userRef.delete().then(function () {
                resolve(true);
            });
        });
    };
    DatabaseQuery.prototype.getValidate = function (username, password) {
        var _this = this;
        console.log("calles present");
        return new Promise(function (resolve, reject) {
            _this.subs = _this.afs.collection('adminuser', function (ref) {
                return ref.where('username', '==', username).where('password', '==', password);
            }).snapshotChanges().take(1);
            _this.subs.subscribe(function (val) {
                console.log("val.length ", val.length);
                if (val.length != 0) {
                    console.log("Logged In  ", _this.loggedIn.next(true));
                    _this.loggedIn.next(true);
                }
                console.log("logged in ", val);
                resolve(val);
            });
        });
    };
    DatabaseQuery.prototype.saveCompressedCandidateImage = function (uid, registerDate, fileUpload, itemID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var storageRef = __WEBPACK_IMPORTED_MODULE_7_firebase__["storage"]().ref();
            var uploadTask = storageRef.child(__WEBPACK_IMPORTED_MODULE_5__mdel_firebaseCollectionName__["a" /* FirebaseCollectionName */].CANDIDATEIMAGEFOLDER + "/" + uid + "/" + registerDate).putString(fileUpload.compressedImage.imageDataUrl, 'data_url');
            uploadTask.on(__WEBPACK_IMPORTED_MODULE_7_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                // in progress
                var snap = snapshot;
            }, function (error) {
                // fail
                console.log(error);
            }, function () {
                // success
                fileUpload.url = uploadTask.snapshot.downloadURL;
                fileUpload.name = fileUpload.fileName;
                _this.saveCompressedImagURL(uploadTask.snapshot.downloadURL, itemID).then(function (res) {
                    resolve(true);
                });
            });
        });
    };
    DatabaseQuery.prototype.saveCompressedImagURL = function (url, itemID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var userRef = _this.afs.collection(__WEBPACK_IMPORTED_MODULE_5__mdel_firebaseCollectionName__["a" /* FirebaseCollectionName */].CANDIDATE).doc(itemID);
            userRef.update({ images1: url }).then(function () {
                resolve(true);
            });
        });
    };
    return DatabaseQuery;
}());
DatabaseQuery = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
], DatabaseQuery);

var _a, _b, _c;
//# sourceMappingURL=databaseQuery.js.map

/***/ }),

/***/ "../../../../../src/app/topimage/topimage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topimage/topimage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-formupload [choice] = topimage></app-formupload>\n<br/>\n<br/>\n<app-listupload></app-listupload>"

/***/ }),

/***/ "../../../../../src/app/topimage/topimage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopimageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopimageComponent = (function () {
    function TopimageComponent() {
        this.topimage = "uploads";
    }
    TopimageComponent.prototype.ngOnInit = function () {
    };
    return TopimageComponent;
}());
TopimageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-topimage',
        template: __webpack_require__("../../../../../src/app/topimage/topimage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/topimage/topimage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TopimageComponent);

//# sourceMappingURL=topimage.component.js.map

/***/ }),

/***/ "../../../../../src/app/upload-file-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdel_Globals__ = __webpack_require__("../../../../../src/app/mdel/Globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__ = __webpack_require__("../../../../ng2-image-compress/ng2-image-compress.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadFileServiceService = (function () {
    function UploadFileServiceService(db, imgCompressService) {
        this.db = db;
        this.imgCompressService = imgCompressService;
        console.log(" Globals.choiceupload = value; ", __WEBPACK_IMPORTED_MODULE_2__mdel_Globals__["a" /* Globals */].choiceupload);
        this.basePath = __WEBPACK_IMPORTED_MODULE_2__mdel_Globals__["a" /* Globals */].choiceupload;
    }
    UploadFileServiceService.prototype.pushFileToStorage = function (fileUpload, progress, base) {
        var _this = this;
        console.log("fileUploadfileUpload ", fileUpload);
        this.basePath = base;
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + fileUpload.fileName).putString(fileUpload.compressedImage.imageDataUrl, 'data_url');
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_3_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // in progress
            var snap = snapshot;
            progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        }, function (error) {
            // fail
            console.log(error);
        }, function () {
            // success
            fileUpload.url = uploadTask.snapshot.downloadURL;
            fileUpload.name = fileUpload.fileName;
            _this.saveFileData(fileUpload);
        });
    };
    UploadFileServiceService.prototype.saveFileData = function (fileUpload) {
        this.db.list(this.basePath + "/").push({ name: fileUpload.name, url: fileUpload.url });
    };
    UploadFileServiceService.prototype.getFileUploads = function (query) {
        if (query === void 0) { query = {}; }
        console.log("get uplodads", __WEBPACK_IMPORTED_MODULE_2__mdel_Globals__["a" /* Globals */].choiceupload);
        this.fileUploads = this.db.list(__WEBPACK_IMPORTED_MODULE_2__mdel_Globals__["a" /* Globals */].choiceupload, {
            query: query
        });
        return this.fileUploads;
    };
    UploadFileServiceService.prototype.deleteFileUpload = function (fileUpload) {
        var _this = this;
        this.deleteFileDatabase(fileUpload.$key)
            .then(function () {
            _this.deleteFileStorage(fileUpload.name);
        })
            .catch(function (error) { return console.log(error); });
    };
    UploadFileServiceService.prototype.deleteFileDatabase = function (key) {
        this.basePath = __WEBPACK_IMPORTED_MODULE_2__mdel_Globals__["a" /* Globals */].choiceupload;
        return this.db.list(this.basePath + "/").remove(key);
    };
    UploadFileServiceService.prototype.deleteFileStorage = function (name) {
        this.basePath = __WEBPACK_IMPORTED_MODULE_2__mdel_Globals__["a" /* Globals */].choiceupload;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref().child(this.basePath + "/" + name).delete();
        // const storageRef = firebase.storage().ref();
        // storageRef.child(`${this.basePath}/${name}`).delete();
        //  storageRef.child('gallery/${name}').delete();
    };
    return UploadFileServiceService;
}());
UploadFileServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__["ImageCompressService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__["ImageCompressService"]) === "function" && _b || Object])
], UploadFileServiceService);

var _a, _b;
//# sourceMappingURL=upload-file-service.service.js.map

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
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map