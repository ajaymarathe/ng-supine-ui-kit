import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-button.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseButtonComponent = /** @class */ (function () {
    function BaseButtonComponent() {
    }
    /**
     * @return {?}
     */
    BaseButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    BaseButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'base-button',
                    template: "<button [class]=\"'btn btn-'+color +' btn-'+display + ' btn-'+size+' rounded-'+type\">\r\n    <ng-content></ng-content>\r\n</button>"
                }] }
    ];
    /** @nocollapse */
    BaseButtonComponent.ctorParameters = function () { return []; };
    BaseButtonComponent.propDecorators = {
        color: [{ type: Input }],
        type: [{ type: Input }],
        display: [{ type: Input }],
        size: [{ type: Input }]
    };
    return BaseButtonComponent;
}());
if (false) {
    /** @type {?} */
    BaseButtonComponent.prototype.color;
    /** @type {?} */
    BaseButtonComponent.prototype.type;
    /** @type {?} */
    BaseButtonComponent.prototype.display;
    /** @type {?} */
    BaseButtonComponent.prototype.size;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-button.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseButtonModule = /** @class */ (function () {
    function BaseButtonModule() {
    }
    BaseButtonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BaseButtonComponent],
                    imports: [],
                    exports: [BaseButtonComponent]
                },] }
    ];
    return BaseButtonModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: base-button.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseButtonComponent, BaseButtonModule };
//# sourceMappingURL=base-button.js.map
