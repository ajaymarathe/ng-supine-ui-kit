import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-spinner.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseSpinnerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    setMyStyles() {
        /** @type {?} */
        let styles = {
            'height': this.size + 'rem',
            'width': this.size + 'rem',
        };
        return styles;
    }
}
BaseSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'base-spinner',
                template: "<div [class]=\"'spinner-'+type +' text-'+color\" [ngStyle]=\"setMyStyles()\" role=\"status\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n</div>"
            }] }
];
/** @nocollapse */
BaseSpinnerComponent.ctorParameters = () => [];
BaseSpinnerComponent.propDecorators = {
    color: [{ type: Input }],
    type: [{ type: Input }],
    size: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BaseSpinnerComponent.prototype.color;
    /** @type {?} */
    BaseSpinnerComponent.prototype.type;
    /** @type {?} */
    BaseSpinnerComponent.prototype.size;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-spinner.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseSpinnerModule {
}
BaseSpinnerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [BaseSpinnerComponent],
                imports: [
                    CommonModule
                ],
                exports: [BaseSpinnerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: base-spinner.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseSpinnerComponent, BaseSpinnerModule };
//# sourceMappingURL=base-spinner.js.map
