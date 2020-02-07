import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseCardComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BaseCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'base-card',
                template: "<div [class]=\"'card '+'bg-'+color\">\r\n    <ng-content></ng-content>\r\n</div>"
            }] }
];
/** @nocollapse */
BaseCardComponent.ctorParameters = () => [];
BaseCardComponent.propDecorators = {
    color: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BaseCardComponent.prototype.color;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-card.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseCardModule {
}
BaseCardModule.decorators = [
    { type: NgModule, args: [{
                declarations: [BaseCardComponent],
                imports: [],
                exports: [BaseCardComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: base-card.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseCardComponent, BaseCardModule };
//# sourceMappingURL=base-card.js.map
