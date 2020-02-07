import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-carousel.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseCarouselComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BaseCarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'base-carousel',
                template: "<div [id]=\"target\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <ng-content></ng-content>\r\n</div>"
            }] }
];
/** @nocollapse */
BaseCarouselComponent.ctorParameters = () => [];
BaseCarouselComponent.propDecorators = {
    target: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BaseCarouselComponent.prototype.target;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-carousel.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseCarouselModule {
}
BaseCarouselModule.decorators = [
    { type: NgModule, args: [{
                declarations: [BaseCarouselComponent],
                imports: [],
                exports: [BaseCarouselComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: base-carousel.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseCarouselComponent, BaseCarouselModule };
//# sourceMappingURL=base-carousel.js.map
