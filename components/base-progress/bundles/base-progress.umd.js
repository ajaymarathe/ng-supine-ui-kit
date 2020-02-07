(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('base-progress', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['base-progress'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-progress.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseProgressComponent = /** @class */ (function () {
        function BaseProgressComponent() {
        }
        /**
         * @return {?}
         */
        BaseProgressComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BaseProgressComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'base-progress',
                        template: "\r\n<div class=\"progress\" [style.height.rem]=\"height\">\r\n    <div [class]=\"'progress-bar bg-'+ color + ' progress-bar-'+type +' progress-bar-'+animation\" role=\"progressbar\" [style.width.%]=\"width\" [attr.aria-valuenow]=\"width\"\r\n         aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        BaseProgressComponent.ctorParameters = function () { return []; };
        BaseProgressComponent.propDecorators = {
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            type: [{ type: core.Input }],
            color: [{ type: core.Input }],
            animation: [{ type: core.Input }]
        };
        return BaseProgressComponent;
    }());
    if (false) {
        /** @type {?} */
        BaseProgressComponent.prototype.width;
        /** @type {?} */
        BaseProgressComponent.prototype.height;
        /** @type {?} */
        BaseProgressComponent.prototype.type;
        /** @type {?} */
        BaseProgressComponent.prototype.color;
        /** @type {?} */
        BaseProgressComponent.prototype.animation;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-progress.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseProgressModule = /** @class */ (function () {
        function BaseProgressModule() {
        }
        BaseProgressModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BaseProgressComponent],
                        imports: [],
                        exports: [BaseProgressComponent]
                    },] }
        ];
        return BaseProgressModule;
    }());

    exports.BaseProgressComponent = BaseProgressComponent;
    exports.BaseProgressModule = BaseProgressModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=base-progress.umd.js.map
