import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, Input, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
export class ToggleSwitchComponent {
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
        console.log(this.formControlName);
        if (this.controlContainer && !!this.formControlName) {
            this.control = this.controlContainer.control?.get(this.formControlName);
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
        this.writeValue(ev.target?.checked);
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
        }], ctorParameters: function () { return [{ type: i1.ControlContainer, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { formControlName: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXN3aXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9saWJzL3RvZ2dsZS1zd2l0Y2gvc3JjL2xpYi90b2dnbGUtc3dpdGNoLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL2xpYnMvdG9nZ2xlLXN3aXRjaC9zcmMvbGliL3RvZ2dsZS1zd2l0Y2guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF3QixpQkFBaUIsRUFBNkQsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwSSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsUUFBUSxFQUFRLE1BQU0sZUFBZSxDQUFDOzs7O0FBY3JGLE1BQU0sT0FBTyxxQkFBcUI7SUFtQmhDLFlBQ3NCLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBZnhELGFBQVEsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLGNBQVMsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFpQnRCLENBQUM7SUFmRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELElBQVcsS0FBSyxDQUFDLENBQU07UUFDckIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQVFELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNsQyxJQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNsRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQWdCLENBQUM7WUFDdkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQVE7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsYUFBYSxDQUFDLEVBQU87UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2tIQW5EVSxxQkFBcUI7c0dBQXJCLHFCQUFxQiwyRkFSckI7UUFDVDtZQUNFLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNwRCxLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0YsMEJDYkgsb1FBS2U7MkZEVUYscUJBQXFCO2tCQVpqQyxTQUFTOytCQUNFLGtCQUFrQixhQUdqQjt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxzQkFBc0IsQ0FBQzs0QkFDcEQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7OzBCQXNCRSxRQUFROzRDQW5CRixlQUFlO3NCQUF2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SLCBBYnN0cmFjdENvbnRyb2wsIEZvcm1Db250cm9sLCBOZ0NvbnRyb2wsIENvbnRyb2xDb250YWluZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIE9wdGlvbmFsLCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FtLXRvZ2dsZS1zd2l0Y2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9nZ2xlLXN3aXRjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvZ2dsZS1zd2l0Y2guY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUb2dnbGVTd2l0Y2hDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVG9nZ2xlU3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpIGZvcm1Db250cm9sTmFtZSE6IHN0cmluZztcbiAgY29udHJvbCE6IEZvcm1Db250cm9sO1xuICBwcml2YXRlIF92YWx1ZTogYW55O1xuICBcbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG4gIG9uVG91Y2hlZCA9ICgpID0+IHsgfTtcblxuICBwdWJsaWMgZ2V0IHZhbHVlKCl7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgcHVibGljIHNldCB2YWx1ZSh2OiBhbnkpIHtcbiAgICBpZiAodiAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgIHRoaXMub25DaGFuZ2Uodik7XG4gICAgfVxuICB9XG4gIFxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGNvbnRyb2xDb250YWluZXI6IENvbnRyb2xDb250YWluZXJcbiAgKSB7XG4gICAgXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1Db250cm9sTmFtZSk7XG4gICAgaWYodGhpcy5jb250cm9sQ29udGFpbmVyICYmICEhdGhpcy5mb3JtQ29udHJvbE5hbWUpIHtcbiAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMuY29udHJvbENvbnRhaW5lci5jb250cm9sPy5nZXQodGhpcy5mb3JtQ29udHJvbE5hbWUpIGFzIEZvcm1Db250cm9sO1xuICAgICAgY29uc29sZS5sb2codGhpcy5jb250cm9sKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbDtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cblxuICBvbklucHV0Q2hhbmdlKGV2OiBhbnkpe1xuICAgIHRoaXMud3JpdGVWYWx1ZShldi50YXJnZXQ/LmNoZWNrZWQpO1xuICB9XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybUNvbnRyb2xOYW1lXCI+XG4gIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiIC8+XG48L25nLWNvbnRhaW5lcj5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIhZm9ybUNvbnRyb2xOYW1lXCI+XG4gIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbdmFsdWVdPVwidmFsdWVcIiAoY2hhbmdlKT1cIm9uSW5wdXRDaGFuZ2UoJGV2ZW50KVwiIC8+XG48L25nLWNvbnRhaW5lcj4iXX0=