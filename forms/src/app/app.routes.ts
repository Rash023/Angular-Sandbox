import { Routes } from '@angular/router';
import { templateDrivenForm } from './template-driven-form.component';
import { reactiveForm } from './reactive-forms.component';
import { validatingForm } from './validating-forms.component';
import { landingPage } from './landing-page.component';

export const routes: Routes = [
    {
        path:'template-driven-form',
        title:"Template form",
        component:templateDrivenForm
    },
    {
        path:'reactive-form',
        title:"Reactive form",
        component:reactiveForm
    },
    {
        path:'validating-form',
        title:"Validating form",
        component:validatingForm
    },
    {
        path:'',
        title:"Landing page",
        component:landingPage
    }
];
