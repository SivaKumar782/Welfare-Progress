(self["webpackChunkangular_course"] = self["webpackChunkangular_course"] || []).push([["main"],{

/***/ 8255:
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
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav/nav.component */ 5375);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 7441);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ 5939);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 7817);













function AppComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const period_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", period_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", period_r1.viewValue, " ");
} }
class AppComponent {
    constructor() {
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
        this.periods = [
            { value: '2021', viewValue: '2021' },
            { value: '2020', viewValue: '2020' },
            { value: '2019', viewValue: '2019' },
            { value: '2018', viewValue: '2018' },
            { value: '2017', viewValue: '2017' },
            { value: '2016', viewValue: '2016' },
            { value: '2015', viewValue: '2015' },
            { value: '2014', viewValue: '2014' },
            { value: '2013/14', viewValue: '2013/14' },
            { value: '2012/13', viewValue: '2012/13' },
            { value: '2013/12', viewValue: '2011/12' },
            { value: '2010/11', viewValue: '2010/11' },
        ];
    }
    toggleTabs($tabNumber) {
        this.openTab = $tabNumber;
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 191, vars: 1, consts: [[1, "main"], ["fxLayout", "row wrap", "fxLayout.xs", "column", "fxLayoutAlign", "space-around center"], ["fxFlex", "45%", "fxFlex.sm", "100%"], [1, "heading1"], [1, "reports"], ["floatLabel", "never", "appearance", "outline", 1, "company"], ["matInput", "", "placeholder", "Enter company name or part of it"], ["floatLabel", "never", "appearance", "outline", 1, "period"], ["placeholder", "Period"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", ""], [1, "support-title"], [1, "heading2"], [1, "support-logos"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["src", "../assets/img/angular.jpg", "alt", "THL", "height", "150px", "width", "150px"], [1, "section1-hr"], ["mat-align-tabs", "center", 1, "pt-20"], ["label", "Why report"], ["fxFlex", "90%", "fxFlex.md", "100%", "fxFlex.sm", "100%", "fxFlex.xs", "100%"], ["align", "left", 1, "carousel-hr"], [1, "text-2xl", "font-bold", "pt-4"], [1, "mt-2", "mb-4", "primary-text", "pt-4"], [1, "mt-2", "mb-4", "primary-text"], ["label", "Who supports us"], [1, ""], [1, "flex", "flex-wrap", "items-center"], ["fxFlex", "90%", "fxFlex.md", "100%", "fxFlex.sm", "100%", "fxFlex.xs", "100%", 1, "mr-auto", "ml-auto", "bg-green-100"], [1, "text-2xl", "pt-4", "font-bold", "mb-2", "font-bold", "leading-normal"], [1, "primary-text", "font-light", "leading-relaxed", "mt-4", "mb-4"], [1, "text-lg", "font-light", "leading-relaxed", "mt-0", "mb-4"], ["label", "Who are you"], [1, "flex", "mt-4", "flex-wrap", "justify-center"], [1, "mb-4", "primary-text", "leading-relaxed", "tx-white"], [1, "primary-text"], ["label", "Commitment Checklist"], [1, "text-2xl", "font-bold", "mt-4", "mb-2", "leading-normal"], [1, "mt-4", "px-4", "text-lg", "text-blueGray-600", "leading-relaxed"], [1, "checklist", "mt-6"], [1, "check"], [1, "main-title"], [1, "mb-20"], [1, "ans"], [1, "ans-head"], [1, "pt-15", "relative", "block"], [1, "container", "mx-auto", "px-4", "lg:pt-6", "pb-20"], [1, "flex", "flex-wrap", "text-center", "justify-center"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "text-3xl", "main-title"], [1, "flex", "flex-wrap", "mt-12", "justify-center"], [1, "w-full", "lg:w-4/12", "px-4", "py-12", "card-section"], ["align", "left", 1, "support-hr"], [1, "text-2xl", "mt-5", "font-semibold"], [1, "mt-4", "mb-4", "primary-text", "text-left"], [3, "value"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "View Cage-free Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, AppComponent_mat_option_13_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Find Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-card-title", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "WelfareProgress is an initiative by Global Food Partners, supported by leading animal advocacy organisations. WelfareProgress is a tool for food businesses to report progress against their cage-free egg commitments. Multiple stakeholders use this platform to evaluate corporate progress on this topic.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-card-title", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Supported by :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-card-content", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "hr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-tab-group", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-tab", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "hr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h6", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Reduce your reporting burden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " The focus of animal advocacy groups is quickly shifting from policy adoption to policy enforcement and accountability, with both local and global organisations nowlaunching questionnaires, surveys, trackers, and benchmarking tools to assess progress. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Food and hospitality companies around the world are proactively seeking to report and communicate their progress to these advocacy groups and other key stakeholders. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " WelfareProgress allows companies to publicly showcase their cage-free implementation progress on a single platform, and reduce the burden of filling out multiple questionnaires. We have got an agreement among key animal advocacy organisations to reference this platform in lieu of their individual progress surveys and questionnaires. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "hr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "h6", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Increase transparency ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " With hundreds of food businesses around the world committing to go cage-free, it\u2019s now expected that companies report and disclose their progress on this issue. WelfareProgress helps companies demonstrate progress on their cage-free commitments through accurate, thorough and timely reporting, allowing them to provide credible information to investors, animal advocacy groups, suppliers and consumers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "mat-tab", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "hr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "h6", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " Who supports us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " Leading animal advocacy organisations endorse and support WelfareProgress. To make the reporting process more efficient and streamlined, they\u2019ve agreed to no longer circulate their individual cage-free egg progress surveys and questionnaires, and instead reference this platform for all cage-free related progress information. We\u2019ll continue engaging with these and other stakeholders to ensure ongoing alignment around cage-free reporting. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, " These organisations include: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " -logos (THL, MFA, Sinergia, AE, Alianima, Forum) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "mat-tab", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "hr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "h3", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " Who We Are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " Global Food Partners is a multinational consulting firm that works with businesses todevelop, implement and report progress on high animal welfare and responsible sourcing policies to improve their profitability and sustainability. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Our team has a combined 50+ years of corporate and on-farm experience developing and executing animal welfare policies and production practices, with a focus on cage-free eggs. We\u2019ve worked with food industry leaders, governments and egg industries globally, including across Latin America and Asia, to transition to and maintain high welfare cage-free supply chains and production systems. Having worked extensively with animal advocacy organisations, we know the value of transparent communication of progress to mitigate reputational risks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "mat-tab", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "hr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "h3", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, " Commitment Checklist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, " Does your cage-free egg commitment meet stakeholder expectations? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "ul", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "h4", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, " Clearly states that we will source exclusively cage-free egg throughout supplychain ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "h4", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Covers all eggs in my supply chain, including shell, egg products (liquid, powder, etc.), and food products manufactured by a 3rd party (e.g. pastries)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "h4", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "States a deadline \u2013 the date by which my entire supply chain will be cage-free");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "h4", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Covers our entire supply chain, including all brands and franchises ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "h4", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Includes a commitment to translate the policy into key local languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "h4", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Includes a commitment to annual public on progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, " 1. Why is GFP running welfareprogress.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Mitigating reputational risk is a key service we offer to our clients. Having worked extensively with animal advocacy organisations, we know the value of transparent communication of progress to mitigate reputational risks. The focus of animal advocacy groups is shifting quickly from policy adoption to policy enforcement and accountability, with global and local groups now launching questionnaires, surveys, trackers, and benchmarking tools.Filling out numerous cage-free egg progress surveys and questionnaires is overwhelming and time consuming for food businesses. It has become a never-ending task. While these surveys all seek to evaluate progress on the same initiative \u2013 cage-free eggs- they often use different metrics and cover different geographies. We\u2019ve received a lot of feedback from the food industry that there is a need for a more centralised and streamlined reporting process. In order to support our clients and the food industry as a whole, we\u2019ve taken this feedback and developed this platform, which aims to make this process more efficient and uniform.We hope this platform offers a solution to food businessesto efficiently demonstratetheir progress and mitigate reputation risk.Please reach out to us if we can help you with this reporting process.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, " 2. What benefits does this platform have for food businesses? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "Reduce your reporting burden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, " The focus of animal advocacy groups is quickly shifting from policy adoption to policy enforcement and accountability, with both local and global organisations nowlaunching questionnaires, surveys, trackers, and benchmarking tools to assess progress.Food and hospitality companies around the world are proactively seeking to report and communicate their progress to these advocacy groups and other key stakeholders. WelfareProgress allows companies to publicly showcase their cage-free implementation progress on a single platform, and reduce the burden of filling out multiple questionnaires. We have got an agreement among key animal advocacy organisations to reference this platform in lieu of their individual progress surveys and questionnaires. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Increase transparency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, " With hundreds of food businesses around the world committing to go cage-free, it\u2019s now expected that companies report and disclose their progress on this issue. WelfareProgress helps companies demonstrate progress on their cage-free commitments through accurate, thorough and timely reporting, allowing them to provide credible information to investors, animal advocacy groups, suppliers and consumers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, " 3. What animal advocacy groups endorse this initiative? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "Leading animal advocacy organisations endorse and support WelfareProgress. To make the reporting process more efficient and streamlined, they\u2019ve agreed to no longer circulate their individual cage-free egg progress surveys and questionnaires, and instead reference this platform for all cage-free related progress information. We\u2019ll continue engaging with these and other stakeholders to ensure ongoing alignment around cage-free reporting. These organisations include The Humane League, Mercy for Animals, Sinergia Animal, and Animal Equality. Organisations like Compassion in World Farming and FAIRR also support this platform and will use it as a reference for their scoring and benchmarking initiatives.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, " 4. What if I receive a request for reporting cage-free progress through a different questionnaire or platform? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "Key animal advocacy organisations have agreed to use WelfareProgress in lieu of individual progress surveys and questionnaires. Please reach out to us if you receiverequests to report through a different system, and we will be happy to get in touch with that organization.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, " 5. How do I report my cage-free progress? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "You can report your cage-free implementation progress here (link it to \"report progress\" registration page).");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, " 6. What questions will I be asked? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, "You can view the questions here [insert pdf questionnaire link] so that you can prepare your data in advance. Please note that this is just for your reference. You can report your progress here (link to \"report progress\" registration page).");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, " 7. What if I need help? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, "We'd be happy to walk you through the reporting process and answer any questions you have. Please reach out to us at [help link] for assistance. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](163, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](164, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "section", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "h2", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "Who supports us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](173, "hr", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "h6", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, " Planning ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, " we help you develop your policy and sourcing criteria, and localised roadmaps to ensure you meet your cage-free targets and stakeholder expectations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](179, "hr", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "h5", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, " Implementation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, " we work with you to implement your cage-free roadmaps, so you can meet your animal welfare targets in challenging Asianmarkets. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](185, "hr", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "h5", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, " we help youcommunicate andreport yourcommitments andprogress, and narrate your impact story to key stakeholders. This platform is one tool we\u2019ve developed to facilitate this. We also provide ongoing support for egg suppliers, risk management strategies, and regional monitoring. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](190, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.periods);
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTab, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelTitle, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption], styles: [".mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.main-title[_ngcontent-%COMP%]{\n  margin-top: 60px;\n  text-align: center;\n  color: rgb(51, 51, 51);\n  font-weight: 900;\n  font-size: 36px;\n  padding: 15px 0;\n}\nmat-panel-title[_ngcontent-%COMP%]{\n  font-weight: 500;\n  color: #333;\n}\n.ans[_ngcontent-%COMP%]{\n  font-size: 16px;\n  color: #666;\n  text-align: justify;\n  line-height: 1.6;\n  padding: 0 30px;\n}\n.report[_ngcontent-%COMP%]{\n  padding: 80px;\n}\n.ans-head[_ngcontent-%COMP%]{\n  margin: 10px 0 5px 0;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*='mat-elevation-z']) {\n  box-shadow: none;\n}\n.company[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  .mat-form-field-appearance-outline .mat-select-arrow-wrapper {\n  transform: translateY(0) !important;\n}\n  .mat-form-field-infix {\n  border-top: .3em solid transparent !important;\n}\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #61C9A8;\n}\n.heading1[_ngcontent-%COMP%]{\n  font-weight: 600;\n  font-size: 2.75rem;\n  text-align: center;\n}\n.heading2[_ngcontent-%COMP%]{\n  font-weight: 600;\n  font-size: 2.75rem;\n}\n.support-title[_ngcontent-%COMP%]{\n  text-indent: 50px;\n  padding-bottom: 15px;\n  text-align: justify;\n  font-weight: 400;\n  font-size: 1.5rem;\n}\nbutton[_ngcontent-%COMP%]{\n  border-radius: 0%;\n  outline: none;\n  width: 30%;\n  color: white;\n  font-weight: 400;\n  background-color: #61C9A8;\n  height: 45px;\n  margin-bottom: 18px;\n}\n  .mat-form-field-outline-start,   .mat-form-field-outline-end {\n    border-radius: 0px !important;\n}\nhr[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  width: 90%;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #61C9A8;\n  border: 0 none;\n}\n.carousel-hr[_ngcontent-%COMP%]{\n    width: 70px;\n    height: 4px;\n    margin-left: 0;\n    margin-right: 0;\n    background-color: #61C9A8;\n    border: 0 none;\n    text-align: left;\n}\n.support-hr[_ngcontent-%COMP%]{\n  width: 50px;\n  height: 4px;\n  margin-left: 0;\n  margin-right: 0;\n  background-color: #61C9A8;\n  border: 0 none;\n  text-align: left;\n}\n.section1-hr[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n.card-section[_ngcontent-%COMP%]{\n  padding:0 34px;\n}\n.logo-size[_ngcontent-%COMP%]{\n  font-size: 50px;\n}\n  .mat-card{\n  margin: 0 20px;\n  border:none !important;\n  transition: none !important;\n  box-shadow: none !important;\n}\n.reports[_ngcontent-%COMP%]{\n  padding: 10px 80px;\n}\n.period[_ngcontent-%COMP%]{\n  width: 70%;\n}\n.slide-container[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n}\n.centered[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.img-center[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 86%;\n  height: 500px;\n}\n.image[_ngcontent-%COMP%]:after {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  content:'\\A';\n  position:absolute;\n  width:86%;\n  height:100%;\n  top:0; left:7%;\n  background:rgba(0,0,0,0.6);\n  opacity:0;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  opacity:1;\n}\n  .owl-carousel .owl-item img{\n  display: block;\n  width: 50%;\n}\n.containerrr[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display : flex;\n  flex-direction : row;\n\n  }\n.carousel-main[_ngcontent-%COMP%]{\n  margin-top: 100px;\n}\n.support-logos[_ngcontent-%COMP%]{\n  padding: 0 80px 80px;\n}\n.checklist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: url('check.png') no-repeat left center;\n  padding: 5px 10px 5px 50px;\n  list-style: none;\n  margin-top: 15px;\n  vertical-align: middle;\n}\n  .owl-theme .owl-dots .owl-dot span {\n  width: 100px;\n  height: auto;\n  font-size: 16px;\n  margin: 5px 7px;\n  background: #e3fffa;\n  display: block;\n  transition: opacity .2s ease;\n  border-radius: 4px;\n  position: relative;\n}\n  .owl-theme .owl-dots .owl-dot.active span, .owl-theme[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  background: #61C9A8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBOzs7Ozs7Ozs7Ozs7O0VBYUU7QUFFRDtFQUNDLG1DQUFtQztBQUNyQztBQUlBO0VBQ0UsNkNBQTZDO0FBQy9DO0FBR0E7RUFDRSxjQUFjO0FBQ2hCO0FBS0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUVBOztJQUVJLDZCQUE2QjtBQUNqQztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBR0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBS0E7RUFDRSxVQUFVO0FBQ1o7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7QUFHQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0FBQ2Y7QUFHQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsU0FBUztFQUNULFdBQVc7RUFDWCxLQUFLLEVBQUUsT0FBTztFQUNkLDBCQUEwQjtFQUMxQixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QixTQUFTO0FBQ1g7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0FBQ1o7QUFHQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7O0VBRXBCO0FBR0Y7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQU1BO0VBQ0Usa0RBQWdFO0VBQ2hFLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4ubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLm1haW4tdGl0bGV7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG5cbm1hdC1wYW5lbC10aXRsZXtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5hbnN7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM2NjY7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIHBhZGRpbmc6IDAgMzBweDtcbn1cblxuLnJlcG9ydHtcbiAgcGFkZGluZzogODBweDtcbn1cblxuLmFucy1oZWFke1xuICBtYXJnaW46IDEwcHggMCA1cHggMDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jb21wYW55IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIGlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMWM4N2M5O1xufVxuICovXG5cbiA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LXNlbGVjdC1hcnJvdy13cmFwcGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApICFpbXBvcnRhbnQ7XG59XG5cblxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgYm9yZGVyLXRvcDogLjNlbSBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgY29sb3I6ICM2MUM5QTg7XG59XG5cblxuXG5cbi5oZWFkaW5nMXtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyLjc1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkaW5nMntcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyLjc1cmVtO1xufVxuXG4uc3VwcG9ydC10aXRsZXtcbiAgdGV4dC1pbmRlbnQ6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuXG5idXR0b257XG4gIGJvcmRlci1yYWRpdXM6IDAlO1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMzAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MUM5QTg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXN0YXJ0LFxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MUM5QTg7XG4gIGJvcmRlcjogMCBub25lO1xufVxuXG4uY2Fyb3VzZWwtaHJ7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MUM5QTg7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuXG4uc3VwcG9ydC1ocntcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNHB4O1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFDOUE4O1xuICBib3JkZXI6IDAgbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnNlY3Rpb24xLWhyIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uY2FyZC1zZWN0aW9ue1xuICBwYWRkaW5nOjAgMzRweDtcbn1cblxuLmxvZ28tc2l6ZXtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1jYXJke1xuICBtYXJnaW46IDAgMjBweDtcbiAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5yZXBvcnRze1xuICBwYWRkaW5nOiAxMHB4IDgwcHg7XG59XG5cblxuXG5cbi5wZXJpb2R7XG4gIHdpZHRoOiA3MCU7XG59XG5cblxuXG4uc2xpZGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNlbnRlcmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuXG4uaW1nLWNlbnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogODYlO1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG5cbi5pbWFnZTphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBjb250ZW50OidcXEEnO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgd2lkdGg6ODYlO1xuICBoZWlnaHQ6MTAwJTtcbiAgdG9wOjA7IGxlZnQ6NyU7XG4gIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjYpO1xuICBvcGFjaXR5OjA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBvcGFjaXR5OjE7XG59XG5cbjo6bmctZGVlcCAub3dsLWNhcm91c2VsIC5vd2wtaXRlbSBpbWd7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTAlO1xufVxuXG5cbi5jb250YWluZXJyciAuYm94IHtcbiAgZGlzcGxheSA6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uIDogcm93O1xuXG4gIH1cblxuXG4uY2Fyb3VzZWwtbWFpbntcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5zdXBwb3J0LWxvZ29ze1xuICBwYWRkaW5nOiAwIDgwcHggODBweDtcbn1cblxuXG5cblxuXG4uY2hlY2tsaXN0IGxpIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaW1nL2NoZWNrLnBuZycpIG5vLXJlcGVhdCBsZWZ0IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDUwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbjo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdCBzcGFuIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA1cHggN3B4O1xuICBiYWNrZ3JvdW5kOiAjZTNmZmZhO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbjo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdC5hY3RpdmUgc3BhbiwgLm93bC10aGVtZSAub3dsLWRvdHMgLm93bC1kb3Q6aG92ZXIgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICM2MUM5QTg7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ 5830);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ 5375);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-owl-carousel-o */ 5668);
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/material-module */ 8696);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__.CarouselModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexLayoutModule,
            _app_material_module__WEBPACK_IMPORTED_MODULE_3__.DemoMaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__.NavComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__.CarouselModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexLayoutModule,
        _app_material_module__WEBPACK_IMPORTED_MODULE_3__.DemoMaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule] }); })();


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 15, vars: 0, consts: [[1, "relative", "bg-blueGray-200", "pt-8", "pb-6"], [1, "container", "mx-auto", "px-8"], [1, "flex", "flex-wrap", "text-center", "lg:text-left"], [1, "w-full", "lg:w-6/12", "px-4"], [1, "text-3xl", "font-semibold"], [1, "mt-4", "ml-1", "lg:mb-0", "mb-6"], ["href", "https://www.linkedin.com/company/36019661/admin/", "target", "_blank", "onclick", "window.open('https://www.linkedin.com/company/36019661/admin/', '_blank'); return false;", 1, "bg-blueGray-200", "text-lightBlue-400"], ["width", "18", "src", "../../assets/img/GFP-icon-linkedin.png"], [1, "my-6", "border-blueGray-300"], [1, "flex", "flex-wrap", "items-center", "md:justify-between", "justify-center"], [1, "w-full", "md:w-4/12", "px-4", "mx-auto", "text-center"], [1, "text-nm", "text-blueGray-500", "font-semibold", "py-1"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Follow Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Copyright \u00A9 2021 WelfareProgress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 8696:
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoMaterialModule": function() { return /* binding */ DemoMaterialModule; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ 9238);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ 4785);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7310);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/portal */ 7636);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/scrolling */ 1386);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/stepper */ 1394);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ 552);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/tree */ 2796);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ 1554);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/badge */ 346);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 6410);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button-toggle */ 2542);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/chips */ 8341);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/stepper */ 4553);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 3220);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 7817);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/paginator */ 9692);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-bar */ 2178);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/radio */ 2613);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ 7441);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/slider */ 4436);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slide-toggle */ 5396);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/snack-bar */ 7001);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ 1494);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tabs */ 5939);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tooltip */ 1436);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tree */ 1933);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/overlay */ 8203);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);












































class DemoMaterialModule {
}
DemoMaterialModule.ɵfac = function DemoMaterialModule_Factory(t) { return new (t || DemoMaterialModule)(); };
DemoMaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoMaterialModule });
DemoMaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__.ClipboardModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__.MatTreeModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_41__.OverlayModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_42__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_43__.ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__.ClipboardModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__.MatTreeModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_41__.OverlayModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_42__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_43__.ScrollingModule] }); })();


