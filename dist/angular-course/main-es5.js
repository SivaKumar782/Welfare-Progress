(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      5618);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      3738);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      8295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      3166);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/select */
      7441);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      1095);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/tabs */
      5939);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/expansion */
      1562);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./footer/footer.component */
      970);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      7817);

      function AppComponent_mat_option_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var period_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", period_r1.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", period_r1.viewValue, " ");
        }
      }

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent() {
          _classCallCheck(this, _AppComponent);

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

        _createClass(_AppComponent, [{
          key: "toggleTabs",
          value: function toggleTabs($tabNumber) {
            this.openTab = $tabNumber;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 207,
        vars: 1,
        consts: [[1, "main"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "space-around center", 1, "py-24"], ["fxFlex", "45%", "fxFlex.sm", "100%"], [1, "heading1"], [1, "reports"], ["floatLabel", "never", "appearance", "outline", 1, "company"], ["matInput", "", "placeholder", "Enter company name or part of it"], ["floatLabel", "never", "appearance", "outline", 1, "period"], ["placeholder", "Period"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", ""], [1, "section1-hr"], ["mat-align-tabs", "center", 1, "pt-20", "mb-5"], ["label", "Why report"], [1, "test1"], [1, "p"], [1, "carouselOne"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["fxFlex", "90%", "fxFlex.md", "100%", "fxFlex.sm", "100%", "fxFlex.xs", "100%"], ["align", "left", 1, "carousel-hr"], [1, "text-2xl", "font-bold", "w-text", "pt-4"], [1, "mt-2", "mb-4", "primary-text", "w-text", "pt-4"], [1, "mt-2", "mb-4", "w-text", "primary-text"], ["label", "Who supports us"], [1, "test2"], [1, ""], [1, "flex", "flex-wrap", "items-center"], ["fxFlex", "90%", "fxFlex.md", "100%", "fxFlex.sm", "100%", "fxFlex.xs", "100%", 1, "mr-auto", "ml-auto", "bg-green-100"], [1, "text-2xl", "pt-4", "font-bold", "mb-2", "font-bold", "leading-normal"], [1, "primary-text", "font-light", "leading-relaxed", "mt-4", "mb-4", "w-text"], [1, "text-lg", "font-light", "leading-relaxed", "mt-0", "mb-4"], ["label", "Who we are"], [1, "test3"], [1, "flex", "mt-4", "flex-wrap", "justify-center"], [1, "mb-4", "primary-text", "leading-relaxed", "tx-white", "w-text"], [1, "primary-text", "w-text"], ["label", "Commitment Checklist"], [1, "text-2xl", "font-bold", "mt-4", "mb-2", "leading-normal"], [1, "mt-4", "px-4", "text-lg", "text-blueGray-600", "leading-relaxed"], [1, "checklist", "mt-6"], [1, "check"], [1, "primary-text"], [1, "main-title"], [1, "mb-20"], [1, "ans"], [1, "ans-head"], [1, "pt-15", "relative", "block"], [1, "container", "mx-auto", "px-4", "lg:pt-6", "pb-20"], [1, "flex", "flex-wrap", "text-center", "justify-center"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "text-3xl", "main-title"], [1, "flex", "flex-wrap", "mt-12", "justify-center"], [1, "w-full", "lg:w-4/12", "px-4", "py-12", "card-section"], ["align", "left", 1, "support-hr"], [1, "text-2xl", "mt-5", "font-semibold"], [1, "mt-4", "mb-4", "primary-text", "text-left"], [1, "text-2xl", "text-center", "mt-5", "font-semibold"], ["href", "http://globalfoodpartners.org/", "target", "_blank", 1, "text-sm", "font-bold", "leading-relaxed", "inline-block", "mr-4", "py-2", "whitespace-nowrap", "uppercase"], ["alt", "Logo", "src", "../assets/wp/rectangulo letra negra fondo trasparente (1) (1).png", "width", "300"], [1, "mt-5", "mb-4", "primary-text", "text-left"], ["href", "#"], [3, "value"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "WelfareProgress is an initiative by Global Food Partners, supported by leading animal advocacy organisations. WelfareProgress is a tool for food businesses to report progress against their cage-free egg commitments. Multiple stakeholders use this platform to evaluate corporate progress on this topic.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-card-title", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "View Cage-free Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AppComponent_mat_option_17_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Find Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "hr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-tab-group", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-tab", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "section", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "hr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h6", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Reduce your reporting burden");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " The focus of animal advocacy groups is quickly shifting from policy adoption to policy enforcement and accountability, with both local and global organisations nowlaunching questionnaires, surveys, trackers, and benchmarking tools to assess progress. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Food and hospitality companies around the world are proactively seeking to report and communicate their progress to these advocacy groups and other key stakeholders. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " WelfareProgress allows companies to publicly showcase their cage-free implementation progress on a single platform, and reduce the burden of filling out multiple questionnaires. We have got an agreement among key animal advocacy organisations to reference this platform in lieu of their individual progress surveys and questionnaires. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "hr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h6", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Increase transparency ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " With hundreds of food businesses around the world committing to go cage-free, it\u2019s now expected that companies report and disclose their progress on this issue. WelfareProgress helps companies demonstrate progress on their cage-free commitments through accurate, thorough and timely reporting, allowing them to provide credible information to investors, animal advocacy groups, suppliers and consumers. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-tab", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "section", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "hr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "h6", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " Who supports us ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "p", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Leading animal advocacy organisations endorse and support WelfareProgress. To make the reporting process more efficient and streamlined, they\u2019ve agreed to no longer circulate their individual cage-free egg progress surveys and questionnaires, and instead reference this platform for all cage-free related progress information. We\u2019ll continue engaging with these and other stakeholders to ensure ongoing alignment around cage-free reporting. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " These organisations include: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " -logos (THL, MFA, Sinergia, AE, Alianima, Forum) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "mat-tab", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "section", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "hr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "h3", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " Who We Are ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "p", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " Global Food Partners is a multinational consulting firm that works with businesses todevelop, implement and report progress on high animal welfare and responsible sourcing policies to improve their profitability and sustainability. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "p", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " Our team has a combined 50+ years of corporate and on-farm experience developing and executing animal welfare policies and production practices, with a focus on cage-free eggs. We\u2019ve worked with food industry leaders, governments and egg industries globally, including across Latin America and Asia, to transition to and maintain high welfare cage-free supply chains and production systems. Having worked extensively with animal advocacy organisations, we know the value of transparent communication of progress to mitigate reputational risks ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "mat-tab", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "section", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "hr", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "h3", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " Commitment Checklist ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "p", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, " Does your cage-free egg commitment meet stakeholder expectations? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "ul", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "li", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, " Clearly states that we will source exclusively cage-free egg throughout supplychain ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Covers all eggs in my supply chain, including shell, egg products (liquid, powder, etc.), and food products manufactured by a 3rd party (e.g. pastries)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "States a deadline \u2013 the date by which my entire supply chain will be cage-free");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Covers our entire supply chain, including all brands and franchises ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Includes a commitment to translate the policy into key local languages");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "h4", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Includes a commitment to annual public on progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Frequently Asked Questions");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "mat-accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, " 1. Why is GFP running welfareprogress.com ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "p", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Mitigating reputational risk is a key service we offer to our clients. Having worked extensively with animal advocacy organisations, we know the value of transparent communication of progress to mitigate reputational risks. The focus of animal advocacy groups is shifting quickly from policy adoption to policy enforcement and accountability, with global and local groups now launching questionnaires, surveys, trackers, and benchmarking tools.Filling out numerous cage-free egg progress surveys and questionnaires is overwhelming and time consuming for food businesses. It has become a never-ending task. While these surveys all seek to evaluate progress on the same initiative \u2013 cage-free eggs- they often use different metrics and cover different geographies. We\u2019ve received a lot of feedback from the food industry that there is a need for a more centralised and streamlined reporting process. In order to support our clients and the food industry as a whole, we\u2019ve taken this feedback and developed this platform, which aims to make this process more efficient and uniform.We hope this platform offers a solution to food businessesto efficiently demonstratetheir progress and mitigate reputation risk.Please reach out to us if we can help you with this reporting process.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, " 2. What benefits does this platform have for food businesses? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Reduce your reporting burden");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, " The focus of animal advocacy groups is quickly shifting from policy adoption to policy enforcement and accountability, with both local and global organisations nowlaunching questionnaires, surveys, trackers, and benchmarking tools to assess progress.Food and hospitality companies around the world are proactively seeking to report and communicate their progress to these advocacy groups and other key stakeholders. WelfareProgress allows companies to publicly showcase their cage-free implementation progress on a single platform, and reduce the burden of filling out multiple questionnaires. We have got an agreement among key animal advocacy organisations to reference this platform in lieu of their individual progress surveys and questionnaires. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "Increase transparency");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, " With hundreds of food businesses around the world committing to go cage-free, it\u2019s now expected that companies report and disclose their progress on this issue. WelfareProgress helps companies demonstrate progress on their cage-free commitments through accurate, thorough and timely reporting, allowing them to provide credible information to investors, animal advocacy groups, suppliers and consumers. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, " 3. What animal advocacy groups endorse this initiative? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "p", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Leading animal advocacy organisations endorse and support WelfareProgress. To make the reporting process more efficient and streamlined, they\u2019ve agreed to no longer circulate their individual cage-free egg progress surveys and questionnaires, and instead reference this platform for all cage-free related progress information. We\u2019ll continue engaging with these and other stakeholders to ensure ongoing alignment around cage-free reporting. These organisations include The Humane League, Mercy for Animals, Sinergia Animal, and Animal Equality. Organisations like Compassion in World Farming and FAIRR also support this platform and will use it as a reference for their scoring and benchmarking initiatives.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, " 4. What if I receive a request for reporting cage-free progress through a different questionnaire or platform? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "p", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Key animal advocacy organisations have agreed to use WelfareProgress in lieu of individual progress surveys and questionnaires. Please reach out to us if you receiverequests to report through a different system, and we will be happy to get in touch with that organization.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, " 5. How do I report my cage-free progress? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "p", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "You can report your cage-free implementation progress here (link it to \"report progress\" registration page).");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, " 6. What questions will I be asked? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "p", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "You can view the questions here [insert pdf questionnaire link] so that you can prepare your data in advance. Please note that this is just for your reference. You can report your progress here (link to \"report progress\" registration page).");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, " 7. What if I need help? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "p", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "We'd be happy to walk you through the reporting process and answer any questions you have. Please reach out to us at [help link] for assistance. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](158, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](159, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "section", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "h2", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "Who we are");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](168, "hr", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "h6", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, " Planning ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "p", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, " we help you develop your policy and sourcing criteria, and localised roadmaps to ensure you meet your cage-free targets and stakeholder expectations ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](174, "hr", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "h5", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, " Implementation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "p", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, " we work with you to implement your cage-free roadmaps, so you can meet your animal welfare targets in challenging Asianmarkets. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](180, "hr", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "h5", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, "Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "p", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](184, " we help youcommunicate andreport yourcommitments andprogress, and narrate your impact story to key stakeholders. This platform is one tool we\u2019ve developed to facilitate this. We also provide ongoing support for egg suppliers, risk management strategies, and regional monitoring. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](185, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "section", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "h2", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](191, "Who support us");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "h6", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](196, "img", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "p", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, " We believe that reporting on progress is an essential step to make sure cage-free policies are followed. We have been working with companies in Latin America and launched reports to share more about companies\u2019 progress in the region. We will be doing the same in Asia. We are happy to see a new platform that will centralize questionnaires and reporting from companies, so we decided to start sharing this new questionnaire with companies. We\u2019ll create regional reports using the public data available on ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "animalwelfare.org ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](201, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, " Carolina Galvani, CEO, Sinergia Animal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](203, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](204, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](205, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](206, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.periods);
          }
        },
        directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTab, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelTitle, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption],
        styles: [".mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.main-title[_ngcontent-%COMP%]{\n  margin-top: 60px;\n  text-align: center;\n  color: rgb(51, 51, 51);\n  font-weight: 900;\n  font-size: 36px;\n  padding: 15px 0;\n}\nmat-panel-title[_ngcontent-%COMP%]{\n  font-weight: 500;\n  color: #333;\n}\n.carouselOne[_ngcontent-%COMP%]{\n  \n  \n\n\n}\n.ans[_ngcontent-%COMP%]{\n  font-size: 16px;\n  color: #666;\n  text-align: justify;\n  line-height: 1.6;\n  padding: 0 30px;\n}\n.report[_ngcontent-%COMP%]{\n  padding: 80px;\n}\n.ans-head[_ngcontent-%COMP%]{\n  margin: 10px 0 5px 0;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*='mat-elevation-z']) {\n  box-shadow: none;\n}\n.company[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  .mat-form-field-appearance-outline .mat-select-arrow-wrapper {\n  transform: translateY(0) !important;\n}\n  .mat-form-field-infix {\n  border-top: .3em solid transparent !important;\n}\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #61C9A8;\n}\n.heading1[_ngcontent-%COMP%]{\n  font-weight: 600;\n  font-size: 2.75rem;\n  text-align: center;\n}\n.heading2[_ngcontent-%COMP%]{\n  font-weight: 600;\n  font-size: 2.75rem;\n}\n.support-title[_ngcontent-%COMP%]{\n  text-indent: 50px;\n  padding-bottom: 15px;\n  text-align: justify;\n  font-weight: 400;\n  font-size: 1.5rem;\n}\nbutton[_ngcontent-%COMP%]{\n  border-radius: 0%;\n  outline: none;\n  width: 30%;\n  color: white;\n  font-weight: 400;\n  background-color: #61C9A8;\n  height: 45px;\n  margin-bottom: 18px;\n}\n  .mat-form-field-outline-start,   .mat-form-field-outline-end {\n    border-radius: 0px !important;\n}\nhr[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  width: 90%;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #61C9A8;\n  border: 0 none;\n}\n.carousel-hr[_ngcontent-%COMP%]{\n    width: 70px;\n    height: 4px;\n    margin-left: 0;\n    margin-right: 0;\n    background-color: #61C9A8;\n    border: 0 none;\n    text-align: left;\n}\n.support-hr[_ngcontent-%COMP%]{\n  width: 50px;\n  height: 4px;\n  margin-left: 0;\n  margin-right: 0;\n  background-color: #61C9A8;\n  border: 0 none;\n  text-align: left;\n}\n.section1-hr[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n.card-section[_ngcontent-%COMP%]{\n  padding:0 34px;\n}\n.logo-size[_ngcontent-%COMP%]{\n  font-size: 50px;\n}\n  .mat-card{\n  margin: 0 20px;\n  border:none !important;\n  transition: none !important;\n  box-shadow: none !important;\n}\n.reports[_ngcontent-%COMP%]{\n  padding: 10px 80px;\n}\n.period[_ngcontent-%COMP%]{\n  width: 70%;\n}\n.slide-container[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n}\n.centered[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.img-center[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 86%;\n  height: 500px;\n}\n.image[_ngcontent-%COMP%]:after {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  content:'\\A';\n  position:absolute;\n  width:86%;\n  height:100%;\n  top:0; left:7%;\n  background:rgba(0,0,0,0.6);\n  opacity:0;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  opacity:1;\n}\n  .owl-carousel .owl-item img{\n  display: block;\n  width: 50%;\n}\n.containerrr[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display : flex;\n  flex-direction : row;\n\n  }\n.carousel-main[_ngcontent-%COMP%]{\n  margin-top: 100px;\n}\n.support-logos[_ngcontent-%COMP%]{\n  padding: 0 80px 80px;\n}\n.checklist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: url('check.png') no-repeat left center;\n  padding: 5px 10px 5px 50px;\n  list-style: none;\n  margin-top: 15px;\n  vertical-align: middle;\n}\n  .owl-theme .owl-dots .owl-dot span {\n  width: 100px;\n  height: auto;\n  font-size: 16px;\n  margin: 5px 7px;\n  background: #e3fffa;\n  display: block;\n  transition: opacity .2s ease;\n  border-radius: 4px;\n  position: relative;\n}\n  .owl-theme .owl-dots .owl-dot.active span, .owl-theme[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  background: #61C9A8;\n}\n.test1[_ngcontent-%COMP%] {\n  width:100%;\n  background-position: center;\n  height: 600px;\n  background-size: cover;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('slide1.jpg');\n  position: relative;\n}\n.test2[_ngcontent-%COMP%] {\n  width:100%;\n  height: 600px;\n  background-size: cover;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('slide2.jpg');\n  position: relative;\n}\n.test3[_ngcontent-%COMP%] {\n  width:100%;\n  height: 600px;\n  background-size: cover;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('slide3.jpg');\n  position: relative;\n}\n.test1[_ngcontent-%COMP%]   .p[_ngcontent-%COMP%], .test2[_ngcontent-%COMP%]   .p[_ngcontent-%COMP%], .test3[_ngcontent-%COMP%]   .p[_ngcontent-%COMP%] {\n  color: #fff;\n  position: absolute;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsdURBQXVEO0VBQ3ZELGtCQUFrQjs7O0FBR3BCO0FBR0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7Ozs7Ozs7Ozs7Ozs7RUFhRTtBQUVEO0VBQ0MsbUNBQW1DO0FBQ3JDO0FBSUE7RUFDRSw2Q0FBNkM7QUFDL0M7QUFHQTtFQUNFLGNBQWM7QUFDaEI7QUFLQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBRUE7O0lBRUksNkJBQTZCO0FBQ2pDO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFHQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFLQTtFQUNFLFVBQVU7QUFDWjtBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQztBQUdBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7QUFDZjtBQUdBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsV0FBVztFQUNYLEtBQUssRUFBRSxPQUFPO0VBQ2QsMEJBQTBCO0VBQzFCLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLFNBQVM7QUFDWDtBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjtBQUdBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjs7RUFFcEI7QUFHRjtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBTUE7RUFDRSxrREFBZ0U7RUFDaEUsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBSUE7RUFDRSxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkZBQTJHO0VBQzNHLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkZBQTJHO0VBQzNHLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkZBQTJHO0VBQzNHLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2IiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5tYWluLXRpdGxle1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuXG5tYXQtcGFuZWwtdGl0bGV7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uY2Fyb3VzZWxPbmV7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltZy9zbGlkZTEuanBnJyk7ICovXG4gIC8qIG9wYWNpdHk6IDAuNTsgKi9cblxuXG59XG5cblxuLmFuc3tcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzY2NjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgcGFkZGluZzogMCAzMHB4O1xufVxuXG4ucmVwb3J0e1xuICBwYWRkaW5nOiA4MHB4O1xufVxuXG4uYW5zLWhlYWR7XG4gIG1hcmdpbjogMTBweCAwIDVweCAwO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNvbXBhbnkge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMxYzg3Yzk7XG59XG4gKi9cblxuIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtc2VsZWN0LWFycm93LXdyYXBwZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgIWltcG9ydGFudDtcbn1cblxuXG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBib3JkZXItdG9wOiAuM2VtIHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBjb2xvcjogIzYxQzlBODtcbn1cblxuXG5cblxuLmhlYWRpbmcxe1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIuNzVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRpbmcye1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIuNzVyZW07XG59XG5cbi5zdXBwb3J0LXRpdGxle1xuICB0ZXh0LWluZGVudDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5cbmJ1dHRvbntcbiAgYm9yZGVyLXJhZGl1czogMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAzMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxQzlBODtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQsXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbn1cblxuaHIge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxQzlBODtcbiAgYm9yZGVyOiAwIG5vbmU7XG59XG5cbi5jYXJvdXNlbC1ocntcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxQzlBODtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5cbi5zdXBwb3J0LWhye1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MUM5QTg7XG4gIGJvcmRlcjogMCBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2VjdGlvbjEtaHIge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5jYXJkLXNlY3Rpb257XG4gIHBhZGRpbmc6MCAzNHB4O1xufVxuXG4ubG9nby1zaXple1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWNhcmR7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnJlcG9ydHN7XG4gIHBhZGRpbmc6IDEwcHggODBweDtcbn1cblxuXG5cblxuLnBlcmlvZHtcbiAgd2lkdGg6IDcwJTtcbn1cblxuXG5cbi5zbGlkZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2VudGVyZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5cbi5pbWctY2VudGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA4NiU7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cblxuLmltYWdlOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGNvbnRlbnQ6J1xcQSc7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB3aWR0aDo4NiU7XG4gIGhlaWdodDoxMDAlO1xuICB0b3A6MDsgbGVmdDo3JTtcbiAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNik7XG4gIG9wYWNpdHk6MDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIG9wYWNpdHk6MTtcbn1cblxuOjpuZy1kZWVwIC5vd2wtY2Fyb3VzZWwgLm93bC1pdGVtIGltZ3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG59XG5cblxuLmNvbnRhaW5lcnJyIC5ib3gge1xuICBkaXNwbGF5IDogZmxleDtcbiAgZmxleC1kaXJlY3Rpb24gOiByb3c7XG5cbiAgfVxuXG5cbi5jYXJvdXNlbC1tYWlue1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLnN1cHBvcnQtbG9nb3N7XG4gIHBhZGRpbmc6IDAgODBweCA4MHB4O1xufVxuXG5cblxuXG5cbi5jaGVja2xpc3QgbGkge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9pbWcvY2hlY2sucG5nJykgbm8tcmVwZWF0IGxlZnQgY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggNTBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuOjpuZy1kZWVwIC5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90IHNwYW4ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDVweCA3cHg7XG4gIGJhY2tncm91bmQ6ICNlM2ZmZmE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuOjpuZy1kZWVwIC5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSBzcGFuLCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdDpob3ZlciBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzYxQzlBODtcbn1cblxuXG5cbi50ZXN0MSB7XG4gIHdpZHRoOjEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpICksIHVybChcIi4uL2Fzc2V0cy9pbWcvc2xpZGUxLmpwZ1wiKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGVzdDIge1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6IDYwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkgKSwgdXJsKFwiLi4vYXNzZXRzL2ltZy9zbGlkZTIuanBnXCIpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50ZXN0MyB7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDogNjAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSApLCB1cmwoXCIuLi9hc3NldHMvaW1nL3NsaWRlMy5qcGdcIik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRlc3QxIC5wLCAudGVzdDIgLnAsIC50ZXN0MyAucCB7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"]
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      5835);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      1841);
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout */
      5830);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      5668);
      /* harmony import */


      var _app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../app/material-module */
      8696);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__.CarouselModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexLayoutModule, _app_material_module__WEBPACK_IMPORTED_MODULE_3__.DemoMaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__.NavComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__.CarouselModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexLayoutModule, _app_material_module__WEBPACK_IMPORTED_MODULE_3__.DemoMaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule]
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
        decls: 13,
        vars: 0,
        consts: [[1, "relative", "pt-8", "pb-6"], [1, "container", "mx-auto", "px-8"], [1, "flex", "flex-wrap", "text-center", "lg:text-left", "px-5", "py-10"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "text-3xl", "font-semibold"], [1, "mt-4", "mb-2", "text-blueGray-600"], ["href", "https://globalfoodpartners.com/", "target", "_blank", 1, "text-blueGray-500", "hover:text-blueGray-800"], [1, "mt-4", "ml-1", "lg:mb-0", "mb-6"], ["href", "https://www.linkedin.com/company/36019661/admin/", "target", "_blank", "onclick", "window.open('https://www.linkedin.com/company/36019661/admin/', '_blank'); return false;", 1, "bg-blueGray-200", "text-lightBlue-400"], ["width", "18", "src", "../../assets/img/GFP-icon-linkedin.png"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Follow Us ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Copyright \xA9 2021 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Global Food Partners ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
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
        decls: 41,
        vars: 0,
        consts: [[1, "text-primary-color", "top-0", "absolute", "z-50", "w-full", "flex-wrap", "items-center", "justify-between", "navbar-expand-lg", "nav"], [1, "menu-icon"], [1, "fas", "fa-bars"], [1, "py-3", "text-blueGray-500", "text-2xl"], ["href", "http://globalfoodpartners.org/", "target", "_blank"], [1, "nav-items"], ["href", "http://globalfoodpartners.org/", "target", "_blank", 1, "text-sm", "font-bold", "leading-relaxed", "inline-block", "mr-4", "py-2", "whitespace-nowrap", "uppercase"], ["alt", "Logo", "src", "../../../assets/img/newlogo.png", "width", "150", "height", "70"], ["action", "#"], [1, "nav", "navbar-nav", "navbar-right"], [1, "dropdown"], ["data-toggle", "dropdown", 1, "btn", "btn-signin", "text-blueGray-500", "text-md", "dropdown-toggle"], [1, "caret"], ["role", "menu", 1, "dropdown-menu", "dropdown-lr", "animated", "slideInRight"], [1, "col-lg-12", "mt-4"], ["id", "ajax-login-form", "action", "", "method", "post", "role", "form", "autocomplete", "off"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", "id", "username", "tabindex", "1", "placeholder", "Username", "value", "", "autocomplete", "off", 1, "form-control"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "tabindex", "2", "placeholder", "Password", "autocomplete", "off", 1, "form-control"], [1, "row"], [1, "col-xs-6", "pull-left", "button-lc"], ["type", "submit", "name", "login-submit", "id", "login-submit", "value", "Sign In", 1, "form-control", "btn", "btn-success1"], [1, "col-xs-6", "pull-right"], ["href", "https://app.welfareprogress.com/#/authentication/signup", "target", "_blank", "type", "submit", "name", "create-submit", "id", "create-submit", "value", "Create Account", 1, "form-control", "btn", "btn-success2"], [1, "col-lg-12"], [1, "text-center"], ["href", "http://phpoll.com/recover", "tabindex", "5", 1, "forgot-password"]],
        template: function NavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " WelfareProgress by");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Report cage-free progress ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Forgot Password?");

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
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
        styles: ["nav[_ngcontent-%COMP%]{\n  position: fixed;\n  box-shadow: 0px 1px 10px #CCC;\n  background: #fff;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  height: 60px;\n  padding: 0 110px 0 110px;\n}\n\nnav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]{\n  display: flex;\n  flex: 1;\n}\n\nnav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n  list-style: none;\n  padding: 0 8px;\n}\n\n.nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{\n    background-color: #61C9A8;\n    color: white;\n}\n\n.btn-success1[_ngcontent-%COMP%] {\n    color: #fff;\n    font-weight: bold;\n    background-color: #61C9A8;\n    border: 1px solid #61C9A8;\n}\n\n.btn-success1[_ngcontent-%COMP%]:hover{\n    background-color: #8dddc4;\n}\n\n.btn-success2[_ngcontent-%COMP%] {\n    color: #61C9A8;\n    font-weight: bold;\n    background-color: #e8fff8;\n    \n}\n\n[type='text'][_ngcontent-%COMP%], [type='password'][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n    background-color: #fff;\n    border-color: #c4c4c4;\n    font-size: 1.5rem;\n}\n\n.btn-signin[_ngcontent-%COMP%], .btn-signin[_ngcontent-%COMP%]:active {\n    padding: 0 20px;\n    color: back;\n    \n    \n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMEZBQTBGOztBQUUxRjtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87QUFDVDs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFHQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsdUNBQXVDO0lBQ3ZDLG1DQUFtQztBQUN2Qzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4zLjQvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyk7ICovXG5cbm5hdntcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggI0NDQztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMCAxMTBweCAwIDExMHB4O1xufVxuXG5uYXYgLm5hdi1pdGVtc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cbm5hdiAubmF2LWl0ZW1zIGxpe1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwIDhweDtcbn1cblxuLm5hdiAub3Blbj5hLCAubmF2IC5vcGVuPmE6Zm9jdXMsIC5uYXYgLm9wZW4+YTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFDOUE4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4uYnRuLXN1Y2Nlc3MxIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFDOUE4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MUM5QTg7XG59XG4uYnRuLXN1Y2Nlc3MxOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZGRkYzQ7XG59XG5cbi5idG4tc3VjY2VzczIge1xuICAgIGNvbG9yOiAjNjFDOUE4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGZmZjg7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2ZjZmRmZDsgKi9cbn1cblxuW3R5cGU9J3RleHQnXSwgW3R5cGU9J3Bhc3N3b3JkJ10sdGV4dGFyZWEsIHNlbGVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICNjNGM0YzQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cblxuLmJ0bi1zaWduaW4sIC5idG4tc2lnbmluOmFjdGl2ZSB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGNvbG9yOiBiYWNrO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMzIsIDMyKTsgKi9cbiAgICAvKiBib3JkZXItY29sb3I6IHJnYigzMiwgMzIsIDMyKTsgKi9cbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuIl19 */"]
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