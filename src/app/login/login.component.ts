import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModelGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { NgModel } from '@angular/forms';
// import { NgModule }      from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,NavComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('User ID:', form.value.userId);
      console.log('Password:', form.value.password);
     
    }
  }

  onClear(form: any) {
    form.reset();
    console.log('1')
  }

}
