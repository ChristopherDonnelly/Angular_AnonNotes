import { NgModule } from '@angular/core';
import { NewComponent } from './new/new.component';
import { NotesComponent } from './notes/notes.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: NotesComponent },
  { path: 'new', component: NewComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