/***/ }),

/***/ 5375:
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": function() { return /* binding */ NavComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);



class NavComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.navbarOpen = false;
        this.logoSrc = "../";
        this.isScrolled = false;
    }
    ngOnInit() {
    }
    setNavbarOpen() {
        this.navbarOpen = !this.navbarOpen;
    }
    ScrollIntoView(elem) {
        console.log(elem);
        document.querySelector(elem).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    scrollEvent() {
        window.pageYOffset >= 80
            ? (this.isScrolled = true)
            : (this.isScrolled = false);
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialog)); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], hostBindings: function NavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavComponent_scroll_HostBindingHandler() { return ctx.scrollEvent(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 41, vars: 0, consts: [[1, "text-primary-color", "top-0", "absolute", "z-50", "w-full", "flex-wrap", "items-center", "justify-between", "navbar-expand-lg", "nav"], [1, "menu-icon"], [1, "fas", "fa-bars"], [1, "py-3", "text-blueGray-500", "text-2xl"], ["href", "http://globalfoodpartners.org/", "target", "_blank"], [1, "nav-items"], ["href", "http://globalfoodpartners.org/", "target", "_blank", 1, "text-sm", "font-bold", "leading-relaxed", "inline-block", "mr-4", "py-2", "whitespace-nowrap", "uppercase"], ["alt", "Logo", "src", "../../../assets/img/newlogo.png", "width", "150", "height", "70"], ["action", "#"], [1, "nav", "navbar-nav", "navbar-right"], [1, "dropdown"], ["data-toggle", "dropdown", 1, "btn", "btn-signin", "text-blueGray-500", "text-md", "dropdown-toggle"], [1, "caret"], ["role", "menu", 1, "dropdown-menu", "dropdown-lr", "animated", "slideInRight"], [1, "col-lg-12", "mt-4"], ["id", "ajax-login-form", "action", "", "method", "post", "role", "form", "autocomplete", "off"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", "id", "username", "tabindex", "1", "placeholder", "Username", "value", "", "autocomplete", "off", 1, "form-control"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "tabindex", "2", "placeholder", "Password", "autocomplete", "off", 1, "form-control"], [1, "row"], [1, "col-xs-6", "pull-left", "button-lc"], ["type", "submit", "name", "login-submit", "id", "login-submit", "value", "Sign In", 1, "form-control", "btn", "btn-success1"], [1, "col-xs-6", "pull-right"], ["href", "https://app.welfareprogress.com/#/authentication/signup", "target", "_blank", "type", "submit", "name", "create-submit", "id", "create-submit", "value", "Create Account", 1, "form-control", "btn", "btn-success2"], [1, "col-lg-12"], [1, "text-center"], ["href", "http://phpoll.com/recover", "tabindex", "5", 1, "forgot-password"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm], styles: ["nav[_ngcontent-%COMP%]{\n  position: fixed;\n  box-shadow: 0px 1px 10px #CCC;\n  background: #fff;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  height: 60px;\n  padding: 0 110px 0 110px;\n}\n\nnav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]{\n  display: flex;\n  flex: 1;\n}\n\nnav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n  list-style: none;\n  padding: 0 8px;\n}\n\n.nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{\n    background-color: #61C9A8;\n    color: white;\n}\n\n.btn-success1[_ngcontent-%COMP%] {\n    color: #fff;\n    font-weight: bold;\n    background-color: #61C9A8;\n    border: 1px solid #61C9A8;\n}\n\n.btn-success1[_ngcontent-%COMP%]:hover{\n    background-color: #8dddc4;\n}\n\n.btn-success2[_ngcontent-%COMP%] {\n    color: #61C9A8;\n    font-weight: bold;\n    background-color: #e8fff8;\n    \n}\n\n[type='text'][_ngcontent-%COMP%], [type='password'][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n    background-color: #fff;\n    border-color: #c4c4c4;\n    font-size: 1.5rem;\n}\n\n.btn-signin[_ngcontent-%COMP%], .btn-signin[_ngcontent-%COMP%]:active {\n    padding: 0 20px;\n    color: back;\n    \n    \n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMEZBQTBGOztBQUUxRjtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87QUFDVDs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFHQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsdUNBQXVDO0lBQ3ZDLG1DQUFtQztBQUN2Qzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4zLjQvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJyk7ICovXG5cbm5hdntcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggI0NDQztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogMCAxMTBweCAwIDExMHB4O1xufVxuXG5uYXYgLm5hdi1pdGVtc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cbm5hdiAubmF2LWl0ZW1zIGxpe1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwIDhweDtcbn1cblxuLm5hdiAub3Blbj5hLCAubmF2IC5vcGVuPmE6Zm9jdXMsIC5uYXYgLm9wZW4+YTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFDOUE4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG4uYnRuLXN1Y2Nlc3MxIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFDOUE4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2MUM5QTg7XG59XG4uYnRuLXN1Y2Nlc3MxOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZGRkYzQ7XG59XG5cbi5idG4tc3VjY2VzczIge1xuICAgIGNvbG9yOiAjNjFDOUE4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGZmZjg7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI2ZjZmRmZDsgKi9cbn1cblxuW3R5cGU9J3RleHQnXSwgW3R5cGU9J3Bhc3N3b3JkJ10sdGV4dGFyZWEsIHNlbGVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICNjNGM0YzQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cblxuLmJ0bi1zaWduaW4sIC5idG4tc2lnbmluOmFjdGl2ZSB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGNvbG9yOiBiYWNrO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMzIsIDMyKTsgKi9cbiAgICAvKiBib3JkZXItY29sb3I6IHJnYigzMiwgMzIsIDMyKTsgKi9cbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuIl19 */"] });


/***/ }),

/***/ 2340:
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map