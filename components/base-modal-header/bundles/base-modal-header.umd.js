(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('base-modal-header', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['base-modal-header'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-modal-header.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseModalHeaderComponent = /** @class */ (function () {
        function BaseModalHeaderComponent() {
        }
        /**
         * @return {?}
         */
        BaseModalHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BaseModalHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'base-modal-header',
                        template: "<div class=\"modal-header\">\r\n    <ng-content></ng-content>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        BaseModalHeaderComponent.ctorParameters = function () { return []; };
        return BaseModalHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-modal-header.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseModalHeaderModule = /** @class */ (function () {
        function BaseModalHeaderModule() {
        }
        BaseModalHeaderModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BaseModalHeaderComponent],
                        imports: [],
                        exports: [BaseModalHeaderComponent]
                    },] }
        ];
        return BaseModalHeaderModule;
    }());

    exports.BaseModalHeaderComponent = BaseModalHeaderComponent;
    exports.BaseModalHeaderModule = BaseModalHeaderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=base-modal-header.umd.js.map
