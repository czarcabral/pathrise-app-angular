import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { JobBoardsListComponent } from './job-boards-list/job-boards-list.component';
import { JobBoardComponent } from './job-board/job-board.component';

@NgModule({
  declarations: [
    AppComponent,
      JobBoardsListComponent,
      JobBoardComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
