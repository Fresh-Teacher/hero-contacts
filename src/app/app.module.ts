import { environment } from './../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { LogInterceptor } from './modules/shared/interceptors/request.interceptor';
import { NetworkManagerService } from './services/network-manager.service';
import { SharedModule } from './modules/shared/shared.module';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideAuth, getAuth, GoogleAuthProvider } from '@angular/fire/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AuthService } from './modules/auth/services/auth.service';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideDatabase(() => getDatabase()),
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
        AuthService,
        GoogleAuthProvider,
        { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true },
        { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    // Created a instance of Network Management on overall Application
    constructor(private _network: NetworkManagerService) {}
}
