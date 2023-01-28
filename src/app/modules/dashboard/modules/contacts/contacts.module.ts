import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { DetailedContactScreen } from './screens/detailed-contact/detailed-contact';
import { ContactsIndexScreen } from './screens/index/index.screen';
import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AddContactPage } from './screens/add/add-contact.page';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './services/contacts.service';

@NgModule({
    declarations: [
        ContactCardComponent,
        ContactsIndexScreen,
        DetailedContactScreen,
        AddContactPage,
    ],
    imports: [
        ContactsRoutingModule,
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
    ],
    exports: [],
})
export class ContactsModule {}
