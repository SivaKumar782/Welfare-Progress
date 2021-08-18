(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkangular_course"] = self["webpackChunkangular_course"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home/home.component */
      45067);
      /* harmony import */


      var _privacy_and_policy_privacy_and_policy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./privacy-and-policy/privacy-and-policy.component */
      62414);
      /* harmony import */


      var _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./terms-and-conditions/terms-and-conditions.component */
      96267);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
      }, {
        path: 'privacy-policy',
        component: _privacy_and_policy_privacy_and_policy_component__WEBPACK_IMPORTED_MODULE_1__.PrivacyAndPolicyComponent
      }, {
        path: 'terms-and-conditions',
        component: _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_2__.TermsAndConditionsComponent
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./nav/nav.component */
      15375);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent() {
          _classCallCheck(this, _AppComponent);
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onActivate",
          value: function onActivate(event) {
            window.scroll(0, 0);
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        consts: [[3, "activate"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "router-outlet", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_1_listener($event) {
              return ctx.onActivate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        },

        /* harmony export */
        "createTranslateLoader": function createTranslateLoader() {
          return (
            /* binding */
            _createTranslateLoader
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/flex-layout */
      25830);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/expansion */
      1562);
      /* harmony import */


      var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nav/nav.component */
      15375);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer/footer.component */
      10970);
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      5668);
      /* harmony import */


      var _app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app/material-module */
      48696);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./terms-and-conditions/terms-and-conditions.component */
      96267);
      /* harmony import */


      var _privacy_and_policy_privacy_and_policy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./privacy-and-policy/privacy-and-policy.component */
      62414);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home/home.component */
      45067);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./auth.service */
      52891);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      32472);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        providers: [_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdownConfig],
        imports: [[_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__.CarouselModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__.FlexLayoutModule, _app_material_module__WEBPACK_IMPORTED_MODULE_3__.DemoMaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule.forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateLoader,
            useFactory: _createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient]
          }
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__.NavComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_4__.TermsAndConditionsComponent, _privacy_and_policy_privacy_and_policy_component__WEBPACK_IMPORTED_MODULE_5__.PrivacyAndPolicyComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_7__.HomeComponent],
          imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__.CarouselModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__.FlexLayoutModule, _app_material_module__WEBPACK_IMPORTED_MODULE_3__.DemoMaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule]
        });
      })();

      function _createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_24__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
      }
      /***/

    },

    /***/
    52891:
    /*!*********************************!*\
      !*** ./src/app/auth.service.ts ***!
      \*********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      var _AuthService = /*#__PURE__*/function () {
        function _AuthService(http) {
          _classCallCheck(this, _AuthService);

          this.http = http;
          this.baseUrl = "https://devapp.welfareprogress.com/api" + '/auth/v1';
          this.baseUserUrl = "https://devapp.welfareprogress.com/api" + '/userinformation/v1';
        } //apiUrl: 'https://devapp.welfareprogress.com/api'
        //  apiUrl: 'https://app.welfareprogress.com/api'


        _createClass(_AuthService, [{
          key: "login",
          value: function login(email, password) {
            return this.http.post(this.baseUrl + '/signinObnes', {
              email: email,
              password: password
            }, httpOptions).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (user) {
              console.log(JSON.stringify(user)); // store user details and jwt token in local storage to keep user logged in between page refreshes
              // localStorage.setItem('currentUser', JSON.stringify(user));
              // this.currentUserSubject.next(user);

              return user;
            }));
          }
        }, {
          key: "triggerOtp",
          value: function triggerOtp(email) {
            // console.log(comdata);
            return this.http.post(this.baseUrl + '/otpTrigger', {
              email: email
            });
          }
        }, {
          key: "checkOtp",
          value: function checkOtp(email, onetimePass) {
            // console.log(comdata);
            return this.http.post(this.baseUrl + '/crossCheckOtp', {
              email: email,
              onetimePass: onetimePass
            });
          }
        }, {
          key: "updatePassword",
          value: function updatePassword(email, data) {
            return this.http.put("".concat(this.baseUserUrl + '/updateUserPassword', "/").concat(email), data);
          }
        }]);

        return _AuthService;
      }();

      _AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || _AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
      };

      _AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _AuthService,
        factory: _AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    10970:
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _FooterComponent = /*#__PURE__*/function () {
        function _FooterComponent() {
          _classCallCheck(this, _FooterComponent);
        }

        _createClass(_FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FooterComponent;
      }();

      _FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)();
      };

      _FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FooterComponent,
        selectors: [["app-footer"]],
        decls: 28,
        vars: 0,
        consts: [[1, "relative", "pt-8", "pb-6"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["fxFlex", "83%", "fxFlex.md", "83%", "fxFlex.sm", "95%", "fxFlex.xs", "95%"], [1, "mx-auto"], [1, "flex", "flex-wrap", "text-center", "lg:text-left", "py-10"], [1, "w-full", "lg:w-6/12"], [1, "text-3xl", "font-semibold"], [1, "mt-4", "mb-2", "heading-color"], ["href", "https://globalfoodpartners.com/", "target", "_blank", 1, "text-heading-color", "hover:text-blueGray-800"], [1, "mt-4", "ml-1", "lg:mb-0", "mb-6"], ["href", "https://www.linkedin.com/company/36019661/admin/", "target", "_blank", "onclick", "window.open('https://www.linkedin.com/company/36019661/admin/', '_blank'); return false;", 1, "bg-blueGray-200", "heading-color"], ["width", "18", "src", "../../assets/img/GFP-icon-linkedin.png"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "flex", "flex-wrap", "items-top", "mb-6"], [1, "w-full", "lg:w-4/12", "px-4", "ml-auto"], [1, "list-unstyled"], ["routerLink", "", 1, "link"], ["routerLink", "/privacy-policy", 1, "link"], ["routerLink", "/terms-and-conditions", 1, "link"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Follow Us ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Copyright \xA9 2021 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Global Food Partners ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Home ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Privacy Policy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Terms and conditions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref],
        styles: [".link[_ngcontent-%COMP%]{\r\n    color: #61C9A8;\r\n}\r\n\r\n.link[_ngcontent-%COMP%]:hover{\r\n    color: rgb(51, 51, 51);\r\n    text-decoration: none;\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n    margin-top: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmt7XHJcbiAgICBjb2xvcjogIzYxQzlBODtcclxufVxyXG5cclxuLmxpbms6aG92ZXJ7XHJcbiAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5saXtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    45067:
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      93738);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/expansion */
      1562);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      function HomeComponent_mat_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var period_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", period_r1.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", period_r1.viewValue, " ");
        }
      } // import 'bootstrap';


      var _HomeComponent = /*#__PURE__*/function () {
        function _HomeComponent() {
          _classCallCheck(this, _HomeComponent);

          this.title = 'welfare-progress';
          this.panelOpenState = false;
          this.openTab = 1;
          this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: false,
            pullDrag: false,
            dots: true,
            dotsData: true,
            autoplay: false,
            autoplaySpeed: 1000,
            navSpeed: 700,
            navText: ['<i class="material-icons">chevron_left</i>', '<i class="material-icons">chevron_right</i>'],
            responsive: {
              0: {
                items: 1
              },
              400: {
                items: 1
              },
              740: {
                items: 1
              },
              940: {
                items: 1
              }
            },
            nav: true
          };
          this.periods = [{
            value: '2021',
            viewValue: '2021'
          }, {
            value: '2020',
            viewValue: '2020'
          }, {
            value: '2019',
            viewValue: '2019'
          }, {
            value: '2018',
            viewValue: '2018'
          }, {
            value: '2017',
            viewValue: '2017'
          }, {
            value: '2016',
            viewValue: '2016'
          }, {
            value: '2015',
            viewValue: '2015'
          }, {
            value: '2014',
            viewValue: '2014'
          }, {
            value: '2013/14',
            viewValue: '2013/14'
          }, {
            value: '2012/13',
            viewValue: '2012/13'
          }, {
            value: '2013/12',
            viewValue: '2011/12'
          }, {
            value: '2010/11',
            viewValue: '2010/11'
          }];
        }

        _createClass(_HomeComponent, [{
          key: "toggleTabs",
          value: function toggleTabs($tabNumber) {
            this.openTab = $tabNumber;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            $('[data-toggle="tooltip"]').tooltip(); // (<any>$('[data-toggle="tooltip"]')).tooltip();
          }
        }]);

        return _HomeComponent;
      }();

      _HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || _HomeComponent)();
      };

      _HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _HomeComponent,
        selectors: [["home"]],
        decls: 283,
        vars: 175,
        consts: [["fxLayout", "row wrap", "fxLayoutAlign", "space-around center", "fxLayoutGap", "30px", 1, "pt-100", "mt-5", "pr-30"], ["fxFlex", "38%", "fxFlex.md", "38%", "fxFlex.sm", "90%", "fxFlex.xs", "95%", 1, "px-6"], [1, "primary-text"], ["fxFlex", "30%", "fxFlex.md", "30%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], [1, "coming-soon"], [1, "heading1", "soon"], [1, "soon"], ["floatLabel", "never", "appearance", "outline", 1, "company"], ["matInput", "", "disabled", "", 3, "placeholder"], ["floatLabel", "never", "appearance", "outline", 1, "period"], ["disabled", "", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "disabled", "", 1, "reportBtn"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "mt-12"], ["fxFlex", "83%", "fxFlex.md", "83%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], [1, "heading2"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "mt-12"], ["src", "../assets/wp/Animal Equality Square Logo (3).jpg", "alt", "THL", "height", "150px", "width", "150px"], ["src", "../assets/wp/MercyforAnimals_PrimaryLockup_RGB (2).png", "alt", "THL", "height", "170px", "width", "170px", 1, "mercyImg"], ["src", "../assets/wp/imageedit_1_9484464611.png", "alt", "THL", "height", "150px", "width", "150px"], ["src", "../assets/wp/thl-mended-heart-logo@2x.jpg", "alt", "THL", "height", "150px", "width", "150px"], [1, "section1-hr"], ["mat-align-tabs", "center", 1, "pt-16", "mb-5"], [3, "label"], ["fxLayout", "row wrap", "fxLayoutAlign", "end center", "fxLayoutGap", "56px", 1, "py-6"], ["fxFlex", "42.3%", "fxFlex.md", "43.5%", "fxFlex.sm", "90%", "fxFlex.xs", "95%", 1, "px-6"], ["align", "left", 1, "carousel-hr"], [1, "text-2xl", "font-bold", "pt-4", "leading-relaxed"], [1, "mt-2", "mb-4", "primary-text", "pt-4"], [1, "mt-2", "mb-4", "primary-text"], ["fxFlex", "46.5%", "fxFlex.md", "46.5%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], [1, "py-6"], ["src", "../assets/img/20210709_brown layers on top system.jpg"], [1, "text-2xl", "pt-4", "font-bold", "mb-2", "font-bold", "leading-normal"], [1, "flex", "mt-4", "flex-wrap", "justify-center"], [1, "mb-4", "primary-text", "leading-relaxed", 3, "innerHtml"], ["src", "../assets/img/20210709_IMG_20210524_145900.jpg"], [1, "text-2xl", "font-bold", "mt-4", "mb-2", "leading-normal"], [1, "mt-4", "px-4", "text-lg", "text-blueGray-600", "leading-relaxed"], [1, "checklist", "mt-6"], [1, "check"], ["src", "../assets/img/20210709_eggs.jpg"], [1, "top-100"], [1, "main-title", "mt-10"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["fxFlex", "85%", "fxFlex.md", "85%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], [1, "mb-16"], [1, "ans", "mt-2", "mb-4", "primary-text"], [1, "ans", "mt-2", "primary-text", 3, "innerHtml"], [1, "ans"], [1, "ans-head", "mt-2", "mb-4", "primary-text"], [1, "ans-head", "mt-2", "primary-text"], [1, "ans", "mt-2", "primary-text"], ["fxLayout", "row wrap", "fxLayoutAlign", "center start", "fxLayoutGap", "80px", 1, "mt-8"], ["fxFlex", "40%", "fxFlex.md", "40%", "fxFlex.sm", "90%", "fxFlex.xs", "95%", 1, "px-6"], [1, "text-2xl", "text-center", "font-semibold"], ["href", "http://globalfoodpartners.org/", "target", "_blank", 1, "text-sm", "font-bold", "leading-relaxed", "inline-block", "mr-4", "py-2", "whitespace-nowrap", "uppercase"], ["alt", "Logo", "src", "../assets/wp/Animal Equality Square Logo (3).jpg", "width", "300", 1, "sinergiaImg"], [1, "mb-4", "primary-text", "text-left", 3, "innerHtml"], [1, "ceo", "primary-text"], ["fxFlex", "40%", "fxFlex.md", "40%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], ["alt", "Logo", "src", "../assets/wp/MercyforAnimals_PrimaryLockup_RGB (2).png", "width", "300", 1, "sinergiaImg"], [1, "primary-text", "ceo"], ["fxLayout", "row wrap", "fxLayoutAlign", "center start", "fxLayoutGap", "80px", 1, "mt-10", "mb-16"], ["alt", "Logo", "src", "../assets/wp/imageedit_1_9484464611.png", "width", "300"], [1, "mb-4", "primary-text", "text-left", "mt-4", "pr-12", 3, "innerHtml"], ["alt", "Logo", "src", "../assets/wp/thl-mended-heart-logo@2x.jpg", "width", "300"], ["fxFlex", "83%", "fxFlex.md", "83%", "fxFlex.sm", "95%", "fxFlex.xs", "95%"], [1, "mx-auto"], [1, "flex", "flex-wrap", "text-center", "lg:text-left", "py-10"], [1, "w-full", "lg:w-6/12"], [1, "text-3xl", "font-semibold"], [1, "mt-4", "mb-2", "heading-color", 3, "innerHtml"], [1, "mt-4", "ml-1", "lg:mb-0", "mb-6"], ["href", "https://www.linkedin.com/company/36019661/admin/", "target", "_blank", "onclick", "window.open('https://www.linkedin.com/company/36019661/admin/', '_blank'); return false;", 1, "bg-blueGray-200", "heading-color"], ["width", "18", "src", "../../assets/img/GFP-icon-linkedin.png"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "flex", "flex-wrap", "items-top", "mb-6"], [1, "w-full", "lg:w-4/12", "px-4", "ml-auto"], [1, "list-unstyled"], [1, "footli"], ["routerLink", "/privacy-policy", 1, "link"], ["routerLink", "/terms-and-conditions", 1, "link"], [3, "value"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-title", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-title", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeComponent_mat_option_20_Template, 2, 2, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-title", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-tab-group", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-tab", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h6", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h6", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-tab", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "hr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-tab", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](82, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "hr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h3", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](88, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](91, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "ul", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](96, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](100, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](104, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](108, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](112, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](116, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "hr", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](123, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](132, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](135, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "p", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](137, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](142, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](147, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](150, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](153, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](157, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](160, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](165, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](168, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](173, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "p", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](175, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](180, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "p", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](182, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](187, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "p", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](189, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](194, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "p", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](196, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](201, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](204, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](209, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "p", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](212, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "hr", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](216, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "h6", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "img", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "p", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](223, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "span", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Katie Arth, International Director of Corporate Outreach, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Animal Equality");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "h6", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "img", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "p", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](233, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "span", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Zo\xEB Sigle, Global Corporate Engagement Manager, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Mercy For Animals ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "h6", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "img", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "p", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](245, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "span", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Carolina Galvani, CEO, Sinergia Animal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "h6", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "img", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "p", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](254, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "span", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Aaron Ross, Vice President of Policy and Strategy, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "The Humane League.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "h4", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](267, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "h5", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](269, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "a", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "img", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "ul", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "li", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "a", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " Privacy Policy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "li", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "a", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " Terms and conditions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 59, "WelfareProgress is an initiative by Global Food Partners, endorsed by leading animal advocacy organisations. WelfareProgress is a tool for food businesses to report progress against their cage-free egg commitments. Multiple stakeholders use this platform to evaluate corporate progress on this topic."));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 61, "Coming soon"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 63, "View cage-free progress"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 65, "Enter company name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 67, "Period"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.periods);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 69, "Find report"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 71, "An initiative endorsed by"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 73, "Why report"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 75, "Reduce your reporting burden"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 77, "The focus of animal advocacy groups is quickly shifting from policy adoption to policy enforcement and accountability, with both local and global organisations now launching questionnaires, surveys, trackers, and benchmarking tools to assess progress."), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 79, "Food and hospitality companies around the world are proactively seeking to report and communicate their progress to these advocacy groups and other key stakeholders."), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 81, "WelfareProgress allows companies to publicly showcase their cage-free implementation progress on a single platform, and reduce the burden of filling out multiple questionnaires. We have got an agreement from key animal advocacy organisations to accept cage-free egg progress reporting from WelfareProgress as a preferred alternative to their individual cage-free egg progress surveys and questionnaires."), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 83, "Increase transparency"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 85, "With hundreds of food businesses around the world committing to go cage-free, it\u2019s now expected that companies report and disclose their progress on this issue. WelfareProgress helps companies demonstrate progress on their cage-free commitments through accurate, thorough and timely reporting, allowing them to provide credible information to investors, animal advocacy groups, suppliers and consumers."), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 87, "About Global Food Partners"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 89, "Who we are"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 91, "Global Food Partners is a multinational consulting firm that works with businesses to develop, implement and report progress on high animal welfare and responsible sourcing policies to improve their profitability and sustainability."), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](77, 93, "Our team has a combined 50+ years of corporate and on-farm experience developing and executing animal welfare policies and production practices, with a focus on cage-free eggs. We\u2019ve worked with food industry leaders, governments and egg industries globally, including across Latin America and Asia, to transition to and maintain high welfare cage-free supply chains and production systems. Having worked extensively with animal advocacy organisations, we know the value of transparent communication of progress to mitigate reputational risks."), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](82, 95, "Commitment checklist"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](88, 97, "Commitment checklist"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](91, 99, "Does your cage-free egg commitment meet stakeholder expectations?"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](96, 101, "Clearly states that you will source exclusively cage-free eggs throughout supply chain"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](100, 103, "Covers all eggs in your supply chain, including shell, egg products (liquid, powder, etc.), and food products manufactured by a 3rd party (e.g. pastries)"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](104, 105, "States a deadline \u2013 the date by which your entire supply chain will be cage-free"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](108, 107, "Covers your entire supply chain, including all brands and franchises"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](112, 109, "Includes a commitment to translate the policy into key local languages"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](116, 111, "Includes a commitment to annual public reporting on progress"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](123, 113, "Frequently Asked Questions"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 1. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](132, 115, "Why is GFP running welfareprogress.com?"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](135, 117, "Mitigating reputational risk is a key service we offer to our clients. Having worked extensively with animal advocacy organisations, we know the value of transparent communication of progress to mitigate reputational risks. The focus of animal advocacy groups is shifting quickly from policy adoption to policy enforcement and accountability, with global and local groups now launching questionnaires, surveys, trackers, and benchmarking tools. Filling out numerous cage-free egg progress surveys and questionnaires is overwhelming and time consuming for food businesses. It has become a never-ending task. While these surveys all seek to evaluate progress on the same initiative \u2013 cage-free eggs- they often use different metrics and cover different geographies. We\u2019ve received a lot of feedback from the food industry that there is a need for a more centralised and streamlined reporting process."));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](137, 119, "In order to support our clients and the food industry as a whole, we\u2019ve taken this feedback and developed this platform, which aims to make this process more efficient and uniform. We hope this platform offers a solution to food businesses to efficiently demonstrate their progress and mitigate reputation risk. Please reach out to us if we can help you with this reporting process."), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 2. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](142, 121, "What benefits does this platform have for food businesses?"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](147, 123, "Reduce your reporting burden"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](150, 125, "The focus of animal advocacy groups is quickly shifting from policy adoption to policy enforcement and accountability, with both local and global organisations now launching questionnaires, surveys, trackers, and benchmarking tools to assess progress. Food and hospitality companies around the world are proactively seeking to report and communicate their progress to these advocacy groups and other key stakeholders."), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](153, 127, "WelfareProgress allows companies to publicly showcase their cage-free implementation progress on a single platform, and reduce the burden of filling out multiple questionnaires. We have got an agreement among key animal advocacy organisations to accept cage-free egg progress reporting from WelfareProgress as a preferred alternative to their individual progress surveys and questionnaires."), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](157, 129, "Increase transparency"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](160, 131, "With hundreds of food businesses around the world committing to go cage-free, it\u2019s now expected that companies report and disclose their progress on this issue. WelfareProgress helps companies demonstrate progress on their cage-free commitments through accurate, thorough and timely reporting, allowing them to provide credible information to investors, animal advocacy groups, suppliers and consumers."), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 3. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](165, 133, "What animal advocacy groups endorse this initiative?"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](168, 135, "Leading animal advocacy organisations endorse and support WelfareProgress. To make the reporting process more efficient and streamlined, they\u2019ve agreed to accept cage-free egg progress reporting from WelfareProgress as a preferred alternative to their individual cage-free egg progress surveys and questionnaires. We\u2019ll continue engaging with these and other stakeholders to ensure ongoing alignment around cage-free reporting."));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 4. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](173, 137, "What if I receive a request for reporting cage-free progress through a different questionnaire or platform?"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](175, 139, "Key animal advocacy organisations have agreed to accept cage-free egg progress reporting from WelfareProgress as a preferred alternative to their individual progress surveys and questionnaires. Please reach out to us if you receive requests to report through a different system, and we will be happy to get in touch with that organisation."), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 5. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](180, 141, "How do I report my cage-free progress?"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](182, 143, "You can report your cage-free implementation progress here. Here\u2019s a webinar that walks you through the process."), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 6. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](187, 145, "What questions will I be asked?"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](189, 147, "You can view the questions here so that you can prepare your data in advance. Please note that this is just for your reference. You can report your progress here."), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 7. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](194, 149, "What if I need help?"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](196, 151, "Wed be happy to walk you through the reporting process and answer any questions you have. Please reach out to us at welfareprogress@globalfoodpartners.com for assistance."), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 8. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](201, 153, "Is there a cost to report on WelfareProgress?"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](204, 155, "No! There is no cost to report on this platform."));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 9. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](209, 157, "How can I get greater visibility for the progress we report here?"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](212, 159, "Once you publish your progress report on this platform, you can download it in pdf form. A great way to get greater visibility for your progress is to share this pdf on your company's website, and in your annual reports and commitment updates. This will allow your stakeholders to see all you're doing to advance your cage-free goals."));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](216, 161, "An initiative endorsed by"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](223, 163, "At a time when transparency is more important than ever to consumers, WelfareProgress.com provides a centralized place for people to see how their favorite companies are measuring up on their promises to get hens out of cages. Animal Equality plans to work with over a hundred companies worldwide to start publishing their progress on the platform."), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](233, 165, "Mercy For Animals supports the comprehensive, uniform cage-free egg progress reporting enabled by WelfareProgress.com. As we encourage transparency on corporate animal welfare goals through initiatives like Monitor de Iniciativas Corporativas por los Animales, this tool streamlines reporting expectations and formats to help the world transition away from the caging of laying hens."), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](245, 167, "We believe that reporting on progress is an essential step to make sure cage-free policies are followed. We have been working with companies in Latin America and launched reports to share more about companies\u2019 progress in the region. We will be doing the same in Asia. We are happy to see a new platform that will centralize questionnaires and reporting from companies, so we decided to start sharing this new questionnaire with companies. We\u2019ll create regional reports using the public data available on welfareprogress.com."), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](254, 169, "The Humane League invites corporations to utilize WelfareProgress.com to report progress on their animal welfare goals. The platform is designed in a way to boost convenience and efficiency for all stakeholders alike."), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](267, 171, "Follow Us"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](269, 173, "Copyright \xA9 2021 Global Food Partners"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTab, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanelTitle, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
        styles: [".mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\r\n    margin-left: 8px;\r\n  }\r\n  .main-title[_ngcontent-%COMP%]{\r\n    \r\n    text-align: center;\r\n    color: rgb(51, 51, 51);\r\n    font-weight: 900;\r\n    font-size: 36px;\r\n    padding: 15px 0;\r\n  }\r\n  mat-panel-title[_ngcontent-%COMP%]{\r\n    font-size: 19px;\r\n    font-weight: 500;\r\n    color: #333;\r\n  }\r\n  .carouselOne[_ngcontent-%COMP%]{\r\n    \r\n    \r\n  \r\n  \r\n  }\r\n  .ans[_ngcontent-%COMP%]{\r\n    color: #666;\r\n    text-align: justify;\r\n    padding: 0 30px;\r\n  }\r\n  \r\n  .ans-head[_ngcontent-%COMP%]{\r\n    margin: 10px 0 5px 0;\r\n  }\r\n  .mat-expansion-panel[_ngcontent-%COMP%]:not([class*='mat-elevation-z']) {\r\n    box-shadow: none;\r\n  }\r\n    .mat-expansion-panel-body{\r\n    padding: 0 24px!important;\r\n  }\r\n  .company[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  \r\n    .mat-form-field-appearance-outline .mat-select-arrow-wrapper {\r\n    transform: translateY(0) !important;\r\n  }\r\n    .mat-form-field-infix {\r\n    border-top: .3em solid transparent !important;\r\n  }\r\n    .mat-form-field-appearance-outline .mat-form-field-outline {\r\n    color: #61C9A8;\r\n  }\r\n  .soon[_ngcontent-%COMP%]{\r\n    color: grey;\r\n    cursor: not-allowed;\r\n    text-align: left;\r\n  }\r\n  .coming-soon[_ngcontent-%COMP%]{\r\n    padding-top: 12px;\r\n    color: grey;\r\n    font-size: 16px;\r\n    float: right;\r\n    font-weight: 2rem;\r\n  }\r\n  .heading1[_ngcontent-%COMP%]{\r\n    color: #333;\r\n    font-weight: 600;\r\n    font-size: 2.75rem;\r\n    text-align: left;\r\n  }\r\n  .heading2[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    font-size: 2.75rem;\r\n  }\r\n  .support-title[_ngcontent-%COMP%]{\r\n    text-indent: 50px;\r\n    padding-bottom: 15px;\r\n    text-align: justify;\r\n    font-weight: 400;\r\n    font-size: 1.5rem;\r\n  }\r\n  .ceo[_ngcontent-%COMP%]{\r\n    \r\n    text-align: left;\r\n    font-weight: 500;\r\n  }\r\n  a[_ngcontent-%COMP%]{\r\n    color: #61C9A8;\r\n  }\r\n  button[_ngcontent-%COMP%]{\r\n    border-radius: 0%;\r\n    outline: none;\r\n    width: 30%;\r\n    color: white;\r\n    font-weight: 400;\r\n    background-color: #61C9A8;\r\n    height: 45px;\r\n    margin-bottom: 18px;\r\n  }\r\n    .mat-form-field-outline-start,   .mat-form-field-outline-end {\r\n      border-radius: 0px !important;\r\n  }\r\n  hr[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    width: 90%;\r\n    height: 4px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: #61C9A8;\r\n    border: 0 none;\r\n  }\r\n  .carousel-hr[_ngcontent-%COMP%]{\r\n      width: 70px;\r\n      height: 4px;\r\n      margin-left: 0;\r\n      margin-right: 0;\r\n      background-color: #61C9A8;\r\n      border: 0 none;\r\n      text-align: left;\r\n  }\r\n  .support-hr[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 4px;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    background-color: #61C9A8;\r\n    border: 0 none;\r\n    text-align: left;\r\n  }\r\n  .section1-hr[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n  }\r\n  .logo-size[_ngcontent-%COMP%]{\r\n    font-size: 50px;\r\n  }\r\n    .mat-card{\r\n    \r\n    border:none !important;\r\n    transition: none !important;\r\n    box-shadow: none !important;\r\n  }\r\n  @media screen and (min-width:1166px) {\r\n    .card-section[_ngcontent-%COMP%]{ padding-right:60px;}\r\n  }\r\n  .period[_ngcontent-%COMP%]{\r\n    width: 55%;\r\n  }\r\n  .slide-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    text-align: center;\r\n    color: white;\r\n  }\r\n  .centered[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n  .img-center[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 86%;\r\n    height: 500px;\r\n  }\r\n  .image[_ngcontent-%COMP%]:after {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    content:'\\A';\r\n    position:absolute;\r\n    width:86%;\r\n    height:100%;\r\n    top:0; left:7%;\r\n    background:rgba(0,0,0,0.6);\r\n    opacity:0;\r\n    transition: all 0.5s;\r\n    -webkit-transition: all 0.5s;\r\n    opacity:1;\r\n  }\r\n    .owl-carousel .owl-item img{\r\n    display: block;\r\n    width: 50%;\r\n  }\r\n  .containerrr[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n    display : flex;\r\n    flex-direction : row;\r\n  \r\n    }\r\n  .carousel-main[_ngcontent-%COMP%]{\r\n    margin-top: 100px;\r\n  }\r\n  \r\n  .checklist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    background: url('check.png') no-repeat left center;\r\n    padding: 5px 10px 5px 50px;\r\n    list-style: none;\r\n    margin-top: 5px;\r\n    vertical-align: middle;\r\n  }\r\n    .owl-theme .owl-dots .owl-dot span {\r\n    width: 100px;\r\n    height: auto;\r\n    font-size: 16px;\r\n    margin: 5px 7px;\r\n    background: #e3fffa;\r\n    display: block;\r\n    transition: opacity .2s ease;\r\n    border-radius: 4px;\r\n    position: relative;\r\n  }\r\n    .owl-theme .owl-dots .owl-dot.active span, .owl-theme[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n    background: #61C9A8;\r\n  }\r\n  \r\n  .mat-card-actions[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 0;\r\n  }\r\n  .wrapper[_ngcontent-%COMP%] {\r\n    margin: 100px;\r\n  }\r\n  mat-expansion-panel-header[_ngcontent-%COMP%] {\r\n    height: 100% !important;\r\n    margin: 10px 0;\r\n  }\r\n  .link[_ngcontent-%COMP%]{\r\n    color: #61C9A8;\r\n}\r\n  .link[_ngcontent-%COMP%]:hover{\r\n    color: rgb(51, 51, 51);\r\n    text-decoration: none;\r\n}\r\n  .footli[_ngcontent-%COMP%]{\r\n    margin-top: 8px;\r\n}\r\n  .reportBtn[_ngcontent-%COMP%]{\r\n  width: 45%;\r\n}\r\n  .mercyImg[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  height: 80px;\r\n}\r\n  .sinergiaImg[_ngcontent-%COMP%]{\r\n  height: 150px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtFQUNqQjtFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7RUFFQTtJQUNFLHVEQUF1RDtJQUN2RCxrQkFBa0I7OztFQUdwQjtFQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCO0VBRUE7O0tBRUc7RUFFSDtJQUNFLG9CQUFvQjtFQUN0QjtFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7RUFFQTtJQUNFLFdBQVc7RUFDYjtFQUlBOzs7Ozs7Ozs7Ozs7O0lBYUU7RUFFRDtJQUNDLG1DQUFtQztFQUNyQztFQUlBO0lBQ0UsNkNBQTZDO0VBQy9DO0VBR0E7SUFDRSxjQUFjO0VBQ2hCO0VBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjtFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjtFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtFQUVBO0lBQ0UsY0FBYztFQUNoQjtFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtFQUVBOztNQUVJLDZCQUE2QjtFQUNqQztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztFQUNoQjtFQUVBO01BQ0ksV0FBVztNQUNYLFdBQVc7TUFDWCxjQUFjO01BQ2QsZUFBZTtNQUNmLHlCQUF5QjtNQUN6QixjQUFjO01BQ2QsZ0JBQWdCO0VBQ3BCO0VBR0E7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUdBO0lBQ0UsZUFBZTtFQUNqQjtFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0VBQzdCO0VBR0E7SUFDRSxlQUFlLGtCQUFrQixDQUFDO0VBQ3BDO0VBR0E7SUFDRSxVQUFVO0VBQ1o7RUFJQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7RUFDbEM7RUFHQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0VBQ2Y7RUFHQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsU0FBUztJQUNULFdBQVc7SUFDWCxLQUFLLEVBQUUsT0FBTztJQUNkLDBCQUEwQjtJQUMxQixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixTQUFTO0VBQ1g7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0VBQ1o7RUFHQTtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7O0lBRXBCO0VBR0Y7SUFDRSxpQkFBaUI7RUFDbkI7RUFFQTs7S0FFRztFQUlIO0lBQ0Usa0RBQW1FO0lBQ25FLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtFQUN4QjtFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUlBOztLQUVHO0VBRUg7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFHQTtJQUNFLHVCQUF1QjtJQUN2QixjQUFjO0VBQ2hCO0VBRUE7SUFDRSxjQUFjO0FBQ2xCO0VBRUE7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCO0VBRUE7SUFDSSxlQUFlO0FBQ25CO0VBRUE7RUFDRSxVQUFVO0FBQ1o7RUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7RUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIC5tYWluLXRpdGxle1xyXG4gICAgLyogbWFyZ2luLXRvcDogNjBweDsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG4gIH1cclxuICBcclxuICBtYXQtcGFuZWwtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJvdXNlbE9uZXtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltZy9zbGlkZTEuanBnJyk7ICovXHJcbiAgICAvKiBvcGFjaXR5OiAwLjU7ICovXHJcbiAgXHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5hbnN7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIC5yZXBvcnR7XHJcbiAgICBwYWRkaW5nOiA4MHB4O1xyXG4gIH0gKi9cclxuICBcclxuICAuYW5zLWhlYWR7XHJcbiAgICBtYXJnaW46IDEwcHggMCA1cHggMDtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKSB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keXtcclxuICAgIHBhZGRpbmc6IDAgMjRweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb21wYW55IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBpbnB1dFt0eXBlPXRleHRdLCBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5ib3gge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMWM4N2M5O1xyXG4gIH1cclxuICAgKi9cclxuICBcclxuICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1zZWxlY3QtYXJyb3ctd3JhcHBlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgICBib3JkZXItdG9wOiAuM2VtIHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICAgIGNvbG9yOiAjNjFDOUE4O1xyXG4gIH1cclxuICBcclxuICAuc29vbntcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb21pbmctc29vbntcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRpbmcxe1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyLjc1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRpbmcye1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMi43NXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnN1cHBvcnQtdGl0bGV7XHJcbiAgICB0ZXh0LWluZGVudDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNlb3tcclxuICAgIC8qIHBhZGRpbmctbGVmdDogMTJweDsgKi9cclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICBhe1xyXG4gICAgY29sb3I6ICM2MUM5QTg7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxQzlBODtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCxcclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZW5kIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGhyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MUM5QTg7XHJcbiAgICBib3JkZXI6IDAgbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcm91c2VsLWhye1xyXG4gICAgICB3aWR0aDogNzBweDtcclxuICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MUM5QTg7XHJcbiAgICAgIGJvcmRlcjogMCBub25lO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuc3VwcG9ydC1ocntcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MUM5QTg7XHJcbiAgICBib3JkZXI6IDAgbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWN0aW9uMS1ociB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAubG9nby1zaXple1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLm1hdC1jYXJke1xyXG4gICAgLyogbWFyZ2luOiAwIDIwcHg7ICovXHJcbiAgICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjExNjZweCkge1xyXG4gICAgLmNhcmQtc2VjdGlvbnsgcGFkZGluZy1yaWdodDo2MHB4O31cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnBlcmlvZHtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5zbGlkZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuY2VudGVyZWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmltZy1jZW50ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA4NiU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuaW1hZ2U6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGNvbnRlbnQ6J1xcQSc7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOjg2JTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgdG9wOjA7IGxlZnQ6NyU7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC42KTtcclxuICAgIG9wYWNpdHk6MDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgIG9wYWNpdHk6MTtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5vd2wtY2Fyb3VzZWwgLm93bC1pdGVtIGltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmNvbnRhaW5lcnJyIC5ib3gge1xyXG4gICAgZGlzcGxheSA6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbiA6IHJvdztcclxuICBcclxuICAgIH1cclxuICBcclxuICBcclxuICAuY2Fyb3VzZWwtbWFpbntcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiAuc3VwcG9ydC1sb2dvc3tcclxuICAgIHBhZGRpbmc6IDAgOTBweDtcclxuICB9ICovXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLmNoZWNrbGlzdCBsaSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvY2hlY2sucG5nJykgbm8tcmVwZWF0IGxlZnQgY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDUwcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90IHNwYW4ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiA1cHggN3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2UzZmZmYTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSBzcGFuLCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdDpob3ZlciBzcGFuIHtcclxuICAgIGJhY2tncm91bmQ6ICM2MUM5QTg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIC50YWItaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH0gKi9cclxuICBcclxuICAubWF0LWNhcmQtYWN0aW9ucywgLm1hdC1jYXJkLXN1YnRpdGxlLCAubWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwcGVyIHtcclxuICAgIG1hcmdpbjogMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5saW5re1xyXG4gICAgY29sb3I6ICM2MUM5QTg7XHJcbn1cclxuXHJcbi5saW5rOmhvdmVye1xyXG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmZvb3RsaXtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLnJlcG9ydEJ0bntcclxuICB3aWR0aDogNDUlO1xyXG59XHJcblxyXG4ubWVyY3lJbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5zaW5lcmdpYUltZ3tcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    48696:
    /*!************************************!*\
      !*** ./src/app/material-module.ts ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DemoMaterialModule": function DemoMaterialModule() {
          return (
            /* binding */
            _DemoMaterialModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      19238);
      /* harmony import */


      var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/clipboard */
      14785);
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      77310);
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/cdk/portal */
      87636);
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      71386);
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      31394);
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/table */
      20552);
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/tree */
      52796);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      21554);
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/badge */
      70346);
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      36410);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      42542);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      93738);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/chips */
      58341);
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/stepper */
      94553);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/datepicker */
      43220);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/divider */
      1769);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/expansion */
      1562);
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/grid-list */
      4929);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/list */
      77746);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/menu */
      33935);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/core */
      5015);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/paginator */
      99692);
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      12178);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      4885);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/radio */
      82613);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/select */
      67441);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/sidenav */
      94935);
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/slider */
      54436);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      45396);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      77001);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/sort */
      11494);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/table */
      32091);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/tabs */
      65939);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/toolbar */
      12522);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/material/tree */
      1933);
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      58203);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DemoMaterialModule = function _DemoMaterialModule() {
        _classCallCheck(this, _DemoMaterialModule);
      };

      _DemoMaterialModule.ɵfac = function DemoMaterialModule_Factory(t) {
        return new (t || _DemoMaterialModule)();
      };

      _DemoMaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _DemoMaterialModule
      });
      _DemoMaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__.ClipboardModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__.CdkStepperModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__.CdkTableModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__.CdkTreeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__.MatTreeModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_41__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_42__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_43__.ScrollingModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_DemoMaterialModule, {
          exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__.ClipboardModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__.CdkStepperModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__.CdkTableModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__.CdkTreeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__.MatTreeModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_41__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_42__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_43__.ScrollingModule]
        });
      })();
      /***/

    },

    /***/
    15375:
    /*!**************************************!*\
      !*** ./src/app/nav/nav.component.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavComponent": function NavComponent() {
          return (
            /* binding */
            _NavComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! bcryptjs */
      58092);
      /* harmony import */


      var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../auth.service */
      52891);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/language.service */
      71155);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      12664);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      88030);

      function NavComponent_img_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 21);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r0.flagvalue, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        }
      }

      function NavComponent_img_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 21);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r1.defaultFlag, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function NavComponent_a_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavComponent_a_22_Template_a_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);

            var item_r3 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r4.setLanguage(item_r3.text, item_r3.lang, item_r3.flag);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r2.langStoreValue === item_r3.lang));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", item_r3.flag, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.text);
        }
      }

      var salt = bcryptjs__WEBPACK_IMPORTED_MODULE_0__.genSaltSync(10);

      var _NavComponent = /*#__PURE__*/function () {
        function _NavComponent(dialog, authService, fb, datePipe, http, language, translate, languageService, config) {
          _classCallCheck(this, _NavComponent);

          this.dialog = dialog;
          this.authService = authService;
          this.fb = fb;
          this.datePipe = datePipe;
          this.http = http;
          this.language = language;
          this.translate = translate;
          this.languageService = languageService;
          this.passupdatedon = new Date();
          this.loginView = true;
          this.otpView = false;
          this.changePassView = false;
          this.forgotPassFlow = false;
          this.hide1 = true;
          this.hide2 = true;
          this.hide3 = true; // baseUrl = "http://localhost:3000/api/auth/v1/signinObnes"

          this.navbarOpen = false;
          this.logoSrc = "../";
          this.showErr = false;
          this.alert = false;
          this.submitted = false;
          this.error = '';
          this.listLang = [{
            text: 'English',
            flag: 'assets/images/flags/us.jpg',
            lang: 'en'
          }, {
            text: 'Español',
            flag: 'assets/images/flags/spain.jpg',
            lang: 'es'
          } //  { text: 'German', flag: 'assets/images/flags/germany.jpg', lang: 'de' }
          ];
          this.isScrolled = false;
          var browserLang;
          translate.addLangs(this.language.languages);

          if (localStorage.getItem('lang')) {
            browserLang = localStorage.getItem('lang');
          } else {
            browserLang = translate.getBrowserLang();
          }

          translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
          config.autoClose = false;
        }

        _createClass(_NavComponent, [{
          key: "setLanguage",
          value: function setLanguage(text, lang, flag) {
            this.countryName = text;
            this.flagvalue = flag;
            this.langStoreValue = lang;
            this.languageService.setLanguage(lang);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.langStoreValue = localStorage.getItem('lang');
            var val = this.listLang.filter(function (x) {
              return x.lang === _this.langStoreValue;
            });
            this.countryName = val.map(function (element) {
              return element.text;
            });

            if (val.length === 0) {
              if (this.flagvalue === undefined) {
                this.defaultFlag = 'assets/images/flags/us.jpg';
              }
            } else {
              this.flagvalue = val.map(function (element) {
                return element.flag;
              });
            }

            this.loginForm = this.fb.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5)]],
              password: ['']
            });
            this.otpForm = this.fb.group({
              otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            });
            this.firstFormGroup = this.fb.group({
              // password: ['', [Validators.required]],
              newpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              confirmpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
            }, {
              validator: this.passwordConfirming
            });
          }
        }, {
          key: "setNavbarOpen",
          value: function setNavbarOpen() {
            this.navbarOpen = !this.navbarOpen;
          }
        }, {
          key: "ScrollIntoView",
          value: function ScrollIntoView(elem) {
            console.log(elem);
            document.querySelector(elem).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, {
          key: "scrollEvent",
          value: function scrollEvent() {
            window.pageYOffset >= 80 ? this.isScrolled = true : this.isScrolled = false;
          }
        }, {
          key: "btnClick",
          value: function btnClick() {
            window.open("https://devapp.welfareprogress.com/#/authentication/signin", "_blank");
          }
        }, {
          key: "register",
          value: function register() {
            window.open("https://app.welfareprogress.com/#/authentication/signup", "_self");
          }
        }, {
          key: "signin",
          value: function signin() {
            var _this2 = this;

            this.otpForm.setValue({
              otp: ''
            }); // $( "reldiv" ).load(window.location.href + "reldiv" );

            this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(function (res) {
              if (res) {
                _this2.accessToken = res.accessToken;
                _this2.uid = res.uid;
                console.log(res);
                console.log(_this2.accessToken);
                _this2.errMsg = 'Enter OTP sent to your Email ID';
                _this2.showErr = true;

                _this2.triggerOtp();

                _this2.otpView = true;
                _this2.loginView = false;
                _this2.changePassView = false;
                setTimeout(function () {
                  _this2.showErr = false;
                  _this2.errMsg = '';
                }, 5000);
              } else {
                _this2.errMsg = 'Invalid login';
                _this2.showErr = true;
                setTimeout(function () {
                  _this2.showErr = false;
                  _this2.errMsg = '';
                }, 3000);
              }
            }, function (err) {
              _this2.errMsg = err.error.message;
              _this2.showErr = true;
              setTimeout(function () {
                _this2.showErr = false;
                _this2.errMsg = '';
              }, 3000);
            }); // console.log(this.firstFormGroup.value)
            // this.http.post(this.baseUrl, this.firstFormGroup.value).subscribe((res)=>{
            //   console.log(res)
            // })
          }
        }, {
          key: "checkTwoFa",
          value: function checkTwoFa() {
            var _this3 = this;

            this.authService.checkOtp(this.loginForm.value.email, this.otpForm.value.otp).subscribe(function (res) {
              console.log('res', res); //two types of res 'Matched' means the OTP matches, or 'Try Again'

              if (res['message'] == 'Matched') {
                if (_this3.forgotPassFlow == true) {
                  _this3.changePassView = true;
                  _this3.otpView = false;
                  _this3.loginView = false;
                } else if (_this3.forgotPassFlow == false) {
                  console.log(_this3.accessToken);
                  var redirectUrl = "https://devapp.welfareprogress.com/#/authentication/signin?uid=" + _this3.uid;
                  console.log(redirectUrl);
                  window.open(redirectUrl, '_self');
                  _this3.errMsg = 'Redirecting...';
                  _this3.showErr = true;
                  setTimeout(function () {
                    _this3.showErr = false;
                    _this3.errMsg = '';
                  }, 3000);
                }
              } else {
                _this3.errMsg = 'Try Again';
                _this3.showErr = true;
                setTimeout(function () {
                  _this3.showErr = false;
                  _this3.errMsg = '';
                }, 3000); // this.otperror = true
              }
            });
          }
        }, {
          key: "triggerOtp",
          value: function triggerOtp() {
            this.authService.triggerOtp(this.loginForm.value.email).subscribe(function (res) {
              console.log('res', res);
            });
          } //validation to compare both passwords

        }, {
          key: "passwordConfirming",
          value: function passwordConfirming(c) {
            if (c.get('newpassword').value !== c.get('confirmpassword').value) {
              return {
                invalid: true
              };
            }
          }
        }, {
          key: "f",
          get: function get() {
            return this.loginForm.controls;
          }
        }, {
          key: "forgotPass",
          value: function forgotPass() {
            var _this4 = this;

            // this.forgotPassFlow = true
            console.log("forgot password flow");

            if (this.forgotPassFlow == false) {
              this.otpView = false;
              this.changePassView = false;
              this.forgotPassFlow = true;
            } else {
              this.authService.triggerOtp(this.loginForm.value.email).subscribe(function (res) {
                console.log('res', res);
              });
              this.otpForm.reset();
              this.errMsg = 'Enter OTP sent to your Email ID';
              this.showErr = true;
              setTimeout(function () {
                _this4.showErr = false;
                _this4.errMsg = '';
              }, 3000);
              this.otpForm.reset();
              this.changePassView = false;
              this.loginView = false;
              this.otpView = true;
            }
          } //Resend the OTP

        }, {
          key: "resendOtp",
          value: function resendOtp() {
            var _this5 = this;

            this.authService.triggerOtp(this.loginForm.value.email).subscribe(function (res) {
              console.log('res', res);
            });
            this.errMsg = 'OTP has been resend!';
            this.showErr = true;
            setTimeout(function () {
              _this5.showErr = false;
              _this5.errMsg = '';
            }, 3000);
            this.otpForm.reset();
          }
        }, {
          key: "updaterecordpassword",
          value: function updaterecordpassword() {
            var _this6 = this;

            //password hash whihc gets stored in DB
            var passworddata = {
              password: bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hashSync(this.firstFormGroup.value.newpassword, 10),
              pass_changed: 1,
              pass_updatedon: this.datePipe.transform(this.passupdatedon, 'yyyy-MM-dd')
            };
            console.log(passworddata);
            console.log(this.loginForm.value.email);
            this.authService.updatePassword(this.loginForm.value.email, passworddata).subscribe(function (response) {
              console.log(response);
              _this6.errMsg = 'Password successfully changed';
              _this6.showErr = true;
              _this6.loginView = true;
              _this6.otpView = false;
              _this6.changePassView = false;
              _this6.forgotPassFlow = false;
              setTimeout(function () {
                _this6.showErr = false;
                _this6.errMsg = '';
              }, 3000);
            }, function (error) {
              console.log(error);
            }); //new password is submitted and now users has to login again

            setTimeout(function () {// this.forgotPass = false
              // this.loginWindow = true
              // this.otpWindow = false
              // this.newPassWindow = false
            }, 3000); //5s
          }
        }]);

        return _NavComponent;
      }();

      _NavComponent.ɵfac = function NavComponent_Factory(t) {
        return new (t || _NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownConfig));
      };

      _NavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _NavComponent,
        selectors: [["app-nav"]],
        hostBindings: function NavComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scroll", function NavComponent_scroll_HostBindingHandler() {
              return ctx.scrollEvent();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
          }
        },
        decls: 28,
        vars: 8,
        consts: [["role", "navigation", 1, "navbar", "navbar-inverse", "navbar-fixed-top"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["fxFlex", "85%", "fxFlex.md", "85%", "fxFlex.sm", "90%", "fxFlex.xs", "90%"], [1, "container-fluid"], [1, "navbar-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbar", "aria-expanded", "false", "aria-controls", "navbar", 1, "navbar-toggle", "collapsed"], [1, "sr-only"], [1, "icon-bar"], [1, "mt-4", "mb-4"], ["href", "http://globalfoodpartners.org/", "target", "_blank"], ["alt", "Logo", "src", "../../assets/img/Welfare Progress - Logo 500x300px-01-01.svg", "width", "500", "height", "300"], ["id", "navbar", 1, "collapse", "navbar-collapse", "mt-1"], [1, "nav", "navbar-nav", "navbar-right"], [1, "nav-item"], ["ngbDropdown", "", 1, "d-inline-block", "mt-9", 3, "autoClose"], ["ngbDropdownToggle", "", 1, "lang-dropdown", "selectedFlag"], ["height", "16", 3, "src", 4, "ngIf"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "lang-item", "dropdown-menu-right", "pullDown"], ["href", "javascript:void(0);", "class", "dropdown-item lang-item-list", "ngbDropdownItem", "", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["ngbDropdown", "", 3, "autoClose"], ["ngbDropdownToggle", "", 1, "btn-signin", "heading-color", "mt-7", "text-md", "dropdown-toggle", "text-primary-color", 3, "click"], ["height", "16", 3, "src"], ["href", "javascript:void(0);", "ngbDropdownItem", "", 1, "dropdown-item", "lang-item-list", 3, "ngClass", "click"], [1, "countryFlags"], ["height", "12", 1, "flag-img", 2, "padding", "5px", 3, "src"], [1, "align-middle", 2, "padding", "5px", "color", "#333"]],
        template: function NavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Toggle navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, NavComponent_img_19_Template, 1, 1, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, NavComponent_img_20_Template, 1, 1, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, NavComponent_a_22_Template, 5, 5, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavComponent_Template_button_click_25_listener() {
              return ctx.btnClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autoClose", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.flagvalue !== undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.flagvalue === undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.listLang);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autoClose", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 6, "Report cage-free progress"), " ");
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavbar, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownToggle, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownItem, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__.DefaultClassDirective],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
        styles: ["nav[_ngcontent-%COMP%]{\r\n  box-shadow: 0px 1px 10px #ccc;\r\n  background-color: #fff;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex: 1;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n  padding: 0 8px;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{\r\n    background-color: #61C9A8;\r\n    color: white;\r\n}\r\n\r\n.btn-success1[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-weight: bold;\r\n    background-color: #61C9A8;\r\n    border: 1px solid #61C9A8;\r\n}\r\n\r\n.btn-success1[_ngcontent-%COMP%]:hover{\r\n    background-color: #8dddc4;\r\n}\r\n\r\n.btn-success2[_ngcontent-%COMP%] {\r\n    color: #61C9A8;\r\n    font-weight: bold;\r\n    background-color: #e8fff8;\r\n}\r\n\r\n[type='text'][_ngcontent-%COMP%], [type='password'][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    border-color: #c4c4c4;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.btn-signin[_ngcontent-%COMP%], .btn-signin[_ngcontent-%COMP%]:active {\r\n    padding: 0 20px;\r\n    color: back;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none !important;\r\n  color: #61C9A8 !important;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n}\r\n\r\n.construction[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  color: #61C9A8;\r\n  font-weight: bold;\r\n}\r\n\r\n.forgot-password[_ngcontent-%COMP%]{\r\n  color: #61C9A8;\r\n}\r\n\r\n.navbar-inverse[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%] {\r\n  border-color: #61C9A8;\r\n}\r\n\r\n.navbar-inverse[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%] {\r\n  background-color: #61C9A8;\r\n}\r\n\r\n.navbar-inverse[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:focus, .navbar-inverse[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:hover {\r\n  background-color: #c9f5e7;\r\n}\r\n\r\n.login-btn[_ngcontent-%COMP%]{\r\n  color: #61C9A8;\r\n}\r\n\r\n.registerbtn[_ngcontent-%COMP%]{\r\n    \r\n    font-size: 12px;\r\n    background: #fff;\r\n    color: #6675df;\r\n    border: 2px solid #6675df;\r\n    width: 100%;\r\n    height: 50px;\r\n    border-radius: 4px;\r\n    outline: none;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.signinbtn[_ngcontent-%COMP%]{\r\n  \r\n  font-size: 12px;\r\n  background: #61C9A8;\r\n  color: #fff;\r\n  border: 2px solid #61C9A8;\r\n  width: 100%;\r\n  height: 50px;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.countryFlags[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  max-width: 35%;\r\n}\r\n\r\n.selectedFlag[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  max-width: 44%;\r\n  padding-top: 5px;\r\n}\r\n\r\n.countryFlags[_ngcontent-%COMP%]{\r\n  padding-left: 5px;\r\n}\r\n\r\n\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  width: 340px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztBQUNUOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFHQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7OztHQU1HOztBQUdIO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztHQUVHIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbm5hdntcclxuICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggI2NjYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5uYXYgLm5hdi1pdGVtc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbm5hdiAubmF2LWl0ZW1zIGxpe1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMCA4cHg7XHJcbn1cclxuXHJcbi5uYXYgLm9wZW4+YSwgLm5hdiAub3Blbj5hOmZvY3VzLCAubmF2IC5vcGVuPmE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFDOUE4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLmJ0bi1zdWNjZXNzMSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxQzlBODtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MUM5QTg7XHJcbn1cclxuLmJ0bi1zdWNjZXNzMTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZGRkYzQ7XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzczIge1xyXG4gICAgY29sb3I6ICM2MUM5QTg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGZmZjg7XHJcbn1cclxuXHJcblt0eXBlPSd0ZXh0J10sIFt0eXBlPSdwYXNzd29yZCddLHRleHRhcmVhLCBzZWxlY3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2M0YzRjNDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG5cclxuLmJ0bi1zaWduaW4sIC5idG4tc2lnbmluOmFjdGl2ZSB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBjb2xvcjogYmFjaztcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM2MUM5QTggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5uYXY+bGkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4uY29uc3RydWN0aW9ue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzYxQzlBODtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcmdvdC1wYXNzd29yZHtcclxuICBjb2xvcjogIzYxQzlBODtcclxufVxyXG5cclxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItdG9nZ2xlIHtcclxuICBib3JkZXItY29sb3I6ICM2MUM5QTg7XHJcbn1cclxuXHJcbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MUM5QTg7XHJcbn1cclxuXHJcblxyXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci10b2dnbGU6Zm9jdXMsIC5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXRvZ2dsZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5ZjVlNztcclxufVxyXG5cclxuLmxvZ2luLWJ0bntcclxuICBjb2xvcjogIzYxQzlBODtcclxufVxyXG5cclxuLnJlZ2lzdGVyYnRue1xyXG4gICAgLyogZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmOyAqL1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjNjY3NWRmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzY2NzVkZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5zaWduaW5idG57XHJcbiAgLyogZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmOyAqL1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBiYWNrZ3JvdW5kOiAjNjFDOUE4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2MUM5QTg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jb3VudHJ5RmxhZ3MgaW1nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAzNSU7XHJcbn1cclxuXHJcbi5zZWxlY3RlZEZsYWcgaW1ne1xyXG4gIG1heC13aWR0aDogNDQlO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5jb3VudHJ5RmxhZ3N7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi8qIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zaG93IHtcclxuICB3aWR0aDogNDAwcHg7XHJcbn0gKi9cclxuXHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAzNDBweDtcclxufVxyXG5cclxuLyogLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufSAqL1xyXG5cclxuIl19 */"]
      });
      /***/
    },

    /***/
    62414:
    /*!********************************************************************!*\
      !*** ./src/app/privacy-and-policy/privacy-and-policy.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrivacyAndPolicyComponent": function PrivacyAndPolicyComponent() {
          return (
            /* binding */
            _PrivacyAndPolicyComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _PrivacyAndPolicyComponent = /*#__PURE__*/function () {
        function _PrivacyAndPolicyComponent() {
          _classCallCheck(this, _PrivacyAndPolicyComponent);
        }

        _createClass(_PrivacyAndPolicyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PrivacyAndPolicyComponent;
      }();

      _PrivacyAndPolicyComponent.ɵfac = function PrivacyAndPolicyComponent_Factory(t) {
        return new (t || _PrivacyAndPolicyComponent)();
      };

      _PrivacyAndPolicyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _PrivacyAndPolicyComponent,
        selectors: [["privacy-and-policy"]],
        decls: 230,
        vars: 0,
        consts: [["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "pt-100"], ["fxFlex", "83%", "fxFlex.md", "83%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], [1, "main-title"], [1, "primary-text", "pt-4"], [1, "primary-text", "mt-6"], [1, "primary-text", "mt-2"], [1, "main-title2"], ["href", "http://welfareprogress.com", "target", "_blank"], ["href", "mailto:WelfareProgress@globalfoodpartners.com"], [1, "prefix-bold"], ["href", "mailto:welfareprogress@globalfoodpartners.com"], ["href", "mailto:team@globalfoodpartners.com"], ["href", "mailto:edps@edps.europa.eu"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["fxFlex", "83%", "fxFlex.md", "83%", "fxFlex.sm", "95%", "fxFlex.xs", "95%"], [1, "mx-auto"], [1, "flex", "flex-wrap", "text-center", "lg:text-left", "py-10"], [1, "w-full", "lg:w-6/12"], [1, "text-3xl", "font-semibold"], [1, "mt-4", "mb-2", "heading-color"], ["href", "https://globalfoodpartners.com/", "target", "_blank", 1, "text-heading-color", "hover:text-blueGray-800"], [1, "mt-4", "ml-1", "lg:mb-0", "mb-6"], ["href", "https://www.linkedin.com/company/36019661/admin/", "target", "_blank", "onclick", "window.open('https://www.linkedin.com/company/36019661/admin/', '_blank'); return false;", 1, "bg-blueGray-200", "heading-color"], ["width", "18", "src", "../../assets/img/GFP-icon-linkedin.png"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "flex", "flex-wrap", "items-top", "mb-6"], [1, "w-full", "lg:w-4/12", "px-4", "ml-auto"], [1, "list-unstyled"], [1, "footli"], ["routerLink", "", 1, "link"], ["routerLink", "/terms-and-conditions", 1, "link"]],
        template: function PrivacyAndPolicyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Global Food Partners Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This privacy policy explains how Global Food Partners uses the personal data we collect from you when you use any website or mobile apps, including subdomains thereof, through which Global Food Partners makes its information and services available. This website, our related websites, and any other mobile site or mobile application that links to this Privacy Policy (collectively, \u201Cthe Site(s)\u201D) are owned and operated by Global Food Partners, Inc., 1629 K Street, NW, Suite 300, Washington, DC 20006, USA.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Topics:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "What data do we collect?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "How do we collect your data?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "How will we use your data?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "How do we store your data?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Marketing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "What are your data protection rights?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "What are cookies?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "How do we use cookies?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "What types of cookies do we use?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "How to manage your cookies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Privacy policies of other websites");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Changes to our privacy policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "How to contact us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "How to contact the appropriate authorities");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "GDPR Guiding Principles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Global Food Partners complies with the six overall guiding principles of the GDPR, which are:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Lawfulness, fairness, and transparency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Purpose limitation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Data minimization");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Accuracy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Storage limitation and");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Integrity and confidentiality.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "What data do we collect?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Global Food Partners collects the following data:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Personal identification information (name, email address, phone number, etc.)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Company identification data (name, registered address(es), phone numbers, etc.)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Information about your company\u2019s operations relating to animal protein production or sourcing and");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Information about your company\u2019s progress towards meeting public commitments.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "How do we collect your data?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "You directly provide Global Food Partners with most of the data we collect. We collect data and process data when you:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Register online on any of our websites for any of our services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Voluntarily complete a survey or provide feedback or information on any of our services via email or on any of our websites");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Use or view our website via your browser\u2019s cookies.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "How will we use your data?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Global Food Partners collects your data so we can:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Process and manage any account(s) you create as part of the services we offer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Share any company information that you choose to reveal with relevant stakeholders and the general public to improve your visibility and marketability");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Collate sectoral reports without specifically identifying your company name and");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Email you with information on services or developments we think you will be interested in.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "How do we store your data?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Global Food Partners securely stores your data on Amazon Web Service (AWS) or any other reputable service and are subject to these entities\u2019 security precautions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Global Food Partners will keep your personal identifying and/or company data for the length of time that ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " is active and in use. Once this project has expired, we will delete your data. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Marketing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Global Food Partners would like to send you information about services of ours that we think you might like. If you have agreed to receive marketing communications, you may always opt out at a later date. You have the right at any time to stop Global Food Partners from contacting you for marketing purposes or giving your data to other stakeholders. If you no longer wish to be contacted for marketing purposes, please email us at ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "welfareprogress@globalfoodpartners.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "What are your data protection rights?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Global Food Partners would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "The right to be informed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " \u2013 This means anyone processing your personal data must make clear what they are processing, why, and who else the data may be passed to.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "The right of access");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " \u2013 You have the right to request Global Food Partners for copies of your personal data. We may charge you a small fee for this service.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "The right to rectification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " \u2013 You have the right to request that Global Food Partners correct any information you believe is inaccurate. You also have the right to request Global Food Partners to complete the information you believe is incomplete.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "The right to erasure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " \u2013 You have the right to request that Global Food Partners erase your personal data, under certain conditions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "The right to restrict processing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " \u2013 You have the right to request that Global Food Partners restrict the processing of your personal data, under certain conditions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "The right to object to processing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " \u2013 You have the right to object to Global Food Partners\u2019 processing of your personal data, under certain conditions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "The right to data portability");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " \u2013 You have the right to request that Global Food Partners transfer the data that we have collected to another organization, or directly to you, under certain conditions. If you make such a request, we have one month to respond to you.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Rights related to automated decision-making and profiling");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " \u2013 Data subjects have the right not to be subject to a decision based solely on automated processing.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "If you would like to exercise any of these rights, please contact us at our email: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "welfareprogress@globalfoodpartners.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "You can also call us at: +65 8716 0470");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " Or write to us at: Global Food Partners, 1629 K Street, NW, Suite 300, Washington, DC 20006, USA.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Cookies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Cookies are text files placed on your computer to collect standard Internet log information and visitor behavior information. When you visit our websites, we may collect information from you automatically through cookies or similar technology");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "For further information, visit allaboutcookies.org.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "How do we use cookies?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Global Food Partners does not use any cookies.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Withdrawing your consent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Where we rely on your consent as the legal basis for processing your personal information, you may withdraw your consent at any time simply by contacting us using the details at the end of this Policy.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "If you would like to withdraw your consent or object to receiving any direct marketing to which you opted-in, you can do so using the unsubscribe tool in that communication (if it is an email), or by writing to us or calling us using the details at the end of this Policy.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "If you have provided consent for your details to be shared with a third party, and wish to withdraw this consent, please also contact the relevant third party in order to amend your preferences.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Privacy policies of other websites");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Global Food Partners\u2019 website(s) may contain links to other websites. Our privacy policy applies only to our website, so if you click on a link to another website, you should read their privacy policy.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Changes to our privacy policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Global Food Partners keeps its privacy policy under regular review and places any updates on this web page. If there are material changes to this Privacy Policy or in how Global Food Partners will use your data, we will notify you either by posting a notice of such changes before they take effect or by directly sending you a notification. We encourage you to periodically review this Privacy Policy to learn how Global Food Partners is processing your information. This privacy policy was last updated on 3 August 2021.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "How to contact us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "If you have any questions about Global Food Partners\u2019 privacy policy and the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "You may email us at: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "team@globalfoodpartners.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " You can also call us at: +65 8716 0470");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " Or write to us at: Global Food Partners, 1629 K Street, NW, Suite 300, Washington, DC 20006, USA. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "How to contact the appropriate authority");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Should you wish to report a complaint or if you feel that Global Food Partners has not addressed your concern in a satisfactory manner, you may contact the European Data Protection Supervisor.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " Email: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "edps@edps.europa.eu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " Phone: +32 2 283 19 00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " Address: Rue Wiertz 60");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " 1047 Bruxelles/Brussel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "h4", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Follow Us ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "h5", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " Copyright \xA9 2021 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " Global Food Partners ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "ul", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, " Home ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "li", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " Terms and conditions ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref],
        styles: [".main-title[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: rgb(51, 51, 51);\r\n    font-weight: 900;\r\n    font-size: 26px;\r\n  }\r\n\r\n  .main-title2[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    color: rgb(51, 51, 51);\r\n    font-weight: 500;\r\n    font-size: 25px;\r\n  }\r\n\r\n  .prefix-bold[_ngcontent-%COMP%]{\r\n      font-weight: 500;\r\n  }\r\n\r\n  a[_ngcontent-%COMP%]{\r\n    color: #61C9A8;\r\n  }\r\n\r\n  hr[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    width: 100%;\r\n    height: 4px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: #61C9A8;\r\n    border: 0 none;\r\n  }\r\n\r\n  li[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .link[_ngcontent-%COMP%]{\r\n    color: #61C9A8;\r\n}\r\n\r\n  .link[_ngcontent-%COMP%]:hover{\r\n    color: rgb(51, 51, 51);\r\n    text-decoration: none;\r\n}\r\n\r\n  .footli[_ngcontent-%COMP%]{\r\n    margin-top: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3ktYW5kLXBvbGljeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7TUFDSSxnQkFBZ0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7QUFDbEI7O0VBRUE7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztFQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJwcml2YWN5LWFuZC1wb2xpY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG5cclxuICAubWFpbi10aXRsZTJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAucHJlZml4LWJvbGR7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICBhe1xyXG4gICAgY29sb3I6ICM2MUM5QTg7XHJcbiAgfVxyXG5cclxuICBociB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxQzlBODtcclxuICAgIGJvcmRlcjogMCBub25lO1xyXG4gIH1cclxuXHJcbiAgbGl7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxpbmt7XHJcbiAgICBjb2xvcjogIzYxQzlBODtcclxufVxyXG5cclxuLmxpbms6aG92ZXJ7XHJcbiAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZm9vdGxpe1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    71155:
    /*!**********************************************!*\
      !*** ./src/app/services/language.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LanguageService": function LanguageService() {
          return (
            /* binding */
            _LanguageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      29790);

      var _LanguageService = /*#__PURE__*/function () {
        function _LanguageService(translate) {
          _classCallCheck(this, _LanguageService);

          this.translate = translate;
          this.languages = ['en', 'es'];
          var browserLang;
          translate.addLangs(this.languages);

          if (localStorage.getItem('lang')) {
            browserLang = localStorage.getItem('lang');
          } else {
            browserLang = translate.getBrowserLang();
          }

          translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
        }

        _createClass(_LanguageService, [{
          key: "setLanguage",
          value: function setLanguage(lang) {
            this.translate.use(lang);
            localStorage.setItem('lang', lang);
          }
        }]);

        return _LanguageService;
      }();

      _LanguageService.ɵfac = function LanguageService_Factory(t) {
        return new (t || _LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
      };

      _LanguageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _LanguageService,
        factory: _LanguageService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    96267:
    /*!************************************************************************!*\
      !*** ./src/app/terms-and-conditions/terms-and-conditions.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TermsAndConditionsComponent": function TermsAndConditionsComponent() {
          return (
            /* binding */
            _TermsAndConditionsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      35618);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _TermsAndConditionsComponent = /*#__PURE__*/function () {
        function _TermsAndConditionsComponent() {
          _classCallCheck(this, _TermsAndConditionsComponent);
        }

        _createClass(_TermsAndConditionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _TermsAndConditionsComponent;
      }();

      _TermsAndConditionsComponent.ɵfac = function TermsAndConditionsComponent_Factory(t) {
        return new (t || _TermsAndConditionsComponent)();
      };

      _TermsAndConditionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _TermsAndConditionsComponent,
        selectors: [["terms-and-conditions"]],
        decls: 290,
        vars: 0,
        consts: [["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "pt-100"], ["fxFlex", "83%", "fxFlex.md", "83%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], [1, "main-title", "mb-16"], [1, "primary-text", "mt-6"], [1, "prefix-bold"], ["href", "http://home.welfareprogress.com", "target", "_blank"], ["type", "1", 1, "primary-text", "mt-2"], ["type", "1", 1, "primary-text", "mt-6"], [1, "main-title2"], ["type", "a", 1, "primary-text", "mt-6"], ["routerLink", "/privacy-policy"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["fxFlex", "83%", "fxFlex.md", "83%", "fxFlex.sm", "95%", "fxFlex.xs", "95%"], [1, "mx-auto"], [1, "flex", "flex-wrap", "text-center", "lg:text-left", "py-10"], [1, "w-full", "lg:w-6/12"], [1, "text-3xl", "font-semibold"], [1, "mt-4", "mb-2", "heading-color"], ["href", "https://globalfoodpartners.com/", "target", "_blank", 1, "text-heading-color", "hover:text-blueGray-800"], [1, "mt-4", "ml-1", "lg:mb-0", "mb-6"], ["href", "https://www.linkedin.com/company/36019661/admin/", "target", "_blank", "onclick", "window.open('https://www.linkedin.com/company/36019661/admin/', '_blank'); return false;", 1, "bg-blueGray-200", "heading-color"], ["width", "18", "src", "../../assets/img/GFP-icon-linkedin.png"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "flex", "flex-wrap", "items-top", "mb-6"], [1, "w-full", "lg:w-4/12", "px-4", "ml-auto"], [1, "list-unstyled"], [1, "footli"], ["routerLink", "", 1, "link"], ["routerLink", "/privacy-policy", 1, "link"]],
        template: function TermsAndConditionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "WelfareProgress.com Terms and Conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please read these Terms and Conditions (\u201CTerms\u201D) carefully");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " as they contain important information about your legal rights, remedies, and obligations. By accessing or using Global Food Partners\u2019 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " reporting platform, you agree to comply with these Terms.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "These Terms constitute a ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "legally binding agreement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " (\u201CAgreement\u201D) between you and Global Food Partners governing your access to and use of the Global Food Partners\u2019 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " reporting platform, including any subdomains thereof, mobile apps, and any other websites through which Global Food Partners makes its services available (collectively, \u201C");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u201D). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "By accepting this Agreement and/or using or visiting ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ", ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "you are agreeing to adhere to all of these terms and conditions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " You further agree that by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ol", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Using the Platform\u2019s website, mobile site, or any other related sites or services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Creating a Platform account, or");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Otherwise indicating your acceptance of this Agreement, you are legally bound by its terms.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "If you disagree with, or do not intend to abide by, any of the Terms of this Agreement or any future amendments, you must immediately delete your account and refrain from using Global Food Partners\u2019 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " reporting platform.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "When these Terms mention \u201CGlobal Food Partners,\u201D \u201Cwe,\u201D \u201Cus,\u201D or \u201Cour,\u201D we are referring to Global Food Partners, Inc. and any of its parents, subsidiaries, agents, or related organizations.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ol", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Scope of Global Food Partners\u2019 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " reporting platform");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " is a centralised website for corporate reporting on cage-free egg commitment progress. Food and hospitality companies around the world are proactively seeking to report and communicate their progress to key stakeholders. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " allows companies to publicly showcase their cage-free implementation progress on a single platform and reduce the burden of filling out multiple questionnaires. The platform is completely free of charge and available in multiple languages with options for global, regional, and country reporting.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Creating an Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Food and hospitality companies are encouraged to visit the platform and create an account to report progress on their cage-free commitments. Creating an account is quick and easy. Simply visit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " and follow the instructions to create your account today.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Any company that has a cage-free commitment, even if you do not currently source cage-free eggs, may create an account.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "You may not create more than one (1) account per company unless Global Food Partners authorizes you to do so in writing. For operations or businesses across multiple regions or entities, you are permitted to delegate the reporting obligations to another member of your company to reflect each geographical area or separate business entity. You may not otherwise assign or transfer your Global Food Partners\u2019 Account to another party.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "You are responsible for maintaining the confidentiality and security of your ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " account credentials");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " and you may not disclose your credentials to any third party. You must immediately notify Global Food Partners if you know or have any reason to suspect that your credentials have been lost, stolen, misappropriated, or otherwise compromised or in case of any actual or suspected unauthorized use of your ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " account.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Providing Your Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Once you have created an account, you will be asked to provide information on your cage-free progress to date. By creating an account, you agree to provide ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "truthful, accurate and complete information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " about your company\u2019s cage-free progress. Failure to do so can result in your ineligibility to use the platform.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "You alone are responsible for the accuracy and completeness of the information you provide on ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " and Global Food Partners in no way audits your operations or verifies the accuracy or completeness of the information you provide.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Publishing Your Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Once you have completed reporting on your company\u2019s cage-free progress, you are ready to take the next step of publishing your information in order to showcase your company\u2019s efforts.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Until you publish your information, no one, including Global Food Partners. is able to see the information you have entered. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Once your information is published, it will become publicly available on the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " reporting platform and can be viewed by anyone.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Representations and Warranties");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "ol", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "By using the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " reporting platform you hereby make the following representations and warranties: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "That you are authorized by your company to enter into this legally binding Agreement, create an account, and provide the information requested");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "That you are over 18 years of age and are able and permitted, under the laws of the country or countries in which you are registered, to enter into legally binding contracts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "That you have the authority to grant us all permissions and licenses provided in these Terms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "That you will provide truthful, accurate, and complete information about your company\u2019s cage-free progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "That if you assign this work to another person in your company, you are ultimately responsible for verifying the information provided and");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "That you will not post, upload, publish, submit, or transmit any content that is fraudulent, false, misleading (directly or by omission or failure to update information), or deceptive.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Disclaimer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "You agree and acknowledge that Global Food Partners in not a position to audit or verify any of the information you have provided. As such, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "you acknowledge that Global Food Partners has no control over and does not guarantee the completeness or accuracy of any information you provide.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Verification on the Internet is difficult, and we do not assume any responsibility for confirming the identity of any companies that register on our platform. Notwithstanding the above, for transparency and fraud prevention purposes, and as permitted by applicable laws, we may, but have no obligation to ask company representatives to provide a form of government identification or other information or undertake additional checks designed to help Global Food Partners verify their identities or backgrounds.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Liability");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "You agree that you are solely liable for any and all activities conducted through your ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, ", whether or not by you, and failure to abide by any of these Terms may result in suspension or termination of your account as well as any and all remedies available at law and equity.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "You explicitly agree to fully indemnify and hold Global Food Partners harmless");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " from any loss, claim, suit, or liability arising out of or related in any way to your use of the Platform. Global Food Partners is not liable in any way for any misinformation or inaccurate or incomplete information you provide, or for any loss or liability associated with your use of the platform.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "You hereby agree that by using the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " reporting platform, you assume, fully and without limitation, any and all risk to you or your business involving financial, reputational, or other harm.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Furthermore, due to the nature of the Internet, Global Food Partners cannot guarantee the continuous and uninterrupted availability and accessibility of the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " reporting platform. Global Food Partners may restrict the availability of the platform or certain areas or features thereof, if, at Global Food Partners\u2019 discretion, this is necessary in light of capacity limits, the security or integrity of our servers, or to carry out maintenance measures that ensure the proper or improved functioning of the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " platform.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "You acknowledge and agree that your only right and remedy with respect to any problems or dissatisfaction with the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " reporting platform or these Terms is to terminate your account and discontinue any use of the Platform.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "No Agency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "You agree and acknowledge that Global Food Partners is not acting as an agent, employee, or joint venture of your company.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Intellectual Property");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " reporting platform and any content therein may, in their entirety or in part, be protected by copyright, trademark, and/or other intellectual property laws of the United States and other countries. You acknowledge and agree that the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " reporting platform, including all associated intellectual property rights, are the exclusive property of Global Food Partners and/or its licensors or authorized third parties. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "You agree not to use, copy, adapt, modify, prepare derivative works of, distribute, license, sell, transfer, publicly display, transmit, broadcast, or otherwise exploit the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " reporting platform, or any content contained therein, except to the extent you are the legal owner of certain content or as expressly permitted in this Agreement.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "No licenses or rights are granted to you by implication or otherwise for any intellectual property owned or controlled by Global Food Partners or its licensors, except for the licenses and rights expressly granted in these Terms.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "By creating, uploading, posting, sending, receiving, storing, or otherwise making available any content on or through the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " platform, you grant to Global Food Partners a non-exclusive, worldwide, royalty-free, irrevocable, perpetual (or for the term of the protection), sub-licensable and transferable license to such content to access, use, store, copy, modify, prepare derivative works of, distribute, publish, transmit, stream, broadcast, and otherwise exploit in any manner such content to provide and/or promote the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " platform in any media or platform whether currently in existence or developed at a later date.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "You further represent and warrant that neither your content nor your posting, uploading, publication, submission, or transmittal of the content or Global Food Partners\u2019 use of your content (or any portion thereof) will infringe, misappropriate, or violate a third-party\u2019s patent, copyright, trademark, trade secret, moral rights, or other proprietary or intellectual property rights, or rights of publicity or privacy, or result in the violation of any applicable law or regulation.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Any personal identifying information collected by Global Food Partners will be secure and we will not share your information with anyone. For more information on how we collect and use your personal identifying information, please review our ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, ", which can be found on the landing page of the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " reporting platform.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Information Sharing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Notwithstanding the terms set out in section 10 of these Terms and/or Global Food Partners\u2019 Privacy Policy, you agree that Global Food Partners may, from time to time, compile company progress information and use that information in its marketing and program materials to promote the platform and to increase its reach. You further acknowledge that your user content may be displayed on other websites, in applications, within emails, and in online and offline advertisements. In no event will Global Food Partners make available any personal identifying information to a third party.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Modification of These Terms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Global Food Partners reserves the right to change or modify these Terms at any time in accordance with this provision. If we make changes to these Terms, we will post the revised Terms on the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " reporting platform and update the \u201CLast Updated\u201D date at the bottom of these Terms. It is your obligation to be familiar with the most current version of these Terms, which are publicly available on the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " reporting platform. If you disagree with the revised Terms, you may terminate this Agreement with immediate effect. If you do not terminate your Agreement upon the revised Terms becoming effective, your continued access to or use of the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " reporting platform will constitute your acceptance of the revised Terms.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Miscellaneous Terms");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "ol", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "To assist company representatives who speak different languages, any content on the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " reporting platform may be translated, in whole or in part, into multiple other languages. Global Food Partners cannot guarantee the accuracy or quality of such translations. The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, " platform may contain translations powered by Google. Google disclaims all warranties related to the translations, express or implied, including any warranties of accuracy, reliability, and any implied warranties of merchantability, fitness for a particular purpose, and non-infringement. Global Food Partners also disclaims all warranties related to the translations, express or implied, including any warranties of accuracy, reliability, and any implied warranties for merchantability, fitness for a particular purpose, and non-infringement.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "The ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " platform may contain links to third-party websites or resources (\u201CThird-Party Services\u201D). Such Third-Party Services may be subject to different terms and conditions and privacy practices. You are encouraged to familiarize yourself with the terms and conditions of any third-party sites you visit, as they may differ from these Terms. Global Food Partners is not responsible or liable for the availability or accuracy of such Third-Party Services, the content, products, or services available from such Third-Party Services, or a party\u2019s compliance with the Third-Party Services. Links to such Third-Party Services are not an endorsement by Global Food Partners of such Third-Party Services.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "You hereby agree that the laws of Singapore shall govern these Terms and this Agreement, regardless of conflicts of laws principles, and that the courts of Singapore shall have sole jurisdiction over any disputes arising out of or in connection with the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, " reporting platform, related sites, or these Terms.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Except as they may be supplemented by additional terms and conditions, at Global Food Partners\u2019 sole discretion, these Terms constitute the entire Agreement between Global Food Partners and you pertaining to the subject matter hereof, and supersede any and all prior oral or written understandings or agreements between Global Food Partners and you in relation to the access to and use of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " reporting platform.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "If any provision of these Terms is held to be invalid or unenforceable, such provision will be struck and will not affect the validity and enforceability of the remaining provisions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Global Food Partners\u2019 failure to enforce any right or provision in these Terms will not constitute a waiver of such right or provision unless acknowledged and agreed to by us in writing. Except as expressly set forth in these Terms, the exercise by either party of any of its remedies under these Terms will be without prejudice to its other remedies under these Terms or otherwise permitted under law.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "You may not assign, transfer, or delegate this Agreement and your rights and obligations hereunder without Global Food Partners\u2019 prior written consent. Global Food Partners may without restriction assign, transfer, or delegate this Agreement and any rights and obligations hereunder, at its sole discretion, with 30 days prior notice. Your right to terminate this Agreement at any time remains unaffected.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "h4", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Follow Us ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "h5", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, " Copyright \xA9 2021 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, " Global Food Partners ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "ul", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "li", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, " Home ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "li", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " Privacy Policy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref],
        styles: [".main-title[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: rgb(51, 51, 51);\r\n    font-weight: 900;\r\n    font-size: 26px;\r\n  }\r\n\r\n  .main-title2[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    color: rgb(51, 51, 51);\r\n    font-weight: 500;\r\n    font-size: 25px;\r\n  }\r\n\r\n  .prefix-bold[_ngcontent-%COMP%]{\r\n      font-weight: 500;\r\n  }\r\n\r\n  a[_ngcontent-%COMP%]{\r\n    color: #61C9A8;\r\n  }\r\n\r\n  hr[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    width: 100%;\r\n    height: 4px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: #61C9A8;\r\n    border: 0 none;\r\n  }\r\n\r\n  li[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .link[_ngcontent-%COMP%]{\r\n    color: #61C9A8;\r\n}\r\n\r\n  .link[_ngcontent-%COMP%]:hover{\r\n    color: rgb(51, 51, 51);\r\n    text-decoration: none;\r\n}\r\n\r\n  .footli[_ngcontent-%COMP%]{\r\n    margin-top: 8px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtNQUNJLGdCQUFnQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztBQUNsQjs7RUFFQTtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0VBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW4tdGl0bGUye1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLnByZWZpeC1ib2xke1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgYXtcclxuICAgIGNvbG9yOiAjNjFDOUE4O1xyXG4gIH1cclxuXHJcbiAgaHIge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MUM5QTg7XHJcbiAgICBib3JkZXI6IDAgbm9uZTtcclxuICB9XHJcblxyXG4gIGxpe1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5saW5re1xyXG4gICAgY29sb3I6ICM2MUM5QTg7XHJcbn1cclxuXHJcbi5saW5rOmhvdmVye1xyXG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmZvb3RsaXtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * In development mode, for easier debugging, you can ignore zone related error
       * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
       * below file. Don't forget to comment it out in production mode
       * because it will have a performance impact when errors are thrown
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map