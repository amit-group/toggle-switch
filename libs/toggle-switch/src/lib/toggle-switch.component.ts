import { ControlValueAccessor, NG_VALUE_ACCESSOR, AbstractControl, FormControl, NgControl, ControlContainer } from '@angular/forms';
import { Component, forwardRef, Input, OnInit, Optional, Self } from '@angular/core';

@Component({
  selector: 'am-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleSwitchComponent),
      multi: true
    }
  ]
})
export class ToggleSwitchComponent implements OnInit, ControlValueAccessor {
  @Input() formControlName!: string;
  control!: FormControl;
  private _value: any;
  
  onChange = (_: any) => { };
  onTouched = () => { };

  public get value(){
    return this._value;
  }

  public set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }
  
  constructor(
    @Optional() private controlContainer: ControlContainer
  ) {
    
  }

  ngOnInit(): void {
    console.log(this.formControlName);
    if(this.controlContainer && !!this.formControlName) {
      this.control = this.controlContainer.control?.get(this.formControlName) as FormControl;
      console.log(this.control);
    }
  }

  writeValue(val: any): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  onInputChange(ev: any){
    this.writeValue(ev.target?.checked);
  }
}
