import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MainContentComponent } from './main-content/main-content.component';
import { InputFormComponent } from './input-form/input-form.component';
import { ToDoColumnComponent } from './to-do-column/to-do-column.component';
import {FormsModule, ReactiveFormsModule}  from '@angular/forms';
import { CommService } from './comm.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    TopMenuComponent,
    MainContentComponent,
    InputFormComponent,
    ToDoColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [CommService],
  bootstrap: [AppComponent]
})
export class AppModule { }
