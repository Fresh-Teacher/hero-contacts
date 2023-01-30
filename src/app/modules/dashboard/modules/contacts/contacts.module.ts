import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { DetailedContactScreen } from './screens/detailed-contact/detailed-contact';
import { ContactsIndexScreen } from './screens/index/index.screen';
import { ContactsRoutingModule } from './contacts-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ContactFormPage } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ContactCardComponent,
        ContactsIndexScreen,
        DetailedContactScreen,
        ContactFormPage,
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
