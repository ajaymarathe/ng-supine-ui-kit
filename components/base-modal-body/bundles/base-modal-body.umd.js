(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('base-modal-body', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['base-modal-body'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-modal-body.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseModalBodyComponent = /** @class */ (function () {
        function BaseModalBodyComponent() {
        }
        /**
         * @return {?}
         */
        BaseModalBodyComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BaseModalBodyComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'base-modal-body',
                        template: "<div class=\"modal-body\">\r\n    <ng-content></ng-content>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        BaseModalBodyComponent.ctorParameters = function () { return []; };
        return BaseModalBodyComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-modal-body.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseModalBodyModule = /** @class */ (function () {
        function BaseModalBodyModule() {
        }
        BaseModalBodyModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BaseModalBodyComponent],
                        imports: [],
                        exports: [BaseModalBodyComponent]
                    },] }
        ];
        return BaseModalBodyModule;
    }());

    exports.BaseModalBodyComponent = BaseModalBodyComponent;
    exports.BaseModalBodyModule = BaseModalBodyModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=base-modal-body.umd.js.map
