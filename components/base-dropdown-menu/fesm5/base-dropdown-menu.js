import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-dropdown-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseDropdownMenuComponent = /** @class */ (function () {
    function BaseDropdownMenuComponent() {
    }
    /**
     * @return {?}
     */
    BaseDropdownMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BaseDropdownMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'base-dropdown-menu',
                    template: "<div [class]=\"'dropdown-menu dropdown-menu-'+align\" aria-labelledby=\"dropdownMenuButton\">\r\n    <ng-content></ng-content>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    BaseDropdownMenuComponent.ctorParameters = function () { return []; };
    BaseDropdownMenuComponent.propDecorators = {
        align: [{ type: Input }]
    };
    return BaseDropdownMenuComponent;
}());
if (false) {
    /** @type {?} */
    BaseDropdownMenuComponent.prototype.align;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-dropdown-menu.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseDropdownMenuModule = /** @class */ (function () {
    function BaseDropdownMenuModule() {
    }
    BaseDropdownMenuModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BaseDropdownMenuComponent],
                    imports: [],
                    exports: [BaseDropdownMenuComponent]
                },] }
    ];
    return BaseDropdownMenuModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: base-dropdown-menu.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseDropdownMenuComponent, BaseDropdownMenuModule };
//# sourceMappingURL=base-dropdown-menu.js.map
