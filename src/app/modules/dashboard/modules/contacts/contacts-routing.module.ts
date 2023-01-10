import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactsIndexScreen } from './screens/index/index.screen';
import { DetailedContactScreen } from './screens/detailed-contact/detailed-contact';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ContactsIndexScreen,
    },
    {
        path: ':id',
        component: DetailedContactScreen,
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContactsRoutingModule {}
