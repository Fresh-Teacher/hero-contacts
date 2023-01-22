import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ThemeToggler } from './components/theme-toggler/theme-toggler.component';
import { NewtworkManagerDirective } from './directives/network-manager.directive';

@NgModule({
    declarations: [SpinnerComponent, ThemeToggler, NewtworkManagerDirective],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [
        SpinnerComponent,
        ThemeToggler,
        NewtworkManagerDirective,
        ReactiveFormsModule,
    ],
    providers: [],
})
export class SharedModule {}
