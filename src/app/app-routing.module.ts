import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { ErrorModule } from './modules/error/error.module';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: (): Promise<AuthModule> =>
            import('./modules/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'error',
        loadChildren: (): Promise<ErrorModule> =>
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
})
export class AppRoutingModule {}
