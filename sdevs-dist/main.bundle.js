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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input {\n  border-radius: 0;\n  outline: none;\n}\n.input:hover {\n  border: 1px solid #9b59b6;\n}\n.btn {\n  border: none;\n  border-radius: 0;\n  background-color: #9b59b6;\n}\n.btn:hover {\n  background-color: #8e44ad;\n}\n\n.user {\n  border: 1px solid #9b59b6;\n  cursor: pointer;\n  padding: 1em;\n  margin: 1em;\n}\n\n.user:hover {\n  box-shadow: 1px 2px 3px #ccc;\n}\n\n.box {\n  border: 1px solid #9b59b6;\n  padding: 2em;\n}\n\n.box > .details {\n  margin-top: 1em;\n  font-family: monospace;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row text-center\">\n    <div class=\"col-md-12\">\n      <h2>Find developers in your city</h2>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 col-md-offset-3\">\n      <div class=\"form-inline\">\n        <input placeholder=\"Location Name\" class=\"form-control input-lg input\" #place (keyup.enter)=\"search(place.value, language.value);\n        place.value='';\n        language.value='';\" />\n        <input placeholder=\"Language e.g. JavaScript\" class=\"form-control input-lg input\" #language\n               (keyup.enter)=\"search(place.value, language.value);\n               place.value='';\n               language.value='';\" />\n        <button class=\"btn btn-primary btn-lg\"\n                (click)=\"search(place.value, language.value);\n                place.value='';\n                language.value='';\">Search</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <p class=\"text-center\" style=\"padding: 1em; color:red;\"\n       *ngIf=\"error_text\">{{ error_text }}</p>\n    <div [ngClass]=\"{'col-md-9': selected, 'col-md-12': !selected}\">\n      <div class=\"user col-md-2 text-center\"\n           *ngFor=\"let user of results\"\n           (click)=\"getDetails(user.login)\">\n        <div class=\"img_container\">\n          <img src=\"{{user.avatar_url}}\" class=\"img-circle\" width=\"100\" height=\"100\">\n        </div>\n        <div class=\"details_container\">\n          <a href=\"{{user.html_url}}\" target=\"_blank\" class=\"login_name\">{{ user.login }}</a>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"results.length && selected\" class=\"col-md-3\">\n\n      <div class=\"box text-center\">\n        <img src=\"{{selectedUser.avatar_url}}\" class=\"img-responsive img-circle\">\n        <div class=\"details\">\n          <div *ngIf=\"selectedUser.name\">\n            <a href=\"{{ selectedUser.html_url }}\" target=\"_blank\"><h3>{{ selectedUser.name }} </h3></a>\n          </div>\n          <hr>\n          <div *ngIf=\"selectedUser.email\">Email: {{ selectedUser.email }}</div>\n          <hr>\n          <div *ngIf=\"selectedUser.location\">Location: {{ selectedUser.location }}</div>\n          <hr>\n          <div *ngIf=\"selectedUser.bio\">Bio: {{ selectedUser.bio }}</div>\n          <hr>\n          <div *ngIf=\"selectedUser.updated_at\">Last Seen: {{ selectedUser.updated_at | date }}</div>\n          <hr>\n          <div *ngIf=\"selectedUser.public_repos\">Repos: {{ selectedUser.public_repos }}</div>\n          <hr>\n          <div *ngIf=\"selectedUser.public_gists\">Gists: {{ selectedUser.public_gists }}</div>\n          <hr>\n          <div *ngIf=\"selectedUser.followers\">Followers: {{ selectedUser.followers }}</div>\n          <hr>\n          <div *ngIf=\"selectedUser.created_at\">Joined github: {{ selectedUser.created_at | date }}</div>\n          <hr>\n          <button class=\"btn btn-sm btn-warning\" (click)=\"selected = !selected\">Back</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_users_service__ = __webpack_require__("../../../../../src/app/search-users.service.ts");
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
    function AppComponent(searchService) {
        this.searchService = searchService;
        this.results = [];
        this.selected = false;
        this.error_text = "";
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.search = function (place, language) {
        var _this = this;
        this.selected = false;
        this.error_text = "";
        if (place || language) {
            this.place = place;
            this.language = language;
            this.searchService.getUsersByPlaceAndLanguage(place, language).subscribe(function (users) {
                _this.results = users;
            }, function (error) {
                _this.results = [];
                _this.error_text = "Sorry! No Users found. Try again";
                console.error(error);
            });
        }
    };
    AppComponent.prototype.getDetails = function (username) {
        var _this = this;
        this.searchService.getDetailsByUserName(username).subscribe(function (userDatils) {
            _this.selectedUser = userDatils;
            _this.selected = true;
        }, function (error) {
            _this.selected = false;
            console.error(error);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__search_users_service__["a" /* SearchUsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__search_users_service__["a" /* SearchUsersService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_users_service__ = __webpack_require__("../../../../../src/app/search-users.service.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__search_users_service__["a" /* SearchUsersService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/search-users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchUsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchUsersService = (function () {
    function SearchUsersService(http) {
        this.http = http;
        this.searchUsersEndPoint = "https://api.github.com/search/users?q=";
        this.getUserDetailsEndPoint = "https://api.github.com/users/";
    }
    SearchUsersService.prototype.getUsersByPlaceAndLanguage = function (place, language) {
        var url;
        if (place && !language) {
            url = this.searchUsersEndPoint + "location:" + place;
        }
        else if (!place && language) {
            url = this.searchUsersEndPoint + "location:" + language;
        }
        else {
            url = this.searchUsersEndPoint + "location:" + place + "+language:" + language;
        }
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    SearchUsersService.prototype.getDetailsByUserName = function (username) {
        if (username) {
            var url = "" + this.getUserDetailsEndPoint + username;
            return this.http.get(url)
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
    };
    SearchUsersService.prototype.extractData = function (res) {
        var body = res.json();
        return body.items || {};
    };
    SearchUsersService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || "";
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || "") + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return SearchUsersService;
}());
SearchUsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SearchUsersService);

var _a;
//# sourceMappingURL=search-users.service.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
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