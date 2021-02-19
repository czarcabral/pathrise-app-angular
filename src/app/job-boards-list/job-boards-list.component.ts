import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-job-boards-list',
  templateUrl: './job-boards-list.component.html',
  styleUrls: ['./job-boards-list.component.css', '../app.component.css']
})
export class JobBoardsListComponent implements OnInit {

  jobBoards: any[] = [];
  loading = false;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.loading = true;
    this.mainService.getJobBoards().pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe(response => {
      if (response.data) {
        this.jobBoards = response.data;
      }
    }, err => {
      console.log(err);
    });
  }

}
