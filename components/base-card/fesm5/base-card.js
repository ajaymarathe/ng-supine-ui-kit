import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseCardComponent = /** @class */ (function () {
    function BaseCardComponent() {
    }
    /**
     * @return {?}
     */
    BaseCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BaseCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'base-card',
                    template: "<div [class]=\"'card '+'bg-'+color\">\r\n    <ng-content></ng-content>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    BaseCardComponent.ctorParameters = function () { return []; };
    BaseCardComponent.propDecorators = {
        color: [{ type: Input }]
    };
    return BaseCardComponent;
}());
if (false) {
    /** @type {?} */
    BaseCardComponent.prototype.color;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-card.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseCardModule = /** @class */ (function () {
    function BaseCardModule() {
    }
    BaseCardModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BaseCardComponent],
                    imports: [],
                    exports: [BaseCardComponent]
                },] }
    ];
    return BaseCardModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: base-card.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseCardComponent, BaseCardModule };
//# sourceMappingURL=base-card.js.map
