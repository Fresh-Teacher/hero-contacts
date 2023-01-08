import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardScreen } from './screen/index.screen';

@NgModule({
    declarations: [DashboardScreen],
    imports: [DashboardRoutingModule, CommonModule, SharedModule],
    exports: [],
})
export class DashboardModule {}
