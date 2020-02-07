import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/close-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CloseButtonComponent = /** @class */ (function () {
    function CloseButtonComponent() {
    }
    /**
     * @return {?}
     */
    CloseButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CloseButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'close-button',
                    template: "<button type=\"button\" class=\"close\" [attr.data-dismiss]=\"dismiss\" aria-label=\"Close\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n</button>"
                }] }
    ];
    /** @nocollapse */
    CloseButtonComponent.ctorParameters = function () { return []; };
    CloseButtonComponent.propDecorators = {
        dismiss: [{ type: Input }]
    };
    return CloseButtonComponent;
}());
if (false) {
    /** @type {?} */
    CloseButtonComponent.prototype.dismiss;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/close-button.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CloseButtonModule = /** @class */ (function () {
    function CloseButtonModule() {
    }
    CloseButtonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [CloseButtonComponent],
                    imports: [],
                    exports: [CloseButtonComponent]
                },] }
    ];
    return CloseButtonModule;
}());

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
