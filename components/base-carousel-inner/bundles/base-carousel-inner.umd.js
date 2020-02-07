(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('base-carousel-inner', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['base-carousel-inner'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-carousel-inner.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseCarouselInnerComponent = /** @class */ (function () {
        function BaseCarouselInnerComponent() {
        }
        /**
         * @return {?}
         */
        BaseCarouselInnerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BaseCarouselInnerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'base-carousel-inner',
                        template: "<div class=\"carousel-inner\">\r\n    <ng-content></ng-content>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        BaseCarouselInnerComponent.ctorParameters = function () { return []; };
        return BaseCarouselInnerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-carousel-inner.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseCarouselInnerModule = /** @class */ (function () {
        function BaseCarouselInnerModule() {
        }
        BaseCarouselInnerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BaseCarouselInnerComponent],
                        imports: [],
                        exports: [BaseCarouselInnerComponent]
                    },] }
        ];
        return BaseCarouselInnerModule;
    }());

    exports.BaseCarouselInnerComponent = BaseCarouselInnerComponent;
    exports.BaseCarouselInnerModule = BaseCarouselInnerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=base-carousel-inner.umd.js.map
