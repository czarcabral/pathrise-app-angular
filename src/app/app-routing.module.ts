import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JobBoardsListComponent } from './job-boards-list/job-boards-list.component';
import { JobBoardComponent } from './job-board/job-board.component';

const routes: Routes = [
  { path: 'home', component: JobBoardsListComponent },
  { path: 'jobBoards/:company', component: JobBoardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
