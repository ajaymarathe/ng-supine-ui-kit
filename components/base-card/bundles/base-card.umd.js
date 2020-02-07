(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('base-card', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['base-card'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-card.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseCardComponent = /** @class */ (function () {
        function BaseCardComponent() {
        }
        /**
         * @return {?}
         */
        BaseCardComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BaseCardComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'base-card',
                        template: "<div [class]=\"'card '+'bg-'+color\">\r\n    <ng-content></ng-content>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        BaseCardComponent.ctorParameters = function () { return []; };
        BaseCardComponent.propDecorators = {
            color: [{ type: core.Input }]
        };
        return BaseCardComponent;
    }());
    if (false) {
        /** @type {?} */
        BaseCardComponent.prototype.color;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-card.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseCardModule = /** @class */ (function () {
        function BaseCardModule() {
        }
        BaseCardModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BaseCardComponent],
                        imports: [],
                        exports: [BaseCardComponent]
                    },] }
        ];
        return BaseCardModule;
    }());

    exports.BaseCardComponent = BaseCardComponent;
    exports.BaseCardModule = BaseCardModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=base-card.umd.js.map
