(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkangular_course"] = self["webpackChunkangular_course"] || []).push([["main"], {
    /***/
    8255:
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
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    158:
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
      9895);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home/home.component */
      5067);
      /* harmony import */


      var _privacy_and_policy_privacy_and_policy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./privacy-and-policy/privacy-and-policy.component */
      2414);
      /* harmony import */


      var _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./terms-and-conditions/terms-and-conditions.component */
      6267);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

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
    5041:
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./nav/nav.component */
      5375);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./footer/footer.component */
      970);

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

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        consts: [[3, "activate"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "router-outlet", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_1_listener($event) {
              return ctx.onActivate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-footer");
          }
        },
        directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    6747:
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
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      5835);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/flex-layout */
      5830);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/expansion */
      1562);
      /* harmony import */


      var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nav/nav.component */
      5375);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./footer/footer.component */
      970);
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      5668);
      /* harmony import */


      var _app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app/material-module */
      8696);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./terms-and-conditions/terms-and-conditions.component */
      6267);
      /* harmony import */


      var _privacy_and_policy_privacy_and_policy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./privacy-and-policy/privacy-and-policy.component */
      2414);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home/home.component */
      5067);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__.CarouselModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__.FlexLayoutModule, _app_material_module__WEBPACK_IMPORTED_MODULE_3__.DemoMaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__.NavComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_4__.TermsAndConditionsComponent, _privacy_and_policy_privacy_and_policy_component__WEBPACK_IMPORTED_MODULE_5__.PrivacyAndPolicyComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_7__.HomeComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__.CarouselModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__.FlexLayoutModule, _app_material_module__WEBPACK_IMPORTED_MODULE_3__.DemoMaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    970:
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
      7716);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      5618);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);

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
        styles: [".link[_ngcontent-%COMP%]{\n    color: #61C9A8;\n}\n\n.link[_ngcontent-%COMP%]:hover{\n    color: rgb(51, 51, 51);\n    text-decoration: none;\n}\n\nli[_ngcontent-%COMP%]{\n    margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmt7XG4gICAgY29sb3I6ICM2MUM5QTg7XG59XG5cbi5saW5rOmhvdmVye1xuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5saXtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59Il19 */"]
      });
      /***/
    },

    /***/
    5067:
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
      7716);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      5618);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      3738);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      8295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      3166);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/select */
      7441);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      1095);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/tabs */
      5939);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/expansion */
      1562);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      7817);

      function HomeComponent_mat_option_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 71);

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
        decls: 230,
        vars: 1,
        consts: [["fxLayout", "row wrap", "fxLayoutAlign", "space-around center", "fxLayoutGap", "30px", 1, "pt-100", "mt-5", "pr-30"], ["fxFlex", "38%", "fxFlex.md", "38%", "fxFlex.sm", "90%", "fxFlex.xs", "95%", 1, "px-6"], [1, "primary-text"], ["fxFlex", "30%", "fxFlex.md", "30%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], [1, "coming-soon"], [1, "heading1", "soon"], [1, "soon"], ["floatLabel", "never", "appearance", "outline", 1, "company"], ["matInput", "", "placeholder", "Enter company name", "disabled", ""], ["floatLabel", "never", "appearance", "outline", 1, "period"], ["placeholder", "Period", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "disabled", ""], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "mt-12"], ["fxFlex", "83%", "fxFlex.md", "83%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], [1, "heading2"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "mt-12"], ["src", "../assets/wp/Animal Equality Square Logo (3).jpg", "alt", "THL", "height", "150px", "width", "150px"], ["src", "../assets/wp/MercyforAnimals_PrimaryLockup_RGB (2).png", "alt", "THL", "height", "150px", "width", "150px"], ["src", "../assets/wp/imageedit_1_9484464611.png", "alt", "THL", "height", "150px", "width", "150px"], ["src", "../assets/wp/thl-mended-heart-logo@2x.jpg", "alt", "THL", "height", "150px", "width", "150px"], [1, "section1-hr"], ["mat-align-tabs", "center", 1, "pt-16", "mb-5"], ["label", "Why report"], ["fxLayout", "row wrap", "fxLayoutAlign", "end center", "fxLayoutGap", "56px", 1, "py-6"], ["fxFlex", "42.3%", "fxFlex.md", "43.5%", "fxFlex.sm", "90%", "fxFlex.xs", "95%", 1, "px-6"], ["align", "left", 1, "carousel-hr"], [1, "text-2xl", "font-bold", "pt-4", "leading-relaxed"], [1, "mt-2", "mb-4", "primary-text", "pt-4"], [1, "mt-2", "mb-4", "primary-text"], ["fxFlex", "46.5%", "fxFlex.md", "46.5%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], [1, "py-6"], ["src", "../assets/img/20210709_brown layers on top system.jpg"], ["label", "About Global Food Partners"], [1, "text-2xl", "pt-4", "font-bold", "mb-2", "font-bold", "leading-normal"], [1, "flex", "mt-4", "flex-wrap", "justify-center"], [1, "mb-4", "primary-text", "leading-relaxed"], ["src", "../assets/img/20210709_IMG_20210524_145900.jpg"], ["label", "Commitment checklist"], [1, "text-2xl", "font-bold", "mt-4", "mb-2", "leading-normal"], [1, "mt-4", "px-4", "text-lg", "text-blueGray-600", "leading-relaxed"], [1, "checklist", "mt-6"], [1, "check"], ["src", "../assets/img/20210709_eggs.jpg"], [1, "top-100"], [1, "main-title", "mt-10"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["fxFlex", "85%", "fxFlex.md", "85%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], [1, "mb-16"], [1, "ans", "mt-2", "mb-4", "primary-text"], [1, "ans", "mt-2", "primary-text"], ["href", "mailto:welfareprogress@globalfoodpartners.com"], [1, "ans"], [1, "ans-head", "mt-2", "mb-4", "primary-text"], [1, "ans-head", "mt-2", "primary-text"], ["href", "https://app.welfareprogress.com/#/authentication/signup", "target", "_blank"], ["target", "_blank", "href", "../assets/wp/Questionnaire_EN.pdf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center start", "fxLayoutGap", "80px", 1, "mt-8"], ["fxFlex", "40%", "fxFlex.md", "40%", "fxFlex.sm", "90%", "fxFlex.xs", "95%", 1, "px-6"], [1, "text-2xl", "text-center", "font-semibold"], ["href", "http://globalfoodpartners.org/", "target", "_blank", 1, "text-sm", "font-bold", "leading-relaxed", "inline-block", "mr-4", "py-2", "whitespace-nowrap", "uppercase"], ["alt", "Logo", "src", "../assets/wp/Animal Equality Square Logo (3).jpg", "width", "300"], [1, "mb-4", "primary-text", "text-left"], [1, "ceo"], ["fxFlex", "40%", "fxFlex.md", "40%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], ["alt", "Logo", "src", "../assets/wp/MercyforAnimals_PrimaryLockup_RGB (2).png", "width", "300"], ["fxLayout", "row wrap", "fxLayoutAlign", "center start", "fxLayoutGap", "80px", 1, "mt-10", "mb-16"], ["alt", "Logo", "src", "../assets/wp/imageedit_1_9484464611.png", "width", "300"], [1, "mb-4", "primary-text", "text-left", "mt-4", "pr-12"], ["href", "http://welfareprogress.com", "target", "_blank"], ["alt", "Logo", "src", "../assets/wp/thl-mended-heart-logo@2x.jpg", "width", "300"], [3, "value"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "WelfareProgress is an initiative by Global Food Partners, endorsed by leading animal advocacy organisations. WelfareProgress is a tool for food businesses to report progress against their cage-free egg commitments. Multiple stakeholders use this platform to evaluate corporate progress on this topic.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Coming soon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "View cage-free progress ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_mat_option_15_Template, 2, 2, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Find report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-title", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "An initiative endorsed by");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-tab-group", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-tab", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h6", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Reduce your reporting burden");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " The focus of animal advocacy groups is quickly shifting from policy adoption to policy enforcement and accountability, with both local and global organisations now launching questionnaires, surveys, trackers, and benchmarking tools to assess progress. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Food and hospitality companies around the world are proactively seeking to report and communicate their progress to these advocacy groups and other key stakeholders. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " WelfareProgress allows companies to publicly showcase their cage-free implementation progress on a single platform, and reduce the burden of filling out multiple questionnaires. We have got an agreement from key animal advocacy organisations to accept cage-free egg progress reporting from WelfareProgress as a preferred alternative to their individual cage-free egg progress surveys and questionnaires. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Increase transparency ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " With hundreds of food businesses around the world committing to go cage-free, it\u2019s now expected that companies report and disclose their progress on this issue. WelfareProgress helps companies demonstrate progress on their cage-free commitments through accurate, thorough and timely reporting, allowing them to provide credible information to investors, animal advocacy groups, suppliers and consumers. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-tab", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Who we are ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Global Food Partners is a multinational consulting firm that works with businesses to develop, implement and report progress on high animal welfare and responsible sourcing policies to improve their profitability and sustainability. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Our team has a combined 50+ years of corporate and on-farm experience developing and executing animal welfare policies and production practices, with a focus on cage-free eggs. We\u2019ve worked with food industry leaders, governments and egg industries globally, including across Latin America and Asia, to transition to and maintain high welfare cage-free supply chains and production systems. Having worked extensively with animal advocacy organisations, we know the value of transparent communication of progress to mitigate reputational risks. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-tab", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "hr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Commitment checklist ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Does your cage-free egg commitment meet stakeholder expectations? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ul", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Clearly states that you will source exclusively cage-free eggs throughout supply chain ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Covers all eggs in your supply chain, including shell, egg products (liquid, powder, etc.), and food products manufactured by a 3rd party (e.g. pastries)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "States a deadline \u2013 the date by which your entire supply chain will be cage-free");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Covers your entire supply chain, including all brands and franchises ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Includes a commitment to translate the policy into key local languages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Includes a commitment to annual public on progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "hr", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Frequently Asked Questions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " 1. Why is GFP running welfareprogress.com? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Mitigating reputational risk is a key service we offer to our clients. Having worked extensively with animal advocacy organisations, we know the value of transparent communication of progress to mitigate reputational risks. The focus of animal advocacy groups is shifting quickly from policy adoption to policy enforcement and accountability, with global and local groups now launching questionnaires, surveys, trackers, and benchmarking tools. Filling out numerous cage-free egg progress surveys and questionnaires is overwhelming and time consuming for food businesses. It has become a never-ending task. While these surveys all seek to evaluate progress on the same initiative \u2013 cage-free eggs- they often use different metrics and cover different geographies. We\u2019ve received a lot of feedback from the food industry that there is a need for a more centralised and streamlined reporting process.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " In order to support our clients and the food industry as a whole, we\u2019ve taken this feedback and developed this platform, which aims to make this process more efficient and uniform. We hope this platform offers a solution to food businesses to efficiently demonstrate their progress and mitigate reputation risk. Please ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "reach out to us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " if we can help you with this reporting process. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " 2. What benefits does this platform have for food businesses? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Reduce your reporting burden");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " The focus of animal advocacy groups is quickly shifting from policy adoption to policy enforcement and accountability, with both local and global organisations now launching questionnaires, surveys, trackers, and benchmarking tools to assess progress. Food and hospitality companies around the world are proactively seeking to report and communicate their progress to these advocacy groups and other key stakeholders.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " WelfareProgress allows companies to publicly showcase their cage-free implementation progress on a single platform, and reduce the burden of filling out multiple questionnaires. We have got an agreement among key animal advocacy organisations to accept cage-free egg progress reporting from WelfareProgress as a preferred alternative to their individual progress surveys and questionnaires.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Increase transparency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " With hundreds of food businesses around the world committing to go cage-free, it\u2019s now expected that companies report and disclose their progress on this issue. WelfareProgress helps companies demonstrate progress on their cage-free commitments through accurate, thorough and timely reporting, allowing them to provide credible information to investors, animal advocacy groups, suppliers and consumers.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " 3. What animal advocacy groups endorse this initiative? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Leading animal advocacy organisations endorse and support WelfareProgress. To make the reporting process more efficient and streamlined, they\u2019ve agreed to accept cage-free egg progress reporting from WelfareProgress as a preferred alternative to their individual cage-free egg progress surveys and questionnaires. We\u2019ll continue engaging with these and other stakeholders to ensure ongoing alignment around cage-free reporting.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " 4. What if I receive a request for reporting cage-free progress through a different questionnaire or platform? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Key animal advocacy organisations have agreed to accept cage-free egg progress reporting from WelfareProgress as a preferred alternative to their individual progress surveys and questionnaires. Please ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "reach out to us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " if you receive requests to report through a different system, and we will be happy to get in touch with that organisation.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " 5. How do I report my cage-free progress? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "You can report your cage-free implementation progress ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " 6. What questions will I be asked? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "You can view the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "questions here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " so that you can prepare your data in advance. Please note that this is just for your reference. You can report your progress ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " 7. What if I need help? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "We'd be happy to walk you through the reporting process and answer any questions you have. Please reach out to us at ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "a", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "welfareprogress@globalfoodpartners.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " for assistance. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "hr", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "An initiative endorsed by");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h6", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "img", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "q");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "At a time when transparency is more important than ever to consumers, WelfareProgress.com provides a centralized place for people to see how their favorite companies are measuring up on their promises to get hens out of cages. Animal Equality plans to work with over a hundred companies worldwide to start publishing their progress on the platform.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Katie Arth, International Director of Corporate Outreach, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Animal Equality");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "h6", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "img", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "p", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "q");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Mercy For Animals supports the comprehensive, uniform cage-free egg progress reporting enabled by WelfareProgress.com. As we encourage transparency on corporate animal welfare goals through initiatives like Monitor de Iniciativas Corporativas por los Animales, this tool streamlines reporting expectations and formats to help the world transition away from the caging of laying hens.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Zo\xEB Sigle, Global Corporate Engagement Manager, Mercy For Animals ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h6", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "img", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "q");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "We believe that reporting on progress is an essential step to make sure cage-free policies are followed. We have been working with companies in Latin America and launched reports to share more about companies\u2019 progress in the region. We will be doing the same in Asia. We are happy to see a new platform that will centralize questionnaires and reporting from companies, so we decided to start sharing this new questionnaire with companies. We\u2019ll create regional reports using the public data available on ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "welfareprogress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Carolina Galvani, CEO, Sinergia Animal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "h6", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "img", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "p", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "q");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "The Humane League invites corporations to utilize ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " to report progress on their animal welfare goals. The platform is designed in a way to boost convenience and efficiency for all stakeholders alike.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Aaron Ross, Vice President of Policy and Strategy, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "The Humane League.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "hr");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.periods);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__.MatTab, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__.MatExpansionPanelTitle, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption],
        styles: [".mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n    margin-left: 8px;\n  }\n  .main-title[_ngcontent-%COMP%]{\n    \n    text-align: center;\n    color: rgb(51, 51, 51);\n    font-weight: 900;\n    font-size: 36px;\n    padding: 15px 0;\n  }\n  mat-panel-title[_ngcontent-%COMP%]{\n    font-size: 19px;\n    font-weight: 500;\n    color: #333;\n  }\n  .carouselOne[_ngcontent-%COMP%]{\n    \n    \n  \n  \n  }\n  .ans[_ngcontent-%COMP%]{\n    color: #666;\n    text-align: justify;\n    padding: 0 30px;\n  }\n  \n  .ans-head[_ngcontent-%COMP%]{\n    margin: 10px 0 5px 0;\n  }\n  .mat-expansion-panel[_ngcontent-%COMP%]:not([class*='mat-elevation-z']) {\n    box-shadow: none;\n  }\n    .mat-expansion-panel-body{\n    padding: 0 24px!important;\n  }\n  .company[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n    .mat-form-field-appearance-outline .mat-select-arrow-wrapper {\n    transform: translateY(0) !important;\n  }\n    .mat-form-field-infix {\n    border-top: .3em solid transparent !important;\n  }\n    .mat-form-field-appearance-outline .mat-form-field-outline {\n    color: #61C9A8;\n  }\n  .soon[_ngcontent-%COMP%]{\n    color: grey;\n    cursor: not-allowed;\n    text-align: left;\n  }\n  .coming-soon[_ngcontent-%COMP%]{\n    padding-top: 12px;\n    color: grey;\n    font-size: 16px;\n    float: right;\n    font-weight: 2rem;\n  }\n  .heading1[_ngcontent-%COMP%]{\n    color: #333;\n    font-weight: 600;\n    font-size: 2.75rem;\n    text-align: left;\n  }\n  .heading2[_ngcontent-%COMP%]{\n    font-weight: 600;\n    font-size: 2.75rem;\n  }\n  .support-title[_ngcontent-%COMP%]{\n    text-indent: 50px;\n    padding-bottom: 15px;\n    text-align: justify;\n    font-weight: 400;\n    font-size: 1.5rem;\n  }\n  .ceo[_ngcontent-%COMP%]{\n    \n    text-align: left;\n    font-weight: 500;\n  }\n  a[_ngcontent-%COMP%]{\n    color: #61C9A8;\n  }\n  button[_ngcontent-%COMP%]{\n    border-radius: 0%;\n    outline: none;\n    width: 30%;\n    color: white;\n    font-weight: 400;\n    background-color: #61C9A8;\n    height: 45px;\n    margin-bottom: 18px;\n  }\n    .mat-form-field-outline-start,   .mat-form-field-outline-end {\n      border-radius: 0px !important;\n  }\n  hr[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    width: 90%;\n    height: 4px;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: #61C9A8;\n    border: 0 none;\n  }\n  .carousel-hr[_ngcontent-%COMP%]{\n      width: 70px;\n      height: 4px;\n      margin-left: 0;\n      margin-right: 0;\n      background-color: #61C9A8;\n      border: 0 none;\n      text-align: left;\n  }\n  .support-hr[_ngcontent-%COMP%]{\n    width: 50px;\n    height: 4px;\n    margin-left: 0;\n    margin-right: 0;\n    background-color: #61C9A8;\n    border: 0 none;\n    text-align: left;\n  }\n  .section1-hr[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n  .logo-size[_ngcontent-%COMP%]{\n    font-size: 50px;\n  }\n    .mat-card{\n    \n    border:none !important;\n    transition: none !important;\n    box-shadow: none !important;\n  }\n  @media screen and (min-width:1166px) {\n    .card-section[_ngcontent-%COMP%]{ padding-right:60px;}\n  }\n  .period[_ngcontent-%COMP%]{\n    width: 70%;\n  }\n  .slide-container[_ngcontent-%COMP%] {\n    position: relative;\n    text-align: center;\n    color: white;\n  }\n  .centered[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  .img-center[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 86%;\n    height: 500px;\n  }\n  .image[_ngcontent-%COMP%]:after {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    content:'\\A';\n    position:absolute;\n    width:86%;\n    height:100%;\n    top:0; left:7%;\n    background:rgba(0,0,0,0.6);\n    opacity:0;\n    transition: all 0.5s;\n    -webkit-transition: all 0.5s;\n    opacity:1;\n  }\n    .owl-carousel .owl-item img{\n    display: block;\n    width: 50%;\n  }\n  .containerrr[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n    display : flex;\n    flex-direction : row;\n  \n    }\n  .carousel-main[_ngcontent-%COMP%]{\n    margin-top: 100px;\n  }\n  \n  .checklist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    background: url('check.png') no-repeat left center;\n    padding: 5px 10px 5px 50px;\n    list-style: none;\n    margin-top: 5px;\n    vertical-align: middle;\n  }\n    .owl-theme .owl-dots .owl-dot span {\n    width: 100px;\n    height: auto;\n    font-size: 16px;\n    margin: 5px 7px;\n    background: #e3fffa;\n    display: block;\n    transition: opacity .2s ease;\n    border-radius: 4px;\n    position: relative;\n  }\n    .owl-theme .owl-dots .owl-dot.active span, .owl-theme[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n    background: #61C9A8;\n  }\n  \n  .mat-card-actions[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 0;\n  }\n  .wrapper[_ngcontent-%COMP%] {\n    margin: 100px;\n  }\n  mat-expansion-panel-header[_ngcontent-%COMP%] {\n    height: 100% !important;\n    margin: 10px 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtFQUNqQjtFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7RUFFQTtJQUNFLHVEQUF1RDtJQUN2RCxrQkFBa0I7OztFQUdwQjtFQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCO0VBRUE7O0tBRUc7RUFFSDtJQUNFLG9CQUFvQjtFQUN0QjtFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7RUFFQTtJQUNFLFdBQVc7RUFDYjtFQUlBOzs7Ozs7Ozs7Ozs7O0lBYUU7RUFFRDtJQUNDLG1DQUFtQztFQUNyQztFQUlBO0lBQ0UsNkNBQTZDO0VBQy9DO0VBR0E7SUFDRSxjQUFjO0VBQ2hCO0VBRUE7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjtFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjtFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtFQUVBO0lBQ0UsY0FBYztFQUNoQjtFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtFQUVBOztNQUVJLDZCQUE2QjtFQUNqQztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztFQUNoQjtFQUVBO01BQ0ksV0FBVztNQUNYLFdBQVc7TUFDWCxjQUFjO01BQ2QsZUFBZTtNQUNmLHlCQUF5QjtNQUN6QixjQUFjO01BQ2QsZ0JBQWdCO0VBQ3BCO0VBR0E7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUdBO0lBQ0UsZUFBZTtFQUNqQjtFQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0VBQzdCO0VBR0E7SUFDRSxlQUFlLGtCQUFrQixDQUFDO0VBQ3BDO0VBR0E7SUFDRSxVQUFVO0VBQ1o7RUFJQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7RUFDbEM7RUFHQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0VBQ2Y7RUFHQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsU0FBUztJQUNULFdBQVc7SUFDWCxLQUFLLEVBQUUsT0FBTztJQUNkLDBCQUEwQjtJQUMxQixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixTQUFTO0VBQ1g7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0VBQ1o7RUFHQTtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7O0lBRXBCO0VBR0Y7SUFDRSxpQkFBaUI7RUFDbkI7RUFFQTs7S0FFRztFQUlIO0lBQ0Usa0RBQW1FO0lBQ25FLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNCQUFzQjtFQUN4QjtFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUlBOztLQUVHO0VBRUg7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFHQTtJQUNFLHVCQUF1QjtJQUN2QixjQUFjO0VBQ2hCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG4gIC5tYWluLXRpdGxle1xuICAgIC8qIG1hcmdpbi10b3A6IDYwcHg7ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICB9XG4gIFxuICBtYXQtcGFuZWwtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgXG4gIC5jYXJvdXNlbE9uZXtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pbWcvc2xpZGUxLmpwZycpOyAqL1xuICAgIC8qIG9wYWNpdHk6IDAuNTsgKi9cbiAgXG4gIFxuICB9XG4gIFxuICAuYW5ze1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgcGFkZGluZzogMCAzMHB4O1xuICB9XG4gIFxuICAvKiAucmVwb3J0e1xuICAgIHBhZGRpbmc6IDgwcHg7XG4gIH0gKi9cbiAgXG4gIC5hbnMtaGVhZHtcbiAgICBtYXJnaW46IDEwcHggMCA1cHggMDtcbiAgfVxuICBcbiAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKSB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICBcbiAgOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHl7XG4gICAgcGFkZGluZzogMCAyNHB4IWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmNvbXBhbnkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICBcbiAgXG4gIC8qIGlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICAuYm94IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzFjODdjOTtcbiAgfVxuICAgKi9cbiAgXG4gICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LXNlbGVjdC1hcnJvdy13cmFwcGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgXG4gIFxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBib3JkZXItdG9wOiAuM2VtIHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIFxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgY29sb3I6ICM2MUM5QTg7XG4gIH1cbiAgXG4gIC5zb29ue1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBcbiAgLmNvbWluZy1zb29ue1xuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC13ZWlnaHQ6IDJyZW07XG4gIH1cbiAgXG4gIC5oZWFkaW5nMXtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMi43NXJlbTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIFxuICAuaGVhZGluZzJ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIuNzVyZW07XG4gIH1cbiAgXG4gIC5zdXBwb3J0LXRpdGxle1xuICAgIHRleHQtaW5kZW50OiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICBcbiAgLmNlb3tcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDEycHg7ICovXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIFxuICBhe1xuICAgIGNvbG9yOiAjNjFDOUE4O1xuICB9XG4gIFxuICBidXR0b257XG4gICAgYm9yZGVyLXJhZGl1czogMCU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MUM5QTg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCxcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgaHIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxQzlBODtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgfVxuICBcbiAgLmNhcm91c2VsLWhye1xuICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYxQzlBODtcbiAgICAgIGJvcmRlcjogMCBub25lO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBcbiAgXG4gIC5zdXBwb3J0LWhye1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFDOUE4O1xuICAgIGJvcmRlcjogMCBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgXG4gIC5zZWN0aW9uMS1ociB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuICBcbiAgXG4gIC5sb2dvLXNpemV7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG4gIFxuICA6Om5nLWRlZXAgLm1hdC1jYXJke1xuICAgIC8qIG1hcmdpbjogMCAyMHB4OyAqL1xuICAgIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTE2NnB4KSB7XG4gICAgLmNhcmQtc2VjdGlvbnsgcGFkZGluZy1yaWdodDo2MHB4O31cbiAgfVxuICBcbiAgXG4gIC5wZXJpb2R7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuICBcbiAgXG4gIFxuICAuc2xpZGUtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLmNlbnRlcmVkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIFxuICBcbiAgLmltZy1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogODYlO1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbiAgXG4gIFxuICAuaW1hZ2U6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBjb250ZW50OidcXEEnO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHdpZHRoOjg2JTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB0b3A6MDsgbGVmdDo3JTtcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC42KTtcbiAgICBvcGFjaXR5OjA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICBvcGFjaXR5OjE7XG4gIH1cbiAgXG4gIDo6bmctZGVlcCAub3dsLWNhcm91c2VsIC5vd2wtaXRlbSBpbWd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICBcbiAgXG4gIC5jb250YWluZXJyciAuYm94IHtcbiAgICBkaXNwbGF5IDogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbiA6IHJvdztcbiAgXG4gICAgfVxuICBcbiAgXG4gIC5jYXJvdXNlbC1tYWlue1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICB9XG4gIFxuICAvKiAuc3VwcG9ydC1sb2dvc3tcbiAgICBwYWRkaW5nOiAwIDkwcHg7XG4gIH0gKi9cbiAgXG4gIFxuICBcbiAgLmNoZWNrbGlzdCBsaSB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1nL2NoZWNrLnBuZycpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggNTBweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gIFxuICA6Om5nLWRlZXAgLm93bC10aGVtZSAub3dsLWRvdHMgLm93bC1kb3Qgc3BhbiB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiA1cHggN3B4O1xuICAgIGJhY2tncm91bmQ6ICNlM2ZmZmE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICA6Om5nLWRlZXAgLm93bC10aGVtZSAub3dsLWRvdHMgLm93bC1kb3QuYWN0aXZlIHNwYW4sIC5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90OmhvdmVyIHNwYW4ge1xuICAgIGJhY2tncm91bmQ6ICM2MUM5QTg7XG4gIH1cbiAgXG4gIFxuICBcbiAgLyogLnRhYi1pbWd7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9ICovXG4gIFxuICAubWF0LWNhcmQtYWN0aW9ucywgLm1hdC1jYXJkLXN1YnRpdGxlLCAubWF0LWNhcmQtY29udGVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICBcbiAgLndyYXBwZXIge1xuICAgIG1hcmdpbjogMTAwcHg7XG4gIH1cbiAgXG4gIFxuICBtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cbiAgXG4gICJdfQ== */"]
      });
      /***/
    },

    /***/
    8696:
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
      9238);
      /* harmony import */


      var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/clipboard */
      4785);
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      7310);
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/cdk/portal */
      7636);
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      1386);
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      1394);
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/table */
      552);
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/tree */
      2796);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      1554);
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/badge */
      346);
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      6410);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      1095);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      2542);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      3738);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/checkbox */
      7539);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/chips */
      8341);
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/stepper */
      4553);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/datepicker */
      3220);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/dialog */
      2238);
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
      6627);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/input */
      3166);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/list */
      7746);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/menu */
      3935);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/core */
      7817);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/paginator */
      9692);
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      2178);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      4885);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/radio */
      2613);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/select */
      7441);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/sidenav */
      4935);
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/slider */
      4436);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      5396);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      7001);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/sort */
      1494);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/table */
      2091);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/tabs */
      5939);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/toolbar */
      2522);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/tooltip */
      1436);
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/material/tree */
      1933);
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      8203);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

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
    5375:
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      2238);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      5618);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _NavComponent = /*#__PURE__*/function () {
        function _NavComponent(dialog) {
          _classCallCheck(this, _NavComponent);

          this.dialog = dialog;
          this.navbarOpen = false;
          this.logoSrc = "../";
          this.isScrolled = false;
        }

        _createClass(_NavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
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
        }]);

        return _NavComponent;
      }();

      _NavComponent.ɵfac = function NavComponent_Factory(t) {
        return new (t || _NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialog));
      };

      _NavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NavComponent,
        selectors: [["app-nav"]],
        hostBindings: function NavComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavComponent_scroll_HostBindingHandler() {
              return ctx.scrollEvent();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 47,
        vars: 0,
        consts: [["role", "navigation", 1, "navbar", "navbar-inverse", "navbar-fixed-top"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["fxFlex", "85%", "fxFlex.md", "85%", "fxFlex.sm", "90%", "fxFlex.xs", "90%"], [1, "container-fluid"], [1, "navbar-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbar", "aria-expanded", "false", "aria-controls", "navbar", 1, "navbar-toggle", "collapsed"], [1, "sr-only"], [1, "icon-bar"], [1, "mt-4", "mb-4"], ["href", "http://globalfoodpartners.org/", "target", "_blank"], ["alt", "Logo", "src", "../../assets/img/Welfare Progress - Logo 500x300px-01-01.svg", "width", "500", "height", "300"], ["id", "navbar", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "navbar-right"], [1, "dropdown"], ["data-toggle", "dropdown", 1, "btn-signin", "heading-color", "mt-7", "text-md", "dropdown-toggle"], [1, "caret"], ["role", "menu", 1, "dropdown-menu", "dropdown-lr", "animated", "slideInRight"], [1, "construction"], [1, "col-lg-12", "mt-4"], ["id", "ajax-login-form", "action", "", "method", "post", "role", "form", "autocomplete", "off"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", "id", "username", "tabindex", "1", "placeholder", "Email ID", "value", "", "autocomplete", "off", "disabled", "", 1, "form-control"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "tabindex", "2", "placeholder", "Password", "autocomplete", "off", "disabled", "", 1, "form-control"], [1, "row"], [1, "col-xs-6", "pull-left", "button-lc"], ["type", "submit", "name", "login-submit", "id", "login-submit", "value", "Sign In", "disabled", "", 1, "form-control", "btn", "btn-success1"], [1, "col-xs-6", "pull-right"], ["href", "https://app.welfareprogress.com/#/authentication/signup", "target", "_blank", "type", "submit", "name", "create-submit", "id", "create-submit", "value", "Create Account", "disabled", "", 1, "form-control", "btn", "btn-success2"], [1, "col-lg-12"], [1, "text-center"], ["disabled", "", 1, "forgot-password"]],
        template: function NavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Toggle navigation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Report cage-free progress ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Under construction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Forgot password?");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
        styles: ["nav[_ngcontent-%COMP%]{\n  box-shadow: 0px 1px 10px #ccc;\n  background-color: #fff;\n}\n\nnav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]{\n  display: flex;\n  flex: 1;\n}\n\nnav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n  list-style: none;\n  padding: 0 8px;\n}\n\n.nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{\n    background-color: #61C9A8;\n    color: white;\n}\n\n.btn-success1[_ngcontent-%COMP%] {\n    color: #fff;\n    font-weight: bold;\n    background-color: #61C9A8;\n    border: 1px solid #61C9A8;\n}\n\n.btn-success1[_ngcontent-%COMP%]:hover{\n    background-color: #8dddc4;\n}\n\n.btn-success2[_ngcontent-%COMP%] {\n    color: #61C9A8;\n    font-weight: bold;\n    background-color: #e8fff8;\n}\n\n[type='text'][_ngcontent-%COMP%], [type='password'][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n    background-color: #fff;\n    border-color: #c4c4c4;\n    font-size: 1.5rem;\n}\n\n.btn-signin[_ngcontent-%COMP%], .btn-signin[_ngcontent-%COMP%]:active {\n    padding: 0 20px;\n    color: back;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.construction[_ngcontent-%COMP%]{\n  text-align: center;\n  color: grey;\n  font-weight: bold;\n}\n\n.forgot-password[_ngcontent-%COMP%]{\n  color: #61C9A8;\n}\n\n.navbar-inverse[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%] {\n  border-color: #61C9A8;\n}\n\n.navbar-inverse[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%] {\n  background-color: #61C9A8;\n}\n\n.navbar-inverse[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:focus, .navbar-inverse[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #c9f5e7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztBQUNUOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFHQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUdBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUdBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5uYXZ7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5uYXYgLm5hdi1pdGVtc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cblxubmF2IC5uYXYtaXRlbXMgbGl7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDAgOHB4O1xufVxuXG4ubmF2IC5vcGVuPmEsIC5uYXYgLm9wZW4+YTpmb2N1cywgLm5hdiAub3Blbj5hOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MUM5QTg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cbi5idG4tc3VjY2VzczEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MUM5QTg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzYxQzlBODtcbn1cbi5idG4tc3VjY2VzczE6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhkZGRjNDtcbn1cblxuLmJ0bi1zdWNjZXNzMiB7XG4gICAgY29sb3I6ICM2MUM5QTg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZmZmODtcbn1cblxuW3R5cGU9J3RleHQnXSwgW3R5cGU9J3Bhc3N3b3JkJ10sdGV4dGFyZWEsIHNlbGVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICNjNGM0YzQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cblxuLmJ0bi1zaWduaW4sIC5idG4tc2lnbmluOmFjdGl2ZSB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGNvbG9yOiBiYWNrO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cblxuLm5hdj5saSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cblxuLmNvbnN0cnVjdGlvbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb3Jnb3QtcGFzc3dvcmR7XG4gIGNvbG9yOiAjNjFDOUE4O1xufVxuXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci10b2dnbGUge1xuICBib3JkZXItY29sb3I6ICM2MUM5QTg7XG59XG5cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFDOUE4O1xufVxuXG5cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXRvZ2dsZTpmb2N1cywgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItdG9nZ2xlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5ZjVlNztcbn1cblxuIl19 */"]
      });
      /***/
    },

    /***/
    2414:
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
      7716);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      5618);

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
        decls: 226,
        vars: 0,
        consts: [["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "pt-100"], ["fxFlex", "83%", "fxFlex.md", "83%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], [1, "main-title"], [1, "primary-text", "pt-4"], [1, "primary-text", "mt-6"], [1, "primary-text", "mt-2"], [1, "main-title2"], ["href", "http://welfareprogress.com", "target", "_blank"], ["href", "mailto:WelfareProgress@globalfoodpartners.com"], [1, "prefix-bold"], ["href", "mailto:welfareprogress@globalfoodpartners.com"], ["href", "mailto:team@globalfoodpartners.com"], ["href", "mailto:edps@edps.europa.eu"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Global Food Partners uses cookies in a range of ways to improve your experience on our website, including:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Keeping you signed in and");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Understanding how you use our website.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "What types of cookies do we use?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "There are a number of different types of cookies; however, our website uses:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Functionality \u2013 Global Food Partners uses these cookies so that we recognize you on our website and remember your previously selected preferences. These could include what language you prefer and location you are in. A mix of first-party and third-party cookies are used.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Advertising \u2013 Global Food Partners uses these cookies to collect information about your visit to our website(s), the content you viewed, the link(s) you followed and information about your browser, device, and IP address. Global Food Partners sometimes shares some limited aspects of this data with third parties for advertising and/or marketing purposes. We may also share online data collected through cookies with our advertising partners. This means that when you visit another website, you may be shown advertising based on your browsing patterns on our website.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Add any other types of cookies we use");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "How to manage cookies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "You can set your browser not to accept cookies, and the above website tells you how to remove cookies from your browser. However, in a few cases, some of our website features may not function as a result.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Withdrawing your consent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Where we rely on your consent as the legal basis for processing your personal information, you may withdraw your consent at any time simply by contacting us using the details at the end of this Policy.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "If you would like to withdraw your consent or object to receiving any direct marketing to which you opted-in, you can do so using the unsubscribe tool in that communication (if it is an email), or by writing to us or calling us using the details at the end of this Policy.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "If you have provided consent for your details to be shared with a third party, and wish to withdraw this consent, please also contact the relevant third party in order to amend your preferences.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Privacy policies of other websites");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Global Food Partners\u2019 website(s) may contain links to other websites. Our privacy policy applies only to our website, so if you click on a link to another website, you should read their privacy policy.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Changes to our privacy policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Global Food Partners keeps its privacy policy under regular review and places any updates on this web page. If there are material changes to this Privacy Policy or in how Global Food Partners will use your data, we will notify you either by posting a notice of such changes before they take effect or by directly sending you a notification. We encourage you to periodically review this Privacy Policy to learn how Global Food Partners is processing your information. This privacy policy was last updated on 3 August 2021.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "How to contact us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "If you have any questions about Global Food Partners\u2019 privacy policy and the data we hold on you, or you would like to exercise one of your data protection rights, please do not hesitate to contact us.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "You may email us at: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "team@globalfoodpartners.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " You can also call us at: +65 8716 0470");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Or write to us at: Global Food Partners, 1629 K Street, NW, Suite 300, Washington, DC 20006, USA. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "How to contact the appropriate authority");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Should you wish to report a complaint or if you feel that Global Food Partners has not addressed your concern in a satisfactory manner, you may contact the European Data Protection Supervisor.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " Email: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "edps@edps.europa.eu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " Phone: +32 2 283 19 00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " Address: Rue Wiertz 60");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " 1047 Bruxelles/Brussel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective],
        styles: [".main-title[_ngcontent-%COMP%]{\n    text-align: center;\n    color: rgb(51, 51, 51);\n    font-weight: 900;\n    font-size: 26px;\n  }\n\n  .main-title2[_ngcontent-%COMP%]{\n    margin-top: 20px;\n    color: rgb(51, 51, 51);\n    font-weight: 500;\n    font-size: 25px;\n  }\n\n  .prefix-bold[_ngcontent-%COMP%]{\n      font-weight: 500;\n  }\n\n  a[_ngcontent-%COMP%]{\n    color: #61C9A8;\n  }\n\n  hr[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    width: 100%;\n    height: 4px;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: #61C9A8;\n    border: 0 none;\n  }\n\n  li[_ngcontent-%COMP%]{\n    margin-top: 10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3ktYW5kLXBvbGljeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7TUFDSSxnQkFBZ0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJwcml2YWN5LWFuZC1wb2xpY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG5cbiAgLm1haW4tdGl0bGUye1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuXG4gIC5wcmVmaXgtYm9sZHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICBhe1xuICAgIGNvbG9yOiAjNjFDOUE4O1xuICB9XG5cbiAgaHIge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MUM5QTg7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gIH1cblxuICBsaXtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9Il19 */"]
      });
      /***/
    },

    /***/
    6267:
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
      7716);
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      5618);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);

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
        decls: 266,
        vars: 0,
        consts: [["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "pt-100"], ["fxFlex", "83%", "fxFlex.md", "83%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], [1, "main-title", "mb-16"], [1, "primary-text", "mt-6"], [1, "prefix-bold"], ["href", "http://home.welfareprogress.com", "target", "_blank"], ["type", "1", 1, "primary-text", "mt-2"], ["type", "1", 1, "primary-text", "mt-6"], [1, "main-title2"], ["type", "a", 1, "primary-text", "mt-6"], ["routerLink", "/privacy-policy"]],
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
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref],
        styles: [".main-title[_ngcontent-%COMP%]{\n    text-align: center;\n    color: rgb(51, 51, 51);\n    font-weight: 900;\n    font-size: 26px;\n  }\n\n  .main-title2[_ngcontent-%COMP%]{\n    margin-top: 20px;\n    color: rgb(51, 51, 51);\n    font-weight: 500;\n    font-size: 25px;\n  }\n\n  .prefix-bold[_ngcontent-%COMP%]{\n      font-weight: 500;\n  }\n\n  a[_ngcontent-%COMP%]{\n    color: #61C9A8;\n  }\n\n  hr[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    width: 100%;\n    height: 4px;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: #61C9A8;\n    border: 0 none;\n  }\n\n  li[_ngcontent-%COMP%]{\n    margin-top: 10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtNQUNJLGdCQUFnQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InRlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi10aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgfVxuXG4gIC5tYWluLXRpdGxlMntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cblxuICAucHJlZml4LWJvbGR7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgYXtcbiAgICBjb2xvcjogIzYxQzlBODtcbiAgfVxuXG4gIGhyIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFDOUE4O1xuICAgIGJvcmRlcjogMCBub25lO1xuICB9XG5cbiAgbGl7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfSJdfQ== */"]
      });
      /***/
    },

    /***/
    2340:
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
    4431:
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
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

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
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map