import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DxDataGridModule } from 'devextreme-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { MessagingService } from './service/messaging.service';
import { AsyncPipe } from '../../node_modules/@angular/common';

@NgModule({
  declarations: [AppComponent, UserlistComponent, FileuploadComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    DxDataGridModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    })
    
  ],
  providers: [MessagingService,AsyncPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
