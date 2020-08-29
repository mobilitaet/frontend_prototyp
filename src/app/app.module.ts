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

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
