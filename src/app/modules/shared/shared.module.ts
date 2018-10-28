import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
//import { ReactiveFormsModule,FormGroup,FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule
    //, ReactiveFormsModule,FormGroup,FormsModule,
  ],
  exports: [
    //ReactiveFormsModule,FormsModule,  FormGroup,
    ErrorComponent
  ],
  declarations: [ErrorComponent]
})
export class SharedModule { }
