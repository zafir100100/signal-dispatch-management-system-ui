(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication/page404/page404.component */ 1991);
/* harmony import */ var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/app-layout/auth-layout/auth-layout.component */ 17050);
/* harmony import */ var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/app-layout/main-layout/main-layout.component */ 9899);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guard/auth.guard */ 19390);
/* harmony import */ var _core_models_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/models/role */ 38252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);








const routes = [
    {
        path: '',
        component: _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__.MainLayoutComponent,
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
        children: [
            { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
            {
                path: 'admin',
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
                data: {
                    role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.Admin,
                },
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 77095)).then((m) => m.AdminModule),
            },
            {
                path: 'teacher',
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
                data: {
                    role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.Teacher,
                },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js-node_modules_ngx-echarts_-318b4c"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js-node_modules_angular_ma-c4b58f"), __webpack_require__.e("default-src_app_teacher_dashboard_dashboard_component_ts"), __webpack_require__.e("src_app_teacher_teacher_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./teacher/teacher.module */ 33042)).then((m) => m.TeacherModule),
            },
            {
                path: 'student',
                canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
                data: {
                    role: _core_models_role__WEBPACK_IMPORTED_MODULE_4__.Role.Student,
                },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_menu_js-node_modules_ngx-echarts_-318b4c"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_dialog_js-node_modules_angular_ma-c4b58f"), __webpack_require__.e("common"), __webpack_require__.e("src_app_student_student_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./student/student.module */ 47859)).then((m) => m.StudentModule),
            },
            // Extra components
            {
                path: 'extra-pages',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_checkbox_js"), __webpack_require__.e("src_app_extra-pages_extra-pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./extra-pages/extra-pages.module */ 95859)).then((m) => m.ExtraPagesModule),
            },
            {
                path: 'multilevel',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_multilevel_multilevel_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./multilevel/multilevel.module */ 96895)).then((m) => m.MultilevelModule),
            },
        ],
    },
    {
        path: 'authentication',
        component: _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__.AuthLayoutComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_authentication_authentication_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./authentication/authentication.module */ 41082)).then((m) => m.AuthenticationModule),
    },
    { path: '**', component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__.Page404Component },
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 95593);
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ 66105);






class AppComponent {
    constructor(_router, location, spinner) {
        this._router = _router;
        this.spinner = spinner;
        this._router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
                this.spinner.show();
                this.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf('/') + 1);
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
                this.spinner.hide();
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.PlatformLocation), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerService)); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "app-page-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "router-outlet");
    } }, directives: [_layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_0__.PageLoaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": function() { return /* binding */ createTranslateLoader; },
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.module */ 40294);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/header/header.component */ 17876);
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ 66105);
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ 20129);
/* harmony import */ var _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/right-sidebar/right-sidebar.component */ 72325);
/* harmony import */ var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/app-layout/auth-layout/auth-layout.component */ 17050);
/* harmony import */ var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/app-layout/main-layout/main-layout.component */ 9899);
/* harmony import */ var _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/interceptor/fake-backend */ 43867);
/* harmony import */ var _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/interceptor/error.interceptor */ 56300);
/* harmony import */ var _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/interceptor/jwt.interceptor */ 72624);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32472);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-click-outside */ 74191);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);























const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false,
};
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["????defineInjector"]({ providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_16__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_16__.HashLocationStrategy },
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HTTP_INTERCEPTORS, useClass: _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__.JwtInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HTTP_INTERCEPTORS, useClass: _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_11__.ErrorInterceptor, multi: true },
        _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_10__.fakeBackendProvider,
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__.PerfectScrollbarModule,
            ng_click_outside__WEBPACK_IMPORTED_MODULE_13__.ClickOutsideModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient],
                },
            }),
            // core & shared
            _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_5__.PageLoaderComponent,
        _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.SidebarComponent,
        _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_7__.RightSidebarComponent,
        _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__.AuthLayoutComponent,
        _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_9__.MainLayoutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__.PerfectScrollbarModule,
        ng_click_outside__WEBPACK_IMPORTED_MODULE_13__.ClickOutsideModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule, 
        // core & shared
        _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 1991:
/*!*************************************************************!*\
  !*** ./src/app/authentication/page404/page404.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page404Component": function() { return /* binding */ Page404Component; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);




class Page404Component {
    constructor() { }
    ngOnInit() { }
}
Page404Component.??fac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 21, vars: 0, consts: [[1, "auth-container"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/bg-04.png)"], [1, "col-sm-6", "auth-form-section"], [1, "form-section"], [1, "auth-wrapper"], [1, "error-header", "p-b-45"], [1, "error-subheader", "p-b-5"], [1, "error-subheader2", "p-b-5"], [1, "container-auth-form-btn", "mt-5"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn"], [1, "w-full", "p-t-15", "p-b-15", "text-center"], ["routerLink", "/authentication/signin", 1, "txt1"]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " 404 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Looks Like You're Lost ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " The Page You Are Looking For Not Available! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Go To Home Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Need Help? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNDA0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8696:
/*!******************************************!*\
  !*** ./src/app/config/config.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": function() { return /* binding */ ConfigService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class ConfigService {
    constructor() {
        this.setConfigData();
    }
    setConfigData() {
        this.configData = {
            layout: {
                rtl: false,
                variant: 'light',
                theme_color: 'white',
                logo_bg_color: 'white',
                sidebar: {
                    collapsed: false,
                    backgroundColor: 'light', // options:  light & dark
                },
            },
        };
    }
}
ConfigService.??fac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ConfigService, factory: ConfigService.??fac, providedIn: 'root' });


/***/ }),

/***/ 40294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": function() { return /* binding */ CoreModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/rightsidebar.service */ 74930);
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guard/auth.guard */ 19390);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/auth.service */ 41782);
/* harmony import */ var _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/dynamic-script-loader.service */ 77431);
/* harmony import */ var _guard_module_import_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guard/module-import.guard */ 6785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);







class CoreModule {
    constructor(parentModule) {
        (0,_guard_module_import_guard__WEBPACK_IMPORTED_MODULE_4__.throwIfAlreadyLoaded)(parentModule, 'CoreModule');
    }
}
CoreModule.??fac = function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????inject"](CoreModule, 12)); };
CoreModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: CoreModule });
CoreModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ providers: [
        _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__.RightSidebarService,
        _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard,
        _service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService,
        _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_3__.DynamicScriptLoaderService,
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule] }); })();


