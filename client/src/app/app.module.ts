import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './notes/notes.component';
import { NewComponent } from './new/new.component';
import { NotesService } from './notes.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService, NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
