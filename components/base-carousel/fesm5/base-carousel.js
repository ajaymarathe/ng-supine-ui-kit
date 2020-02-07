import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-carousel.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseCarouselComponent = /** @class */ (function () {
    function BaseCarouselComponent() {
    }
    /**
     * @return {?}
     */
    BaseCarouselComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BaseCarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'base-carousel',
                    template: "<div [id]=\"target\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <ng-content></ng-content>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    BaseCarouselComponent.ctorParameters = function () { return []; };
    BaseCarouselComponent.propDecorators = {
        target: [{ type: Input }]
    };
    return BaseCarouselComponent;
}());
if (false) {
    /** @type {?} */
    BaseCarouselComponent.prototype.target;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-carousel.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseCarouselModule = /** @class */ (function () {
    function BaseCarouselModule() {
    }
    BaseCarouselModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BaseCarouselComponent],
                    imports: [],
                    exports: [BaseCarouselComponent]
                },] }
    ];
    return BaseCarouselModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: base-carousel.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseCarouselComponent, BaseCarouselModule };
//# sourceMappingURL=base-carousel.js.map
