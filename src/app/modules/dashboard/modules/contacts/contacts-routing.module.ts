import { DetailedContactDataResolver } from './resolver/detailed-contact.resolver';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactsIndexScreen } from './screens/index/index.screen';
import { DetailedContactScreen } from './screens/detailed-contact/detailed-contact';
import { ContactFormPage } from './components/form/form.component';
import { ContactFormResolver } from './resolver/contact-form.resolver';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ContactsIndexScreen,
    },
    {
        path: 'details',
        component: ContactFormPage,
        resolve: {
            formData: ContactFormResolver,
        },
    },
    {
        path: 'view',
        component: DetailedContactScreen,
        resolve: {
            contact: DetailedContactDataResolver,
        },
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContactsRoutingModule {}
