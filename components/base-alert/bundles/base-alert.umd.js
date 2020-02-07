(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('base-alert', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['base-alert'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-alert.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseAlertComponent = /** @class */ (function () {
        function BaseAlertComponent() {
        }
        /**
         * @return {?}
         */
        BaseAlertComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BaseAlertComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'base-alert',
                        template: "<div [class]=\"'alert alert-'+color\" role=\"alert\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    <ng-content></ng-content>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        BaseAlertComponent.ctorParameters = function () { return []; };
        BaseAlertComponent.propDecorators = {
            color: [{ type: core.Input }],
            dark: [{ type: core.Input }]
        };
        return BaseAlertComponent;
    }());
    if (false) {
        /** @type {?} */
        BaseAlertComponent.prototype.color;
        /** @type {?} */
        BaseAlertComponent.prototype.dark;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-alert.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseAlertModule = /** @class */ (function () {
        function BaseAlertModule() {
        }
        BaseAlertModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BaseAlertComponent],
                        imports: [],
                        exports: [BaseAlertComponent]
                    },] }
        ];
        return BaseAlertModule;
    }());

    exports.BaseAlertComponent = BaseAlertComponent;
    exports.BaseAlertModule = BaseAlertModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=base-alert.umd.js.map
