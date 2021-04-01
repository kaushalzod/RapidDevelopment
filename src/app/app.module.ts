import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PickerModule } from '@ctrl/ngx-emoji-mart'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageWindowComponent } from './message-window/message-window.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MessageWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PickerModule,
    FormsModule,ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
