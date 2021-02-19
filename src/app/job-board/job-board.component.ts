import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';
import * as _ from 'lodash';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.css', '../app.component.css']
})
export class JobBoardComponent implements OnInit {

  jobBoard: string;
  jobs: any[] = [];

  loading = false;

  constructor(private route: ActivatedRoute, private mainService: MainService) { }

  ngOnInit() {
    this.jobBoard = this.route.snapshot.paramMap.get('company');
    if (!_.isEmpty(this.jobBoard)) {
      this.loading = true;
      this.mainService.getJobsByJobSource(this.jobBoard).pipe(
        finalize(() => {
          this.loading = false;
        })
      ).subscribe(response => {
        if (response && response.data) {
          this.jobs = response.data;
        }
      }, err => {
        console.log(err);
      });
    }
  }

  openInNewTab(url: string) {
    window.open(url, "_blank");
  }

}
