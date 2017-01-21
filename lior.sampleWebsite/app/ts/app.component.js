"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var slideTime = 1500;
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.name = 'Angular';
        this.visible = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('window.innerHeight ' + window.innerHeight);
        console.log('window.outerHeight ' + window.outerHeight);
        console.log('screen.height ' + screen.height);
        setTimeout(function () { _this.visible = false; }, 4000);
    };
    AppComponent.prototype.animationDone = function ($event) {
        if ($event.toState == "void") {
            document.getElementById('container').style.display = 'none';
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            templateUrl: '../html/app.component.html',
            styleUrls: ['../scss/app.component.css'],
            animations: [
                core_1.trigger('topLeft', [
                    core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                    core_1.transition('* => void', [
                        core_1.animate('1.5s', core_1.style({ transform: 'translate(-100%,-100%)' }))
                    ])
                ]),
                core_1.trigger('topRight', [
                    core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                    core_1.transition('* => void', [
                        core_1.animate('1.5s', core_1.style({ transform: 'translate(100%,-100%)' }))
                    ])
                ]),
                core_1.trigger('bottomRight', [
                    core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                    core_1.transition('* => void', [
                        core_1.animate('1.5s', core_1.style({ transform: 'translate(100%,100%)' }))
                    ])
                ]),
                core_1.trigger('bottomLeft', [
                    core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                    core_1.transition('* => void', [
                        core_1.animate('1.5s', core_1.style({ transform: 'translate(-100%,100%)' }))
                    ])
                ]),
                core_1.trigger('container', [
                    core_1.state('in', core_1.style({ transform: 'translateX(0)' })),
                    core_1.transition('* => void', [
                        core_1.animate('0s 2s', core_1.style({ transform: 'translate(-100%,100%)' }))
                    ])
                ]),
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map