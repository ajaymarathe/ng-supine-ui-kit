import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/close-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CloseButtonComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CloseButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'close-button',
                template: "<button type=\"button\" class=\"close\" [attr.data-dismiss]=\"dismiss\" aria-label=\"Close\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n</button>"
            }] }
];
/** @nocollapse */
CloseButtonComponent.ctorParameters = () => [];
CloseButtonComponent.propDecorators = {
    dismiss: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CloseButtonComponent.prototype.dismiss;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/close-button.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CloseButtonModule {
}
CloseButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CloseButtonComponent],
                imports: [],
                exports: [CloseButtonComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: close-button.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CloseButtonComponent, CloseButtonModule };
//# sourceMappingURL=close-button.js.map
