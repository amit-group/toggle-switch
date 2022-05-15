import { ControlValueAccessor, FormControl, ControlContainer } from '@angular/forms';
import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ToggleSwitchComponent implements OnInit, ControlValueAccessor {
    private controlContainer;
    formControlName: string;
    control: FormControl;
    private _value;
    onChange: (_: any) => void;
    onTouched: () => void;
    get value(): any;
    set value(v: any);
    constructor(controlContainer: ControlContainer);
    ngOnInit(): void;
    writeValue(val: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    onInputChange(ev: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleSwitchComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToggleSwitchComponent, "am-toggle-switch", never, { "formControlName": "formControlName"; }, {}, never, never>;
}
