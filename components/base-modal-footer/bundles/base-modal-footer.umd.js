(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('base-modal-footer', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['base-modal-footer'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-modal-footer.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseModalFooterComponent = /** @class */ (function () {
        function BaseModalFooterComponent() {
        }
        /**
         * @return {?}
         */
        BaseModalFooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BaseModalFooterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'base-modal-footer',
                        template: "<div class=\"modal-footer\">\r\n    <ng-content></ng-content>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        BaseModalFooterComponent.ctorParameters = function () { return []; };
        return BaseModalFooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-modal-footer.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseModalFooterModule = /** @class */ (function () {
        function BaseModalFooterModule() {
        }
        BaseModalFooterModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BaseModalFooterComponent],
                        imports: [],
                        exports: [BaseModalFooterComponent]
                    },] }
        ];
        return BaseModalFooterModule;
    }());

    exports.BaseModalFooterComponent = BaseModalFooterComponent;
    exports.BaseModalFooterModule = BaseModalFooterModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=base-modal-footer.umd.js.map
