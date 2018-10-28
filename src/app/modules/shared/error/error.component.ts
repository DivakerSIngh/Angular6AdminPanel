import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ErrorComponent implements OnInit {

 

  @Input() formCtrl: FormControl;

  @Input() required = 'Field';

  @Input() pattern = 'Invalid format for Input';
  @Input() minLength = 0;
  @Input() maxLength = 0;
  constructor() { }

  ngOnInit() {
  }

}
