import { ContactsModule } from './modules/contacts/contacts.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardScreen } from './screen/index.screen';
import { LayoutService } from './services/layout.service';

@NgModule({
    declarations: [DashboardScreen],
    imports: [
        DashboardRoutingModule,
        CommonModule,
        SharedModule,
        ContactsModule,
    ],
    exports: [],
    providers: [LayoutService],
})
export class DashboardModule {}
