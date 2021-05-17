import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './tools/material.module';
import { APP_BASE_HREF } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { QueueComponent } from './queue/queue.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddQueueComponent } from './components/add-queue/add-queue.component';
import { FormsModule } from '@angular/forms';
import { PrintQueueComponent } from './components/print-queue/print-queue.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QueueComponent,
    AddQueueComponent,
    PrintQueueComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
