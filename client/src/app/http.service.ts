import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient){
    this.getNotes();
  }

  getNotes(){
    return this._http.get('/notes');
  }

  createNote(content){
    return this._http.post('/notes', { "content": content });
  }

}