/***/ }),

/***/ 19390:
/*!******************************************!*\
  !*** ./src/app/core/guard/auth.guard.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 41782);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.currentUserValue) {
            const userRole = this.authService.currentUserValue.role;
            if (route.data.role && route.data.role.indexOf(userRole) === -1) {
                this.router.navigate(['/authentication/signin']);
                return false;
            }
            return true;
        }
        this.router.navigate(['/authentication/signin']);
        return false;
    }
}
AuthGuard.??fac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuard.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: AuthGuard, factory: AuthGuard.??fac, providedIn: 'root' });


/***/ }),

/***/ 6785:
/*!***************************************************!*\
  !*** ./src/app/core/guard/module-import.guard.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwIfAlreadyLoaded": function() { return /* binding */ throwIfAlreadyLoaded; }
/* harmony export */ });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import ${moduleName} modules in the AppModule only.`);
    }
}


/***/ }),

/***/ 56300:
/*!*******************************************************!*\
  !*** ./src/app/core/interceptor/error.interceptor.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": function() { return /* binding */ ErrorInterceptor; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 98567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 75894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 41782);




class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((err) => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
        }));
    }
}
ErrorInterceptor.??fac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
ErrorInterceptor.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.??fac });


/***/ }),

/***/ 43867:
/*!**************************************************!*\
  !*** ./src/app/core/interceptor/fake-backend.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FakeBackendInterceptor": function() { return /* binding */ FakeBackendInterceptor; },
/* harmony export */   "fakeBackendProvider": function() { return /* binding */ fakeBackendProvider; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 41964);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 98567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 60346);
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/role */ 38252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);





const users = [
    {
        id: 1,
        img: 'assets/images/user/admin.jpg',
        username: 'admin@school.org',
        password: 'admin@123',
        firstName: 'Sarah',
        lastName: 'Smith',
        role: _models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Admin,
        token: 'admin-token',
    },
    {
        id: 2,
        img: 'assets/images/user/teacher.jpg',
        username: 'teacher@school.org',
        password: 'teacher@123',
        firstName: 'Ashton',
        lastName: 'Cox',
        role: _models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Teacher,
        token: 'teacher-token',
    },
    {
        id: 3,
        img: 'assets/images/user/student.jpg',
        username: 'student@school.org',
        password: 'student@123',
        firstName: 'Ashton',
        lastName: 'Cox',
        role: _models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Student,
        token: 'student-token',
    },
];
class FakeBackendInterceptor {
    intercept(request, next) {
        const { url, method, headers, body } = request;
        // wrap in delayed observable to simulate server api call
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(handleRoute));
        function handleRoute() {
            switch (true) {
                case url.endsWith('/authenticate') && method === 'POST':
                    return authenticate();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            const { username, password } = body;
            const user = users.find((x) => x.username === username && x.password === password);
            if (!user) {
                return error('Username or password is incorrect');
            }
            return ok({
                id: user.id,
                img: user.img,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                token: user.token,
            });
        }
        // helper functions
        function ok(body) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse({ status: 200, body }));
        }
        function error(message) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({ error: { message } });
        }
        function unauthorized() {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)({ status: 401, error: { message: 'Unauthorised' } });
        }
        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
    }
}
FakeBackendInterceptor.??fac = function FakeBackendInterceptor_Factory(t) { return new (t || FakeBackendInterceptor)(); };
FakeBackendInterceptor.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjectable"]({ token: FakeBackendInterceptor, factory: FakeBackendInterceptor.??fac });
let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true,
};


/***/ }),

/***/ 72624:
/*!*****************************************************!*\
  !*** ./src/app/core/interceptor/jwt.interceptor.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": function() { return /* binding */ JwtInterceptor; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 41782);


class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`,
                },
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.??fac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
JwtInterceptor.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.??fac });


/***/ }),

/***/ 38252:
/*!*************************************!*\
  !*** ./src/app/core/models/role.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": function() { return /* binding */ Role; }
/* harmony export */ });
var Role;
(function (Role) {
    Role["All"] = "All";
    Role["Admin"] = "Admin";
    Role["Teacher"] = "Teacher";
    Role["Student"] = "Student";
})(Role || (Role = {}));


/***/ }),

/***/ 41782:
/*!**********************************************!*\
  !*** ./src/app/core/service/auth.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 45094);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 41964);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5207);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);





class AuthService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        return this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/authenticate`, {
            username,
            password,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({ success: false });
    }
}
AuthService.??fac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
AuthService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({ token: AuthService, factory: AuthService.??fac, providedIn: 'root' });


/***/ }),

/***/ 77431:
/*!***************************************************************!*\
  !*** ./src/app/core/service/dynamic-script-loader.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptStore": function() { return /* binding */ ScriptStore; },
/* harmony export */   "DynamicScriptLoaderService": function() { return /* binding */ DynamicScriptLoaderService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

const ScriptStore = [];
class DynamicScriptLoaderService {
    constructor() {
        this.scripts = {};
        ScriptStore.forEach((script) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src,
            };
        });
    }
    load(...scripts) {
        const promises = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }
    loadScript(name) {
        return new Promise((resolve, reject) => {
            if (!this.scripts[name].loaded) {
                // load script
                let script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this.scripts[name].src;
                if (script.readyState) {
                    // IE
                    script.onreadystatechange = () => {
                        if (script.readyState === 'loaded' ||
                            script.readyState === 'complete') {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else {
                    // Others
                    script.onload = () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script.onerror = (error) => resolve({ script: name, loaded: false, status: 'Loaded' });
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
        });
    }
}
DynamicScriptLoaderService.??fac = function DynamicScriptLoaderService_Factory(t) { return new (t || DynamicScriptLoaderService)(); };
DynamicScriptLoaderService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: DynamicScriptLoaderService, factory: DynamicScriptLoaderService.??fac });


/***/ }),

/***/ 9964:
/*!**************************************************!*\
  !*** ./src/app/core/service/language.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": function() { return /* binding */ LanguageService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 29790);


