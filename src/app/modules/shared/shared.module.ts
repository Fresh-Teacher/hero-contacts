import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ThemeToggler } from './components/theme-toggler/theme-toggler.component';

@NgModule({
    declarations: [SpinnerComponent, ThemeToggler],
    imports: [CommonModule],
    exports: [SpinnerComponent, ThemeToggler],
    providers: [],
})
export class SharedModule {}
