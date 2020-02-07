(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('base-card-footer', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['base-card-footer'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-card-footer.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseCardFooterComponent = /** @class */ (function () {
        function BaseCardFooterComponent() {
        }
        /**
         * @return {?}
         */
        BaseCardFooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BaseCardFooterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'base-card-footer',
                        template: "\n    <p>\n      base-card-footer works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        BaseCardFooterComponent.ctorParameters = function () { return []; };
        return BaseCardFooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-card-footer.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseCardFooterModule = /** @class */ (function () {
        function BaseCardFooterModule() {
        }
        BaseCardFooterModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BaseCardFooterComponent],
                        imports: [],
                        exports: [BaseCardFooterComponent]
                    },] }
        ];
        return BaseCardFooterModule;
    }());

    exports.BaseCardFooterComponent = BaseCardFooterComponent;
    exports.BaseCardFooterModule = BaseCardFooterModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=base-card-footer.umd.js.map
