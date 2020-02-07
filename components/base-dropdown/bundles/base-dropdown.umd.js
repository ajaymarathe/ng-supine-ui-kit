(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('base-dropdown', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['base-dropdown'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-dropdown.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseDropdownComponent = /** @class */ (function () {
        function BaseDropdownComponent() {
        }
        /**
         * @return {?}
         */
        BaseDropdownComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BaseDropdownComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'base-dropdown',
                        template: "<div class=\"dropdown\">\r\n    <ng-content></ng-content>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        BaseDropdownComponent.ctorParameters = function () { return []; };
        return BaseDropdownComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-dropdown.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseDropdownModule = /** @class */ (function () {
        function BaseDropdownModule() {
        }
        BaseDropdownModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BaseDropdownComponent],
                        imports: [],
                        exports: [BaseDropdownComponent]
                    },] }
        ];
        return BaseDropdownModule;
    }());

    exports.BaseDropdownComponent = BaseDropdownComponent;
    exports.BaseDropdownModule = BaseDropdownModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=base-dropdown.umd.js.map
