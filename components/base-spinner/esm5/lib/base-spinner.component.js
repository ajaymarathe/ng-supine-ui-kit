/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-spinner.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var BaseSpinnerComponent = /** @class */ (function () {
    function BaseSpinnerComponent() {
    }
    /**
     * @return {?}
     */
    BaseSpinnerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    BaseSpinnerComponent.prototype.setMyStyles = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var styles = {
            'height': this.size + 'rem',
            'width': this.size + 'rem',
        };
        return styles;
    };
    BaseSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'base-spinner',
                    template: "<div [class]=\"'spinner-'+type +' text-'+color\" [ngStyle]=\"setMyStyles()\" role=\"status\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    BaseSpinnerComponent.ctorParameters = function () { return []; };
    BaseSpinnerComponent.propDecorators = {
        color: [{ type: Input }],
        type: [{ type: Input }],
        size: [{ type: Input }]
    };
    return BaseSpinnerComponent;
}());
export { BaseSpinnerComponent };
if (false) {
    /** @type {?} */
    BaseSpinnerComponent.prototype.color;
    /** @type {?} */
    BaseSpinnerComponent.prototype.type;
    /** @type {?} */
    BaseSpinnerComponent.prototype.size;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zcGlubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jhc2Utc3Bpbm5lci8iLCJzb3VyY2VzIjpbImxpYi9iYXNlLXNwaW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUcsTUFBTSxlQUFlLENBQUM7QUFFMUQ7SUFXRTtJQUFnQixDQUFDOzs7O0lBRWpCLHVDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7O1lBQ00sTUFBTSxHQUFHO1lBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSztZQUMzQixPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLO1NBQzNCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Z0JBdEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsb0tBQTRDO2lCQUU3Qzs7Ozs7d0JBR0UsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7O0lBZVIsMkJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQW5CWSxvQkFBb0I7OztJQUUvQixxQ0FBdUI7O0lBQ3ZCLG9DQUFzQjs7SUFDdEIsb0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0ICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYXNlLXNwaW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFzZS1zcGlubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBCYXNlU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBzaXplOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNldE15U3R5bGVzKCkge1xuICAgIGxldCBzdHlsZXMgPSB7XG4gICAgICAnaGVpZ2h0JzogdGhpcy5zaXplICsgJ3JlbScsXG4gICAgICAnd2lkdGgnOiB0aGlzLnNpemUgKyAncmVtJyxcbiAgICB9O1xuICAgIHJldHVybiBzdHlsZXM7XG4gIH1cblxufVxuIl19