(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('base-carousel-caption', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['base-carousel-caption'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-carousel-caption.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseCarouselCaptionComponent = /** @class */ (function () {
        function BaseCarouselCaptionComponent() {
        }
        /**
         * @return {?}
         */
        BaseCarouselCaptionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BaseCarouselCaptionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'base-carousel-caption',
                        template: "<div class=\"carousel-caption d-none d-md-block\">\r\n    <ng-content></ng-content>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        BaseCarouselCaptionComponent.ctorParameters = function () { return []; };
        return BaseCarouselCaptionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-carousel-caption.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseCarouselCaptionModule = /** @class */ (function () {
        function BaseCarouselCaptionModule() {
        }
        BaseCarouselCaptionModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BaseCarouselCaptionComponent],
                        imports: [],
                        exports: [BaseCarouselCaptionComponent]
                    },] }
        ];
        return BaseCarouselCaptionModule;
    }());

    exports.BaseCarouselCaptionComponent = BaseCarouselCaptionComponent;
    exports.BaseCarouselCaptionModule = BaseCarouselCaptionModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=base-carousel-caption.umd.js.map
