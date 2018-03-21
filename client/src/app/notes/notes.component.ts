import { Component, OnInit } from '@angular/core';

import { NotesService } from '../notes.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(
    public notesService: NotesService,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getNotes();
  }

	getNotes(){
    let getAllNotes = this._httpService.getNotes();
    getAllNotes.subscribe(data => {
      this.notesService.notes = data['notes'];
    });
  }
}
