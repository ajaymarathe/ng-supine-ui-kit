(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('base-navbar', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['base-navbar'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-navbar.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseNavbarComponent = /** @class */ (function () {
        function BaseNavbarComponent() {
        }
        /**
         * @return {?}
         */
        BaseNavbarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BaseNavbarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'base-navbar',
                        template: "<nav [class]=\"'navbar navbar-expand-lg navbar-'+bgType+ ' bg-'+bgColor+' py-'+size\">\r\n    <ng-content></ng-content>\r\n</nav>"
                    }] }
        ];
        /** @nocollapse */
        BaseNavbarComponent.ctorParameters = function () { return []; };
        BaseNavbarComponent.propDecorators = {
            bgType: [{ type: core.Input }],
            bgColor: [{ type: core.Input }],
            size: [{ type: core.Input }]
        };
        return BaseNavbarComponent;
    }());
    if (false) {
        /** @type {?} */
        BaseNavbarComponent.prototype.bgType;
        /** @type {?} */
        BaseNavbarComponent.prototype.bgColor;
        /** @type {?} */
        BaseNavbarComponent.prototype.size;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-navbar.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseNavbarModule = /** @class */ (function () {
        function BaseNavbarModule() {
        }
        BaseNavbarModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BaseNavbarComponent],
                        imports: [],
                        exports: [BaseNavbarComponent]
                    },] }
        ];
        return BaseNavbarModule;
    }());

    exports.BaseNavbarComponent = BaseNavbarComponent;
    exports.BaseNavbarModule = BaseNavbarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=base-navbar.umd.js.map
