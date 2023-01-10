import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ThemeToggler } from './components/theme-toggler/theme-toggler.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [SpinnerComponent, ThemeToggler],
    imports: [CommonModule, MatDialogModule],
    exports: [SpinnerComponent, ThemeToggler, MatDialogModule],
    providers: [],
})
export class SharedModule {}
