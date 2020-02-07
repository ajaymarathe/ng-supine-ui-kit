import { Component, Input, NgModule } from '@angular/core';

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
        { type: Component, args: [{
                    selector: 'base-badge',
                    template: "<span [class]=\"'badge badge-'+color+' rounded-'+BadgeType+' '+ExtraClass\">\r\n    <ng-content></ng-content>\r\n</span>"
                }] }
    ];
    /** @nocollapse */
    BaseBadgeComponent.ctorParameters = function () { return []; };
    BaseBadgeComponent.propDecorators = {
        color: [{ type: Input }],
        BadgeType: [{ type: Input }],
        ExtraClass: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [BaseBadgeComponent],
                    imports: [],
                    exports: [BaseBadgeComponent]
                },] }
    ];
    return BaseBadgeModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: base-badge.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseBadgeComponent, BaseBadgeModule };
//# sourceMappingURL=base-badge.js.map
