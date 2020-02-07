(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('base-button', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['base-button'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-button.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseButtonComponent = /** @class */ (function () {
        function BaseButtonComponent() {
        }
        /**
         * @return {?}
         */
        BaseButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BaseButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'base-button',
                        template: "<button [class]=\"'btn btn-'+color +' btn-'+display + ' btn-'+size+' rounded-'+type\">\r\n    <ng-content></ng-content>\r\n</button>"
                    }] }
        ];
        /** @nocollapse */
        BaseButtonComponent.ctorParameters = function () { return []; };
        BaseButtonComponent.propDecorators = {
            color: [{ type: core.Input }],
            type: [{ type: core.Input }],
            display: [{ type: core.Input }],
            size: [{ type: core.Input }]
        };
        return BaseButtonComponent;
    }());
    if (false) {
        /** @type {?} */
        BaseButtonComponent.prototype.color;
        /** @type {?} */
        BaseButtonComponent.prototype.type;
        /** @type {?} */
        BaseButtonComponent.prototype.display;
        /** @type {?} */
        BaseButtonComponent.prototype.size;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-button.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseButtonModule = /** @class */ (function () {
        function BaseButtonModule() {
        }
        BaseButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BaseButtonComponent],
                        imports: [],
                        exports: [BaseButtonComponent]
                    },] }
        ];
        return BaseButtonModule;
    }());

    exports.BaseButtonComponent = BaseButtonComponent;
    exports.BaseButtonModule = BaseButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=base-button.umd.js.map
