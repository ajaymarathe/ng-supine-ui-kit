import { Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-modal-body.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseModalBodyComponent = /** @class */ (function () {
    function BaseModalBodyComponent() {
    }
    /**
     * @return {?}
     */
    BaseModalBodyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BaseModalBodyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'base-modal-body',
                    template: "<div class=\"modal-body\">\r\n    <ng-content></ng-content>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    BaseModalBodyComponent.ctorParameters = function () { return []; };
    return BaseModalBodyComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-modal-body.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseModalBodyModule = /** @class */ (function () {
    function BaseModalBodyModule() {
    }
    BaseModalBodyModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BaseModalBodyComponent],
                    imports: [],
                    exports: [BaseModalBodyComponent]
                },] }
    ];
    return BaseModalBodyModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: base-modal-body.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseModalBodyComponent, BaseModalBodyModule };
//# sourceMappingURL=base-modal-body.js.map
