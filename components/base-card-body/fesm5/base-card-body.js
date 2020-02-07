import { Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-card-body.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseCardBodyComponent = /** @class */ (function () {
    function BaseCardBodyComponent() {
    }
    /**
     * @return {?}
     */
    BaseCardBodyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BaseCardBodyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'base-card-body',
                    template: "<div class=\"card-body\">\r\n    <ng-content></ng-content>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    BaseCardBodyComponent.ctorParameters = function () { return []; };
    return BaseCardBodyComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-card-body.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseCardBodyModule = /** @class */ (function () {
    function BaseCardBodyModule() {
    }
    BaseCardBodyModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BaseCardBodyComponent],
                    imports: [],
                    exports: [BaseCardBodyComponent]
                },] }
    ];
    return BaseCardBodyModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: base-card-body.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseCardBodyComponent, BaseCardBodyModule };
//# sourceMappingURL=base-card-body.js.map