class LanguageService {
    constructor(translate) {
        this.translate = translate;
        this.languages = ['en', 'es', 'de'];
        let browserLang;
        translate.addLangs(this.languages);
        if (localStorage.getItem('lang')) {
            browserLang = localStorage.getItem('lang');
        }
        else {
            browserLang = translate.getBrowserLang();
        }
        translate.use(browserLang.match(/en|es|de/) ? browserLang : 'en');
    }
    setLanguage(lang) {
        this.translate.use(lang);
        localStorage.setItem('lang', lang);
    }
}
LanguageService.??fac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
LanguageService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: LanguageService, factory: LanguageService.??fac, providedIn: 'root' });


/***/ }),

/***/ 74930:
/*!******************************************************!*\
  !*** ./src/app/core/service/rightsidebar.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightSidebarService": function() { return /* binding */ RightSidebarService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 45094);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class RightSidebarService {
    constructor() {
        this.sidebarSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.sidebarState = this.sidebarSubject.asObservable();
        this.setRightSidebar = (value) => {
            this.sidebarSubject.next(value);
        };
    }
}
RightSidebarService.??fac = function RightSidebarService_Factory(t) { return new (t || RightSidebarService)(); };
RightSidebarService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: RightSidebarService, factory: RightSidebarService.??fac });


/***/ }),

/***/ 17050:
/*!************************************************************************!*\
  !*** ./src/app/layout/app-layout/auth-layout/auth-layout.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutComponent": function() { return /* binding */ AuthLayoutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);


class AuthLayoutComponent {
    constructor() { }
    ngOnInit() { }
}
AuthLayoutComponent.??fac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 1, vars: 0, template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 9899:
/*!************************************************************************!*\
  !*** ./src/app/layout/app-layout/main-layout/main-layout.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainLayoutComponent": function() { return /* binding */ MainLayoutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../header/header.component */ 17876);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ 20129);
/* harmony import */ var _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../right-sidebar/right-sidebar.component */ 72325);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);





class MainLayoutComponent {
    constructor() { }
    ngOnInit() { }
}
MainLayoutComponent.??fac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 4, vars: 0, template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "app-right-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.RightSidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 17876:
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": function() { return /* binding */ HeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/models/role */ 38252);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/rightsidebar.service */ 74930);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config.service */ 8696);
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/auth.service */ 41782);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service/language.service */ 9964);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);













