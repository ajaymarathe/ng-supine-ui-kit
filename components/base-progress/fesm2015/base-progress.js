import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-progress.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseProgressComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BaseProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'base-progress',
                template: "\r\n<div class=\"progress\" [style.height.rem]=\"height\">\r\n    <div [class]=\"'progress-bar bg-'+ color + ' progress-bar-'+type +' progress-bar-'+animation\" role=\"progressbar\" [style.width.%]=\"width\" [attr.aria-valuenow]=\"width\"\r\n         aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n</div>"
            }] }
];
/** @nocollapse */
BaseProgressComponent.ctorParameters = () => [];
BaseProgressComponent.propDecorators = {
    width: [{ type: Input }],
    height: [{ type: Input }],
    type: [{ type: Input }],
    color: [{ type: Input }],
    animation: [{ type: Input }]
};
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
class BaseProgressModule {
}
BaseProgressModule.decorators = [
    { type: NgModule, args: [{
                declarations: [BaseProgressComponent],
                imports: [],
                exports: [BaseProgressComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: base-progress.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseProgressComponent, BaseProgressModule };
//# sourceMappingURL=base-progress.js.map
