import {ReactiveFormsModule, Validators,FormGroup,FormControl} from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector:"validating-form",
    template:`
    <h1>This is a Validating form</h1>
    <form [formGroup]="userForm" (ngSubmit)="handleSubmit()">
      <label>Name
        <input type="text" formControlName="name" placeholder="enter name" />
      </label>
      <label>Email
        <input type="email" formControlName="email" placeholder="enter email" />
      </label>
      |
      <button type="submit" [disabled]="!userForm.valid">Submit</button>
    </form>

    <h2>Profile Form</h2>
    <p >Name: {{ userForm.value.name }}</p>
    <p>Email: {{ userForm.value.email }}</p>
    `,
    imports:[ReactiveFormsModule]
})
export class validatingForm{
    userForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
    });
    handleSubmit(){
        alert("Form submitted succesfully")
    }
}