const document = window.document;
class HeaderComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_1__.UnsubscribeOnDestroyAdapter {
    constructor(document, renderer, elementRef, rightSidebarService, configService, authService, router, languageService) {
        super();
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.rightSidebarService = rightSidebarService;
        this.configService = configService;
        this.authService = authService;
        this.router = router;
        this.languageService = languageService;
        this.config = {};
        this.isNavbarCollapsed = true;
        this.listLang = [
            { text: 'English', flag: 'assets/images/flags/us.jpg', lang: 'en' },
            { text: 'Spanish', flag: 'assets/images/flags/spain.jpg', lang: 'es' },
            { text: 'German', flag: 'assets/images/flags/germany.jpg', lang: 'de' },
        ];
        this.notifications = [
            {
                userImg: 'assets/images/user/user1.jpg',
                userName: 'Sarah Smith',
                time: '14 mins ago',
                message: 'Please check your mail',
            },
            {
                userImg: 'assets/images/user/user2.jpg',
                userName: 'Airi Satou',
                time: '22 mins ago',
                message: 'Work Completed !!!',
            },
            {
                userImg: 'assets/images/user/user3.jpg',
                userName: 'John Doe',
                time: '3 hours ago',
                message: 'kindly help me for code.',
            },
            {
                userImg: 'assets/images/user/user4.jpg',
                userName: 'Ashton Cox',
                time: '5 hours ago',
                message: 'Lets break for lunch...',
            },
            {
                userImg: 'assets/images/user/user5.jpg',
                userName: 'Sarah Smith',
                time: '14 mins ago',
                message: 'Please check your mail',
            },
            {
                userImg: 'assets/images/user/user6.jpg',
                userName: 'Airi Satou',
                time: '22 mins ago',
                message: 'Work Completed !!!',
            },
            {
                userImg: 'assets/images/user/user7.jpg',
                userName: 'John Doe',
                time: '3 hours ago',
                message: 'kindly help me for code.',
            },
        ];
    }
    ngOnInit() {
        this.config = this.configService.configData;
        const userRole = this.authService.currentUserValue.role;
        this.userImg = this.authService.currentUserValue.img;
        if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Admin) {
            this.homePage = 'admin/dashboard/main';
        }
        else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Teacher) {
            this.homePage = 'teacher/dashboard';
        }
        else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Student) {
            this.homePage = 'student/dashboard';
        }
        else {
            this.homePage = 'admin/dashboard/main';
        }
        this.langStoreValue = localStorage.getItem('lang');
        const val = this.listLang.filter((x) => x.lang === this.langStoreValue);
        this.countryName = val.map((element) => element.text);
        if (val.length === 0) {
            if (this.flagvalue === undefined) {
                this.defaultFlag = 'assets/images/flags/us.jpg';
            }
        }
        else {
            this.flagvalue = val.map((element) => element.flag);
        }
    }
    ngAfterViewInit() {
        // set theme on startup
        if (localStorage.getItem('theme')) {
            this.renderer.removeClass(this.document.body, this.config.layout.variant);
            this.renderer.addClass(this.document.body, localStorage.getItem('theme'));
        }
        else {
            this.renderer.addClass(this.document.body, this.config.layout.variant);
        }
        if (localStorage.getItem('menuOption')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('menuOption'));
        }
        else {
            this.renderer.addClass(this.document.body, 'menu_' + this.config.layout.sidebar.backgroundColor);
        }
        if (localStorage.getItem('choose_logoheader')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('choose_logoheader'));
        }
        else {
            this.renderer.addClass(this.document.body, 'logo-' + this.config.layout.logo_bg_color);
        }
        if (localStorage.getItem('sidebar_status')) {
            if (localStorage.getItem('sidebar_status') === 'close') {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
            }
            else {
                this.renderer.removeClass(this.document.body, 'side-closed');
                this.renderer.removeClass(this.document.body, 'submenu-closed');
            }
        }
        else {
            if (this.config.layout.sidebar.collapsed === true) {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
            }
        }
    }
    callFullscreen() {
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement &&
            !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
            else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
            else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            }
            else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            }
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
    setLanguage(text, lang, flag) {
        this.countryName = text;
        this.flagvalue = flag;
        this.langStoreValue = lang;
        this.languageService.setLanguage(lang);
    }
    mobileMenuSidebarOpen(event, className) {
        const hasClass = event.target.classList.contains(className);
        if (hasClass) {
            this.renderer.removeClass(this.document.body, className);
        }
        else {
            this.renderer.addClass(this.document.body, className);
        }
    }
    callSidemenuCollapse() {
        const hasClass = this.document.body.classList.contains('side-closed');
        if (hasClass) {
            this.renderer.removeClass(this.document.body, 'side-closed');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
        }
        else {
            this.renderer.addClass(this.document.body, 'side-closed');
            this.renderer.addClass(this.document.body, 'submenu-closed');
        }
    }
    toggleRightSidebar() {
        this.subs.sink = this.rightSidebarService.sidebarState.subscribe((isRunning) => {
            this.isOpenSidebar = isRunning;
        });
        this.rightSidebarService.setRightSidebar((this.isOpenSidebar = !this.isOpenSidebar));
    }
    logout() {
        this.subs.sink = this.authService.logout().subscribe((res) => {
            if (!res.success) {
                this.router.navigate(['/authentication/signin']);
            }
        });
    }
}
HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__.RightSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](src_app_core_service_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService)); };
HeaderComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["????InheritDefinitionFeature"]], decls: 53, vars: 3, consts: [[1, "navbar", "active"], ["navbar", ""], [1, "container-fluid"], [1, "navbar-header"], ["href", "#", "onClick", "return false;", "aria-expanded", "false", 1, "navbar-toggle", "collapsed", 3, "click"], ["href", "#", "onClick", "return false;", 1, "bars", 3, "click"], [1, "navbar-brand", 3, "routerLink"], ["src", "assets/images/logo1.png", "alt", "", 2, "width", "40px"], [1, "logo-name"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "float-start", "collapse-menu-icon"], ["mat-icon-button", "", 1, "sidemenu-collapse", 3, "click"], [1, "nav", "navbar-nav", "navbar-right"], [1, "fullscreen"], ["mat-icon-button", "", 1, "nav-notification-icons", 3, "click"], ["ngbDropdown", "", 1, "nav-item", "user_profile"], ["href", "#", "onClick", "return false;", "ngbDropdownToggle", "", "role", "button", 1, "nav-notification-icons", "pt-0"], ["width", "32", "height", "32", "alt", "User", 1, "rounded-circle", 3, "src"], ["ngbDropdownMenu", "", 1, "notification-dropdown", "pullDown"], [1, "noti-list", 2, "position", "relative", "max-width", "600px", "max-height", "300px", 3, "perfectScrollbar"], [1, "menu"], [1, "body"], [1, "user_dw_menu"], ["href", "#", "onClick", "return false;"], ["aria-hidden", "false", 1, "msr-2"], ["href", "javascript:void(0);", 3, "click"], [1, "float-end"], ["mat-icon-button", "", 1, "nav-notification-icons", "js-right-sidebar", 3, "click"], ["id", "settingBtn"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "nav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HeaderComponent_Template_a_click_4_listener() { return ctx.isNavbarCollapsed = !ctx.isNavbarCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HeaderComponent_Template_a_click_5_listener($event) { return ctx.mobileMenuSidebarOpen($event, "overlay-open"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](9, "Simulation");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](11, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HeaderComponent_Template_button_click_13_listener() { return ctx.callSidemenuCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](15, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](16, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](17, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HeaderComponent_Template_button_click_18_listener() { return ctx.callFullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](20, "fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](21, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](23, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](26, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](27, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](28, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](30, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](31, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](32, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](33, "Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](35, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](36, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](37, "feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](38, "Feedback ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](40, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](41, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](42, "help");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](43, "Help ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](45, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HeaderComponent_Template_a_click_45_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](46, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](47, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](48, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](49, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](50, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HeaderComponent_Template_button_click_50_listener() { return ctx.toggleRightSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](51, "mat-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](52, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????propertyInterpolate"]("routerLink", ctx.homePage);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngbCollapse", ctx.isNavbarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????propertyInterpolate"]("src", ctx.userImg, _angular_core__WEBPACK_IMPORTED_MODULE_6__["????sanitizeUrl"]);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbCollapse, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownMenu, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__.PerfectScrollbarDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 66105:
/*!*************************************************************!*\
  !*** ./src/app/layout/page-loader/page-loader.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLoaderComponent": function() { return /* binding */ PageLoaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ 95593);


class PageLoaderComponent {
    constructor() { }
    ngOnInit() { }
}
PageLoaderComponent.??fac = function PageLoaderComponent_Factory(t) { return new (t || PageLoaderComponent)(); };
PageLoaderComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PageLoaderComponent, selectors: [["app-page-loader"]], decls: 2, vars: 1, consts: [["bdColor", "rgb(63,69,95)", "size", "medium", "color", "#0af0d5", "type", "ball-scale-pulse", 3, "fullScreen"], [2, "color", "white"]], template: function PageLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("fullScreen", true);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxvYWRlci5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 72325:
/*!*****************************************************************!*\
  !*** ./src/app/layout/right-sidebar/right-sidebar.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightSidebarComponent": function() { return /* binding */ RightSidebarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/rightsidebar.service */ 74930);
/* harmony import */ var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/config.service */ 8696);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-click-outside */ 74191);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ 42542);









