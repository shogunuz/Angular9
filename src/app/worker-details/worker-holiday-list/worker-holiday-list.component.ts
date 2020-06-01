import { Component, OnInit } from '@angular/core';
import {WorkerHolidayService} from "../../shared/worker-holiday.service";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-worker-holiday-list',
  templateUrl: './worker-holiday-list.component.html',
  styleUrls: ['./worker-holiday-list.component.css']
})
export class WorkerHolidayListComponent implements OnInit {

  constructor(public serviceHoliday:WorkerHolidayService) { }

  totalRecordsH: string;
  pageH: number=1;

  ngOnInit(): void {
    this.serviceHoliday.refreshListOfHolidays();
  }

}
