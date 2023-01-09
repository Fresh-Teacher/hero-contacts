import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardScreen } from './screen/index.screen';
import { LayoutService } from './services/layout.service';

@NgModule({
    declarations: [DashboardScreen, ContactCardComponent],
    imports: [DashboardRoutingModule, CommonModule, SharedModule],
    exports: [],
    providers: [LayoutService],
})
export class DashboardModule {}
