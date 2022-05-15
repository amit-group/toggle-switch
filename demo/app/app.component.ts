import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'toggle-module';
  formGroup!: FormGroup;
  test: boolean = false;
  constructor(){

  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      test: new FormControl(false),
    })
    
    this.formGroup.valueChanges.subscribe(res => {
      console.log(res);
    })
  }

  onInputChange(e: any) {
    console.log(e);
  }
}
