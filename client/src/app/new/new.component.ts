import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { HttpService } from '../http.service';
import { NotesService } from '../notes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {
  content: any;
  error: boolean;

  constructor(
    public notesService: NotesService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _httpService: HttpService
  ) { }

  ngOnInit() {

    this.content = {errors: ''}
    this.error = false;
    //this.notesService.clear();

  }

  add(){

    let addNote = this._httpService.createNote(this.notesService.content);
    addNote.subscribe(data => {
      if(data['message'] == 'Error'){
        // console.log(data['error'].errors.name.message)
        this.error = true;
        this.content.errors = data['error'].errors.content.message;
        // console.log(data['error'].name, data['error'].message);
      }else{
        console.log('Created Note with content: '+data['note']);
        console.log('Created Note with content: '+data['note'].content);
        this.content = {errors: ''}
        this.error = false;
        this.notesService.content = '';

        this.notesService.notes.push(data['note']);
        //this._router.navigate(['/home']);
      }
    });
  }

}
