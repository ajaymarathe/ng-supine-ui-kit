(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('base-carousel', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['base-carousel'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-carousel.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseCarouselComponent = /** @class */ (function () {
        function BaseCarouselComponent() {
        }
        /**
         * @return {?}
         */
        BaseCarouselComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BaseCarouselComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'base-carousel',
                        template: "<div [id]=\"target\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <ng-content></ng-content>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        BaseCarouselComponent.ctorParameters = function () { return []; };
        BaseCarouselComponent.propDecorators = {
            target: [{ type: core.Input }]
        };
        return BaseCarouselComponent;
    }());
    if (false) {
        /** @type {?} */
        BaseCarouselComponent.prototype.target;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-carousel.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseCarouselModule = /** @class */ (function () {
        function BaseCarouselModule() {
        }
        BaseCarouselModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BaseCarouselComponent],
                        imports: [],
                        exports: [BaseCarouselComponent]
                    },] }
        ];
        return BaseCarouselModule;
    }());

    exports.BaseCarouselComponent = BaseCarouselComponent;
    exports.BaseCarouselModule = BaseCarouselModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=base-carousel.umd.js.map
