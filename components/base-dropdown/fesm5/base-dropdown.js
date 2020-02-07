import { Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-dropdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseDropdownComponent = /** @class */ (function () {
    function BaseDropdownComponent() {
    }
    /**
     * @return {?}
     */
    BaseDropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BaseDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'base-dropdown',
                    template: "<div class=\"dropdown\">\r\n    <ng-content></ng-content>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    BaseDropdownComponent.ctorParameters = function () { return []; };
    return BaseDropdownComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-dropdown.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseDropdownModule = /** @class */ (function () {
    function BaseDropdownModule() {
    }
    BaseDropdownModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BaseDropdownComponent],
                    imports: [],
                    exports: [BaseDropdownComponent]
                },] }
    ];
    return BaseDropdownModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: base-dropdown.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseDropdownComponent, BaseDropdownModule };
//# sourceMappingURL=base-dropdown.js.map
