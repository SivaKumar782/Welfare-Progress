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

      function AppComponent_mat_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var period_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", period_r1.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", period_r1.viewValue, " ");
        }
      } // import 'bootstrap';


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
          value: function ngOnInit() {
            $('[data-toggle="tooltip"]').tooltip(); // (<any>$('[data-toggle="tooltip"]')).tooltip();
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
        decls: 228,
        vars: 1,
        consts: [["fxLayout", "row wrap", "fxLayoutAlign", "space-around center", "fxLayoutGap", "30px", 1, "pt-100", "mt-5", "pr-30"], ["fxFlex", "38%", "fxFlex.md", "38%", "fxFlex.sm", "90%", "fxFlex.xs", "95%", 1, "px-6"], [1, "primary-text"], ["fxFlex", "30%", "fxFlex.md", "30%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], [1, "coming-soon"], [1, "heading1", "soon"], [1, "soon"], ["floatLabel", "never", "appearance", "outline", 1, "company"], ["matInput", "", "placeholder", "Enter company name", "disabled", ""], ["floatLabel", "never", "appearance", "outline", 1, "period"], ["placeholder", "Period", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "disabled", ""], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "mt-12"], ["fxFlex", "83%", "fxFlex.md", "83%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], [1, "heading2"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "mt-12"], ["src", "../assets/wp/Animal Equality Square Logo (3).jpg", "alt", "THL", "height", "150px", "width", "150px"], ["src", "../assets/wp/MercyforAnimals_PrimaryLockup_RGB (2).png", "alt", "THL", "height", "150px", "width", "150px"], ["src", "../assets/wp/SA-h-black.png", "alt", "THL", "height", "150px", "width", "150px"], ["src", "../assets/wp/thl-mended-heart-logo@2x.jpg", "alt", "THL", "height", "150px", "width", "150px"], [1, "section1-hr"], ["mat-align-tabs", "center", 1, "pt-16", "mb-5"], ["label", "Why report"], ["fxLayout", "row wrap", "fxLayoutAlign", "end center", "fxLayoutGap", "56px", 1, "py-6"], ["fxFlex", "42.3%", "fxFlex.md", "43.5%", "fxFlex.sm", "90%", "fxFlex.xs", "95%", 1, "px-6"], ["align", "left", 1, "carousel-hr"], [1, "text-2xl", "font-bold", "pt-4", "leading-relaxed"], [1, "mt-2", "mb-4", "primary-text", "pt-4"], [1, "mt-2", "mb-4", "primary-text"], ["fxFlex", "46.5%", "fxFlex.md", "46.5%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], [1, "py-6"], ["src", "../assets/img/20210709_brown layers on top system.jpg"], ["label", "About Global Food Partners"], [1, "text-2xl", "pt-4", "font-bold", "mb-2", "font-bold", "leading-normal"], [1, "flex", "mt-4", "flex-wrap", "justify-center"], [1, "mb-4", "primary-text", "leading-relaxed"], ["src", "../assets/img/20210709_IMG_20210524_145900.jpg"], ["label", "Commitment checklist"], [1, "text-2xl", "font-bold", "mt-4", "mb-2", "leading-normal"], [1, "mt-4", "px-4", "text-lg", "text-blueGray-600", "leading-relaxed"], [1, "checklist", "mt-6"], [1, "check"], ["src", "../assets/img/20210709_eggs.jpg"], [1, "top-100"], [1, "main-title", "mt-10"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["fxFlex", "85%", "fxFlex.md", "85%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], [1, "mb-16"], [1, "ans", "mt-2", "mb-4", "primary-text"], [1, "ans", "mt-2", "primary-text"], ["href", "mailto:welfareprogress@globalfoodpartners.com"], [1, "ans"], [1, "ans-head", "mt-2", "mb-4", "primary-text"], [1, "ans-head", "mt-2", "primary-text"], ["href", "https://app.welfareprogress.com/#/authentication/signup", "target", "_blank"], ["target", "_blank", "href", "../assets/wp/Questionnaire_EN.pdf"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-around start", 1, "mt-8"], ["fxFlex", "34%", "fxFlex.md", "34%", "fxFlex.sm", "90%", "fxFlex.xs", "95%", 1, "px-6"], [1, "text-2xl", "text-center", "font-semibold"], ["href", "http://globalfoodpartners.org/", "target", "_blank", 1, "text-sm", "font-bold", "leading-relaxed", "inline-block", "mr-4", "py-2", "whitespace-nowrap", "uppercase"], ["alt", "Logo", "src", "../assets/wp/Animal Equality Square Logo (3).jpg", "width", "300"], [1, "mb-4", "primary-text", "text-left"], [1, "ceo"], ["fxFlex", "34%", "fxFlex.md", "34%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], ["alt", "Logo", "src", "../assets/wp/MercyforAnimals_PrimaryLockup_RGB (2).png", "width", "300"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-around start", 1, "mt-8", "mb-16"], ["alt", "Logo", "src", "../assets/wp/SA-h-black.png", "width", "300"], [1, "mb-4", "primary-text", "text-left", "pr-12"], ["href", "http://welfareprogress.com", "target", "_blank"], ["alt", "Logo", "src", "../assets/wp/thl-mended-heart-logo@2x.jpg", "width", "300"], [3, "value"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-content", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "WelfareProgress is an initiative by Global Food Partners, endorsed by leading animal advocacy organisations. WelfareProgress is a tool for food businesses to report progress against their cage-free egg commitments. Multiple stakeholders use this platform to evaluate corporate progress on this topic.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card-title", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Coming soon");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-card-title", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "View cage-free progress ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AppComponent_mat_option_16_Template, 2, 2, "mat-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Find report");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-card-title", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "An initiative endorsed by");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "hr", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-tab-group", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-tab", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "hr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "h6", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Reduce your reporting burden");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " The focus of animal advocacy groups is quickly shifting from policy adoption to policy enforcement and accountability, with both local and global organisations now launching questionnaires, surveys, trackers, and benchmarking tools to assess progress. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Food and hospitality companies around the world are proactively seeking to report and communicate their progress to these advocacy groups and other key stakeholders. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " WelfareProgress allows companies to publicly showcase their cage-free implementation progress on a single platform, and reduce the burden of filling out multiple questionnaires. We have got an agreement from key animal advocacy organisations to accept cage-free egg progress reporting from WelfareProgress as a preferred alternative to their individual cage-free egg progress surveys and questionnaires. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "hr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "h6", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Increase transparency ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " With hundreds of food businesses around the world committing to go cage-free, it\u2019s now expected that companies report and disclose their progress on this issue. WelfareProgress helps companies demonstrate progress on their cage-free commitments through accurate, thorough and timely reporting, allowing them to provide credible information to investors, animal advocacy groups, suppliers and consumers. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-tab", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "hr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "h3", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, " Who we are ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "p", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " Global Food Partners is a multinational consulting firm that works with businesses to develop, implement and report progress on high animal welfare and responsible sourcing policies to improve their profitability and sustainability. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, " Our team has a combined 50+ years of corporate and on-farm experience developing and executing animal welfare policies and production practices, with a focus on cage-free eggs. We\u2019ve worked with food industry leaders, governments and egg industries globally, including across Latin America and Asia, to transition to and maintain high welfare cage-free supply chains and production systems. Having worked extensively with animal advocacy organisations, we know the value of transparent communication of progress to mitigate reputational risks. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "mat-tab", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "hr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "h3", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, " Commitment checklist ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "p", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, " Does your cage-free egg commitment meet stakeholder expectations? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "ul", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "li", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, " Clearly states that you will source exclusively cage-free eggs throughout supply chain ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Covers all eggs in your supply chain, including shell, egg products (liquid, powder, etc.), and food products manufactured by a 3rd party (e.g. pastries)");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "States a deadline \u2013 the date by which your entire supply chain will be cage-free");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Covers your entire supply chain, including all brands and franchises ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Includes a commitment to translate the policy into key local languages");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Includes a commitment to annual public on progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "hr", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Frequently Asked Questions");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "mat-accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, " 1. Why is GFP running welfareprogress.com? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "p", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Mitigating reputational risk is a key service we offer to our clients. Having worked extensively with animal advocacy organisations, we know the value of transparent communication of progress to mitigate reputational risks. The focus of animal advocacy groups is shifting quickly from policy adoption to policy enforcement and accountability, with global and local groups now launching questionnaires, surveys, trackers, and benchmarking tools. Filling out numerous cage-free egg progress surveys and questionnaires is overwhelming and time consuming for food businesses. It has become a never-ending task. While these surveys all seek to evaluate progress on the same initiative \u2013 cage-free eggs- they often use different metrics and cover different geographies. We\u2019ve received a lot of feedback from the food industry that there is a need for a more centralised and streamlined reporting process.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, " In order to support our clients and the food industry as a whole, we\u2019ve taken this feedback and developed this platform, which aims to make this process more efficient and uniform. We hope this platform offers a solution to food businesses to efficiently demonstrate their progress and mitigate reputation risk. Please ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "a", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "reach out to us");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, " if we can help you with this reporting process. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, " 2. What benefits does this platform have for food businesses? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Reduce your reporting burden");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "p", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, " The focus of animal advocacy groups is quickly shifting from policy adoption to policy enforcement and accountability, with both local and global organisations now launching questionnaires, surveys, trackers, and benchmarking tools to assess progress. Food and hospitality companies around the world are proactively seeking to report and communicate their progress to these advocacy groups and other key stakeholders.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "p", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, " WelfareProgress allows companies to publicly showcase their cage-free implementation progress on a single platform, and reduce the burden of filling out multiple questionnaires. We have got an agreement among key animal advocacy organisations to accept cage-free egg progress reporting from WelfareProgress as a preferred alternative to their individual progress surveys and questionnaires.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "Increase transparency");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, " With hundreds of food businesses around the world committing to go cage-free, it\u2019s now expected that companies report and disclose their progress on this issue. WelfareProgress helps companies demonstrate progress on their cage-free commitments through accurate, thorough and timely reporting, allowing them to provide credible information to investors, animal advocacy groups, suppliers and consumers.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, " 3. What animal advocacy groups endorse this initiative? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "Leading animal advocacy organisations endorse and support WelfareProgress. To make the reporting process more efficient and streamlined, they\u2019ve agreed to accept cage-free egg progress reporting from WelfareProgress as a preferred alternative to their individual cage-free egg progress surveys and questionnaires. We\u2019ll continue engaging with these and other stakeholders to ensure ongoing alignment around cage-free reporting.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, " 4. What if I receive a request for reporting cage-free progress through a different questionnaire or platform? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Key animal advocacy organisations have agreed to accept cage-free egg progress reporting from WelfareProgress as a preferred alternative to their individual progress surveys and questionnaires. Please ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "a", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "reach out to us");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, " if you receive requests to report through a different system, and we will be happy to get in touch with that organisation.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, " 5. How do I report my cage-free progress? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "You can report your cage-free implementation progress ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "here");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, " 6. What questions will I be asked? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "You can view the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "a", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "questions here");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, " so that you can prepare your data in advance. Please note that this is just for your reference. You can report your progress ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "a", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "here");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, " 7. What if I need help? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "p", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](171, "We'd be happy to walk you through the reporting process and answer any questions you have. Please reach out to us at ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "a", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "welfareprogress@globalfoodpartners.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, " for assistance. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](175, "hr", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, "An initiative endorsed by");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "h6", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](182, "img", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "p", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "q");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, "At a time when transparency is more important than ever to consumers, WelfareProgress.com provides a centralized place for people to see how their favorite companies are measuring up on their promises to get hens out of cages. Animal Equality plans to work with over a hundred companies worldwide to start publishing their progress on the platform.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](186, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "Katie Arth, International Director of Corporate Outreach, Animal Equality");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "h6", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](192, "img", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "p", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "q");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, "Mercy For Animals supports the comprehensive, uniform cage-free egg progress reporting enabled by WelfareProgress.com. As we encourage transparency on corporate animal welfare goals through initiatives like Monitor de Iniciativas Corporativas por los Animales, this tool streamlines reporting expectations and formats to help the world transition away from the caging of laying hens.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](196, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, "Zo\xEB Sigle, Global Corporate Engagement Manager, Mercy For Animals ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "h6", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](203, "img", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "p", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "q");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, "We believe that reporting on progress is an essential step to make sure cage-free policies are followed. We have been working with companies in Latin America and launched reports to share more about companies\u2019 progress in the region. We will be doing the same in Asia. We are happy to see a new platform that will centralize questionnaires and reporting from companies, so we decided to start sharing this new questionnaire with companies. We\u2019ll create regional reports using the public data available on ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](208, "welfareprogress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](210, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](212, "Carolina Galvani, CEO, Sinergia Animal");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "h6", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](216, "img", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "p", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "q");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219, "The Humane League invites corporations to utilize ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "a", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, "WelfareProgress.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, " to report progress on their animal welfare goals. The platform is designed in a way to boost convenience and efficiency for all stakeholders alike.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](223, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "span", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](225, "Aaron Ross, Vice President of Policy and Strategy, The Humane League.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](226, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](227, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.periods);
          }
        },
        directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTab, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelTitle, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption],
        styles: [".mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.main-title[_ngcontent-%COMP%]{\n  \n  text-align: center;\n  color: rgb(51, 51, 51);\n  font-weight: 900;\n  font-size: 36px;\n  padding: 15px 0;\n}\nmat-panel-title[_ngcontent-%COMP%]{\n  font-size: 19px;\n  font-weight: 500;\n  color: #333;\n}\n.carouselOne[_ngcontent-%COMP%]{\n  \n  \n\n\n}\n.ans[_ngcontent-%COMP%]{\n  color: #666;\n  text-align: justify;\n  padding: 0 30px;\n}\n\n.ans-head[_ngcontent-%COMP%]{\n  margin: 10px 0 5px 0;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*='mat-elevation-z']) {\n  box-shadow: none;\n}\n  .mat-expansion-panel-body{\n  padding: 0 24px!important;\n}\n.company[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  .mat-form-field-appearance-outline .mat-select-arrow-wrapper {\n  transform: translateY(0) !important;\n}\n  .mat-form-field-infix {\n  border-top: .3em solid transparent !important;\n}\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #61C9A8;\n}\n.soon[_ngcontent-%COMP%]{\n  color: grey;\n  cursor: not-allowed;\n  text-align: left;\n}\n.coming-soon[_ngcontent-%COMP%]{\n  padding-top: 12px;\n  color: grey;\n  font-size: 16px;\n  float: right;\n  font-weight: 2rem;\n}\n.heading1[_ngcontent-%COMP%]{\n  color: #333;\n  font-weight: 600;\n  font-size: 2.75rem;\n  text-align: left;\n}\n.heading2[_ngcontent-%COMP%]{\n  font-weight: 600;\n  font-size: 2.75rem;\n}\n.support-title[_ngcontent-%COMP%]{\n  text-indent: 50px;\n  padding-bottom: 15px;\n  text-align: justify;\n  font-weight: 400;\n  font-size: 1.5rem;\n}\n.ceo[_ngcontent-%COMP%]{\n  \n  text-align: left;\n  font-weight: 500;\n}\na[_ngcontent-%COMP%]{\n  color: #61C9A8;\n}\nbutton[_ngcontent-%COMP%]{\n  border-radius: 0%;\n  outline: none;\n  width: 30%;\n  color: white;\n  font-weight: 400;\n  background-color: #61C9A8;\n  height: 45px;\n  margin-bottom: 18px;\n}\n  .mat-form-field-outline-start,   .mat-form-field-outline-end {\n    border-radius: 0px !important;\n}\nhr[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 90%;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #61C9A8;\n  border: 0 none;\n}\n.carousel-hr[_ngcontent-%COMP%]{\n    width: 70px;\n    height: 4px;\n    margin-left: 0;\n    margin-right: 0;\n    background-color: #61C9A8;\n    border: 0 none;\n    text-align: left;\n}\n.support-hr[_ngcontent-%COMP%]{\n  width: 50px;\n  height: 4px;\n  margin-left: 0;\n  margin-right: 0;\n  background-color: #61C9A8;\n  border: 0 none;\n  text-align: left;\n}\n.section1-hr[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.logo-size[_ngcontent-%COMP%]{\n  font-size: 50px;\n}\n  .mat-card{\n  \n  border:none !important;\n  transition: none !important;\n  box-shadow: none !important;\n}\n@media screen and (min-width:1166px) {\n  .card-section[_ngcontent-%COMP%]{ padding-right:60px;}\n}\n.period[_ngcontent-%COMP%]{\n  width: 70%;\n}\n.slide-container[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n}\n.centered[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.img-center[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 86%;\n  height: 500px;\n}\n.image[_ngcontent-%COMP%]:after {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  content:'\\A';\n  position:absolute;\n  width:86%;\n  height:100%;\n  top:0; left:7%;\n  background:rgba(0,0,0,0.6);\n  opacity:0;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  opacity:1;\n}\n  .owl-carousel .owl-item img{\n  display: block;\n  width: 50%;\n}\n.containerrr[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display : flex;\n  flex-direction : row;\n\n  }\n.carousel-main[_ngcontent-%COMP%]{\n  margin-top: 100px;\n}\n\n.checklist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: url('check.png') no-repeat left center;\n  padding: 5px 10px 5px 50px;\n  list-style: none;\n  margin-top: 5px;\n  vertical-align: middle;\n}\n  .owl-theme .owl-dots .owl-dot span {\n  width: 100px;\n  height: auto;\n  font-size: 16px;\n  margin: 5px 7px;\n  background: #e3fffa;\n  display: block;\n  transition: opacity .2s ease;\n  border-radius: 4px;\n  position: relative;\n}\n  .owl-theme .owl-dots .owl-dot.active span, .owl-theme[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  background: #61C9A8;\n}\n\n.mat-card-actions[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0;\n}\n.wrapper[_ngcontent-%COMP%] {\n  margin: 100px;\n}\nmat-expansion-panel-header[_ngcontent-%COMP%] {\n  height: 100% !important;\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsdURBQXVEO0VBQ3ZELGtCQUFrQjs7O0FBR3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQTs7R0FFRztBQUVIO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBSUE7Ozs7Ozs7Ozs7Ozs7RUFhRTtBQUVEO0VBQ0MsbUNBQW1DO0FBQ3JDO0FBSUE7RUFDRSw2Q0FBNkM7QUFDL0M7QUFHQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBRUE7O0lBRUksNkJBQTZCO0FBQ2pDO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFHQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBR0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiwyQkFBMkI7QUFDN0I7QUFHQTtFQUNFLGVBQWUsa0JBQWtCLENBQUM7QUFDcEM7QUFHQTtFQUNFLFVBQVU7QUFDWjtBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQztBQUdBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7QUFDZjtBQUdBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsV0FBVztFQUNYLEtBQUssRUFBRSxPQUFPO0VBQ2QsMEJBQTBCO0VBQzFCLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLFNBQVM7QUFDWDtBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjtBQUdBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjs7RUFFcEI7QUFHRjtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBOztHQUVHO0FBSUg7RUFDRSxrREFBZ0U7RUFDaEUsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBSUE7O0dBRUc7QUFFSDtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUdBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4ubWFpbi10aXRsZXtcbiAgLyogbWFyZ2luLXRvcDogNjBweDsgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDM2cHg7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cblxubWF0LXBhbmVsLXRpdGxle1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uY2Fyb3VzZWxPbmV7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltZy9zbGlkZTEuanBnJyk7ICovXG4gIC8qIG9wYWNpdHk6IDAuNTsgKi9cblxuXG59XG5cbi5hbnN7XG4gIGNvbG9yOiAjNjY2O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBwYWRkaW5nOiAwIDMwcHg7XG59XG5cbi8qIC5yZXBvcnR7XG4gIHBhZGRpbmc6IDgwcHg7XG59ICovXG5cbi5hbnMtaGVhZHtcbiAgbWFyZ2luOiAxMHB4IDAgNXB4IDA7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSkge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keXtcbiAgcGFkZGluZzogMCAyNHB4IWltcG9ydGFudDtcbn1cblxuLmNvbXBhbnkge1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG5cbi8qIGlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMWM4N2M5O1xufVxuICovXG5cbiA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LXNlbGVjdC1hcnJvdy13cmFwcGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApICFpbXBvcnRhbnQ7XG59XG5cblxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgYm9yZGVyLXRvcDogLjNlbSBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgY29sb3I6ICM2MUM5QTg7XG59XG5cbi5zb29ue1xuICBjb2xvcjogZ3JleTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvbWluZy1zb29ue1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXdlaWdodDogMnJlbTtcbn1cblxuLmhlYWRpbmcxe1xuICBjb2xvcjogIzMzMztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyLjc1cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaGVhZGluZzJ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMi43NXJlbTtcbn1cblxuLnN1cHBvcnQtdGl0bGV7XG4gIHRleHQtaW5kZW50OiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5jZW97XG4gIC8qIHBhZGRpbmctbGVmdDogMTJweDsgKi9cbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuYXtcbiAgY29sb3I6ICM2MUM5QTg7XG59XG5cbmJ1dHRvbntcbiAgYm9yZGVyLXJhZGl1czogMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAzMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxQzlBODtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQsXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbn1cblxuaHIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxQzlBODtcbiAgYm9yZGVyOiAwIG5vbmU7XG59XG5cbi5jYXJvdXNlbC1ocntcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxQzlBODtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5cbi5zdXBwb3J0LWhye1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MUM5QTg7XG4gIGJvcmRlcjogMCBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2VjdGlvbjEtaHIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG5cbi5sb2dvLXNpemV7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2FyZHtcbiAgLyogbWFyZ2luOiAwIDIwcHg7ICovXG4gIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTE2NnB4KSB7XG4gIC5jYXJkLXNlY3Rpb257IHBhZGRpbmctcmlnaHQ6NjBweDt9XG59XG5cblxuLnBlcmlvZHtcbiAgd2lkdGg6IDcwJTtcbn1cblxuXG5cbi5zbGlkZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2VudGVyZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5cbi5pbWctY2VudGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA4NiU7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cblxuLmltYWdlOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGNvbnRlbnQ6J1xcQSc7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB3aWR0aDo4NiU7XG4gIGhlaWdodDoxMDAlO1xuICB0b3A6MDsgbGVmdDo3JTtcbiAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNik7XG4gIG9wYWNpdHk6MDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIG9wYWNpdHk6MTtcbn1cblxuOjpuZy1kZWVwIC5vd2wtY2Fyb3VzZWwgLm93bC1pdGVtIGltZ3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG59XG5cblxuLmNvbnRhaW5lcnJyIC5ib3gge1xuICBkaXNwbGF5IDogZmxleDtcbiAgZmxleC1kaXJlY3Rpb24gOiByb3c7XG5cbiAgfVxuXG5cbi5jYXJvdXNlbC1tYWlue1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLyogLnN1cHBvcnQtbG9nb3N7XG4gIHBhZGRpbmc6IDAgOTBweDtcbn0gKi9cblxuXG5cbi5jaGVja2xpc3QgbGkge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9pbWcvY2hlY2sucG5nJykgbm8tcmVwZWF0IGxlZnQgY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggNTBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG46Om5nLWRlZXAgLm93bC10aGVtZSAub3dsLWRvdHMgLm93bC1kb3Qgc3BhbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogNXB4IDdweDtcbiAgYmFja2dyb3VuZDogI2UzZmZmYTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG46Om5nLWRlZXAgLm93bC10aGVtZSAub3dsLWRvdHMgLm93bC1kb3QuYWN0aXZlIHNwYW4sIC5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90OmhvdmVyIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjNjFDOUE4O1xufVxuXG5cblxuLyogLnRhYi1pbWd7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn0gKi9cblxuLm1hdC1jYXJkLWFjdGlvbnMsIC5tYXQtY2FyZC1zdWJ0aXRsZSwgLm1hdC1jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLndyYXBwZXIge1xuICBtYXJnaW46IDEwMHB4O1xufVxuXG5cbm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4iXX0= */"]
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
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      5618);

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
        decls: 15,
        vars: 0,
        consts: [[1, "relative", "pt-8", "pb-6"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["fxFlex", "85%", "fxFlex.md", "90%", "fxFlex.sm", "95%", "fxFlex.xs", "95%"], [1, "mx-auto"], [1, "flex", "flex-wrap", "text-center", "lg:text-left", "py-10"], [1, "w-full", "lg:w-6/12"], [1, "text-3xl", "font-semibold"], [1, "mt-4", "mb-2", "heading-color"], ["href", "https://globalfoodpartners.com/", "target", "_blank", 1, "text-heading-color", "hover:text-blueGray-800"], [1, "mt-4", "ml-1", "lg:mb-0", "mb-6"], ["href", "https://www.linkedin.com/company/36019661/admin/", "target", "_blank", "onclick", "window.open('https://www.linkedin.com/company/36019661/admin/', '_blank'); return false;", 1, "bg-blueGray-200", "heading-color"], ["width", "18", "src", "../../assets/img/GFP-icon-linkedin.png"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective],
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