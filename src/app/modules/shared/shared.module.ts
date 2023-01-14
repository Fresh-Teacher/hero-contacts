import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ThemeToggler } from './components/theme-toggler/theme-toggler.component';
import { NewtworkManagerDirective } from './directives/network-manager.directive';

@NgModule({
    declarations: [SpinnerComponent, ThemeToggler, NewtworkManagerDirective],
    imports: [CommonModule],
    exports: [SpinnerComponent, ThemeToggler, NewtworkManagerDirective],
    providers: [],
})
export class SharedModule {}
