import { ReactiveFormsModule,FormGroup,FormControl} from '@angular/forms';
import { Component} from '@angular/core';


@Component({
  selector: 'reactive-form',
  template: `
    <h1>This is a Reactive form</h1>
    <form [formGroup]="userForm" (ngSubmit)="handleSubmit()">
      <label>Name
        <input type="text" formControlName="name" />
      </label>
      <label>Email
        <input type="email" formControlName="email" />
      </label>
      <button type="submit">Submit</button>
    </form>

    <h2>Profile Form</h2>
    <p >Name: {{ userForm.value.name }}</p>
    <p>Email: {{ userForm.value.email }}</p>
  `,
  imports: [ReactiveFormsModule],
})

export class reactiveForm{
    userForm=new FormGroup({
        name:new FormControl(''),
        email:new FormControl('')
    })

    handleSubmit(){
        alert(this.userForm.value.name+ ` |  ` + this.userForm.value.email)
    }
};