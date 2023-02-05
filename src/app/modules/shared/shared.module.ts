import { MessageComponent } from './components/message/message.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThemeToggler } from './components/theme-toggler/theme-toggler.component';
import { NewtworkManagerDirective } from './directives/network-manager.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
    declarations: [
        ThemeToggler,
        NewtworkManagerDirective,
        MessageComponent,
        CapitalizePipe,
    ],
    imports: [CommonModule],
    exports: [
        ThemeToggler,
        NewtworkManagerDirective,

        MessageComponent,
        CapitalizePipe,
    ],
    providers: [],
})
export class SharedModule {}
