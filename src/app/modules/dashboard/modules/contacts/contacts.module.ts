import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { DetailedContactScreen } from './screens/detailed-contact/detailed-contact';
import { ContactsIndexScreen } from './screens/index/index.screen';
import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddContactPage } from './screens/add/add-contact.page';

@NgModule({
    declarations: [
        ContactCardComponent,
        ContactsIndexScreen,
        DetailedContactScreen,
        AddContactPage,
    ],
    imports: [ContactsRoutingModule, CommonModule, SharedModule],
    exports: [],
})
export class ContactsModule {}
