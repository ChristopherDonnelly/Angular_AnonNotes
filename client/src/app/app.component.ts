import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';
import { NotesComponent } from './notes/notes.component';
import { NewComponent } from './new/new.component';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
  	private _httpService: HttpService,
  	public notesService: NotesService
  ){}

  ngOnInit() {
  }
  
}
