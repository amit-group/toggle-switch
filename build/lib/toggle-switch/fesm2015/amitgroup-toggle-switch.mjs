import * as i1 from '@angular/forms';
import { NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i0 from '@angular/core';
import { forwardRef, Component, Optional, Input, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

class ToggleSwitchComponent {
    constructor(controlContainer) {
        this.controlContainer = controlContainer;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    get value() {
        return this._value;
    }
    set value(v) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }
    ngOnInit() {
        var _a;
        console.log(this.formControlName);
        if (this.controlContainer && !!this.formControlName) {
            this.control = (_a = this.controlContainer.control) === null || _a === void 0 ? void 0 : _a.get(this.formControlName);
            console.log(this.control);
        }
    }
    writeValue(val) {
        this.value = val;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        throw new Error("Method not implemented.");
    }
    onInputChange(ev) {
        var _a;
        this.writeValue((_a = ev.target) === null || _a === void 0 ? void 0 : _a.checked);
    }
}
ToggleSwitchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ToggleSwitchComponent, deps: [{ token: i1.ControlContainer, optional: true }], target: i0.ɵɵFactoryTarget.Component });
ToggleSwitchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.7", type: ToggleSwitchComponent, selector: "am-toggle-switch", inputs: { formControlName: "formControlName" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ToggleSwitchComponent),
            multi: true
        }
    ], ngImport: i0, template: "<ng-container *ngIf=\"formControlName\">\n  <input type=\"checkbox\" [formControl]=\"control\" />\n</ng-container>\n<ng-container *ngIf=\"!formControlName\">\n  <input type=\"checkbox\" [value]=\"value\" (change)=\"onInputChange($event)\" />\n</ng-container>", styles: ["input{font-weight:700}\n"], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ToggleSwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'am-toggle-switch', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ToggleSwitchComponent),
                            multi: true
                        }
                    ], template: "<ng-container *ngIf=\"formControlName\">\n  <input type=\"checkbox\" [formControl]=\"control\" />\n</ng-container>\n<ng-container *ngIf=\"!formControlName\">\n  <input type=\"checkbox\" [value]=\"value\" (change)=\"onInputChange($event)\" />\n</ng-container>", styles: ["input{font-weight:700}\n"] }]
        }], ctorParameters: function () {
        return [{ type: i1.ControlContainer, decorators: [{
                        type: Optional
                    }] }];
    }, propDecorators: { formControlName: [{
                type: Input
            }] } });

class ToggleSwitchModule {
}
ToggleSwitchModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ToggleSwitchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ToggleSwitchModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ToggleSwitchModule, declarations: [ToggleSwitchComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule], exports: [ToggleSwitchComponent] });
ToggleSwitchModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ToggleSwitchModule, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.7", ngImport: i0, type: ToggleSwitchModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ToggleSwitchComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule
                    ],
                    exports: [
                        ToggleSwitchComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of toggle-switch
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ToggleSwitchComponent, ToggleSwitchModule };
//# sourceMappingURL=amitgroup-toggle-switch.mjs.map
