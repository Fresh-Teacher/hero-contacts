import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './components/grid-wrapper/card/card.component';
import { GridWrapper } from './components/grid-wrapper/grid-wrapper.component';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
    declarations: [
        SpinnerComponent,
        HeaderComponent,
        CardComponent,
        GridWrapper,
    ],
    imports: [CommonModule],
    exports: [SpinnerComponent, HeaderComponent, CardComponent, GridWrapper],
    providers: [],
})
export class SharedModule {}
