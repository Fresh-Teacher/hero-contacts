import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { IndexProfileScreen } from './screen/index.screen';

@NgModule({
    declarations: [IndexProfileScreen],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        ReactiveFormsModule,
        SharedModule,
    ],
    exports: [],
})
export class ProfileModule {}
