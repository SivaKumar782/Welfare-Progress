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


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      5668);
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

      function AppComponent_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var period_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", period_r5.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", period_r5.viewValue, " ");
        }
      }

      function AppComponent_ng_template_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Who We Are ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Global Food Partners is a multinational consulting firm that works with businesses todevelop, implement and report progress on high animal welfare and responsible sourcing policies to improve their profitability and sustainability. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Our team has a combined 50+ years of corporate and on-farm experience developing and executing animal welfare policies and production practices, with a focus on cage-free eggs. We\u2019ve worked with food industry leaders, governments and egg industries globally, including across Latin America and Asia, to transition to and maintain high welfare cage-free supply chains and production systems. Having worked extensively with animal advocacy organisations, we know the value of transparent communication of progress to mitigate reputational risks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h6", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Reduce your reporting burden");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " The focus of animal advocacy groups is quickly shifting from policy adoption to policy enforcement and accountability, with both local and global organisations nowlaunching questionnaires, surveys, trackers, and benchmarking tools to assess progress. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Food and hospitality companies around the world are proactively seeking to report and communicate their progress to these advocacy groups and other key stakeholders. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " WelfareProgress allows companies to publicly showcase their cage-free implementation progress on a single platform, and reduce the burden of filling out multiple questionnaires. We have got an agreement among key animal advocacy organisations to reference this platform in lieu of their individual progress surveys and questionnaires. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h6", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Increase transparency ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " With hundreds of food businesses around the world committing to go cage-free, it\u2019s now expected that companies report and disclose their progress on this issue. WelfareProgress helps companies demonstrate progress on their cage-free commitments through accurate, thorough and timely reporting, allowing them to provide credible information to investors, animal advocacy groups, suppliers and consumers. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_ng_template_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Who supports us ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Leading animal advocacy organisations endorse and support WelfareProgress. To make the reporting process more efficient and streamlined, they\u2019ve agreed to no longer circulate their individual cage-free egg progress surveys and questionnaires, and instead reference this platform for all cage-free related progress information. We\u2019ll continue engaging with these and other stakeholders to ensure ongoing alignment around cage-free reporting. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " These organisations include: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " -logos (THL, MFA, Sinergia, AE, Alianima, Forum) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "blockquote", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "svg", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "polygon", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Organisations including Compassion in World Farming and FAIRR also support this platform and will use this as a reference for their scoring and benchmarking initiatives. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_ng_template_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Commitment checklist");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Does your cage-free egg commitment meet stakeholder expectations? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ul", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Clearly states that we will source exclusively cage-free egg throughout supplychain ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Covers all eggs in my supply chain, including shell, egg products (liquid, powder, etc.), and food products manufactured by a 3rd party (e.g. pastries)");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "States a deadline \u2013 the date by which my entire supply chain will be cage-free");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "li", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Covers our entire supply chain, including all brands and franchises ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Includes a commitment to translate the policy into key local languages");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "li", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "span", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "i", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Includes a commitment to annual public on progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
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
            autoplay: true,
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
        decls: 108,
        vars: 2,
        consts: [[1, "main"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "space-around center"], ["fxFlex", "45%", "fxFlex.sm", "100%"], [1, "heading"], [1, "reports"], ["floatLabel", "never", "appearance", "outline", 1, "company"], ["matInput", "", "placeholder", "Enter company name or part of it"], ["floatLabel", "never", "appearance", "outline", 1, "period"], ["placeholder", "Period"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", ""], [1, "heading2"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["src", "../assets/img/angular.jpg", "alt", "THL", "height", "150px", "width", "150px"], [1, "carousel-main"], [3, "options"], ["carouselSlide", ""], [1, "faq"], ["fxFlex", "70%", "fxFlex.sm", "100%"], [1, "mb-20"], [1, "ans"], [1, "ans-head"], [1, "pt-20", "relative", "block", "bg-blueGray-800"], [1, "container", "mx-auto", "px-4", "lg:pt-6", "lg:pb-64"], [1, "flex", "flex-wrap", "text-center", "justify-center"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "text-3xl", "font-semibold", "text-white"], [1, "text-lg", "leading-relaxed", "mt-4", "mb-4", "text-blueGray-400"], [1, "flex", "flex-wrap", "mt-12", "justify-center"], [1, "w-full", "lg:w-3/12", "px-4", "text-center", "card-border"], [1, "text-blueGray-800", "p-3", "wh-24", "shadow-lg", "rounded-full", "bg-white", "inline-flex", "items-center", "justify-center"], [1, "material-icons", "logo-size"], [1, "text-xl", "mt-5", "font-semibold", "text-white"], [1, "mt-2", "mb-4", "text-blueGray-400"], [1, "material-icons", "text-xl", "logo-size"], [3, "value"], [1, "slide-container"], [1, "image"], ["src", "../assets/img/slide2.jpeg", "alt", "Snow", 1, "img-center"], [1, "centered"], [1, "px-6"], [1, "text-center"], [1, "text-4xl", "font-semibold", "leading-normal", "tx-white-700", "mb-2"], [1, "flex", "flex-wrap", "justify-center"], [1, ""], [1, "mb-4", "text-lg", "leading-relaxed", "tx-white"], [1, "container", "mx-auto", "px-4"], [1, "flex", "flex-wrap"], [1, "pt-6", "md:w-6/12", "px-4", "text-center"], [1, "relative", "h-full", "flex", "flex-col", "min-w-0", "break-words", "bg-white", "w-full", "mb-8", "shadow-lg", "rounded-lg"], [1, "px-4", "py-5", "flex-auto"], [1, "text-white", "p-3", "text-center", "inline-flex", "items-center", "justify-center", "w-12", "h-12", "mb-5", "shadow-lg", "rounded-full", "bg-emerald-400"], [1, "fas", "fa-fingerprint"], [1, "text-xl", "font-semibold"], [1, "mt-2", "mb-4", "text-blueGray-500"], [1, "flex", "flex-wrap", "items-center"], [1, "w-full", "md:w-5/12", "px-4", "mr-auto", "ml-auto"], [1, "text-blueGray-500", "p-3", "text-center", "inline-flex", "items-center", "justify-center", "w-16", "h-16", "mb-6", "shadow-lg", "rounded-full", "bg-white"], [1, "fas", "fa-user-friends", "text-xl"], [1, "text-3xl", "mb-2", "font-semibold", "leading-normal"], [1, "text-lg", "font-light", "leading-relaxed", "mt-4", "mb-4", "text-blueGray-600"], [1, "text-lg", "font-light", "leading-relaxed", "mt-0", "mb-4", "text-blueGray-600"], [1, "w-full", "md:w-4/12", "px-4", "mr-auto", "ml-auto"], [1, "relative", "flex", "flex-col", "min-w-0", "break-words", "bg-white", "w-full", "mb-6", "shadow-lg", "rounded-lg", "bg-red-600"], ["alt", "...", "src", "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80", 1, "w-full", "align-middle", "rounded-t-lg"], [1, "relative", "p-8", "mb-4"], ["preserveAspectRatio", "none", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 583 95", 1, "absolute", "left-0", "w-full", "block", "h-95-px", "-top-94-px"], ["points", "-30,95 583,95 583,65", 1, "text-red-600", "fill-current"], [1, "text-md", "font-light", "mt-2", "text-white"], ["src", "../assets/img/slide3.jpeg", "alt", "Snow", 1, "img-center"], [1, "text-3xl", "font-semibold"], [1, "mt-4", "text-lg", "leading-relaxed"], [1, "list-none", "mt-6"], [1, "py-2"], [1, "flex", "items-center"], [1, "text-xs", "font-semibold", "inline-block", "py-1", "px-2", "uppercase", "rounded-full", "text-red-600", "bg-red-200", "mr-3"], [1, "fab", "fa-html5"], [1, "far", "fa-paper-plane"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-title", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Search Reports");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, AppComponent_mat_option_14_Template, 2, 2, "mat-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Find Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-card-title", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Supported by :");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "owl-carousel-o", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, AppComponent_ng_template_32_Template, 14, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, AppComponent_ng_template_33_Template, 25, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, AppComponent_ng_template_34_Template, 22, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, AppComponent_ng_template_35_Template, 58, 0, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Frequently Asked Questions");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " 1. Why is GFP running welfareprogress.com ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Mitigating reputational risk is a key service we offer to our clients. Having worked extensively with animal advocacy organisations, we know the value of transparent communication of progress to mitigate reputational risks. The focus of animal advocacy groups is shifting quickly from policy adoption to policy enforcement and accountability, with global and local groups now launching questionnaires, surveys, trackers, and benchmarking tools.Filling out numerous cage-free egg progress surveys and questionnaires is overwhelming and time consuming for food businesses. It has become a never-ending task. While these surveys all seek to evaluate progress on the same initiative \u2013 cage-free eggs- they often use different metrics and cover different geographies. We\u2019ve received a lot of feedback from the food industry that there is a need for a more centralised and streamlined reporting process. In order to support our clients and the food industry as a whole, we\u2019ve taken this feedback and developed this platform, which aims to make this process more efficient and uniform.We hope this platform offers a solution to food businessesto efficiently demonstratetheir progress and mitigate reputation risk.Please reach out to us if we can help you with this reporting process.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " 2. What benefits does this platform have for food businesses? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Reduce your reporting burden");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " The focus of animal advocacy groups is quickly shifting from policy adoption to policy enforcement and accountability, with both local and global organisations nowlaunching questionnaires, surveys, trackers, and benchmarking tools to assess progress.Food and hospitality companies around the world are proactively seeking to report and communicate their progress to these advocacy groups and other key stakeholders. WelfareProgress allows companies to publicly showcase their cage-free implementation progress on a single platform, and reduce the burden of filling out multiple questionnaires. We have got an agreement among key animal advocacy organisations to reference this platform in lieu of their individual progress surveys and questionnaires. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Increase transparency");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, " With hundreds of food businesses around the world committing to go cage-free, it\u2019s now expected that companies report and disclose their progress on this issue. WelfareProgress helps companies demonstrate progress on their cage-free commitments through accurate, thorough and timely reporting, allowing them to provide credible information to investors, animal advocacy groups, suppliers and consumers. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " 3. What animal advocacy groups endorse this initiative? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Leading animal advocacy organisations endorse and support WelfareProgress. To make the reporting process more efficient and streamlined, they\u2019ve agreed to no longer circulate their individual cage-free egg progress surveys and questionnaires, and instead reference this platform for all cage-free related progress information. We\u2019ll continue engaging with these and other stakeholders to ensure ongoing alignment around cage-free reporting. These organisations include The Humane League, Mercy for Animals, Sinergia Animal, and Animal Equality. Organisations like Compassion in World Farming and FAIRR also support this platform and will use it as a reference for their scoring and benchmarking initiatives.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "mat-expansion-panel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "mat-expansion-panel-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " 4. What if I receive a request for reporting cage-free progress through a different questionnaire or platform? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Key animal advocacy organisations have agreed to use WelfareProgress in lieu of individual progress surveys and questionnaires. Please reach out to us if you receiverequests to report through a different system, and we will be happy to get in touch with that organization.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "section", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "h2", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Who supports us");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "p", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, " Leading animal advocacy organisations endorse and support WelfareProgress. To make the reporting process more efficient and streamlined, they\u2019ve agreed to no longer circulate their individual cage-free egg progress surveys and questionnaires, and instead reference this platform for all cage-free related progress information. We\u2019ll continue engaging with these and other stakeholders to ensure ongoing alignment around cage-free reporting. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "notes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "h6", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " Planning ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "p", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, " we help you develop your policy and sourcing criteria, and localised roadmaps to ensure you meet your cage-free targets and stakeholder expectations ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "h5", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, " Implementation ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "p", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, " we work with you to implement your cage-free roadmaps, so you can meet your animal welfare targets in challenging Asianmarkets. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "support");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "h5", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "p", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, " we help youcommunicate andreport yourcommitments andprogress, and narrate your impact story to key stakeholders. This platform is one tool we\u2019ve developed to facilitate this. We also provide ongoing support for egg suppliers, risk management strategies, and regional monitoring. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.periods);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.customOptions);
          }
        },
        directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__.CarouselSlideDirective, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelTitle, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption],
        styles: [".mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.faq[_ngcontent-%COMP%]{\n  margin-top: 60px;\n  text-align: center;\n  color: #61C9A8;\n  font-weight: bold;\n  font-size: 30px;\n  padding: 15px 0;\n}\n\nmat-panel-title[_ngcontent-%COMP%]{\n  font-weight: 500;\n  color: #333;\n}\n\n.ans[_ngcontent-%COMP%]{\n  color: #666;\n  text-align: justify;\n  line-height: 1.6;\n  padding: 0 30px;\n}\n\n.report[_ngcontent-%COMP%]{\n  padding: 80px;\n}\n\n.ans-head[_ngcontent-%COMP%]{\n  margin: 10px 0 5px 0;\n}\n\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*='mat-elevation-z']) {\n  box-shadow: none;\n}\n\n.company[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\n  .mat-form-field-appearance-outline .mat-select-arrow-wrapper {\n  transform: translateY(0) !important;\n}\n\n  .mat-form-field-infix {\n  border-top: .3em solid transparent !important;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #61C9A8;\n}\n\n.heading[_ngcontent-%COMP%]{\n  font-weight: 600;\n  font-size: 28px;\n}\n\n.heading2[_ngcontent-%COMP%]{\n  text-align: center;\n  font-weight: 600;\n  font-size: 28px;\n}\n\nbutton[_ngcontent-%COMP%]{\n  border-radius: 0%;\n  outline: none;\n  width: 30%;\n  color: white;\n  font-weight: 400;\n  background-color: #61C9A8;\n  height: 45px;\n  margin-bottom: 18px;\n}\n\n  .mat-form-field-outline-start,   .mat-form-field-outline-end {\n    border-radius: 0px !important;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  width: 95%;\n  height: 3px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #61C9A8;\n  border: 0 none;\n}\n\n.card-border[_ngcontent-%COMP%]{\n  border: 2px solid #61C9A8;\n  border-radius: 12px;\n  margin: 14px;\n}\n\n.logo-size[_ngcontent-%COMP%]{\n  font-size: 50px;\n}\n\n  .mat-card{\n  margin: 20px;\n  border:none !important;\n  transition: none !important;\n  box-shadow: none !important;\n}\n\n.reports[_ngcontent-%COMP%]{\n  padding: 10px 80px;\n}\n\n.period[_ngcontent-%COMP%]{\n  width: 70%;\n}\n\n.slide-container[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n}\n\n.centered[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.img-center[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 86%;\n  height: 500px;\n}\n\n.image[_ngcontent-%COMP%]:after {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  content:'\\A';\n  position:absolute;\n  width:86%;\n  height:100%;\n  top:0; left:7%;\n  background:rgba(0,0,0,0.6);\n  opacity:0;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  opacity:1;\n}\n\n  .owl-carousel .owl-item img{\n  display: block;\n  width: 86%;\n}\n\n.containerrr[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display : flex;\n  flex-direction : row;\n  \n  }\n\n.carousel-main[_ngcontent-%COMP%]{\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FBRUQ7RUFDQyxtQ0FBbUM7QUFDckM7O0FBSUE7RUFDRSw2Q0FBNkM7QUFDL0M7O0FBR0E7RUFDRSxjQUFjO0FBQ2hCOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBOztJQUVJLDZCQUE2QjtBQUNqQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBS0E7RUFDRSxVQUFVO0FBQ1o7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFHQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsS0FBSyxFQUFFLE9BQU87RUFDZCwwQkFBMEI7RUFDMUIsU0FBUztFQUNULG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFHQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7O0VBRXBCOztBQUdGO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmZhcXtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzYxQzlBODtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuXG5tYXQtcGFuZWwtdGl0bGV7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uYW5ze1xuICBjb2xvcjogIzY2NjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgcGFkZGluZzogMCAzMHB4O1xufVxuXG4ucmVwb3J0e1xuICBwYWRkaW5nOiA4MHB4O1xufVxuXG4uYW5zLWhlYWR7XG4gIG1hcmdpbjogMTBweCAwIDVweCAwO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNvbXBhbnkge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzFjODdjOTtcbn1cbiAqL1xuXG4gOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1zZWxlY3QtYXJyb3ctd3JhcHBlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSAhaW1wb3J0YW50O1xufVxuXG5cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIGJvcmRlci10b3A6IC4zZW0gc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiAjNjFDOUE4O1xufVxuXG5cbi5oZWFkaW5ne1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5oZWFkaW5nMntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbmJ1dHRvbntcbiAgYm9yZGVyLXJhZGl1czogMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAzMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxQzlBODtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQsXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbn1cblxuaHIge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiAzcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MUM5QTg7XG4gIGJvcmRlcjogMCBub25lO1xufVxuXG4uY2FyZC1ib3JkZXJ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM2MUM5QTg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbjogMTRweDtcbn1cblxuLmxvZ28tc2l6ZXtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1jYXJke1xuICBtYXJnaW46IDIwcHg7XG4gIGJvcmRlcjpub25lICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ucmVwb3J0c3tcbiAgcGFkZGluZzogMTBweCA4MHB4O1xufVxuXG5cblxuXG4ucGVyaW9ke1xuICB3aWR0aDogNzAlO1xufVxuXG5cblxuLnNsaWRlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cblxuLmltZy1jZW50ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDg2JTtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuXG4uaW1hZ2U6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgY29udGVudDonXFxBJztcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHdpZHRoOjg2JTtcbiAgaGVpZ2h0OjEwMCU7XG4gIHRvcDowOyBsZWZ0OjclO1xuICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC42KTtcbiAgb3BhY2l0eTowO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgb3BhY2l0eToxO1xufVxuXG46Om5nLWRlZXAgLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gaW1ne1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDg2JTtcbn1cblxuXG4uY29udGFpbmVycnIgLmJveCB7XG4gIGRpc3BsYXkgOiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbiA6IHJvdztcbiAgXG4gIH1cblxuICBcbi5jYXJvdXNlbC1tYWlue1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn0iXX0= */"]
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
        decls: 61,
        vars: 0,
        consts: [[1, "relative", "bg-blueGray-200", "pt-8", "pb-6"], [1, "container", "mx-auto", "px-4"], [1, "flex", "flex-wrap", "text-center", "lg:text-left"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "text-3xl", "font-semibold"], [1, "text-lg", "mt-0", "mb-2", "text-blueGray-600"], [1, "mt-6", "lg:mb-0", "mb-6"], ["type", "button", 1, "bg-white", "text-lightBlue-400", "shadow-lg", "font-normal", "h-10", "w-10", "items-center", "justify-center", "align-center", "rounded-full", "outline-none", "focus:outline-none", "mr-2"], [1, "material-icons", "logo-size"], ["type", "button", 1, "bg-white", "text-lightBlue-600", "shadow-lg", "font-normal", "h-10", "w-10", "items-center", "justify-center", "align-center", "rounded-full", "outline-none", "focus:outline-none", "mr-2"], ["type", "button", 1, "bg-white", "text-pink-400", "shadow-lg", "font-normal", "h-10", "w-10", "items-center", "justify-center", "align-center", "rounded-full", "outline-none", "focus:outline-none", "mr-2"], ["type", "button", 1, "bg-white", "text-blueGray-800", "shadow-lg", "font-normal", "h-10", "w-10", "items-center", "justify-center", "align-center", "rounded-full", "outline-none", "focus:outline-none", "mr-2"], [1, "flex", "flex-wrap", "items-top", "mb-6"], [1, "w-full", "lg:w-4/12", "px-4", "ml-auto"], [1, "block", "uppercase", "text-blueGray-500", "text-sm", "font-semibold", "mb-2"], [1, "list-unstyled"], ["href", "#", 1, "text-blueGray-600", "hover:text-blueGray-800", "font-semibold", "block", "pb-2", "text-sm"], [1, "w-full", "lg:w-4/12", "px-4"], [1, "my-6", "border-blueGray-300"], [1, "flex", "flex-wrap", "items-center", "md:justify-between", "justify-center"], [1, "w-full", "md:w-4/12", "px-4", "mx-auto", "text-center"], [1, "text-sm", "text-blueGray-500", "font-semibold", "py-1"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Help us transform the world through business ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Quick Links ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Quick Link 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Quick Link 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Quick Link 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Quick Link 4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Other Resources ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Other Resources 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Other Resources 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Other Resources 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Other Resources 4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Copyright \xA9 2021 Welfare Progress ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " . ");

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


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      8030);

      var _c0 = function _c0(a0) {
        return {
          "fixed": a0
        };
      };

      var _c1 = function _c1(a0, a1) {
        return {
          hidden: a0,
          "block rounded shadow-lg": a1
        };
      };

      var _NavComponent = /*#__PURE__*/function () {
        function _NavComponent() {
          _classCallCheck(this, _NavComponent);

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
        return new (t || _NavComponent)();
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
        decls: 12,
        vars: 7,
        consts: [[1, "text-primary-color", "top-0", "absolute", "z-50", "w-full", "flex-wrap", "items-center", "justify-between", "navbar-expand-lg", "nav", 3, "ngClass"], [1, "container", "mx-auto", "flex", "flex-wrap", "items-center", "justify-between"], [1, "w-full", "relative", "flex", "justify-between", "lg:w-auto", "lg:static", "lg:block", "lg:justify-start"], [1, "text-sm", "font-bold", "leading-relaxed", "inline-block", "mr-4", "py-2", "px-12", "whitespace-nowrap", "uppercase"], ["alt", "Logo", "src", "../../../assets/img/newlogo.png", "width", "150", "height", "70"], ["type", "button", 1, "cursor-pointer", "text-xl", "leading-none", "px-3", "py-1", "border", "border-solid", "border-transparent", "rounded", "bg-transparent", "block", "lg:hidden", "outline-none", "focus:outline-none", 3, "click"], [1, "text-white", "fas", "fa-bars"], ["id", "example-navbar-warning", 1, "lg:flex", "flex-grow", "items-center", "bg-white", "lg:bg-opacity-0", "lg:shadow-none", 3, "ngClass"], [1, "flex", "flex-col", "lg:flex-row", "list-none", "lg:ml-auto"], [1, "flex", "items-center"], ["href", "http://dev.welfareprogress.com/", 1, "lg:hover:text-blueGray-800", "px-3", "py-4", "lg:py-2", "flex", "items-center", "text-xs", "uppercase", "font-bold"]],
        template: function NavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_button_click_5_listener() {
              return ctx.setNavbarOpen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Sign In ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.isScrolled));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c1, !ctx.navbarOpen, ctx.navbarOpen));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__.DefaultClassDirective],
        styles: [".fixed[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 1;\n    background: white;\n    color: #333;\n    box-shadow: 0px 1px 10px #CCC;\n    z-index: 9999;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsYUFBYTtFQUNmIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC5maXhlZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4ICNDQ0M7XG4gICAgei1pbmRleDogOTk5OTtcbiAgfVxuIl19 */"]
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