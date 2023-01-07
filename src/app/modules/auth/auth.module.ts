import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { IndexComponent } from './screen/index.component';

@NgModule({
    declarations: [IndexComponent],
    imports: [CommonModule, AuthRoutingModule, SharedModule],
    exports: [],
    providers: [],
})
export class AuthModule {}
