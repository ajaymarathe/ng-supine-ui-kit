(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('base-badge', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['base-badge'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-badge.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseBadgeComponent = /** @class */ (function () {
        function BaseBadgeComponent() {
        }
        /**
         * @return {?}
         */
        BaseBadgeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        BaseBadgeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'base-badge',
                        template: "<span [class]=\"'badge badge-'+color+' rounded-'+BadgeType+' '+ExtraClass\">\r\n    <ng-content></ng-content>\r\n</span>"
                    }] }
        ];
        /** @nocollapse */
        BaseBadgeComponent.ctorParameters = function () { return []; };
        BaseBadgeComponent.propDecorators = {
            color: [{ type: core.Input }],
            BadgeType: [{ type: core.Input }],
            ExtraClass: [{ type: core.Input }]
        };
        return BaseBadgeComponent;
    }());
    if (false) {
        /** @type {?} */
        BaseBadgeComponent.prototype.color;
        /** @type {?} */
        BaseBadgeComponent.prototype.BadgeType;
        /** @type {?} */
        BaseBadgeComponent.prototype.ExtraClass;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/base-badge.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BaseBadgeModule = /** @class */ (function () {
        function BaseBadgeModule() {
        }
        BaseBadgeModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [BaseBadgeComponent],
                        imports: [],
                        exports: [BaseBadgeComponent]
                    },] }
        ];
        return BaseBadgeModule;
    }());

    exports.BaseBadgeComponent = BaseBadgeComponent;
    exports.BaseBadgeModule = BaseBadgeModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=base-badge.umd.js.map
