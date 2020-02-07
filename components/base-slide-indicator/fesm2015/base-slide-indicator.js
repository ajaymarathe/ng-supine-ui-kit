import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-slide-indicator.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseSlideIndicatorComponent {
    constructor() {
        this.active = 'active';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BaseSlideIndicatorComponent.decorators = [
    { type: Component, args: [{
                selector: 'base-slide-indicator',
                template: "<li [attr.data-target]=\"'#'+target\" [attr.data-slide-to]=\"index\" [class]=\"active\"></li>"
            }] }
];
/** @nocollapse */
BaseSlideIndicatorComponent.ctorParameters = () => [];
BaseSlideIndicatorComponent.propDecorators = {
    target: [{ type: Input }],
    index: [{ type: Input }],
    active: [{ type: Input }]
};
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
class BaseSlideIndicatorModule {
}
BaseSlideIndicatorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [BaseSlideIndicatorComponent],
                imports: [],
                exports: [BaseSlideIndicatorComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: base-slide-indicator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseSlideIndicatorComponent, BaseSlideIndicatorModule };
//# sourceMappingURL=base-slide-indicator.js.map
