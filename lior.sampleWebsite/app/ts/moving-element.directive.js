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
var MovingElementDirective = (function () {
    function MovingElementDirective(elementRef) {
        this.elementRef = elementRef;
    }
    MovingElementDirective.prototype.onMouseEnter = function () {
        console.log('mouseenter');
        this.timer = null;
    };
    MovingElementDirective.prototype.onMouseLeave = function () {
        console.log('mouseleave');
        this.moveIt();
    };
    MovingElementDirective.prototype.moveIt = function () {
        var _this = this;
        this.timer = setInterval(function () {
            var nativeWidth = _this.nativeElement.offsetWidth;
            var maxNativeWidth = nativeWidth / 2;
            var nativeHeight = _this.nativeElement.offsetHeight;
            var maxNativeHeight = nativeHeight / 2;
            var parentWidth = _this.parentElement.offsetWidth;
            var parentHeight = _this.parentElement.offsetHeight;
            var maxStepWidth = parentWidth / 2 - maxNativeWidth;
            var maxStepHeight = parentHeight / 2 - maxNativeHeight;
            _this.offsetLeft++;
            _this.offsetTop++;
            if (_this.offsetLeft > maxStepWidth)
                _this.offsetLeft = 0;
            if (_this.offsetTop > maxStepHeight)
                _this.offsetTop = 0;
            _this.nativeElement.style.top = "-" + _this.offsetTop + "px";
            _this.nativeElement.style.left = _this.offsetLeft + "px";
        }, 10);
    };
    MovingElementDirective.prototype.ngOnInit = function () {
        this.nativeElement = this.elementRef.nativeElement;
        this.parentElement = this.nativeElement.parentElement;
        this.offsetLeft = 0;
        this.offsetTop = 0;
        this.moveIt();
    };
    __decorate([
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MovingElementDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MovingElementDirective.prototype, "onMouseLeave", null);
    MovingElementDirective = __decorate([
        core_1.Directive({ selector: '[moving-element]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MovingElementDirective);
    return MovingElementDirective;
}());
exports.MovingElementDirective = MovingElementDirective;
//# sourceMappingURL=moving-element.directive.js.map