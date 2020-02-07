import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-navbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseNavbarComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BaseNavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'base-navbar',
                template: "<nav [class]=\"'navbar navbar-expand-lg navbar-'+bgType+ ' bg-'+bgColor+' py-'+size\">\r\n    <ng-content></ng-content>\r\n</nav>"
            }] }
];
/** @nocollapse */
BaseNavbarComponent.ctorParameters = () => [];
BaseNavbarComponent.propDecorators = {
    bgType: [{ type: Input }],
    bgColor: [{ type: Input }],
    size: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BaseNavbarComponent.prototype.bgType;
    /** @type {?} */
    BaseNavbarComponent.prototype.bgColor;
    /** @type {?} */
    BaseNavbarComponent.prototype.size;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-navbar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseNavbarModule {
}
BaseNavbarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [BaseNavbarComponent],
                imports: [],
                exports: [BaseNavbarComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: base-navbar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseNavbarComponent, BaseNavbarModule };
//# sourceMappingURL=base-navbar.js.map
