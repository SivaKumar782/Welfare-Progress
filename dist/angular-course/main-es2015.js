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













function AppComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const period_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", period_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", period_r1.viewValue, " ");
} }
// import 'bootstrap';
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
        $('[data-toggle="tooltip"]').tooltip();
        // (<any>$('[data-toggle="tooltip"]')).tooltip();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 215, vars: 1, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "center center", "fxLayoutGap", "30px", 1, "pt-100", "mt-5"], ["fxFlex", "43%", "fxFlex.md", "45%", "fxFlex.sm", "90%", "fxFlex.xs", "95%", 1, "px-6"], [1, "primary-text"], ["fxFlex", "40%", "fxFlex.md", "40%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], [1, "coming-soon"], [1, "heading1", "soon"], [1, "soon"], ["floatLabel", "never", "appearance", "outline", 1, "company"], ["matInput", "", "placeholder", "Enter company name", "disabled", ""], ["floatLabel", "never", "appearance", "outline", 1, "period"], ["placeholder", "Period", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "disabled", ""], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 1, "mt-12"], ["fxFlex", "83%", "fxFlex.md", "83%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], [1, "heading2"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "mt-12"], ["src", "../assets/wp/rectangulo letra negra fondo trasparente (1) (1).png", "alt", "THL", "height", "150px", "width", "150px"], ["src", "../assets/wp/Animal Equality Square Logo (3).jpg", "alt", "THL", "height", "150px", "width", "150px"], ["src", "../assets/wp/MercyforAnimals_PrimaryLockup_RGB (2).png", "alt", "THL", "height", "150px", "width", "150px"], [1, "section1-hr"], ["mat-align-tabs", "center", 1, "pt-16", "mb-5"], ["label", "Why report"], ["fxLayout", "row wrap", "fxLayoutAlign", "end center", "fxLayoutGap", "56px", 1, "py-6"], ["fxFlex", "42.3%", "fxFlex.md", "43.5%", "fxFlex.sm", "90%", "fxFlex.xs", "95%", 1, "px-6"], ["align", "left", 1, "carousel-hr"], [1, "text-2xl", "font-bold", "pt-4"], [1, "mt-2", "mb-4", "primary-text", "pt-4"], [1, "mt-2", "mb-4", "primary-text"], ["fxFlex", "46.5%", "fxFlex.md", "46.5%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], [1, "py-6"], ["src", "../assets/img/20210709_brown layers on top system.jpg"], ["label", "About Global Food Partners"], [1, "text-2xl", "pt-4", "font-bold", "mb-2", "font-bold", "leading-normal"], [1, "flex", "mt-4", "flex-wrap", "justify-center"], [1, "mb-4", "primary-text", "leading-relaxed"], ["src", "../assets/img/20210709_eggs.jpg"], ["label", "Commitment checklist"], [1, "text-2xl", "font-bold", "mt-4", "mb-2", "leading-normal"], [1, "mt-4", "px-4", "text-lg", "text-blueGray-600", "leading-relaxed"], [1, "checklist", "mt-6"], [1, "check"], ["src", "../assets/img/20210709_IMG_20210524_145900.jpg"], [1, "top-100"], [1, "main-title", "mt-10"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["fxFlex", "85%", "fxFlex.md", "85%", "fxFlex.sm", "90%", "fxFlex.xs", "95%"], [1, "mb-16"], [1, "ans", "mt-2", "mb-4", "primary-text"], [1, "ans"], [1, "ans-head", "mt-2", "mb-4", "primary-text"], ["href", "https://app.welfareprogress.com/#/authentication/signup", "target", "_blank"], ["target", "_blank", "href", "../assets/wp/17_MAY_Questionnaire_EN.docx"], ["href", "https://team@globalfoodpartners.com", "target", "_blank"], [1, "pt-15", "relative", "block"], [1, "mx-auto", "lg:pt-6"], [1, "flex", "flex-wrap", "text-center", "justify-center"], [1, "w-full", "lg:w-6/12"], [1, "text-3xl", "main-title", "mt-14"], [1, "flex", "flex-wrap", "mt-8", "justify-center"], [1, "w-full", "lg:w-4/12", "py-12", "card-section"], [1, "text-2xl", "text-center", "font-semibold"], ["href", "http://globalfoodpartners.org/", "target", "_blank", 1, "text-sm", "font-bold", "leading-relaxed", "inline-block", "mr-4", "py-2", "whitespace-nowrap", "uppercase"], ["alt", "Logo", "src", "../assets/wp/rectangulo letra negra fondo trasparente (1) (1).png", "width", "300"], [1, "mb-4", "primary-text", "text-left", "pr-12"], ["href", "http://welfareprogress.com", "target", "_blank"], [1, "ceo"], [1, "w-full", "lg:w-4/12", "px-4", "py-12", "card-section"], ["alt", "Logo", "src", "../assets/wp/Animal Equality Square Logo (3).jpg", "width", "300"], [1, "mb-4", "primary-text", "text-left"], ["alt", "Logo", "src", "../assets/wp/MercyforAnimals_PrimaryLockup_RGB (2).png", "width", "300"], [3, "value"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "WelfareProgress is an initiative by Global Food Partners, supported by leading animal advocacy organisations. WelfareProgress is a tool for food businesses to report progress against their cage-free egg commitments. Multiple stakeholders use this platform to evaluate corporate progress on this topic.");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "An initiative supported by");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "hr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-tab-group", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-tab", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "hr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "h6", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Reduce your reporting burden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " The focus of animal advocacy groups is quickly shifting from policy adoption to policy enforcement and accountability, with both local and global organisations now launching questionnaires, surveys, trackers, and benchmarking tools to assess progress. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Food and hospitality companies around the world are proactively seeking to report and communicate their progress to these advocacy groups and other key stakeholders. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " WelfareProgress allows companies to publicly showcase their cage-free implementation progress on a single platform, and reduce the burden of filling out multiple questionnaires. We have got an agreement among key animal advocacy organisations to reference this platform in lieu of their individual progress surveys and questionnaires. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "hr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "h6", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Increase transparency ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " With hundreds of food businesses around the world committing to go cage-free, it\u2019s now expected that companies report and disclose their progress on this issue. WelfareProgress helps companies demonstrate progress on their cage-free commitments through accurate, thorough and timely reporting, allowing them to provide credible information to investors, animal advocacy groups, suppliers and consumers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "mat-tab", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "hr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "h3", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " Who we are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " Global Food Partners is a multinational consulting firm that works with businesses to develop, implement and report progress on high animal welfare and responsible sourcing policies to improve their profitability and sustainability. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " Our team has a combined 50+ years of corporate and on-farm experience developing and executing animal welfare policies and production practices, with a focus on cage-free eggs. We\u2019ve worked with food industry leaders, governments and egg industries globally, including across Latin America and Asia, to transition to and maintain high welfare cage-free supply chains and production systems. Having worked extensively with animal advocacy organisations, we know the value of transparent communication of progress to mitigate reputational risks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "mat-tab", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "hr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " Commitment checklist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " Does your cage-free egg commitment meet stakeholder expectations? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "ul", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "li", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Clearly states that we will source exclusively cage-free egg throughout supply chain ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Covers all eggs in your supply chain, including shell, egg products (liquid, powder, etc.), and food products manufactured by a 3rd party (e.g. pastries)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "States a deadline \u2013 the date by which your entire supply chain will be cage-free");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Covers your entire supply chain, including all brands and franchises ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Includes a commitment to translate the policy into key local languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Includes a commitment to annual public on progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "hr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, " 1. Why is GFP running welfareprogress.com? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Mitigating reputational risk is a key service we offer to our clients. Having worked extensively with animal advocacy organisations, we know the value of transparent communication of progress to mitigate reputational risks. The focus of animal advocacy groups is shifting quickly from policy adoption to policy enforcement and accountability, with global and local groups now launching questionnaires, surveys, trackers, and benchmarking tools. Filling out numerous cage-free egg progress surveys and questionnaires is overwhelming and time consuming for food businesses. It has become a never-ending task. While these surveys all seek to evaluate progress on the same initiative \u2013 cage-free eggs- they often use different metrics and cover different geographies. We\u2019ve received a lot of feedback from the food industry that there is a need for a more centralised and streamlined reporting process.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, " In order to support our clients and the food industry as a whole, we\u2019ve taken this feedback and developed this platform, which aims to make this process more efficient and uniform. We hope this platform offers a solution to food businesses to efficiently demonstrate their progress and mitigate reputation risk. Please reach out to us if we can help you with this reporting process. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, " 2. What benefits does this platform have for food businesses? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Reduce your reporting burden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, " The focus of animal advocacy groups is quickly shifting from policy adoption to policy enforcement and accountability, with both local and global organisations now launching questionnaires, surveys, trackers, and benchmarking tools to assess progress. Food and hospitality companies around the world are proactively seeking to report and communicate their progress to these advocacy groups and other key stakeholders.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, " WelfareProgress allows companies to publicly showcase their cage-free implementation progress on a single platform, and reduce the burden of filling out multiple questionnaires. We have got an agreement among key animal advocacy organisations to accept cage-free egg progress reporting from WelfareProgress as a preferred alternative to their individual progress surveys and questionnaires.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Increase transparency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, " With hundreds of food businesses around the world committing to go cage-free, it\u2019s now expected that companies report and disclose their progress on this issue. WelfareProgress helps companies demonstrate progress on their cage-free commitments through accurate, thorough and timely reporting, allowing them to provide credible information to investors, animal advocacy groups, suppliers and consumers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, " 3. What animal advocacy groups endorse this initiative? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Leading animal advocacy organisations endorse and support WelfareProgress. To make the reporting process more efficient and streamlined, they\u2019ve agreed to accept cage-free egg progress reporting from WelfareProgress as a preferred alternative to their individual cage-free egg progress surveys and questionnaires. We\u2019ll continue engaging with these and other stakeholders to ensure ongoing alignment around cage-free reporting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, " 4. What if I receive a request for reporting cage-free progress through a different questionnaire or platform? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Key animal advocacy organisations have agreed to accept cage-free egg progress reporting from WelfareProgress as a preferred alternative to their individual progress surveys and questionnaires. Please reach out to us if you receive requests to report through a different system, and we will be happy to get in touch with that organization.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, " 5. How do I report my cage-free progress? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "You can report your cage-free implementation progress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, " 6. What questions will I be asked? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, "You can view the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, "questions here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, " so that you can prepare your data in advance. Please note that this is just for your reference. You can report your progress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, " 7. What if I need help? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "We'd be happy to walk you through the reporting process and answer any questions you have. Please reach out to us at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "team@globalfoodpartners.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, " for assistance. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](170, "hr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "section", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "h2", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "An initiative supported by");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](183, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "q");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](186, "We believe that reporting on progress is an essential step to make sure cage-free policies are followed. We have been working with companies in Latin America and launched reports to share more about companies\u2019 progress in the region. We will be doing the same in Asia. We are happy to see a new platform that will centralize questionnaires and reporting from companies, so we decided to start sharing this new questionnaire with companies. We\u2019ll create regional reports using the public data available on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "welfareprogress.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](190, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, "Carolina Galvani, CEO, Sinergia Animal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](196, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "q");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, "At a time when transparency is more important than ever to consumers, WelfareProgress.com provides a centralized place for people to see how their favorite companies are measuring up on their promises to get hens out of cages. Animal Equality plans to work with over a hundred companies worldwide to start publishing their progress on the platform.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](200, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, "Katie Arth, International Director of Corporate Outreach, Animal Equality");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "h6", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](206, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "p", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "q");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209, "Mercy For Animals supports the comprehensive, uniform cage-free egg progress reporting enabled by WelfareProgress.com. As we encourage transparency on corporate animal welfare goals through initiatives like Monitor de Iniciativas Corporativas por los Animales, this tool streamlines reporting expectations and formats to help the world transition away from the caging of laying hens.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](210, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](212, "Zo\u00EB Sigle, Global Corporate Engagement Manager, Mercy For Animals ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](213, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](214, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.periods);
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTab, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionPanelTitle, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption], styles: [".mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.main-title[_ngcontent-%COMP%]{\n  \n  text-align: center;\n  color: rgb(51, 51, 51);\n  font-weight: 900;\n  font-size: 36px;\n  padding: 15px 0;\n}\nmat-panel-title[_ngcontent-%COMP%]{\n  font-size: 19px;\n  font-weight: 500;\n  color: #333;\n}\n.carouselOne[_ngcontent-%COMP%]{\n  \n  \n\n\n}\n.ans[_ngcontent-%COMP%]{\n  color: #666;\n  text-align: justify;\n  padding: 0 30px;\n}\n.report[_ngcontent-%COMP%]{\n  padding: 80px;\n}\n.ans-head[_ngcontent-%COMP%]{\n  margin: 10px 0 5px 0;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*='mat-elevation-z']) {\n  box-shadow: none;\n}\n.company[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  .mat-form-field-appearance-outline .mat-select-arrow-wrapper {\n  transform: translateY(0) !important;\n}\n  .mat-form-field-infix {\n  border-top: .3em solid transparent !important;\n}\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #61C9A8;\n}\n.soon[_ngcontent-%COMP%]{\n  color: grey;\n  cursor: not-allowed;\n  text-align: left;\n}\n.coming-soon[_ngcontent-%COMP%]{\n  padding-top: 10px;\n  color: grey;\n  font-size: 18px;\n  float: right;\n  font-weight: 2rem;\n}\n.heading1[_ngcontent-%COMP%]{\n  color: #333;\n  font-weight: 600;\n  font-size: 2.75rem;\n  text-align: left;\n}\n.heading2[_ngcontent-%COMP%]{\n  font-weight: 600;\n  font-size: 2.75rem;\n}\n.support-title[_ngcontent-%COMP%]{\n  text-indent: 50px;\n  padding-bottom: 15px;\n  text-align: justify;\n  font-weight: 400;\n  font-size: 1.5rem;\n}\n.ceo[_ngcontent-%COMP%]{\n  \n  text-align: left;\n  font-weight: 500;\n}\na[_ngcontent-%COMP%]{\n  color: #61C9A8;\n}\nbutton[_ngcontent-%COMP%]{\n  border-radius: 0%;\n  outline: none;\n  width: 30%;\n  color: white;\n  font-weight: 400;\n  background-color: #61C9A8;\n  height: 45px;\n  margin-bottom: 18px;\n}\n  .mat-form-field-outline-start,   .mat-form-field-outline-end {\n    border-radius: 0px !important;\n}\nhr[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 90%;\n  height: 4px;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #61C9A8;\n  border: 0 none;\n}\n.carousel-hr[_ngcontent-%COMP%]{\n    width: 70px;\n    height: 4px;\n    margin-left: 0;\n    margin-right: 0;\n    background-color: #61C9A8;\n    border: 0 none;\n    text-align: left;\n}\n.support-hr[_ngcontent-%COMP%]{\n  width: 50px;\n  height: 4px;\n  margin-left: 0;\n  margin-right: 0;\n  background-color: #61C9A8;\n  border: 0 none;\n  text-align: left;\n}\n.section1-hr[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.logo-size[_ngcontent-%COMP%]{\n  font-size: 50px;\n}\n  .mat-card{\n  \n  border:none !important;\n  transition: none !important;\n  box-shadow: none !important;\n}\n@media screen and (min-width:1166px) {\n  .card-section[_ngcontent-%COMP%]{ padding-right:60px;}\n}\n.period[_ngcontent-%COMP%]{\n  width: 70%;\n}\n.slide-container[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  color: white;\n}\n.centered[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.img-center[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 86%;\n  height: 500px;\n}\n.image[_ngcontent-%COMP%]:after {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  content:'\\A';\n  position:absolute;\n  width:86%;\n  height:100%;\n  top:0; left:7%;\n  background:rgba(0,0,0,0.6);\n  opacity:0;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  opacity:1;\n}\n  .owl-carousel .owl-item img{\n  display: block;\n  width: 50%;\n}\n.containerrr[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  display : flex;\n  flex-direction : row;\n\n  }\n.carousel-main[_ngcontent-%COMP%]{\n  margin-top: 100px;\n}\n\n.checklist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: url('check.png') no-repeat left center;\n  padding: 5px 10px 5px 50px;\n  list-style: none;\n  margin-top: 5px;\n  vertical-align: middle;\n}\n  .owl-theme .owl-dots .owl-dot span {\n  width: 100px;\n  height: auto;\n  font-size: 16px;\n  margin: 5px 7px;\n  background: #e3fffa;\n  display: block;\n  transition: opacity .2s ease;\n  border-radius: 4px;\n  position: relative;\n}\n  .owl-theme .owl-dots .owl-dot.active span, .owl-theme[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  background: #61C9A8;\n}\n\n.mat-card-actions[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0;\n}\n.wrapper[_ngcontent-%COMP%] {\n  margin: 100px;\n}\nmat-expansion-panel-header[_ngcontent-%COMP%] {\n  height: 100% !important;\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsdURBQXVEO0VBQ3ZELGtCQUFrQjs7O0FBR3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBOzs7Ozs7Ozs7Ozs7O0VBYUU7QUFFRDtFQUNDLG1DQUFtQztBQUNyQztBQUlBO0VBQ0UsNkNBQTZDO0FBQy9DO0FBR0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUVBOztJQUVJLDZCQUE2QjtBQUNqQztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBR0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUdBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsMkJBQTJCO0FBQzdCO0FBR0E7RUFDRSxlQUFlLGtCQUFrQixDQUFDO0FBQ3BDO0FBR0E7RUFDRSxVQUFVO0FBQ1o7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7QUFHQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0FBQ2Y7QUFHQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsU0FBUztFQUNULFdBQVc7RUFDWCxLQUFLLEVBQUUsT0FBTztFQUNkLDBCQUEwQjtFQUMxQixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QixTQUFTO0FBQ1g7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0FBQ1o7QUFHQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7O0VBRXBCO0FBR0Y7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTs7R0FFRztBQUlIO0VBQ0Usa0RBQWdFO0VBQ2hFLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUlBOztHQUVHO0FBRUg7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFHQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLm1haW4tdGl0bGV7XG4gIC8qIG1hcmdpbi10b3A6IDYwcHg7ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG5cbm1hdC1wYW5lbC10aXRsZXtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmNhcm91c2VsT25le1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pbWcvc2xpZGUxLmpwZycpOyAqL1xuICAvKiBvcGFjaXR5OiAwLjU7ICovXG5cblxufVxuXG4uYW5ze1xuICBjb2xvcjogIzY2NjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZzogMCAzMHB4O1xufVxuXG4ucmVwb3J0e1xuICBwYWRkaW5nOiA4MHB4O1xufVxuXG4uYW5zLWhlYWR7XG4gIG1hcmdpbjogMTBweCAwIDVweCAwO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNvbXBhbnkge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMxYzg3Yzk7XG59XG4gKi9cblxuIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtc2VsZWN0LWFycm93LXdyYXBwZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgIWltcG9ydGFudDtcbn1cblxuXG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBib3JkZXItdG9wOiAuM2VtIHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBjb2xvcjogIzYxQzlBODtcbn1cblxuLnNvb257XG4gIGNvbG9yOiBncmV5O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY29taW5nLXNvb257XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiAycmVtO1xufVxuXG4uaGVhZGluZzF7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIuNzVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5oZWFkaW5nMntcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyLjc1cmVtO1xufVxuXG4uc3VwcG9ydC10aXRsZXtcbiAgdGV4dC1pbmRlbnQ6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmNlb3tcbiAgLyogcGFkZGluZy1sZWZ0OiAxMnB4OyAqL1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5he1xuICBjb2xvcjogIzYxQzlBODtcbn1cblxuYnV0dG9ue1xuICBib3JkZXItcmFkaXVzOiAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDMwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFDOUE4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCxcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xufVxuXG5ociB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFDOUE4O1xuICBib3JkZXI6IDAgbm9uZTtcbn1cblxuLmNhcm91c2VsLWhye1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFDOUE4O1xuICAgIGJvcmRlcjogMCBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cblxuLnN1cHBvcnQtaHJ7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxQzlBODtcbiAgYm9yZGVyOiAwIG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5zZWN0aW9uMS1ociB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cblxuLmxvZ28tc2l6ZXtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1jYXJke1xuICAvKiBtYXJnaW46IDAgMjBweDsgKi9cbiAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMTY2cHgpIHtcbiAgLmNhcmQtc2VjdGlvbnsgcGFkZGluZy1yaWdodDo2MHB4O31cbn1cblxuXG4ucGVyaW9ke1xuICB3aWR0aDogNzAlO1xufVxuXG5cblxuLnNsaWRlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cblxuLmltZy1jZW50ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDg2JTtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuXG4uaW1hZ2U6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgY29udGVudDonXFxBJztcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHdpZHRoOjg2JTtcbiAgaGVpZ2h0OjEwMCU7XG4gIHRvcDowOyBsZWZ0OjclO1xuICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC42KTtcbiAgb3BhY2l0eTowO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgb3BhY2l0eToxO1xufVxuXG46Om5nLWRlZXAgLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gaW1ne1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUwJTtcbn1cblxuXG4uY29udGFpbmVycnIgLmJveCB7XG4gIGRpc3BsYXkgOiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbiA6IHJvdztcblxuICB9XG5cblxuLmNhcm91c2VsLW1haW57XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4vKiAuc3VwcG9ydC1sb2dvc3tcbiAgcGFkZGluZzogMCA5MHB4O1xufSAqL1xuXG5cblxuLmNoZWNrbGlzdCBsaSB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vYXNzZXRzL2ltZy9jaGVjay5wbmcnKSBuby1yZXBlYXQgbGVmdCBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCA1MHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbjo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdCBzcGFuIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiA1cHggN3B4O1xuICBiYWNrZ3JvdW5kOiAjZTNmZmZhO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbjo6bmctZGVlcCAub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdC5hY3RpdmUgc3BhbiwgLm93bC10aGVtZSAub3dsLWRvdHMgLm93bC1kb3Q6aG92ZXIgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICM2MUM5QTg7XG59XG5cblxuXG4vKiAudGFiLWltZ3tcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufSAqL1xuXG4ubWF0LWNhcmQtYWN0aW9ucywgLm1hdC1jYXJkLXN1YnRpdGxlLCAubWF0LWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ud3JhcHBlciB7XG4gIG1hcmdpbjogMTAwcHg7XG59XG5cblxubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59Il19 */"] });


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
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 15, vars: 0, consts: [[1, "relative", "pt-8", "pb-6"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["fxFlex", "85%", "fxFlex.md", "90%", "fxFlex.sm", "95%", "fxFlex.xs", "95%"], [1, "mx-auto"], [1, "flex", "flex-wrap", "text-center", "lg:text-left", "py-10"], [1, "w-full", "lg:w-6/12"], [1, "text-3xl", "font-semibold"], [1, "mt-4", "mb-2", "heading-color"], ["href", "https://globalfoodpartners.com/", "target", "_blank", 1, "text-heading-color", "hover:text-blueGray-800"], [1, "mt-4", "ml-1", "lg:mb-0", "mb-6"], ["href", "https://www.linkedin.com/company/36019661/admin/", "target", "_blank", "onclick", "window.open('https://www.linkedin.com/company/36019661/admin/', '_blank'); return false;", 1, "bg-blueGray-200", "heading-color"], ["width", "18", "src", "../../assets/img/GFP-icon-linkedin.png"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Copyright \u00A9 2021 ");
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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultFlexDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);




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
    } }, decls: 51, vars: 0, consts: [["role", "navigation", 1, "navbar", "navbar-inverse", "navbar-fixed-top"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["fxFlex", "90%", "fxFlex.md", "90%", "fxFlex.sm", "90%", "fxFlex.xs", "90%"], [1, "container-fluid"], [1, "navbar-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbar", "aria-expanded", "false", "aria-controls", "navbar", 1, "navbar-toggle", "collapsed"], [1, "sr-only"], [1, "icon-bar"], ["fxLayout", "row wrap", "fxLayoutAlign", "start center", 1, "mt-5"], ["fxFlex", "62%", "fxFlex.md", "62%", "fxFlex.sm", "62%", "fxFlex.xs", "95%"], [1, "py-3", "heading-color", "text-2xl"], ["fxFlex", "38%", "fxFlex.md", "38%", "fxFlex.sm", "37%", "fxFlex.xs", "95%"], ["href", "http://globalfoodpartners.org/", "target", "_blank"], ["alt", "Logo", "src", "../../../assets/img/newlogo.png", "width", "150", "height", "70"], ["id", "navbar", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "navbar-right"], [1, "dropdown"], ["data-toggle", "dropdown", 1, "btn-signin", "heading-color", "my-4", "text-md", "dropdown-toggle"], [1, "caret"], ["role", "menu", 1, "dropdown-menu", "dropdown-lr", "animated", "slideInRight"], [1, "construction"], [1, "col-lg-12", "mt-4"], ["id", "ajax-login-form", "action", "", "method", "post", "role", "form", "autocomplete", "off"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", "id", "username", "tabindex", "1", "placeholder", "Email ID", "value", "", "autocomplete", "off", "disabled", "", 1, "form-control"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "tabindex", "2", "placeholder", "Password", "autocomplete", "off", "disabled", "", 1, "form-control"], [1, "row"], [1, "col-xs-6", "pull-left", "button-lc"], ["type", "submit", "name", "login-submit", "id", "login-submit", "value", "Sign In", "disabled", "", 1, "form-control", "btn", "btn-success1"], [1, "col-xs-6", "pull-right"], ["href", "https://app.welfareprogress.com/#/authentication/signup", "target", "_blank", "type", "submit", "name", "create-submit", "id", "create-submit", "value", "Create Account", "disabled", "", 1, "form-control", "btn", "btn-success2"], [1, "col-lg-12"], [1, "text-center"], ["disabled", "", 1, "forgot-password"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "WelfareProgress by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Report cage-free progress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Under construction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "form", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Email ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Forgot password?");
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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm], styles: ["nav[_ngcontent-%COMP%]{\n  box-shadow: 0px 1px 10px #ccc;\n  background-color: #fff;\n}\n\nnav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]{\n  display: flex;\n  flex: 1;\n}\n\nnav[_ngcontent-%COMP%]   .nav-items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n  list-style: none;\n  padding: 0 8px;\n}\n\n.nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .nav[_ngcontent-%COMP%]   .open[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{\n    background-color: #61C9A8;\n    color: white;\n}\n\n.btn-success1[_ngcontent-%COMP%] {\n    color: #fff;\n    font-weight: bold;\n    background-color: #61C9A8;\n    border: 1px solid #61C9A8;\n}\n\n.btn-success1[_ngcontent-%COMP%]:hover{\n    background-color: #8dddc4;\n}\n\n.btn-success2[_ngcontent-%COMP%] {\n    color: #61C9A8;\n    font-weight: bold;\n    background-color: #e8fff8;\n}\n\n[type='text'][_ngcontent-%COMP%], [type='password'][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n    background-color: #fff;\n    border-color: #c4c4c4;\n    font-size: 1.5rem;\n}\n\n.btn-signin[_ngcontent-%COMP%], .btn-signin[_ngcontent-%COMP%]:active {\n    padding: 0 20px;\n    color: back;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.construction[_ngcontent-%COMP%]{\n  text-align: center;\n  color: grey;\n  font-weight: bold;\n}\n\n.forgot-password[_ngcontent-%COMP%]{\n  color: #61C9A8;\n}\n\n.navbar-inverse[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%] {\n  border-color: #61C9A8;\n}\n\n.navbar-inverse[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%] {\n  background-color: #61C9A8;\n}\n\n.navbar-inverse[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:focus, .navbar-inverse[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #c9f5e7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztBQUNUOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFHQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUdBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUdBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5uYXZ7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5uYXYgLm5hdi1pdGVtc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cblxubmF2IC5uYXYtaXRlbXMgbGl7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDAgOHB4O1xufVxuXG4ubmF2IC5vcGVuPmEsIC5uYXYgLm9wZW4+YTpmb2N1cywgLm5hdiAub3Blbj5hOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MUM5QTg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cbi5idG4tc3VjY2VzczEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MUM5QTg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzYxQzlBODtcbn1cbi5idG4tc3VjY2VzczE6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhkZGRjNDtcbn1cblxuLmJ0bi1zdWNjZXNzMiB7XG4gICAgY29sb3I6ICM2MUM5QTg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZmZmODtcbn1cblxuW3R5cGU9J3RleHQnXSwgW3R5cGU9J3Bhc3N3b3JkJ10sdGV4dGFyZWEsIHNlbGVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICNjNGM0YzQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cblxuLmJ0bi1zaWduaW4sIC5idG4tc2lnbmluOmFjdGl2ZSB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGNvbG9yOiBiYWNrO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cblxuLm5hdj5saSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cblxuLmNvbnN0cnVjdGlvbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb3Jnb3QtcGFzc3dvcmR7XG4gIGNvbG9yOiAjNjFDOUE4O1xufVxuXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci10b2dnbGUge1xuICBib3JkZXItY29sb3I6ICM2MUM5QTg7XG59XG5cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXRvZ2dsZSAuaWNvbi1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFDOUE4O1xufVxuXG5cbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLXRvZ2dsZTpmb2N1cywgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItdG9nZ2xlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5ZjVlNztcbn1cblxuIl19 */"] });


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