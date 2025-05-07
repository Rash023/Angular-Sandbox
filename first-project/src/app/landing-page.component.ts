import { Component } from "@angular/core";
import { RouterLink,RouterOutlet } from "@angular/router";

@Component({
    selector:"landing-page",
    template:`
    <nav>
        <a routerLink="/template-driven-form">Template-Driven-Form</a>
        |
        <a routerLink="/reactive-form">Reactive-Form</a>
        |
        <a routerLink="/validating-form">Validating-Form</a>
    </nav>
        `,
    imports:[RouterLink,RouterOutlet],
})

export class landingPage{

};
