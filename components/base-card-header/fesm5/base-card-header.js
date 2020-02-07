import { Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-card-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseCardHeaderComponent = /** @class */ (function () {
    function BaseCardHeaderComponent() {
    }
    /**
     * @return {?}
     */
    BaseCardHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BaseCardHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'base-card-header',
                    template: "<div class=\"card-header\">\r\n    <ng-content></ng-content>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    BaseCardHeaderComponent.ctorParameters = function () { return []; };
    return BaseCardHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-card-header.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseCardHeaderModule = /** @class */ (function () {
    function BaseCardHeaderModule() {
    }
    BaseCardHeaderModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BaseCardHeaderComponent],
                    imports: [],
                    exports: [BaseCardHeaderComponent]
                },] }
    ];
    return BaseCardHeaderModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: base-card-header.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseCardHeaderComponent, BaseCardHeaderModule };
//# sourceMappingURL=base-card-header.js.map