const _c0 = function (a1, a2) { return { "position": "relative", "max-height": a1, "max-width": a2 }; };
const _c1 = function (a0) { return { "actived": a0 }; };
class RightSidebarComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeOnDestroyAdapter {
    constructor(document, renderer, elementRef, rightSidebarService, configService) {
        super();
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.rightSidebarService = rightSidebarService;
        this.configService = configService;
        this.selectedBgColor = 'white';
        this.showpanel = false;
        this.isDarkSidebar = false;
        this.isDarTheme = false;
        this.isRtl = false;
        this.config = {};
    }
    ngOnInit() {
        this.config = this.configService.configData;
        this.subs.sink = this.rightSidebarService.sidebarState.subscribe((isRunning) => {
            this.isOpenSidebar = isRunning;
        });
        this.setRightSidebarWindowHeight();
    }
    ngAfterViewInit() {
        // set header color on startup
        if (localStorage.getItem('choose_skin')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('choose_skin'));
            this.selectedBgColor = localStorage.getItem('choose_skin_active');
        }
        else {
            this.renderer.addClass(this.document.body, 'theme-' + this.config.layout.theme_color);
            this.selectedBgColor = this.config.layout.theme_color;
        }
        if (localStorage.getItem('menuOption')) {
            if (localStorage.getItem('menuOption') === 'menu_dark') {
                this.isDarkSidebar = true;
            }
            else if (localStorage.getItem('menuOption') === 'menu_light') {
                this.isDarkSidebar = false;
            }
            else {
                this.isDarkSidebar =
                    this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
            }
        }
        else {
            this.isDarkSidebar =
                this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
        }
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'dark') {
                this.isDarTheme = true;
            }
            else if (localStorage.getItem('theme') === 'light') {
                this.isDarTheme = false;
            }
            else {
                this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
            }
        }
        else {
            this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
        }
        if (localStorage.getItem('isRtl')) {
            if (localStorage.getItem('isRtl') === 'true') {
                this.setRTLSettings();
            }
            else if (localStorage.getItem('isRtl') === 'false') {
                this.setLTRSettings();
            }
        }
        else {
            if (this.config.layout.rtl == true) {
                this.setRTLSettings();
            }
            else {
                this.setLTRSettings();
            }
        }
    }
    selectTheme(e) {
        this.selectedBgColor = e;
        const prevTheme = this.elementRef.nativeElement
            .querySelector('.right-sidebar .demo-choose-skin li.actived')
            .getAttribute('data-theme');
        this.renderer.removeClass(this.document.body, 'theme-' + prevTheme);
        this.renderer.addClass(this.document.body, 'theme-' + this.selectedBgColor);
        localStorage.setItem('choose_skin', 'theme-' + this.selectedBgColor);
        localStorage.setItem('choose_skin_active', this.selectedBgColor);
    }
    lightSidebarBtnClick() {
        this.renderer.removeClass(this.document.body, 'menu_dark');
        this.renderer.removeClass(this.document.body, 'logo-black');
        this.renderer.addClass(this.document.body, 'menu_light');
        this.renderer.addClass(this.document.body, 'logo-white');
        const menuOption = 'menu_light';
        localStorage.setItem('choose_logoheader', 'logo-white');
        localStorage.setItem('menuOption', menuOption);
    }
    darkSidebarBtnClick() {
        this.renderer.removeClass(this.document.body, 'menu_light');
        this.renderer.removeClass(this.document.body, 'logo-white');
        this.renderer.addClass(this.document.body, 'menu_dark');
        this.renderer.addClass(this.document.body, 'logo-black');
        const menuOption = 'menu_dark';
        localStorage.setItem('choose_logoheader', 'logo-black');
        localStorage.setItem('menuOption', menuOption);
    }
    lightThemeBtnClick() {
        this.renderer.removeClass(this.document.body, 'dark');
        this.renderer.removeClass(this.document.body, 'submenu-closed');
        this.renderer.removeClass(this.document.body, 'menu_dark');
        this.renderer.removeClass(this.document.body, 'logo-black');
        if (localStorage.getItem('choose_skin')) {
            this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
        }
        else {
            this.renderer.removeClass(this.document.body, 'theme-' + this.config.layout.theme_color);
        }
        this.renderer.addClass(this.document.body, 'light');
        this.renderer.addClass(this.document.body, 'submenu-closed');
        this.renderer.addClass(this.document.body, 'menu_light');
        this.renderer.addClass(this.document.body, 'logo-white');
        this.renderer.addClass(this.document.body, 'theme-white');
        const theme = 'light';
        const menuOption = 'menu_light';
        this.selectedBgColor = 'white';
        this.isDarkSidebar = false;
        localStorage.setItem('choose_logoheader', 'logo-white');
        localStorage.setItem('choose_skin', 'theme-white');
        localStorage.setItem('theme', theme);
        localStorage.setItem('menuOption', menuOption);
    }
    darkThemeBtnClick() {
        this.renderer.removeClass(this.document.body, 'light');
        this.renderer.removeClass(this.document.body, 'submenu-closed');
        this.renderer.removeClass(this.document.body, 'menu_light');
        this.renderer.removeClass(this.document.body, 'logo-white');
        if (localStorage.getItem('choose_skin')) {
            this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
        }
        else {
            this.renderer.removeClass(this.document.body, 'theme-' + this.config.layout.theme_color);
        }
        this.renderer.addClass(this.document.body, 'dark');
        this.renderer.addClass(this.document.body, 'submenu-closed');
        this.renderer.addClass(this.document.body, 'menu_dark');
        this.renderer.addClass(this.document.body, 'logo-black');
        this.renderer.addClass(this.document.body, 'theme-black');
        const theme = 'dark';
        const menuOption = 'menu_dark';
        this.selectedBgColor = 'black';
        this.isDarkSidebar = true;
        localStorage.setItem('choose_logoheader', 'logo-black');
        localStorage.setItem('choose_skin', 'theme-black');
        localStorage.setItem('theme', theme);
        localStorage.setItem('menuOption', menuOption);
    }
    setRightSidebarWindowHeight() {
        const height = window.innerHeight - 137;
        this.maxHeight = height + '';
        this.maxWidth = '500px';
    }
    onClickedOutside(event) {
        const button = event.target;
        if (button.id !== 'settingBtn') {
            if (this.isOpenSidebar === true) {
                this.toggleRightSidebar();
            }
        }
    }
    toggleRightSidebar() {
        this.rightSidebarService.setRightSidebar((this.isOpenSidebar = !this.isOpenSidebar));
    }
    switchDirection(event) {
        var isrtl = String(event.checked);
        if (isrtl === 'false' &&
            document.getElementsByTagName('html')[0].hasAttribute('dir')) {
            document.getElementsByTagName('html')[0].removeAttribute('dir');
            this.renderer.removeClass(this.document.body, 'rtl');
        }
        else if (isrtl === 'true' &&
            !document.getElementsByTagName('html')[0].hasAttribute('dir')) {
            document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
            this.renderer.addClass(this.document.body, 'rtl');
        }
        localStorage.setItem('isRtl', isrtl);
        this.isRtl = event.checked;
    }
    setRTLSettings() {
        document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
        this.renderer.addClass(this.document.body, 'rtl');
        this.isRtl = true;
        localStorage.setItem('isRtl', 'true');
    }
    setLTRSettings() {
        document.getElementsByTagName('html')[0].removeAttribute('dir');
        this.renderer.removeClass(this.document.body, 'rtl');
        this.isRtl = false;
        localStorage.setItem('isRtl', 'false');
    }
}
RightSidebarComponent.??fac = function RightSidebarComponent_Factory(t) { return new (t || RightSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_1__.RightSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](src_app_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService)); };
RightSidebarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: RightSidebarComponent, selectors: [["app-right-sidebar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["????InheritDefinitionFeature"]], decls: 38, vars: 28, consts: [["id", "rightsidebar", 1, "right-sidebar", 3, "ngClass", "clickOutside"], [1, "rightSidebarClose", 3, "click"], [1, "far", "fa-times-circle"], [1, "demo-skin", 3, "ngStyle", "perfectScrollbar"], [1, "rightSetting"], [1, "mt-2", 3, "value"], ["value", "light", 3, "click"], ["value", "dark", 3, "click"], [1, "demo-choose-skin", "choose-theme", "list-unstyled"], ["data-theme", "white", 3, "ngClass", "click"], [1, "white-theme", "white-theme-border"], ["data-theme", "black", 3, "ngClass", "click"], [1, "black-theme"], ["data-theme", "purple", 3, "ngClass", "click"], [1, "purple-theme"], ["data-theme", "blue", 3, "ngClass", "click"], [1, "blue-theme"], ["data-theme", "cyan", 3, "ngClass", "click"], [1, "cyan-theme"], ["data-theme", "green", 3, "ngClass", "click"], [1, "green-theme"], ["data-theme", "orange", 3, "ngClass", "click"], [1, "orange-theme"]], template: function RightSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("clickOutside", function RightSidebarComponent_Template_aside_clickOutside_0_listener($event) { return ctx.onClickedOutside($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_div_click_1_listener() { return ctx.toggleRightSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](6, "SIDEBAR MENU COLORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "mat-button-toggle-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "mat-button-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_8_listener() { return ctx.lightSidebarBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](9, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_10_listener() { return ctx.darkSidebarBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](11, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](14, "THEME COLORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "mat-button-toggle-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "mat-button-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_16_listener() { return ctx.lightThemeBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](17, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_18_listener() { return ctx.darkThemeBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](19, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](22, "SKINS");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](24, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_24_listener() { return ctx.selectTheme("white"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](26, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_26_listener() { return ctx.selectTheme("black"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](28, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_28_listener() { return ctx.selectTheme("purple"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](30, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_30_listener() { return ctx.selectTheme("blue"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](32, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_32_listener() { return ctx.selectTheme("cyan"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](34, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_34_listener() { return ctx.selectTheme("green"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](36, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function RightSidebarComponent_Template_li_click_36_listener() { return ctx.selectTheme("orange"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", ctx.isOpenSidebar ? "open" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction2"](11, _c0, ctx.maxHeight + "px", ctx.maxWidth + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("value", ctx.isDarkSidebar ? "dark" : "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("value", ctx.isDarTheme ? "dark" : "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](14, _c1, ctx.selectedBgColor === "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](16, _c1, ctx.selectedBgColor === "black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](18, _c1, ctx.selectedBgColor === "purple"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](20, _c1, ctx.selectedBgColor === "blue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](22, _c1, ctx.selectedBgColor === "cyan"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](24, _c1, ctx.selectedBgColor === "green"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](26, _c1, ctx.selectedBgColor === "orange"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, ng_click_outside__WEBPACK_IMPORTED_MODULE_3__.ClickOutsideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodC1zaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 39617:
/*!*************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar-items.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": function() { return /* binding */ ROUTES; }
/* harmony export */ });
const ROUTES = [
    {
        path: '',
        title: 'MENUITEMS.MAIN.TEXT',
        moduleName: '',
        iconType: '',
        icon: '',
        class: '',
        groupTitle: true,
        badge: '',
        badgeClass: '',
        role: ['All'],
        submenu: [],
    },
    // Admin Modules
    {
        path: '',
        title: 'MENUITEMS.HOME.TEXT',
        moduleName: 'dashboard',
        iconType: 'material-icons-two-tone',
        icon: 'home',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Admin'],
        submenu: [
            {
                path: '/admin/dashboard/main',
                title: 'MENUITEMS.HOME.LIST.DASHBOARD1',
                moduleName: 'dashboard',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                role: [''],
                submenu: [],
            },
        ],
    },
    // Teacher Modules
    {
        path: '/teacher/dashboard',
        title: 'MENUITEMS.TEACHER.LIST.DASHBOARD',
        moduleName: 'dashboard',
        iconType: 'material-icons-two-tone',
        icon: 'home',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Teacher'],
        submenu: [],
    },
    // Student Modules
    {
        path: '/student/dashboard',
        title: 'MENUITEMS.STUDENT.LIST.DASHBOARD',
        moduleName: 'dashboard',
        iconType: 'material-icons-two-tone',
        icon: 'home',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: ['Student'],
        submenu: [],
    },
];


/***/ }),

