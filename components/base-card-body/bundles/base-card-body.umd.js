(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('base-card-body', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['base-card-body'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-card-body.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseCardBodyComponent = /** @class */ (function () {
        function BaseCardBodyComponent() {
        }
        /**
         * @return {?}
         */
        BaseCardBodyComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BaseCardBodyComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'base-card-body',
                        template: "<div class=\"card-body\">\r\n    <ng-content></ng-content>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        BaseCardBodyComponent.ctorParameters = function () { return []; };
        return BaseCardBodyComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-card-body.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseCardBodyModule = /** @class */ (function () {
        function BaseCardBodyModule() {
        }
        BaseCardBodyModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BaseCardBodyComponent],
                        imports: [],
                        exports: [BaseCardBodyComponent]
                    },] }
        ];
        return BaseCardBodyModule;
    }());

    exports.BaseCardBodyComponent = BaseCardBodyComponent;
    exports.BaseCardBodyModule = BaseCardBodyModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=base-card-body.umd.js.map
