import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AM_TOGGLE_SWITCH_CONFIG } from './injections/toggle-switch-config';
import { IToggleSwitchConfig } from './interfaces/toggle-switch-config';
import { ToggleSwitchComponent } from './toggle-switch.component';

const DEFAULT_CONFIG: IToggleSwitchConfig = {
  size: 'default',
  activeColor: '#3CB792',
  deactiveColor: '#E5E5E5',
  deactiveControlColor: 'rgba(255, 255, 255, 1)',
};

@NgModule({
  declarations: [ToggleSwitchComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: AM_TOGGLE_SWITCH_CONFIG,
      useValue: DEFAULT_CONFIG,
    },
  ],
  exports: [ToggleSwitchComponent],
})
export class ToggleSwitchModule {
  static forRoot(options: any = {}): ModuleWithProviders<ToggleSwitchModule> {
    const arrayProviders: Array<Provider> = [];
    if (options.config) {
      arrayProviders.push({
        provide: AM_TOGGLE_SWITCH_CONFIG,
        useValue: { ...DEFAULT_CONFIG, ...options.config },
      });
    }
    return {
      ngModule: ToggleSwitchModule,
      providers: arrayProviders,
    };
  }
}
