import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-job-boards-list',
  templateUrl: './job-boards-list.component.html',
  styleUrls: ['./job-boards-list.component.css']
})
export class JobBoardsListComponent implements OnInit {

  jobBoards: any[] = [];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getJobBoards().subscribe(response => {
      if (response.data) {
        this.jobBoards = response.data;
      }
    }, err => {
      console.log(err);
    });
  }

}
