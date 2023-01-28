import { DetailedContactDataResolver } from './resolver/detailed-contact.resolver';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactsIndexScreen } from './screens/index/index.screen';
import { DetailedContactScreen } from './screens/detailed-contact/detailed-contact';
import { AddContactPage } from './screens/add/add-contact.page';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ContactsIndexScreen,
    },
    {
        path: 'add',
        component: AddContactPage,
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
