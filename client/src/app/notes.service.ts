import { Injectable } from '@angular/core';

@Injectable()
export class NotesService {

  content = '';
  id = '';
  notes = [];
  constructor() { }

  clear(){
    this.content = '';
    this.id = '';
    this.notes.length = 0;
  }
}
