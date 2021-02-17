import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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
