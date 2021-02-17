import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.css']
})
export class JobBoardComponent implements OnInit {

  jobBoard: string;
  jobs: any[] = [];

  constructor(private route: ActivatedRoute, private mainService: MainService) { }

  ngOnInit() {
    this.jobBoard = this.route.snapshot.paramMap.get('company');
    if (!_.isEmpty(this.jobBoard)) {
      this.mainService.getJobsByJobSource(this.jobBoard).subscribe(response => {
        if (response && response.data) {
          this.jobs = response.data;
        }
      }, err => {
        console.log(err);
      });
    }
  }

}
