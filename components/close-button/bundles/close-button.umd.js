(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('close-button', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['close-button'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/close-button.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CloseButtonComponent = /** @class */ (function () {
        function CloseButtonComponent() {
        }
        /**
         * @return {?}
         */
        CloseButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        CloseButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'close-button',
                        template: "<button type=\"button\" class=\"close\" [attr.data-dismiss]=\"dismiss\" aria-label=\"Close\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n</button>"
                    }] }
        ];
        /** @nocollapse */
        CloseButtonComponent.ctorParameters = function () { return []; };
        CloseButtonComponent.propDecorators = {
            dismiss: [{ type: core.Input }]
        };
        return CloseButtonComponent;
    }());
    if (false) {
        /** @type {?} */
        CloseButtonComponent.prototype.dismiss;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/close-button.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CloseButtonModule = /** @class */ (function () {
        function CloseButtonModule() {
        }
        CloseButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [CloseButtonComponent],
                        imports: [],
                        exports: [CloseButtonComponent]
                    },] }
        ];
        return CloseButtonModule;
    }());

    exports.CloseButtonComponent = CloseButtonComponent;
    exports.CloseButtonModule = CloseButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=close-button.umd.js.map
