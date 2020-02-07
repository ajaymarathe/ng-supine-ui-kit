(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('base-spinner', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['base-spinner'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-spinner.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseSpinnerComponent = /** @class */ (function () {
        function BaseSpinnerComponent() {
        }
        /**
         * @return {?}
         */
        BaseSpinnerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        BaseSpinnerComponent.prototype.setMyStyles = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var styles = {
                'height': this.size + 'rem',
                'width': this.size + 'rem',
            };
            return styles;
        };
        BaseSpinnerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'base-spinner',
                        template: "<div [class]=\"'spinner-'+type +' text-'+color\" [ngStyle]=\"setMyStyles()\" role=\"status\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        BaseSpinnerComponent.ctorParameters = function () { return []; };
        BaseSpinnerComponent.propDecorators = {
            color: [{ type: core.Input }],
            type: [{ type: core.Input }],
            size: [{ type: core.Input }]
        };
        return BaseSpinnerComponent;
    }());
    if (false) {
        /** @type {?} */
        BaseSpinnerComponent.prototype.color;
        /** @type {?} */
        BaseSpinnerComponent.prototype.type;
        /** @type {?} */
        BaseSpinnerComponent.prototype.size;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-spinner.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseSpinnerModule = /** @class */ (function () {
        function BaseSpinnerModule() {
        }
        BaseSpinnerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BaseSpinnerComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [BaseSpinnerComponent]
                    },] }
        ];
        return BaseSpinnerModule;
    }());

    exports.BaseSpinnerComponent = BaseSpinnerComponent;
    exports.BaseSpinnerModule = BaseSpinnerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=base-spinner.umd.js.map
