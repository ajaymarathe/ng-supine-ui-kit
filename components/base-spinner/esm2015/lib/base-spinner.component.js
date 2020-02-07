/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-spinner.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class BaseSpinnerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    setMyStyles() {
        /** @type {?} */
        let styles = {
            'height': this.size + 'rem',
            'width': this.size + 'rem',
        };
        return styles;
    }
}
BaseSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'base-spinner',
                template: "<div [class]=\"'spinner-'+type +' text-'+color\" [ngStyle]=\"setMyStyles()\" role=\"status\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n</div>"
            }] }
];
/** @nocollapse */
BaseSpinnerComponent.ctorParameters = () => [];
BaseSpinnerComponent.propDecorators = {
    color: [{ type: Input }],
    type: [{ type: Input }],
    size: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BaseSpinnerComponent.prototype.color;
    /** @type {?} */
    BaseSpinnerComponent.prototype.type;
    /** @type {?} */
    BaseSpinnerComponent.prototype.size;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zcGlubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Jhc2Utc3Bpbm5lci8iLCJzb3VyY2VzIjpbImxpYi9iYXNlLXNwaW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUcsTUFBTSxlQUFlLENBQUM7QUFPMUQsTUFBTSxPQUFPLG9CQUFvQjtJQU0vQixnQkFBZ0IsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFdBQVc7O1lBQ0wsTUFBTSxHQUFHO1lBQ1gsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSztZQUMzQixPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLO1NBQzNCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsb0tBQTRDO2FBRTdDOzs7OztvQkFHRSxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUZOLHFDQUF1Qjs7SUFDdkIsb0NBQXNCOztJQUN0QixvQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Jhc2Utc3Bpbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYXNlLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgc2V0TXlTdHlsZXMoKSB7XG4gICAgbGV0IHN0eWxlcyA9IHtcbiAgICAgICdoZWlnaHQnOiB0aGlzLnNpemUgKyAncmVtJyxcbiAgICAgICd3aWR0aCc6IHRoaXMuc2l6ZSArICdyZW0nLFxuICAgIH07XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG59XG4iXX0=