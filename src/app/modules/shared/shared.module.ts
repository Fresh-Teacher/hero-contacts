import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
    declarations: [SpinnerComponent, HeaderComponent],
    imports: [CommonModule],
    exports: [SpinnerComponent, HeaderComponent],
    providers: [],
})
export class SharedModule {}
