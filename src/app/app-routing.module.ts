import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    redirectLoggedInTo,
    redirectUnauthorizedTo,
    canActivate,
} from '@angular/fire/auth-guard';
import { AuthService } from './modules/auth/services/auth.service';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./modules/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./modules/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
            ),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('./modules/error/error.module').then((m) => m.ErrorModule),
    },
    {
        path: '**',
        redirectTo: 'error',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthService],
})
export class AppRoutingModule {}
