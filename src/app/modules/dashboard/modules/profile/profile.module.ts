import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import { IndexProfileScreen } from './screen/index.screen';

@NgModule({
    declarations: [IndexProfileScreen],
    imports: [CommonModule, ProfileRoutingModule],
    exports: [],
})
export class ProfileModule {}
