import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { LogInterceptor } from './modules/shared/interceptors/request.interceptor';
import { NetworkManagerService } from './services/network-manager.service';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        StoreModule.forRoot(),
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: true,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000',
        }),
        ToastContainerModule,
        ToastrModule.forRoot({
            timeOut: 5000,
            progressBar: true,
            progressAnimation: 'increasing',
            titleClass: 'font-heading',
            positionClass: 'toast-bottom-right',
        }),
    ],
    providers: [
        NetworkManagerService,
        { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    // Created a instance of Network Management on overall Application
    constructor(private _network: NetworkManagerService) {}
}