/***/ 20129:
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": function() { return /* binding */ SidebarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _sidebar_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-items */ 39617);
/* harmony import */ var src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/models/role */ 38252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/auth.service */ 41782);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 99904);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 29790);










function SidebarComponent_li_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, sidebarItem_r1.title));
} }
const _c0 = function (a0) { return [a0]; };
function SidebarComponent_li_13_a_2_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](2, _c0, sidebarItem_r1.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](sidebarItem_r1.badge);
} }
function SidebarComponent_li_13_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SidebarComponent_li_13_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r10); const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r8.callLevel1Toggle($event, sidebarItem_r1.moduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](6, SidebarComponent_li_13_a_2_span_6_Template, 2, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", sidebarItem_r1.class === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](8, _c0, sidebarItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](10, _c0, sidebarItem_r1.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](12, _c0, sidebarItem_r1.iconType));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](sidebarItem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](5, 6, sidebarItem_r1.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", sidebarItem_r1.badge != "");
} }
function SidebarComponent_li_13_ul_3_li_1_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SidebarComponent_li_13_ul_3_li_1_ul_4_li_1_Template_a_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r18); const sidebarSubsubItem_r16 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](5); return ctx_r17.callLevel3Toggle($event, sidebarSubsubItem_r16.moduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const sidebarSubsubItem_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", ctx_r15.level3Menu === sidebarSubsubItem_r16.moduleName ? "activeSubSub" : "")("routerLinkActive", sidebarSubsubItem_r16.submenu.length > 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", sidebarSubsubItem_r16.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](7, _c0, sidebarSubsubItem_r16.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](9, _c0, sidebarSubsubItem_r16.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](3, 5, sidebarSubsubItem_r16.title), " ");
} }
function SidebarComponent_li_13_ul_3_li_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SidebarComponent_li_13_ul_3_li_1_ul_4_li_1_Template, 4, 11, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const sidebarSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", sidebarSubItem_r13.submenu);
} }
function SidebarComponent_li_13_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SidebarComponent_li_13_ul_3_li_1_Template_a_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r21); const sidebarSubItem_r13 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](3); return ctx_r20.callLevel2Toggle($event, sidebarSubItem_r13.moduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](4, SidebarComponent_li_13_ul_3_li_1_ul_4_Template, 2, 1, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const sidebarSubItem_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", ctx_r12.level2Menu === sidebarSubItem_r13.moduleName ? "activeSub" : "")("routerLinkActive", sidebarSubItem_r13.submenu.length > 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", sidebarSubItem_r13.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](8, _c0, sidebarSubItem_r13.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction1"](10, _c0, sidebarSubItem_r13.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](3, 6, sidebarSubItem_r13.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", sidebarSubItem_r13.submenu.length > 0);
} }
function SidebarComponent_li_13_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SidebarComponent_li_13_ul_3_li_1_Template, 5, 12, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", sidebarItem_r1.submenu);
} }
function SidebarComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SidebarComponent_li_13_div_1_Template, 3, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, SidebarComponent_li_13_a_2_Template, 7, 14, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, SidebarComponent_li_13_ul_3_Template, 2, 1, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("active", ctx_r0.level1Menu === sidebarItem_r1.moduleName && sidebarItem_r1.submenu.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLinkActive", sidebarItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", sidebarItem_r1.groupTitle === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !sidebarItem_r1.groupTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", sidebarItem_r1.submenu.length > 0);
} }
const _c1 = function (a1, a2) { return { "position": "relative", "max-height": a1, "max-width": a2 }; };
class SidebarComponent {
    constructor(document, renderer, elementRef, authService, router) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.authService = authService;
        this.router = router;
        this.level1Menu = '';
        this.level2Menu = '';
        this.level3Menu = '';
        this.headerHeight = 60;
        this.routerObj = null;
        const body = this.elementRef.nativeElement.closest('body');
        this.routerObj = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                // logic for select active menu in dropdown
                const role = ['admin', 'teacher', 'student'];
                const currenturl = event.url.split('?')[0];
                const firstString = currenturl.split('/').slice(1)[0];
                if (role.indexOf(firstString) !== -1) {
                    this.level1Menu = currenturl.split('/')[2];
                    this.level2Menu = currenturl.split('/')[3];
                }
                else {
                    this.level1Menu = currenturl.split('/')[1];
                    this.level2Menu = currenturl.split('/')[2];
                }
                // close sidebar on mobile screen after menu select
                this.renderer.removeClass(this.document.body, 'overlay-open');
            }
        });
    }
    windowResizecall(event) {
        this.setMenuHeight();
        this.checkStatuForResize(false);
    }
    onGlobalClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.renderer.removeClass(this.document.body, 'overlay-open');
        }
    }
    callLevel1Toggle(event, element) {
        if (element === this.level1Menu) {
            this.level1Menu = '0';
        }
        else {
            this.level1Menu = element;
        }
        const hasClass = event.target.classList.contains('toggled');
        if (hasClass) {
            this.renderer.removeClass(event.target, 'toggled');
        }
        else {
            this.renderer.addClass(event.target, 'toggled');
        }
    }
    callLevel2Toggle(event, element) {
        if (element === this.level2Menu) {
            this.level2Menu = '0';
        }
        else {
            this.level2Menu = element;
        }
    }
    callLevel3Toggle(event, element) {
        if (element === this.level3Menu) {
            this.level3Menu = '0';
        }
        else {
            this.level3Menu = element;
        }
    }
    ngOnInit() {
        if (this.authService.currentUserValue) {
            const userRole = this.authService.currentUserValue.role;
            this.userFullName =
                this.authService.currentUserValue.firstName +
                    ' ' +
                    this.authService.currentUserValue.lastName;
            this.userImg = this.authService.currentUserValue.img;
            this.sidebarItems = _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.ROUTES.filter((x) => x.role.indexOf(userRole) !== -1 || x.role.indexOf('All') !== -1);
            if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Admin) {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Admin;
            }
            else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Teacher) {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Teacher;
            }
            else if (userRole === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Student) {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Student;
            }
            else {
                this.userType = src_app_core_models_role__WEBPACK_IMPORTED_MODULE_1__.Role.Admin;
            }
        }
        this.initLeftSidebar();
        this.bodyTag = this.document.body;
    }
    ngOnDestroy() {
        this.routerObj.unsubscribe();
    }
    initLeftSidebar() {
        const _this = this;
        // Set menu height
        _this.setMenuHeight();
        _this.checkStatuForResize(true);
    }
    setMenuHeight() {
        this.innerHeight = window.innerHeight;
        const height = this.innerHeight - this.headerHeight;
        this.listMaxHeight = height + '';
        this.listMaxWidth = '500px';
    }
    isOpen() {
        return this.bodyTag.classList.contains('overlay-open');
    }
    checkStatuForResize(firstTime) {
        if (window.innerWidth < 1170) {
            this.renderer.addClass(this.document.body, 'ls-closed');
        }
        else {
            this.renderer.removeClass(this.document.body, 'ls-closed');
        }
    }
    mouseHover(e) {
        const body = this.elementRef.nativeElement.closest('body');
        if (body.classList.contains('submenu-closed')) {
            this.renderer.addClass(this.document.body, 'side-closed-hover');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
        }
    }
    mouseOut(e) {
        const body = this.elementRef.nativeElement.closest('body');
        if (body.classList.contains('side-closed-hover')) {
            this.renderer.removeClass(this.document.body, 'side-closed-hover');
            this.renderer.addClass(this.document.body, 'submenu-closed');
        }
    }
    logout() {
        this.authService.logout().subscribe((res) => {
            if (!res.success) {
                this.router.navigate(['/authentication/signin']);
            }
        });
    }
}
SidebarComponent.??fac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
SidebarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], hostBindings: function SidebarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("resize", function SidebarComponent_resize_HostBindingHandler($event) { return ctx.windowResizecall($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????resolveWindow"])("mousedown", function SidebarComponent_mousedown_HostBindingHandler($event) { return ctx.onGlobalClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????resolveDocument"]);
    } }, decls: 20, vars: 8, consts: [["id", "leftsidebar", 1, "sidebar", 3, "mouseenter", "mouseleave"], [1, "menu"], [1, "list", 3, "ngStyle", "perfectScrollbar"], [1, "sidebar-user-panel"], [1, "user-panel"], [1, "image"], ["alt", "User Image", 1, "img-circle", "user-img-circle", 3, "src"], [1, "profile-usertitle"], [1, "sidebar-userpic-name"], [1, "profile-usertitle-job"], [3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [1, "menu-top", 3, "click"], [1, "material-icons-two-tone"], [1, "hide-menu"], [3, "routerLinkActive"], ["class", "header", 4, "ngIf"], ["class", "menu-top", 3, "routerLink", "ngClass", "click", 4, "ngIf"], ["class", "ml-menu", 4, "ngIf"], [1, "header"], [1, "menu-top", 3, "routerLink", "ngClass", "click"], [3, "ngClass"], [3, "ngClass", 4, "ngIf"], [1, "ml-menu"], [3, "ngClass", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "ngClass", "routerLinkActive"], [3, "routerLink", "ngClass", "click"], ["class", "ml-menu-2", 4, "ngIf"], [1, "ml-menu-2"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("mouseenter", function SidebarComponent_Template_aside_mouseenter_1_listener($event) { return ctx.mouseHover($event); })("mouseleave", function SidebarComponent_Template_aside_mouseleave_1_listener($event) { return ctx.mouseOut($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](13, SidebarComponent_li_13_Template, 4, 6, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SidebarComponent_Template_a_click_15_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](17, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](5, _c1, ctx.listMaxHeight + "px", ctx.listMaxWidth + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate"]("src", ctx.userImg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("", ctx.userFullName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("", ctx.userType, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.sidebarItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 7868:
/*!*******************************************************!*\
  !*** ./src/app/shared/UnsubscribeOnDestroyAdapter.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscribeOnDestroyAdapter": function() { return /* binding */ UnsubscribeOnDestroyAdapter; }
/* harmony export */ });
/* harmony import */ var _sub_sink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-sink */ 12822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


/**
 * A class that automatically unsubscribes all observables when the object gets destroyed
 */
class UnsubscribeOnDestroyAdapter {
    constructor() {
        /**
         * The subscription sink object that stores all subscriptions
         */
        this.subs = new _sub_sink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
    }
    /**
     * The lifecycle hook that unsubscribes all subscriptions when the component / object gets destroyed
     */
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
UnsubscribeOnDestroyAdapter.??fac = function UnsubscribeOnDestroyAdapter_Factory(t) { return new (t || UnsubscribeOnDestroyAdapter)(); };
UnsubscribeOnDestroyAdapter.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: UnsubscribeOnDestroyAdapter, factory: UnsubscribeOnDestroyAdapter.??fac });


/***/ }),

