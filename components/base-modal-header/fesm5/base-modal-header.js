import { Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-modal-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseModalHeaderComponent = /** @class */ (function () {
    function BaseModalHeaderComponent() {
    }
    /**
     * @return {?}
     */
    BaseModalHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BaseModalHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'base-modal-header',
                    template: "<div class=\"modal-header\">\r\n    <ng-content></ng-content>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    BaseModalHeaderComponent.ctorParameters = function () { return []; };
    return BaseModalHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-modal-header.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseModalHeaderModule = /** @class */ (function () {
    function BaseModalHeaderModule() {
    }
    BaseModalHeaderModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BaseModalHeaderComponent],
                    imports: [],
                    exports: [BaseModalHeaderComponent]
                },] }
    ];
    return BaseModalHeaderModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: base-modal-header.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseModalHeaderComponent, BaseModalHeaderModule };
//# sourceMappingURL=base-modal-header.js.map
