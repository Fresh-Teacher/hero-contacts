import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ThemeToggler } from './components/theme-toggler/theme-toggler.component';
import { NewtworkManagerDirective } from './directives/network-manager.directive';
import { UserForm } from './form/form.component';

@NgModule({
    declarations: [
        SpinnerComponent,
        ThemeToggler,
        NewtworkManagerDirective,
        UserForm,
    ],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [
        SpinnerComponent,
        ThemeToggler,
        NewtworkManagerDirective,
        UserForm,
        ReactiveFormsModule,
    ],
    providers: [],
})
export class SharedModule {}
