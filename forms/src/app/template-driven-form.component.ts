import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

//example of template-driven form
@Component({
    selector:'landing-page',
    template:`<h1> This is a Template driven form </h1>
    <p>Username is: {{username}} </p>
        <label for="name-input">
            Enter your name:
        <input id="name-input" type="text" [(ngModel)]="username">
        </label>
        |
        <button (click)="showUsername()">Click Me!</button>
        `,
    imports:[FormsModule]
})

export class templateDrivenForm{
    username=''
    showUsername(){
        alert(this.username)
    }
    
}