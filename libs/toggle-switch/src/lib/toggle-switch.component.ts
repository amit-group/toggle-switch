import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
  ControlContainer,
} from '@angular/forms';
import {
  Component,
  forwardRef,
  Inject,
  Input,
  OnInit,
  Optional,
} from '@angular/core';
import { IToggleSwitchConfig } from './interfaces/toggle-switch-config';
import { AM_TOGGLE_SWITCH_CONFIG } from './injections/toggle-switch-config';

@Component({
  selector: 'am-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleSwitchComponent),
      multi: true,
    },
  ],
})
export class ToggleSwitchComponent implements OnInit, ControlValueAccessor {
  @Input() formControlName!: string;
  @Input() disable: boolean = false;
  control!: FormControl;
  private _value: any;

  onChange = (_: any) => {};
  onTouched = () => {};

  public get value() {
    return this._value;
    
  }
 
  public set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  constructor(
    @Optional() private controlContainer: ControlContainer,
    @Inject(AM_TOGGLE_SWITCH_CONFIG) public config: IToggleSwitchConfig
  ) {}

  ngOnInit(): void {
    if (this.controlContainer && !!this.formControlName) {
      this.control = this.controlContainer.control?.get(
        this.formControlName
      ) as FormControl;
    }

    this.initDocumentVariables();
  }

  initDocumentVariables() {
    document.documentElement.style.setProperty(
      '--tw-deactive-background',
      this.config.deactiveColor!
    );
    document.documentElement.style.setProperty(
      '--tw-deactive-control-background',
      this.config.deactiveControlColor!
    );
    document.documentElement.style.setProperty(
      '--tw-active-background',
      this.config.activeColor!
    );
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
    throw new Error('Method not implemented.');
  }

  onInputChange(ev: any) {
    this.writeValue(ev.target?.checked);
  }
}
