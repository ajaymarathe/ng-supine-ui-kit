/**
 * @fileoverview added by tsickle
 * Generated from: lib/base-progress.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class BaseProgressComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BaseProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'base-progress',
                template: "\r\n<div class=\"progress\" [style.height.rem]=\"height\">\r\n    <div [class]=\"'progress-bar bg-'+ color + ' progress-bar-'+type +' progress-bar-'+animation\" role=\"progressbar\" [style.width.%]=\"width\" [attr.aria-valuenow]=\"width\"\r\n         aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n</div>"
            }] }
];
/** @nocollapse */
BaseProgressComponent.ctorParameters = () => [];
BaseProgressComponent.propDecorators = {
    width: [{ type: Input }],
    height: [{ type: Input }],
    type: [{ type: Input }],
    color: [{ type: Input }],
    animation: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BaseProgressComponent.prototype.width;
    /** @type {?} */
    BaseProgressComponent.prototype.height;
    /** @type {?} */
    BaseProgressComponent.prototype.type;
    /** @type {?} */
    BaseProgressComponent.prototype.color;
    /** @type {?} */
    BaseProgressComponent.prototype.animation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1wcm9ncmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9iYXNlLXByb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL2Jhc2UtcHJvZ3Jlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUcsTUFBTSxlQUFlLENBQUM7QUFPMUQsTUFBTSxPQUFPLHFCQUFxQjtJQVFoQyxnQkFBZ0IsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsaVVBQTZDO2FBRTlDOzs7OztvQkFHRSxLQUFLO3FCQUNMLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7Ozs7SUFKTixzQ0FBdUI7O0lBQ3ZCLHVDQUF3Qjs7SUFDeEIscUNBQXNCOztJQUN0QixzQ0FBdUI7O0lBQ3ZCLDBDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmFzZS1wcm9ncmVzcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYXNlLXByb2dyZXNzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBCYXNlUHJvZ3Jlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFuaW1hdGlvbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIl19