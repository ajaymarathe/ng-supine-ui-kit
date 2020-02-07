(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('base-slide-indicator', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['base-slide-indicator'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-slide-indicator.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseSlideIndicatorComponent = /** @class */ (function () {
        function BaseSlideIndicatorComponent() {
            this.active = 'active';
        }
        /**
         * @return {?}
         */
        BaseSlideIndicatorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BaseSlideIndicatorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'base-slide-indicator',
                        template: "<li [attr.data-target]=\"'#'+target\" [attr.data-slide-to]=\"index\" [class]=\"active\"></li>"
                    }] }
        ];
        /** @nocollapse */
        BaseSlideIndicatorComponent.ctorParameters = function () { return []; };
        BaseSlideIndicatorComponent.propDecorators = {
            target: [{ type: core.Input }],
            index: [{ type: core.Input }],
            active: [{ type: core.Input }]
        };
        return BaseSlideIndicatorComponent;
    }());
    if (false) {
        /** @type {?} */
        BaseSlideIndicatorComponent.prototype.target;
        /** @type {?} */
        BaseSlideIndicatorComponent.prototype.index;
        /** @type {?} */
        BaseSlideIndicatorComponent.prototype.active;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-slide-indicator.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseSlideIndicatorModule = /** @class */ (function () {
        function BaseSlideIndicatorModule() {
        }
        BaseSlideIndicatorModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BaseSlideIndicatorComponent],
                        imports: [],
                        exports: [BaseSlideIndicatorComponent]
                    },] }
        ];
        return BaseSlideIndicatorModule;
    }());

    exports.BaseSlideIndicatorComponent = BaseSlideIndicatorComponent;
    exports.BaseSlideIndicatorModule = BaseSlideIndicatorModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=base-slide-indicator.umd.js.map
