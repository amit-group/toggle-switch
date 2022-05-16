# ToggleSwitch

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## How to use
### Step 1
Import ToggleSwitchModule to AppModule
```javascript
{
    imports: [
    ...
    ToggleSwitchModule
    ...
  ]
}
```
or
```javascript
{
  imports: [
    ...
    ToggleSwitchModule.forRoot(options)
    ...
  ]
}
```
### Step 2

Add ```am-toggle-switch``` tag in component as HTML tag with 2 options [(ngModel)] or formControlName

```html
<am-toggle-switch [(ngModel)]="test" (ngModelChange)="onInputChange($event)"></am-toggle-switch>

```
or
```html
<form [formGroup]="formGroup">
    <am-toggle-switch formControlName="test"></am-toggle-switch>
</form>
```

# Inputs
| Input           | Type             | Default          |
| [disabled]      | boolean          | false            |
| formControlName | formControlName  |                  |


