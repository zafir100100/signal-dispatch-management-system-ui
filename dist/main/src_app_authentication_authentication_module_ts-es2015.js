(self["webpackChunksmart"] = self["webpackChunksmart"] || []).push([["src_app_authentication_authentication_module_ts"],{

/***/ 33365:
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationRoutingModule": function() { return /* binding */ AuthenticationRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin/signin.component */ 19320);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup/signup.component */ 7794);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 3897);
/* harmony import */ var _locked_locked_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locked/locked.component */ 30011);
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page404/page404.component */ 1991);
/* harmony import */ var _page500_page500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page500/page500.component */ 11194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);









const routes = [
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
    },
    {
        path: 'signin',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__.SigninComponent
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent
    },
    {
        path: 'forgot-password',
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordComponent
    },
    {
        path: 'locked',
        component: _locked_locked_component__WEBPACK_IMPORTED_MODULE_3__.LockedComponent
    },
    {
        path: 'page404',
        component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_4__.Page404Component
    },
    {
        path: 'page500',
        component: _page500_page500_component__WEBPACK_IMPORTED_MODULE_5__.Page500Component
    }
];
class AuthenticationRoutingModule {
}
AuthenticationRoutingModule.??fac = function AuthenticationRoutingModule_Factory(t) { return new (t || AuthenticationRoutingModule)(); };
AuthenticationRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: AuthenticationRoutingModule });
AuthenticationRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](AuthenticationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 41082:
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationModule": function() { return /* binding */ AuthenticationModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication-routing.module */ 33365);
/* harmony import */ var _page500_page500_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page500/page500.component */ 11194);
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page404/page404.component */ 1991);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ 19320);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ 7794);
/* harmony import */ var _locked_locked_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locked/locked.component */ 30011);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 3897);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);















class AuthenticationModule {
}
AuthenticationModule.??fac = function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); };
AuthenticationModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationRoutingModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](AuthenticationModule, { declarations: [_page500_page500_component__WEBPACK_IMPORTED_MODULE_1__.Page500Component,
        _page404_page404_component__WEBPACK_IMPORTED_MODULE_2__.Page404Component,
        _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__.SigninComponent,
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__.SignupComponent,
        _locked_locked_component__WEBPACK_IMPORTED_MODULE_5__.LockedComponent,
        _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__.ForgotPasswordComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationRoutingModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule] }); })();


/***/ }),

/***/ 3897:
/*!*****************************************************************************!*\
  !*** ./src/app/authentication/forgot-password/forgot-password.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": function() { return /* binding */ ForgotPasswordComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 51095);









function ForgotPasswordComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class ForgotPasswordComponent {
    constructor(formBuilder, route, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.submitted = false;
    }
    ngOnInit() {
        this.authForm = this.formBuilder.group({
            email: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(5)],
            ],
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    get f() {
        return this.authForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.authForm.invalid) {
            return;
        }
        else {
            this.router.navigate(['/dashboard/main']);
        }
    }
}
ForgotPasswordComponent.??fac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
ForgotPasswordComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 30, vars: 3, consts: [[1, "auth-container"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/bg-03.png)"], [1, "col-sm-6", "auth-form-section"], [1, "form-section"], [1, "auth-wrapper"], [1, "welcome-msg"], [1, "auth-signup-text", "text-muted"], [1, "validate-form", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], [1, "error-subheader2", "p-t-20", "p-b-15"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "email", "required", ""], ["matSuffix", ""], [4, "ngIf"], [1, "container-auth-form-btn", "mt-5"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn", 3, "disabled"], [1, "w-full", "p-t-25", "text-center"], ["routerLink", "/authentication/signin", 1, "txt1"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Reset Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Let Us Help You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Enter your registered email address. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, ForgotPasswordComponent_mat_error_22_Template, 2, 0, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Reset My Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " Login? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.authForm.get("email").hasError("required") || ctx.authForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.authForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 30011:
/*!***********************************************************!*\
  !*** ./src/app/authentication/locked/locked.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockedComponent": function() { return /* binding */ LockedComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/models/role */ 38252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/auth.service */ 41782);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 51095);











function LockedComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
class LockedComponent {
    constructor(formBuilder, route, router, authService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.submitted = false;
        this.hide = true;
    }
    ngOnInit() {
        this.authForm = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
        this.userImg = this.authService.currentUserValue.img;
        this.userFullName =
            this.authService.currentUserValue.firstName +
                ' ' +
                this.authService.currentUserValue.lastName;
    }
    get f() {
        return this.authForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.authForm.invalid) {
            return;
        }
        else {
            const role = this.authService.currentUserValue.role;
            if (role === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__.Role.All || role === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Admin) {
                this.router.navigate(['/admin/dashboard/main']);
            }
            else if (role === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Teacher) {
                this.router.navigate(['/teacher/dashboard']);
            }
            else if (role === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Student) {
                this.router.navigate(['/student/dashboard']);
            }
            else {
                this.router.navigate(['/authentication/signin']);
            }
        }
    }
}
LockedComponent.??fac = function LockedComponent_Factory(t) { return new (t || LockedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
LockedComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: LockedComponent, selectors: [["app-locked"]], decls: 34, vars: 7, consts: [[1, "auth-container"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/bg-01.png)"], [1, "col-sm-6", "auth-form-section"], [1, "form-section"], [1, "auth-wrapper"], [1, "validate-form", 3, "formGroup", "ngSubmit"], [1, "auth-locked"], [1, "image"], ["alt", "User", 3, "src"], [1, "auth-locked-title", "p-b-34", "p-t-27"], [1, "text-center"], [1, "txt1", "p-b-20"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], [1, "error-subheader2", "p-t-20", "p-b-15"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["matSuffix", "", 3, "click"], [4, "ngIf"], [1, "container-auth-form-btn", "mt-5"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn", 3, "disabled"], [1, "w-full", "p-t-15", "p-b-15", "text-center"], ["routerLink", "/authentication/signin", 1, "txt1"]], template: function LockedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngSubmit", function LockedComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, " Locked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, " Enter your password here. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](23, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function LockedComponent_Template_mat_icon_click_24_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](26, LockedComponent_mat_error_26_Template, 2, 0, "mat-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](29, " Reset My Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](33, " Need Help? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate"]("src", ctx.userImg, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx.userFullName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.authForm.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx.authForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2NrZWQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 11194:
/*!*************************************************************!*\
  !*** ./src/app/authentication/page500/page500.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page500Component": function() { return /* binding */ Page500Component; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);




class Page500Component {
    constructor() { }
    ngOnInit() { }
}
Page500Component.??fac = function Page500Component_Factory(t) { return new (t || Page500Component)(); };
Page500Component.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Page500Component, selectors: [["app-page500"]], decls: 19, vars: 0, consts: [[1, "auth-container"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/bg-05.png)"], [1, "col-sm-6", "auth-form-section"], [1, "form-section"], [1, "auth-wrapper"], [1, "error-header", "p-b-45"], [1, "error-subheader2", "p-b-5"], [1, "container-auth-form-btn", "mt-5"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn"], [1, "w-full", "p-t-15", "p-b-15", "text-center"], ["routerLink", "/authentication/signin", 1, "txt1"]], template: function Page500Component_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " 500 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Oops, Something went wrong. Please try after some times. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Go To Home Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " Need Help? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNTAwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 19320:
/*!***********************************************************!*\
  !*** ./src/app/authentication/signin/signin.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninComponent": function() { return /* binding */ SigninComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/models/role */ 38252);
/* harmony import */ var src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/UnsubscribeOnDestroyAdapter */ 7868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/auth.service */ 41782);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);












function SigninComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Username is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SigninComponent_mat_error_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function SigninComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r2.error);
} }
class SigninComponent extends src_app_shared_UnsubscribeOnDestroyAdapter__WEBPACK_IMPORTED_MODULE_1__.UnsubscribeOnDestroyAdapter {
    constructor(formBuilder, route, router, authService) {
        super();
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.submitted = false;
        this.loading = false;
        this.error = '';
        this.hide = true;
    }
    ngOnInit() {
        this.authForm = this.formBuilder.group({
            username: ['admin@school.org', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            password: ['admin@123', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    get f() {
        return this.authForm.controls;
    }
    adminSet() {
        this.authForm.get('username').setValue('admin@school.org');
        this.authForm.get('password').setValue('admin@123');
    }
    teacherSet() {
        this.authForm.get('username').setValue('teacher@school.org');
        this.authForm.get('password').setValue('teacher@123');
    }
    studentSet() {
        this.authForm.get('username').setValue('student@school.org');
        this.authForm.get('password').setValue('student@123');
    }
    onSubmit() {
        this.submitted = true;
        this.loading = true;
        this.error = '';
        if (this.authForm.invalid) {
            this.error = 'Username and Password not valid !';
            return;
        }
        else {
            this.subs.sink = this.authService
                .login(this.f.username.value, this.f.password.value)
                .subscribe((res) => {
                if (res) {
                    setTimeout(() => {
                        const role = this.authService.currentUserValue.role;
                        if (role === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__.Role.All || role === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Admin) {
                            this.router.navigate(['/admin/dashboard/main']);
                        }
                        else if (role === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Teacher) {
                            this.router.navigate(['/teacher/dashboard']);
                        }
                        else if (role === src_app_core_models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Student) {
                            this.router.navigate(['/student/dashboard']);
                        }
                        else {
                            this.router.navigate(['/authentication/signin']);
                        }
                        this.loading = false;
                    }, 1000);
                }
                else {
                    this.error = 'Invalid Login';
                }
            }, (error) => {
                this.error = error;
                this.submitted = false;
                this.loading = false;
            });
        }
    }
}
SigninComponent.??fac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
SigninComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????InheritDefinitionFeature"]], decls: 70, vars: 12, consts: [[1, "auth-container"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/envelop.jpg)"], [1, "col-sm-6", "auth-form-section"], [1, "form-section"], [1, "auth-wrapper"], [1, "welcome-msg"], [1, "d-flex", "justify-content-between", "lbl-alert", "mb-3"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "accent", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "warn", "type", "button", 3, "click"], [1, "login-title"], [1, "validate-form", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "username"], ["matSuffix", ""], [4, "ngIf"], [1, "col-xl-12col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "password", 3, "type"], ["href", "#", "onClick", "return false;", "matSuffix", "", 1, "show-pwd-icon", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-5"], [1, "form-check"], [1, "form-check-label"], ["type", "checkbox", "value", "", 1, "form-check-input"], [1, "form-check-sign"], [1, "check"], ["routerLink", "/authentication/forgot-password", 1, "txt1"], ["class", "alert alert-danger mt-3 mb-0", 4, "ngIf"], [1, "container-auth-form-btn"], [2, "text-align", "center"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn", 3, "disabled"], [1, "social-login-title"], [1, "list-unstyled", "social-icon", "mb-0", "mt-3"], [1, "list-inline-item"], ["href", "javascript:void(0)", 1, "rounded"], [1, "fab", "fa-google"], ["href", "javascript:void(0)", 1, "rounded", "flex-c-m"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-linkedin-in"], [1, "alert", "alert-danger", "mt-3", "mb-0"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, " Welcome to Despatch Simulation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SigninComponent_Template_button_click_11_listener() { return ctx.adminSet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SigninComponent_Template_button_click_14_listener() { return ctx.teacherSet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](15, "Instructor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SigninComponent_Template_button_click_17_listener() { return ctx.studentSet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](18, "Clerk");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](20, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_21_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](26, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](28, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](29, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](30, SigninComponent_mat_error_30_Template, 2, 0, "mat-error", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](35, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](36, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function SigninComponent_Template_a_click_37_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](40, SigninComponent_mat_error_40_Template, 2, 0, "mat-error", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](44, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](45, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](46, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](47, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](48, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](49, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](50, SigninComponent_div_50_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](51, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](52, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](53, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](54, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](55, "h6", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](56, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "ul", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](58, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](59, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](60, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](61, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](62, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](63, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](64, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](65, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](66, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](67, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](68, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](69, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.authForm.get("username").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????attribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.authForm.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("auth-spinner", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", ctx.loading)("disabled", !ctx.authForm.valid);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7794:
/*!***********************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": function() { return /* binding */ SignupComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 51095);









function SignupComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Username is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function SignupComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function SignupComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function SignupComponent_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Confirm Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class SignupComponent {
    constructor(formBuilder, route, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.hide = true;
        this.chide = true;
    }
    ngOnInit() {
        this.authForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            email: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(5)],
            ],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            cpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    get f() {
        return this.authForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.authForm.invalid) {
            return;
        }
        else {
            this.router.navigate(['/admin/dashboard/main']);
        }
    }
}
SignupComponent.??fac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
SignupComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 72, vars: 10, consts: [[1, "auth-container"], [1, "row", "auth-main"], [1, "col-sm-6", "px-0", "d-none", "d-sm-block"], [1, "left-img", 2, "background-image", "url(assets/images/pages/bg-02.png)"], [1, "col-sm-6", "auth-form-section"], [1, "form-section"], [1, "auth-wrapper"], [1, "welcome-msg"], [1, "auth-signup-text", "text-muted"], [1, "validate-form", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "username", "required", ""], ["matSuffix", ""], [4, "ngIf"], [1, "col-xl-12col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "cpassword", "required", "", 3, "type"], [1, "flex-sb-m", "w-full", "p-b-20"], ["routerLink", "/authentication/signin"], [1, "container-auth-form-btn"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "auth-form-btn", 3, "disabled"], [1, "social-login-title"], [1, "list-unstyled", "social-icon", "mb-0", "mt-3"], [1, "list-inline-item"], ["href", "javascript:void(0)", 1, "rounded"], [1, "fab", "fa-google"], ["href", "javascript:void(0)", 1, "rounded", "flex-c-m"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-linkedin-in"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Enter details to create your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_11_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, SignupComponent_mat_error_20_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, SignupComponent_mat_error_29_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SignupComponent_Template_mat_icon_click_36_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, SignupComponent_mat_error_38_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SignupComponent_Template_mat_icon_click_45_listener() { return ctx.chide = !ctx.chide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, SignupComponent_mat_error_47_Template, 2, 0, "mat-error", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Already Registered? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.authForm.get("username").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.authForm.get("email").hasError("required") || ctx.authForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.authForm.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("type", ctx.chide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.chide ? "visibility_off" : "visibility", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.authForm.get("cpassword").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.authForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatError], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_authentication_authentication_module_ts-es2015.js.map