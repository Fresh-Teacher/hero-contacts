import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardScreen } from './screen/index.screen';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: DashboardScreen,
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
