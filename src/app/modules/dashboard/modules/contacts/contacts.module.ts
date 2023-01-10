import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { DetailedContactScreen } from './screens/detailed-contact/detailed-contact';
import { ContactsIndexScreen } from './screens/index/index.screen';
import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
    declarations: [
        ContactCardComponent,
        ContactsIndexScreen,
        DetailedContactScreen,
    ],
    imports: [ContactsRoutingModule, CommonModule],
    exports: [],
})
export class ContactsModule {}
