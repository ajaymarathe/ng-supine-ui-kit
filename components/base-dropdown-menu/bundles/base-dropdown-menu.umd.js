(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('base-dropdown-menu', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['base-dropdown-menu'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-dropdown-menu.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseDropdownMenuComponent = /** @class */ (function () {
        function BaseDropdownMenuComponent() {
        }
        /**
         * @return {?}
         */
        BaseDropdownMenuComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BaseDropdownMenuComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'base-dropdown-menu',
                        template: "<div [class]=\"'dropdown-menu dropdown-menu-'+align\" aria-labelledby=\"dropdownMenuButton\">\r\n    <ng-content></ng-content>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        BaseDropdownMenuComponent.ctorParameters = function () { return []; };
        BaseDropdownMenuComponent.propDecorators = {
            align: [{ type: core.Input }]
        };
        return BaseDropdownMenuComponent;
    }());
    if (false) {
        /** @type {?} */
        BaseDropdownMenuComponent.prototype.align;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-dropdown-menu.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseDropdownMenuModule = /** @class */ (function () {
        function BaseDropdownMenuModule() {
        }
        BaseDropdownMenuModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BaseDropdownMenuComponent],
                        imports: [],
                        exports: [BaseDropdownMenuComponent]
                    },] }
        ];
        return BaseDropdownMenuModule;
    }());

    exports.BaseDropdownMenuComponent = BaseDropdownMenuComponent;
    exports.BaseDropdownMenuModule = BaseDropdownMenuModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=base-dropdown-menu.umd.js.map