/***/ 94872:
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": function() { return /* binding */ MaterialModule; }
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ 43220);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ 69129);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 11436);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 77746);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 42542);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ 45396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);













const materialModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
    _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule,
    ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule.forRoot(),
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
];
class MaterialModule {
}
MaterialModule.??fac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineNgModule"]({ type: MaterialModule });
MaterialModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineInjector"]({ imports: [[materialModules], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["????setNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule] }); })();


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 95593);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ 94872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);







class SharedModule {
}
SharedModule.??fac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: SharedModule });
SharedModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule,
        ], _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule] }); })();


/***/ }),

/***/ 12822:
/*!************************************!*\
  !*** ./src/app/shared/sub-sink.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubSink": function() { return /* binding */ SubSink; }
/* harmony export */ });
/**
 * Subscription sink that holds Observable subscriptions
 * until you call unsubscribe on it in ngOnDestroy.
 */
class SubSink {
    /**
     * Subscription sink that holds Observable subscriptions
     * until you call unsubscribe on it in ngOnDestroy.
     *
     * @example
     * In Angular:
     * ```
     *   private subs = new SubSink();
     *   ...
     *   this.subs.sink = observable$.subscribe(
     *   this.subs.add(observable$.subscribe(...));
     *   ...
     *   ngOnDestroy() {
     *     this.subs.unsubscribe();
     *   }
     * ```
     */
    constructor() {
        this._subs = [];
    }
    /**
     * Add subscriptions to the tracked subscriptions
     * @example
     *  this.subs.add(observable$.subscribe(...));
     */
    add(...subscriptions) {
        this._subs = this._subs.concat(subscriptions);
    }
    /**
     * Assign subscription to this sink to add it to the tracked subscriptions
     * @example
     *  this.subs.sink = observable$.subscribe(...);
     */
    set sink(subscription) {
        this._subs.push(subscription);
    }
    /**
     * Unsubscribe to all subscriptions in ngOnDestroy()
     * @example
     *   ngOnDestroy() {
     *     this.subs.unsubscribe();
     *   }
     */
    unsubscribe() {
        this._subs.forEach((sub) => sub && sub.unsubscribe());
        this._subs = [];
    }
}


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:4200',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map