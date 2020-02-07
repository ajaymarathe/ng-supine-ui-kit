import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-slide-indicator.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseSlideIndicatorComponent = /** @class */ (function () {
    function BaseSlideIndicatorComponent() {
        this.active = 'active';
    }
    /**
     * @return {?}
     */
    BaseSlideIndicatorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BaseSlideIndicatorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'base-slide-indicator',
                    template: "<li [attr.data-target]=\"'#'+target\" [attr.data-slide-to]=\"index\" [class]=\"active\"></li>"
                }] }
    ];
    /** @nocollapse */
    BaseSlideIndicatorComponent.ctorParameters = function () { return []; };
    BaseSlideIndicatorComponent.propDecorators = {
        target: [{ type: Input }],
        index: [{ type: Input }],
        active: [{ type: Input }]
    };
    return BaseSlideIndicatorComponent;
}());
if (false) {
    /** @type {?} */
    BaseSlideIndicatorComponent.prototype.target;
    /** @type {?} */
    BaseSlideIndicatorComponent.prototype.index;
    /** @type {?} */
    BaseSlideIndicatorComponent.prototype.active;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-slide-indicator.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseSlideIndicatorModule = /** @class */ (function () {
    function BaseSlideIndicatorModule() {
    }
    BaseSlideIndicatorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BaseSlideIndicatorComponent],
                    imports: [],
                    exports: [BaseSlideIndicatorComponent]
                },] }
    ];
    return BaseSlideIndicatorModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: base-slide-indicator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseSlideIndicatorComponent, BaseSlideIndicatorModule };
//# sourceMappingURL=base-slide-indicator.js.map
