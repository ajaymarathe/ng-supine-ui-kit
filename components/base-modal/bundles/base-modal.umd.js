(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('base-modal', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['base-modal'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-modal.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseModalComponent = /** @class */ (function () {
        function BaseModalComponent() {
        }
        /**
         * @return {?}
         */
        BaseModalComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BaseModalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'base-modal',
                        template: "<div [class]=\"'modal fade bd-example-modal-'+size\" [id]=\"target\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div [class]=\"'modal-dialog modal-dialog-centered modal-'+size\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <ng-content></ng-content>\r\n      </div>\r\n    </div>\r\n</div>"
                    }] }
        ];
        /** @nocollapse */
        BaseModalComponent.ctorParameters = function () { return []; };
        BaseModalComponent.propDecorators = {
            target: [{ type: core.Input }],
            size: [{ type: core.Input }]
        };
        return BaseModalComponent;
    }());
    if (false) {
        /** @type {?} */
        BaseModalComponent.prototype.target;
        /** @type {?} */
        BaseModalComponent.prototype.size;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-modal.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseModalModule = /** @class */ (function () {
        function BaseModalModule() {
        }
        BaseModalModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BaseModalComponent],
                        imports: [],
                        exports: [BaseModalComponent]
                    },] }
        ];
        return BaseModalModule;
    }());

    exports.BaseModalComponent = BaseModalComponent;
    exports.BaseModalModule = BaseModalModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=base-modal.umd.js.map
